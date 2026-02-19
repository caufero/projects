# CauferoAppStarter Documentation
## Segmented Control Buttons and How They Are Implemented and Used

> Purpose of this doc  
> Train an AI Agent to correctly implement **segmented control buttons** in CauferoAppStarter WebViewer pages, including:
> 1) The HTML structure used to render segmented controls  
> 2) How default (preselected) state is applied from FileMaker data  
> 3) The JavaScript logic that toggles the active selection  
> 4) How the selected value is read and sent back to FileMaker on Save  
> 5) Styling rules and class contracts  
> 6) Common failure modes and correct fixes

This documentation is based on your sample page implementation for **Gender**:
- segmented control container: `.segmented-control`
- segment buttons: `<button ...>`
- selected state: `class='active'`
- click handler: `onclick="selectSegmentedControl(this)"`
- save logic reads: `.segmented-control button.active`

---

## 1) What a Segmented Control Means in CauferoAppStarter

A segmented control is a UI control that looks like a single grouped toggle, but it is actually multiple buttons.
Only one option is selected at a time (single-select).

Use it when:
- options are few (2–5)
- options are mutually exclusive
- you want a fast tap/click selection
- dropdown would feel slow or unnecessary

Examples:
- Gender: Male / Female
- Status: Active / Inactive
- Type: Individual / Company
- Payment mode: Cash / MoMo / Card
- Yes/No decisions

In this framework, segmented controls are implemented using:
- plain HTML buttons
- a CSS class `active` for the selected state
- a shared JS function `selectSegmentedControl(button)` that sets active state

---

## 2) Canonical HTML Pattern

### 2.1 Basic structure
A segmented control is composed of:
1. A wrapper with class `.segmented-control`
2. Multiple `<button>` elements inside the wrapper
3. Each button has:
   - display text (the value)
   - onclick handler `selectSegmentedControl(this)`
   - optional `class='active'` when preselected

### 2.2 Example from the sample page (Gender)
~~~html
<div class='form-group form-group-2'>
  <label for='gender'>Gender</label>

  <div class='segmented-control'>
    <button class='active' onclick="selectSegmentedControl(this)">Male</button>
    <button onclick="selectSegmentedControl(this)">Female</button>
  </div>
</div>
~~~

### 2.3 Preselecting the active button (FileMaker-driven)
Your sample uses FileMaker string concatenation:

~~~html
<button " & If ( $Gender = "Male" ; "class='active'" ) & " onclick="selectSegmentedControl(this)">Male</button>
<button " & If ( $Gender = "Female" ; "class='active'" ) & " onclick="selectSegmentedControl(this)">Female</button>
~~~

### Rule
Preselect by injecting `class='active'` onto exactly one button if a stored value exists.

---

## 3) FileMaker Preprocessing for Default Selection

### 3.1 The field value is loaded from the record
Your script sets:
~~~filemaker
Set Variable [ $Gender ; Value: GetValue ( $Link Record As List ; 7 ) ]
~~~

### 3.2 The HTML uses `$Gender` to determine which button gets `active`
~~~filemaker
If ( $Gender = "Male" ; "class='active'" )
If ( $Gender = "Female" ; "class='active'" )
~~~

### Rule
Segmented control defaults must be determined server-side (FileMaker) during page build, not by guessing in JS.

---

## 4) JavaScript Toggle Logic

