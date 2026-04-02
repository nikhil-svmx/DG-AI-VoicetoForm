import 'dotenv/config';
import { performance } from 'node:perf_hooks';
import { callOpenAIChat } from './openAI.ts';

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
 

export async function runner(instruction, surveyJSON, analysis, resolutions = [], today, pass2prompt, history) {
  const stopTotal = timer('Total pipeline time');

  const finalResult = await callOpenAIChat({
    system: buildFinalPrompt(surveyJSON, analysis, instruction, resolutions, today, pass2prompt),
    user: instruction,
    messages: history,
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