# CauferoAppStarter Documentation
## Dropdown Fields (Select Inputs) and How They Are Implemented

> Purpose of this doc  
> Train an AI Agent to correctly implement dropdown fields (HTML `<select>`) in CauferoAppStarter WebViewer pages, including:
> 1) Standard dropdowns populated as HTML `<option>` tags from FileMaker  
> 2) Dropdowns populated dynamically in JavaScript from FileMaker-provided JSON objects  
> 3) Dependent dropdowns (Department -> Job Title -> Notch)  
> 4) How selected values are preselected, read, and saved back to FileMaker

This documentation is based on patterns in your sample page:
- Standard dropdowns:
  - `title`
  - `nationality`
  - `hometown_region`
  - `role`
- Dynamic dependent dropdowns:
  - `department`
  - `job_title`
  - `notch`
- Data sources:
  - `Perform Script [ "Get Value List" ; Parameter: "Dropdown|..." ]`
  - `Perform Script [ "Get Value List" ; Parameter: "JS|..." ]`

---

## 1) What a Dropdown Means in CauferoAppStarter

A dropdown is an HTML `<select>` element that:
1. renders on the page
2. may be preselected to the entity's existing value
3. is read in JavaScript on Save
4. is sent back to FileMaker via `FileMaker.PerformScript()`

There are two implementation modes in your framework:

### Mode A: HTML options generated in FileMaker
- FileMaker returns a string of `<option>` tags
- The `<select>` is rendered already filled

### Mode B: Options generated in JavaScript
- FileMaker returns a JavaScript object string (JSON-like)
- JavaScript builds `<option>` tags and appends them to `<select>`
- Used for larger datasets and dependent dropdowns

---

## 2) Mandatory Rules (Non-Negotiable)

### 2.1 Every dropdown MUST have a stable `id`
JavaScript reads `.value` using the ID.

Examples:
- `title`
- `nationality`
- `hometown_region`
- `department`
- `job_title`
- `notch`
- `role`

### 2.2 Every dropdown MUST have a label
Use `<label for='...'>`.

### 2.3 Do not hardcode large option lists in HTML
If the list is long or depends on other selections, use Mode B (JS object approach).

### 2.4 Saving dropdown values is the same as text fields
Read:
~~~js
const nationality = document.getElementById('nationality').value;
~~~
Then include in parameter list.

---

## 3) Dropdown Types in Your Page

### 3.1 Simple dropdowns (FileMaker-generated HTML options)
From your page:
- Titles
- Nationalities
- Regions
- Roles

These are rendered as:
~~~html
<select id='nationality'> {{OPTIONS_HTML}} </select>
~~~

### 3.2 Dynamic dropdowns (JS-generated options)
From your page:
- Department
- Job Title
- Notch

These are rendered as empty selects with a placeholder option:
~~~html
<select id='department'> <option value=''>Select Department</option> </select>
~~~

Then JS fills them.

---

## 4) Mode A: Dropdown Options Generated in FileMaker (HTML Options)

### 4.1 Data source pattern (FileMaker script call)
Your page calls a central script named `Get Value List`:

~~~filemaker
Perform Script [ “Get Value List” ; Parameter: "Dropdown|Titles|" & $Title ]
Set Variable [ $Titles HTML ; Value: Get ( ScriptResult ) ]
~~~

Same pattern:
~~~filemaker
Perform Script [ “Get Value List” ; Parameter: "Dropdown|Nationalities|" & $Nationality ]
Set Variable [ $Nationalities HTML ; Value: Get ( ScriptResult ) ]

Perform Script [ “Get Value List” ; Parameter: "Dropdown|Regions|" & $Hometown Region ]
Set Variable [ $Hometown Regions HTML ; Value: Get ( ScriptResult ) ]

Perform Script [ “Get Value List” ; Parameter: "Dropdown|Roles|" & $Role ID ]
Set Variable [ $Roles Dropdown HTML ; Value: Get ( ScriptResult ) ]
~~~

### 4.2 Contract of `Get Value List` for Dropdown mode
The AI Agent must assume this contract:

Input parameter format:
- `"Dropdown|<ValueListName>|<SelectedValue>"`

