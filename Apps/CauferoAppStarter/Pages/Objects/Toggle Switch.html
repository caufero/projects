# CauferoAppStarter Documentation
## Toggle Switches and How They Are Implemented (WebViewer Pages)

> Purpose of this doc  
> Train an AI Agent to implement a **Toggle Switch** UI control in CauferoAppStarter WebViewer pages, using the provided **User Details** page script as the reference pattern.  
> This doc covers **text states only** (example: `Active` and `Inactive`).  
> Number fields, dropdown-backed toggles, and other variants will be documented separately.

---

## 1) What a Toggle Switch Means Here (CauferoAppStarter Definition)

A **Toggle Switch** is a UI control that:
- lets the user flip between two states (ON/OFF)
- shows the state as a **human-readable text label** beside the switch
- stores the selected state in a DOM element (the label), then includes it in the Save payload

In the sample, the switch controls `Status` and displays:
- `Active` when ON
- `Inactive` when OFF

Key elements in the sample:
- Checkbox input: `<input type='checkbox' id='toggle' onchange="toggle()">`
- State label: `<span class='status' id='status'>...</span>`
- JS initializes the checkbox based on `$Status` (`preselectToggle`)
- JS updates the label when user changes toggle (`toggle()`)

---

## 2) When to Use a Toggle Switch

Use a toggle switch when:
- there are exactly **two** states
- the UI should be fast and visual
- the choice is reversible

Good examples:
- Status: Active / Inactive
- Enabled: Yes / No
- Access: Allowed / Blocked
- Notify: On / Off

AI Agent rule:
- If you have more than 2 states, do not use a toggle. Use segmented control, radio buttons, or dropdown.

---

## 3) Required Pieces (HTML + CSS Contract + JS)

Toggle Switch implementation has 3 layers:

1) HTML markup  
2) CSS classes (assumed to exist in shared CSS)  
3) JavaScript (init + change handler)

### 3.1 HTML (Required Contract)

Reference pattern from the sample:

~~~html
<div class='toggle-container'>
  <label class='toggle-switch'>
    <input type='checkbox' id='toggle' onchange="toggle()">
    <span class='slider'></span>
  </label>
  <span class='status' id='status'>Active</span>
</div>
~~~

Where:
- `toggle-container` controls layout
- `toggle-switch` wraps the checkbox and the slider UI
- `slider` is the styled track/knob element
- `status` is the visible text state

AI Agent rules:
- Use `type='checkbox'`.
- `id='toggle'` and `id='status'` must match the JavaScript selectors unless you update the JS accordingly.
- The label must be present because this implementation stores the state as text for saving.

### 3.2 FileMaker Placement Pattern (Inside Form)

In the sample, the toggle sits inside a form-group:

~~~html
<div class='form-group form-group-2'>
  <label for='status'>Status</label>

  <div class='toggle-container'>
    <label class='toggle-switch'>
      <input type='checkbox' id='toggle' onchange="toggle()">
      <span class='slider'></span>
    </label>
    <span class='status' id='status'>Active</span>
  </div>

</div>
~~~

AI Agent rules:
- The outer `<label>` is the field label. Keep it separate from the switch label wrapper.
- Keep the toggle inside the same grid cell as the field it represents.

### 3.3 CSS Contract (Shared Styles)

The sample loads page CSS via:

~~~filemaker
Perform Script [ “🖌️ Use Details CSS” ]
Set Variable [ $styles ; Value: Get ( ScriptResult ) ]
~~~

So the toggle relies on shared CSS defining:
- `.toggle-container`
- `.toggle-switch`
- `.slider`
- `.status`

AI Agent rules:
- Do not inline toggle CSS per page unless requested.
- If toggle looks broken, fix the shared CSS script, not the page script.

---

## 4) JavaScript Behavior (Initialization + User Change)

Toggle requires two behaviors:
1) Preselect the checkbox based on FileMaker state (`preselectToggle`)
2) Update the visible text state on change (`toggle()`)

### 4.1 Initialization (Preselect)

The goal:
- If `$Status` is `Active`, checkbox should be ON and label should show `Active`
- Else checkbox should be OFF and label should show `Inactive`

Correct reference logic (conceptual):

~~~javascript
function preselectToggle(statusValue) {
  const toggle = document.getElementById('toggle');
  const status = document.getElementById('status');

  if (statusValue === 'Active') {
    toggle.checked = true;
    status.textContent = 'Active';
  } else {
    toggle.checked = false;
    status.textContent = 'Inactive';
  }
}

window.onload = function() {
  preselectToggle('Active'); /* injected from FileMaker */
};
~~~

#### Important note about the provided script
Your pasted code contains a mismatch:

- It sets: `const item = document.getElementById('item');`
- But the HTML uses: `id='status'`

So the preselect code as pasted will not update the label correctly unless `item` is corrected to `status`.

AI Agent rule:
- Always ensure the JS id matches the HTML id.

### 4.2 Change Handler (When user flips switch)

Reference pattern:

~~~javascript
function toggle() {
  const status = document.getElementById('status');
  const toggle = document.getElementById('toggle');
  status.textContent = toggle.checked ? 'Active' : 'Inactive';
}
~~~

AI Agent rules:
- Always update the label text.
- Keep the label text as the single source of truth for saving (in this pattern).

---

## 5) FileMaker Integration Pattern

### 5.1 Inject initial state into HTML

The label is injected from FileMaker:

~~~filemaker
"<span class='status' id='status'>" & $Status & "</span>"
~~~

AI Agent rules:
- Ensure `$Status` is always defined. If missing, set a default (`Active` or `Inactive`) before page generation.
- Keep `$Status` values consistent with your toggle mapping.

### 5.2 Inject initial state into JS on load

The sample passes `$Status` into `preselectToggle()`:

~~~filemaker
window.onload = function() {
 preselectToggle('" & $Status & "');
};
~~~

AI Agent rules:
- The injected value must exactly match expected strings (`Active` / `Inactive`) unless you change mapping logic.

---

## 6) Saving the Toggle Value (Text Fields Only)

In this pattern, the Save script reads the state from the label:

~~~javascript
const status = document.getElementById('status').textContent.trim();
~~~

Then it joins it into parameters:

~~~javascript
const parameters = [ first_name, last_name, email, role, status ].join('|');
FileMaker.PerformScript('Save User', parameters);
~~~

AI Agent rules:
- Always trim the text to avoid leading/trailing spaces.
- Always include status in the correct position in the pipe-delimited payload.
- The receiving FileMaker script must parse the parameter order exactly.

---

## 7) Recommended Toggle Naming Standard (For AI Agent)

If the page has a single toggle:
- checkbox id: `toggle`
- label id: `status`
- functions: `preselectToggle()` and `toggle()`

If the page will have multiple toggles:
- Use unique ids per toggle (required)
- Use a generic handler that targets specific label ids

Example multi-toggle standard:
- checkbox id: `toggle_status`, label id: `status_label`
- checkbox id: `toggle_notify`, label id: `notify_label`

Generic JS pattern:

~~~javascript
function preselectToggleByIds(toggleId, labelId, stateValue, onText, offText) {
  const toggle = document.getElementById(toggleId);
  const label = document.getElementById(labelId);

  if (!toggle || !label) return;

  if (stateValue === onText) {
    toggle.checked = true;
    label.textContent = onText;
  } else {
    toggle.checked = false;
    label.textContent = offText;
  }
}

function toggleByIds(toggleId, labelId, onText, offText) {
  const toggle = document.getElementById(toggleId);
  const label = document.getElementById(labelId);

  if (!toggle || !label) return;

  label.textContent = toggle.checked ? onText : offText;
}
~~~

AI Agent rule:
- Only implement multi-toggle logic if needed. Otherwise keep the simple single-toggle pattern.

---

## 8) Common Failure Modes (Must Avoid)

### 8.1 ID mismatch (Seen in the sample)
JS references `item` id, HTML uses `status` id.

AI Agent rule:
- Enforce id consistency before returning output.

### 8.2 Missing default state
If `$Status` is empty, toggle may display blank or incorrect.

AI Agent rule:
- Always ensure `$Status` is set server-side before HTML generation.

### 8.3 Saving checkbox state instead of label
If saving uses `toggle.checked` but display uses text, you can desync.

AI Agent rule:
- In this pattern, label text is the source of truth for saving.

---

## 9) Ambiguities and Clarifications Needed (Must Ask User)

To implement this perfectly across the codebase, these must be clarified:

1) What are the canonical text values for status?
   - Is it always `Active` and `Inactive`?
   - Or do some modules use `Enabled/Disabled`, `Yes/No`, `True/False`?

2) Are status values case-sensitive in your database?
   - Example: `active` vs `Active`

3) Do you want the toggle to immediately save on change for some pages?
   - The current pattern only changes UI and saves later via Save button.

4) Should toggles support a third state (unknown/unset)?
   - If yes, toggle is the wrong control and needs a different UI.

AI Agent default behavior if not clarified:
- Use `Active` / `Inactive`
- Treat them as case-sensitive
- Update UI only, save only when user clicks Save

---

## 10) Copy-Paste Templates (AI Agent Output Blocks)

### 10.1 Template: Toggle HTML (Single)
~~~html
<div class='form-group form-group-2'>
  <label for='status'>Status</label>

  <div class='toggle-container'>
    <label class='toggle-switch'>
      <input type='checkbox' id='toggle' onchange="toggle()">
      <span class='slider'></span>
    </label>
    <span class='status' id='status'>Active</span>
  </div>
</div>
~~~

### 10.2 Template: Toggle JS (Single)
~~~javascript
function preselectToggle(statusValue) {
  const toggle = document.getElementById('toggle');
  const status = document.getElementById('status');

  if (!toggle || !status) return;

  if (statusValue === 'Active') {
    toggle.checked = true;
    status.textContent = 'Active';
  } else {
    toggle.checked = false;
    status.textContent = 'Inactive';
  }
}

window.onload = function() {
  preselectToggle('Active'); /* inject FileMaker value */
};

function toggle() {
  const status = document.getElementById('status');
  const toggle = document.getElementById('toggle');

  if (!toggle || !status) return;

  status.textContent = toggle.checked ? 'Active' : 'Inactive';
}
~~~

### 10.3 Template: Save Extraction (Text state)
~~~javascript
const status = document.getElementById('status').textContent.trim();
~~~

---

## 11) Minimal Acceptance Checklist (AI Agent)

A Toggle Switch implementation is correct only if:

- HTML includes:
  - a checkbox input
  - a slider span
  - a visible label span storing the text state
- JavaScript includes:
  - init logic (preselect) based on a FileMaker-provided value
  - change logic updating the label text
- Save logic reads the label text and includes it in the parameter payload
- All ids used in JS exist in HTML and match exactly