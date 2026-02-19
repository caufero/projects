# Modal Page Generation in CauferoAppStarter (FileMaker + WebViewer HTML)

This documentation defines the exact pattern used in CauferoAppStarter to generate a modal page (a card window that pops up with details of a selected entity) using HTML, CSS, and JavaScript rendered in a FileMaker WebViewer.

The goal is to train an AI Agent to generate FileMaker scripts that match this pattern exactly.

---

## 1) What a Modal Page Is in CauferoAppStarter

A modal page in CauferoAppStarter is:

- A **FileMaker script** that:
  - Receives an entity ID or mode via Script Parameter(s)
  - Pulls required data with `ExecuteSQL`
  - Builds an HTML string (`$HTML`)
  - Builds JavaScript functions (`$Scripts`)
  - Gets base modal CSS from a shared script (`🖌️ Use Modal CSS`)
  - Assembles a full HTML document string into a global variable `$$Modal`
  - Opens a **Card** window to the **Modal** layout

- A **Modal layout** that:
  - Contains a WebViewer that loads the HTML stored in `$$Modal` (the loading mechanism is part of the app shell and is not repeated inside each modal generator script)

---

## 2) Core Architecture Pattern

Every modal generator script follows this pipeline:

1. **Read parameters**
2. **Define the target FileMaker scripts**
   - Save script name
   - Cancel script name
   - Optional scripts (delete, insert image, row action, administer medication, etc.)
3. **Fetch data**
   - `ExecuteSQL` using `fieldseparator="|"` and `rowseparator="¶"`
   - Parse the result by row and then by column
4. **Generate CSS**
   - `Perform Script [ "🖌️ Use Modal CSS" ]`
   - Optionally append extra CSS for custom controls
5. **Generate HTML**
   - `div.modal`
   - `div.modal-header` (title)
   - `div.modal-body` (form, cards, subtables, instructions)
   - `div.modal-footer` (Save and Cancel buttons)
6. **Generate JavaScript**
   - Always includes `cancelUpdates()`
   - Usually includes `saveUpdates()`
   - Optionally includes helpers (date picker, segmented control, dropdown search, editor logic, BMI calc, list selection)
7. **Assemble full HTML page**
   - `<!DOCTYPE html> ... <style> ... </style> ...`
   - External libraries included only if needed (Flatpickr, Font Awesome)
8. **Store as `$$Modal`**
9. **Open modal window (Card)**
   - Toolbars off, menu bar off, resize off, dim parent on

---

## 3) Standard Conventions and Required Variables

### 3.1 Script parameter handling

Two styles exist in the samples:

- `Get ( ScriptParameter )` for a single parameter
- `GetValue ( GetScriptParameters ; n )` for multi-part parameters

**Rule for AI Agent:**
- Use `Get ( ScriptParameter )` when exactly one value is passed.
- Use `GetValue ( GetScriptParameters ; n )` when multiple values are passed.

Examples:
~~~filemaker
Set Variable [ $$Diagnosis ID ; Value: Get ( ScriptParameter ) ]
Set Variable [ $$Mode ; Value: GetValue ( GetScriptParameters ; 1 ) ]
~~~

### 3.2 Modal control script names

Every modal generator script defines:
- A FileMaker script to save changes
- A FileMaker script to close the modal

Standard variable names used in the scripts:
- `$Save Record Script` or `$Save Updates Script` (string name of FileMaker script)
- `$Cancel Script` (string name of FileMaker script)

Examples:
~~~filemaker
Set Variable [ $Save Record Script ; Value: "Save Diagnosis Details" ]
Set Variable [ $Cancel Script ; Value: "Close Window" ]
~~~

**Important:**
There is a naming collision used in some scripts:
- `$Save Updates Script` is first used as the FileMaker script name
- Later reused as the JavaScript function text

**Rule for AI Agent:**
To avoid confusion, prefer this naming internally:
- `$SaveFM` for FileMaker script name
- `$CancelFM` for FileMaker script name
- `$JS_Save` for JavaScript save function code
- `$JS_Cancel` for JavaScript cancel function code
You can still output scripts in the legacy naming style if the target system expects it, yet keep your internal generation logic clean.

### 3.3 Global variable for modal HTML

All modal pages are stored into:
- `$$Modal`

Example:
~~~filemaker
Set Variable [ $$Modal ; Value: "<!DOCTYPE html> ... </html>" ]
~~~

### 3.4 Standard delimiters

