# Saving Records in Batch (CauferoAppStarter)
_Training documentation for an AI Agent to generate FileMaker scripts that save a batch of records in one operation, using list parsing or JSON parsing, typically replacing an existing found set._

---

## 0) Scope and Goal

This documentation teaches an AI Agent how to generate **Batch Save** scripts, meaning:

- The UI collects many items (answers, questions, chart rows, results, costs).
- The script receives them as a single payload.
- The script then saves **multiple records** in a loop.

Batch Save scripts in this system commonly use a **replace pattern**:

1. Find the existing related records for a parent context.
2. Delete all those existing records.
3. Recreate the entire set from the incoming payload.

This documentation covers that batch replace style.

---

## 1) Canonical Batch Save Pattern

A Batch Save script must follow this flow:

1. Turn on `Set Error Capture [ On ]` (mandatory).
2. Read the payload from `Get ( ScriptParameter )` or ordered parameters.
3. Convert payload into a loopable structure:
   - return-delimited list, or
   - JSON array iteration.
4. Open a Card window when the script must isolate context (recommended for destructive operations).
5. Go to the target table layout.
6. Perform a find that isolates the target record set (usually `Perform Find [ Restore ]`).
7. If found set has records, delete them all:
   - `Delete All Records [ With dialog: Off ]`
8. Loop through the incoming items:
   - parse one item
   - validate minimal integrity
   - create record
   - set fields
9. Close the Card window if one was opened.
10. Restore UI state and navigate if required.

---

## 2) When to Use Batch Save

Batch Save is preferred when:

- The UI edits many rows at once.
- The user expects one “Save” action to apply to all rows.
- The database rows are “dependent children” of a parent record (answers for an appraisal, lab results for a test, costs for a payroll item, treatment chart rows for a visit).
- Partial incremental updates are not needed, and a full replace is acceptable.

---

## 3) Batch Save Strategies Supported

This system uses two batch save strategies:

### 3.1 Replace-All (delete existing, reinsert all)
This is the dominant strategy in your samples.

Traits:
- A find is performed to get the old set.
- The found set is deleted.
- New records are inserted from the payload.

Used by:
- Save Appraisal Answers
- Save Treatment Chart
- Save Lab Test Results
- Save Payroll Item Costs

### 3.2 Upsert Per Item (find-by-ID, create if missing, update if found)
This is used when incoming items include IDs that must map to persistent records and you must avoid deleting everything.

Used by:
- Save Appraisal Template Questions (categories and questions)

---

## 4) Payload Formats the AI Agent Must Handle

### 4.1 Return-delimited list payloads (common)
The payload is converted into a return-delimited list.
Each line represents one record item.
Each line is then split using a secondary delimiter (often `|`, sometimes `^`).

Examples:
- Lab results: comma separated items -> replaced with `¶`, each item split by `|`
- Treatment chart: items separated by custom markers then split by `|`
- Payroll costs: items separated by commas -> `¶`, then split by `|` and `^`

Canonical parsing pattern:

~~~filemaker
Set Variable [ $Items ; Value: <payload> ]
Set Variable [ $Items ; Value: Substitute ( $Items ; "," ; ¶ ) ]
Set Variable [ $Total Items ; Value: ValueCount ( $Items ) ]

If [ $Total Items > 0 ]
  Loop [ Flush: Always ]
    Set Variable [ $i ; Value: $i + 1 ]
    Set Variable [ $Item ; Value: GetValue ( $Items ; $i ) ]
    Set Variable [ $Item As List ; Value: Substitute ( $Item ; "|" ; ¶ ) ]
    /* Extract fields using GetValue */
    Exit Loop If [ $i ≥ $Total Items ]
  End Loop
End If
~~~

### 4.2 JSON array payloads (structured)
The payload is JSON and includes an array key (example: `records`).
Each record object contains multiple keys.

Canonical parsing pattern:

~~~filemaker
Set Variable [ $jsonData ; Value: GetValue ( GetScriptParameters ; 1 ) ]
Set Variable [ $recordCount ; Value: JSONListKeys ( $jsonData ; "records" ) ]
Set Variable [ $counter ; Value: 0 ]

Loop [ Flush: Always ]
  Exit Loop If [ $counter >= ValueCount ( $recordCount ) ]
  Set Variable [ $currentRecord ; Value: JSONGetElement ( $jsonData ; "records[" & $counter & "]" ) ]

  /* Read keys with JSONGetElement */
  Set Variable [ $counter ; Value: $counter + 1 ]
End Loop
~~~

---

## 5) Window and Layout Rules

### 5.1 When to open a Card window (recommended)
Open a Card window when the script will:
- delete records,
- create many records,
- switch layouts multiple times,
- or should not affect user context.

Pattern:

~~~filemaker
New Window [ Style: Card ; Using layout: <Current Layout> ]
/* work in the card */
Perform Script [ Specified: From list ; “Close Window” ; Parameter:    ]
~~~

