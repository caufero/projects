# Script: Get Value List

### Purpose
`Get Value List` is a single, centralized list generator that returns UI-ready list content for many different WebViewer patterns in CauferoAppStarter.

It is a list service that:
- selects the correct dataset based on `List Style` and `List Key`
- fetches rows either via `ExecuteSQL` or via static inline `$Data`
- formats the result into the exact output shape required by the target UI pattern
- returns the formatted output as the script result (Text Result)

The goal is to standardize list generation across the entire file, reduce duplicated list logic, and keep WebViewer UIs consistent.

---

## Inputs and Output

### Input (ScriptParameter)
Single text parameter with 3 parts:

`List Style|List Key|Selected Item`

- delimiter: `|`
- the script converts `|` to `¶` and reads:
  - `$Style`        = GetValue ( paramAsList ; 1 )
  - `$ListKey`      = GetValue ( paramAsList ; 2 )
  - `$SelectedItem` = GetValue ( paramAsList ; 3 )

### Output
- Script exits with: `Exit Script [ Text Result: $GeneratedList ]`
- `$GeneratedList` is already formatted for direct use by the caller:
  - HTML snippets
  - JavaScript datasets
  - JSON payloads
  - plain lists (IDs, receipt rows)

---

## Hard Rules (Enforced)

### 1) Always reset `$Data` at script start
`$Data` is the fallback carrier for static lists (Countries, Currencies, Regions, etc.). It must be cleared on every run to prevent carryover from previous calls.

Required initialization:
- `Set Variable [ $Data ; Value: "" ]`

### 2) Master-Details details description variable
In the Master-Details details loop, the script sets:
- `$Details Description`

Therefore, the generated details object must use:
- `$Details Description`

Any reference to `$Details Item Description` should be removed or renamed for consistency.

### 3) ExecuteSQL parameterization policy
Either approach is acceptable:
- parameterized `ExecuteSQL` using `?`
- string concatenation

Recommendation for the AI Agent:
- prefer parameterized SQL when inserting values that might contain quotes or user-entered text
- string concatenation is fine for stable IDs and trusted globals when convenient

### 4) JS placeholder encoding and decoding
For `Style = "JS"`, the script encodes unsafe characters into placeholder tokens before building a JS object-text output.

Assumption (confirmed): all calling scripts implement the same decoding logic.

Hard rule:
- any consumer of `Style = "JS"` must decode placeholders before display, searching, or comparisons

If the encode mapping changes in this script, the shared decode mapping in callers must be updated in the same change set.

---

## High-Level Flow

1. Parse parameter into `$Style`, `$ListKey`, `$SelectedItem`
2. Initialize variables (including clearing `$Data`)
3. Determine `$SQL` or `$Data` based on `$Style` + `$ListKey`
4. Build `$List`
   - from `ExecuteSQL` if `$SQL` is set
   - from `$Data` if `$SQL` is empty
5. Transform `$List` into `$GeneratedList` based on `$Style`
6. Exit with `$GeneratedList`

---

## Supported List Styles
Style values are case sensitive and must match exactly:

1. Dropdown
2. Searchable Dropdown
3. Checklist
4. JS
5. JS 2
6. Mini-List
7. Notes List
8. Master-Details
9. Grid
10. ID List
11. Hierarchical Form Setup
12. Hierarchical Form With Scores
13. Table In First Card
14. Table In Second Card
15. Table With Checkboxes
16. Table with Images
17. List for Receipt
18. Bill with Checkboxes
19. JSON
20. Remunerations

Note: Some styles are placeholders and are not fully implemented yet (see Placeholder Styles section).

---

## Data Source Contract

### `$SQL` mode
If `$SQL` is not empty:
- the script runs `ExecuteSQL ( $SQL ; fieldSeparator ; rowSeparator ; [optional parameters...] )`
- the result becomes `$List`

Default separators (most styles):
- fieldSeparator = `|`
- rowSeparator   = `¶`

### `$Data` mode
If `$SQL` is empty:
- `$List` becomes `$Data`

Expected `$Data` format:
- rows separated by `¶`
- columns separated by `|`

For simple static dropdowns that only need a single label per row:
- `$Data` is usually one value per row
- the Dropdown formatter will treat the single value as the label, and also use it as the ID

---

## Output Contracts by Style
This section defines the strict contract the AI Agent must follow when adding new list keys or consuming outputs.

### Style: Dropdown
Use case:
- HTML `<select>` options

Expected `$List` row shape:
- SQL mode: `ID|Label`
- Data mode: `Label`

Output shape:
- begins with a default option:
  - `<option value='' selected>Select One</option>` when `$SelectedItem` is empty
- then one `<option>` per record
- the option is marked `selected` when the record ID equals `$SelectedItem`

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Dropdown|Departments|" ]

---

### Style: Searchable Dropdown
Use case:
- JS dataset for a searchable dropdown widget

Expected `$List` row shape:
- `ID|Label`

Output shape:
- comma-separated JS objects:
  - `{ name: 'Label', uuid: 'ID' }`

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Searchable Dropdown|Patients|" ]

