# FileMaker Table Creation Rules (CauferoAppStarter)

These rules define how to create new tables so they match the structure, naming, and field patterns already used in this FileMaker system.

---

## 1. Schema Preflight Rule (Strict, Must Run First)

Any AI agent tasked to design or create this FileMaker application MUST run a schema preflight before proposing or creating any new tables or fields.

### 1.1 Goal
Prevent duplicate tables and duplicate fields by reusing what already exists.

### 1.2 What Counts As A Duplicate
A duplicate is any of the following:
- A table name that already exists in **Current Tables in CauferoAppStarter**
- A field name that already exists in the target table’s **Fields of the Different Tables**
- A "same meaning, different name" field where an equivalent field already exists (example: creating `Phone Number` when `Phone` already exists and is used system-wide)

### 1.3 Preflight Steps (Required)
Before outputting any new table or field definition, the AI MUST do this:

1. List the required entities implied by the application description (example: Staff, Patients, Vendors, Purchase Orders).
2. Check existing tables first:
   - If a table already exists and matches the entity, reuse it.
   - If a table partially matches, extend it only by adding missing fields (after field checks below).
3. For each table to be reused or created, check fields first:
   - Compare each required field against the existing field list for that table.
   - Reuse the existing field name if it exists and fits the meaning.
4. Normalize names when comparing (for duplication detection):
   - Trim spaces
   - Case-insensitive match
   - Treat `_` and multiple spaces as equivalent separators for comparison
   - Example: `Full Name`, `Fullname`, `Full_Name` should be treated as potential duplicates and resolved into the existing system preference for that table.
5. Resolve collisions using these rules:
   - If the exact name exists: do not create a new one
   - If the meaning exists under a different name: reuse the existing one and document the mapping
   - If two meanings truly differ, create a new field using a clearer name that does not clash (example: `Contact Phone` vs `Phone`)
6. Only after Steps 1 to 5:
   - Propose new tables
   - Propose new fields
   - Propose join tables and child tables

### 1.4 Reuse Priority Rules (When Choosing Between Similar Existing Fields)
When multiple existing fields are similar, the AI MUST choose using this priority order:
1. Field already used in the same module (example: Clinical tables)
2. Field name pattern already used across the system (example: `Mobile` in Patients, `Phone` in Staff, `Contact Phone` in Vendors)
3. Field that matches the system’s indexing and audit style for that table type

### 1.5 Strict Prohibitions
- The AI MUST NOT create a new table or field if an equivalent already exists.
- The AI MUST NOT rename existing schema objects as part of creation output.
- The AI MUST NOT create "helper duplicates" like `Status 2`, `Status Text`, `New Status`. Equivalent fields must be reused, or the proper field strategy must be applied.

---

## 2. Relationship and Layout Architecture Rule (SQL + WebViewer Only)

This system is SQL-driven and WebViewer-driven.

### 2.1 Do Not Create Relationships In The Relationship Graph
- The AI MUST NOT create relationships in FileMaker’s Relationship Graph.
- The AI MUST NOT add table occurrences solely for relationship purposes.
- The AI MUST NOT attempt to design layouts around related records.

### 2.2 Data Retrieval and Linking Method
- All relationships will be expressed inside **ExecuteSQL** queries.
- All layouts are **WebViewer-based**.
- All data displayed in UI will be fetched via **ExecuteSQL** queries (and passed into WebViewer as JSON or other structured formats).

### 2.3 Implication For Table Design
- Foreign keys must still be created normally (Text fields ending with ` ID`, indexed).
- Join tables must still be created normally.
- The absence of a relationship graph does not remove the need for clean keys, join tables, audit fields, indexing, and naming rules.

---

## 3. Table Naming Rules

### 3.1 Base Tables
- Use plural only when the real-world concept is naturally plural in your system style, otherwise keep it clean and simple.
- Examples:
  - `Staff`, `Patients`, `Businesses`, `Vendors`, `Materials`, `Equipment`, `Projects`, `Products`

### 3.2 Child Tables (Subtables)
- When a parent record can have multiple entries of a related type, create a child table.
- Child tables must start with the parent name.
- Pattern:
  - `<Parent> <Child>`
- Examples:
  - `Staff Education`
  - `Staff Documents`
  - `Patient Visit Vitals`
  - `Equipment Documents`

### 3.3 Join Tables (Many-to-Many)
- When two entities relate many-to-many, create a join table.
- Join table name must read naturally as a link between both tables.
- Patterns:
  - `<A> <B>`
  - `<A> <B> <C>` (when the join has an extra layer)
- Examples:
  - `Role Links`
  - `Lab Test Specimens`
  - `Lab Test Specimen Analytes`

### 3.4 Hierarchy Tables
- For nested structures, use a Parent ID.
- Pattern:
  - `Parent ID` or `<Entity> Parent ID`
- Examples:
  - `Links::Parent Link ID`
  - `Job Titles::Parent ID`

### 3.5 Section Tables for Long Documents
- When a table extends a main document table, suffix it with ` _ ` and a section name.
- Pattern:
  - `<Main Table> _ <Section>`
- Examples:
  - `Software Requirement Documents _ Functional Requirements`
  - `Software Requirement Documents _ Price Breakdown`

---

## 4. Relationship Field Rules

### 4.1 Foreign Keys
- Foreign keys are Text fields that end with ` ID`.
- Pattern:
  - `<Related Table> ID`
- Examples:
  - `Staff ID`, `Patient ID`, `Business ID`, `Vendor ID`, `Equipment ID`
- Options:
  - Indexed
- Rule:
  - Foreign keys appear near the top of the table, immediately before the audit fields.
- This includes role-based foreign keys (examples: `Doctor User ID`, `Approver User ID`, `Maker ID`, `Checker ID`, `Decider Staff ID`). These must still be Text, Indexed, and positioned with the other foreign keys.
- Rule:
  - Role-based keys are still foreign keys even when the prefix is a role name (example: Doctor, Maker, Checker) instead of a table name.

### 4.2 Join Table Structure
A join table must contain:
- `ID`
- Both foreign keys linking the two tables
- `Date Created`
- `Time Created`

Optional:
- Additional context fields only if the join itself has attributes.

---

## 5. Core Field Pack (Every Table Must Have This)

### 5.1 Primary Key
- Every table must have:
  - `ID` (Text)
- Options:
  - Indexed
  - Auto-enter Calculation
- Rule:
  - `ID` is always the first field in the table.

### 5.2 Created Audit Fields
- Every table must have:
  - `Date Created` (Date, Creation Date, Indexed)
  - `Time Created` (Time, Creation Time, Indexed)
- Rule:
  - These fields appear right after `ID` and foreign keys.

### 5.3 Modified Audit Fields (Conditional)
- Add these only for tables that store documents, uploaded files, or content that is expected to be updated after creation:
  - `Date Modified` (Date, Indexed)
  - `Time Modified` (Time, Indexed)

---

## 6. Indexing Rules

Index these by default:
- `ID`
- All foreign keys (`... ID`)
- All audit fields (`Date Created`, `Time Created`, etc)
- Primary label fields (fields used for searching or display), such as:
  - `Name`, `Title`, `Number`, `Type`, `Status`
- Operational filter fields:
  - Dates used in scheduling, tracking, or reporting
  - Times used in tracking or audit
- Sorting fields:
  - `Order` (Number)

