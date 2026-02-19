# CauferoAppStarter Documentation
## Text Fields in Pages (How to Add Them and How They Work)

> Purpose of this doc  
> Train an AI Agent to correctly add, render, prefill, read, and save **text fields** inside CauferoAppStarter WebViewer pages (HTML built in FileMaker scripts).

---

## 1) What a "Text Field" Means in CauferoAppStarter

In CauferoAppStarter pages, a "text field" is a standard HTML field element rendered in the WebViewer, then read by JavaScript, then sent back to FileMaker via `FileMaker.PerformScript()`.

Text fields include:

1. **Single line text input**
   - `<input type='text' ...>`
2. **Multi-line text input**
   - `<textarea ...>...</textarea>`
3. **Read-only or computed text**
   - `<input type='text' ... disabled>`
4. **Text inputs that are controlled by another UI behavior**
   - Example: a date field still uses `<input type='text'>` but is controlled by Flatpickr

This document focuses on text fields only.

---

## 2) The Full Lifecycle of a Text Field

Every text field follows the same lifecycle:

### Step A: FileMaker prepares the value
- Data is fetched from SQL and assigned to FileMaker variables like:
  - `$Staff Number`, `$First Name`, `$Residential Address`, etc.
- Any special formatting is handled in FileMaker:
  - Example: `ConvertLineBreakMarkersToReturns ( ... )`

### Step B: FileMaker injects the value into the HTML
- The value is injected into the `value='...'` attribute for inputs
- Or inserted between `<textarea> ... </textarea>`

### Step C: User edits the field in the WebViewer
- User types into the input or textarea

### Step D: JavaScript reads the value
- Example:
  - `document.getElementById('first_name').value`

### Step E: JavaScript builds a parameter string and calls FileMaker
- Parameters are joined with a delimiter
- Example delimiter used in your page:
  - `|`
- Then:
  - `FileMaker.PerformScript('Save Staff', parameters)`

### Step F: FileMaker receives, parses, and saves
- The FileMaker script receiving the parameters splits and assigns fields

---

## 3) Core Rules (Non-Negotiable)

### 3.1 Every text field MUST have a stable `id`
The `id` is the primary key used by JavaScript.

Bad:
- random IDs
- duplicate IDs
- IDs that change

Good:
- `staff_number`
- `first_name`
- `residential_address`

### 3.2 Every text field MUST have a matching `<label for='...'>`
The label improves usability and helps the AI Agent place fields consistently.

Example:
~~~html
<label for='phone'>Phone</label>
<input type='text' id='phone' value='...'>
~~~

### 3.3 Always use one of the standard layout containers
From your page:
- `form-grid1`
- `form-grid2`
- `form-grid3`
- `form-group-2`
- `combined-inputs-container`

These containers control spacing and responsiveness.

### 3.4 Parameter delimiter risk: encode any value that can break the delimiter
Your save script joins values using `|`.

If a text field can contain `|`, line breaks, or other special characters, you must encode it with `encodeURIComponent()` before joining.

Your sample already does this for:
- `residential_address`
- `postal_address`
- `role`

That is correct behavior.

---

## 4) Field Naming Convention

Use these rules for IDs:

- **snake_case**
- **lowercase**
- **descriptive**
- match FileMaker field meaning

Examples from your page:
- `staff_number`
- `first_name`
- `other_names`
- `last_name`
- `hometown`
- `phone`
- `email`
- `gps`
- `bank`
- `branch`
- `account_number`
- `residential_address`
- `postal_address`

---

## 5) Adding a Single Line Text Field

### 5.1 Pattern
~~~html
<div class='form-group-2'>
  <label for='FIELD_ID'>LABEL</label>
  <input type='text' id='FIELD_ID' placeholder='OPTIONAL_PLACEHOLDER' value='PRE_FILLED_VALUE'>
</div>
~~~