This is used in:
- Save Appraisal Answers
- Save Lab Test Results
- Save Payroll Item Costs

### 5.2 Layout switching rule
Batch saves are layout-driven.
You must go to the table layout that matches the records you are editing before:
- finding,
- deleting,
- creating,
- setting fields.

---

## 6) Found Set Isolation and Delete Rules (Replace-All Strategy)

### 6.1 Found set must represent only the target records
Before deleting, the script must isolate only the records that belong to the current parent context.

Your samples use:

~~~filemaker
Perform Find [ Restore ]
If [ Get ( FoundCount ) > 0 ]
  Delete All Records [ With dialog: Off ]
End If
~~~

Contract:
- The layout used must have a stored find request that filters correctly for the parent context (example: `$$Staff Appraisal ID`, `$$Patient Visit Lab Test ID`, `$$Payroll Item ID`, etc.).
- The AI Agent must not delete records unless it is certain the found set is the intended subset.

### 6.2 Delete confirmation must be off
Batch saves must not prompt the user during deletes:

~~~filemaker
Delete All Records [ With dialog: Off ]
~~~

---

## 7) Loop Insert Rules

### 7.1 Each iteration must create a record only when valid
Batch payloads can contain blank lines, placeholders, or items that must be skipped.
Therefore, each loop must have validation logic.

Examples of validation in your scripts:

- Save Appraisal Answers:
  - only create if question id looks valid:
    - `If [ Length ( $Appraisal Template Question ID ) < 10 ]`
- Save Payroll Item Costs:
  - only create if amount is not empty:
    - `If [ not IsEmpty ( $Amount ) ]`

Canonical rule:
- Always validate that the record item contains the minimum required fields before creating a record.

### 7.2 New record and Set Field sequence
When inserting:

~~~filemaker
New Record/Request
Set Field [ Table::Parent ID ; $$Parent ID ]
Set Field [ Table::Child Key ; $Some ID ]
Set Field [ Table::Value ; $Value ]
~~~

### 7.3 Exit loop condition
Always exit cleanly:

~~~filemaker
Exit Loop If [ $i ≥ $Total Items ]
~~~

or for JSON loops:

~~~filemaker
Exit Loop If [ $counter >= ValueCount ( $recordCount ) ]
~~~

---

## 8) Upsert Per Item Rules (Find-by-ID Strategy)

Used when:
- incoming records have stable IDs
- deleting everything is not acceptable
- category and question records must persist and be updated or created as needed

Canonical pattern:

1. Go to table layout
2. Enter Find Mode
3. Set field `ID` to incoming ID
4. Perform Find
5. If not found, create record and set required foreign keys
6. Set/update the editable fields

Example structure:

~~~filemaker
Go to Layout [ “Some Table” (Some Table) ; Animation: None ]
Enter Find Mode [ Pause: Off ]
Set Field [ Some Table::ID ; $incomingId ]
Perform Find [ ]

If [ Get ( FoundCount ) = 0 ]
  New Record/Request
  Set Field [ Some Table::ID ; $incomingId ]
  Set Field [ Some Table::Parent ID ; $$Parent ID ]
End If

Set Field [ Some Table::Name ; $name ]
Set Field [ Some Table::Description ; $description ]
~~~

---

## 9) Normalization Rules in Batch Saves

Batch saves must apply the same normalization rules as single saves, but inside loops.

### 9.1 DecodeURIComponent rule
If JSON contains URL-encoded content:

~~~filemaker
Set Variable [ $questionDescription ; Value: DecodeURIComponent ( $questionDescription ) ]
~~~

### 9.2 Date conversion rule
If a date comes in non-FileMaker format:

~~~filemaker
Set Variable [ $Date ; Value: DateInShortWordsToFMPDate ( $Date ) ]
~~~

or use the correct conversion function for that payload type.

### 9.3 Numeric duplication rule (when schema needs it)
If schema includes both text and numeric fields for the same value, set both:

~~~filemaker
Set Field [ Table::Quantity ; $Quantity ]
Set Field [ Table::Quantity Number ; $Quantity ]
~~~

---

## 10) Post-save UX Rules

### 10.1 Closing Card windows
If a Card window was opened, close it:

~~~filemaker
Perform Script [ Specified: From list ; “Close Window” ; Parameter:    ]
~~~

### 10.2 Tab restoration and navigation (when applicable)
Some batch saves return the user to a specific tab and page.

Example (Treatment Chart):

~~~filemaker
Set Variable [ $$Tab To Show ; Value: 5 ]
Perform Script [ Specified: From list ; “+++ InPatient Details Page” ; Parameter: $$Appointment ID ]
~~~

Rule:
- Only set `$$Tab To Show` and navigate if the batch save is part of a page workflow that requires it.

---

## 11) The AI Agent Output Requirements (Hard Requirements)