- SQL field separator: `|`
- SQL row separator: `¶`
- JS parameters to FileMaker: `|` joined strings, or JSON string
- Special delimiters used in some complex saves:
  - `vvvvvvvvvv` between row payloads in subtables
  - Prefix labels like `ITEMS:` and `TREATMENT_CHART:` separated by `¶`

Examples:
~~~js
const parameters = [ a, b, c ].join('|');
FileMaker.PerformScript('Save Script Name', parameters);
~~~

~~~js
const tableDataString = updatedData.map(item => `${item.id}|${item.value}`).join('vvvvvvvvvv');
const combinedParameters = `ITEMS:${parameters}¶TREATMENT_CHART:${tableDataString}`;
FileMaker.PerformScript('Save Treatment Chart', combinedParameters);
~~~

---

## 4) Data Retrieval Pattern (ExecuteSQL + Parsing)

### 4.1 SQL select

Typical pattern:
~~~filemaker
Set Variable [ $List ;
  Value:
    Let (
      [
        sql = "SELECT \"Field1\", \"Field2\"
               FROM \"Table\"
               WHERE \"ID\" = ?" ;
        fieldseparator = "|" ;
        rowseparator = "¶" ;
        id = $$Some ID ;
        result = ExecuteSQL ( sql ; fieldseparator ; rowseparator ; id )
      ] ;
      result
    )
]
~~~

### 4.2 Parse result rows and columns

Typical pattern:
~~~filemaker
Set Variable [ $Total ; Value: ValueCount ( $List ) ]

If [ $Total > 0 ]
  Loop
    Set Variable [ $i ; Value: $i + 1 ]
    Set Variable [ $Row ; Value: GetValue ( $List ; $i ) ]
    Set Variable [ $RowAsList ; Value: Substitute ( $Row ; "|" ; ¶ ) ]

    Set Variable [ $Field1 ; Value: GetValue ( $RowAsList ; 1 ) ]
    Set Variable [ $Field2 ; Value: GetValue ( $RowAsList ; 2 ) ]

    Exit Loop If [ $i ≥ $Total ]
  End Loop
Else
  # Optional defaults
End If
~~~

### 4.3 Formatting and conversion helpers

These are frequently used:
- `ConvertLineBreakMarkersToReturns ( ... )` for text stored with markers
- `RelativeDateInWords ( ... )` for display-friendly dates
- `MySQLDateToFMPDateText ( ... )` to convert date formats (custom function)
- `DefaultIfEmpty ( x ; "fallback" )` (custom function)

**Rule for AI Agent:**
- Display formatting is handled before HTML generation.
- HTML receives already formatted strings except for interactive date pickers which may store MySQL dates and convert on load.

---

## 5) CSS Generation Pattern

### 5.1 Base modal CSS

Every modal uses:
~~~filemaker
Perform Script [ "🖌️ Use Modal CSS" ]
Set Variable [ $styles ; Value: Get ( ScriptResult ) ]
~~~

### 5.2 Append extra CSS when needed

Some modals add custom controls and append CSS via:
~~~filemaker
Set Variable [ $styles ; Value: $styles & " ...extra css... " ]
~~~

Common appended CSS blocks in the samples:
- Searchable dropdown styling (`.dropdown-container`, `.dropdown-input`, `.dropdown-list`)
- Rich text editor styling (`.toolbar`, `#editor`)
- Custom cards or grids (vitals cards, KPI cards, etc.)

**Rule for AI Agent:**
- Use base CSS always.
- Append only the required CSS for the controls used in that modal.

---

## 6) HTML Structure Standard

### 6.1 Wrapper skeleton

All modals use:
~~~html
<div class='modal'>
  <div class='modal-header'>TITLE</div>

  <div class='modal-body'>
    <form id='update-form'>
      <!-- content -->
    </form>
  </div>

  <div class='modal-footer'>
    <button type='button' class='save-button' onclick="saveUpdates()">
      <i class='fas fa-save'></i>
      Save
    </button>
    <button type='button' class='cancel-button' onclick="cancelUpdates()">
      <i class='fas fa-times'></i>
      Cancel
    </button>
  </div>
</div>
~~~

### 6.2 Inputs and IDs

Inputs must have stable IDs because JS reads them by `document.getElementById(...)`.

Examples:
- `institution`, `programme`, `result`
- `start_date`, `end_date` and icon IDs `start_date_icon`, `end_date_icon`
- `height`, `weight`, `bmi`, `temperature`, etc.

