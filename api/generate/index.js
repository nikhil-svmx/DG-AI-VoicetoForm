import "dotenv/config";
import { runner } from "../../src/server/localRunner.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { instruction, resolutions, surveyJson } = req.body || {};

    if (!surveyJson) return res.status(400).json({ error: "surveyJson required" });
    if (!instruction?.trim()) return res.status(400).json({ error: "instruction required" });

    const result = await runner(
      instruction,
      surveyJson,
      Array.isArray(resolutions) ? resolutions : []
    );

    res.status(200).json(result);
  } catch (err) {
    console.error("Generation failed:", err);
    res.status(500).json({ error: "Generation failed" });
  }
}
``