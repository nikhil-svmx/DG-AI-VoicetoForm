import 'dotenv/config';
import { performance } from 'node:perf_hooks';

function timer(label) {
  const start = performance.now();
  return () => {
    const ms = performance.now() - start;
    console.log(`${label}: ${ms.toFixed(1)} ms`);
    return ms;
  };
}

function todayIST(){
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return fmt.format(new Date()); 
}

const today = todayIST();

function extractFirstJsonObject(text) {
  if (typeof text !== 'string') return null;
  const start = text.indexOf('{');
  if (start < 0) return null;
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    if (text[i] === '{') depth++;
    else if (text[i] === '}') {
      depth--;
      if (depth === 0) {
        try {
          return JSON.parse(text.slice(start, i + 1));
        } catch { /* ignore parse errors and continue */ }
      }
    }
  }
  return null;
}

export async function callOpenAI({ system, user, temperature = 0 }) {
  console.log("In call");
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || 'gpt-4o'; // adjust if you use another model

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY not set");
  }

  const stopApi = timer('OpenAI API round-trip');
  console.log("OPEN AI API Present? " + !!apiKey);

  const resp = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      instructions: system,
      input: user,
      temperature
    })
  });

  const raw = await resp.text();
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    stopApi();
    throw new Error(`OpenAI returned non-JSON: ${raw.slice(0, 500)}`);
  }

  if (!resp.ok) {
    stopApi();
    const msg = data?.error?.message || JSON.stringify(data);
    throw new Error(`OpenAI error ${resp.status}: ${msg}`);
  }

  stopApi();

  const text = data?.output?.[0]?.content?.[0]?.text ?? '';

  try {
    return JSON.parse(text);
  } catch {
    return extractFirstJsonObject(text) || {};
  }
}

export function buildAnalysisPrompt(catalog, instruction) {
  return `
    You are PASS-1: CONFLICT DETECTION ENGINE.
    
    Your task:
    Determine whether any VALUE provided in the user instruction
    could belong to multiple catalog fields without clear specification.

    Understand and analyze whole instruction as human before marking any field as CONFLICT.
    Neglect unrelated instructions. Concentrate only if the context matches to the form provided by catelog.
    ----------------------------------------
    IMPORTANT: Conflict is VALUE-DRIVEN
    ----------------------------------------
    
    Conflict exists ONLY if all of the following conditions are true (AND Case):
    
    1. The user provides a specific value.
    2. The user does NOT clearly specify which field it belongs to anywhere in the whole instruction.
    3. Assigning the value to one would logically prevent assigning it to another. 
    4. Mark conflicts ONLY when a concrete value competes across multiple fields at the same entity level without explicit user scoping.

    CONFLICT DOESNOT EXIST IF any one of the following conditions are true. (OR Case):
    1. All resembling fields are not conflicts every time.
    2. The user mentioned that the value is same as another field by using *Same as that _field* , *Same*, *Refer to that _field* etc. 
    3. Only if one field is matching the value provided in user instruction.
    4. If the user clearly specifies the target field, then it is NOT a conflict — even if similar fields exist.
    5. Repeated groups with index patterns (e.g., name, name-2, name-3) are not conflicts; map in sequence, do not reorder.

    DO NOT:
    - Compare field names in isolation.
    - Mark conflict due to word similarity.
    - Assume conflict unless a VALUE is competing.

    -------------------------------------------
    - JSON KEYS always come from the survey JSON **question.name** in the same case. Donot change the case of the keys.
    - JSON VALUES always come from the **users instruction**.
    - NEVER derive keys from user language.
    - NEVER derive values from survey labels or titles.

    - Today's date is ${today}. If user instruction mentiones next friday or last wednesday or any other terms, compute them relative to TODAY'S DATE in YYYY-MM-DD format.
        - Format is YYYY-MM-DD.

    If the user provides multiple values in one sentence:
    - Split and map them ONLY to matching catalog fields.
    - Try to understand the whole instruction and map the fields correctly.

    ----------------------------------------
    OUTPUT FORMAT (JSON ONLY)
    ----------------------------------------
    
    {
      "<value_identifier>": {
        "value": "<literal value>",
        "candidates": [
          { "name": "<question.name>", "title": "<question.title>" }
        ],
        "reason": "<clear explanation>"
      }
    }
    
    If no conflicts exist, return {}.
    ------------------------------------------
    
    CATALOG:
    ${JSON.stringify(catalog, null, 2)}
    
    USER INSTRUCTION:
    ${instruction}
  `;
}

