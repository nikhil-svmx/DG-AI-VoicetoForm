import "dotenv/config";
import { runner } from "../../src/server/localRunner.js"; // adjust relative path
import { second as surveyJSON } from "../../src/configs/testForms.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const { instruction, resolutions } = req.body || {};
    if (!instruction?.trim()) return res.status(400).json({ error: "instruction required" });

    const result = await runner(instruction, surveyJSON, Array.isArray(resolutions) ? resolutions : []);
    // result should be { answers, conflicts? }
    res.status(200).json(result);
  } catch (err) {
    console.error("Generation failed:", err);
    res.status(500).json({ error: "Generation failed" });
  }
}