Output:
- A string containing one or more `<option>` elements
- The matching selected item is marked as selected

Example output shape:
~~~html
<option value='Mr'>Mr</option>
<option value='Mrs' selected>Mrs</option>
<option value='Dr'>Dr</option>
~~~

If your actual script uses different option value rules (IDs vs labels), clarify it in the Clarifications section.

### 4.3 HTML injection pattern
Inject the returned HTML into the `<select>`:

~~~html
<select id='nationality'> {{NATIONALITIES_HTML}} </select>
~~~

From your page:
~~~html
<select id='nationality'> " & $Nationalities HTML & " </select>
~~~

### 4.4 Example: Titles dropdown in combined inputs
Your page uses:
~~~html
<select class='combined-inputs-dropdown' id='title' aria-label='Title' style='width:50%'>
  {{TITLES_HTML}}
</select>
~~~

---

## 5) Mode B: Dropdown Options Generated in JavaScript (JS Objects)

This mode is used when:
- the dataset is large
- the dataset needs dependent filtering
- you want to avoid shipping huge HTML strings

### 5.1 FileMaker data source pattern
Your page fetches JS objects through `Get Value List` in JS mode:

~~~filemaker
Perform Script [ “Get Value List” ; Parameter: "JS|Departments|" & $Department ]
Set Variable [ $Departments JS ; Value: Get ( ScriptResult ) ]

Perform Script [ “Get Value List” ; Parameter: "JS|Job Titles|" & $Job Title ]
Set Variable [ $Job Titles JS ; Value: Get ( ScriptResult ) ]

Perform Script [ “Get Value List” ; Parameter: "JS|Notches|" & $Notch ID ]
Set Variable [ $Notches JS ; Value: Get ( ScriptResult ) ]
~~~

### 5.2 Contract of `Get Value List` for JS mode
The AI Agent must assume this contract:

Input parameter format:
- `"JS|<DatasetName>|<SelectedDisplayValueOrId>"`

Output:
- A string that can be placed directly into JS object literal context
- It becomes a valid object when wrapped like:
  - `const departments = { <output> };`

Example expected shape:
~~~js
{
  "UUID-1": { "c2": "Dept Name" },
  "UUID-2": { "c2": "Another Dept" }
}
~~~

Your dependent dropdown script uses keys like:
- `details.c2`
- `details.c3`

So the AI Agent must preserve the same field mapping:
- For Departments:
  - `details.c2` = department name
- For Job Titles:
  - `details.c2` = department ID
  - `details.c3` = job title name
- For Notches:
  - `details.c2` = job title ID
  - `details.c3` = notch label

If those c-values differ in your real data, clarify it.

---

## 6) Dependent Dropdowns (Department -> Job Title -> Notch)

### 6.1 HTML skeleton (empty selects with placeholders)
From your Tab 4 HTML:

~~~html
<select id='department'> <option value=''>Select Department</option> </select>
<select id='job_title'> <option value=''>Select Job Title</option> </select>
<select id='notch'> <option value=''>Select Notch</option> </select>
~~~

### 6.2 Preselected values come from FileMaker IDs
Your script sets these variables earlier:
- `$Department ID`
- `$Job Title ID`
- `$Notch ID`

Then injects them into JS:
~~~js
const selectedDepartment = '{{DEPARTMENT_ID}}';
const selectedJobTitle = '{{JOB_TITLE_ID}}';
const selectedNotch = '{{NOTCH_ID}}';
~~~

### 6.3 JavaScript population pattern (from your page)
Your page uses:

~~~js
document.addEventListener('DOMContentLoaded', function() {

  const departments = { {{DEPARTMENTS_JS}} };
  const jobTitles = { {{JOB_TITLES_JS}} };
  const notches = { {{NOTCHES_JS}} };

  const departmentDropdown = document.getElementById('department');
  const jobTitleDropdown = document.getElementById('job_title');
  const notchDropdown = document.getElementById('notch');

  const selectedDepartment = '{{DEPARTMENT_ID}}';
  const selectedJobTitle = '{{JOB_TITLE_ID}}';
  const selectedNotch = '{{NOTCH_ID}}';

  /* Populate departments dropdown */
  for (const [id, details] of Object.entries(departments)) {
    let option = document.createElement('option');
    option.value = id;
    option.textContent = details.c2; /* c2 holds department name */
    if (id === selectedDepartment) option.selected = true;
    departmentDropdown.appendChild(option);
  }

  function populateJobTitles(deptId) {
    jobTitleDropdown.innerHTML = '<option value=\"\">Select Job Title</option>';
    notchDropdown.innerHTML = '<option value=\"\">Select Notch</option>';

    for (const [id, details] of Object.entries(jobTitles)) {
      /* c2 holds department ID, c3 holds job title name */
      if (details.c2 === deptId) {
        let option = document.createElement('option');
        option.value = id;
        option.textContent = details.c3;
        if (id === selectedJobTitle) option.selected = true;
        jobTitleDropdown.appendChild(option);
      }
    }
    if (selectedJobTitle) populateNotches(selectedJobTitle);
  }

  function populateNotches(jobId) {
    notchDropdown.innerHTML = '<option value=\"\">Select Notch</option>';
    for (const [id, details] of Object.entries(notches)) {
      /* c2 holds job title ID, c3 holds notch label */
      if (details.c2 === jobId) {
        let option = document.createElement('option');
        option.value = id;
        option.textContent = details.c3;
        if (id === selectedNotch) option.selected = true;
        notchDropdown.appendChild(option);
      }
    }
  }

  if (selectedDepartment) populateJobTitles(selectedDepartment);

  departmentDropdown.addEventListener('change', function() {
    populateJobTitles(this.value);
  });

  jobTitleDropdown.addEventListener('change', function() {
    populateNotches(this.value);
  });
});
~~~

### 6.4 Core rules for dependent dropdowns
1. Department options are always loaded first
2. When Department changes:
   - Job Titles reset
   - Notches reset
   - Job Titles repopulate for that department
3. When Job Title changes:
   - Notches repopulate for that job title
4. Preselected values must be applied during population

---

## 7) Reading Dropdown Values in Save Function

### 7.1 Standard read
Use `.value`:

~~~js
const title = document.getElementById('title').value;
const nationality = document.getElementById('nationality').value;
const hometown_region = document.getElementById('hometown_region').value;

const department = document.getElementById('department').value;
const job_title = document.getElementById('job_title').value;
const notch = document.getElementById('notch').value;
~~~

### 7.2 Encoding rule when saving
In your page you encode:
- `role`

~~~js
const role = encodeURIComponent(document.getElementById('role').value);
~~~

This can be standard for dropdowns too if:
- option labels contain risky characters
- you are using `|` delimiter
- you want maximum safety

---

## 8) Preselecting Dropdown Values

### 8.1 Mode A preselect
FileMaker does it inside `Get Value List` output.
You pass the selected value in the parameter string, and the script outputs `selected` on the matching `<option>`.

### 8.2 Mode B preselect
JavaScript does it during option creation:

~~~js
if (id === selectedDepartment) option.selected = true;
~~~

That means:
- FileMaker must supply correct selected IDs
- the JS object keys must match those IDs

---

## 9) Where Dropdown Data Comes From

Your page uses two sources:

### 9.1 Value lists turned into HTML options (Mode A)
Examples:
- Titles
- Nationalities
- Regions
- Roles

### 9.2 Data lists turned into JS objects (Mode B)
Examples:
- Departments
- Job Titles
- Notches

---

## 10) Copy-Paste Implementation Templates

### 10.1 Template A: FileMaker-generated HTML options dropdown
HTML:
~~~html
<div class='form-group-2'>
  <label for='FIELD_ID'>LABEL</label>
  <select id='FIELD_ID'> {{OPTIONS_HTML}} </select>
</div>
~~~

FileMaker pattern:
~~~filemaker
Perform Script [ "Get Value List" ; Parameter: "Dropdown|VALUE_LIST_NAME|" & $SelectedValue ]
Set Variable [ $OptionsHTML ; Value: Get ( ScriptResult ) ]
~~~

Inject:
~~~filemaker
Set Variable [ $TabX HTML ;
"
<select id='FIELD_ID'> " & $OptionsHTML & " </select>
"
]
~~~

