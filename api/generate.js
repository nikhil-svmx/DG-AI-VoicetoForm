import express from "express";
import cors from "cors";
import "dotenv/config";
import { runner } from "../src/server/simplifiedDualPass.js";
import { eighth, first, second } from "../src/configs/testForms.js";
 
const app = express();
app.use(
  cors({origin: "*"})
);
app.use(express.json());

app.post("/generate", async (req, res) => {
  try {
    const { instruction } = req.body;
    console.log("Instruction: \n"+instruction);
 
    const result = await runner(
      instruction,
      eighth
    );

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Generation failed" });
  }
});
 
export default app;