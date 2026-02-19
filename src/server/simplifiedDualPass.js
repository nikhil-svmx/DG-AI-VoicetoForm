import 'dotenv/config';
import fetch from 'node-fetch';

import { first, eighth, second, third, fourth, fifth, sixth, seventh, ninth} from './testForms.js';
import { eightInst, firstInst, secondInst, fourthInst,thirdInst, fifthInst } from './instructions.js';
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
 
 
async function callOpenAI({ system, user, temperature = 0 }) {
  console.log("In call");
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || 'gpt-4o';
 
  const stopApi = timer('OpenAI API round-trip');
  console.log("OPEN AI API Present? "+ apiKey.length);
 
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

    - All resembling fields are not conflicts every time.
    If the user clearly specifies the target field,
    then it is NOT a conflict — even if similar fields exist.
    
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
    Output only the fields that satisfy conflicting rules in the format specified below.

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

  
  function buildFinalPrompt(catalog, analysis, instruction) {
    return `
      You are a proficient FORM ASSISTANT and CONFLICT ANALYZER. Convert the user's natural-language instruction into SurveyJS answers JSON by resolving conflicts from the analysis provided.
      TASK:
      Generate SurveyJS answers JSON using the analysis result.
      
      ========================
      STRICT OUTPUT RULES
      ========================
      - JSON KEYS always come from the survey JSON **question.name** in the same case. Donot change the case of the keys.
      - JSON VALUES always come from the **users instruction**.
      - NEVER derive keys from user language.
      - NEVER derive values from survey labels or titles.
      - NEVER invent keys, fields, or structure.
      - Omit any field that is not explicitly mentioned or confidently inferable.
      - Omit the keys if the name is present in final conflicting array.

      OUTPUT RULES
      1. Output **ONLY ONE valid JSON object**.
        - No prose
        - No explanations
        - No markdown
        - No extra characters
      
      2. JSON keys MUST:
        - Match **exactly** the name fields from the catalog.
        - Preserve case and spelling.
        - NEVER be renamed, merged, or invented.
      
      3. If a key does not exist in the catalog  → **DO NOT OUTPUT IT**. 
      - If a value cannot be confidently inferred → **OMIT THE FIELD**.
      - Output **ONLY one JSON object** and NOTHING else (no prose, no code fences).
      - Keys must be exact question **name**s from the catalog. Do not assume the field names and donot change the names.
      - If the label **"None of the above"** is selected for a checkbox question, include **only** that value (exclude other options for that question).
      - Omit fields not mentioned. Do not invent keys or values.
      - Use label variants/synonyms to map to stored values.
      - Omit Conflicting fields.

      4. Analysis provided to you is an array of possible conflicting fields in the json according to the user instruction.
      If conflict is proved, then OMIT the field from OUTPUT answer json.
      Fields that are present in final conflicting array should not be in the output json. 
      
      ========================
      REPEATED GROUP ORDERING (FORM-AGNOSTIC)
      ========================
      - Repeated groups (name, name-2, name-3) are NOT conflicts when values are given in sequence. 
      If a value is out-of-sequence and unscoped, mark it as conflict.
      - NEVER skip, reorder, or create groups beyond those present in the schema.
      
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
        - Output true / false ONLY
        - Infer strictly from language:
          ("no", "not", "never" → false)
          ("yes", "has", "was", "did" → true)
      - text / comment:
        - Output ONLY the literal extracted value
        - Do NOT summarize or rephrase
      - date:
        - YYYY-MM-DD
      - If the user provides multiple values in one sentence:
        - Split and map them ONLY to matching catalog fields
        - Do NOT merge values into a single field.
        - For the fields with multiple text
    
      IMPORTANT:
      - This must work GENERICALLY for ANY form and ANY domain.
      - Do NOT hardcode any concept names.
      
      ========================
      CRITICAL PROHIBITIONS
      ========================
      - You are NOT allowed to assign a value to any field
        until ALL candidate fields for the same base concept
        have been evaluated.
      - NEVER use "first match wins".
      - NEVER silently resolve ambiguity.
      - NEVER downgrade a conflict into an answer.

      ========================
      CATALOG (SOURCE OF TRUTH)
      ========================
      Question catalog (names, types, titles, choices, units, structure):
      <The catalog JSON is provided by the driver code and must be treated as authoritative>

      
      ANALYSIS:
      ${JSON.stringify(analysis, null, 2)}
      
      CATALOG:
      ${JSON.stringify(catalog, null, 2)}

      INSTRUCTION
      ${instruction}
    `;
  }
 
 
export async function runner(instruction, surveyJSON) {
  const stopTotal = timer('Total pipeline time');

  console.log("Before call");
  const analysis = await callOpenAI({
    system: buildAnalysisPrompt(surveyJSON, instruction),
    user: instruction,
    temperature: 0
  });
  console.log("Outside call");
 
  console.log('\nPASS 1 ANALYSIS:\n', JSON.stringify(analysis, null, 2));
 
  const finalResult = await callOpenAI({
    system: buildFinalPrompt(surveyJSON, analysis, instruction),
    user: instruction,
    temperature: 0
  });
 
  console.log('\nFINAL OUTPUT:\n');
  console.log(JSON.stringify(finalResult, null, 2));
 
  stopTotal();

  return finalResult;
}