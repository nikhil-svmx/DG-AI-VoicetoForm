import "dotenv/config";
import fetch from "node-fetch";

const defaultSurveyJSON = {
  "title": "Health Checkup",
  "description": "This survey is to check patients health.",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "checkbox",
          "name": "Symptoms",
          "title": "Do you have any of the following new or worsening symptoms?",
          "isRequired": true,
          "choices": [
            { "value": "item1", "text": "Fever or chills" },
            { "value": "item2", "text": "Cough" },
            { "value": "item3", "text": "Difficulty breathing" },
            { "value": "item4", "text": "Sore throat" },
            { "value": "item5", "text": "Runny or stuffy nose" },
            { "value": "item6", "text": "Decrease or lose of taste or smell" },
            { "value": "item7", "text": "Nausea, vomiting or diarrhea" },
            { "value": "item8", "text": "Not feeling well, extreme tiredness or sore muscles" },
            { "value": "item9", "text": "Pink eye or headache" },
            { "value": "item10", "text": "None of the above" }
          ]
        },
        {
          "type": "boolean",
          "name": "Household",
          "title": "Does anyone in your household have one or more of the above symptoms?",
          "isRequired": true
        },
        {
          "type": "boolean",
          "name": "Notification",
          "title": "Have you been notified as a close contact of someone with severe fever or cough?",
          "isRequired": true
        },
        {
          "type": "boolean",
          "name": "Travel",
          "title": "In the last 14 days, have you or anyone in your household travelled outside of India",
          "isRequired": true
        }
      ]
    }
  ]
};


function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildMaps(json) {
  const idx = {};
  const labelToValue = {}; 
  for (const page of json.pages || []) {
    for (const el of page.elements || []) {
      const meta = {
        type: el.type,
        choices: (el.choices || []).map(c => (typeof c === "string" ? c : (c.value ?? c.text)))
      };
      idx[el.name] = meta;

      if (el.name === "Symptoms") {
        for (const c of el.choices || []) {
          const value = c.value;
          const text = c.text || value;

          const base = normalize(text);
          labelToValue[base] = value;

          const syns = [];
          switch (value) {
            case "item1": // Fever or chills
              syns.push("fever", "chills", "fever or chill", "high temperature");
              break;
            case "item2": // Cough
              syns.push("cough", "coughing");
              break;
            case "item3": // Difficulty breathing
              syns.push("shortness of breath", "breathlessness", "difficulty breathing", "trouble breathing");
              break;
            case "item4": // Sore throat
              syns.push("sore throat", "throat pain", "throat ache");
              break;
            case "item5": // Runny or stuffy nose
              syns.push("runny nose", "stuffy nose", "blocked nose", "cold");
              break;
            case "item6": // Decrease or loss of taste or smell
              syns.push("loss of taste", "loss of smell", "no taste", "no smell", "anosmia", "ageusia", "decrease of taste", "decrease of smell");
              break;
            case "item7": // Nausea, vomiting or diarrhea
              syns.push("nausea", "vomiting", "diarrhea", "loose motion", "stomach upset");
              break;
            case "item8": // Not feeling well, extreme tiredness or sore muscles
              syns.push("fatigue", "tiredness", "sore muscles", "myalgia", "not feeling well", "weakness");
              break;
            case "item9": // Pink eye or headache
              syns.push("pink eye", "conjunctivitis", "headache", "eye infection");
              break;
            case "item10": // None of the above
              syns.push("none of the above", "no symptoms", "none");
              break;
          }
          for (const s of syns) labelToValue[normalize(s)] = value;
        }
      }
    }
  }
  return { idx, labelToValue };
}

const { idx: questionIndex, labelToValue } = buildMaps(defaultSurveyJSON);

// Validate
function mapSymptomPhrasesToValues(instruction) {
  // Greedy mapping: for each known label/synonym, if present in instruction, include its value
  const found = new Set();
  const text = normalize(instruction);
  for (const [lab, val] of Object.entries(labelToValue)) {
    // match full word/phrase
    if (lab && text.includes(lab)) {
      found.add(val);
    }
  }
  return Array.from(found);
}

