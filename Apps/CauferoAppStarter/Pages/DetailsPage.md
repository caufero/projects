# CauferoAppStarter Documentation
## Generating a Details Page (Entity Details UI in WebViewer)

This documentation trains an AI Agent to generate FileMaker scripts that build **details pages** in the CauferoAppStarter style.

A details page is a WebViewer-driven page that:
- Receives a selected record ID (and optional context parameters)
- Fetches record data (usually via `ExecuteSQL`)
- Optionally fetches dropdown data and related subtables
- Builds CSS, HTML, and JavaScript as strings
- Writes a complete HTML document to `$$Page`
- Uses buttons and UI actions that call FileMaker scripts via `FileMaker.PerformScript(...)`

This doc focuses on **how the page is structured and generated**.
Other docs will cover:
- Specific HTML objects (maps, KPI cards, graphs, accordions, segmented buttons, subtables)
- Reusable JavaScript utilities and widgets

---

## 1) Core Outcomes the AI Agent Must Produce

When asked to create a new details page script, the AI Agent must generate a FileMaker script that:

1. Sets global navigation context
   - `$$App Section`
   - `$$Selected Record ID`
   - Entity-specific globals like `$$Department ID`, `$$Staff ID`, `$$Leave Request ID`
   - Optional globals like `$$Search Item`, `$$Tab To Show`

2. Defines FileMaker scripts to be called from the page
   - Save script name
   - Cancel script name
   - Other action scripts (modals, insert image, view related record, add document, fetch attendance, etc.)

3. Fetches entity data
   - Prefer `ExecuteSQL` with a clear SELECT list
   - Parse the SQL result into variables
   - Apply defaults when record does not exist (new record cases)

4. Fetches dropdown data (value lists)
   - Use `Perform Script [ "Get Value List" ; Parameter: ... ]`
   - Store `Get ( ScriptResult )` into a variable used inside HTML or JS

5. Fetches related lists (subtables)
   - Use `Perform Script [ "+++ Display Subtable HTML" ; Parameter: ... ]` and store HTML
   - For documents: `+++ Display Documents Subtable HTML` where required
   - Insert subtable HTML into tabs or sections

6. Builds the page
   - CSS: `Perform Script [ "🖌️ Use Details CSS" ]` then optionally append extra CSS
   - HTML sections:
     - Summary section (left column feel)
     - Content section (tabs + tab bodies, or single body)
   - JavaScript functions:
     - `showContent`, `cancelAction`, `saveItemInfo`
     - Support functions for widgets used in page (toggle, segmented control, datepicker, modal open, etc.)

7. Produces full HTML document and assigns to `$$Page`
   - Full `<!DOCTYPE html> ... </html>`
   - Includes Font Awesome
   - Includes Flatpickr when datepickers are used
   - Includes Chart.js when charts are used

8. Ends with standard refresh behavior
   - `Perform Script [ "WebDirect Pause" ]`
   - `Refresh Window [ Flush cached join results ; Flush cached external data ]`

---

## 2) Details Page Script Layout (Canonical Order)

A CauferoAppStarter details page script must follow this order.

### 2.1) Page identity and primary record selection

Required at the top:

~~~filemaker
Set Variable [ $$App Section ; Value: "<Human-readable page title>" ]
Set Variable [ $$Selected Record ID ; Value: GetValue ( GetScriptParameters ; 1 ) ]
~~~

Then entity-specific globals:

~~~filemaker
Set Variable [ $$<Entity> ID ; Value: GetValue ( GetScriptParameters ; 1 ) ]
Set Variable [ $$Search Item ; Value: GetValue ( GetScriptParameters ; 2 ) ]
~~~

Notes:
- Parameter 1 is the selected record ID for almost every details page.
- Parameter 2 is frequently used as a search context value when returning to list pages.

Optional additional parameters:
- Date range filters
- Tab to show
- Related record IDs for modal detail pages

Example pattern (Staff page):

