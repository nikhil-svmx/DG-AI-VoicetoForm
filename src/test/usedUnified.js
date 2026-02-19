import 'dotenv/config';
import fetch from 'node-fetch';
import { ConditionRunner } from 'survey-core';
import { first, eighth, second, third } from '../configs/testForms.js';
import { eightInst, firstInst, secondInst, thirdInst } from '../configs/instructions.js';
import { performance } from 'node:perf_hooks';
import { technicionForm } from '../configs/forms.js';
 
 
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
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || 'gpt-4o';
 
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
 
// function buildUnifiedPrompt(catalog, instruction) {
//   return `
//     You are a FORM ASSISTANT with an internal CONFLICT DETECTION ENGINE.
 
//     GOAL:
//     Convert the user's natural-language instruction into SurveyJS answers JSON
//     AND detect value-driven conflicts in a SINGLE PASS.
 
//     AS A CONFLICT DETECTION ENGINE in the first step.
    
//     Your task:
//     First try to understand the USER INSTRUCTION as a human.
//     Determine whether any VALUE provided in the user instruction
//     could belong to multiple catalog fields without clear specification.
//     For a single value of user instruction will be logically matched to multiple fields of the json(Form)
//     Then it is called as a CONFLICT.
    
//     ----------------------------------------
//     IMPORTANT: Conflict is VALUE-DRIVEN
//     ----------------------------------------
    
//     Conflict exists ONLY if:
    
//     1. The user provides a specific value.
//     2. Multiple catalog fields which are eligible could accept that value type.
//     3. The user does NOT clearly specify which field it belongs to.
//     4. Assigning the value to one would logically prevent assigning it to another.
    
//     If the user clearly specifies the target field,
//     then it is NOT a conflict — even if similar fields exist.
    
//     ----------------------------------------
//     DO NOT:
//     - Compare field names in isolation.
//     - Mark conflict due to word similarity.
//     - Assume conflict unless a VALUE is competing.
 
//     -------------------------------------------
//     REPEATED GROUP RULE (VERY IMPORTANT)
//     -------------------------------------------
 
//     * If fields follow an indexed pattern (e.g., name, name-2, name-3):
    
//       - These represent repeated entity groups.
//       - They are NOT conflicting fields.
//       - Values must be mapped in the order entities appear in the user instruction.
//       - DO NOT mark them as conflicting if mentioned sequentilly under same group after starting the instruction.
//       - REMEMBER : - Even if fields are following the repeated group rule, if the value mentioned is outside the sequence of instruction and not clearly mentioned to which group field it belongs to,
//       then mark it as a conflict and omit it from the answers and add it to conflicts array.
 
 
//       - Only mark conflict if multiple candidate fields belong to the same entity level and compete for the same value.
//       Before marking as conflicting understand the sentence mentioned clearly.
    
//     ----------------------------------------
//     PROCESS:
//     ----------------------------------------
    
//     STEP 1:
//     Extract explicit values from the instruction
//     (dates, phone numbers, emails, numeric values, identifiers, etc.)
    
//     STEP 2:
//     For each extracted value:
//     Identify all catalog fields that could logically accept it
//     based on type and meaning.
    
//     STEP 3:
//     If more than one candidate field exists
//     AND user did not clearly scope it then mark it as a conflict.
    
//     NOW You are a form assistant. Convert the user's natural-language instruction into **SurveyJS answers JSON**.
 
//     ----------------------------------------
//     TYPE RULES
//     ----------------------------------------
//     - checkbox:
//       - Output an ARRAY using choices[].value
//       - Use label synonyms to map user text → stored values
//       - If "None of the above" is selected, return ONLY that stored value
//     - radiogroup / dropdown:
//       - Output the stored value (choices[].value) ONLY
//     - boolean:
//       - Output true / false ONLY
//       - Infer strictly: ("no", "not", "never" → false) | ("yes", "has", "was", "did" → true)
//     - text / comment:
//       - Output ONLY the literal value from the user's instruction
//     - date:
//       - YYYY-MM-DD
//     - If multiple values appear in one sentence:
//       - Split and map ONLY to matching fields
//       - Do NOT merge values
 
//     ----------------------------------------
//     STRICT OUTPUT RULES
//     ----------------------------------------
//     - JSON KEYS must come ONLY from catalog question.name (exact case).
//     - JSON VALUES must come ONLY from the user's instruction.
//     - The values derived from instruction should be of same datatype (type) from the catelog.
//     - NEVER invent keys or structure.
//     - Omit any field not explicitly mentioned or confidently inferable.
 
