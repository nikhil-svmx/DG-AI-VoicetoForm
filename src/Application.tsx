'use client';

import { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.css";

type Conflict = {
  value: any;
  source?: string;
  reason: string;
  candidates: { name: string; title: string }[];
};

export default function Application() {

  const [uploadedJson, setUploadedJson] = useState<any | null>(null);
  const [pastedJson, setPastedJson] = useState("");
  const [surveyJson, setSurveyJson] = useState<any | null>(null);
  const [survey, setSurvey] = useState<Model | null>(null);


  const [instruction, setInstruction] = useState("");
  const [loading, setLoading] = useState(false);

  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState<any>(null);

  const [conflicts, setConflicts] = useState<Record<string, Conflict>>({});
  const [showModal, setShowModal] = useState(false);
  const [resolutions, setResolutions] = useState<Record<string, string>>({});


  const parseJsonSafely = (text: string) => {
    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  };


  const loadSurvey = () => {
    const candidate = uploadedJson ?? parseJsonSafely(pastedJson);
    if (!candidate) {
      alert("Invalid JSON. Please upload or paste valid JSON.");
      return;
    }

    try {
      const model = new Model(candidate);
      setSurvey(model);
      setSurveyJson(candidate);
      alert("Survey loaded!");
    } catch (err) {
      console.error(err);
      alert("Survey JSON structure invalid for SurveyJS.");
    }
  };

  const handleFileUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = String(ev.target?.result);
      const json = parseJsonSafely(text);
      if (!json) {
        alert("Invalid JSON");
        return;
      }
      setUploadedJson(json);
      setPastedJson(JSON.stringify(json, null, 2));
      alert("File loaded. Click 'Load Survey'.");
    };
    reader.readAsText(f);
  };


  useEffect(() => {
    if (!survey) return;

    const onComplete = (sender: Model) => {
      setIsCompleted(true);
      setResults(sender.data);
    };

    survey.onComplete.add(onComplete);
    return () => survey.onComplete.remove(onComplete);
  }, [survey]);

  // -------------------------
  // 5️⃣ Analyze → maybe Conflicts
  // -------------------------
  const handleInstructionSubmit = async () => {
    if (!instruction.trim()) return;
    if (!surveyJson) return alert("Survey not loaded.");

    try {
      setLoading(true);
      const res = await fetch("/api/generate/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          instruction,
          surveyJson
        })
      });

      if (!res.ok) throw new Error("Analyze failed");

      const { conflicts: found } = await res.json();
      if (found && Object.keys(found).length > 0) {
        setConflicts(found);
        setResolutions({});
        setShowModal(true);
        return;
      }

      await generateWithResolutions([]);
    } catch (err) {
      console.error(err);
      alert("Analyze failed.");
    } finally {
      setLoading(false);
    }
  };


  const onSaveResolutions = async () => {
    const payload = Object.entries(resolutions).map(([valueId, name]) => ({
      valueId,
      name,
      value: conflicts[valueId].value
    }));

    setShowModal(false);
    await generateWithResolutions(payload);
  };

  const generateWithResolutions = async (payload: any[]) => {
    if (!surveyJson) return alert("Survey not loaded.");

    try {
      setLoading(true);
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          instruction,
          resolutions: payload,
          surveyJson
        })
      });

      if (!res.ok) throw new Error("Generation failed");
      const { answers } = await res.json();
      survey?.mergeData(answers);
    } catch (err) {
      console.error(err);
      alert("Generation failed.");
    } finally {
      setLoading(false);
    }
  };


  const renderResultsTable = () => {
    if (!results) return null;
    return (
      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: 20 }}>
        <thead>
          <tr style={{ background: "#ec47ce" }}>
            <th style={{ padding: 8, border: "1px solid #aaa" }}>Question</th>
            <th style={{ padding: 8, border: "1px solid #aaa" }}>Response</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(results).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: 8, border: "1px solid #aaa" }}>{key}</td>
              <td style={{ padding: 8, border: "1px solid #aaa" }}>
                {Array.isArray(value) ? value.join(", ") : String(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderConflictModal = () => {
    if (!showModal) return null;
    const ids = Object.keys(conflicts);

    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999
        }}
      >
        <div style={{ background: "white", padding: 20, width: 700, borderRadius: 8 }}>
          <h3>Resolve Conflicts</h3>

          {ids.map((id) => {
            const c = conflicts[id];
            return (
              <div key={id} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}>
                <div><b>Value:</b> {String(c.value)}</div>
                <div><b>Reason:</b> {c.reason}</div>
                <div style={{ marginTop: 10 }}>
                  {c.candidates.map((cand) => (
                    <label key={cand.name} style={{ display: "block" }}>
                      <input
                        type="radio"
                        name={`cand-${id}`}
                        value={cand.name}
                        checked={resolutions[id] === cand.name}
                        onChange={(e) =>
                          setResolutions((prev) => ({ ...prev, [id]: e.target.value }))
                        }
                      />
                      <span style={{ marginLeft: 8 }}>{cand.name} — {cand.title}</span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}

          <button onClick={() => setShowModal(false)} style={{ marginRight: 10 }}>
            Cancel
          </button>
          <button onClick={onSaveResolutions} style={{ background: "green", color: "white" }}>
            Save & Continue
          </button>
        </div>
      </div>
    );
  };


  return (
    <div style={{ width: "90%", maxWidth: 900, margin: "auto", padding: 20 }}>
      
      {!survey && (
        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
          <h2>Load Survey JSON</h2>

          <label>Upload JSON file:</label><br />
          <input type="file" accept="application/json" onChange={handleFileUpload} />

          <div style={{ marginTop: 16 }}>
            <label>Or paste JSON:</label>
            <textarea
              rows={8}
              style={{ width: "100%", fontFamily: "monospace", marginTop: 8 }}
              value={pastedJson}
              onChange={(e) => setPastedJson(e.target.value)}
              placeholder="Paste your survey JSON here..."
            />
          </div>

          <button
            style={{ marginTop: 16, padding: "8px 16px", background: "#4caf50", color: "white" }}
            onClick={loadSurvey}
          >
            Load Survey
          </button>
        </div>
      )}

      {survey && !isCompleted && (
        <>
          <div style={{ marginTop: 20 }}>
            <h3>Human Instruction</h3>
            <textarea
              rows={4}
              style={{ width: "100%", padding: 8 }}
              placeholder="Enter instruction..."
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            />
            <button
              onClick={handleInstructionSubmit}
              disabled={loading}
              style={{ marginTop: 10, padding: "8px 16px", background: "green", color: "white" }}
            >
              {loading ? "Processing..." : "Submit Instruction"}
            </button>
          </div>

          <Survey model={survey} />
        </>
      )}

      {survey && isCompleted && (
        <div>
          <h2>Survey Completed</h2>
          {renderResultsTable()}
        </div>
      )}

      {renderConflictModal()}
    </div>
  );
}