function buildFinalPrompt(catalog, analysis, instruction, resolutions) {
  return `
    You are a proficient FORM ASSISTANT and CONFLICT ANALYZER.
    Convert the user's natural-language instruction into SurveyJS answers JSON
    by resolving conflicts from the analysis and honoring any user resolutions.

    ========================
    STRICT OUTPUT RULES
    ========================
    - JSON KEYS must be the exact question.name from catalog (case preserved).
    - JSON VALUES must come from user's instruction (literal) unless the user
      has directly resolved a conflict. If resolved, use EXACT value & field.
    - Do NOT invent keys or values. Omit fields not mentioned.
    - Omit any keys that are still conflicting (and unresolved).
    - Output exactly ONE plain JSON object, no prose, no markdown.

    ========================
    USER RESOLUTIONS (LOCKED)
    ========================
    The user has resolved some conflicts. For each entry below:
    - Set the specified "name" to the provided "value" EXACTLY AS-IS. If type is not compatible, follow TYPE RULES section and modify the type.
    - Do not alter, normalize, or remap these values.
    - Do not omit these keys as conflicts; they are resolved.
    - Do not assign these values to any other field.

    RESOLUTIONS:
    ${JSON.stringify(resolutions ?? [], null, 2)}

    ========================
    REPEATED GROUP ORDERING
    ========================
    - Repeated groups (name, name-2, name-3) are not conflicts when values are
      given in sequence. Never skip, reorder, or create new groups.

    ========================
    TYPE RULES
    ========================
      - checkbox:
        - Output an ARRAY of stored values from choices[].value
        - Use label synonyms to map user words → stored values
        - If "None of the above" is selected, return ONLY that value
      - radiogroup / dropdown:
        - Output the stored value (choices[].value) ONLY
      - boolean:
        - Output true / false ONLY when the user explicitly answers the question
          OR clearly describes behavior in the SAME scenario the question asks about.
      - text / comment:
        - Output ONLY the literal extracted value
        - Do NOT summarize or rephrase
      - date:
        - Today's date is ${today}. If user instruction mentiones next friday or last wednesday or any other terms, compute them relative to TODAY'S DATE in YYYY-MM-DD format.
        - Format is YYYY-MM-DD.
        
      - If the user provides multiple values in one sentence:
        - Split and map them ONLY to matching catalog fields
        - Do NOT merge values into a single field.
        - For the fields with multiple text
    ========================
    CRITICAL PROHIBITIONS
    ========================
    - Never silently resolve unaddressed ambiguities.
    - Never override user resolutions.
    - Never output any key not present in the catalog.

    ANALYSIS:
    ${JSON.stringify(analysis, null, 2)}

    CATALOG:
    ${JSON.stringify(catalog, null, 2)}

    INSTRUCTION:
    ${instruction}
  `;
}

export async function runner(instruction, surveyJSON, resolutions = []) {
  const stopTotal = timer('Total pipeline time');

  const analysis = await callOpenAI({
    system: buildAnalysisPrompt(surveyJSON, instruction),
    user: instruction,
    temperature: 0
  });

  const finalResult = await callOpenAI({
    system: buildFinalPrompt(surveyJSON, analysis, instruction, resolutions),
    user: instruction,
    temperature: 0
  });

  const locked = {};
  for (const r of (resolutions || [])) {
    if (r?.name) locked[r.name] = r.value;
  }

  const merged = { ...finalResult, ...locked };

  stopTotal();
  return { answers: merged, conflicts: analysis };
}