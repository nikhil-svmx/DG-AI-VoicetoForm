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

export function buildAnalysisPrompt(catalog, instruction, today) {
  return `
    You are PASS-1: CONFLICT DETECTION ENGINE.
    
    Your responsibility is ONLY to detect TRUE value conflicts.
    You must NEVER resolve, choose, guess, or prefer a field.
    
    -------------------------------------------------
    CORE PRINCIPLE: CONFLICT IS VALUE-DRIVEN
    -------------------------------------------------
    A conflict exists ONLY if ALL conditions below are true:
    
    1. The user provides an explicit VALUE.
    2. More than one catalog field could logically accept that SAME value.
    3. The user does NOT clearly specify the target field anywhere in the full instruction.
    4. Assigning the value to one field would logically prevent assigning it to the other.
    5. The competing fields belong to the SAME entity level.
    6. If only ONE field semantically matches → NOT a conflict.
    
    -------------------------------------------------
    SEMANTIC PRIORITY RULE (CRITICAL)
    -------------------------------------------------
    - Context and sentence meaning ALWAYS override data type.
    - Multiple fields sharing the same type (e.g., date) does NOT imply conflict.
    - A value is NOT a conflict if surrounding language clearly aligns with ONE field only.
    
    Date values MUST NOT be marked as conflicting unless:
    - The sentence could reasonably refer to multiple date fields.
    
    -------------------------------------------------
    CONVERSATIONAL NOISE FILTER
    -------------------------------------------------
    Ignore completely:
    - Greetings, fillers, apologies, emotions
    - Thinking aloud, explanations, opinions
    - Meta commentary or unrelated narrative
    
    Extract values ONLY when the sentence context maps to the catalog.
    
    -------------------------------------------------
    REPEATED GROUP RULE (VERY IMPORTANT)
    -------------------------------------------------
    If question names follow an indexed pattern:
    (e.g., name, name-2, name-3)
    
    - They represent repeated entity groups.
    - They are NEVER conflicting fields.
    - Values map sequentially in the order entities appear.
    - Do NOT mark conflict when values are provided sequentially.
    
    -------------------------------------------------
    DEFERRED ANSWER AWARENESS
    -------------------------------------------------
    Some questions have multiple logical parts (problem + action).
    If only part of a question is answered:
    - Treat it as PARTIALLY ANSWERED.
    - Do NOT mark conflict.
    - Expect completion later in the instruction.
    
    -------------------------------------------------
    PROCESS (STRICT ORDER)
    -------------------------------------------------
    STEP 0:
    Read the ENTIRE instruction first. Do NOT analyze sentence-by-sentence in isolation.
    
    STEP 1:
    Extract explicit literal values only
    (dates, numbers, identifiers, emails, phone numbers, text answers).
    
    STEP 2:
    For EACH extracted value:
    Identify all catalog fields that could logically accept it
    based on BOTH type AND meaning.
    
    STEP 3:
    Mark conflict ONLY if:
    - More than one candidate exists
    - AND semantic context does NOT narrow it to one field
    
    -------------------------------------------------
    OUTPUT FORMAT (JSON ONLY)
    -------------------------------------------------
    If conflicts exist:
    
    {
      "<value_id>": {
        "value": "<literal value from user>",
        "candidates": [
          { "name": "<question.name>", "title": "<question.title>" }
        ],
        "reason": "<clear explanation of why ambiguity exists>"
      }
    }
    
    - <value_id> must be a stable unique identifier per value.
    - Preserve original wording.
    - Do NOT invent values or keys.
    
    If NO conflicts exist, return {}.
    
    -------------------------------------------------
    CATALOG:
    ${JSON.stringify(catalog, null, 2)}
    
    USER INSTRUCTION:
    ${instruction}
    
    TODAY:
    ${today}
  `;
}
 

export function buildFinalPrompt(catalog, analysis, instruction, resolutions, today) {
  return `
    You are a FORM ASSISTANT converting human conversation into SurveyJS answers.
    
    You must respect detected conflicts and user resolutions.
    You must NEVER guess or silently resolve ambiguity.
    
    =================================================
    STRICT OUTPUT RULES
    =================================================
    - Output exactly ONE plain JSON object.
    - JSON KEYS must exactly match catalog question.name (case preserved).
    - JSON VALUES must come literally from the user instruction.
    - Omit fields not mentioned.
    - Omit unresolved conflicting fields.
    - Do NOT output prose, markdown, or explanations.
    - Capitalize the sentence first word.
    
    =================================================
    USER RESOLUTIONS (LOCKED)
    =================================================
    The user has explicitly resolved some conflicts.
    
    For each resolution:
    - Set ONLY the specified question.name to the given value.
    - Use the value EXACTLY as provided.
    - Do NOT normalize, rephrase, or reuse the value elsewhere.
    - Do NOT treat these as conflicts.
    
    RESOLUTIONS:
    ${JSON.stringify(resolutions ?? [], null, 2)}
    
    =================================================
    REPEATED GROUP ORDERING
    =================================================
    - Indexed fields (name, name-2, name-3) are repeated groups.
    - Map values sequentially as they appear.
    - Never skip, reorder, or create new groups.
    
    =================================================
    DEFERRED ANSWER MERGING
    =================================================
    If the same question.name receives multiple partial answers:
    - Merge them in the order mentioned.
    - Preserve original wording.
    - Do NOT summarize or reinterpret.
    
    =================================================
    SPLIT vs MERGE DECISION RULE
    =================================================
    MERGE values when:
    - They belong to the SAME question.name
    - They represent different parts of one logical answer
    - The field type is text or comment
    
    SPLIT values when:
    - They map to DIFFERENT question.name
    - They represent different entities, identifiers, dates, or choices
    
    NEVER merge across different question.name.
    
    =================================================
    TYPE RULES
    =================================================
    checkbox:
    - Output ARRAY of choices[].value ONLY
    - NEVER output labels
    - If "None of the above" is selected, return ONLY that value
    
    radiogroup / dropdown:
    - Output ONLY choices[].value
    
    boolean:
    - Output true / false ONLY
    - Infer strictly from language
      ("no", "not", "never" → false)
      ("yes", "has", "was", "did" → true)
    
    text / comment:
    - Output literal extracted value only
    - Preserve wording
    
    date:
    - Use YYYY-MM-DD format
    - Compute relative dates using TODAY = ${today}
    - Do NOT guess ambiguous dates
    
    =================================================
    CRITICAL PROHIBITIONS
    =================================================
    - Never silently resolve ambiguity.
    - Never override user resolutions.
    - Never invent keys or values.
    - Never output unresolved conflicts.
    
    =================================================
    ANALYSIS (CONFLICTS ONLY):
    ${JSON.stringify(analysis, null, 2)}
    
    CATALOG:
    ${JSON.stringify(catalog, null, 2)}
    
    USER INSTRUCTION:
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