Do not index:
- Long narrative blocks. Example: `Description`

---

## 7. Ordering and UI Control Rules

If records must be displayed in a controlled order, include:
- `Order` (Number, Indexed)

Common use cases:
- Menus and navigation lists
- Questionnaire sections and questions
- Feature lists
- Any list shown in a UI that must be stable and predictable

---

## 8. Status Rules

### 8.1 Standard Status Field
- Add a standard `Status` field only when the table represents an entity that has a single, primary lifecycle state.
- Field:
  - `Status` (Text)
- Indexing:
  - Indexed
- Auto-Enter:
  - Auto-enter Data (default status), where appropriate

Examples where `Status` makes sense:
- Master data and operational entities such as `Vendors`, `Products`, `Lab Tests`, `KPIs`, `Leave Types`, `Locations`

### 8.2 Process-Specific Status Fields (Preferred For Workflows)
- When a workflow has multiple checkpoints or parallel steps, do not overload a single `Status`.
- Instead, create explicit step statuses so each checkpoint is independently trackable.
- Pattern:
  - `<Step> Status`
- Indexing:
  - Each `<Step> Status` must be Text and Indexed
- Auto-Enter:
  - Auto-enter Data may be used to set safe defaults (example: `Pending`)

Examples:
- `Vitals Status`
- `Consultation Status`
- `Consultation Billed Status`
- `Consultation Payment Status`
- `Admission Status`
- `Received Status`

Rule:
- If a table needs both an overall lifecycle and step statuses, use `Status` for the overall lifecycle and keep the step statuses separate.

---

## 9. Snapshot Label Rules (ID + Name Together)

When a table represents a transaction or historical event, store both:
- The foreign key (`... ID`)
- The display label at the time of the event (snapshot)

Examples of snapshot fields:
- `Material Name`
- `Medication Name`
- `Service Name`

Rule:
- The ID remains the source of truth.
- The snapshot is used for display, reporting, and history preservation.

---

## 10. Media and Attachments Rules

### 10.1 Container Storage
Use Container fields with `External (Secure)` for:
- Photos
- Uploaded files
- Logos
- App icons

### 10.2 URL Storage
Use Text URL fields when:
- The file is hosted externally
- You want a lightweight reference instead of storing the file

Examples:
- `Photo URL`
- `Logo URL`
- `Image URL`
- `Product URL`

---

## 11. Settings and Globals Rules

### 11.1 Where Globals Go
Globals belong in the `Settings` table.
Do not place global fields inside operational tables.

### 11.2 Global Naming
Use clear names that describe their purpose.
Examples:
- `Search`
- `Date` (Date[2] global range)
- `Selected <Entity> ID`

---

## 12. Reporting Helper Field Rules

When reports or dashboards need grouping, add helper fields such as:
- `Month Created` (Text, Indexed)
- `Month Created Number` (Number, Indexed)
- `Year` (Number, Indexed)

Rule:
- Helpers exist to reduce calculation load in reporting and make grouping consistent.

---

## 13. Field Order Rules (In the Table Definition)

Use this field ordering pattern:

1. `ID`
2. Foreign keys (`... ID`)
3. Created audit fields:
   - `Date Created`
   - `Time Created`
4. Modified audit fields (only if applicable):
   - `Date Modified`
   - `Time Modified`
5. Primary label fields (`Name`, `Title`, `Number`, etc.)
6. Operational fields (dates, times, amounts, descriptions)
7. UI fields (`Order`, icons, display text)
8. Long text fields (notes, narrative content)
9. Status fields (`Status`, workflow statuses)

---

## 14. AI Agent Output Requirements

When the AI agent creates or extends tables, it must output the following.

### 14.1 Table Summary
- Table name
- Table type: Base, Child, Join, Hierarchy, Section
- Action: Reuse, Extend, Create

### 14.2 Field List (With Options)
For each field:
- Field name
- Type
- Key options (Indexed, Auto-enter, Creation Date, Global, External Secure, etc.)

### 14.3 Schema Preflight Report (Mandatory)
Before any table definitions, the AI must output a preflight report with:

#### 14.3.1 Tables Reused
- Table name
- Why it matches the requirement

#### 14.3.2 Fields Reused (Per Table)
For each reused table:
- Fields that already exist and will be reused
- Required fields that are missing and will be added

#### 14.3.3 New Tables Proposed (Only If Needed)
For each new table:
- Why no existing table fits
- Confirmation the table name does not already exist

#### 14.3.4 Field Name Mapping (When A Different Name Already Exists)
If the application description mentions a field name that differs from this schema:
- Show the mapping
  - Example: `"Phone Number" -> "Phone"` (Staff)
  - Example: `"Phone" -> "Mobile"` (Patients)

### 14.4 Compliance Check
The AI must confirm:
- `ID` exists and matches the standard format
- Audit fields exist
- Foreign keys are Text and indexed
- Status fields are included when appropriate
- `Order` exists when UI ordering is needed
- Modified fields exist when the table stores files or editable content

### 14.5 Duplicate Prevention Compliance Check (Mandatory)
The AI must explicitly confirm:
- Every proposed table name is not already in the current tables list
- Every proposed field name is not already in the target table field list
- Any equivalent fields were reused instead of recreated
- Any naming collisions were resolved using the Schema Preflight Rule (Section 1)

---

## 15. Error Control Protocol (Strict, Must Run Before Final Output)

Before the AI outputs any final table definition, it MUST run an error control pass and include the results in the output.

### 15.1 Purpose
Prevent contradictions, missing required fields, wrong field types, wrong indexing, and accidental violations of these rules.

### 15.2 Required Checks
The AI MUST validate all of the following:

1. **Schema Preflight Completed**
   - Confirms Section 1 was executed.
   - Confirms reuse decisions were made before creating anything.

2. **Architecture Compliance**
   - Confirms no relationship graph design is proposed.
   - Confirms no table occurrences are proposed for relationship purposes.
   - Confirms data retrieval is described using ExecuteSQL and WebViewer.

3. **Naming Compliance**
   - Table name matches the naming rules (Base, Child, Join, Hierarchy, Section).
   - Foreign keys end with ` ID`.
   - Join tables read naturally and contain both foreign keys.

4. **Field Pack Compliance**
   - `ID` exists and is the first field.
   - Created audit fields exist.
   - Modified audit fields exist only when appropriate.

5. **Field Type Compliance**
   - All foreign keys are **Text**.
   - All date and time fields use Date or Time, and Timestamp only when needed.
   - Containers use External (Secure) only when storing files.

6. **Indexing Compliance**
   - Confirms all fields that must be indexed are indexed.
   - Confirms fields that should not be indexed are not indexed (example: long narrative fields like `Description`).

7. **Calculation Field Rule Compliance**
   - Confirms there are zero Calculation field types.
   - Confirms only approved auto-enter calculations are used.

### 15.3 Required Output Format For This Protocol
The AI MUST include a short validation block like this before the final table definition:

- `Schema Preflight`: PASS or FAIL
- `Architecture Rule`: PASS or FAIL
- `Naming Rules`: PASS or FAIL
- `Core Field Pack`: PASS or FAIL
- `Field Types`: PASS or FAIL
- `Indexing Rules`: PASS or FAIL
- `Calculation Field Rule`: PASS or FAIL

If any item fails, the AI MUST stop and output what must be fixed first.

---

## 16. Quick Templates the AI Must Reuse

