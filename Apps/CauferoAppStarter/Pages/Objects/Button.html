# CauferoAppStarter Documentation
## Buttons and How They Are Implemented and Used

> Purpose of this doc  
> Train an AI Agent to correctly implement **buttons** in CauferoAppStarter WebViewer pages, including:
> 1) Button categories used in the framework  
> 2) The HTML patterns and class contracts for each category  
> 3) How buttons call JavaScript functions  
> 4) How JavaScript functions call FileMaker scripts with `FileMaker.PerformScript`  
> 5) How parameters are built, encoded, and delimited  
> 6) How conditional buttons are shown or hidden based on FileMaker variables  
> 7) Common pitfalls and correct fixes

This documentation is based on the patterns in your sample page, which uses buttons for:
- Save
- Cancel
- Print Staff ID Card
- Show Attendance Records
- Grant System Access
- Segmented control buttons (covered in a separate doc)
- Summary image modal click (clickable container behaves like a button)

---

## 1) What a Button Means in CauferoAppStarter

A button is any clickable UI element that triggers an action:
- Save record
- Navigate back to list page
- Open a modal page
- Load a subtable section
- Run a server-side calculation
- Print
- Grant access
- View record details

In this framework, buttons are implemented as:
- HTML `<button>` elements styled using theme CSS classes
- Each button calls a JavaScript function via `onclick="..."`
- JavaScript then calls FileMaker scripts using `FileMaker.PerformScript(scriptName, parameters)`

---

## 2) Button Categories in the Framework

The AI Agent must recognize and implement these categories:

1. **Primary action buttons**  
   Examples: Save, Submit, Create, Confirm

2. **Secondary action buttons**  
   Examples: Cancel, Back, Close, Reset

3. **Context buttons**  
   Examples: Print ID, Show Records, Refresh Metrics

4. **Conditional buttons**  
   Buttons that appear only when a condition is true  
   Example: "Give access" appears only when `$Username` is empty

5. **Icon buttons**  
   Buttons with Font Awesome icons for quick recognition

6. **Non-button clickable elements**  
   Containers or images that act like buttons  
   Example: `.image-container` clickable to open image modal

---

## 3) Core Rules (Non-Negotiable)

### 3.1 Buttons do not call FileMaker scripts directly
Buttons call JavaScript functions.
JavaScript functions call FileMaker scripts.

This creates a consistent architecture:
- UI layer: HTML
- orchestration layer: JavaScript
- server/data layer: FileMaker scripts

### 3.2 Button actions must be declared in variables (FileMaker side)
Script names are set as variables so the page generator can swap them easily.

Example from your script:
~~~filemaker
Set Variable [ $Save Record Script ; Value: "Save Staff" ]
Set Variable [ $Cancel Script ; Value: "+++ Staff List Page" ]
Set Variable [ $Grant System Access Script ; Value: "Grant System Access To Staff" ]
Set Variable [ $Get Attendance FM Script ; Value: "Get Staff Attendance" ]
~~~

### 3.3 Button click must be deterministic
The AI Agent must ensure every button:
- has a clear label
- calls a defined function
- function exists in the `$Scripts` bundle
- function calls the correct FileMaker script name variable

### 3.4 Parameter delimiter is `|`
Your system uses:
~~~js
const parameters = [ a, b, c ].join('|');
~~~

Therefore:
- never allow raw user input containing `|`
- encode values that can contain special characters

---

## 4) HTML Implementation Patterns

### 4.1 Standard button with CSS class
From your summary section:

~~~html
<button class='save-button' onclick="saveItemInfo()">
  <i class='fas fa-save'></i> Save
</button>

<button class='cancel-button' onclick="cancelAction()">
  <i class='fas fa-times-circle'></i> Cancel
</button>
~~~

Key components:
- `class`: determines styling based on theme CSS
- `onclick`: calls JS function
- icon: `<i class='...'></i>`
- label text

### 4.2 Full-width primary button (context action)
From your page:

~~~html
<button class='button_blue' style='width: 100%; justify-content: center;' onclick="printStaffIDCard()">
  <i class='fa-solid fa-file'></i> Print Staff ID Card
</button>
~~~

### 4.3 Small context button (inline action)
From attendance section:

~~~html
<button class='button_blue_' style='width: auto' onclick="getAttendance()">
  <i class='fas fa-plus'></i> Show Records
</button>
~~~

### 4.4 Conditional button
From Tab 9 (Access), the button appears only if `$Username` is empty:

~~~html
<button class='button_green_' style='width: auto; position: relative;' onclick="grantSystemAccess()">
  <i class='fas fa-plus'></i> Give him/her access to {{APP_NAME}}
</button>
~~~

This is injected conditionally using FileMaker `If ( IsEmpty ( $Username ) ; ... ; ... )`.

---

## 5) JavaScript Implementation Patterns

### 5.1 Navigation or cancel action button
From your page:

~~~js
function cancelAction() {
  FileMaker.PerformScript('+++ Staff List Page');
}
~~~

In the script generator, the name is injected using `$Cancel Script`:
~~~filemaker
Set Variable [ $Cancel Action Script ;
"function cancelAction() {
  FileMaker.PerformScript('" & $Cancel Script & "');
}"
]
~~~

### 5.2 Save action button (collect inputs and send to FileMaker)
From your page:

~~~js
function saveItemInfo() {

  const staff_number = document.getElementById('staff_number').value;
  const title = document.getElementById('title').value;
  const first_name = document.getElementById('first_name').value;

  const genderButton = document.querySelector('.segmented-control button.active');
  const gender = genderButton.textContent.trim();

  const dob = getMySQLFormattedDate('dob');

  const residential_address = encodeURIComponent(document.getElementById('residential_address').value);

  const parameters = [
    staff_number,
    title,
    first_name,
    gender,
    dob,
    residential_address
  ].join('|');

  FileMaker.PerformScript('Save Staff', parameters);
}
~~~

### 5.3 Button that runs a FileMaker action with computed parameters
From your page (Grant Access):

~~~js
function grantSystemAccess() {

  const staff_number = encodeURIComponent(document.getElementById('staff_number').value);
  const first_name = encodeURIComponent(document.getElementById('first_name').value);
  const last_name = encodeURIComponent(document.getElementById('last_name').value);
  const email = encodeURIComponent(document.getElementById('email').value);

  const parameters = [ staff_number, first_name, last_name, email ].join('|');

  FileMaker.PerformScript('Grant System Access To Staff', parameters);
}
~~~

### 5.4 Button that refreshes data using datepicker helper
From your page (Attendance):

~~~js
function getAttendance() {

  const from_date = getMySQLFormattedDate('from_date');
  const to_date = getMySQLFormattedDate('to_date');

  const parameters = [ from_date, to_date ].join('|');

  FileMaker.PerformScript('Get Staff Attendance', parameters);
}
~~~

---

## 6) Parameter Packaging Rules

### 6.1 Use `|` join for multi-parameter payloads
Standard:
~~~js
const parameters = [ p1, p2, p3 ].join('|');
~~~

### 6.2 Encoding policy (critical)
Encode any value that can include:
- line breaks
- commas
- special characters
- spaces (optional)
- or delimiter `|` (must)

Your sample encodes:
- textareas: residential_address, postal_address
- role: role

Your sample does not encode many text fields like names.
This is workable but unsafe if users can type `|`.

Recommended framework rule:
- encode every user-entered string except numeric fields, unless you have a strict reason not to

Safe pattern:
~~~js
const safe = encodeURIComponent(document.getElementById('field').value);
~~~

### 6.3 Decode policy in FileMaker
If you encode in JS, FileMaker must decode.
If your framework has a dedicated decode function, the AI Agent must use it.
If not, you must define the canonical decode method.

---

## 7) Script Name Injection Pattern (FileMaker Side)

Buttons do not hardcode script names.
Script names are set in variables and injected into JS.

Example:
~~~filemaker
Set Variable [ $Get Attendance FM Script ; Value: "Get Staff Attendance" ]

Set Variable [ $Get Attendance Script ;
"function getAttendance() {
  const from_date = getMySQLFormattedDate('from_date');
  const to_date = getMySQLFormattedDate('to_date');
  const parameters = [ from_date, to_date ].join('|');
  FileMaker.PerformScript('" & $Get Attendance FM Script & "', parameters);
}"
]
~~~

### Rule
Every button that triggers a FileMaker script must:
1. define a `$... Script` variable containing the script name
2. define a `$... JS` variable containing the JavaScript function
3. include that JS in the `$Scripts` bundle
4. reference the JS function in HTML `onclick`

---

## 8) Conditional Buttons (Display Logic)

### 8.1 FileMaker decides if a button should exist
In Tab 9:
- if `$Username` is empty: show "Give access" button
- else: show user details and role dropdown

Pattern:
~~~filemaker
If (
  IsEmpty ( $Username ) ;
  "<button ... onclick='grantSystemAccess()'>...</button>" ;
  "<div>... user details ...</div>"
)
~~~

### Rule
Conditional buttons should be controlled by FileMaker page generation, not by JS hiding.
This prevents hidden actions from being accidentally triggered.

---

## 9) Button Placement Patterns Used in Pages

### 9.1 Summary section action buttons
Your summary section uses a `.button-container` with Save and Cancel.

~~~html
<div class='button-container'>
  <button class='save-button' onclick="saveItemInfo()"><i class='fas fa-save'></i> Save</button>
  <button class='cancel-button' onclick="cancelAction()"><i class='fas fa-times-circle'></i> Cancel</button>
</div>
~~~

### 9.2 Context button inside a form grid row
Attendance tab shows "Show Records" aligned with the date filters.

