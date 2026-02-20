// /api/generate/analyze.js
import "dotenv/config";
import { buildAnalysisPrompt, callOpenAI } from "../../src/server/localRunner.js"; // adjust relative path
import { second as surveyJSON } from "../../src/configs/testForms.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const { instruction } = req.body || {};
    if (!instruction?.trim()) return res.status(400).json({ error: "instruction required" });

    const analysis = await callOpenAI({
      system: buildAnalysisPrompt(surveyJSON, instruction),
      user: instruction,
      temperature: 0
    });

    res.status(200).json({ conflicts: analysis || {} });
  } catch (err) {
    console.error("Analyze failed:", err);
    res.status(500).json({ error: "Analyze failed" });
  }
}