### 16.1 Base Table Template
- `ID` (Text, Indexed, Auto-enter Calculation)
- `Date Created` (Date, Indexed, Creation Date)
- `Time Created` (Time, Indexed, Creation Time)
- `<Primary Label>` (Text, Indexed)
- Optional:
  - `Description` (Text)
  - `Status` (Text, Indexed, Auto-enter Data)

### 16.2 Child Table Template
- `ID`
- `Parent ID` (Text, Indexed)
- `Date Created`
- `Time Created`
- Child fields (Indexed where needed)
- Optional:
  - `Status`

### 16.3 Join Table Template
- `ID`
- `A ID` (Text, Indexed)
- `B ID` (Text, Indexed)
- `Date Created`
- `Time Created`

### 16.4 Document/File Table Template
- `ID`
- `<Parent> ID` (Text, Indexed)
- `Date Created`
- `Time Created`
- `Date Modified`
- `Time Modified`
- `Uploaded By` (Text, Indexed)
- `Type` (Text, Indexed)
- `Name` (Text, Indexed)
- `File Extension` (Text, Indexed)

---

## 17. Calculation Field Rule (Strict)

### 17.1 Default Rule
- Apart from `ID` (and any other approved auto-enter calculations listed below), no field is allowed to be a Calculation field.
- All non-key fields must be stored fields (Text, Number, Date, Time, Timestamp, Container) and populated by:
  - Scripts
  - Auto-enter Data (where appropriate)
  - User entry
  - Imports

### 17.2 Allowed Auto-Enter Calculations
Only the following types of auto-enter calculations are allowed:
- `ID` (primary key generation)
- Device or environment capture fields (example: `Device Type`, `Machine ID`, `IP Address`)
- Optional reporting helpers where you intentionally store the result (example: `Month Created`, `Month Created Number`, `Year`), as stored values

Rule:
- These fields are still stored fields. They may use auto-enter calculation to set the value, but they must not be defined as Calculation field types.

### 17.3 Prohibited
- No unstored calculations.
- No Calculation field types for:
  - Labels (example: `Fullname`)
  - Status derivation
  - Totals
  - Rollups
  - Anything you plan to display in UI

If a derived value is needed, create a normal stored field and set it via script (or via auto-enter data when safe).

### 17.4 AI Agent Compliance Check
Before outputting a table definition, the AI must confirm:
- The only calculations used are in approved auto-enter settings.
- There are zero Calculation field types in the table.

### 17.5 Preflight Still Applies
Even when adding fields under the rules in this section:
- The AI must still run the Schema Preflight Rule (Section 1)
- If a required stored field already exists, reuse it
- Do not create an extra stored field simply because calculation fields are prohibited

<br/>

---

<br/>

## Current Tables in CauferoAppStarter

### Settings
- Settings
- Objects_as_JS
- ChartJS
- Apps

---

### Links
- Links

---

### Media
- Images

---

### Access Control
- Roles
- Role Links
- Users
- User Activities

---

### Registration
- Registration
- Logo Files
- Company Colours
- Departments
- Job Titles
- Job Title Notches
- Job Title Responsibilities
- Job Title Requirements
- Leave Types
- Scoring Systems
- Scoring System Scores
- Appraisal Templates
- Appraisal Template Question Categories
- Appraisal Template Questions
- Appraisal Periods
- KPIs

---

### Staff
- Staff
- Staff Emergency Contacts
- Staff Education
- Staff Documents
- Staff Job Titles
- Staff Job Title Notch History
- Staff Attendance
- Staff Leave Requests
- Staff Appraisal Templates
- Staff Appraisals
- Staff Appraisal Answers
- KPI Assignments

---

### Businesses
- Industries
- Business Types
- Businesses
- Activities Regarding Businesses
- Business Operational Challenges
- Business Solution Features
- Software Requirement Documents
- Software Requirement Documents _ Functional Requirements
- Software Requirement Documents _ Price Breakdown

---

### Lab
- Specimens
- Analytes
- Lab Tests
- Lab Test Specimens
- Lab Test Specimen Analytes

---

### Insurance
- Insurers
- Insurance Policies

---

### Clinical
- Medication Dosages
- Patients
- Patient Emergency Contacts
- Patient Primary Care Physicians
- Patient Payment Options
- Patient Appointments
- Patient Visit Vitals
- Patient Visit Lab Tests
- Patient Visit Lab Test Analyte Results
- Patient Visit Lab Results Documents
- Patient Visit Diagnoses
- Patient Visit Prescriptions
- Patient Visit Services
- Patient Visit Treatment Administrations
- Patient Visit Consultation Notes
- InPatient Notes
- InPatient Vitals
- Walk_Ins
- Patient Visit Bill Items

---

### Projects
- Projects

---

### Inventory
- Material Categories
- Materials
- Stock Adjustments
- Equipment Categories
- Equipment
- Operating Conditions
- Equipment Optimal Operating Conditions
- Equipment Related Parts
- Equipment Maintenance
- Equipment Decommissioning
- Equipment Documents
- Vendors
- Locations
- Products
- Product Features

---

### Maintenance
- Maintenance Schedule Sheets
- Maintenance Schedules
- Maintenance Activities
- Maintenance Materials
- Maintenance Labour

---

### Purchasing
- Purchase Orders
- Purchase Order Items

---

### Social Media
- Social Media Files
- Social Media Posts

---

### Payroll
- Payroll Items
- Payroll Items For Job Title Notches
- Payment Groups
- Payment Groups of Payroll Items
- Payroll Periods
- Remunerations
- Remuneration Details

---

### Billing
- Other Billing Items

---

### SMS
- SMS Account
- SMS Credits

---

### Alerts
- Alerts

---

<br>

## Fields of the Different Tables

### Table Name: Settings

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| App ID | Text | Indexed |
| Notes App ID | Text | Indexed |
| App Icon | Container | External (Secure) |
| App Logo _Lighter | Container | External (Secure) |
| App Logo _Darker | Container | External (Secure) |
| --- |  |  |
| Business ID | Text | Indexed |
| Business Logo | Container | External (Secure) |
| Menu Mode | Text | Indexed |
| --- |  |  |
| Template_ImportFile | Container | External (Secure) |
| Search | Text | Global |
| Date | Date [2] | Global |
| Location | Text | Indexed |
| General Notes | Text | Indexed |
| Displayed Notes | Text | Indexed |
| Last Bath | Timestamp | Indexed |
| Most Previous Receipt Number | Text | Indexed |
| Dev Threshold Minutes | Number | Indexed |
| Dev Fire Script Name | Text | Indexed |
| Email Credits | Number | Indexed |
| Google API Refresh Token | Text | Indexed |
| Google API Device Code | Text | Indexed |
| Google API User Code | Text | Indexed |
| Google API Poll Duration | Text | Indexed |
| --- |  |  |
| Shipping Address | Text | Indexed |
| Songs | Text | Indexed |
| --- |  |  |
| Selected Link ID | Text | Global |
| Selected User ID | Text | Global |
| Selected Role ID | Text | Global |
| --- |  |  |
| Selected Job Title ID | Text | Global |
| Selected Item ID | Text | Global |
| Selected Material ID | Text | Global |
| Selected Equipment ID | Text | Global |
| Selected PM Schedule Sheet ID | Text | Global |
| Selected PM Schedule ID | Text | Global |
| --- |  |  |
| Selected Purchase Order ID | Text | Global |
| Selected Purchase Order Item ID | Text | Global |

