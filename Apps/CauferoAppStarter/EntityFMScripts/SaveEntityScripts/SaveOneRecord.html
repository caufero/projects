# Saving the Details of a Selected Entity (CauferoAppStarter)
_Training documentation for an AI Agent to generate FileMaker scripts that save the edited details of a selected entity record that originated from a List Page, whether the Details UI is a normal page or a modal window._

---

## 0) Scope and Goal

This documentation teaches an AI Agent how to generate a **Save Details** script for an entity record that was:

1. Selected from a **List Page**
2. Opened for viewing and editing in a Details UI that is either:
   - a normal **Details Page**, or
   - a **Modal Details Page** (a modal window)
3. Edited by the user
4. Saved back into the database

### 0.1 Key definition: “Selected Entity” in this document
In this document, “selected entity” always means:
- the **main entity record selected from a List Page** and opened for editing.

The Details UI may be a normal page or a modal window. Modal is only a UI container.

### 0.2 Out of scope for this document
This documentation does not cover saving a record that was opened from a **subtable of related records**, even if that related record is shown in a modal window.

That pattern uses a different saving approach and belongs to a separate documentation.

---

## 1) Canonical Save Details Pattern

A Save Details script must follow this flow:

1. Read ordered values from `Get ( ScriptParameter )` via `GetValue`.
2. Normalize inputs (dates, numbers, URL-encoded text).
3. Optional confirmation dialog for submissions.
4. Save using the generic script: **“Save A Record”**.
5. Optionally perform additional saves for related or join tables (only when they are part of saving the main entity record).
6. If the Details UI is a **Modal Details Page**, close the modal window.
7. Restore UI state (example: `$$Tab To Show`).
8. Navigate to the appropriate Details Page or List Page.
9. Show a success message.

This is the exact pattern used in your samples, with one added step for modal pages.

---

## 2) Core System Contracts (Must Be Obeyed)

### 2.1 The record ID is always provided
- Save Details scripts always save using a primary key ID.
- The ID will not be missing.
- The Save Details script must already have the selected record’s ID in a global variable (example: `$$Patient ID`, `$$Department ID`, `$$Staff ID`).

### 2.2 Field names in the save string must match FileMaker schema exactly
- Every field name included in the “Save A Record” parameter must be the exact FileMaker field name.
- No labels, no aliases, no friendly names.

### 2.3 `Settings::Location` is mandatory and always present
- `Settings::Location` indicates the app run mode (Local or On Server).
- “Save A Record” uses it to decide whether to run the final insert/update locally or perform the final script on server.
- If `Settings::Location` is blank, saving must error. Developer must set it.

---

## 3) “Save A Record” Contract (Authoritative)

### 3.1 Parameter string format
“Save A Record” receives one single string parameter using `¶` as the delimiter:

1. Table name (required, first item)
2. `Settings::Location` (required, second item)
3. Primary key field name and value (required, third pair)
4. Then field name/value pairs

Example shape:

~~~filemaker
Perform Script [ Specified: From list ; “Save A Record” ;
  Parameter:
    "Departments¶" &
    Settings::Location &
    "¶ID¶" & $$Department ID &
    "¶Name¶" & $Name &
    "¶HOD Staff ID¶" & $HOD Staff ID &
    "¶Description¶" & $Description
]
~~~

### 3.2 “Save A Record” behavior
“Save A Record” does this:

1. Goes to the specified table context.
2. Finds by the provided primary key field (example: `ID`) and value.
3. If the record is found, it updates fields.
4. If the record is not found, it creates a new record and sets the primary key field to the provided ID, then sets the remaining fields.

Important implication:
- Even for Save Details, if the ID exists and is valid but not found in the table, the record will be created as new.
- This is allowed and part of the design.

### 3.3 “ID” must always be included
The Save Details script must always include:

- `"¶ID¶" & $$Entity ID`

No exceptions.

---

## 4) Inputs and Normalization Rules

### 4.1 Script parameters are ordered
Your Details UI must pass values in the exact order the Save Details script expects.

Every Save Details script must read with:

- `GetValue ( GetScriptParameters ; 1 )`
- `GetValue ( GetScriptParameters ; 2 )`
- etc.

### 4.2 Text decoding rule (DecodeURIComponent)
If a value may come from a Web Viewer, treat it as URL-encoded unless you are 100 percent sure it is not encoded.

Use:

~~~filemaker
Set Variable [ $Description ; Value: DecodeURIComponent ( GetValue ( GetScriptParameters ; 3 ) ) ]
~~~

