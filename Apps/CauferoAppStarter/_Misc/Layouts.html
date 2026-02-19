# Layouts (CauferoAppStarter)

This document describes the **4 FileMaker layouts used for UI rendering** in `CauferoAppStarter.fmp12`.

## Overview

- **File name:** `CauferoAppStarter.fmp12`
- **Relationships:** None (no relationship graph)
- **Purpose:** A configurable starter file that can be set up to run as different solutions (hospital management, construction management, retail, inventory, and more).
- **UI strategy:** All UI is rendered using **Web Viewers**. The file uses **4 layouts** as UI containers:
  1. **Splash Screen**
  2. **Menu**
  3. **Page**
  4. **Modal**

---

# 1. Splash Screen Layout

**Layout name:** `Splash Screen`  
**Purpose:** Display the splash screen UI during application startup.

## 1.1 Web Viewer on Splash Screen Layout

The `Splash Screen` layout contains **one Web Viewer**.

#### 1) Splash Web Viewer

- **Purpose:** Renders the splash screen UI.
- **Render source:** `$$Splash`
  - `$$Splash` contains the complete HTML (and related CSS + JS) for the splash screen.

## 1.2 How the Splash Screen UI is Generated

#### Script that builds `$$Splash`

- **Script name:** `+++ Splash Page`
- **What it does (splash-specific):**
  - Pulls splash CSS by running `🖌️ Use Splash Screen CSS` and stores the returned CSS in `$styles`.
  - Builds the splash HTML fragment and stores it in `$HTML`.
  - Builds the splash JavaScript and stores it in `$Scripts`.
  - Assembles the final full-page HTML document and stores it in `$$Splash`.
  - Performs `WebDirect Pause`, then refreshes the window to ensure the Web Viewer renders the latest `$$Splash`.

## 1.3 How the Splash Screen Layout is Shown

- **Script name:** `Startup`
- **Splash rendering behavior (startup-specific):**
  - Goes to the `Splash Screen` layout at the start of the script.
  - If `$$App Name ≠ "The Bridge"`, it calls `+++ Splash Page` to populate `$$Splash`, then pauses briefly so the splash remains visible during startup.

## 1.4 Key Global Variables Used by the Splash Screen Layout

- `$$Splash`  
  Final HTML rendered by the Splash Web Viewer.

---

# 2. Menu Layout

**Layout name:** `Menu`  
**Role:** Displays the main menu UI for the application.

## 2.1 Web Viewer on Menu Layout

The `Menu` layout contains **one Web Viewer**.

#### 1) Menu Web Viewer

- **Purpose:** Renders the full menu UI.
- **Render source:** `$$Menu`
  - `$$Menu` contains the complete HTML (and related CSS + JS) for the menu.

### How the Menu UI is Generated

#### Script that builds `$$Menu`

- **Script name:** `+++ Menu Page`
- **What it does (menu-specific):**
  - Builds the menu links HTML and stores it in `$$My Links`.
  - Generates the final menu HTML document and stores it in `$$Menu`.
  - Pulls menu styling by running `🖌️ Use Menu CSS` and injecting the returned CSS into the menu HTML.
  - Builds support JS used by the menu, including functions that call FileMaker scripts from inside the Web Viewer.

#### Submenu generation used by the menu

- **Script name:** `Get Sub Menu Links 1`
  - Returns HTML for level-1 sub links for a given parent link.
  - If there are deeper sub links, it outputs an accordion-style structure.
- **Script name:** `Get Sub Menu Links 2`
  - Returns HTML for level-2 sub links for a given parent link.
  - Uses the same pattern as level-1 generation.

## 2.2 How the Menu Layout is Shown

- **Script name:** `Go To Menu`
- **Menu window behavior:**
  - Calls `+++ Menu Page` to rebuild `$$Menu`.
  - If `$$Menu Mode` is not `"Persistent Side Menu"`, a **new window** is opened using the `Menu` layout.
  - If `$$Menu Mode` is `"Persistent Side Menu"`, the menu is shown as part of the persistent UI flow (no separate menu window is created).

## 2.3 Selection State on the Menu

The menu HTML uses global selection variables to visually reflect the current navigation state:

- `$$Link ID`  
  Used to mark the currently selected link in the menu (HTML uses a `selected` class when the link’s ID matches `$$Link ID`).

- `$$Parent Link ID`  
  Used to keep the correct accordion section expanded when the selected item is inside a grouped (parent) section.

## 2.4 Key Global Variables Used by the Menu Layout

- `$$Menu`  
  Final HTML rendered by the Menu Web Viewer.

- `$$My Links`  
  HTML fragment containing the generated list of links (and accordion blocks) that is injected into `$$Menu`.

- `$$Link ID`  
  The selected link record ID, used by the menu to highlight the selected item.

- `$$Parent Link ID`  
  The selected parent link ID, used to control which accordion section is expanded.

- `$$Menu Mode`  
  Controls whether the menu appears in its own window or as a persistent side menu.


---

# 3. Page Layout

**Layout name:** `Page`  
**Role:** Hosts all **main application pages**. This is where the majority of the app UI renders.

