import express from "express";
import cors from "cors";
import "dotenv/config";
import { runner, buildAnalysisPrompt, callOpenAI } from "./localRunner.js";
import { second as surveyJSON } from "../configs/testForms.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// Analyze first -> return conflicts 
app.post("/generate/analyze", async (req, res) => {
  try {
    const { instruction } = req.body;
    if (!instruction?.trim()) return res.status(400).json({ error: "instruction required" });

    const analysis = await callOpenAI({
      system: buildAnalysisPrompt(surveyJSON, instruction),
      user: instruction,
      temperature: 0
    });

    res.json({ conflicts: analysis || {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Analyze failed" });
  }
});

app.post("/generate", async (req, res) => {
  try {
    const { instruction, resolutions } = req.body;
    if (!instruction?.trim()) return res.status(400).json({ error: "instruction required" });

    const result = await runner(instruction, surveyJSON, Array.isArray(resolutions) ? resolutions : []);
    res.json(result); // { answers, conflicts }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Generation failed" });
  }
});

app.listen(3001, () => 
  console.log("Server running on http://localhost:3001")
);