//     ----------------------------------------
//     CRITICAL PROHIBITIONS
//     ----------------------------------------
//     - Do NOT assign a value if multiple catalog fields exist for the same base concept and units without explicit disambiguation.
//     - NEVER resolve ambiguity silently.
//     - Emit a conflict instead.
 
//     ----------------------------------------
//     OUTPUT (JSON ONLY)
//     ----------------------------------------
//       Return exactly ONE JSON object:
//       {
//         "answers": { ...partial SurveyJS answers... },
//         "conflicts": [
//           {
//             "value_id": "<stable identifier you create>",
//             "value": "<literal provided by the user>",
//             "candidates": [
//               { "name": "<question.name>", "title": "<question.title>" }
//             ],
//             "reason": "<clear explanation>"
//           }
//         ]
//       }
//     ----------------------------------------
//     CATALOG (AUTHORITATIVE)
//     ${JSON.stringify(catalog, null, 2)}
 
//     USER INSTRUCTION:
//     ${instruction}
 
//     Perform the conflict analysis INTERNALLY and emit only the required JSON in the exact format above.
//   `;
// }

function buildUnifiedPrompt(catalog, instruction) {
  return `
    You are a proficient FORM ASSISTANT with an internal CONFLICT DETECTOR. Produce one JSON object only.

    OBJECTIVE
    - Map the USER INSTRUCTION to SurveyJS answers.
    - Detect VALUE-DRIVEN conflicts and exclude those fields from answers.

    CONFLICT (VALUE-DRIVEN)
    - A conflict exists only if a specific user-provided value could fit multiple catalog fields of the same level and units, and the user did NOT clearly scope the target field.
    - Do NOT mark conflicts by name similarity alone.
    - Repeated groups whose field names are like : name, name-2, name-3 are NOT conflicts provided the values are given in sequence of group. 
      If a value is out-of-sequence group and if it is unscoped, mark it as conflict.

    - Example: If json is having two fields : Guass Pressure and Normal Pressure and user mentioned thet "Pressure is 40" then it is a conflict because we donot know if the user is mentioning about the guass pressure or the normal pressure.

    CONFLICT DOESNOT EXIST IF:
    - All resembling fields are not conflicts every time.
    - The user mentioned that the value is same as another field by using *Same as that _field* , *Same*, *Refer to that _field* etc. 
    so in that cases the user is clearly instructing the correct mapping. 
    So, it will not be a conflict.

    
    - Repeated groups (name, name-2, name-3) are NOT conflicts when values are given in sequence. 
      * But, if a value is out-of-sequence and unscoped, mark it as conflict.
    - NEVER skip, reorder, or create groups beyond those present in the schema.
      
    OUTPUT RULES
    - JSON keys: EXACTLY question.name (case-sensitive).
    - JSON values: ONLY from the user's instruction. Do not invent.
    - Omit fields not explicitly stated or confidently inferable.
    - If a value is conflicted, DO NOT include any of its candidate fields in answers.
    - Types:
    * checkbox → ARRAY of choices[].value (respect “None of the above” exclusivity)
    * radiogroup/dropdown → choices[].value
    * boolean → true/false (“no/not/never” → false | “yes/has/was/did” → true)
    * text/comment → literal value from instruction
    * date → YYYY-MM-DD
    
    - Emit JSON only—no extra text.
      - If the user provides multiple values in one sentence:
      - Split and map them ONLY to matching catalog fields
      - Do NOT merge values into a single field.
      - For the fields with multiple text

    CATALOG (authoritative)
    ${JSON.stringify(catalog)}

    USER INSTRUCTION
    ${instruction}

    Return:
    {
    "answers": { ... },
    "conflicts": [
        {
        "value_id": "<stable id or omit>",
        "value": "<literal>",
        "candidates": [{ "name": "<question.name>", "title": "<question.title>" }],
        "reason": "<why ambiguous>"
        }
    ]
    }
    `;
}
 
/* ============================================================
   MAIN
   ============================================================ */
 
async function main() {
  const stopTotal = timer('Total pipeline time');
 
  const surveyJSON = eighth;
  const instruction = eightInst;
 
 
  const finalResult = await callOpenAI({
    system: buildUnifiedPrompt(surveyJSON, instruction),
    user: instruction,
    temperature: 0
  });
 
  console.log('\nFINAL OUTPUT:\n');
  console.log(JSON.stringify(finalResult, null, 2));
 
  stopTotal();
}
 
main().catch(console.error);
 