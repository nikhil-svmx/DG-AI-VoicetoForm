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

export function todayIST(){
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

export function buildAnalysisPrompt(catalog, instruction, today, pass1Prompt) {
  return `
    ${pass1Prompt}
    CATALOG:
    ${JSON.stringify(catalog, null, 2)}
    
    USER INSTRUCTION:
    ${instruction}
    
    TODAY:
    ${today}
  `;
}
 

export function buildFinalPrompt(catalog, analysis, instruction, resolutions, today, pass2prompt) {
  return `
    ${pass2prompt}

    TODAY : ${today}

    RESOLUTIONS:
    ${JSON.stringify(resolutions ?? [], null, 2)}

    ANALYSIS (CONFLICTS ONLY):
    ${JSON.stringify(analysis, null, 2)}
    
    CATALOG:
    ${JSON.stringify(catalog, null, 2)}
    
    USER INSTRUCTION:
    ${instruction}
  `;
}
 

export async function runner(instruction, surveyJSON, analysis, resolutions = []) {
  const stopTotal = timer('Total pipeline time');

  const finalResult = await callOpenAI({
    system: buildFinalPrompt(surveyJSON, analysis, instruction, resolutions, today, pass2prompt),
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