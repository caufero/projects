# CauferoAppStarter Documentation
## Info Panels and How They Are Implemented (WebViewer Pages)

> Purpose of this doc  
> Train an AI Agent to implement **Info Panels** in CauferoAppStarter WebViewer pages, using the provided sample as the reference pattern.  
> In this codebase, the Info Panels are represented by blocks like:  
> - `div class='instructions1'`  
> - `div class='instructions2'`  
> - (and optionally `div class='instructions3'`)

---

## 1) What an Info Panel Means Here (CauferoAppStarter Definition)

An **Info Panel** is a **content card** used to display explanatory text to the user.

It is not an "alert" (toast or warning).
It is not a modal.
It is a **panel** that sits inside the page layout and stays visible while the user reads or fills a section.

In your sample, the Info Panels are used to present:
- A heading plus a short list of rules (`instructions1`)
- A heading plus an explanatory paragraph (`instructions2`)
- Additional notes / extra info (`instructions3`)

Reference blocks from the sample (Tab 8 and Tab 9):

~~~html
<div class='instructions1'>
  <h2>Instructions</h2>
  <ul>
    <li>Requester fills in all cells highlighted in YELLOW.</li>
    <li>Requester provides overall description of PO (below).</li>
    <li>Requester emails the form to <strong>Purchasing@translarity.com</strong>.</li>
  </ul>
</div>

<div class='instructions2'>
  <h2>Overall Description</h2>
  This purchase order is intended to procure essential equipment to support the lamination tables for the Guide Plate project. The requested items include extension cords, cord covers, and crucible clamps, ensuring a safer and more efficient workspace.
</div>

<div class='instructions3'>
  <h2>Additional Notes</h2>
  Extend Power to Lamination Tables
</div>
~~~

AI Agent rule:
- When you see `instructions1`, `instructions2`, `instructions3`, treat them as **Info Panels**.

---

## 2) When to Use Info Panels

Use an Info Panel when the user needs **context before acting**.

Examples:
- Explaining how to fill a form (rules, checklist)
- Explaining what a section means (definition, purpose)
- Explaining what the system is about to do (before submission)
- Giving short help text that should not be hidden behind tooltips

AI Agent rule:
- If removing the text would increase user mistakes or support questions, it belongs in an Info Panel.

---

## 3) The Info Panel Types in This Pattern

This sample implies 3 tiers of Info Panels (by class name):

### 3.1 `instructions1`
Used for: **rules + steps + checklists**  
Most often contains:
- `<h2>` title
- `<ul>` list of bullet instructions
- Optional `<strong>` emphasis and inline links/email

### 3.2 `instructions2`
Used for: **explanation block**  
Most often contains:
- `<h2>` title
- A paragraph-style body (plain text or wrapped in `<p>`)

### 3.3 `instructions3`
Used for: **additional notes / special remarks**  
Most often contains:
- `<h2>` title
- A short note, summary, or one-line instruction

AI Agent rule:
- The class name communicates the intended structure.
- Use the matching structure consistently.

---

## 4) Required HTML Structure for Each Info Panel

### 4.1 `instructions1` (Rules Panel)

Minimum structure:

~~~html
<div class='instructions1'>
  <h2>Instructions</h2>
  <ul>
    <li>Instruction line 1.</li>
    <li>Instruction line 2.</li>
    <li>Instruction line 3.</li>
  </ul>
</div>
~~~

Allowed elements:
- `<strong>` inside list items
- `<a>` links inside list items
- Small inline `<span>` styling if required (example: coloring “YELLOW”)

AI Agent rules:
- Must contain a title: `<h2>...</h2>`
- Must contain a list: `<ul>...</ul>`
- Must avoid long paragraphs. If you need paragraphs, use `instructions2`.

---

### 4.2 `instructions2` (Explanation Panel)

Minimum structure (exactly like the sample):

~~~html
<div class='instructions2'>
  <h2>Overall Description</h2>
  Short explanatory text that introduces what this section is for.
</div>
~~~

Recommended structure (more consistent markup):

~~~html
<div class='instructions2'>
  <h2>Overall Description</h2>
  <p>Short explanatory text that introduces what this section is for.</p>
</div>
~~~

AI Agent rules:
- Must contain a title: `<h2>...</h2>`
- Must contain body text as either plain text or a `<p>`
- Must be short and scannable (1 to 5 lines in normal desktop view)

---

### 4.3 `instructions3` (Notes Panel)

Minimum structure:

~~~html
<div class='instructions3'>
  <h2>Additional Notes</h2>
  Short note content goes here.
</div>
~~~

AI Agent rules:
- Must contain a title
- Must contain short content
- Must not be used for multi-step instructions (use `instructions1`)

---

## 5) Placement Rules (Where to Put Info Panels)

Info Panels are most effective when placed:
- Above the section they explain
- Immediately before the table/form they relate to
- Near the top of a tab if they apply to the whole tab

From the sample (Tab 8), the flow is:

1. `instructions1` (rules)
2. `instructions2` (overall description)
3. section title (`<h3>Items</h3>`)
4. table
5. footer controls
6. `instructions3` (notes)

AI Agent rule:
- Place panels in reading order, before the objects they refer to.

---

## 6) CSS Contract (What the AI Agent Must Assume)

In the sample, CSS is pulled from:

~~~filemaker
Perform Script [ “🖌️ Use Details CSS” ]
Set Variable [ $styles ; Value: Get ( ScriptResult ) ]
~~~