~~~filemaker
Set Variable [ $From Date ; Value: DefaultIfEmpty ( GetValue ( GetScriptParameters ; 3 ) ; Get ( CurrentDate ) ) ]
Set Variable [ $To Date ; Value: DefaultIfEmpty ( GetValue ( GetScriptParameters ; 4 ) ; Get ( CurrentDate ) ) ]
~~~

### 2.2) Define FileMaker scripts called by the page

Every major button or row action in the HTML must map to a FileMaker script name via a variable.

Typical set:

~~~filemaker
Set Variable [ $Save Record Script ; Value: "Save <Entity>" ]
Set Variable [ $Cancel Script ; Value: "+++ <Entity> List Page" ]
Set Variable [ $Delete Record Script ; Value: "" ]
~~~

Optional additional action scripts (examples from samples):
- Insert image script
- Open modal script
- View child record modal script
- Add document
- Get attendance
- Grant system access

Important rule:
- The JS functions must call `FileMaker.PerformScript('<script name>', parameters)` using these variables.
- Script variables should be defined even if empty to avoid referencing undefined variables.

### 2.3) Fetch the entity record data (usually via ExecuteSQL)

#### 2.3.1) SQL construction standard

Preferred approach:
- Build a SQL string with explicit field list
- Use `?` placeholder(s) for parameters
- Use `ExecuteSQL ( sql ; fieldseparator ; rowseparator ; id )`

Standard separators:
- `fieldseparator = "|"`
- `rowseparator = "¶"`

Example:

~~~filemaker
Set Variable [ $List ; Value:
Let (
[
  sql = "SELECT t1.\"Name\", t1.\"Description\" FROM \"Departments\" t1 WHERE t1.ID = ?" ;
  fieldseparator = "|" ;
  rowseparator = "¶" ;
  id = $$Department ID ;
  result = ExecuteSQL ( sql ; fieldseparator ; rowseparator ; id )
] ;
result
)
]
~~~

#### 2.3.2) Parsing pattern

After `ExecuteSQL`, parse like this:

~~~filemaker
Set Variable [ $Total ; Value: ValueCount ( $List ) ]

If [ $Total > 0 ]
  Loop
    Set Variable [ $i ; Value: $i + 1 ]
    Set Variable [ $Link Record ; Value: GetValue ( $List ; $i ) ]
    Set Variable [ $Link Record As List ; Value: Substitute ( $Link Record ; "|" ; ¶ ) ]

    Set Variable [ $Field1 ; Value: GetValue ( $Link Record As List ; 1 ) ]
    Set Variable [ $Field2 ; Value: GetValue ( $Link Record As List ; 2 ) ]

    Exit Loop If [ $i ≥ $Total ]
  End Loop
Else
  /* defaults for new record case */
End If
~~~

Notes:
- Even when a single row is expected, the scripts still use a loop. Keep that style.
- Long text fields should normalize line breaks:
  - `ConvertLineBreakMarkersToReturns ( GetValue ( ... ) )`

#### 2.3.3) Defaults logic

If no record found:
- Set smart defaults that allow creating a new record
- Or leave blank if your design does not support "new record from details page"

Examples:
- Staff: default nationality and status
- Leave request: default dates, staff identity, duration, status

The AI Agent must implement defaults only if the page supports creating new records.

### 2.4) Fetch value lists (dropdowns and JS dictionaries)

Use the dedicated value list script.

#### 2.4.1) Dropdown HTML options

Pattern:

~~~filemaker
Perform Script [ “Get Value List” ; Parameter: "Dropdown|<List Name>|" & <SelectedValueOrID> ]
Set Variable [ $<ListVarName> Dropdown ; Value: Get ( ScriptResult ) ]
~~~

Examples:
- `"Dropdown|Leave Types|" & $Leave Type ID`
- `"Dropdown|Staff|" & $HOD Staff ID`
- `"Dropdown|Nationalities|" & $Nationality`

The returned ScriptResult is HTML that can be inserted directly inside `<select> ... </select>`.

