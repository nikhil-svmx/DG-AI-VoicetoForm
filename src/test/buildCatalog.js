export function buildCatalog(surveyJson) {
  // console.log(surveyJson);
  const catalog = [];
 
  const toChoices = (choices = []) =>
    choices.map(c =>
      typeof c === "string"
        ? { value: c, text: c }
        : { value: c.value, text: c.text ?? String(c.value) }
    );

  const push = entry => {
    if (entry?.name) catalog.push(entry);
  };

  const walk = (elements = []) => {
    for (const el of elements) {
      if (!el?.type) continue;

      const base = {
        name: el.name,
        type: el.inputType ?? el.type,
        title: el.title,
        visibleIf : el.visibleIf || null
      };

      switch (el.type) {
        case "text":
        case "comment":
          push({ ...base, answerShape: "scalar" });
          break;

        case "boolean":
          push({ ...base, answerShape: "boolean" });
          break;

        case "radiogroup":
        case "dropdown":
          push({
            ...base,
            answerShape: "single-choice",
            choices: toChoices(el.choices)
          });
          break;

        case "checkbox":
        case "tagbox":
          push({
            ...base,
            answerShape: "multi-choice",
            choices: toChoices(el.choices)
          });
          break;

        case "rating":
          push({
            ...base,
            answerShape: "integer",
            min: el.rateMin,
            max: el.rateMax 
          });
          break;

        case "multipletext":
          push({
            ...base,
            answerShape: "object",
            items: (el.items || []).map(i => i.name)
          });
          break;

        case "matrix":
          push({
            ...base,
            answerShape: "matrix",
            rows: toChoices(el.rows),
            columns: toChoices(el.columns)
          });
          break;

        case "panel":
        case "paneldynamic":
          // recurse but don't expose container as a question
          walk(el.elements || el.templateElements);
          break;

        default:
          break;
      }
    }
  };
 
  // pages-based surveys
  for (const page of surveyJson?.pages || []) {
    walk(page.elements || []);
  }
  
  // root-level elements (your case)
  if (Array.isArray(surveyJson?.elements)) {
    walk(surveyJson.elements);
  }
 
  // console.log("Catelog \n",catalog);
  return catalog;
  
}