'use client';

import { useEffect, useMemo, useState } from "react";
import "survey-core/survey-core.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { second as surveyJson } from "./configs/testForms";

const preloadAnswers: Record<string, any> = {};

type Conflict = {
  value: any;
  source?: string;
  reason: string;
  candidates: { name: string; title: string }[];
};

export default function SurveyComponent() {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [results, setResults] = useState<any>(null);
  const [instruction, setInstruction] = useState("");
  const [loading, setLoading] = useState(false);

  // conflicts returned by /generate/analyze
  const [conflicts, setConflicts] = useState<Record<string, Conflict>>({});
  const [showModal, setShowModal] = useState(false);

  // user selections: valueId -> chosen field name
  const [resolutions, setResolutions] = useState<Record<string, string>>({});

  const survey = useMemo(() => new Model(surveyJson), []);

  useEffect(() => {
    const handleComplete = (sender: Model) => {
      setResults(sender.data);
      setIsCompleted(true);
    };

    survey.onComplete.add(handleComplete);

    if (preloadAnswers && Object.keys(preloadAnswers).length > 0) {
      survey.mergeData(preloadAnswers);
    }

    return () => {
      survey.onComplete.remove(handleComplete);
    };
  }, [survey]);

  const handleInstructionSubmit = async () => {
    if (!instruction.trim()) return;

    try {
      setLoading(true);

      // Analyze here
      const res = await fetch("http://localhost:3001/generate/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ instruction })
      });
      
      if (!res.ok) throw new Error("Analyze failed");

      const { conflicts: found } = await res.json();
      const hasConflicts = found && Object.keys(found).length > 0;

      if (hasConflicts) {
        setConflicts(found);
        // Initialize default selections (none chosen yet)
        const initial: Record<string, string> = {};
        setResolutions(initial);
        setShowModal(true);
        return; // wait for user to resolve
      }

      // No conflicts → directly generate final answers (with empty resolutions)
      await generateWithResolutions([]);
    } catch (err) {
      console.error("Error during analyze", err);
      alert("Analyze failed. Check server logs.");
    } finally {
      setLoading(false);
    }
  };

  // Called after modal Save
  const onSaveResolutions = async () => {
    // Build payload: array of { valueId, name, value }
    const payload = Object.entries(resolutions)
      .filter(([valueId, name]) => !!name && conflicts[valueId])
      .map(([valueId, name]) => ({
        valueId,
        name,
        value: conflicts[valueId].value
      }));

    setShowModal(false);
    await generateWithResolutions(payload);
  };

  const generateWithResolutions = async (payload: Array<{ valueId: string; name: string; value: any }>) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3001/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ instruction, resolutions: payload })
      });

      if (!res.ok) throw new Error("Generation failed");

      const { answers } = await res.json();

      // Merge generated answers into current survey data
      survey.mergeData(answers);
    } catch (err) {
      console.error("Error generating answers", err);
      alert("Failed to generate answers. Check server logs.");
    } finally {
      setLoading(false);
    }
  };

  const renderResultsTable = () => {
    if (!results) return null;

    return (
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          background: "#fff",
          border: "1px solid #ccc"
        }}
      >
        <thead>
          <tr style={{ background: "#ec47ce" }}>
            <th style={{ border: "1px solid #b0bced", padding: "8px" }}>Question</th>
            <th style={{ border: "1px solid #b0bced", padding: "8px" }}>Response</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(results).map(([key, value]) => (
            <tr key={key}>
              <td style={{ border: "1px solid #b0bced", padding: "8px" }}>{key}</td>
              <td style={{ border: "1px solid #b0bced", padding: "8px" }}>
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

    const valueIds = Object.keys(conflicts);

    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}
      >
        <div
          style={{
            width: "800px",
            maxHeight: "80vh",
            overflow: "auto",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            padding: "20px"
          }}
        >
          <h2 style={{ marginTop: 0 }}>Resolve Conflicts</h2>
          <p style={{ color: "#555", marginTop: 0 }}>
            Choose the correct field for each value. Your selections will be locked and included in the final JSON.
          </p>

          {valueIds.map((valueId) => {
            const c = conflicts[valueId];
            return (
              <div key={valueId} style={{ border: "1px solid #e5e7eb", borderRadius: 6, padding: 12, marginBottom: 12 }}>
                <div style={{ fontSize: 12, color: "#6b7280" }}>Value ID: {valueId}</div>
                <div style={{ marginTop: 6 }}>
                  <strong>Value:</strong> <code>{String(c.value)}</code>
                </div>
                {c.source && (
                  <div style={{ marginTop: 6 }}>
                    <strong>Sentence:</strong> <em>{c.source}</em>
                  </div>
                )}
                <div style={{ marginTop: 6 }}>
                  <strong>Reason:</strong> {c.reason}
                </div>

                <div style={{ marginTop: 10 }}>
                  <strong>Choose target field:</strong>
                  <div style={{ marginTop: 8 }}>
                    {c.candidates.map((cand) => {
                      const id = `${valueId}::${cand.name}`;
                      return (
                        <label key={id} style={{ display: "block", marginBottom: 6, cursor: "pointer" }}>
                          <input
                            type="radio"
                            name={`cand-${valueId}`}
                            value={cand.name}
                            checked={resolutions[valueId] === cand.name}
                            onChange={(e) =>
                              setResolutions((prev) => ({ ...prev, [valueId]: e.target.value }))
                            }
                            style={{ marginRight: 8 }}
                          />
                          <span style={{ fontFamily: "monospace" }}>{cand.name}</span>
                          {cand.title ? <span style={{ color: "#6b7280" }}> — {cand.title}</span> : null}
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 16 }}>
            <button
              onClick={() => setShowModal(false)}
              style={{
                padding: "8px 14px",
                background: "#e5e7eb",
                border: "none",
                borderRadius: 4,
                cursor: "pointer"
              }}
            >
              Cancel
            </button>
            <button
              onClick={onSaveResolutions}
              style={{
                padding: "8px 14px",
                background: "#4caf50",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                cursor: "pointer"
              }}
            >
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      {!isCompleted && (
        <div style={{ marginBottom: "20px" }}>
          <h3>Human Instruction</h3>
          <textarea
            rows={4}
            style={{ width: "100%", padding: "8px" }}
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            placeholder="Paste instruction here..."
          />
          <button
            onClick={handleInstructionSubmit}
            disabled={loading}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              background: "#4caf50",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            {loading ? "Processing..." : "Submit Instruction"}
          </button>
        </div>
      )}

      {!isCompleted ? (
        <Survey model={survey} />
      ) : (
        <div>
          <div
            style={{
              width: "100%",
              margin: "5px 0",
              backgroundColor: "#87cefa",
              padding: "5px"
            }}
          >
            <h2>Thank you for completing the Health Checkup Survey!</h2>
          </div>

          <br />
          <h3>Your Responses:</h3>
          {renderResultsTable()}
        </div>
      )}

      {renderConflictModal()}
    </div>
  );
}