#### 2.4.2) JS dictionary data for dependent dropdowns

Pattern:

~~~filemaker
Perform Script [ “Get Value List” ; Parameter: "JS|<List Name>|" & <SelectedValue> ]
Set Variable [ $<ListVarName> JS ; Value: Get ( ScriptResult ) ]
~~~

In Staff page, these JS datasets drive cascading dropdowns:
- Departments
- Job Titles
- Notches

The JS is later injected like:

~~~javascript
const departments = { <ScriptResult> };
~~~

---

## 3) Related Lists: Subtables (Embedded Related Data)

Details pages often include related lists such as:
- Job Titles in a department
- Staff in a department
- Emergency contacts for a staff member
- Education, payroll, attendance, KPIs, documents

These are rendered as a reusable component that returns HTML.

### 3.1) Subtable generation: Required parameters

Before calling the subtable script, set a block of variables.

Minimum required:
- `$SQL`
- `$SQL Condition`
- `$Column Headers`
- `$Column Widths`
- `$Table ID`
- `$Sub Table Name`
- `$Sub Table Width`
- `$Sub Table Height`
- No-record icon path, title, body

Often used optional parameters:
- `$Status Column` (index of status column)
- `$Date Columns` (indexes)
- `$Number Columns` (indexes)
- `$Inputs` (input field configuration)
- `$Row Action JS Script`
- `$Row Action Icon Class`
- `$Add New Record Button Label`
- `$Add New Record JS Script Name`
- `$Two Decimal Columns`
- `$Timestamp Columns`

Then call:

~~~filemaker
Perform Script [ “+++ Display Subtable HTML” ; Parameter:
  $SQL & ¶ &
  $SQL Condition & ¶ &
  $Column Headers & ¶ &
  $Column Widths & ¶ &
  $Status Column & ¶ &
  $Date Columns & ¶ &
  $Number Columns & ¶ &
  $Inputs & ¶ &
  $Row Action JS Script & ¶ &
  $Row Action Icon Class & ¶ &
  $Table ID & ¶ &
  $Two Decimal Columns & ¶ &
  $Timestamp Columns & ¶ &
  $Sub Table Name & ¶ &
  $Sub Table Width & ¶ &
  $Sub Table Height & ¶ &
  $Add New Record Button Label & ¶ &
  $Add New Record JS Script Name & ¶ &
  $No Record Found Icon SVG Path & ¶ &
  $No Record Found Message Title & ¶ &
  $No Record Found Message Body
]
Set Variable [ $<SubTableVarName> ; Value: Get ( ScriptResult ) ]
~~~

### 3.2) Documents subtable

For documents, your pattern uses:

- Script: `+++ Display Documents Subtable HTML`

The parameter list is the same shape as the normal subtable, but the renderer is specialized for documents.

### 3.3) Inserting subtables into the page

Subtable HTML is inserted in a tab body or content block like:

~~~html
<div id='tab3' class='content'>
  " & $Education Sub Table HTML & "
</div>
~~~

---

## 4) CSS Generation

### 4.1) Details CSS is the base for all details pages

Always call:

~~~filemaker
Perform Script [ “🖌️ Use Details CSS” ]
Set Variable [ $styles ; Value: Get ( ScriptResult ) ]
~~~

### 4.2) Optional: Append extra CSS

Some pages add extra rules for special widgets (charts, dashboard cards):

~~~filemaker
Set Variable [ $styles ; Value:
  $styles &
  "
    #chart-container { width: 100%; height: 200px; padding: 10px; box-sizing: border-box; }
    canvas { width: 100% !important; height: 100% !important; }
  "
]
~~~

### 4.3) Optional: Merge multiple CSS packs

Example: Details CSS + Dashboard CSS

~~~filemaker
Perform Script [ “🖌️ Use Dashboard CSS” ]
Set Variable [ $Dashboard Styles ; Value: Get ( ScriptResult ) ]