~~~html
<div class='form-group-2'>
  <label for='gps'> . </label>
  <button class='button_blue_' style='width: auto' onclick="getAttendance()">
    <i class='fas fa-plus'></i> Show Records
  </button>
</div>
~~~

Rule:
- Use an empty label placeholder where needed to keep grid alignment consistent.

---

## 10) Non-Button Clickable Elements (Button Behavior Without `<button>`)

Your summary photo uses a clickable container:

~~~html
<div class='image-container' onclick='openImageModal()'>
  <img src='...' alt='Staff Photo' class='summary-image' />
  <i class='fas fa-search-plus summary-image-icon'></i>
</div>
~~~

Rule:
- Any clickable container must still call a JS function
- Keep the same architecture: HTML event triggers JS function

---

## 11) Copy-Paste Templates

### 11.1 Template A: Primary Save button
~~~html
<button class='save-button' onclick="saveItemInfo()">
  <i class='fas fa-save'></i> Save
</button>
~~~

### 11.2 Template B: Secondary Cancel button
~~~html
<button class='cancel-button' onclick="cancelAction()">
  <i class='fas fa-times-circle'></i> Cancel
</button>
~~~

### 11.3 Template C: Context button that calls FileMaker script with params
~~~html
<button class='button_blue_' style='width:auto' onclick="doActionX()">
  <i class='fas fa-play'></i> Run Action
</button>
~~~

JS:
~~~js
function doActionX() {
  const a = encodeURIComponent(document.getElementById('a').value);
  const b = encodeURIComponent(document.getElementById('b').value);
  const parameters = [ a, b ].join('|');
  FileMaker.PerformScript('{{FM_SCRIPT_NAME}}', parameters);
}
~~~

### 11.4 Template D: Conditional button block (FileMaker)
~~~filemaker
Set Variable [ $HTML ;
If (
  {{condition}} ;
  "<button class='button_green_' onclick=\"runSpecialAction()\"><i class='fas fa-plus'></i> Do Special Thing</button>" ;
  ""
)
]
~~~

---

## 12) Quality Checklist for the AI Agent

When implementing buttons, the AI Agent must verify:

### HTML
1. button has correct class for style
2. button text describes action clearly
3. button uses `onclick="functionName()"`
4. icons use Font Awesome classes already loaded on the page

### JS
5. function exists in `$Scripts`
6. function builds params using `|` delimiter
7. values are encoded when needed
8. function calls `FileMaker.PerformScript(scriptName, params)`

### FileMaker
9. script name is stored in a `$... Script` variable
10. HTML and JS strings inject that variable correctly
11. conditional button logic is generated by FileMaker when required

---

## 13) Common Failure Modes and Fixes

### 13.1 Button does nothing on click
Cause:
- JS function name mismatch between HTML and JS
Fix:
- ensure `onclick="saveItemInfo()"` matches `function saveItemInfo() { ... }`

### 13.2 FileMaker script does not run
Cause:
- wrong script name injected
Fix:
- confirm `$Save Record Script` contains the exact script name

### 13.3 Parameters arrive broken in FileMaker
Cause:
- user input contains `|`
Fix:
- encode values before join
- decode in FileMaker

### 13.4 Page loads but JS errors stop all buttons
Cause:
- one script block has syntax error
Fix:
- ensure every `$... Script` string is valid JS
- avoid unescaped quotes inside injected strings

### 13.5 Conditional button appears when it should not
Cause:
- FileMaker condition is wrong
Fix:
- confirm the actual variable (example: `$Username`) and its empty state

---

## 14) Clarifications Needed (Ambiguities the AI Agent Cannot Guess)

To make button implementation perfect, clarify these:

1. **Encoding standard**
   - Should the AI Agent encode all user-entered values before joining parameters?
   - If yes, what is the canonical decode method in FileMaker?

2. **Button class standard**
   - Which classes are official and must be used:
     - `save-button`, `cancel-button`, `button_blue`, `button_blue_`, `button_green_`
   - Are there additional button classes for danger actions (delete)?

3. **Disable and loading state**
   - Do you want the AI Agent to implement:
     - disabling buttons during script calls
     - showing a spinner or "Saving..." state

4. **Confirm dialogs**
   - Do you want confirmation prompts for destructive actions (delete, remove access)?

---

## 15) Implementation Standard (What the AI Agent Must Produce)

When asked to add a button in CauferoAppStarter, the AI Agent must produce:

1. HTML `<button>` with the correct CSS class and icon
2. `onclick` calling a named JavaScript function
3. JavaScript function that:
   - collects any required values by id
   - encodes values where necessary
   - builds parameters using `|`
   - calls `FileMaker.PerformScript` with an injected script name variable
4. FileMaker variables:
   - one variable holding the target script name
   - one variable holding the JS function code
5. Conditional logic in FileMaker for buttons that must appear only in specific states