**Rule for AI Agent:**
- Every field that is saved must have a deterministic `id`.
- JS must read those IDs and serialize values in the agreed format.

### 6.3 Field groups

These CSS classes appear repeatedly:
- `.form-group-2` for two-column grid fields
- `.form-grid1` as a grid wrapper
- `.instructions1`, `.instructions2` for top info blocks

**Rule for AI Agent:**
- Match the visual grouping style:
  - Simple details pages: `.form-grid1` with `.form-group-2`
  - Dashboard or metrics pages: cards in a grid
  - Heavy editor pages: custom editor block, footer stays standard

---

## 7) JavaScript Structure Standard

### 7.1 Required: cancelUpdates()

Every modal includes this exact idea:
~~~js
function cancelUpdates() {
  FileMaker.PerformScript('Close Script Name');
}
~~~

In FileMaker concatenation:
~~~filemaker
Set Variable [ $Cancel Updates Script ;
  Value:
"function cancelUpdates() {

         FileMaker.PerformScript('" & $Cancel Script & "');

}"
]
~~~

### 7.2 Required in edit modals: saveUpdates()

The save function:
- Reads values from DOM
- Encodes values if needed
- Builds either:
  - A pipe-delimited string for simple cases, or
  - JSON for complex structures
- Calls `FileMaker.PerformScript(saveScriptName, parameters)`

Pipe example:
~~~js
function saveUpdates() {
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const parameters = [a, b].join('|');
  FileMaker.PerformScript('Save Script Name', parameters);
}
~~~

JSON example:
~~~js
function saveUpdates() {
  const data = { items: selectedItems };
  const parameters = JSON.stringify(data);
  FileMaker.PerformScript('Save Script Name', parameters);
}
~~~

### 7.3 Script bundling into one script tag

The system uses a single variable:
- `$Scripts` containing `<script> ... </script>`

Example:
~~~filemaker
Set Variable [ $Scripts ;
  Value:
"<script> " &
  $Save Updates Script & "¶¶" &
  $Cancel Updates Script & "¶¶" &
  $Some Other Script &
" </script>"
]
~~~

**Rule for AI Agent:**
- Build each JS function as a string.
- Concatenate them into one `<script>` block.
- Separate chunks with `¶¶` for readability (it is used consistently in the sample scripts).

---

## 8) Full Page Assembly Pattern

Every modal writes a full HTML document:

### 8.1 Standard head includes

- `<meta charset='UTF-8'>`
- `<meta name='viewport' content='width=device-width, initial-scale=1.0'>`
- Font Awesome stylesheet
- Optional Flatpickr CSS and JS when date pickers exist
- Inline `<style>` with `$styles`

Example:
~~~filemaker
Set Variable [ $$Modal ;
  Value:
"<!DOCTYPE html>
<html lang='en'>

<head>
   <meta charset='UTF-8'>
   <meta name='viewport' content='width=device-width, initial-scale=1.0'>
   <title>Modal Page</title>
   <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'>
   <style> " & $styles & " </style>
</head>

<body> " & $HTML & "¶¶" & $Scripts & " </body>

</html>
"
]
~~~

### 8.2 Flatpickr inclusion rule

Only include Flatpickr when a datepicker is used:
~~~html
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css'>
<script src='https://cdn.jsdelivr.net/npm/flatpickr'></script>
~~~

---

## 9) Window Opening Pattern

### 9.1 Standard Card window settings

Most modals do:
~~~filemaker
New Window [
  Style: Card ;
  Height: 750 ;
  Width: 600 ;
  Dim parent window: On ;
  Toolbars: Off ;
  Menu Bar: Off ;
  Close: Off ;
  Minimize: Off ;
  Maximize: Off ;
  Resize: Off ;
  Layout: "Modal"
]
~~~

### 9.2 Refresh or reuse modal window variant

Some scripts check whether a modal window already exists:
~~~filemaker
If [ $$Window = "Modal" ]
  Refresh Window [ Flush cached join results ; Flush cached external data ]
Else
  New Window [ Style: Card ; ... ; Layout: "Modal" ]
End If
~~~

**Rule for AI Agent:**
- Default to opening a new Card window unless the surrounding shell expects reuse.
- If reuse is required, follow the existing convention with `$$Window`.

---

## 10) Common UI Objects Used Across Modals

This documentation does not fully define each object implementation. It defines how they are assembled into the modal.

### 10.1 Simple form fields