Set Variable [ $styles ; Value:
"
<style> " &
  $styles & " " & $Dashboard Styles &
" </style>
"
]
~~~

Important:
- Decide whether `$styles` should hold raw CSS only, or a `<style>...</style>` wrapper.
- Be consistent within one script. If you wrap with `<style>`, do not wrap again in the final HTML head.

---

## 5) HTML Generation: The Standard Page Structure

All details pages follow this high-level structure:

~~~html
<div class='container'>
  <div class='summary-section'> ... </div>
  <div class='content-section'>
    <!-- tabs optional -->
    <!-- tab bodies or single content -->
  </div>
</div>
~~~

### 5.1) Summary section

The summary section is built as `$Summary Section HTML` and usually includes:

- Title `<h2>`
- Summary metrics via `<p><strong>Label:</strong> value</p>`
- Optional photo block
- Divider `<hr />` blocks
- Button container with save/cancel or other actions

Common patterns:
- Phone link: `<a href='tel:...'>`
- Email link: `<a href='mailto:...'>`

Example pattern:

~~~filemaker
Set Variable [ $Summary Section HTML ; Value:
"
<div class='summary-section'>
 <div class='summary-card'>
  <h2>" & If ( not IsEmpty ( $Name ) ; $Name ; "Entity Information" ) & "</h2>
  <div class='summary-content'>
   <div class='summary-info'>
     <p><strong>Field:</strong> " & $Value & "</p>
   </div>
  </div>
  <hr />
  <div class='button-container'>
    <button class='save-button' onclick=\"saveItemInfo()\"><i class='fas fa-save'></i> Save</button>
    <button class='cancel-button' onclick=\"cancelAction()\"><i class='fas fa-times-circle'></i> Cancel</button>
  </div>
 </div>
</div>
"
]
~~~

### 5.2) Tabs block (optional)

Tabs exist when the entity has multiple sub-sections.

The tabs HTML must:
- Use `.tabs` wrapper
- Each tab uses `.tab`
- Active tab uses `.active`
- Each tab calls `showContent('tabX', this)`

~~~filemaker
Set Variable [ $Tabs HTML ; Value:
"
<div class='tabs'>
 <div class='tab" & If ( $$Tab To Show = 1 ; " active" ) & "' onclick=\"showContent('tab1', this)\">Details</div>
 <div class='tab" & If ( $$Tab To Show = 2 ; " active" ) & "' onclick=\"showContent('tab2', this)\">Other</div>
</div>
"
]
~~~

### 5.3) Tab body blocks (or single content block)

Each tab body:
- Uses `<div id='tabX' class='content'>`
- Shows only the selected tab on load
- The default show condition uses `$$Tab To Show`

~~~filemaker
Set Variable [ $Tab1 HTML ; Value:
"
<div id='tab1' class='content'" & If ( $$Tab To Show = 1 ; " style='display: block;'" ) & ">
 ...
</div>
"
]
~~~

If no tabs:
- You can skip the tabs HTML and place only one content block inside `.content-section`.

### 5.4) Form layout conventions

Your pages consistently use grid classes such as:
- `.form-grid1`
- `.form-grid2`
- `.form-grid3`
- `.form-group`
- `.form-group-2`

Common input patterns:
- `<input type='text' id='field_id' value='...'>`
- `<textarea id='field_id'>...</textarea>`
- `<select id='field_id'> ...options... </select>`

Line break policy:
- Textareas should receive line-break normalized text from FileMaker via `ConvertLineBreakMarkersToReturns(...)`.
- When sending textareas back to FileMaker, JS should encode: `encodeURIComponent(...)`.

### 5.5) Reusable UI objects seen across scripts

These show up repeatedly:
- Save button and Cancel button in the summary section
- Tabs + `showContent` function
- Toggle switch (checkbox + slider) with a status text element
- Segmented control buttons
- Date inputs with calendar icon using Flatpickr
- Subtable HTML blocks inserted in tabs

Other objects appear in specific pages (photo modal, KPI cards, charts). Mention them at the layout level only in this doc.

