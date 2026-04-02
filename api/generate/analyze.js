import "dotenv/config";
import { buildAnalysisPrompt, runner } from "../../src/server/localRunner.js";
import { todayIST } from "../../src/server/localRunner.js";
import { callOpenAIChat } from "../../src/server/openAI.ts";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const today = todayIST();
  try {
    const { instruction, surveyJson, pass1Prompt, history=[] } = req.body || {};

    if (!surveyJson) return res.status(400).json({ error: "surveyJson required" });
    if (!instruction?.trim()) return res.status(400).json({ error: "instruction required" });
    const systemPropmt = buildAnalysisPrompt(surveyJson, instruction, today, pass1Prompt);


    const analysis = await callOpenAIChat({
      system: systemPropmt,
      messages: history,
      user: instruction,
      temperature: 0
    });

    res.status(200).json({ conflicts: analysis || {} });
  } catch (err) {
    console.error("Analyze failed:", err);
    res.status(500).json({ error: "Analyze failed" });
  }
}