When asked to generate a Batch Save script, the AI Agent must produce a FileMaker script that includes:

1. `Set Error Capture [ On ]`
2. Payload ingestion and conversion to a loopable structure:
   - return-delimited list, or
   - JSON iteration
3. Safe isolation of the target found set before deleting (if Replace-All strategy is used)
4. Delete existing records with dialog off (only when Replace-All strategy is used)
5. Loop with:
   - counter increment
   - item parsing
   - validation
   - `New Record/Request`
   - `Set Field` assignments
   - exit condition
6. Window management:
   - Card window isolation when destructive operations are used
   - `Close Window` when finished
7. Optional UI restoration and navigation as required by the workflow

---

## 12) Canonical Batch Save Templates (AI Agent Reuse Templates)

### 12.1 Template A: Replace-All from a Return-Delimited List

~~~filemaker
# Save [Entity] Batch Items

Set Error Capture [ On ]

# Get payload
Set Variable [ $Items ; Value: Get ( ScriptParameter ) ]
Set Variable [ $Items ; Value: Substitute ( $Items ; "," ; ¶ ) ]
Set Variable [ $Total Items ; Value: ValueCount ( $Items ) ]

# Isolate in Card window (recommended)
New Window [ Style: Card ; Using layout: <Current Layout> ]

# Go to target layout and isolate found set
Go to Layout [ “[Target Layout]” ([Target Table]) ; Animation: None ]
Perform Find [ Restore ]

If [ Get ( FoundCount ) > 0 ]
  Delete All Records [ With dialog: Off ]
End If

# Insert new set
If [ $Total Items > 0 ]
  Loop [ Flush: Always ]
    Set Variable [ $i ; Value: $i + 1 ]
    Set Variable [ $Item ; Value: GetValue ( $Items ; $i ) ]
    Set Variable [ $Item As List ; Value: Substitute ( $Item ; "|" ; ¶ ) ]

    # Extract fields
    Set Variable [ $Child ID ; Value: GetValue ( $Item As List ; 1 ) ]
    Set Variable [ $Value ; Value: GetValue ( $Item As List ; 2 ) ]

    # Validate
    If [ not IsEmpty ( $Child ID ) ]
      New Record/Request
      Set Field [ [Target Table]::Parent ID ; $$Parent ID ]
      Set Field [ [Target Table]::Child ID ; $Child ID ]
      Set Field [ [Target Table]::Value ; $Value ]
    End If

    Exit Loop If [ $i ≥ $Total Items ]
  End Loop
End If

# Close window
Perform Script [ Specified: From list ; “Close Window” ; Parameter:    ]
~~~

### 12.2 Template B: Upsert from JSON Array

~~~filemaker
# Save [Entity] Records From JSON

Set Error Capture [ On ]

Set Variable [ $jsonData ; Value: GetValue ( GetScriptParameters ; 1 ) ]
Set Variable [ $recordKeys ; Value: JSONListKeys ( $jsonData ; "records" ) ]
Set Variable [ $counter ; Value: 0 ]

Loop [ Flush: Always ]
  Exit Loop If [ $counter >= ValueCount ( $recordKeys ) ]

  Set Variable [ $currentRecord ; Value: JSONGetElement ( $jsonData ; "records[" & $counter & "]" ) ]

  # Read fields
  Set Variable [ $id ; Value: JSONGetElement ( $currentRecord ; "id" ) ]
  Set Variable [ $name ; Value: JSONGetElement ( $currentRecord ; "name" ) ]
  Set Variable [ $desc ; Value: DecodeURIComponent ( JSONGetElement ( $currentRecord ; "description" ) ) ]

  # Upsert
  Go to Layout [ “[Target Layout]” ([Target Table]) ; Animation: None ]
  Enter Find Mode [ Pause: Off ]
  Set Field [ [Target Table]::ID ; $id ]
  Perform Find [ ]

  If [ Get ( FoundCount ) = 0 ]
    New Record/Request
    Set Field [ [Target Table]::ID ; $id ]
    Set Field [ [Target Table]::Parent ID ; $$Parent ID ]
  End If

  Set Field [ [Target Table]::Name ; $name ]
  Set Field [ [Target Table]::Description ; $desc ]

  Set Variable [ $counter ; Value: $counter + 1 ]
End Loop

Go to Layout [ original layout ; Animation: None ]
~~~

---

## 13) Clarifications the AI Agent Must Not Guess

These must be defined per batch save use case:

1. What the stored find request filters by when using `Perform Find [ Restore ]`.
   - The script must know the parent context variable(s) that the restore find depends on.

2. Whether the batch save is Replace-All or Upsert.
   - The AI Agent must not choose randomly.

3. The delimiter rules for non-JSON payloads.
   - Example: `|`, `^`, `vvvvvvvvvv`, `ITEMS:`, `TREATMENT_CHART:`.

The AI Agent must replicate the delimiter protocol exactly as required by the calling UI.