Use DecodeURIComponent for:
- Description
- Reason
- Addresses
- Notes
- Any multi-word text
- Any text that can contain punctuation or line breaks

### 4.3 Date conversion rule (MySQLDateToFMPDateText)
Dates are passed in a format that must be converted to FileMaker date format before saving.

Preferred single-step pattern:

~~~filemaker
Set Variable [ $Start Date ; Value: MySQLDateToFMPDateText ( GetValue ( GetScriptParameters ; 2 ) ) ]
~~~

Two-step conversion is allowed if a single step cannot guarantee the correct FileMaker format.

### 4.4 Number casting rule
When a value must be numeric, cast it:

~~~filemaker
Set Variable [ $Duration ; Value: GetAsNumber ( GetValue ( GetScriptParameters ; 4 ) ) ]
~~~

### 4.5 Derived values rule
If the database stores derived values, compute them after normalization.

Example from Staff:
- Age from DOB
- DOB Day
- DOB MonthName
- DOB MonthNumber key

---

## 5) Modal Details Page Rule (Mandatory When the Details UI Is Modal)

If the entity Details UI is a **Modal Details Page**:

### 5.1 The only difference
After all save calls complete, insert a Close Window step before restoring tab state.

Required sequence:

1. Perform the save call(s)
2. Close the modal window
3. Set `$$Tab To Show`
4. Navigate as required

### 5.2 Required step and exact placement
Insert this step immediately before:

- `Set Variable [ $$Tab To Show ; Value: 1 ]`

Required step:

~~~filemaker
Perform Script [ Specified: From list ; “Close Window” ; Parameter:    ]
~~~

---

## 6) Post-save UI and Navigation Rules

### 6.1 Tab restoration
If your Details UI uses tabs, restore the desired tab:

~~~filemaker
Set Variable [ $$Tab To Show ; Value: 1 ]
~~~

If the Details UI is modal:
- Close Window first
- Then set `$$Tab To Show`

### 6.2 Navigation after saving
Choose the destination based on the UX:

- Reload Details Page when user should remain on the record (example: Department, Staff).
- Return to List Page when save completes a task and user should go back (example: Patients).
- Return to a workflow list page after submission (example: Leave Request submission).

---

## 7) Commit Records/Requests Rule (Recommended Standard)

You asked: “Is Commit Records/Requests being used anywhere?”

I cannot see your full file from here, so I cannot confirm usage directly.

### 7.1 Recommended standard
- Do not put `Commit Records/Requests` inside individual Save Details scripts.
- Put commit responsibility inside “Save A Record” (or inside the final insert/update scripts that “Save A Record” calls).

### 7.2 How to verify inside your FileMaker file
In Script Workspace, search for:
- `Commit Records/Requests`

Check:
- “Save A Record”
- Any scripts it performs (local and server variants)
- Any lower-level scripts used for final insert/update

If commit exists there, then Save Details scripts should not add commit.

If commit does not exist anywhere in the save engine, then add commit inside the save engine, not inside each Save Details script.

---

## 8) Month Fields Standardization Rule

You want a standard when similar month tracking is needed.

### 8.1 Recommended standard fields
If a table needs month tracking, store both:

1. Readable label:
   - `Month Created` = `MonthName ( Get ( CurrentDate ) ) & ", " & Year ( Get ( CurrentDate ) )`
2. Sortable numeric key:
   - `Month Created Number` = `Year ( Get ( CurrentDate ) ) * 100 + Month ( Get ( CurrentDate ) )`

If your schema has different field names (example: `Month Name Created`), keep field names, but align the values to the standard approach.

---

## 9) Entity Patterns the AI Agent Must Learn From the Samples

### 9.1 Department (single table save)
Traits:
- Few params
- Decode description
- Save one table
- Reload Details Page
- Success dialog

### 9.2 Leave Request (submission style save)
Traits:
- Confirmation dialog required
- Convert multiple dates
- Decode reason
- Save status
- Go back to workflow list page
- Success dialog

### 9.3 Staff (multi-save plus user/role side effect)
Traits:
- Many params
- Convert DOB
- Compute derived fields
- Generate staff number if empty using a global previous code
- Save Staff main table
- Save Staff Job Titles table
- If role changed, create or update user record

Important correction:
- Use `$$Previous Code`, not `$Previous Code`.

### 9.4 Patient (main save plus related saves)
Traits:
- Convert DOB and compute age
- Save Patients
- Save emergency contact
- Save primary care physician
- Return to Patients list page

---

## 10) Canonical Rule for Role and User Logic (Staff)