---

## 6) JavaScript Generation: Required Functions and Assembly

### 6.1) JS functions are built as strings in FileMaker variables

Pattern:

~~~filemaker
Set Variable [ $Cancel Action Script ; Value:
"function cancelAction() {
  FileMaker.PerformScript('" & $Cancel Script & "');
}"
]
~~~

Then assemble:

~~~filemaker
Set Variable [ $Scripts ; Value:
"<script> " &
  $Show Content Script & "¶¶" &
  $Cancel Action Script & "¶¶" &
  $Save Item Info Script &
" </script> "
]
~~~

Important:
- Use `¶¶` to separate blocks for readability.
- Only include scripts that are defined or guaranteed to exist.
- If you keep a standard library of scripts like `$Wizard Script`, `$Toggle Accordion Script`, define them or confirm they exist globally.

### 6.2) Required baseline functions

#### 6.2.1) showContent (tabs)

~~~javascript
function showContent(contentId, tabElement) {
  const contentSections = document.querySelectorAll('.content');
  contentSections.forEach((section) => (section.style.display = 'none'));
  document.getElementById(contentId).style.display = 'block';

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => tab.classList.remove('active'));
  tabElement.classList.add('active');
}
~~~

#### 6.2.2) cancelAction

Calls the list page (or previous page) script:

~~~javascript
function cancelAction() {
  FileMaker.PerformScript('<Cancel Script Name>');
}
~~~

#### 6.2.3) saveItemInfo

Collect values from DOM, build pipe-separated parameter string, call save script.

Rules:
- Use `encodeURIComponent` for textareas and any free-text that may contain line breaks or pipes.
- Keep the order of parameters consistent with the save script expectation.
- Validate required fields before calling FileMaker.

Example shape:

~~~javascript
function saveItemInfo() {
  const name = document.getElementById('name').value;
  const description = encodeURIComponent(document.getElementById('description').value);

  const parameters = [ name, description ].join('|');
  FileMaker.PerformScript('<Save Script Name>', parameters);
}
~~~

### 6.3) Common supporting functions (include only if used by the page)

#### 6.3.1) Toggle switch

Used to show and change a status label.

DOM expectations:
- Checkbox: `id='toggle'`
- Label span: `id='status'`

Typical behavior:
- A `preselectToggle(...)` called on load
- A `toggle()` that updates the status text

#### 6.3.2) Segmented control

Used for binary or small options like gender.

DOM expectations:
- `.segmented-control button`
- The clicked button becomes `.active`

#### 6.3.3) Datepicker (Flatpickr)

When the page has date fields:
- Include Flatpickr CSS and JS in the HTML head
- Convert MySQL date strings to readable strings for display
- Provide helper `getMySQLFormattedDate(fieldId)` for saving

Core idea:
- Display: `l, j F, Y`
- Save: `Y-m-d`

#### 6.3.4) Modal open and close (image modal)

If the summary section shows a photo:
- Provide `openImageModal()` and `closeImageModal()`
- The modal uses `display: flex` and closes when clicking outside the image

#### 6.3.5) Related record viewers

Subtables often need row actions like "viewEducation", "viewDocument", "viewEmergencyContactDetails".
These functions take a parameter from the row and call a FileMaker script.

Example shape:

~~~javascript
function viewDocument(parameters) {
  FileMaker.PerformScript('<View Document Script>', parameters);
}
~~~

#### 6.3.6) Dynamic cascading dropdowns

When one dropdown depends on another (department -> job titles -> notches):
- Fetch JS dictionaries via `"Get Value List"` with `JS|...`
- Build dropdown options in JS on DOMContentLoaded
- Preselect based on existing IDs

---

## 7) Full Page Assembly into $$Page

### 7.1) HTML head includes

Minimum:
- meta charset, viewport
- Font Awesome CSS
- `<style> ... </style>` containing your `$styles`

Optional:
- Flatpickr CSS + JS if datepickers exist
- Chart.js script if charts exist