### 5.2 Example from your page (Phone)
~~~html
<div class='form-group-2'>
  <label for='phone'>Phone</label>
  <input type='text' id='phone' value='{{PHONE}}'>
</div>
~~~

### 5.3 FileMaker injection pattern
In FileMaker, build the HTML string like:
~~~filemaker
Set Variable [ $Tab2 HTML ;
"
...
<input type='text' id='phone' value='" & $Phone & "'>
...
"
]
~~~

### 5.4 When to use `placeholder`
Use placeholder when you expect the field can be empty and you want guidance:
~~~html
<input type='text' id='hometown' placeholder='Type hometown...' value='{{HOMETOWN}}'>
~~~

---

## 6) Adding a Multi-Line Text Field (Textarea)

Textarea is used for longer text, addresses, notes, and descriptions.

### 6.1 Pattern
~~~html
<div class='form-group-2'>
  <label for='FIELD_ID'>LABEL</label>
  <textarea id='FIELD_ID' placeholder='OPTIONAL_PLACEHOLDER'>PRE_FILLED_TEXT</textarea>
</div>
~~~

### 6.2 Example from your page (Residential Address)
~~~html
<div class='form-group-2'>
  <label for='residential_address'>Residential Address</label>
  <textarea id='residential_address' placeholder='Type the residential address here...'>{{RESIDENTIAL_ADDRESS}}</textarea>
</div>
~~~

### 6.3 Pre-fill rule for textarea
- Inputs use `value='...'`
- Textarea uses inner text between tags

Correct:
~~~html
<textarea id='postal_address'>{{POSTAL_ADDRESS}}</textarea>
~~~

Wrong:
~~~html
<textarea id='postal_address' value='{{POSTAL_ADDRESS}}'></textarea>
~~~

### 6.4 Line breaks rule
If FileMaker stores text with custom break markers, convert them before injecting into HTML.

Your page does:
~~~filemaker
Set Variable [ $Residential Address ;
  Value: ConvertLineBreakMarkersToReturns ( GetValue ( $Link Record As List ; 14 ) )
]
~~~

This is good. It means the injected textarea text looks like real address lines.

---

## 7) Adding a Read-Only Text Field (Computed Display)

A read-only text field is a normal text input that the user cannot edit.

### 7.1 Pattern
~~~html
<div class='form-group-2'>
  <label for='age'>Age</label>
  <input type='text' id='age' value='{{AGE}}' disabled>
</div>
~~~

### 7.2 Example from your page (Age)
~~~html
<div class='form-group-2'>
  <label for='age'>Age</label>
  <input type='text' id='age' placeholder='0 years' value='{{AGE}}' disabled>
</div>
~~~

### 7.3 Save rule
Disabled fields are usually not read and saved. If you do read them, they are often derived values anyway.

In your save logic, you do not read `age`. That is correct.

---

## 8) Adding Text Fields Inside "Combined Inputs" UI

Your page has a "Full Name" area where one label covers multiple inputs arranged together.

### 8.1 Structure used in your page
~~~html
<div class='form-group form-group-2'>
  <label for='size'>Full Name</label>

  <div class='combined-inputs-container'>
    <select class='combined-inputs-dropdown' id='title' ...>...</select>
    <input class='combined-inputs-input' type='text' id='first_name' ...>
    <input class='combined-inputs-input' type='text' id='other_names' ...>
    <input class='combined-inputs-input' type='text' id='last_name' ...>
  </div>
</div>
~~~

### 8.2 Text-field rule inside combined inputs
- Each input still needs its own unique `id`
- Each input still must be read individually in `saveItemInfo()`

---

## 9) Reading Text Field Values in JavaScript

### 9.1 Standard rule
Every text field is read using:
~~~js
const value = document.getElementById('FIELD_ID').value;
~~~