### 10.1 Stored meaning of `$$Role ID`
- `$$Role ID` is captured when viewing the staff record.
- It represents the staff’s role before edits.

### 10.2 When to create or update the user
When saving staff:
1. If `$Role ID` is empty, skip user logic.
2. If `$Role ID` is not empty:
   - Find if a user exists for this staff (via Users table lookup).
   - If role did not change, do nothing.
   - If role changed:
     - If user does not exist, create user.
     - If user exists, update role.

This must happen only when the role changed.

### 10.3 Username logic per business
Your sample shows:

~~~filemaker
Set Variable [ $Username ;
  Value:
    Case (
      $$Staff ID = $$My Staff ID ; "admin" ;
      $$Business Name = "DC Clinic" ; $Staff Number ;
      $Email
    )
]
~~~

This is a business rule. The AI Agent must not invent new business rules.

Remaining requirement:
- You should define a single authoritative username rule per business, then the AI Agent must reuse it exactly.

---

## 11) The AI Agent Output Requirements (Hard Requirements)

When asked to generate a Save Details script, the AI Agent must produce a FileMaker script that includes:

1. A clear script name in your naming convention:
   - `Save [Entity] Details` or `Save [Entity]`
2. Parameter extraction for every input using `GetValue`.
3. Correct normalization:
   - `DecodeURIComponent` for encoded text
   - `MySQLDateToFMPDateText` for dates
   - `GetAsNumber` for numbers
4. One or more “Save A Record” calls with this exact ordering:
   - Table name first
   - `Settings::Location` second
   - Primary key pair (`ID` then the ID value) immediately after
   - Field name/value pairs after that
5. Any secondary saves for related or join tables if required.
6. If the Details UI is a modal page:
   - Perform Script: `Close Window` after saving and immediately before setting `$$Tab To Show`
7. Post-save UI state restore (`$$Tab To Show` when applicable).
8. Navigation to Details Page or List Page.
9. A success dialog.

---

## 12) Canonical Save Details Template (AI Agent Reuse Template)

Adapt this template per entity.

~~~filemaker
# Save [Entity] Details

# Get Script Parameters
Set Variable [ $Field 1 ; Value: GetValue ( GetScriptParameters ; 1 ) ]
Set Variable [ $Field 2 ; Value: GetValue ( GetScriptParameters ; 2 ) ]
Set Variable [ $Long Text ; Value: DecodeURIComponent ( GetValue ( GetScriptParameters ; 3 ) ) ]
Set Variable [ $Date Field ; Value: MySQLDateToFMPDateText ( GetValue ( GetScriptParameters ; 4 ) ) ]
Set Variable [ $Number Field ; Value: GetAsNumber ( GetValue ( GetScriptParameters ; 5 ) ) ]

# Derived values (only if schema needs them)
# Set Variable [ $Derived ; Value: ... ]

# Optional confirmation for submissions
# Show Custom Dialog [ "Confirm" ; "Are you sure?" ]
# If [ Get ( LastMessageChoice ) ≠ 1 ]
#   Exit Script [ Result: "" ]
# End If

# Save main record
Perform Script [ Specified: From list ; “Save A Record” ;
  Parameter:
    "[TableName]¶" &
    Settings::Location &
    "¶ID¶" & $$[Entity] ID &
    "¶Field 1¶" & $Field 1 &
    "¶Field 2¶" & $Field 2 &
    "¶Long Text¶" & $Long Text &
    "¶Date Field¶" & $Date Field &
    "¶Number Field¶" & $Number Field
]

# Optional related saves (only if required as part of saving the main entity record)
# Perform Script [ Specified: From list ; “Save A Record” ;
#   Parameter: "RelatedTable¶" & Settings::Location & "¶ID¶" & $$Related ID & ...
# ]

# If Details UI is a Modal Details Page, close it before restoring tab state
# Perform Script [ Specified: From list ; “Close Window” ; Parameter:    ]

# Post-save UI state
Set Variable [ $$Tab To Show ; Value: 1 ]

# Navigate
Perform Script [ Specified: From list ; “+++ [Entity] Details Page” ; Parameter: $$[Entity] ID ]

# Success feedback
Show Custom Dialog [ "Saved" ; "[Entity] saved successfully" ]
~~~

---

## 13) Remaining Ambiguities That Still Need Definition

These are the only items still not fully defined. The AI Agent cannot invent them.

1. Username rule per business:
   - You should define the authoritative logic and where it lives.

2. Month field naming:
   - You want a standard, but field names differ between tables.
   - Define whether you will standardize field names across tables, or keep table-specific field names and standardize values only.

Everything else is deterministic based on your answers.

---
