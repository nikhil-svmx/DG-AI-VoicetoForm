import express from "express";
import cors from "cors";
import "dotenv/config";
import { runner, buildAnalysisPrompt} from "./localRunner.js";
import { callOpenAIChat } from "./openAI.js";
import { todayIST } from "../../src/server/localRunner.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// Analyze first -> return conflicts 
app.post("/generate/analyze", async (req, res) => {
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
    // console.log("Prompt received :",systemPropmt);
  } catch (err) {
    console.error("Analyze failed:", err);
    res.status(500).json({ error: "Analyze failed" });
  }
});

app.post("/generate", async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const today = todayIST();
  try {
    const { instruction, resolutions, surveyJson, conflicts, pass2Prompt, history = [] } = req.body || {};

    if (!surveyJson) return res.status(400).json({ error: "surveyJson required" });
    if (!instruction?.trim()) return res.status(400).json({ error: "instruction required" });

    const result = await runner(
      instruction,
      surveyJson,
      conflicts,
      Array.isArray(resolutions) ? resolutions : [],
      today,
      pass2Prompt,
      history
    );

    res.status(200).json(result);
  } catch (err) {
    console.error("Generation failed:", err);
    res.status(500).json({ error: "Generation failed" });
  }
});

app.listen(3001, () => 
  console.log("Server running on http://localhost:3001")
);