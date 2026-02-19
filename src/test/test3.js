import 'dotenv/config';
import fetch from 'node-fetch';
import { buildCatalog } from './buildCatalog.js';
import { ConditionRunner } from 'survey-core';
import { first, eighth, second, third, fourth, fifth, sixth, seventh, ninth} from '../configs/testForms.js';
import { eightInst, firstInst, secondInst, fourthInst,thirdInst, fifthInst } from '../configs/instructions.js';
import { performance } from 'node:perf_hooks';
import { technicionForm } from '../configs/forms.js';
 
/* ---------------- TIMING ---------------- */
 
function timer(label) {
  const start = performance.now();
  return () => {
    const ms = performance.now() - start;
    console.log(`${label}: ${ms.toFixed(1)} ms`);
    return ms;
  };
}
 
/* ---------------- JSON EXTRACTION ---------------- */
 
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
 
/* ---------------- OPENAI CALL ---------------- */
 
async function callOpenAI({ system, user, temperature = 0 }) {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
 
  const stopApi = timer('OpenAI API round-trip');
 
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
 
/* ============================================================
   PASS 1 — ANALYSIS (NO ANSWERS, NO COMMIT)
   ============================================================ */
function buildAnalysisPrompt(catalog, instruction) {
  return `
    You are PASS-1: CONFLICT DETECTION ENGINE.
    
    Your task:
    Determine whether any VALUE provided in the user instruction
    could belong to multiple catalog fields without clear specification.
    
    ----------------------------------------
    IMPORTANT: Conflict is VALUE-DRIVEN
    ----------------------------------------
    
    Conflict exists ONLY if:
    
    1. The user provides a specific value.
    2. Multiple catalog fields could accept that value type.
    3. The user does NOT clearly specify which field it belongs to.
    4. Assigning the value to one would logically prevent assigning it to another.
    
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
    If fields follow an indexed pattern (e.g., name, name-2, name-3):
    
    - These represent repeated entity groups.
    - They are NOT conflicting fields.
    - Values must be mapped in the order entities appear in the user instruction.
    - DO NOT mark them as conflicting if mentioned sequentilly under same group after starting the instruction.

    -------------------------------------------
    - JSON KEYS always come from the survey JSON **question.name** in the same case. Donot change the case of the keys.
    - JSON VALUES always come from the **users instruction**.
    - NEVER derive keys from user language.
    - NEVER derive values from survey labels or titles.
    - Must follow REMOVING CONFLICTS section clearly.

    
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

    REMEMBER - User can actually mention a value indirectly using : *same as that* , *like* , *equals* etc. In that case it should not be a conflict. Assign the value as mentioned 
    
    
    ----------------------------------------
    OUTPUT FORMAT (JSON ONLY)
    ----------------------------------------
    
    {
      "<value_identifier>": {
        "value": "<literal value>",
        "candidates": [
          { "name": "<question.name>", "title": "<question.title>" }
        ],
        "conflicting": true | false,
        "reason": "<clear explanation>"
      }
    }
    
    If no conflicts exist, return {}.
    ----------------------------------------
    
    CATALOG:
    ${JSON.stringify(catalog, null, 2)}
    
    USER INSTRUCTION:
    ${instruction}
    `;
}


  
  /* ============================================================
    PASS 2 — FINAL EMISSION (STRICT SurveyJS JSON)
    ============================================================ */
  
function buildFinalPrompt(catalog, analysis) {
    return `
      You are a FORM ASSISTANT.
      
      TASK:
      Generate SurveyJS answers JSON using the analysis result.
      
      RULES:
      - If ambiguous === true → DO NOT assign answers
      - Emit conflict instead
      - Keys MUST come ONLY from question.name
      - Values MUST come ONLY from instruction
      - Output ONE JSON object ONLY
      
      You are a form assistant. Convert the user's natural-language instruction into SurveyJS answers JSON.
      
      ========================
      STRICT OUTPUT RULES
      ========================
      - JSON KEYS must ALWAYS come from the survey JSON question.name (exact case).
      - JSON VALUES must ALWAYS come ONLY from the user's instruction.
      - NEVER derive keys from user language.
      - NEVER derive values from survey labels or titles.
      - NEVER invent keys, fields, or structure.
      - Omit any field that is not explicitly mentioned or confidently inferable.
      
      ========================
      OUTPUT MODES
      ========================
      DRAFT MODE (default):
      Return exactly ONE JSON object with:
      {
        "answers": { ...SurveyJS-compatible partial answers... },
        "conflicts": [ ...conflict items... ]
      }
      
      FINAL MODE (only when explicitly instructed "finalize" OR when there are NO conflicts):
      Return exactly ONE JSON object with ONLY SurveyJS answers.
      NO extra keys.
      NO conflicts array.

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
      
      ========================
      REPEATED GROUP ORDERING (FORM-AGNOSTIC)
      ========================
      When repeated groups exist (e.g., name, name-2, name-3):
      - Map entities STRICTLY in the order they appear in the user's text.
      - 1st entity → base name
      - 2nd entity → "-2"
      - 3rd entity → "-3"
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
      FINAL SELF-CHECK (MANDATORY)
      ========================
      Before producing output:
      - If ANY value is assigned to a field AND
        another catalog field exists with the same base concept
        and the same units AND
        the user did not explicitly specify the subtype,
      THEN THIS IS A BUG:
      - Remove the assignment
      - Emit a conflict instead
      
      ========================
      CATALOG (SOURCE OF TRUTH)
      ========================
      Question catalog (names, types, titles, choices, units, structure):
      <The catalog JSON is provided by the driver code and must be treated as authoritative>

      
      ANALYSIS:
      ${JSON.stringify(analysis, null, 2)}
      
      CATALOG:
      ${JSON.stringify(catalog, null, 2)}
    `;
  }
 
/* ============================================================
   MAIN
   ============================================================ */
 
async function main() {
  const stopTotal = timer('Total pipeline time');
 
  const surveyJSON = fourth;
  const instruction = fourthInst;

  /* -------- PASS 1 -------- */
  const analysis = await callOpenAI({
    system: buildAnalysisPrompt(surveyJSON, instruction),
    user: instruction,
    temperature: 0
  });
 
  console.log('\nPASS 1 ANALYSIS:\n', JSON.stringify(analysis, null, 2));
 
  /* -------- PASS 2 -------- */
  const finalResult = await callOpenAI({
    system: buildFinalPrompt(surveyJSON, analysis),
    user: instruction,
    temperature: 0
  });
 
  console.log('\nFINAL OUTPUT:\n');
  console.log(JSON.stringify(finalResult, null, 2));
 
  stopTotal();
}
 
main().catch(console.error);
 