### 9.2 Examples from your save function
From your page:
~~~js
const staff_number = document.getElementById('staff_number').value;
const first_name = document.getElementById('first_name').value;
const last_name = document.getElementById('last_name').value;
const phone = document.getElementById('phone').value;
const email = document.getElementById('email').value;
const gps = document.getElementById('gps').value;
const bank = document.getElementById('bank').value;
~~~

### 9.3 Encoding rule (critical)
If a field can contain:
- line breaks
- pipes `|`
- commas are fine
- long paragraphs
then encode it before joining:

~~~js
const residential_address = encodeURIComponent(
  document.getElementById('residential_address').value
);
~~~

Your page does exactly this. That is correct.

---

## 10) Saving Text Field Values (Parameter Construction)

### 10.1 The standard pattern in your pages
1. Collect field values
2. Join them with `|`
3. Call FileMaker script

~~~js
const parameters = [ a, b, c, d ].join('|');
FileMaker.PerformScript('Save Staff', parameters);
~~~

### 10.2 Why the delimiter matters
Your delimiter is `|`.

If a user enters `|` into any text field, FileMaker will mis-split the parameter list and your data will land in wrong variables.

That is why encoding is mandatory for any risky field.

---

## 11) Where Text Fields Live in the Page Layout

### 11.1 Tabs contain fields
Your page uses tabs (`Details`, `Contact`, etc.). Each tab HTML can contain text fields.

Examples:
- Tab 1 (Details) contains:
  - `staff_number`
  - `first_name`, `other_names`, `last_name`
  - `hometown`
- Tab 2 (Contact) contains:
  - `phone`, `email`, `gps`
  - `residential_address`, `postal_address`
- Tab 5 (Remunerations) contains:
  - `bank`, `branch`, `account_number`

### 11.2 Use grids to control width and alignment
From your page:
- `form-grid3` used for 3 columns
- `form-grid2` used for 2 columns

Example:
~~~html
<div class='form-grid3'>
  <div class='form-group-2'>...</div>
  <div class='form-group-2'>...</div>
  <div class='form-group-2'>...</div>
</div>
~~~

---

## 12) Text Fields That Look Like Text Fields but Behave Differently

Some fields are still `<input type='text'>` but are controlled by scripts.

### 12.1 Date fields (still text inputs)
In your page:
- `dob`
- `from_date`
- `to_date`

They are text inputs, but Flatpickr controls them and converts to MySQL date format via `getMySQLFormattedDate()`.

This doc treats them as text fields structurally, but their behavior belongs to a separate doc for "Date Fields".

---

## 13) Quality Checklist for the AI Agent

When the AI Agent adds a new text field, it MUST verify:

1. The field is placed inside the correct grid container
2. The field has a stable `id`
3. The label `for` matches the `id`
4. The field is prefilled properly from FileMaker variables
5. The field is read in JS with `getElementById(id).value`
6. The field is included in `parameters` in the correct order
7. If the field can contain risky characters, it is encoded with `encodeURIComponent()`
8. If it is a textarea, prefill text is inside the element body
9. If it is read-only, it uses `disabled` and is excluded from save unless explicitly required

---

## 14) Copy-Paste Templates

### 14.1 Single line text field template
~~~html
<div class='form-group-2'>
  <label for='FIELD_ID'>LABEL</label>
  <input type='text' id='FIELD_ID' placeholder='PLACEHOLDER' value='{{VALUE}}'>
</div>
~~~

### 14.2 Textarea template
~~~html
<div class='form-group-2'>
  <label for='FIELD_ID'>LABEL</label>
  <textarea id='FIELD_ID' placeholder='PLACEHOLDER'>{{VALUE}}</textarea>
</div>
~~~

### 14.3 Disabled text field template
~~~html
<div class='form-group-2'>
  <label for='FIELD_ID'>LABEL</label>
  <input type='text' id='FIELD_ID' value='{{VALUE}}' disabled>
</div>
~~~

### 14.4 JS read template
~~~js
const FIELD_ID = document.getElementById('FIELD_ID').value;
~~~

