# CauferoAppStarter Documentation
## Generate a FileMaker Script That Creates a New Record for Any Entity Type

### Purpose
This document teaches an AI Agent how to generate a FileMaker script that creates a new record for any entity type in **CauferoAppStarter**.

This script is the standard **entry point** used by a List Page button like:
- Add New Department
- Add New Material
- Add New Job Title
- Add New Logo File
- Add Staff Emergency Contact

### Core Pattern Used in CauferoAppStarter
CauferoAppStarter uses a simple, reliable pattern:

1. **The Add New script does not directly create the record.**
2. It generates a brand new UUID using `Get ( UUID )`.
3. It calls the target **Details Page** script (or **Modal Page** script) and passes that UUID.
4. The target page script uses the UUID to do an **Upsert-by-UUID**:
   - If a record with that UUID exists, it opens it.
   - If it does not exist, it creates a new record and sets its UUID to the passed value.

This means the Add New script is extremely consistent across all entities and very easy to auto-generate.

### Evidence From Existing Samples (Naming and Call Style)
Your samples show this exact call style:

- `Perform Script [ Specified: From list ; "+++ Department Details Page" ; Parameter: Get ( UUID ) ]`
- `Perform Script [ Specified: From list ; "+++ Material Details Page" ; Parameter: Get ( UUID ) ]`
- `Perform Script [ Specified: From list ; "+++ Job Title Details Page" ; Parameter: Get ( UUID ) ]`
- `Perform Script [ Specified: From list ; "+++ Logo File Details Page" ; Parameter: Get ( UUID ) ]`
- `Perform Script [ Specified: From list ; "+++ Staff Emergency Contacts Modal Page" ; Parameter: Get ( UUID ) ]`

So the Add New script is a consistent delegator that provides the new UUID.

---

# 1) What The AI Agent Must Generate

## 1.1 Script Goal
Generate a script that can be attached to an "Add New <Entity>" button on a List Page, and that will result in a new record being created for that entity type and opened on the correct UI (Details Page or Modal Page).

## 1.2 Input
- No required script parameter.
- The script itself generates a new UUID using `Get ( UUID )`.

## 1.3 Output
- The script navigates the user into the correct entity UI.
- The resulting entity record will have a UUID equal to the generated UUID.

The script usually does not return anything. If your framework uses script results, the expected result is the created UUID.

---

# 2) Naming Rules and Conventions

## 2.1 Script Name
The Add New script name should reflect the UI button label and entity.

Recommended naming pattern:
- `Add New <Entity>` as the visible label
- Script name can match label or follow internal naming, as long as it is consistent

Examples:
- `Add New Department`
- `Add New Material`
- `Add New Job Title`
- `Add New Logo File`
- `Add Staff Emergency Contact`

## 2.2 Target Script Name
The Add New script must call one of these target scripts:

### A) Entity Details Page Script
Pattern:
- `+++ <Entity> Details Page`

Examples:
- `+++ Department Details Page`
- `+++ Material Details Page`
- `+++ Job Title Details Page`
- `+++ Logo File Details Page`

### B) Entity Modal Page Script
Pattern:
- `+++ <Entity> Modal Page`

Example:
- `+++ Staff Emergency Contacts Modal Page`

## 2.3 Script Call Context
Use the Perform Script step exactly like your samples:
- `Specified: From list`
- Target script name must match exactly
- Parameter must be `Get ( UUID )`

---

# 3) The Add New Script Specification

## 3.1 High-Level Algorithm
When generating the Add New script, follow these steps:

1. Generate a new UUID for the record.
2. Perform the target page script (Details Page or Modal Page).
3. Pass the new UUID as the script parameter.

That is all.

## 3.2 Script Steps Template
This is the exact pattern the AI Agent must produce.

~~~filemaker
# Script: Add New <Entity>

Perform Script [
    Specified: From list ;
    "+++ <Entity> Details Page" ;
    Parameter: Get ( UUID )
]
~~~

