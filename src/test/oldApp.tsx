'use client';
 
import { useEffect, useMemo, useState } from "react";
import "survey-core/survey-core.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import defaultSurveyConfig from "../configs/survey";
// import { npsJson, npsoutput } from "./config/forms";
 
const surveyJson = defaultSurveyConfig.defaultSurveyJSON;
const preloadAnswers = defaultSurveyConfig.defaultSurveyDATA;
 
// const surveyJson = npsJson;
// const preloadAnswers = npsoutput;

export default function SurveyComponent() {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [results, setResults] = useState<any>(null);

    const survey = useMemo(() => new Model(surveyJson), []);

    useEffect(() => {
        const handleComplete = (sender: Model) => {
            setResults(sender.data);
            setIsCompleted(true);
        };

        survey.onComplete.add(handleComplete);

        if (preloadAnswers && Object.keys(preloadAnswers).length > 0) {
            survey.data = { ...survey.data, ...preloadAnswers };
        }
        return () => {
            survey.onComplete.remove(handleComplete);
        };
    }, [survey]);

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

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
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
    </div>
    );
}
