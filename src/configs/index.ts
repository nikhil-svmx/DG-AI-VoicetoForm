// server/index.ts
import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/api/llm/answers", async (req, res) => {
  const { instruction, questionIndex } = req.body || {};
  if (!instruction || !questionIndex) {
    return res.status(400).json({ error: "instruction and questionIndex are required" });
  }

  // Keep the index compact: only names, types, and allowed choice values
  const prompt = `
You are a form assistant. Map the user's instruction to SurveyJS answers.
Return ONLY a single JSON object. Keys must be the exact SurveyJS question "name".
Use the allowed choice VALUES below (not labels). For checkboxes, return an array.
Ignore questions not referenced by the instruction. If unsure, omit the key.

Question catalog (name, type, allowed choices where relevant):
${JSON.stringify(questionIndex, null, 2)}

User instruction:
"""${instruction}"""
`.trim();

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini", 
        temperature: 0,
        response_format: { type: "json_object" }, 
        messages: [
          { role: "system", content: "You convert natural language to SurveyJS answer JSON. Output JSON only." },
          { role: "user", content: prompt }
        ]
      })
    });

    const data:any = await openaiRes.json();
    if (!openaiRes.ok) {
      console.error("OpenAI error", data);
      return res.status(500).json({ error: "OpenAI API error", details: data });
    }

    const text = data.choices?.[0]?.message?.content ?? "{}";
    let answers: Record<string, any> = {};
    try {
      answers = JSON.parse(text);
    } catch {
      answers = {}; 
    }

    res.json({ answers });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: String(err) });
  }
});

app.listen(3001, () => {
  console.log("LLM server listening on http://localhost:3001");
});