### 14.5 JS encode template
~~~js
const FIELD_ID = encodeURIComponent(document.getElementById('FIELD_ID').value);
~~~

---

## 15) Common Failure Modes and Fixes

### 15.1 Field does not save
Cause:
- Field ID not included in `saveItemInfo()`

Fix:
- Add:
  - `const x = document.getElementById('your_field').value;`
  - include `x` in the joined parameter list

### 15.2 Data lands in wrong FileMaker variable
Cause:
- A user typed `|` into a field that was not encoded

Fix:
- Encode that field with `encodeURIComponent()`

### 15.3 Textarea loses line breaks
Cause:
- FileMaker value injected without converting markers properly
- Or the value is stored with a custom marker system

Fix:
- Convert in FileMaker before injection
- Example:
  - `ConvertLineBreakMarkersToReturns ( ... )`

### 15.4 Field displays wrong prefill value
Cause:
- Wrong FileMaker variable injected
- Or quoting breaks the HTML attribute

Fix:
- Ensure the correct FileMaker variable is used
- If you have apostrophes and quoting issues, switch to safe escaping rules in your HTML builder (see Clarifications section)

---

## 16) Clarifications Needed (Ambiguities the AI Agent Cannot Guess)

These must be clarified by you because the AI Agent cannot safely assume them.

1. **Encoding policy**
   - Right now, you only encode some fields (addresses, role).
   - Question: Should the standard be:
     - encode only multi-line fields
     - or encode every text field before joining
   - Recommendation for safety:
     - encode every field that can contain `|` or line breaks
     - optionally encode all fields to eliminate delimiter risk completely

2. **HTML escaping policy for values**
   - Values injected into `value='...'` can break HTML if they contain `'` or special characters.
   - Question: Do you have an existing escaping function or standard for:
     - escaping `'` to `&#39;`
     - escaping `&` to `&amp;`
     - escaping `<` and `>`
   - If there is a standard, the AI Agent must follow it.

3. **Canonical "Text Field Component"**
   - In the sample, text fields are raw HTML tags.
   - Question: Do you have a reusable component function or XML snippet for text fields, or should the AI Agent always generate raw HTML tags inside `$TabX HTML`?

4. **Validation**
   - Question: Do you have a standard validation style for required text fields?
     - Example: required attribute, inline red border, message block, or server-side only

5. **Field order in parameters**
   - The save function depends on strict parameter order.
   - Question: Is there a documented contract for the parameter order per page, or does each page define its own order?

---

## 17) Minimum Example (End to End)

This is an end-to-end reference for adding one new text field called "Nickname".

### 17.1 FileMaker: set variable
~~~filemaker
Set Variable [ $Nickname ; Value: GetValue ( $Link Record As List ; 99 ) ]
~~~

### 17.2 HTML: add field to a grid
~~~html
<div class='form-group-2'>
  <label for='nickname'>Nickname</label>
  <input type='text' id='nickname' placeholder='Optional nickname' value='{{NICKNAME}}'>
</div>
~~~

### 17.3 JS: read field value
~~~js
const nickname = document.getElementById('nickname').value;
~~~

### 17.4 JS: add to parameters (encode if needed)
~~~js
const nicknameSafe = encodeURIComponent(nickname);
const parameters = [ staff_number, first_name, nicknameSafe ].join('|');
FileMaker.PerformScript('Save Staff', parameters);
~~~

---

## 18) Summary for the AI Agent (Do This Every Time)

When adding a text field:

1. Decide if it is input or textarea
2. Choose a clean snake_case `id`
3. Add `<label for='id'>`
4. Add the field inside a `form-gridX` container
5. Pre-fill it using the correct FileMaker variable
6. Read it in JS using `getElementById(id).value`
7. Encode it if it can break parameter joining
8. Append it to the `parameters` list in correct order
9. Confirm FileMaker save script expects it in that position

---