---

### Style: Checklist
Use case:
- HTML checklist with checkboxes and multi-line display

Expected `$List` row shape:
- `ID|Title|Subtitle|Description`

Output shape:
- `<div class='list-item' data-id='ID'>...</div>` for each row
- wrapped inside `<div class='list-container'>...</div>`
- includes footer with selected counter

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Checklist|Analytes|" ]

---

### Style: JS
Use case:
- JS object map keyed by record ID
- each record contains dynamic fields `c2..cN` derived from SQL columns 2..N

Expected `$List` row shape:
- column 1 = ID
- column 2..N = fields required by the consuming JavaScript

Output shape:
- text containing JS object entries (caller typically wraps in `{ ... }`)
- one entry per ID:
  `"ID": { c2: "value2", c3: "value3", ... }`

Important:
- output is placeholder-encoded (see next section)
- caller must decode placeholders before display or logic

Example call:
    Perform Script [ "Get Value List" ; Parameter: "JS|Job Titles|" ]

---

## JS Placeholder Encoding Contract

### Why encoding exists
The JS style returns JavaScript object text. Raw data can contain characters that break JS string literals and WebViewer parsing. Encoding prevents breakage and reduces injection risks.

### Encode mapping (script side)
In the JS branch, the script encodes `$List` with `Substitute` using these mappings:

- `¶`  -> `yyyyyyyyyy`
- `<`  -> `lessthan`
- `>`  -> `greaterthan`
- `/`  -> `forwardslash`
- `\`  -> `backslash`
- `#`  -> `hashhhh`
- `'`  -> `singlequote`
- `"`  -> `doublequotes`
- tab -> `sometab`
- `=`  -> `equalto`
- `::` -> `doublecolon`
- `;`  -> `semicolon`
- `&`  -> `ampersand`
- `|`  -> `ppippe`

Then it restores row breaks by converting the JS rowSeparator token back to `¶`.

### Decode mapping (caller side)
All callers must reverse the mappings above.

Hard rules:
- decode must happen before rendering to users
- decode must happen before searching or comparing values
- if the encode mapping changes in this script, the decode mapping must change in the same update

Testing rule:
- choose one record that contains multiple encoded characters (quotes, ampersand, slash)
- confirm the WebViewer UI shows the original text after decode
- confirm filtering or searching uses the decoded value

---

### Style: JS 2
Use case:
- specialized key:value mapping output, mainly for answers keyed by question ID

Expected `$List` row shape:
- produced by SQL designed to output key and value columns

Transformation:
- replaces `|` with `:`
- replaces `¶` with `,¶`
- applies a guard for empty output cases

Example call:
    Perform Script [ "Get Value List" ; Parameter: "JS 2|Staff Appraisal Answers|<StaffAppraisalID>" ]

---

### Style: Mini-List
Use case:
- compact clickable table rows inside a card area

Expected `$List` row shape:
- depends on list key
- commonly: `ID|Main|Sub1|Sub2|...`

Output shape:
- `<table class='mini-list'>...</table>`

Side effects:
- for remunerations mini-list, it accumulates `$$Year To Date`

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Mini-List|Selected Staff's Education|" ]

---

### Style: Notes List
Use case:
- notes history display with selected note highlighting

Expected `$List` row shape:
- `ID|Date|Time|Author|Notes`

Output shape:
- list container with clickable items
- selected state uses `$$Note ID`

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Notes List|Consultation Notes History|" ]

---

### Style: Master-Details
Use case:
- a master list dataset where each master item includes a nested details dataset

Master expected `$List` row shape:
- `MasterID|MasterName|ImageURL|Definition`

Details expected row shape (via `$Details Table SQL`):
- `DetailID|DetailName|DetailDescription`

Output shape:
- text containing JS object entries per master ID, each containing:
  - item_name
  - item_image_url
  - item_description
  - details array (or similar detail structure)

Hard rule (details description variable):
- use `$Details Description` in the generated details objects

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Master-Details|Specimen|<LabTestID>" ]

---

### Style: Grid
Use case:
- image + text card grid output as HTML

Expected `$List` row shape:
- `ID|Info1|Info2|Info3`

Behavior:
- fetches a base64 image by ID from `Images` table
- uses a placeholder base64 image when missing
- appends each ID to `$$Selected IDs`

Output shape:
- HTML blocks per grid item

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Grid|Selected Job Title's Staff|<JobTitleID>" ]

---

### Style: ID List
Use case:
- return an ID list and store it in `$$Selected IDs`

Expected `$List` row shape:
- one column: ID

Output shape:
- `ID¶ID¶ID¶`

Example call:
    Perform Script [ "Get Value List" ; Parameter: "ID List|Selected Specimen's Analytes|<LabTestSpecimenID>" ]

---

### Style: Hierarchical Form Setup
Use case:
- renders categories and nested question rows, used for template setup

Level 1 expected row shape:
- `CategoryID|Category|TotalQuestions`