Example shape:

~~~filemaker
Set Variable [ $$Page ; Value:
"<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Item Management</title>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css'>
  <script src='https://cdn.jsdelivr.net/npm/flatpickr'></script>
  <style> " & $styles & " </style>
</head>
<body> " & $HTML & "¶¶" & $Scripts & " </body>
</html>"
]
~~~

### 7.2) HTML body uses your container block

Always set `$HTML` first:

~~~filemaker
Set Variable [ $HTML ; Value:
"
<div class='container'>
  " & $Summary Section HTML & "
  <div class='content-section'>
    " & $Tabs HTML & "
    " & $Tab1 HTML & "
    " & $Tab2 HTML & "
  </div>
</div>
"
]
~~~

Notes:
- If some tabs do not exist, keep their variables empty. FileMaker concatenation should safely ignore empty strings if variables are set to "".
- If you reference `$Tab4 HTML` etc, ensure they exist and are defined as empty when unused.

---

## 8) Page Actions and Parameter Conventions

### 8.1) Parameter passing convention

All actions that call FileMaker scripts use a single parameter string:
- Values joined by `|`
- Encoded where needed

Rules:
1. Use `encodeURIComponent` for:
   - Textareas
   - Any value that can contain line breaks
   - Any value that can contain the pipe character
2. Keep the ordering fixed and documented
3. Save scripts must parse using `GetValue ( Substitute ( $param ; "|" ; "¶" ) ; n )` or an equivalent approach

### 8.2) Record identity and page modes

Most pages operate in one of these modes:
- Existing record mode: ID exists, fields may be editable or partially locked
- New record mode: no record found, defaults applied, some fields enabled for entry

Your Leave Request page uses an important style:
- If an ID value is empty, treat it as a "new request" state.
- In that state:
  - Some fields are enabled
  - The main button label becomes "Submit Request"
  - The button action can route to `saveItemInfo()`

The AI Agent must implement this behavior when the page supports creating a record.

---

## 9) Common HTML Element IDs and Naming Rules

### 9.1) Element ID naming

Use snake_case IDs matching the semantic field name:
- `leave_type`, `start_date`, `end_date`, `reason`
- `name`, `hod`, `description`
- `staff_number`, `first_name`, `last_name`, `dob`, `department`, `job_title`

### 9.2) Icon ID naming for datepickers

For each date input:
- Input: `id='dob'`
- Icon: `id='dob_icon'`

Same pattern for:
- `start_date_icon`
- `end_date_icon`
- `from_date_icon`
- `to_date_icon`

### 9.3) Status and toggle IDs

Toggle switch requirements:
- checkbox: `id='toggle'`
- status text: `id='status'`

Avoid creating conflicting IDs across tabs. Keep IDs unique per page.

---

## 10) Reusable Script Includes Commonly Referenced

Across your samples, the `$Scripts` assembly references scripts that are not shown inside the snippet, for example:
- `$Toggle Accordion Script`
- `$Add Another Item Script`
- `$Close Alert Script`
- `$Move Item Script`
- `$Wizard Script`
- `$Choose File`

The AI Agent must follow this rule:
- If a details page references a script block in `$Scripts`, it must be defined in the script or guaranteed by your app framework.

If the app framework injects these as globals, the documentation for that framework must specify:
- Where they come from
- Their exact variable names
- Whether they are always present

---

## 11) Quality Checklist for the AI Agent

Before finalizing a generated details page script, the AI Agent must verify:

### 11.1) Variable completeness
- Every variable referenced later is set earlier.
- If optional components exist (tabs 4 to 9), define them as empty strings if unused.

### 11.2) SQL safety and correctness
- Correct table and field quoting with `\"Field\"` and `"Table Name"`
- Correct joins and group by when using aggregates
- Parameter placeholders `?` used for IDs

### 11.3) UI correctness
- All buttons have a matching JS function defined
- All JS functions that call FileMaker use the correct script variables
- IDs used in JS match IDs used in HTML