- Text inputs
- Textareas
- Select dropdowns

Pattern:
- `<label for='id'>Label</label>`
- `<input id='id' value='...'>`
- `<textarea id='id'>...</textarea>`
- `<select id='id'>...options...</select>`

### 10.2 Date fields with icon-triggered picker

Structure:
~~~html
<div style='position: relative;'>
  <input type='text' id='start_date' value='YYYY-MM-DD'>
  <i class='fas fa-calendar-alt' id='start_date_icon' style='position: absolute; right: 10px; top: 50%; transform: translateY(-50%); ...'></i>
</div>
~~~

JS idea:
- On load, convert MySQL date to readable
- Flatpickr attaches to input
- Icon click opens picker
- A helper returns MySQL format to save

### 10.3 Segmented control buttons

Structure:
~~~html
<div class='segmented-control'>
  <button class='active' onclick="selectSegmentedControl(this)">Cash</button>
  <button onclick="selectSegmentedControl(this)">Insurance</button>
</div>
~~~

JS idea:
- Toggle active class
- Show or hide related fields based on selection

### 10.4 Searchable dropdown (custom)

Structure:
- Visible text input for searching
- Hidden input for UUID
- UL list to show results

JS idea:
- Load network list as JS array
- Filter by typed text
- Show first N results
- Infinite scroll load more
- Preselect default by UUID
- Hide dropdown on outside click

### 10.5 Selection list with checkboxes and row highlight

Structure comes from a Value List helper script (HTML chunk injected into `$HTML`).
JS idea:
- Preselect rows from FileMaker-provided IDs
- Clicking row toggles checkbox
- Save returns JSON list of selected items

### 10.6 Subtable block inside modal

Subtable HTML is generated by a helper FileMaker script and injected into `$HTML`.

The generator script supplies:
- SQL
- Column headers
- Column widths
- Column type hints (date columns, number columns)
- Input-enabled columns
- Table ID used by JS to collect changes
- Add-new button label and JS hook name
- Empty-state icon and message

Save logic for subtables:
- Loop all rows in tbody
- Each row has `data-id`
- Collect inputs per row
- Serialize with `vvvvvvvvvv` delimiter
- Attach to a combined parameter string with a prefix label

### 10.7 Rich text editor block (contenteditable)

Editor HTML injected into modal:
- Toolbar buttons
- `<div id="editor" contenteditable="true">...</div>`

JS idea:
- Uses `document.execCommand`
- Maintains selection restore logic
- Converts links to open in new tab
- On save, returns HTML encoded and sanitized for delimiters

---

## 11) Encoding and Safety Rules

### 11.1 Pipe delimiter protection

If a saved field can contain `|`, the pipe breaks the delimiter protocol.

Observed strategy in the editor script:
- Replace `|` with a safe token before building parameters

Example:
~~~js
editor = editor.replace(/\|/g, 'ppippe');
~~~

**Rule for AI Agent:**
- If saving pipe-delimited parameters, sanitize any field that may contain `|`.
- If saving large or complex text, prefer JSON over pipe delimiting.

### 11.2 URL / text encoding

Observed patterns:
- `encodeURIComponent(text)` for textarea or rich content
- `encodeURIComponent(editorHTML)` inside JSON payload

**Rule for AI Agent:**
- If a field can contain line breaks, quotes, or special characters, encode it.

### 11.3 Disabled mode

Some modals disable editing based on layout context:
~~~html
<textarea id='remarks' ... disabled>...</textarea>
~~~

In FileMaker concatenation:
~~~filemaker
If ( $$Layout Name = "Past Visits" ; "disabled" )
~~~

**Rule for AI Agent:**
- When modal is used for viewing historical records, disable input controls and still allow Cancel.

---

## 12) Modal Script Specification Template (AI Agent Must Follow)

This is the standard blueprint the AI Agent should implement for any new modal page.

### 12.1 Required Inputs (design-time specification)

For each new modal, the AI must be given:

1. Modal purpose and title
2. Entity type and primary key ID
3. Save script name (FileMaker)
4. Cancel script name (FileMaker)
5. Fields:
   - Field label
   - DOM id
   - Input type (text, number, textarea, select, segmented, date)
   - Default value rule
   - Save encoding rule (none, encodeURIComponent, JSON)
6. Data source:
   - Table name(s)
   - ExecuteSQL query
   - Any joins needed
7. UI objects used:
   - Date picker
   - Searchable dropdown
   - Selection list
   - Subtable
   - Rich editor
