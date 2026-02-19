import 'dotenv/config';
import fetch from 'node-fetch';
import { buildCatalog } from './buildCatalog.js';
import { jobApplicationJson} from '../configs/forms.js';

const surveyJSON = jobApplicationJson;

function extractFirstJsonObject(text) {
  if (typeof text !== 'string') return null;
  const start = text.indexOf('{');
  if (start < 0) return null;
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        const block = text.slice(start, i + 1);
        try { return JSON.parse(block); } catch {}
      }
    }
  }
  return null;
}


function buildSystemPrompt(catalog) {
  return `
    You are a form assistant. Convert the user's natural-language instruction into **SurveyJS answers JSON**.
 
 
    STRICT RULES
    - JSON KEYS always come from the survey JSON **question.name** in the same case. Donot change the case of the keys
    - JSON VALUES always come from the **users   instruction**.
    - NEVER derive keys from user language.
    - NEVER derive values from survey labels or titles.

    OUTPUT RULES
    1. Output **ONLY ONE valid JSON object**.
      - No prose
      - No explanations
      - No markdown
      - No extra characters
    
    2. JSON keys MUST:
      - Match **exactly** the name fields from the catalog
      - Preserve case and spelling
      - NEVER be renamed, merged, or invented
    
    3. If a key does not exist in the catalog → **DO NOT OUTPUT IT**.
    - If a value cannot be confidently inferred → **OMIT THE FIELD**.
    - Output **ONLY one JSON object** and NOTHING else (no prose, no code fences).
    - Keys must be exact question **name**s from the catalog. Do not assume the field names and donot change the names
    - If the label **"None of the above"** is selected for a checkbox question, include **only** that value (exclude other options for that question).
    - Omit fields not mentioned. Do not invent keys or values.
    - Use label variants/synonyms to map to stored values (e.g., “fever or chill(s)” → the stored value for “Fever or chills”).


    - checkbox:
      - Output an ARRAY of stored values from \`choices[].value\`.
      - Use label synonyms to map user words → stored values
      - If "None of the above" is selected, return ONLY that value
    
    - radiogroup / dropdown:
      - Output the stored value (\`choices[].value\`) ONLY
    
    - boolean:
      - Output true / false ONLY
      - Infer strictly from language
        ("no", "not", "never" → false)
        ("yes", "has", "was", "did" → true)
    
    - text / comment:
      - Output ONLY the literal extracted value
      - Do NOT summarize or rephrase

    - Date format: YYYY-MM-DD

    - DO NOT imagine structure
    - DO NOT combine multiple answers into one field
    - DO NOT create semantic fields like "address" or "location"
    - Each catalog field is filled independently
    
    If the user provides multiple values in one sentence:
    - Split and map them ONLY to matching catalog fields
    - Try to understand the whole instruction and map the fields correctly
   
    Question catalog (names, types, and choices with labels & stored values):
    ${JSON.stringify(catalog, null, 2)}
 
    EXAMPLES
    User: "I have fever and cough; my family has symptoms; I was not notified; I did not travel."
    Output: {"Symptoms":["item1","item2"],"Household":true,"Notification":false,"Travel":false}
 
    User: "Only sore throat. No one else is sick. Not a close contact. Traveled outside India."
    Output: {"Symptoms":["item4"],"Household":false,"Notification":false,"Travel":true}
    `;
}
 
 

function buildUserInput(instruction) {
  return instruction;
}

function getTextFromResponses(data) {
    if (!data?.output) {
        console.log("Empty");
        return '';
    }
 
  for (const item of data.output) {
    console.log("Triggered here")
    if (item.type === 'message' && Array.isArray(item.content)) {
      for (const c of item.content) {
        if (c.type === 'output_text' && typeof c.text === 'string') {
          return c.text;
        }
      }
    }
  }
  return '';
}
 

async function callOpenAI_Responses({ system, user, model, temperature = 0 }) {
    const apiKey = process.env.OPENAI_API_KEY;
    const usedModel = model || process.env.OPENAI_MODEL || 'gpt-4o-mini';
    if (!apiKey) throw new Error('Missing OPENAI_API_KEY');
    if (!system) throw new Error('Missing system instructions');
    if (!user) throw new Error('Missing user input');

    const res = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        model: usedModel,
        instructions: system,   
        input: buildUserInput(user), 
        temperature
    })
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(`OpenAI error: ${res.status} ${res.statusText} :: ${JSON.stringify(data)}`);
    }
    const text = getTextFromResponses(data);
    

    try {
        return JSON.parse(text);
    } catch {
        return extractFirstJsonObject(text) || {};
    }
}


async function main() {
  const catalog = buildCatalog(surveyJSON);
  // console.log(catalog);

  const instruction =
    `I am Nikhil Tanneeru born on 10th March 2002 in Banglore, India , 
    I live at 12 Residency road, 560001. Contact me through nikhil.t@example.com and I expect to be paid 8,00,000 rupees. 
    I am good to join as an Intern from 15th feb 2026. I will update my resume manually.`
  // console.log(`Instruction: ${instruction}\n`);

  const system = buildSystemPrompt(catalog);
  // console.log(system);
  const answers = await callOpenAI_Responses({
    system,
    user: instruction,
    temperature: 0
  });

  console.log('Output:');
  console.log(JSON.stringify(answers, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});