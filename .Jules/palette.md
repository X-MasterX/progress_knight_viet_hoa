## 2026-06-26 - [Interactive Checkboxes]
**Learning:** Found an accessibility issue pattern specific to this app's components: Interactive toggles like "Sticky sidebar" are missing `<label>` tags. Wrapping text in a `<label for="...">` massively improves accessibility and click targets for the checkboxes.
**Action:** Next time looking at setting toggle UIs, always check for missing labels around the text describing the checkboxes.