### 11.4) Encoding rules
- Textareas are encoded on save
- Any value containing special characters that can break the `|` join is encoded

### 11.5) Dependencies
- If datepickers exist, include Flatpickr CSS and JS
- If charts exist, include the chart library and the JS uses correct canvas IDs
- If font icons used, include Font Awesome

### 11.6) End-of-script behavior
- `WebDirect Pause`
- `Refresh Window [ Flush cached join results ; Flush cached external data ]`

---

## 12) Known Ambiguities and Possible Contradictions Found in the Samples

The AI Agent needs clarity on the items below because they affect correctness and repeatability.

### 12.1) Undefined script variables included in $Scripts
In multiple scripts, `$Scripts` concatenates variables that are not defined in the pasted script, including:
- `$Toggle Accordion Script`
- `$Add Another Item Script`
- `$Close Alert Script`
- `$Move Item Script`
- `$Wizard Script`
- `$Reset Account Script` (in Leave Request page there is a setter for it, but the variable name is used inside itself)
- `$Choose File` (Department page uses it, Staff page defines it later)

Question for you:
1) Are these defined in a shared global script that always runs before details pages?
2) If yes, what is the canonical list of standard JS blocks that every details page can include safely?

### 12.2) Leave Request page: button style condition looks wrong
This snippet appears inconsistent:

~~~filemaker
... & If ( not IsEmpty ( IsEmpty ( $Leave Type ID ) ) ; " style='width: 100%'" ) & ...
~~~

`IsEmpty ( IsEmpty ( $Leave Type ID ) )` produces a boolean inside `IsEmpty`, which is likely unintended.

Question for you:
- What is the correct intent here?
  - Is it: `If ( IsEmpty ( $Leave Type ID ) ; " style='width: 100%'" ; "" )`?

### 12.3) Leave Request toggle script references an element id that does not exist
In Leave Request page JS:

~~~javascript
const item = document.getElementById('item');
...
item.textContent = 'Approved';
~~~

But the HTML uses:

~~~html
<span class='status' id='status'>...</span>
~~~

Question for you:
- Should the JS always update `id='status'`?
- Is `id='item'` a leftover name from another page?

### 12.4) Staff page: toggle script references a missing FileMaker field placeholder
This appears in the staff toggle script:

~~~javascript
window.onload = function() {
  preselectToggle('" & <Table Missing>::<Field Missing> & "');
};
~~~

Question for you:
- What field controls staff active/inactive status for the toggle?
- What are the correct table and field names used in the real script?

### 12.5) New record detection rule differs by page
- Leave Request page uses empty `$Leave Type ID` as a signal of a new request state.
- Department page does not define defaults for no-record case.
- Staff page defines defaults for some fields.

Question for you:
- What is the standard rule for "new record mode" across your app starter?
  - Is it based on the entity ID being empty?
  - Or based on `ExecuteSQL` returning no rows?
  - Or based on a specific field being empty?

### 12.6) Duration field format in Leave Request saving
In Leave Request:
- Duration input is set as `"X Days"`
- The save function reads `duration = document.getElementById('duration').value;`
- That value includes the word "Days"

Question for you:
- Should the save script expect a pure number, or `"X Days"` text?

### 12.7) Date fields: mix of stored MySQL vs displayed readable strings
The scripts:
- Store dates as MySQL `Y-m-d` in variables
- Convert to readable in Flatpickr on load
- Convert back to MySQL via `getMySQLFormattedDate()` on save

Question for you:
- Are all date fields stored in the database as MySQL date strings, or are some stored as FileMaker dates?
- Is `FMPDateTextToMySQLDate()` always required before placing values into HTML?

---

## 13) Implementation Template the AI Agent Should Follow

When asked to create a new details page script, generate it using this template flow.

### 13.1) Script skeleton (high-level)