---

### Table Name: Objects_as_JS

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Object Name | Text |  |
| Object | Container |  |
| JS | Text |  |

---

### Table Name: ChartJS

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| JS | Text |  |

---

### Table Name: Apps

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Name | Text | Indexed |
| Slogan | Text | Indexed |
| Splash Background | Text |  |
| Splash Screen Loading Statement | Text | Indexed |
| Partners | Text | Indexed |
| App Launch Year | Number | Indexed |
| Available Themes | Text | Indexed |
| Notes | Text | Indexed |

---

### Table Name: Links

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed |
| Parent Link ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Link | Text | Indexed |
| Description | Text | Indexed |
| Order | Number | Indexed |
| Layout | Text | Indexed |
| SVG Icon | Text | Indexed |
| --- |  |  |
| Pending | Number | Indexed, Auto-enter Data |
| Note | Text | Indexed |
| --- |  |  |
| ChatGPT Query | Text | Indexed |

---

### Table Name: Roles

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| App ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Role | Text | Indexed |

---

### Table Name: Role Links

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Role ID | Text | Indexed |
| Link ID | Text | Indexed |
| App ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |

---

### Table Name: Users

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Role ID | Text | Indexed |
| Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Photo | Container | External (Secure) |
| First Name | Text | Indexed |
| Last Name | Text | Indexed |
| Username | Text | Indexed |
| --- |  |  |
| Preferred Colour Theme | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed, Auto-enter Data |
| Logged In | Number | Indexed, Auto-enter Data |

---

### Table Name: User Activities

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| User ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Device Type | Text | Auto-enter Calculation |
| Machine ID | Text | Auto-enter Calculation |
| IP Address | Text | Auto-enter Calculation |
| Activity Type | Text | Indexed |
| Activity | Text | Indexed |

---

### Table Name: Registration

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Number | Text | Indexed |
| TIN | Text | Indexed |
| Phones | Text | Indexed |
| Emails | Text | Indexed |
| Website | Text | Indexed |
| Address | Text |  |

---

### Table Name: Logo Files

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |

---

### Table Name: Company Colours

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Colour | Text | Indexed |
| Gradient1 | Text |  |
| Gradient2 | Text |  |

---

### Table Name: Departments

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| HOD Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Description | Text |  |

---

### Table Name: Job Titles

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Department ID | Text | Indexed |
| Parent ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Description | Text |  |

---

### Table Name: Job Title Notches

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Job Title ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Notch | Number | Indexed |
| Key | Text | Indexed |

---

### Table Name: Job Title Responsibilities

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Job Title ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Responsibility | Text | Indexed |

---

### Table Name: Job Title Requirements

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Job Title ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Requirement | Text | Indexed |

---

### Table Name: Leave Types

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Description | Text |  |
| Total Permissible Days | Number | Indexed |
| Status | Text | Indexed |

---

### Table Name: Scoring Systems

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |

---

### Table Name: Scoring System Scores

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Scoring System ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Score | Number | Indexed |
| Description | Text |  |

---

### Table Name: Appraisal Templates

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Scoring System ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Description | Text |  |

---

### Table Name: Appraisal Template Question Categories

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Appraisal Template ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Order | Number | Indexed |
| Category | Text | Indexed |

---

### Table Name: Appraisal Template Questions

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Appraisal Template ID | Text | Indexed |
| Appraisal Template Question Category ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Order | Number | Indexed |
| Title | Text | Indexed |
| Question | Text |  |
| --- |  |  |
| Status | Text | Indexed |

---

### Table Name: Appraisal Periods

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Start Date | Date | Indexed |
| End Date | Date | Indexed |
| Year | Number | Indexed |

---

### Table Name: KPIs

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Appraisal Period ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Title | Text | Indexed |
| Description | Text |  |
| Due Date | Date | Indexed |
| Priority | Number | Indexed |
| Score | Number | Indexed |
| --- |  |  |
| Status | Text | Indexed |

---

### Table Name: Staff

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Photo URL | Text | Indexed |
| Staff Number | Text | Indexed |
| Title | Text | Indexed |
| First Name | Text | Indexed |
| Last Name | Text | Indexed |
| Other Names | Text | Indexed |
| Maiden Name | Text | Indexed |
| --- |  |  |
| Gender | Text | Indexed |
| Date of Birth | Date | Indexed |
| Date of Birth _Day | Text | Indexed |
| Date of Birth _MonthName | Text | Indexed |
| Date of Birth _MonthNumber | Number | Indexed |
| Hometown | Text | Indexed |
| Hometown Region | Text | Indexed |
| Nationality | Text | Indexed |
| --- |  |  |
| Phone | Text | Indexed |
| Email | Text | Indexed |
| Residential Address | Text | Indexed |
| GPS | Text | Indexed |
| Postal Address | Text | Indexed |
| --- |  |  |
| Marital Status | Text | Indexed |
| Wedding Day | Text | Indexed |
| Number of Children | Text | Indexed |
| --- |  |  |
| Languages | Text | Indexed |
| --- |  |  |
| Bank Name | Text | Indexed |
| Bank Branch | Text | Indexed |
| Bank Account Number | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed, Auto-enter Data |

---

### Table Name: Staff Emergency Contacts

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Relationship | Text | Indexed |
| Phone | Text | Indexed |
| Email | Text | Indexed |
| Address | Text | Indexed |

---

### Table Name: Staff Education

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Institution | Text | Indexed |
| Programme | Text | Indexed |
| Result | Text | Indexed |
| Start Date | Date | Indexed |
| Finish Date | Date | Indexed |

---

### Table Name: Staff Documents

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| Date Modified | Date | Indexed |
| Time Modified | Time | Indexed |
| --- |  |  |
| Uploaded By | Text | Indexed |
| Type | Text | Indexed |
| Number | Text | Indexed |
| Name | Text | Indexed |
| File Extension | Text | Indexed |

---

### Table Name: Staff Job Titles

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Staff ID | Text | Indexed |
| Job Title ID | Text | Indexed |
| Current Notch ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Employment Type | Text | Indexed |
| Location Type | Text | Indexed |
| Start Date | Date | Indexed |
| End Date | Date | Indexed |

---

### Table Name: Staff Job Title Notch History

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Staff ID | Text | Indexed |
| Job Title ID | Text | Indexed |
| Notch ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Start Date | Date | Indexed |
| End Date | Date | Indexed |

---

### Table Name: Staff Attendance

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Date In | Date | Indexed |
| Time In | Time | Indexed |
| Date Out | Date | Indexed |
| Time Out | Time | Indexed |

---

### Table Name: Staff Leave Requests

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Staff ID | Text | Indexed |
| Leave Type ID | Text | Indexed |
| Decider Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| Month Name Created | Text |  |
| --- |  |  |
| Start Date | Date | Indexed |
| End Date | Date | Indexed |
| Return Date | Date | Indexed |
| Total Days | Text | Indexed |
| --- |  |  |
| Reason | Text |  |
| --- |  |  |
| Decision Date | Date | Indexed |
| Decision Time | Time | Indexed |
| --- |  |  |
| Status | Text | Indexed |

---

### Table Name: Staff Appraisal Templates

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Appraisal Template ID | Text | Indexed |
| Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |

---