8. Window size:
   - Height
   - Width
9. View-only rules (if any):
   - Disable fields on certain layouts or modes

### 12.2 Required Output (FileMaker script code)

The generated script must contain these sections in order:

1. Get Script Parameter(s) into `$$...` variables
2. Set FileMaker script name variables
3. Fetch data with ExecuteSQL
4. Parse into `$Field` variables
5. Generate CSS
6. Generate HTML into `$HTML`
7. Generate JS into:
   - `$Cancel Updates Script`
   - `$Save Updates Script`
   - plus any helper scripts
8. Combine JS into `$Scripts`
9. Combine full page into `$$Modal`
10. Open Card window to layout `Modal`

---

## 13) Object-Specific Assembly Guides (How to Combine Parts)

### 13.1 Simple details modal (Staff Education pattern)

- Fetch 1 record by ID
- Show input fields in `.form-grid1`
- Add flatpickr for date fields
- Save returns a pipe-delimited list of values

Key assembly checklist:
- Flatpickr included in `<head>`
- JS includes:
  - `getMySQLFormattedDate(fieldId)`
  - `saveUpdates()` uses it for date fields

### 13.2 Assign list modal (Appraisal template assignment pattern)

- Pull list HTML from `Get Value List` helper
- Preselect items using `$$Selected IDs` (return-separated string)
- Save returns JSON with selected rows details

Key assembly checklist:
- Row elements must expose:
  - `data-id`
  - `input.rowCheckbox`
  - `.item-title`, `.item-subtitle`, `.item-description`
- JS must:
  - Toggle `.selected` class
  - Update selected count UI element if present

### 13.3 Conditional fields modal (Payment option pattern)

- Segmented control chooses a mode
- JS toggles visibility of field containers
- Some dropdowns are populated from JS objects injected from FileMaker

Key assembly checklist:
- Segmented control buttons call `selectSegmentedControl(this)`
- `DOMContentLoaded` runs initial visibility setup
- Insurer and policies dropdowns:
  - `const insurers = { ... }`
  - `const policies = { ... }`
  - Populate insurer options
  - Populate policy options when insurer changes
  - Preselect insurer and policy when IDs exist

### 13.4 Dashboard card modal (Vitals pattern)

- Fetch data by ID, else default to current user and time
- Render a grid of cards with inputs
- Some fields computed live (BMI)
- Save returns pipe-delimited numeric values

Key assembly checklist:
- `calculateBMI()` runs on input events for height and weight
- `bmi` field is readonly

### 13.5 Subtable inside modal (Treatment chart pattern)

- Fetch header details (medication, dosage)
- Generate subtable HTML via helper script `+++ Display Subtable HTML`
- Provide Add New Entry button that calls a FileMaker script (administer medication)
- Save collects row updates from table inputs

Key assembly checklist:
- Subtable table has stable ID (example: `treatmentChartTable`)
- Each `tr` has `data-id`
- Save builds combined parameters:
  - `ITEMS:...`
  - `TREATMENT_CHART:...`

### 13.6 Rich editor modal (Nurse note pattern)

- Modal title based on `$$Mode`
- Uses contenteditable editor and toolbar
- Save returns JSON with encoded HTML

Key assembly checklist:
- Editor uses selection save and restore
- Links open in new tab, prevent navigation inside WebViewer
- Save replaces pipe characters and encodes HTML

### 13.7 Searchable dropdown modal (Diagnosis pattern)

- Data list injected as JS array of objects
- Input filters list and writes selection into hidden field
- Save uses hidden UUID field and encoded remarks

Key assembly checklist:
- Preselect existing UUID on load
- Infinite scroll loads more results in chunks

---

## 14) Helper Scripts and External Dependencies

This modal system assumes the existence of helper scripts that return reusable chunks:

1. `🖌️ Use Modal CSS`
   - Returns the base CSS for `.modal`, `.modal-header`, `.modal-body`, `.modal-footer`, buttons, grids, form groups

2. `Get Value List`
   - Returns either:
     - HTML options for `<select>`
     - Full HTML blocks for checklist selection list
     - JavaScript object literal strings for dynamic dropdowns

3. `+++ Display Subtable HTML`
   - Returns a fully formed HTML table widget with optional inline inputs

4. `WebDirect Pause`
   - A compatibility helper for WebDirect rendering flow

External libraries used in modals:
- Font Awesome (icons)
- Flatpickr (date picker)