## 3.1 Web Viewers on the Page Layout

The `Page` layout contains **two Web Viewers**:

### A) Banner Web Viewer

- **Position:** Lines the top of the layout.
- **Purpose:** Displays the page banner (top header area).
- **Render source:** Global variable `$$Banner`
  - `$$Banner` contains the code that renders the banner UI.
- **Where `$$Banner` is set:**
  - `$$Banner` is set in one script: `+++ Banner Page`

#### Banner title behavior

- The banner displays the **title of the current page**.
- The page title is stored in the global variable `$$Layout Name`.
- When a main menu link is clicked, the FileMaker script **`Select Link`** runs and:
  - sets `$$Layout Name` to the title of the selected page
  - calls `+++ Banner Page` so the banner always reflects the current page title
- While generating the banner code, the value inside `$$Layout Name` is inserted into the banner output (and then stored into `$$Banner`).

---

### B) Page Web Viewer

- **Position:** Covers the rest of the layout (main body area).
- **Purpose:** Displays the main body of the current page.
- **Render source:** Global variable `$$Page`
  - `$$Page` contains the code that renders the main page UI.
- **Where `$$Page` is set:**
  - `$$Page` is set by **different page-rendering scripts**.
  - Each page in the application typically has its own render script that sets `$$Page` to the correct HTML/CSS/JS for that page.

---

# 4. Modal Layout

**Layout name:** `Modal`  
**Purpose:** Display UI in a modal window (card-style window) for viewing or editing a selected record while staying in context of the current page.

## 4.1 Web Viewer on Modal Layout

The `Modal` layout contains **one Web Viewer**.

#### 1) Modal Web Viewer

- **Purpose:** Renders the modal UI.
- **Render source:** `$$Modal`
  - `$$Modal` contains the complete HTML (and related CSS + JS) for the modal window.

## 4.2 How Modal UI is Generated

`$$Modal` is not set by one central script. It is set by **many modal-specific scripts**, where each script is responsible for generating the UI for one specific modal use case.

Example pattern:
- A “selected record” ID is passed into a modal script (usually via `Get ( ScriptParameter )`).
- The script queries the database (usually via `ExecuteSQL`) to fetch the selected record’s details.
- The script builds the modal page HTML/CSS/JS, then stores the final HTML document in `$$Modal`.
- The script opens the modal by creating a **new card-style window** that uses the `Modal` layout.

## 4.3 Common Structure of a Modal Page Script

Most modal scripts follow this structure:

1. **Capture the selected record ID**
   - Store the selected record ID in a global variable (example: `$$KPI ID`, `$$Staff Education ID`, `$$Insurance Policy ID`, `$$Payroll Item ID`).

2. **Fetch record details**
   - Use `ExecuteSQL` to retrieve the record fields needed for the modal.

3. **(Optional) Fetch value lists**
   - If the modal needs dropdowns, call `Get Value List` and store results into local variables to inject into the HTML.

4. **Generate modal CSS**
   - Run `🖌️ Use Modal CSS` and store the returned CSS in `$styles`.
   - Some modals append extra CSS to `$styles` when needed (example: dropdown styling).

5. **Generate modal HTML**
   - Build `$HTML` containing the modal structure.
   - Standard modal layout pattern in HTML usually includes:
     - `.modal-header` for the title section
     - `.modal-body` for the main form/content

6. **Generate modal JavaScript**
   - Build JS functions that call FileMaker scripts using `FileMaker.PerformScript(...)`.
   - Common JS actions include:
     - **Cancel** (calls the close-window script)
     - **Save** (collects form values and calls a save script)
     - UI helpers (date pickers, segmented controls, toggles, etc.)

7. **Assemble the full modal page**
   - Combine `$styles`, `$HTML`, and `$Scripts` into a complete HTML document stored in `$$Modal`.

8. **Open the modal window**
   - Use:
     - `New Window [ Style: Card ; Using layout: “Modal” ... ]`
   - Modal size is set per modal script (height and width vary by use case).
   - Some modals call `WebDirect Pause` before opening the window (commonly for WebDirect stability).

## 4.4 Key Global Variables Used by the Modal Layout

- `$$Modal`  
  Final HTML rendered by the Modal Web Viewer.

- *(Per modal script)* `$$<Selected Record ID Variable>`  
  Each modal script typically sets its own global “selected record id” variable, specific to the entity being opened in the modal (for example `$$KPI ID` or `$$Staff Education ID`).


---

# Notes for App Builders

## One File, Many Apps

- New applications are developed **inside `CauferoAppStarter`**.
- Do **not** create a separate `.fmp12` file per new app.

## Planning UI Using Links

- Menu links guide what pages and modals you need to create.
- Example link: **“Staff Profiles”** may require:
  - Records List View Page (staff list)
  - Record Details View Page (selected staff)
  - Modal windows for expanding subtable records, for example:
    - Selected emergency contact person
    - Selected staff education history record
    - Selected staff remuneration payment
    - Selected staff attendance record
    - Selected staff KPI record
    - Selected staff document record

> Starter note: Script naming standards and the full “create a new application” workflow are documented elsewhere. This file focuses on layouts only.