### Table Name: Staff Appraisals

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Staff ID | Text | Indexed |
| Appraisal Template ID | Text | Indexed |
| Scoring System ID | Text | Indexed |
| Appraisal Period ID | Text | Indexed |
| Appraiser Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Template Highest Score | Number | Indexed |
| Total Score | Number | Indexed |
| Total Score% | Number | Indexed |
| Total KPI Score | Number | Indexed |
| Total KPI Score% | Number | Indexed |
| Overall Score% | Number | Indexed |
| --- |  |  |
| Date Submitted | Date | Indexed |
| Time Submitted | Time | Indexed |
| Date Appraised | Date | Indexed |
| Time Appraised | Time | Indexed |
| --- |  |  |
| Staff Remarks | Text |  |
| Supervisor Remarks | Text |  |
| --- |  |  |
| Status | Text | Indexed |

---

### Table Name: Staff Appraisal Answers

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Staff Appraisal ID | Text | Indexed |
| Appraisal Template Question ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Answer | Number | Indexed |

---

### Table Name: KPI Assignments

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| KPI ID | Text | Indexed |
| Assignee ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Assignee Type | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed |

---

### Table Name: Industries

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Description | Text | Indexed |
| Annual Revenue | Number | Indexed |

---

### Table Name: Business Types

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Industry ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Type | Text | Indexed |
| Contact Template Content | Text |  |
| Contact Template Subject | Text | Indexed |

---

### Table Name: Businesses

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Industry ID | Text | Indexed |
| Business Type ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Description | Text | Indexed |
| Logo URL | Text | Indexed |
| Logo Icon URL | Text | Indexed |
| Menu Mode | Text | Indexed |
| Registration Number | Text | Indexed |
| Registration Year | Text | Indexed |
| Location | Text | Indexed |
| City | Text | Indexed |
| Region | Text | Indexed |
| Phone | Text | Indexed |
| Email | Text | Indexed |
| Contacts | Text | Indexed |
| Website | Text | Indexed |
| Total Staff | Text | Indexed |
| Total Branches | Text | Indexed |
| Building Size | Text | Indexed |
| Values | Text | Indexed |
| Mission Statement | Text | Indexed |
| What They Should Be Looking Like | Text | Indexed |
| Brand Colours | Text | Indexed |
| Preferred Currency | Text | Indexed |
| Staff Code Prefix 1 | Text | Indexed |
| Staff Code Prefix 2 | Text | Indexed |
| Current Status | Text | Indexed |
| --- |  |  |
| Proposed Solution Name | Text | Indexed |
| Proposed Solution Description | Text | Indexed |
| Proposed Solution Technologies | Text | Indexed |
| Proposed Solution Hosting | Text | Indexed |
| Proposed Solution Integrations | Text | Indexed |
| Proposed Solution Cost | Text | Indexed |
| SRD Prepared For | Text | Indexed |
| --- |  |  |
| App Menu Mode | Text | Indexed |
| Notes | Text |  |
| --- |  |  |
| Status | Text | Indexed |

---

### Table Name: Activities Regarding Businesses

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Business ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Date | Date | Indexed |
| Time | Time | Indexed |
| Activity | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed |

---

### Table Name: Business Operational Challenges

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Business ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Challenge | Text | Indexed |
| Current Method | Text | Indexed |
| Recommended Solution | Text | Indexed |
| --- |  |  |
| Order | Number | Indexed |

---

### Table Name: Business Solution Features

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Business ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Description | Text | Indexed |
| Image URL | Text | Indexed |
| --- |  |  |
| Order | Number | Indexed |

---

### Table Name: Software Requirement Documents

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Business ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| App Description | Text | Indexed |
| Cover Image URL | Text | Indexed |
| Table of Contents 1 | Text |  |
| Table of Contents 2 | Text |  |
| Table of Contents 3 | Text |  |
| Table of Contents Bold Text | Text | Indexed |
| --- |  |  |
| Introduction_Image URL | Text | Indexed |
| Introduction_Statement | Text | Indexed |
| Introduction_Background | Text |  |
| Introduction_Purpose of System | Text |  |
| Introduction_About Caufero | Text |  |
| --- |  |  |
| Business Context_Image URL | Text | Indexed |
| Business Context_Statement | Text | Indexed |
| Business Context_Company Operations | Text |  |
| Business Context_Need for Digital Transformation | Text |  |
| --- |  |  |
| System Overview_Image URL | Text | Indexed |
| System Overview_Statement | Text | Indexed |
| System Overview_Core Structure_N_Components | Text |  |
| System Overview_Design_N_Operational Flow | Text |  |
| --- |  |  |
| Functional Requirements_Image URL | Text | Indexed |
| Functional Requirements_Statement | Text | Indexed |
| --- |  |  |
| Non_Functional Requirements_Image URL | Text | Indexed |
| Non_Functional Requirements_Statement | Text | Indexed |
| Non_Functional Requirements_Performance | Text |  |
| Non_Functional Requirements_Reliability | Text |  |
| Non_Functional Requirements_Security | Text |  |
| Non_Functional Requirements_Usability | Text |  |
| Non_Functional Requirements_Maintainability | Text |  |
| Non_Functional Requirements_Portability | Text |  |
| --- |  |  |
| UI Guidelines_Image URL | Text | Indexed |
| UI Guidelines_Statement | Text | Indexed |
| UI Guidelines_Layout | Text |  |
| UI Guidelines_Navigation | Text |  |
| UI Guidelines_Role Focus | Text |  |
| UI Guidelines_Responsiveness | Text |  |
| UI Guidelines_Feedback | Text |  |
| UI Guidelines_Visual Design | Text |  |
| --- |  |  |
| Development Process_Image URL | Text | Indexed |
| Development Process_Statement | Text | Indexed |
| Development Process | Text |  |
| --- |  |  |
| Suggested Improvements_Image URL | Text | Indexed |
| Suggested Improvements_Statement | Text | Indexed |
| Suggested Improvements_Operational Enhancements | Text |  |
| Suggested Improvements_Customization_N_Reporting | Text |  |
| --- |  |  |
| Phase Prioritization_Image URL | Text | Indexed |
| Phase Prioritization_Statement | Text | Indexed |
| Phase Prioritization_Phase1 | Text |  |
| Phase Prioritization_Phase2 | Text |  |
| --- |  |  |
| Future Enhancements_Image URL | Text | Indexed |
| Future Enhancements_Statement | Text | Indexed |
| Future Enhancements_Integration_N_Automation | Text |  |
| Future Enhancements_Scalability_N_Customization | Text |  |
| --- |  |  |
| Cost_N_Timelines_Image URL | Text | Indexed |
| Cost_N_Timelines_Statement | Text | Indexed |
| Cost_N_Timelines_Rate | Number | Indexed |
| Cost_N_Timelines_Hours | Number | Indexed |
| Cost_N_Timelines_Duration | Number | Indexed |
| Cost_N_Timelines_Cost | Number | Indexed |
| Cost_N_Timelines_Support | Number | Indexed |
| --- |  |  |
| Pricing_N_Support | Text |  |
| --- |  |  |
| Payment Terms_Image URL | Text | Indexed |
| Payment Terms_Statement | Text | Indexed |
| Payment Terms | Text |  |
| --- |  |  |
| Customization Options_Image URL | Text | Indexed |
| Customization Options_Statement | Text | Indexed |
| Customization Options | Text |  |
| --- |  |  |
| Next Steps_Image URL | Text | Indexed |
| Next Steps_Statement | Text | Indexed |
| Next Steps | Text |  |