function validateAnswers(raw, qIdx, instructionText) {
  const cleaned = {};
  for (const [name, value] of Object.entries(raw || {})) {
    const meta = qIdx[name];
    if (!meta) continue;

    switch (meta.type) {
      case "checkbox": {
        const arr = Array.isArray(value) ? value : [value];
        // Try direct match to stored values first
        let vals = arr.filter(v => meta.choices.includes(v));
        // If labels came instead of stored values, try to map via synonyms
        if (vals.length === 0) {
          // Also attempt mapping from provided strings to values
          const mapped = [];
          for (const v of arr) {
            const n = normalize(v);
            if (labelToValue[n]) mapped.push(labelToValue[n]);
          }
          vals = mapped.filter(v => meta.choices.includes(v));
        }
        // As last resort, derive from the original instruction text
        if (vals.length === 0 && name === "Symptoms") {
          vals = mapSymptomPhrasesToValues(instructionText).filter(v => meta.choices.includes(v));
        }
        cleaned[name] = Array.from(new Set(vals)); // dedupe
        break;
      }
      case "boolean": {
        let b;
        if (typeof value === "boolean") {
          b = value;
        } else if (typeof value === "string") {
          const s = normalize(value);
          if (/(^| )yes($| )|^true$|^1$/.test(s)) b = true;
          else if (/(^| )no($| )|^false$|^0$/.test(s)) b = false;
        }
        if (typeof b === "boolean") {
          cleaned[name] = b;
        }
        break;
      }
      default:
        cleaned[name] = value;
    }
  }
  return cleaned;
}

/* ---------------------------------------
   3) Deterministic fallback parser
--------------------------------------- */
function fallbackParse(instruction) {
  const text = normalize(instruction);
  const out = {};

  // Symptoms via synonyms scan
  const symptomsVals = mapSymptomPhrasesToValues(text);
  if (symptomsVals.length > 0) out["Symptoms"] = symptomsVals;

  // Household
  // Examples: "household has some symptoms observed" → true
  if (/household/.test(text)) {
    if (/(no|none|nobody).{0,10}household.*(symptom|sick)/.test(text)) {
      out.Household = false;
    } else if (/(has|have).{0,10}(symptom|sick)/.test(text) && /household/.test(text)) {
      out.Household = true;
    }
  }

  // Notification (close contact)
  // Your sentence: "I have not been in contact..." → false
  if (/contact|notified/.test(text)) {
    if (/(not|no|haven t|have not|did not).{0,10}(been )?(in )?contact|notified/.test(text)) {
      out.Notification = false;
    } else if (/close contact|notified/.test(text)) {
      out.Notification = true;
    }
  }

  // Travel
  if (/travel/.test(text)) {
    if (/(have|has|i).{0,5}travel.*outside/.test(text)) out.Travel = true;
    if (/(did not|haven t|have not|no).{0,3} travel/.test(text)) out.Travel = false;
  }

  return out;
}

// LLM Part
async function callOpenAI_Responses(instruction) {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  if (!apiKey) throw new Error("Missing OPENAI_API_KEY");

  // Include BOTH value and text (plus explicit instruction to return stored values)
  const symptomCatalog = (defaultSurveyJSON.pages[0].elements[0].choices || []).map(c => ({
    value: c.value,
    text: c.text
  }));

  const prompt = `
You convert natural-language health instructions to SurveyJS answer JSON.
Return ONLY ONE JSON object. Keys must be the exact question names:
- If **checkbox** type → array of STORED VALUES (e.g., ["item1","item2"]), not labels.
- If **boolean** type → true/false


Symptoms catalog (value → text):
${JSON.stringify(symptomCatalog, null, 2)}

If the instruction uses labels or synonyms (e.g., "Fever or chill", "Sore Throat"), map them to the correct stored value(s).

User instruction:
"""${instruction}"""
`.trim();

  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "OpenAI-Beta": "assistants=v2"
    },
    body: JSON.stringify({
      model,
      input: prompt,
      temperature: 0,
    })
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`OpenAI error: ${res.status} ${res.statusText} :: ${JSON.stringify(data)}`);
  }

  let text =
    data.output_text ??
    data?.output?.[0]?.content?.[0]?.text?.value ??
    "{}";
  if (typeof text !== "string") text = JSON.stringify(text || {});
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

