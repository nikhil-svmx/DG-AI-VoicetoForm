import 'dotenv/config';
import fetch from 'node-fetch';
import { buildCatalog } from './buildCatalog.js';
import { technicionForm, usForm, maintenanceForm } from '../configs/forms.js';
import { ConditionRunner } from 'survey-core';
import { first,eighth, fourth} from '../configs/testForms.js';
import { firstInst, secondInst, fifthInst, eightInst, fourthInst } from '../configs/instructions.js';
import { performance } from 'node:perf_hooks'; // ⏱️ timing

// ⏱️ Small helper for timing blocks
function timer(label) {
  const start = performance.now();
  return () => {
    const ms = performance.now() - start;
    console.log(`${label}: ${ms.toFixed(1)} ms`);
    return ms;
  };
}



const surveyJSON = fourth;

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


// Currently processing 3 types to test if it is workking or not.
function coerceAnswersToTypes(catalog, answers) {
  const typeMap = new Map(catalog.map(q => [q.name, q.type]));
  const out = { ...answers };
  for (const [key, val] of Object.entries(out)) {
    const t = typeMap.get(key);
    if (!t) continue;

    if (t === 'rating' ) {
      if (typeof val === 'string' && val.trim() !== '' && !Number.isNaN(Number(val))) {
        out[key] = Number(val);
      }
    } else if (t === 'boolean') {
      if (typeof val === 'string') {
        const s = val.toLowerCase();
        out[key] = (s === 'true' || s === 'yes');
      }
    } else if (t === 'checkbox') {
      if (!Array.isArray(val)) {
        out[key] = val == null ? [] : [val];
      }
    }
  }
  return out;
}

function htmlUnescape(s) {                  // Copilot suggested preprocess step.
  return typeof s === 'string'
    ? s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    : s;
}

function evaluateVisibleIf(expr, answers) {
  if (!expr) return true;
  try {
    const cleanExpr = htmlUnescape(expr);
    const runner = new ConditionRunner(cleanExpr);
    runner.expression = runner.expression || cleanExpr;

    const res = runner.runValues(answers);

    return !!res;
  } catch (e) {
    console.warn('SurveyJS runner error:', { expr, error: e?.message });
    return true;
  }
}

// Handling visibleIf conditions runner 
function applyVisibility(catalog, answers) {
  let result = { ...answers };
  let changed = true;

  while (changed) {
    changed = false;

    for (const q of catalog) {
      if (!(q.name in result)) continue;

      const visible = evaluateVisibleIf(q.visibleIf, result);
      if (!visible) {
        console.log(`[prune] ${q.name} removed due to visibleIf: ${q.visibleIf}`);
        delete result[q.name];
        changed = true;
      }
    }
  }

  return result;
}

function buildSystemPrompt(catalog) {
  return `
    You are a JSON ANALYZER for CONFLICTS and form assistant . Convert the user's natural-language instruction into **SurveyJS answers JSON**.

    STRICT RULES
    - JSON KEYS always come from the survey JSON **question.name** in the same case. Donot change the case of the keys.
    - JSON VALUES always come from the **users instruction**.
    - NEVER derive keys from user language.
    - NEVER derive values from survey labels or titles.
    - Must follow REMOVING CONFLICTS section clearly.

    REMOVING CONFLICTS
    - Conflicting fields are fields whose names or titles are looking very similar or the fields are types of a particular entity and measured in same units.
        * Examples: 1. Guass Pressure and Normal Pressure are types of Pressures and measured in same units.
                    2. Mass and Weight are measured in same units.
    - If such conflicting fields are present map to the fields only if user clearly mentioned to what field it should be mapped 
    Example: If Absolute Temperature and Relative temperature fields are there and user said temmperature is 20 and user instruction said temperature is 20 then OMIT both as it is not clearly mentioned if it is abolute or relative.
    - First try to analyze all field titles and names in the Question catelog and find if there are any CONFLICTING or AMBIGIOUS Fields.


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


    - checkbox:
      - Output an ARRAY of stored values from \`choices[].value\`.
      - Use label synonyms to map user words → stored values.
      - If "None of the above" is selected, return ONLY that value.
    
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

    When multiple sections or repeated groups exist in the survey schema (such as fields
    ending with “-2”, “-3”, etc.), map user-provided entities to these groups STRICTLY 
    in the order they appear in the user's text, not based on meaning or similarity.

    - User may instruct to fill a question in previous pages also by mentioning the scenario

    ENTITY MAPPING RULE:
    - The 1st described entity in user text → the 1st repeated group (names with no suffix)
    - The 2nd described entity → the 2nd group (fields ending with “-2”)
    - The 3rd described entity → the 3rd group (fields ending with “-3”)
    - Continue sequentially for any number of entities.
    - Never skip or reorder groups.
    - Never create new groups beyond those present in the survey JSON.

    - DO NOT imagine structure
    - DO NOT combine multiple answers into one field.
    - DO NOT create semantic fields like "address" or "location".
    - Each catalog field is filled independently.
    - Omit the conflicting fields if user instruction is not specific to which the value to be mapped.
    
    If the user provides multiple values in one sentence:
    - Split and map them ONLY to matching catalog fields.
    - Try to understand the whole instruction and map the fields correctly.
   
    Question catalog (names, types, and choices with labels & stored values):
    ${JSON.stringify(catalog, null, 2)}

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


  const stopApi = timer('OpenAI API round-trip');


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
  stopApi();

  if (!res.ok) {
    throw new Error(`OpenAI error: ${res.status} ${res.statusText} :: ${JSON.stringify(data)}`);
  }

  const stopExtract = timer('LLM text extraction + JSON parse');

  const text = getTextFromResponses(data);

  try {
    const parsed = JSON.parse(text);
    stopExtract();
    return parsed;
  } catch {
    const recovered = extractFirstJsonObject(text) || {};
    stopExtract();
    return recovered;
  }


}


async function main() {
  const stopTotal = timer('Total pipeline time');

  const catalog = buildCatalog(surveyJSON);

  const instruction = fourthInst;

  const system = buildSystemPrompt(catalog);

  const rawAnswers = await callOpenAI_Responses({ system, user: instruction, temperature: 0 });
  console.log('Raw LLM output:\n', rawAnswers);

  const stopCoerce = timer('Coercion (type normalization)');
  const typedAnswers = coerceAnswersToTypes(catalog, rawAnswers);
  const coerceMs = stopCoerce();

  const stopVis = timer('Visibility (visibleIf pruning)');
  const finalAnswers = applyVisibility(catalog, typedAnswers);
  const visMs = stopVis();

  console.log('\nFinal visible answers:\n');
  console.log(JSON.stringify(finalAnswers, null, 2));

  const totalMs = stopTotal();

  console.log(
    `\nTiming summary → total: ${totalMs.toFixed?.(1) ?? totalMs} ms | coercion: ${coerceMs.toFixed?.(1) ?? coerceMs} ms | visibility: ${visMs.toFixed?.(1) ?? visMs} ms`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