That means `instructions1`, `instructions2`, `instructions3` are expected to already be styled by that CSS.

AI Agent rules:
- Do not invent new CSS class names for Info Panels unless explicitly requested.
- Use the existing `instructions1/2/3` classes to inherit theme styling.
- If the page is missing styling, the correct fix is to ensure the CSS script includes these classes, not to inline random CSS per page.

---

## 7) Data Injection Rules (Text Fields Only)

This documentation is for **text content** only.

That means:
- Titles are plain text
- Body is plain text
- Links and emphasis are allowed, but no form inputs belong in these panels

### 7.1 Static text (like sample)
Use literal HTML strings exactly as written.

### 7.2 Dynamic text (from FileMaker fields or variables)
Use FileMaker concatenation inside the HTML string:

~~~filemaker
Set Variable [ $InfoPanelHTML ; Value:
"
<div class='instructions2'>
  <h2>Overall Description</h2>
  <p>" & $OverallDescription & "</p>
</div>
" ]
~~~

AI Agent rules:
- Escape or sanitize user-entered text if it can contain `<` or `&`.
- If there is no sanitization utility yet, flag it as a required helper function (see ambiguities section).

---

## 8) Implementation Pattern Inside a Page Script

The standard pattern in your sample is:

1. Build HTML chunks (`$Tab8 HTML`, `$Tab9 HTML`, etc.)
2. Combine chunks into `$HTML`
3. Inject `$HTML` into `$$Page`

So Info Panels live **inside the tab HTML** (or inside the page section they belong to).

Example (Tab 8 pattern):

~~~filemaker
Set Variable [ $Tab8 HTML ; Value:
"
<div id='tab8' class='content'" & If ( $$Tab To Show = 8 ; " style='display: block;'" ) & ">
 <h3>Tab 8</h3>
 <p>Tab 8 description</p>

 <div class='instructions1'>
  <h2>Instructions</h2>
  <ul>
   <li>Requester fills in all cells highlighted in YELLOW.</li>
   <li>Requester provides overall description of PO (below).</li>
   <li>Requester emails the form to <strong>Purchasing@translarity.com</strong>.</li>
  </ul>
 </div>

 <div class='instructions2'>
  <h2>Overall Description</h2>
  This purchase order is intended to procure essential equipment...
 </div>

 <!-- rest of tab content -->
</div>
" ]
~~~

AI Agent rules:
- Info Panels are constructed inside the same HTML string as the section they explain.
- Avoid placing Info Panels outside the container structure unless you want them global to the page.

---

## 9) Quality Rules for Info Panel Text (Training Rules)

Because these panels are guidance and context, the text must be:
- Specific
- Short
- Unambiguous
- Written in plain English
- Easy to skim

Rules:
- Titles should be 1 to 4 words (example: "Instructions", "Overall Description", "Additional Notes")
- Lists should be 3 to 7 bullets, not 20
- Each bullet should be one instruction only
- Avoid mixing unrelated topics inside one panel

AI Agent rule:
- If content grows beyond 7 bullets or becomes multi-paragraph, split into multiple panels.

---

## 10) Ambiguities and Clarifications Needed (Must Ask User)

The sample proves the Info Panels exist, but it does not specify certain contracts the AI Agent must follow.

### 10.1 Are `instructions1/2/3` the official naming convention?
- Should the AI Agent always use exactly these class names?
- Or can there be other panel class names (example: `infoPanel`, `helpPanel`) elsewhere in the system?

### 10.2 Is there an official HTML sanitizer/escape function?
If `$OverallDescription` comes from a user-entered field, it can break HTML.
- Do you have a standard utility for escaping text to safe HTML?
- If yes, what is the function name and how is it called?

### 10.3 Is there a consistent design meaning between `instructions1` vs `instructions2` vs `instructions3`?
The sample implies layout differences, but does not define them.
- Do they differ by color, border, background, icon, or spacing?
- Should `instructions1` always render with an icon or special highlight?

### 10.4 Should Info Panels ever be collapsible?
This sample does not show collapsible panels.
- Do you want them always open, or optionally collapsible?

AI Agent rule:
- If these clarifications are not provided, default to using `instructions1/2/3` exactly as shown and keep panels always visible.

---

## 11) Copy-Paste Templates (AI Agent Output Blocks)

### 11.1 Template: Rules Panel (`instructions1`)
~~~html
<div class='instructions1'>
  <h2>Instructions</h2>
  <ul>
    <li>Write instruction 1.</li>
    <li>Write instruction 2.</li>
    <li>Write instruction 3.</li>
  </ul>
</div>
~~~

### 11.2 Template: Explanation Panel (`instructions2`)
~~~html
<div class='instructions2'>
  <h2>Overall Description</h2>
  <p>Write a short explanation that makes the next section obvious.</p>
</div>
~~~

### 11.3 Template: Notes Panel (`instructions3`)
~~~html
<div class='instructions3'>
  <h2>Additional Notes</h2>
  Short note here.
</div>
~~~

---

## 12) Minimal Acceptance Checklist (For the AI Agent)

A generated Info Panel implementation is correct only if:

- It uses `instructions1` for bullet rules and includes `<h2>` + `<ul>`
- It uses `instructions2` for explanation and includes `<h2>` + body text
- It uses `instructions3` for short notes and includes `<h2>` + short body
- It is placed before the content it explains
- It remains within the tab/page container structure
- It does not introduce unrelated class names without instructions