// Main Driver
async function main() {
  const instruction = "Select symptoms as Fever or chill, Cough, Sore Throat and household has some symptoms observed and I have not been in contact with someone of severe fever or cough and in last 14 days I have travelled outside India"

  console.log(`🗣 Instruction: ${instruction}\n`);

  const llmRaw = await callOpenAI_Responses(instruction);

  console.log("LLM Raw Output:");
  console.log(JSON.stringify(llmRaw, null, 2));

  let cleaned = validateAnswers(llmRaw, questionIndex, instruction);

  if (Object.keys(cleaned).length === 0) {
    const fb = fallbackParse(instruction);
    cleaned = validateAnswers(fb, questionIndex, instruction);
  }

  console.log("\nResponse:");
  console.log(JSON.stringify(cleaned, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


// Old buildCatelog
// export function buildCatalog(surveyJson, opts = {}) {
//   console.log("Triggered");
//   const {
//     includeContainers = true,
//     includeNonQuestions = false
//   } = opts;

//   const catalog = [];

//   // ---------- helpers ----------
//   const isStr = v => typeof v === "string";
//   const num = v => (Number.isFinite(v) ? v : undefined);
//   const bool = v => (typeof v === "boolean" ? v : undefined);

//   const toChoice = c => {
//     if (isStr(c)) return { value: c, text: c };
//     return {
//       value: c?.value ?? c?.text,
//       text: c?.text ?? String(c?.value ?? ""),
//       imageLink: c?.imageLink, 
//       [c?.locText ? "locText" : "_"]: c?.locText 
//     };
//   };

//   const toChoices = list => (Array.isArray(list) ? list.map(toChoice) : []);

//   const toRows = rows =>
//     Array.isArray(rows)
//       ? rows.map(r => (isStr(r) ? { value: r, text: r } : { value: r?.value ?? r?.text, text: r?.text ?? String(r?.value ?? "") }))
//       : [];

//   const toColumns = cols =>
//     Array.isArray(cols)
//       ? cols.map(col => (isStr(col) ? { value: col, text: col } : { value: col?.value ?? col?.name ?? col?.text, text: col?.text ?? (col?.name ?? String(col?.value ?? "")) }))
//       : [];

//   // for matrixdropdown/matrixdynamic columns
//   const toMatrixColumns = cols =>
//     Array.isArray(cols)
//       ? cols.map(c => ({
//           name: c?.name ?? c?.value ?? "",
//           title: c?.title,
//           cellType: c?.cellType ?? "dropdown",
//           choices: toChoices(c?.choices),
//           choicesByUrl: c?.choicesByUrl
//             ? {
//                 // don't fetch—just describe
//                 url: c.choicesByUrl?.url,
//                 path: c.choicesByUrl?.path,
//                 valueName: c.choicesByUrl?.valueName,
//                 titleName: c.choicesByUrl?.titleName
//               }
//             : undefined
//         }))
//       : [];

//   const pushEntry = entry => {
//     // drop invalid
//     if (!entry || !entry.name) return;
//     catalog.push(entry);
//   };

//   const processElements = (elements, parentPath = []) => {
//     if (!Array.isArray(elements)) return;
//     for (const el of elements) processElement(el, parentPath);
//   };

//   const processElement = (el, parentPath = []) => {
//     if (!el || !el.type) return;

//     const base = {
//       name: el.name,                   // may be undefined for containers
//       type: el.type,
//       title: el.title,
//       isRequired: !!el.isRequired,
//       path: [...parentPath, el.name].filter(Boolean).join(".") // informational
//     };

//     switch (el.type) {
//       // ---------- SIMPLE INPUTS ----------
//       case "text": {
//         pushEntry({
//           ...base,
//           answerShape: "scalar",
//           inputType: el.inputType ?? "text",            // text | number | email | date | datetime-local | etc.
//           min: num(el.min),
//           max: num(el.max),
//           minValueExpression: el.minValueExpression,
//           maxValueExpression: el.maxValueExpression,
//           maxLength: num(el.maxLength),
//           placeholder: el.placeholder,
//           mask: el.mask,
//           autocomplete: el.autocomplete
//         });
//         break;
//       }

//       case "comment": {
//         pushEntry({
//           ...base,
//           answerShape: "scalar",
//           rows: num(el.rows),
//           maxLength: num(el.maxLength),
//           placeholder: el.placeholder
//         });
//         break;
//       }

//       case "boolean": {
//         pushEntry({
//           ...base,
//           answerShape: "boolean",
//           labelTrue: el.labelTrue,
//           labelFalse: el.labelFalse,
//           valueTrue: el.valueTrue,    // sometimes used
//           valueFalse: el.valueFalse
//         });
//         break;
//       }

//       case "rating": {
//         pushEntry({
//           ...base,
//           answerShape: "integer",
//           rateMin: num(el.rateMin) ?? 1,
//           rateMax: num(el.rateMax) ?? 5,
//           rateStep: num(el.rateStep) ?? 1,
//           rateValues: toChoices(el.rateValues), // optional; if provided, return stored values
//           minRateDescription: el.minRateDescription,
//           maxRateDescription: el.maxRateDescription
//         });
//         break;
//       }

//       case "expression": {
//         pushEntry({
//           ...base,
//           answerShape: "computed",
//           expression: el.expression,
//           format: el.format
//         });
//         break;
//       }

//       // ---------- CHOICE INPUTS ----------
//       case "radiogroup": {
//         pushEntry({
//           ...base,
//           answerShape: "single-choice",
//           choices: toChoices(el.choices),
//           choicesByUrl: el.choicesByUrl
//             ? {
//                 url: el.choicesByUrl?.url,
//                 path: el.choicesByUrl?.path,
//                 valueName: el.choicesByUrl?.valueName,
//                 titleName: el.choicesByUrl?.titleName
//               }
//             : undefined,
//           showOtherItem: !!el.showOtherItem,
//           otherText: el.otherText
//         });
//         break;
//       }

//       case "dropdown": {
//         pushEntry({
//           ...base,
//           answerShape: "single-choice",
//           choices: toChoices(el.choices),
//           choicesByUrl: el.choicesByUrl
//             ? {
//                 url: el.choicesByUrl?.url,
//                 path: el.choicesByUrl?.path,
//                 valueName: el.choicesByUrl?.valueName,
//                 titleName: el.choicesByUrl?.titleName
//               }
//             : undefined,
//           searchEnabled: bool(el.searchEnabled),
//           showOtherItem: !!el.showOtherItem,
//           otherText: el.otherText
//         });
//         break;
//       }

//       case "tagbox": {
//         pushEntry({
//           ...base,
//           answerShape: "multi-choice",
//           choices: toChoices(el.choices),
//           choicesByUrl: el.choicesByUrl
//             ? {
//                 url: el.choicesByUrl?.url,
//                 path: el.choicesByUrl?.path,
//                 valueName: el.choicesByUrl?.valueName,
//                 titleName: el.choicesByUrl?.titleName
//               }
//             : undefined,
//           searchEnabled: bool(el.searchEnabled)
//         });
//         break;
//       }

//       case "checkbox": {
//         pushEntry({
//           ...base,
//           answerShape: "multi-choice",
//           choices: toChoices(el.choices),
//           choicesByUrl: el.choicesByUrl
//             ? {
//                 url: el.choicesByUrl?.url,
//                 path: el.choicesByUrl?.path,
//                 valueName: el.choicesByUrl?.valueName,
//                 titleName: el.choicesByUrl?.titleName
//               }
//             : undefined,
//           maxSelectedChoices: num(el.maxSelectedChoices),
//           showOtherItem: !!el.showOtherItem,
//           otherText: el.otherText
//         });
//         break;
//       }

//       case "imagepicker": {
//         pushEntry({
//           ...base,
//           answerShape: el.multiSelect ? "multi-choice" : "single-choice",
//           choices: toChoices(el.choices), // includes imageLink if provided
//           multiSelect: !!el.multiSelect
//         });
//         break;
//       }

//       case "ranking": {
//         pushEntry({
//           ...base,
//           answerShape: "ordered-list", // array of values in ranked order
//           choices: toChoices(el.choices)
//         });
//         break;
//       }

//       // ---------- COMPOSITE ----------
//       case "multipletext": {
//         // items: [{ name, title, isRequired, inputType?, ... }]
//         const items = Array.isArray(el.items)
//           ? el.items.map(it => ({
//               name: it?.name,
//               title: it?.title,
//               inputType: it?.inputType ?? "text",
//               isRequired: !!it?.isRequired,
//               maxLength: num(it?.maxLength),
//               placeholder: it?.placeholder
//             }))
//           : [];
//         pushEntry({
//           ...base,
//           answerShape: "object", // { itemName: value, ... }
//           items
//         });
//         break;
//       }

//       // ---------- MATRIX FAMILY ----------
//       case "matrix": {
//         // single-choice per row: { rowValue: columnValue, ... }
//         pushEntry({
//           ...base,
//           answerShape: "matrix", // object mapping row -> column
//           rows: toRows(el.rows),
//           columns: toColumns(el.columns)
//         });
//         break;
//       }

//       case "matrixdropdown": {
//         // object of objects: { row: { colA: valA, colB: valB }, ... }
//         pushEntry({
//           ...base,
//           answerShape: "matrixdropdown",
//           rows: toRows(el.rows),
//           columns: toMatrixColumns(el.columns),
//           detailPanelMode: el.detailPanelMode
//         });
//         break;
//       }

//       case "matrixdynamic": {
//         // array of objects (each row uses the columns' cellType)
//         pushEntry({
//           ...base,
//           answerShape: "matrixdynamic", // [ { colA: v, colB: w }, ... ]
//           columns: toMatrixColumns(el.columns),
//           rowCount: num(el.rowCount),
//           minRowCount: num(el.minRowCount),
//           maxRowCount: num(el.maxRowCount),
//           allowAddRows: bool(el.allowAddRows),
//           allowRemoveRows: bool(el.allowRemoveRows)
//         });
//         break;
//       }

//       // ---------- FILES / SIGNATURE ----------
//       case "file": {
//         pushEntry({
//           ...base,
//           answerShape: el.allowMultiple ? "file-list" : "file",
//           acceptedTypes: el.acceptedTypes, // e.g. ".pdf,.png"
//           allowMultiple: !!el.allowMultiple,
//           maxSize: num(el.maxSize),       // bytes
//           maxFiles: num(el.maxFiles)
//         });
//         break;
//       }

//       case "signaturepad": {
//         pushEntry({
//           ...base,
//           answerShape: "data-url", // base64 data URL
//           penColor: el.penColor,
//           backgroundColor: el.backgroundColor
//         });
//         break;
//       }

//       // ---------- CONTAINERS ----------
//       case "panel": {
//         if (includeContainers) {
//           pushEntry({
//             ...base,
//             answerShape: "container",
//             elementsCount: Array.isArray(el.elements) ? el.elements.length : 0
//           });
//         }
//         // Recurse into children
//         processElements(el.elements, [...parentPath, el.name || "panel"]);
//         break;
//       }

//       case "paneldynamic": {
//         if (includeContainers) {
//           pushEntry({
//             ...base,
//             answerShape: "paneldynamic", // array of objects shaped like templateElements
//             minPanelCount: num(el.minPanelCount),
//             maxPanelCount: num(el.maxPanelCount),
//             panelCount: num(el.panelCount),
//             templateTitle: el.templateTitle
//           });
//         }
//         // Recurse into template elements (these form object shape of each panel item)
//         processElements(el.templateElements, [...parentPath, el.name || "paneldynamic"]);
//         break;
//       }

//       // ---------- NON-QUESTION CONTENT ----------
//       case "html":
//       case "image":
//       case "textwithmarkdown": // some builds
//       case "helptext": {
//         if (includeNonQuestions) {
//           pushEntry({
//             ...base,
//             answerShape: "none", // no answer expected
//             content: el.html || el.content || el.text
//           });
//         }
//         break;
//       }

//       default: {
//         // Fallback: include as-is so you can spot unknown types
//         pushEntry({
//           ...base,
//           answerShape: "unknown",
//           raw: { ...el }
//         });
//       }
//     }
//   };

//   // ---------- kick off ----------
//   for (const page of surveyJson?.pages || []) {
//     processElements(page.elements, [page.name || "page"]);
//   }

//   return catalog;
// }