### 10.2 Template B: JS-generated dropdown from JS object
HTML skeleton:
~~~html
<div class='form-group-2'>
  <label for='FIELD_ID'>LABEL</label>
  <select id='FIELD_ID'><option value=''>Select LABEL</option></select>
</div>
~~~

JS population:
~~~js
const data = { {{DATA_JS}} };
const dropdown = document.getElementById('FIELD_ID');

for (const [id, details] of Object.entries(data)) {
  let option = document.createElement('option');
  option.value = id;
  option.textContent = details.c2;
  dropdown.appendChild(option);
}
~~~

---

## 11) Quality Checklist for the AI Agent

When adding a dropdown field, the AI Agent must verify:

### Structure
1. `<select>` has a stable ID
2. `<label for>` matches the ID
3. Field sits inside standard grid containers (`form-gridX`, `form-group-2`)

### Data source
4. Mode A:
   - `Get Value List` called with `"Dropdown|..."` format
   - HTML options string injected into `<select>`
5. Mode B:
   - `Get Value List` called with `"JS|..."` format
   - output becomes valid JS object inside `{ }`
   - JS populates `<select>` with `document.createElement('option')`

### Preselect
6. Preselected value is applied correctly:
   - Mode A uses `selected` option output
   - Mode B compares IDs and sets `option.selected = true`

### Save
7. Dropdown value is read on Save
8. Value is included in parameter list in correct order
9. Encode if needed to protect delimiter-based parameter parsing

---

## 12) Common Failure Modes and Fixes

### 12.1 Dropdown shows empty even though data exists
Cause:
- You forgot to inject `$OptionsHTML`
Fix:
- Ensure:
  - `select id='x'> " & $OptionsHTML & " </select>`

### 12.2 Wrong item is preselected in Mode A
Cause:
- The selected value passed to `Get Value List` does not match any option value
Fix:
- Ensure the script expects label vs ID and you pass the correct one

### 12.3 Dependent dropdown does not update
Cause:
- missing change event listener
Fix:
- Ensure:
  - `departmentDropdown.addEventListener('change', ...)`

### 12.4 Dependent dropdown filters wrong
Cause:
- incorrect c-mapping assumptions (`c2`, `c3`)
Fix:
- verify:
  - jobTitles entry has department ID in `c2`
  - notch entry has job title ID in `c2`

### 12.5 Save script receives wrong dropdown data
Cause:
- parameter order mismatch
Fix:
- match `parameters = [ ... ].join('|')` order to the FileMaker save script parsing order

---

## 13) Clarifications Needed (Ambiguities the AI Agent Cannot Guess)

These must be clarified to make the AI Agent implementation perfect:

1. **Option values: IDs or labels**
   - For Titles, Nationalities, Regions:
     - does the `<option value>` equal the label text
     - or a UUID behind the scenes
   - For Roles:
     - looks like it may be ID-based (`$Role ID`)
   - The AI Agent needs the rule per value list type.

2. **Exact output format of `Get Value List`**
   - For Dropdown mode:
     - does it return only `<option>` tags
     - or full `<select>` markup sometimes
   - For JS mode:
     - does it return strict JSON
     - or JSON-like object literal without outer braces
   - The AI Agent must generate compatible wrappers.

3. **Selection key in JS mode**
   - Are selected values always IDs (`$Department ID`, `$Job Title ID`, `$Notch ID`)?
   - Or do you sometimes preselect by display name?

4. **Sorting**
   - Should dropdown options be sorted alphabetically
   - or in a custom order defined by the dataset?

5. **Empty selection rules**
   - When value is empty, should the first option always be:
     - `<option value=''>Select X</option>`
   - Any fields that must never be blank?

---

## 14) Implementation Standard (What the AI Agent Must Produce)

When asked to implement a dropdown in CauferoAppStarter, the AI Agent must produce:

1. HTML `<select>` with stable ID and label
2. One of:
   - Mode A: FileMaker-generated `<option>` HTML injected
   - Mode B: JS object injected and JS populates options
3. Preselect behavior:
   - Mode A via `selected` option in HTML output
   - Mode B via ID comparison and `option.selected = true`
4. Save integration:
   - read `.value`
   - include in parameter list
   - encode if needed for delimiter safety