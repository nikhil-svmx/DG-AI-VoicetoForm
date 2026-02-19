import 'dotenv/config';
import fetch from 'node-fetch';
import { performance } from 'node:perf_hooks';
 
 
function timer(label) {
  const start = performance.now();
  return () => {
    const ms = performance.now() - start;
    console.log(`${label}: ${ms.toFixed(1)} ms`);
    return ms;
  };
}

 
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
        } catch {}
      }
    }
  }
  return null;
}


export async function callOpenAI({ system, user, temperature = 0 }) {
  console.log("In call");
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || 'gpt-4o';
 
  const stopApi = timer('OpenAI API round-trip');
  console.log("OPEN AI API Present? "+ !!apiKey);
 
  const res = await fetch('https://api.openai.com/v1/responses', {
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
 
  const data = await res.json();
  stopApi();
 
  const text =
    data?.output?.[0]?.content?.[0]?.text ?? '';
 
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

    Understand and analyze whole instruction before marking any field as CONFLICT.
    
    ----------------------------------------
    IMPORTANT: Conflict is VALUE-DRIVEN
    ----------------------------------------
    
    Conflict exists ONLY if:
    
    1. The user provides a specific value.
    2. Multiple catalog fields could accept that value type.
    3. The user does NOT clearly specify which field it belongs to anywhere in the whole instruction.
    4. Assigning the value to one would logically prevent assigning it to another.

    
    If the user clearly specifies the target field,
    then it is NOT a conflict — even if similar fields exist.

    CONFLICT DOESNOT EXIST IF:
    - All resembling fields are not conflicts every time.
    - The user mentioned that the value is same as another field by using *Same as that _field* , *Same*, *Refer to that _field* etc. 
    so in that cases the user is clearly instructing the correct mapping. 
    So, it will not be a conflict.

    
    DO NOT:
    - Compare field names in isolation.
    - Mark conflict due to word similarity.
    - Assume conflict unless a VALUE is competing.

    -------------------------------------------
    Only mark conflict if multiple candidate fields belong to the same entity level and compete for the same value.
    Before marking as conflicting understand the sentence mentioned clearly.

    -------------------------------------------
    REPEATED GROUP RULE (VERY IMPORTANT)
    -------------------------------------------
    If field names follow an indexed pattern (e.g., name, name-2, name-3):
    
    - These represent repeated entity groups.
    - They are NOT conflicting fields.
    - Values must be mapped in the order entities appear in the user instruction.
    - DO NOT mark them as conflicting if mentioned sequentilly under same group after starting the instruction.

    -------------------------------------------
    - JSON KEYS always come from the survey JSON **question.name** in the same case. Donot change the case of the keys.
    - JSON VALUES always come from the **users instruction**.
    - NEVER derive keys from user language.
    - NEVER derive values from survey labels or titles.

    If the user provides multiple values in one sentence:
    - Split and map them ONLY to matching catalog fields.
    - Try to understand the whole instruction and map the fields correctly.
    ----------------------------------------
    PROCESS:
    ----------------------------------------
    
    STEP 1:
    Extract explicit values from the instruction
    (dates, phone numbers, emails, numeric values, identifiers, etc.)
    
    STEP 2:
    For each extracted value:
    Identify all catalog fields that could logically accept it
    based on type and meaning.
    
    STEP 3:
    If more than one candidate field exists
    AND user did not clearly scope it → mark as conflict.

    STEP 4:
    Output only the fields that satisfy sonflicting rules in the format specified below.

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
    - Set the specified "name" to the provided "value" EXACTLY AS-IS.
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
    (unchanged from your original: checkbox, radiogroup, boolean, date, etc.)

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