---

### Table Name: Software Requirement Documents _ Functional Requirements

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Business ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Order | Number | Indexed |
| Requirement | Text | Indexed |
| Features | Text | Indexed |

---

### Table Name: Software Requirement Documents _ Price Breakdown

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Business ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Order | Number | Indexed |
| Item Type | Text | Indexed |
| Item | Text | Indexed |
| Duration | Number | Indexed |
| Hours | Number | Indexed |
| Hours Per Week | Number | Indexed |
| Rate | Number | Indexed |
| Cost | Number | Indexed |

---

### Table Name: Specimens

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |

---

### Table Name: Analytes

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Result Type | Text | Indexed |
| Unit | Text | Indexed |
| Value List Options | Text | Indexed |

---

### Table Name: Lab Tests

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Description | Text | Indexed |
| Cost | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed |

---

### Table Name: Lab Test Specimens

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Lab Test ID | Text | Indexed |
| Specimen ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |

---

### Table Name: Lab Test Specimen Analytes

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Lab Test Specimen ID | Text | Indexed |
| Analyte ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |

---

### Table Name: Insurers

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Type | Text | Indexed |
| Portal URL | Text | Indexed |
| Phone | Text | Indexed |
| Email | Text | Indexed |

---

### Table Name: Insurance Policies

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Insurer ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |

---

### Table Name: Medication Dosages

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Medication ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Dosage | Text | Indexed |

---

### Table Name: Patients

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| Month Created | Text | Indexed |
| Month Created Number | Number | Indexed |
| --- |  |  |
| Number | Text | Indexed |
| Title | Text | Indexed |
| First Name | Text | Indexed |
| Last Name | Text | Indexed |
| Other Names | Text | Indexed |
| Initials | Text | Indexed |
| Gender | Text | Indexed |
| Date of Birth | Date | Indexed |
| Age | Number | Indexed |
| Mobile | Text | Indexed |
| Email | Text | Indexed |
| Street | Text | Indexed |
| City | Text | Indexed |
| Country | Text | Indexed, Auto-enter Data |
| Marital Status | Text | Indexed |
| Maiden Name | Text | Indexed |
| Hometown | Text | Indexed |
| Hometown Region | Text | Indexed |
| Nationality | Text | Indexed, Auto-enter Data |
| ID Card Type | Text | Indexed |
| ID Card Number | Text | Indexed |
| Languages | Text | Indexed |
| Profession | Text | Indexed |
| Religion | Text | Indexed, Auto-enter Data |

---

### Table Name: Patient Emergency Contacts

| Field | Type | Options |
|---|---|---|
| ID | Text | Auto-enter Calculation |
| Patient ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Relationship | Text | Indexed |
| Full Name | Text | Indexed |
| Mobile | Text | Indexed |

---

### Table Name: Patient Primary Care Physicians

| Field | Type | Options |
|---|---|---|
| ID | Text | Auto-enter Calculation |
| Patient ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Full Name | Text | Indexed |
| Mobile | Text | Indexed |
| Residential Address | Text | Indexed |

---

### Table Name: Patient Payment Options

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Option | Text | Indexed |
| --- |  |  |
| MoMo Network | Text | Indexed |
| MoMo Number | Text | Indexed |
| --- |  |  |
| Insurer ID | Text | Indexed |
| Insurance Policy ID | Text | Indexed |
| Insurance Policy Number | Text | Indexed |

---

### Table Name: Patient Appointments

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Doctor User ID | Text | Indexed |
| Bill Payment Option ID | Text | Indexed |
| Parent ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Date Scheduled | Date | Indexed |
| Time Scheduled | Time | Indexed |
| Reason | Text | Indexed |
| --- |  |  |
| Doctors Notes | Text |  |
| --- |  |  |
| Vitals Status | Text | Indexed, Auto-enter Data |
| Consultation Status | Text | Indexed, Auto-enter Data |
| Consultation Billed Status | Text | Indexed, Auto-enter Data |
| Consultation Payment Status | Text | Indexed, Auto-enter Data |
| --- |  |  |
| Next Appointment Period Number | Text | Indexed |
| Next Appointment Period Name | Text | Indexed |
| --- |  |  |
| Admission Status | Text | Indexed |
| Admission Date | Date | Indexed |
| Admission Time | Time | Indexed |
| Discharge Date | Date | Indexed |
| Discharge Time | Time | Indexed |
| --- |  |  |
| Discount | Number | Indexed |

---

### Table Name: Patient Visit Vitals

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Height | Text | Indexed |
| Weight | Text | Indexed |
| BMI | Text | Indexed |
| Temperature | Text | Indexed |
| Blood Pressure Top | Text | Indexed |
| Blood Pressure Bottom | Text | Indexed |
| Pulse | Text | Indexed |
| Respiratory Rate | Text | Indexed |
| Oxygen Saturation | Text | Indexed |
| Glucose Level | Text | Indexed |

---

### Table Name: Patient Visit Lab Tests

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| Lab Test ID | Text | Indexed |
| Lab Test Specimen ID | Text | Indexed |
| Doctor User ID | Text | Indexed |
| Lab Scientist User ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Instructions | Text |  |
| --- |  |  |
| Date Submitted | Date | Indexed |
| Time Submitted | Time | Indexed |
| --- |  |  |
| Results | Text | Indexed |
| Billed Status | Text | Indexed |

---

### Table Name: Patient Visit Lab Test Analyte Results

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| Lab Test ID | Text | Indexed |
| Lab Test Specimen Analyte ID | Text | Indexed |
| Patient Visit Lab Test ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Result | Text |  |

---

### Table Name: Patient Visit Lab Results Documents

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| Lab Test ID | Text | Indexed |
| Patient Visit Lab Test ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| Date Modified | Date | Indexed |
| Time Modified | Time | Indexed |
| --- |  |  |
| Uploaded By | Text | Indexed |
| Type | Text | Indexed |
| Number | Text | Indexed |
| Name | Text | Indexed |
| File Extension | Text | Indexed |

---

### Table Name: Patient Visit Diagnoses

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| Medical Condition ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Remarks | Text |  |

---

### Table Name: Patient Visit Prescriptions

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| Medication ID | Text | Indexed |
| Medication Dispensed ID | Text | Indexed |
| Doctor User ID | Text | Indexed |
| Pharmacist User ID | Text | Indexed |
| Dosage ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Medication Name | Text | Indexed |
| Medication Dispensed Name | Text | Indexed |
| Quantity | Text | Indexed, Auto-enter Data |
| Quantity Number | Number | Indexed, Auto-enter Data |
| Dosage | Text | Indexed |
| Dosage For Dispensed Medication | Text | Indexed |
| --- |  |  |
| Dispensary Status | Text | Indexed, Auto-enter Data |
| Billed Status | Text | Indexed |

---

### Table Name: Patient Visit Services

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| Service Item ID | Text | Indexed |
| Doctor User ID | Text | Indexed |
| Nurse User ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Service Name | Text | Indexed |
| Quantity | Text | Indexed, Auto-enter Data |
| Quantity Number | Number | Indexed, Auto-enter Data |
| Notes | Text | Indexed |
| --- |  |  |
| Dispensary Status | Text | Indexed, Auto-enter Data |
| Billed Status | Text | Indexed |