If the entity is shown in a modal, replace the target script:

~~~filemaker
# Script: Add <Entity> (Modal)

Perform Script [
    Specified: From list ;
    "+++ <Entity> Modal Page" ;
    Parameter: Get ( UUID )
]
~~~

## 3.3 Why This Works
Because the target script receives the UUID and performs the Upsert-by-UUID logic:
- Find record by UUID
- Create if missing
- Load the UI

This keeps the Add New scripts uniform, fast to generate, and easy to maintain.

---

# 4) Target Page Script Contract (Required For Record Creation)

Even though this documentation focuses on the Add New script, the record creation only succeeds if the target page script follows this contract.

The AI Agent must assume this contract exists, and must flag it if it is missing.

## 4.1 Contract Summary
Target script receives `Get ( ScriptParameter )` as `$targetUUID`.

Then it must:
1. Validate `$targetUUID` is not empty.
2. Try to locate an existing record by UUID.
3. If not found, create a new record and set UUID to `$targetUUID`.
4. Continue building the page or modal for that record.

## 4.2 Contract Pseudocode
~~~filemaker
# Script: +++ <Entity> Details Page
# Parameter: targetUUID

Set Variable [ $targetUUID ; Get ( ScriptParameter ) ]

If [ IsEmpty ( $targetUUID ) ]
    # Handle error (dialog, exit, log)
    Exit Script [ Result: "" ]
End If

# Attempt to find existing record by UUID
# If found -> load it
# If not found -> create it and set UUID = $targetUUID

# Continue with page rendering logic
Exit Script [ Result: $targetUUID ]
~~~

## 4.3 Contract Concrete Skeleton (Recommended)
The exact steps will depend on your file structure, layouts, and how you manage context, but the creation portion usually follows this shape:

~~~filemaker
# Script: +++ <Entity> Details Page
# Parameter: targetUUID

Set Error Capture [ On ]
Allow User Abort [ Off ]

Set Variable [ $targetUUID ; Get ( ScriptParameter ) ]

If [ IsEmpty ( $targetUUID ) ]
    # Show dialog via your standard utility script
    # Perform Script [ "UTIL | Dialog" ; Parameter: ... ]
    Exit Script [ Result: "" ]
End If

# Go to an entity context where you can search and create
# Go to Layout [ "<Entity>__Context" ( <Entity> ) ]

Enter Find Mode [ Pause: Off ]
Set Field [ <Entity>::UUID ; $targetUUID ]
Perform Find [ ]

If [ Get ( FoundCount ) = 0 ]
    New Record/Request
    Set Field [ <Entity>::UUID ; $targetUUID ]

    # Recommended default fields
    # Set Field [ <Entity>::CreatedTS ; Get ( CurrentTimestamp ) ]
    # Set Field [ <Entity>::CreatedBy ; Get ( AccountName ) ]

    Commit Records/Requests [ Skip data entry validation: Off ]
    If [ Get ( LastError ) ≠ 0 ]
        Revert Record/Request [ No dialog ]
        Exit Script [ Result: "" ]
    End If
End If

# Now load the details UI for the record whose UUID is $targetUUID
# Continue with your Page Builder code
Exit Script [ Result: $targetUUID ]
~~~

This contract is the heart of the system. The Add New script stays clean because the Details Page script owns the creation logic.

---

# 5) How The AI Agent Chooses Details Page vs Modal Page

## 5.1 Decision Rule
Use **Details Page** when the entity is edited on a full details page experience.

Use **Modal Page** when the entity is edited inside a modal window.

## 5.2 How To Determine Which One To Use
Use the existing UI spec for that entity type.

If the UI button label says:
- "Add New <Entity>" and the entity has its own page -> Details Page
- "Add <Entity>" inside a larger parent workflow -> Modal Page

Your samples show:
- Staff Emergency Contacts uses Modal Page
- Department, Material, Job Title, Logo File use Details Page

## 5.3 Output Rule
The Add New script must call exactly one target script and pass `Get ( UUID )`.