### 4.1 Canonical toggle function from your page
~~~js
function selectSegmentedControl(button) {
  const buttons = document.querySelectorAll('.segmented-control button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}
~~~

### What this function does
1. Finds all segmented control buttons (globally)
2. Removes active from all
3. Adds active to the clicked button

---

## 5) Important Constraint: Multiple Segmented Controls on One Page

### Problem in current implementation
Your sample uses:
~~~js
document.querySelectorAll('.segmented-control button')
~~~
This means:
- if there are multiple segmented controls on the page, clicking one will clear the active state in all segmented controls

### Required implementation rule for scalable pages
The AI Agent must scope the selection to the clicked control only.

### 5.1 Correct scoped version (recommended standard)
~~~js
function selectSegmentedControl(button) {
  const container = button.closest('.segmented-control');
  if (!container) return;

  const buttons = container.querySelectorAll('button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}
~~~

### Rule
If the page can ever have more than one segmented control, always use the scoped version.

If you intentionally support only one segmented control per page, keep the global version.
The safer standard is scoped.

---

## 6) Reading the Selected Value (Save and Actions)

### 6.1 Canonical read pattern from your page
Your save function does:

~~~js
const genderButton = document.querySelector('.segmented-control button.active');
const gender = genderButton.textContent.trim();
~~~

Then includes `gender` in parameters.

### 6.2 Mandatory robustness rule
If no button is selected, `genderButton` will be null and Save will crash.

A safe pattern:
~~~js
const genderButton = document.querySelector('.segmented-control button.active');
const gender = genderButton ? genderButton.textContent.trim() : '';
~~~

### Rule
When reading a segmented control value:
- default to empty string if none is selected
- enforce required logic before calling FileMaker script if necessary

---

## 7) Passing the Segmented Value to FileMaker

### 7.1 Standard parameter join pattern
~~~js
const parameters = [ ..., gender, ... ].join('|');
FileMaker.PerformScript('Save Staff', parameters);
~~~

### Rule
Segment values must be stable strings.
Prefer using values that match your database enums exactly.

Example:
- store "Male" / "Female"
not:
- store "M" / "F" unless your database expects it

If the displayed text differs from stored value, use a data attribute.

---

## 8) Using Data Attributes (When Display Text Is Not the Stored Value)

If you want button text to be user-friendly but store an internal code:
- use `data-value`

Example:
~~~html
<div class='segmented-control' id='payment_mode'>
  <button data-value='cash' onclick="selectSegmentedControl(this)">Cash</button>
  <button data-value='momo' onclick="selectSegmentedControl(this)">MoMo</button>
  <button data-value='card' onclick="selectSegmentedControl(this)">Card</button>
</div>
~~~

Read value:
~~~js
const activeBtn = document.querySelector('#payment_mode button.active');
const payment_mode = activeBtn ? activeBtn.getAttribute('data-value') : '';
~~~

### Rule
Use `data-value` whenever:
- displayed label is not the stored value
- you may change button text later without changing database values

---

## 9) Preselecting by Value With Data Attributes (FileMaker)

If using `data-value`, FileMaker must set the `active` class by comparing the stored value.

Example pattern:
~~~filemaker
<button " & If ( $PaymentMode = "cash" ; "class='active'" ) & " data-value='cash' onclick="selectSegmentedControl(this)">Cash</button>
~~~

### Rule
Preselect logic must always reference the stored enum, not display text.

---

## 10) Styling Rules and Class Contract

### 10.1 Required classes
Segmented control depends on these:
- wrapper: `.segmented-control`
- active state: `.active`

### 10.2 CSS source
Your page pulls CSS via:
- `Perform Script [ “🖌️ Use Details CSS” ]`
- `Perform Script [ “🖌️ Use Dashboard CSS” ]`

The AI Agent must:
- reuse `.segmented-control` and `.active`
- not invent new class names unless the CSS is extended intentionally

---

## 11) Copy-Paste Templates

### 11.1 Template A: Simple 2-option segmented control
~~~html
<div class='form-group-2'>
  <label>Status</label>
  <div class='segmented-control' id='status_control'>
    <button class='active' onclick="selectSegmentedControl(this)">Active</button>
    <button onclick="selectSegmentedControl(this)">Inactive</button>
  </div>
</div>
~~~

JS:
~~~js
function selectSegmentedControl(button) {
  const container = button.closest('.segmented-control');
  if (!container) return;
  container.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}
~~~

Read value:
~~~js
const statusBtn = document.querySelector('#status_control button.active');
const status = statusBtn ? statusBtn.textContent.trim() : '';
~~~

### 11.2 Template B: Stored value differs from label
~~~html
<div class='form-group-2'>
  <label>Payment Mode</label>
  <div class='segmented-control' id='payment_mode'>
    <button data-value='cash' onclick="selectSegmentedControl(this)">Cash</button>
    <button data-value='momo' onclick="selectSegmentedControl(this)">MoMo</button>
    <button data-value='card' onclick="selectSegmentedControl(this)">Card</button>
  </div>
</div>
~~~

Read value:
~~~js
const btn = document.querySelector('#payment_mode button.active');
const paymentMode = btn ? btn.getAttribute('data-value') : '';
~~~

---

## 12) Quality Checklist for the AI Agent

When implementing segmented controls, the AI Agent must verify:

### HTML
1. wrapper uses `.segmented-control`
2. buttons are inside wrapper
3. each button calls `selectSegmentedControl(this)`
4. exactly one button is preselected when a stored value exists

### JS
5. toggle function exists
6. toggle function is scoped (recommended) to avoid multi-control collisions

### Save
7. selected value is read safely (null-safe)
8. value is included in script parameters in correct order

### Data consistency
9. stored values are stable and match database enums
10. if using `data-value`, save uses `data-value` not text

---

## 13) Common Failure Modes and Fixes

### 13.1 Clicking one segmented control breaks another
Cause:
- global selector: `.segmented-control button`
Fix:
- scope to closest container using `button.closest('.segmented-control')`

### 13.2 Save crashes because active button is null
Cause:
- no preselected value and user never clicked
Fix:
- use null-safe read and enforce required selection if needed

### 13.3 Preselect never works
Cause:
- FileMaker comparison value mismatch
Fix:
- ensure `$StoredValue` exactly matches the string being compared
- if using `data-value`, compare against the internal stored enum

### 13.4 Saved value changes when UI label changes
Cause:
- saving `textContent`
Fix:
- use `data-value` for stored value stability

---

## 14) Clarifications Needed (Ambiguities the AI Agent Cannot Guess)

To make segmented controls implementation perfect, confirm:

1. **Multiple segmented controls per page**
   - Is it guaranteed that there will be only one segmented control per page?
   - If not, the scoped JS version must be the standard.

2. **Stored value policy**
   - Do you store the visible label text (Male/Female)?
   - Or do you want internal values (M/F)?

3. **Validation policy**
   - Are segmented controls always required?
   - If required, do you want JS to block Save with an alert?

4. **Theme styling**
   - Are `.segmented-control` and `.active` styles consistent across all themes?

---

## 15) Implementation Standard (What the AI Agent Must Produce)

When asked to implement segmented control buttons in CauferoAppStarter, the AI Agent must produce:

1. A `.segmented-control` container with buttons
2. Preselect logic injected by FileMaker using `class='active'`
3. A JS function `selectSegmentedControl(button)` that toggles active state
4. Save logic that reads selected button safely and sends correct stored value to FileMaker
5. Scoped behavior if multiple segmented controls can exist on the same page