~~~filemaker
# 1) Page Identity
Set Variable [ $$App Section ; Value: "<Title>" ]
Set Variable [ $$Selected Record ID ; Value: GetValue ( GetScriptParameters ; 1 ) ]
Set Variable [ $$<Entity> ID ; Value: GetValue ( GetScriptParameters ; 1 ) ]
Set Variable [ $$Search Item ; Value: GetValue ( GetScriptParameters ; 2 ) ]

# 2) Action Scripts
Set Variable [ $Save Record Script ; Value: "Save <Entity>" ]
Set Variable [ $Cancel Script ; Value: "+++ <Entity> List Page" ]
Set Variable [ $Delete Record Script ; Value: "" ]
/* add more if needed */

# 3) Fetch Record Data (ExecuteSQL)
Set Variable [ $List ; Value: Let ( [ sql=... ; fieldseparator="|" ; rowseparator="¶" ; id=$$<Entity> ID ; result=ExecuteSQL(...) ] ; result ) ]
Set Variable [ $Total ; Value: ValueCount ( $List ) ]
If [ $Total > 0 ]
  Loop
    /* parse fields into variables */
    Exit Loop If [ $i ≥ $Total ]
  End Loop
Else
  /* defaults if needed */
End If

# 4) Fetch Value Lists (Dropdown and JS)
Perform Script [ “Get Value List” ; Parameter: "Dropdown|<List>|" & <Selected> ]
Set Variable [ $<DropdownVar> ; Value: Get ( ScriptResult ) ]
/* more lists as needed */

# 5) Generate Subtables
Set Variable [ $SQL ; Value: "SELECT ..." ]
/* set subtable meta vars */
Perform Script [ “+++ Display Subtable HTML” ; Parameter: ... ]
Set Variable [ $<SubTableVar> ; Value: Get ( ScriptResult ) ]
/* repeat as needed */

# 6) CSS
Perform Script [ “🖌️ Use Details CSS” ]
Set Variable [ $styles ; Value: Get ( ScriptResult ) ]
/* optional extra CSS */

# 7) HTML blocks
Set Variable [ $Summary Section HTML ; Value: "..." ]
Set Variable [ $Tabs HTML ; Value: "..." ] /* optional */
Set Variable [ $Tab1 HTML ; Value: "..." ]
/* more tabs */
Set Variable [ $HTML ; Value: "..." ]

# 8) JS blocks
Set Variable [ $Show Content Script ; Value: "..." ] /* if tabs exist */
Set Variable [ $Cancel Action Script ; Value: "..." ]
Set Variable [ $Save Item Info Script ; Value: "..." ]
/* widget scripts as needed */
Set Variable [ $Scripts ; Value: "<script> " & ... & " </script> " ]

# 9) Full document
Set Variable [ $$Page ; Value: "<!DOCTYPE html>..." ]

# 10) End
Perform Script [ “WebDirect Pause” ]
Refresh Window [ Flush cached join results ; Flush cached external data ]
~~~

---

## 14) Minimum Deliverable: What a "Complete" Details Page Means

A details page script is complete only if:
- It can load without missing variables
- It can display existing record details accurately
- It can save changes via the Save script
- It can cancel back to a list page via the Cancel script
- It can render all required dropdowns and subtables
- It includes all required library references for widgets used

If a page supports creating new records from the details page, it is complete only if:
- Defaults are set properly
- Required fields are validated
- Save creates the record and returns to the correct place

---

## 15) What the AI Agent Must Ask You When It Lacks Required Info

If the AI Agent is missing any of these, it must request clarification:
- Entity table name and primary key field name used in SQL
- The list page script name for cancel action
- The save script name and expected parameter order
- Which tabs exist and what each tab contains
- Which value lists are required and whether they return Dropdown HTML or JS dictionaries
- Which related lists (subtables) exist and their SQL plus column specs
- Which UI widgets are required (datepickers, toggles, segmented control, charts, photo modal)
- Whether the page supports new record creation and what defaults apply

If you provide those, the AI Agent should be able to generate the complete script in your CauferoAppStarter style.