---

# 6) Generation Checklist (AI Agent Quality Control)

Before outputting the script, the AI Agent must verify:

1. Target script name starts with `+++`.
2. Target script name ends with either `Details Page` or `Modal Page`.
3. Perform Script uses `Specified: From list`.
4. Parameter is exactly `Get ( UUID )`.
5. No extra steps are added unless a project rule explicitly requires them.

---

# 7) Common Failure Modes and Fixes

## 7.1 Failure: Record gets created with a different UUID
Cause:
- Target script generates a new UUID instead of using the passed UUID.

Fix:
- Target script must use `$targetUUID = Get ( ScriptParameter )` and set the record UUID to `$targetUUID`.

## 7.2 Failure: Page opens but record is missing
Cause:
- Target script does not implement Upsert-by-UUID.

Fix:
- Implement find-by-UUID then create-if-missing.

## 7.3 Failure: Wrong target script used
Cause:
- Modal entity called via Details Page script name, or vice versa.

Fix:
- Use UI spec and naming patterns to choose correctly.

## 7.4 Failure: Parameter is missing or empty
Cause:
- Parameter was not passed, or target script ignored it.

Fix:
- Add New script must pass `Get ( UUID )`.
- Target script must validate `$targetUUID`.

---

# 8) Examples (Directly Matching Your Samples)

## 8.1 Add New Logo File
~~~filemaker
Perform Script [
    Specified: From list ;
    "+++ Logo File Details Page" ;
    Parameter: Get ( UUID )
]
~~~

## 8.2 Add New Department
~~~filemaker
Perform Script [
    Specified: From list ;
    "+++ Department Details Page" ;
    Parameter: Get ( UUID )
]
~~~

## 8.3 Add New Job Title
~~~filemaker
Perform Script [
    Specified: From list ;
    "+++ Job Title Details Page" ;
    Parameter: Get ( UUID )
]
~~~

## 8.4 Add Staff Emergency Contact (Modal)
~~~filemaker
Perform Script [
    Specified: From list ;
    "+++ Staff Emergency Contacts Modal Page" ;
    Parameter: Get ( UUID )
]
~~~

## 8.5 Add New Material
~~~filemaker
Perform Script [
    Specified: From list ;
    "+++ Material Details Page" ;
    Parameter: Get ( UUID )
]
~~~

---

# 9) Clarifications Needed (Ambiguities That Must Be Resolved For Perfect Training)

The samples strongly imply the Upsert-by-UUID pattern, but to make the AI Agent output perfect, these must be confirmed:

1. **UUID Field Name**
   - What is the exact UUID field name used in each entity table?
   - Examples: `UUID`, `z_UUID`, `__k_UUID`, `pk_UUID`

2. **Where Upsert-by-UUID Lives**
   - Confirm that the record creation happens inside:
     - `+++ <Entity> Details Page`
     - `+++ <Entity> Modal Page`
   - Confirm that the Add New scripts remain one-step delegators.

3. **Default Fields On Create**
   - Which standard fields must be set on every new record?
   - Examples: CreatedTS, CreatedBy, UpdatedTS, UpdatedBy, IsActive, SortOrder

4. **Commit Rule**
   - Must the new record be committed immediately?
   - Or do you allow uncommitted creation while the user edits in a modal?

5. **Privilege and Error Handling**
   - Do you have a standard utility script for:
     - Access checks
     - Error dialogs
     - Logging
   - If yes, provide names so the AI Agent can call them consistently.

6. **Context Layout Rule**
   - When the target page script does the find and create, which layout should it use for that context?
   - Is there a standard context layout per entity for safe record operations?

7. **Modal Parent Context**
   - For modal entities like Staff Emergency Contacts, is the new record linked to a parent record immediately?
   - If yes, what parent keys are required and how are they passed?

Once these are clarified, the AI Agent can generate Add New scripts and the supporting Details/Modal scripts with full consistency across all entity types.