Level 2 expected row shape:
- `QuestionID|Title|Question`

Output shape:
- HTML table rows with category rows and question rows

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Hierarchical Form Setup|Appraisal Template|<TemplateID>" ]

---

### Style: Hierarchical Form With Scores
Use case:
- same hierarchy as setup, with scoring-related UI markup

SQL shapes:
- same as Hierarchical Form Setup

Output shape:
- category rows plus question rows

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Hierarchical Form With Scores|Appraisal Template|<TemplateID>" ]

---

### Style: Table In First Card
Use case:
- dual-list UI where items are moved between two lists

Expected `$List` row shape:
- `ID|ItemLabel|Order|ParentLinkID`

Output shape:
- `<li ...>` items with move button, and optional indent for child items

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Table In First Card|Links|<RoleID>" ]

---

### Style: Table In Second Card
Same contract as Table In First Card, with the opposite move direction.

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Table In Second Card|Selected Role's Links|<RoleID>" ]

---

### Style: List for Receipt
Use case:
- build pipe-delimited rows for receipt printing or downstream processing

Expected `$List` row shape:
- `ID|Item Name|Cost`

Output shape:
- `ID|Name|Cost¶`

Example call:
    Perform Script [ "Get Value List" ; Parameter: "List for Receipt|Selected Appointment's Bill Items|<AppointmentID>" ]

---

### Style: Bill with Checkboxes
Use case:
- billing table rows with a checkbox per item, reflecting paid status

Expected `$List` row shape:
- `ID|Item Name|Cost|Paid Status`

Behavior:
- query logic changes based on `$$Service Type`

Output shape:
- HTML `<tr>` rows with checkbox state

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Bill with Checkboxes|Selected Appointment's Bill Items|<AppointmentID>" ]

---

### Style: JSON
Use case:
- returns JSON created from SQL result using `ExecuteSQLResultToJSON`

Output schema (confirmed):
~~~json
{
  "data": [
    { "Field1": "value", "Field2": 123, "Field3": true }
  ],
  "records": 1
}
~~~

Error schema:
~~~json
{
  "error": 1,
  "message": "Error Message"
}
~~~

Typing support:
- in the `fieldList`, append:
  - `|JSONNumber`
  - `|JSONBoolean`
- default is string

Example call:
    Perform Script [ "Get Value List" ; Parameter: "JSON|Specimen|" ]

---

### Style: Remunerations
Use case:
- builds a payslip-like HTML table and totals

Expected `$SelectedItem` values (confirmed):
- `Earnings`
- `Deductions`

Expected `$List` row shape:
- `Payroll Item Name|Rate|Quantity|Amount|Amount_YTD`

Output shape:
- full `<table class='payslip-table'>...</table>` with header and totals footer

Required totals initialization (to avoid carryover):
- `Set Variable [ $Total Amount ; Value: 0 ]`
- `Set Variable [ $Total YTD ; Value: 0 ]`

Example call:
    Perform Script [ "Get Value List" ; Parameter: "Remunerations|Staff Remunerations|Earnings" ]

---

## Placeholder Styles (Incomplete)
These styles exist but do not yet generate output rows:
- Table With Checkboxes
- Table with Images

AI Agent guidance:
- do not assume they work
- implement them fully before using them in new screens
- when implementing, define a strict row shape and a strict output shape similar to other styles

---

## Dependencies

### Custom Functions used
- ExecuteSQLResultToJSON
- GenerateFileIconHTML
- MySQLDateToFMPDateText
- DateInWordsShortMonth
- RelativeDateInWords
- ConvertLineBreakMarkersToReturns
- DefaultIfEmpty
- Singular

### Globals read
```
- $$App Name
- $$Material Category ID
- $$Job Title ID
- $$Patient ID
- $$Appointment ID
- $$App ID
- $$Equipment ID
- $$My Staff ID
- $$Remuneration ID
- $$Preferred Currency
- $$No Image URL
- $$Note ID
- $$Service Type
```

### Globals written
```
- $$Selected IDs
- $$Year To Date
```

AI Agent rule:
- any calling script that depends on a global must set it before calling `Get Value List`
- any caller that reads a global written here must not assume it is untouched by other calls

---

## Safe Extension Rules (For the AI Agent)

### Adding a new List Key
1. Choose the target `$Style` based on the required output shape.
2. Add a new `$ListKey` branch under that style in the SQL decision section.
3. Set `$SQL` or `$Data` using the expected row shape for that style.
4. Ensure the SQL column order exactly matches the style’s row contract.
5. Include `ORDER BY` for stable UI ordering.
6. Test:
   - empty result
   - one record
   - records containing special characters (especially for JS style)

### Changing the JS placeholder mapping
If you add or change a placeholder token:
- update this script mapping
- update the shared decode mapping in all callers
- add a quick regression test record that includes the affected character

### Recommendation for future improvements
- centralize the decode mapping in one shared WebViewer JS utility (single source of truth)
- gradually migrate JS outputs to strict JSON where practical, since JSON escaping is safer than manual placeholder encoding