---

### Table Name: Patient Visit Treatment Administrations

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| Patient Visit Prescription ID | Text | Indexed |
| Supervisor User ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Date Administered | Date | Indexed |
| Time Administered | Time | Indexed |
| Timestamp Administered | Timestamp | Indexed |
| --- |  |  |
| Quantity | Text | Indexed |
| Quantity Number | Number | Indexed |

---

### Table Name: Patient Visit Consultation Notes

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| Doctor User ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Notes | Text | Indexed |

---

### Table Name: InPatient Notes

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| User ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Type | Text | Indexed |
| Notes | Text |  |

---

### Table Name: InPatient Vitals

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| User ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Height | Text | Indexed |
| Weight | Text | Indexed |
| BMI | Text | Indexed |
| Temperature | Text | Indexed |
| Blood Pressure Top | Text | Indexed |
| Blood Pressure Bottom | Text | Indexed |
| Pulse | Text | Indexed |
| Respiratory Rate | Text | Indexed |
| Oxygen Saturation | Text | Indexed |
| Glucose Level | Text | Indexed |

---

### Table Name: Walk_Ins

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| User ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| Month Created | Text | Indexed |
| Month Created Number | Number | Indexed |
| --- |  |  |
| Patient ID | Text | Indexed |
| Fullname | Text | Indexed |
| Mobile | Text | Indexed |
| Email | Text | Indexed |
| --- |  |  |
| Items | Text | Indexed |
| Bill Amount | Number | Indexed |
| Paid Amount | Number | Indexed |

---

### Table Name: Patient Visit Bill Items

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Patient ID | Text | Indexed |
| Patient Appointment ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| Month Created | Text | Indexed |
| Month Created Number | Number | Indexed |
| --- |  |  |
| Item ID | Text | Indexed |
| Cost | Number | Indexed |
| Quantity | Number | Indexed |
| Unit Cost | Number | Indexed |
| Paid Status | Text | Indexed, Auto-enter Data |
| Discount Status | Text | Indexed, Auto-enter Data |

---

### Table Name: Projects

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Business ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Title | Text | Indexed |
| Table of Contents 1 | Text | Indexed |
| Table of Contents 2 | Text | Indexed |
| Table of Contents 3 | Text | Indexed |
| --- |  |  |
| Introduction Statement | Text | Indexed |
| Background | Text | Indexed |
| Purpose | Text | Indexed |
| --- |  |  |
| Business Context Statement | Text | Indexed |
| Operations | Text | Indexed |
| Need for Digitalisation | Text | Indexed |
| System Overview | Text | Indexed |
| Structure | Text | Indexed |
| Workflow | Text | Indexed |
| --- |  |  |
| Functional Requirements Statement | Text | Indexed |
| Functional Requirement 1 Title | Text | Indexed |
| Functional Requirement 1 Details | Text | Indexed |
| Functional Requirement 2 Title | Text | Indexed |
| Functional Requirement 2 Details | Text | Indexed |
| Functional Requirement 3 Title | Text | Indexed |
| Functional Requirement 3 Details | Text | Indexed |
| Functional Requirement 4 Title | Text | Indexed |
| Functional Requirement 4 Details | Text | Indexed |
| --- |  |  |
| NonFunctional Requirements Statement | Text | Indexed |
| Performance | Text | Indexed |
| Reliability | Text | Indexed |
| Security | Text | Indexed |
| Usability | Text | Indexed |
| Maintainability | Text | Indexed |
| Portability | Text | Indexed |
| --- |  |  |
| UI Guidelines Statement | Text | Indexed |
| Layout | Text | Indexed |
| Navigation | Text | Indexed |
| Role Focus | Text | Indexed |
| Responsiveness | Text | Indexed |
| Feedback | Text | Indexed |
| Visual Design | Text | Indexed |
| --- |  |  |
| Improvements Statement | Text | Indexed |
| Operational Enhancements | Text | Indexed |
| Customisation N Reporting | Text | Indexed |
| --- |  |  |
| Phases Statement | Text | Indexed |
| Phase 1 | Text | Indexed |
| Phase 2 | Text | Indexed |
| --- |  |  |
| Future Enhancements Statement | Text | Indexed |
| Integration N Automation | Text | Indexed |
| Scalability N Customisation | Text | Indexed |
| --- |  |  |
| Cost N Timeline Statement | Text | Indexed |

---

### Table Name: Material Categories

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Category | Text | Indexed |
| App Name | Text | Indexed |

---

### Table Name: Materials

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Category ID | Text | Indexed |
| Vendor ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Translarity Number | Text | Indexed |
| Vendor Number | Text | Indexed |
| Image | Container | External (Secure) |
| Name | Text | Indexed |
| AKA | Text | Indexed |
| Manufacturer | Text | Indexed |
| Description | Text |  |
| Issue Unit | Text | Indexed |
| Purchase Unit | Text | Indexed |
| Barcode Contents | Text | Indexed |
| Reorder Level | Text | Indexed |
| Minimum Order Quantity | Text | Indexed |
| Quantity In Order Unit | Text | Indexed |
| Unit Cost | Text | Indexed |
| URL | Text | Indexed |
| Quantity Available | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed, Auto-enter Data |

---

### Table Name: Stock Adjustments

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Material ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Stock Date | Date | Indexed |
| Stock Time | Time | Indexed |
| --- |  |  |
| Quantity | Text | Indexed |
| Quantity Number | Number | Indexed |
| Unit | Text | Indexed |

---

### Table Name: Equipment Categories

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Category | Text | Indexed |

---

### Table Name: Equipment

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Category ID | Text | Indexed |
| Supplier Vendor ID | Text | Indexed |
| Servicing Vendor ID | Text | Indexed |
| Location ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Translarity Number | Text | Indexed |
| Vendor Number | Text | Indexed |
| Image URL | Text | Indexed |
| Name | Text | Indexed |
| AKA | Text | Indexed |
| Manufacturer | Text | Indexed |
| Description | Text |  |
| Barcode Contents | Text | Indexed |
| Purchased Date | Date | Indexed |
| Warranty _Number | Text | Indexed |
| Warranty _Period | Text | Indexed |
| Warranty Expiration | Date | Indexed |
| Length | Text | Indexed |
| Width | Text | Indexed |
| Height | Text | Indexed |
| Size Unit | Text | Indexed |
| Workspace Length | Text | Indexed |
| Workspace Width | Text | Indexed |
| Workspace Size Unit | Text | Indexed |
| Weight _Number | Text | Indexed |
| Weight _Unit | Text | Indexed |
| Cost | Number | Indexed |
| --- |  |  |
| Notes | Text |  |
| --- |  |  |
| Status | Text | Indexed, Auto-enter Data |

---

### Table Name: Operating Conditions

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Condition | Text | Indexed |
| Unit | Text | Indexed |

---

### Table Name: Equipment Optimal Operating Conditions

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Equipment ID | Text | Indexed |
| Operating Condition ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Optimal Value | Text | Indexed |

---

### Table Name: Equipment Related Parts

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Equipment ID | Text | Indexed |
| Supplier Vendor ID | Text | Indexed |
| Servicing Vendor ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| AKA | Text | Indexed |
| Description | Text |  |
| Quantity | Text | Indexed |
| Cost | Text | Indexed |
| Translarity Number | Text | Indexed |
| Vendor Number | Text | Indexed |
| Manufacturer | Text | Indexed |
| Barcode Contents | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed, Auto-enter Data |

