import 'dotenv/config';

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

  for (let index = start; index < text.length; index++) {
    if (text[index] === '{') depth++;
    else if (text[index] === '}') {
      depth--;
      if (depth === 0) {
        try {
          return JSON.parse(text.slice(start, index + 1));
        } catch {}
      }
    }
  }

  return null;
}

export async function callOpenAIChat({
  systemPrompt,
  history = [],
  instruction,
  temperature = 0,
  model = process.env.OPENAI_MODEL || 'gpt-4o-mini',
  system,
  messages,
  user,
} = {}) {
  console.log('Calling OpenAI chat completion');

  const resolvedSystemPrompt = systemPrompt ?? system;
  const resolvedHistory = Array.isArray(history)
    ? history
    : Array.isArray(messages)
      ? messages
      : [];
  const resolvedInstruction = instruction ?? user;

  if (!resolvedInstruction) {
    throw new Error('instruction is required');
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY not set');

  console.log('OPENAI API Key Present:', !!apiKey);

  const stopApi = timer('OpenAI API round-trip');

  const finalMessages = [];

  if (resolvedSystemPrompt) {
    finalMessages.push({
      role: 'system',
      content: resolvedSystemPrompt,
    });
  }

  if (resolvedHistory.length) {
    finalMessages.push(...resolvedHistory);
  }

  finalMessages.push({
    role: 'user',
    content: resolvedInstruction,
  });

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      temperature,
      messages: finalMessages,
    }),
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

  const text =
    data?.choices?.[0]?.message?.content ||
    data?.choices?.[0]?.delta?.content ||
    '';

  try {
    return JSON.parse(text);
  } catch {
    return extractFirstJsonObject(text) || { text };
  }
}