---

## 15) Quality Rules the AI Agent Must Follow

1. Keep IDs consistent between HTML and JS.
2. Keep Save and Cancel behavior consistent with the pattern.
3. Use `ExecuteSQL` with parameter binding (`?`) for IDs.
4. Avoid injecting raw unescaped text into HTML when it can break attributes.
   - When placing values inside `value='...'`, ensure they do not contain `'`.
   - If the system does not escape, the AI must apply a safe substitution rule.
5. Prefer JSON for complex payloads.
6. If using pipe-delimited parameters, sanitize pipe characters in user-entered fields.
7. Include only required external dependencies in the page head.
8. Always store final page string in `$$Modal` before opening the modal window.
9. Use a Card window to the Modal layout with dim parent on.

---

## 16) Ambiguities, Contradictions, and Clarifications Needed

The AI Agent can generate correct scripts only if these are clarified.

### 16.1 How the Modal layout loads `$$Modal`
In the provided scripts, `$$Modal` is set and a new card window opens, yet there is no explicit WebViewer action shown (no `Set Web Viewer` step).

Clarification needed:
- Does the Modal layout contain a WebViewer that auto-loads `$$Modal` using a calculation like `GetAsText ( $$Modal )` or a data URL technique?
- Is there an OnLayoutEnter trigger that pushes `$$Modal` into the WebViewer?

### 16.2 Inconsistent parameter function name
Some scripts use `GetScriptParameters` while FileMaker standard is `Get ( ScriptParameter )`.

Clarification needed:
- Is `GetScriptParameters` a custom function in this file?
- If yes, what exactly does it return and how is it structured?

### 16.3 Variable naming collision: `$Save Updates Script`
In multiple scripts, `$Save Updates Script` is used as:
- FileMaker script name string, and later
- JavaScript function body string

Clarification needed:
- Is this a deliberate style choice you want preserved?
- Or should the AI Agent always keep separate names for FM script name and JS function code?

### 16.4 Payment Option modal references `$$Patient ID` without showing it being set
The Payment Option modal validates a patient exists using `$$Patient ID`, yet that variable is not set in the snippet.

Clarification needed:
- Where is `$$Patient ID` set for that modal flow?
- Should every modal that depends on parent entity enforce such validation?

### 16.5 Datepicker script included where date fields are not present
In the Payment Option script, a datepicker script block exists with `date_scheduled` and `date_completed`, yet those IDs do not exist in the HTML.

Clarification needed:
- Is that block a leftover template piece?
- Should the AI Agent include datepicker blocks only when those inputs exist?

### 16.6 Escaping values inserted inside HTML attributes
Values are inserted into:
~~~html
<input value='" & $Value & "'>
~~~
If `$Value` contains a single quote, it can break HTML.

Clarification needed:
- Do you already sanitize values before insertion?
- Do you want the AI Agent to always sanitize `'` into `&#39;` and `"` into `&quot;` when injecting into attributes?

### 16.7 The dropdown naming mismatch in Diagnosis modal
The diagnosis modal uses IDs like `momo_network` for a medical condition selector.

Clarification needed:
- Is this naming intentionally reused to reduce code duplication?
- Or should the AI Agent generate semantically correct IDs per modal?

### 16.8 Special delimiters used for subtable saves
The treatment chart save uses:
- `vvvvvvvvvv` as a row delimiter
- Combined parameter string with labels

Clarification needed:
- Are these delimiters standardized across all subtables?
- Do you want a single canonical delimiter set for all subtable modals?

---

## 17) Minimal Reference Implementation Blueprint (Pseudo)

This section is a compact spec the AI Agent can follow.

~~~text
INPUT:
- ModalName
- Title
- PrimaryIDVar (global $$...)
- SQL query + binds
- Field map: { label, domId, type, default, encoding }
- SaveScriptFM, CancelScriptFM
- Optional widgets: datepicker, segmented, dropdownSearch, selectionList, subtable, editor
- Window size

OUTPUT:
- FileMaker script that:
  - Reads parameter(s) into $$...
  - Sets $SaveFM and $CancelFM
  - Executes SQL, parses fields
  - Calls 🖌️ Use Modal CSS and appends extras
  - Builds $HTML with modal wrapper, form, footer buttons
  - Builds JS functions:
    - cancelUpdates() always
    - saveUpdates() when editable
    - widget helpers based on usage
  - Assembles $$Modal full HTML doc
  - Opens Card window to Modal layout