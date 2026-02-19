import 'dotenv/config';
import fetch from 'node-fetch';
import { buildCatalog } from './buildCatalog.js';
import { ConditionRunner } from 'survey-core';
import { first, eighth, second, third, fourth, fifth, sixth, seventh, ninth} from '../configs/testForms.js';
import { eightInst, firstInst, secondInst, fourthInst,thirdInst, fifthInst } from '../configs/instructions.js';
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
 

function buildAnalysisPrompt(catalog, instruction) {
  return `
    You are an intelligent form analysis assistant.
 
    Your task is to analyze user input and detect ONLY conflicts or ambiguities
    when mapping statements to form fields.
    
    STRICT RULES:
    1. Do NOT assign final values to fields.
    2. Do NOT guess user intent if multiple fields can match.
    3. Even if the fields looking similar but if user has mentioned to which field the value to be matched specifically, DO NOT treat it as a conflict.
    3. If a statement can map to more than one field, mark it as a conflict.
    4. If there is NO conflict, return an empty array.
    5. Output ONLY valid JSON.
    6. Do NOT include explanations or extra text.
    
    A conflict exists when:
    - One statement can apply to multiple fields
    - A field is mentioned with unclear intent
    - Multiple similar fields exist and user did not specify which one
 
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
      You are a FORM ASSISTANT and CONFLICT ANALYZER. Convert the user's natural-language instruction into SurveyJS answers JSON by resolving conflicts from the analysis provided.
      TASK:
      Generate SurveyJS answers JSON using the analysis result.

      OUTPUT FORMAT
      Return exactly ONE JSON object with:
      {
        "answers": { ...SurveyJS-compatible partial answers... },
        "conflicts": [    {
            "<value_identifier>": {
              "value": "<literal value>",
              "candidates": [
                { "name": "<question.name>", "title": "<question.title>" }
              ],
              "reason": "<clear explanation>"
            }
          }]
      }


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
      
      REPEATED GROUP ORDERING (FORM-AGNOSTIC)

      - Repeated groups (name, name-2, name-3) are NOT conflicts when values are given in sequence. 
      If a value is out-of-sequence and unscoped, mark it as conflict.
      - NEVER skip, reorder, or create groups beyond those present in the schema.
      

      
      CRITICAL PROHIBITIONS
      - You are NOT allowed to assign a value to any field
        until ALL candidate fields for the same base concept
        have been evaluated.
      - NEVER use "first match wins".
      - NEVER silently resolve ambiguity.
      - NEVER downgrade a conflict into an answer.
      
      CATALOG (SOURCE OF TRUTH)
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
 
 
async function main() {
  const stopTotal = timer('Total pipeline time');
 
  const surveyJSON = second;
  const instruction = secondInst;

  const analysis = await callOpenAI({
    system: buildAnalysisPrompt(surveyJSON, instruction),
    user: instruction,
    temperature: 0
  });
 
  console.log('\nPASS 1 ANALYSIS:\n', JSON.stringify(analysis, null, 2));
 
  const finalResult = await callOpenAI({
    system: buildFinalPrompt(surveyJSON, analysis, instruction),
    user: instruction,
    temperature: 0
  });
 
  console.log('\nFINAL OUTPUT:\n');
  console.log(JSON.stringify(finalResult, null, 2));
 
  stopTotal();
}

main().catch(console.error);