import { runner } from "../../src/server/localRunner.js";
import { second as surveyJSON } from "../../src/configs/testForms.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const { instruction, resolutions } = req.body || {};
    if (!instruction?.trim()) return res.status(400).json({ error: "instruction required" });

    const result = await runner(
      instruction,
      surveyJSON,
      Array.isArray(resolutions) ? resolutions : []
    ); 

    return res.status(200).json(result);
  } catch (err) {
    console.error("Generation failed:", err);
    return res.status(500).json({ error: "Generation failed" });
  }
}