---

### Table Name: Equipment Maintenance

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Equipment ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Date Scheduled | Date | Indexed |
| Date Completed | Date | Indexed |
| Request | Text |  |
| Repair Summary | Text |  |
| Parts Used | Text |  |
| Hours | Text | Indexed |
| Reference Number | Text | Indexed |

---

### Table Name: Equipment Decommissioning

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Equipment ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Date Decommissioned | Date | Indexed |
| Decommissioning Type | Text | Indexed |
| Reason | Text |  |
| Current Value | Text | Indexed |
| Delta Value | Text | Indexed |

---

### Table Name: Equipment Documents

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Equipment ID | Text | Indexed |
| Uploaded By | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| Date Modified | Date | Indexed |
| Time Modified | Time | Indexed |
| --- |  |  |
| File Extension | Text | Indexed |
| Name | Text | Indexed |

---

### Table Name: Vendors

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Location | Text | Indexed |
| Description | Text |  |
| Contact Name | Text | Indexed |
| Contact Phone | Text | Indexed |
| Contact Email | Text | Indexed |
| Preferred Currency | Text | Indexed |
| Payment Term | Text | Indexed |
| Shipping Method | Text | Indexed |
| Lead Time | Number | Indexed |
| --- |  |  |
| Status | Text | Indexed, Auto-enter Data |

---

### Table Name: Locations

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed, Auto-enter Data |

---

### Table Name: Products

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Code | Text | Indexed |
| Description | Text |  |
| Domain | Text | Indexed |
| Product URL | Text | Indexed |
| --- |  |  |
| Feature Post Image URL | Text | Indexed |
| Feature Post Title | Text | Indexed |
| Feature Post Content | Text |  |
| Feature Post About | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed, Auto-enter Data |

---

### Table Name: Product Features

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Product ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Image URL | Text | Indexed |
| Name | Text | Indexed |
| Order | Number | Indexed |
| Description | Text |  |

---

### Table Name: Maintenance Schedule Sheets

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Created By | Text | Indexed |
| Modified By | Text | Indexed |
| --- |  |  |
| Name | Text | Indexed |
| Status | Text | Indexed |

---

### Table Name: Maintenance Schedules

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Maintenance Schedule Sheet ID | Text | Indexed |
| Equipment ID | Text | Indexed |
| Assigned To Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Title | Text | Indexed |
| Start Date | Date | Indexed |
| Previous Date | Date | Indexed |
| Next Date | Date | Indexed |
| Frequency Number | Number | Indexed |
| Frequency Period | Text | Indexed |
| Weekly Repeat Days | Text | Indexed |
| Estimated Number of Hours | Text | Indexed |
| Labour Cost | Text | Indexed |

---

### Table Name: Maintenance Activities

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Maintenance Schedule ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Activity | Text | Indexed |

---

### Table Name: Maintenance Materials

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Maintenance Activity ID | Text | Indexed |
| Material ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |

---

### Table Name: Maintenance Labour

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Maintenance Activity ID | Text | Indexed |
| User ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |

---

### Table Name: Purchase Orders

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Maker ID | Text | Indexed |
| Checker ID | Text | Indexed |
| Vendor ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Date Decided On | Date | Indexed |
| Time Decided On | Time | Indexed |
| Month Decided On | Text | Indexed |
| Month Decided On Number | Number | Indexed |
| --- |  |  |
| Number | Text | Indexed |
| Project | Text | Indexed |
| Customer | Text | Indexed |
| Department | Text | Indexed |
| Description | Text |  |
| Notes | Text |  |
| Total Amount | Number | Indexed |
| Payment Term | Text | Indexed |
| Lead Time | Number | Indexed |
| Ship To Location | Text | Indexed |
| Referencing SO | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed, Auto-enter Data |
| Received Status | Text | Indexed, Auto-enter Data |

---

### Table Name: Purchase Order Items

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Purchase Order ID | Text | Indexed |
| Material ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Material Name | Text | Indexed |
| Quantity | Number | Indexed |
| Unit Price | Number | Indexed |
| Total Price | Number | Indexed |
| --- |  |  |
| Date of Expected Delivery | Date | Indexed |
| Date of Actual Delivery | Date | Indexed |
| --- |  |  |
| URL | Text | Indexed |

---

### Table Name: Payroll Items

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Item | Text | Indexed |
| Type | Text | Indexed |
| Payment Model | Text | Indexed |
| Service | Text | Indexed |

---

### Table Name: Payroll Items For Job Title Notches

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Job Title ID | Text | Indexed |
| Notch ID | Text | Indexed |
| Payroll Item ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Amount | Number | Indexed |

---

### Table Name: Payment Groups

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |

---

### Table Name: Payment Groups of Payroll Items

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Payment Group ID | Text | Indexed |
| Payroll Item ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |

---

### Table Name: Payroll Periods

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Payment Group ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Start Date | Date | Indexed |
| End Date | Date | Indexed |
| Payment Date | Date | Indexed |
| Year | Number | Indexed |
| Total Staff Paid | Number | Indexed |
| Total Amount Paid | Number | Indexed |

---

### Table Name: Remunerations

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Payroll Period ID | Text | Indexed |
| Staff ID | Text | Indexed |
| Job Title ID | Text | Indexed |
| Notch ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Earnings | Number | Indexed |
| Deductions | Number | Indexed |
| Net Pay | Number | Indexed |
| --- |  |  |
| Pay Status | Text | Indexed, Auto-enter Data |

---

### Table Name: Remuneration Details

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| Payroll Period ID | Text | Indexed |
| Remuneration ID | Text | Indexed |
| Payroll Item ID | Text | Indexed |
| Staff ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Payroll Item Name | Text | Indexed |
| Payroll Item Type | Text | Indexed |
| Rate | Text | Indexed, Auto-enter Data |
| Quantity | Text | Indexed, Auto-enter Data |
| Amount | Number | Indexed |
| Amount _YTD | Number | Indexed |
| --- |  |  |
| Year | Number | Indexed |

---

### Table Name: Other Billing Items

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Name | Text | Indexed |
| Description | Text | Indexed |
| Category | Text | Indexed |
| Cost | Text | Indexed |
| --- |  |  |
| Status | Text | Indexed, Auto-enter Data |

---

### Table Name: SMS Account

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Sender Name | Text | Indexed |
| --- |  |  |
| Total Credits | Number | Indexed |
| Used Credits | Number | Indexed |
| Available Credits | Number | Indexed |

---

### Table Name: SMS Credits

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| SMS Account ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| Total | Number | Indexed |

---

### Table Name: Alerts

| Field | Type | Options |
|---|---|---|
| ID | Text | Indexed, Auto-enter Calculation |
| User ID | Text | Indexed |
| Reference ID | Text | Indexed |
| Link ID | Text | Indexed |
| --- |  |  |
| Date Created | Date | Indexed, Creation Date |
| Time Created | Time | Indexed, Creation Time |
| --- |  |  |
| App Section | Text | Indexed |
| Tab | Text | Indexed |
| Message | Text | Indexed |
| Date Scheduled | Date | Indexed |
| Time Scheduled | Time | Indexed |
| --- |  |  |
| Status | Text | Indexed |