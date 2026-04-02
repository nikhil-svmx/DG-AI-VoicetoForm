// import 'dotenv/config';

// function timer(label: any) {
//   const start = performance.now();
//   return () => {
//     const ms = performance.now() - start;
//     console.log(`${label}: ${ms.toFixed(1)} ms`);
//     return ms;
//   };
// }

// function extractFirstJsonObject(text: string) {
//   if (typeof text !== 'string') return null;
//   const start = text.indexOf('{');
//   if (start < 0) return null;
//   let depth = 0;
//   for (let i = start; i < text.length; i++) {
//     if (text[i] === '{') depth++;
//     else if (text[i] === '}') {
//       depth--;
//       if (depth === 0) {
//         try {
//           return JSON.parse(text.slice(start, i + 1));
//         } catch {}
//       }
//     }
//   }
//   return null;
// }
// export type ChatTurn = {
//  role: "user" | "assistant";
//  content: string;
// };
 
// export type ChatMessage = { role: ChatTurn; content: string };


// export async function callOpenAIChat({
//   system,
//   messages,
//   user,
//   temperature = 0,
//   model = process.env.OPENAI_MODEL || 'gpt-4o-mini',
// }: {
//   system?: string;
//   messages?: ChatMessage[]; // prior turns you store in React/DB
//   user: string;             // new user turn
//   temperature?: number;
//   model?: string;
// }) {
//   console.log('In call (chat.completions)');
//   const apiKey = process.env.OPENAI_API_KEY;
//   if (!apiKey) throw new Error('OPENAI_API_KEY not set');

//   const stopApi = timer('OpenAI API round-trip');
//   console.log('OPEN AI API Present? ' + !!apiKey);


//   const resp = await fetch('https://api.openai.com/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       model,
//       instructions: system,
//       messages,
//       input: user,
//       temperature
//     }),
//   });

//   const raw = await resp.text();
//   let data: any;
//   try {
//     data = JSON.parse(raw);
//   } catch {
//     stopApi();
//     throw new Error(`OpenAI returned non-JSON: ${raw.slice(0, 500)}`);
//   }

//   if (!resp.ok) {
//     stopApi();
//     const msg = data?.error?.message || JSON.stringify(data);
//     throw new Error(`OpenAI error ${resp.status}: ${msg}`);
//   }

//   stopApi();

//   const text: string =
//     data?.choices?.[0]?.message?.content ??
//     data?.choices?.[0]?.delta?.content ?? 
//     '';
//   try {
//     return JSON.parse(text);
//   } catch {
//     return extractFirstJsonObject(text) || {};
//   }
// }


import 'dotenv/config';

function timer(label: string) {
  const start = performance.now();
  return () => {
    const ms = performance.now() - start;
    console.log(`${label}: ${ms.toFixed(1)} ms`);
    return ms;
  };
}

function extractFirstJsonObject(text: string) {
  if (typeof text !== "string") return null;

  const start = text.indexOf("{");
  if (start < 0) return null;

  let depth = 0;

  for (let i = start; i < text.length; i++) {
    if (text[i] === "{") depth++;
    else if (text[i] === "}") {
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

export type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function callOpenAIChat({
  system,
  messages = [],
  user,
  temperature = 0,
  model = process.env.OPENAI_MODEL || "gpt-4o-mini",
}: {
  system?: string;
  messages?: ChatMessage[];
  user: string;
  temperature?: number;
  model?: string;
}) {
  console.log("Calling OpenAI chat completion");

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY not set");

  console.log("OPENAI API Key Present:", !!apiKey);

  const stopApi = timer("OpenAI API round-trip");

  const finalMessages: ChatMessage[] = [];

  if (system) {
    finalMessages.push({
      role: "system",
      content: system
    });
  }

  if (messages && messages.length) {
    finalMessages.push(...messages);
  }

  finalMessages.push({
    role: "user",
    content: user
  });

  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature,
      messages: finalMessages,
    }),
  });

  const raw = await resp.text();

  let data: any;

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

  const text: string =
    data?.choices?.[0]?.message?.content ||
    data?.choices?.[0]?.delta?.content ||
    "";

  try {
    return JSON.parse(text);
  } catch {
    return extractFirstJsonObject(text) || { text };
  }
}