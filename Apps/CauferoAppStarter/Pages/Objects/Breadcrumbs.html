# CauferoAppStarter Documentation
## Breadcrumbs and How They Are Implemented (WebViewer Pages)

> Purpose of this doc  
> Train an AI Agent to implement **Breadcrumbs** in CauferoAppStarter WebViewer pages using the provided sample (Tab 4).  
> Breadcrumbs show the user “where they are” in the app’s navigation hierarchy and provide quick jump links back to parent levels.

---

## 1) What Breadcrumbs Mean in CauferoAppStarter

Breadcrumbs are a compact navigation trail, usually placed near the top of a page or section, that:

- Shows the hierarchy of the current page (Home → Category → Subcategory → Current Page)
- Makes earlier levels clickable (optional but recommended)
- Keeps the last segment as a non-clickable “current” label

In this framework:
- The breadcrumb container uses `.breadcrumbs`
- Each clickable segment is an `<a>` element
- The final segment uses `<span class='current'>`

---

## 2) When to Use Breadcrumbs

Use breadcrumbs when:
- The user can arrive at the page through multiple paths
- The page is a “deep detail page” (Record Details, Staff Details, Item Details, KPI Details)
- The user needs an easy way to move back without relying only on Cancel or Back buttons
- The system uses multiple nested groupings (Modules → Lists → Records → Subrecords)

AI Agent rule:
- Add breadcrumbs to pages where the user needs to quickly orient and backtrack.
- Breadcrumbs are most valuable on detail pages and “drill-down” pages.

---

## 3) Breadcrumbs Anatomy (The Required HTML Pattern)

The sample implementation:

~~~html
<div class='breadcrumbs'>
  <a href='#'><i class='fas fa-home icon'></i>Home</a>
  <a href='#'><i class='fas fa-folder icon'></i>Category</a>
  <a href='#'><i class='fas fa-file icon'></i>Subcategory</a>
  <span class='current'>Current Page</span>
</div>
~~~

### 3.1 Required elements

- Outer container: `<div class='breadcrumbs'>`
- One or more intermediate links: `<a ...>Label</a>`
- Final current marker: `<span class='current'>Label</span>`

### 3.2 Icons

- Icons are Font Awesome classes and are optional.
- When used, the icon is inside the `<a>` tag.

Example:
~~~html
<i class='fas fa-home icon'></i>
~~~

AI Agent rule:
- If icons are used, standardize the icon class name `.icon` for spacing and styling.

---

## 4) Breadcrumb Data Model (What the AI Agent Must Build)

Breadcrumbs should be generated from a list of segments.

Each segment has:
- `label` (string shown to user)
- `action` (optional: what happens when clicked)
- `iconClass` (optional)
- `isCurrent` (true for the last segment)

Recommended internal representation (conceptual):
- Home (clickable)
- Parent page (clickable)
- List page (clickable)
- Current record (not clickable)

AI Agent rule:
- Breadcrumbs must always end with the current page label as a non-link.

---

## 5) How Breadcrumb Clicks Should Work in CauferoAppStarter

In a WebViewer page, `<a href='#'>` does nothing useful by itself.  
Breadcrumbs must trigger FileMaker navigation, typically through:

- `FileMaker.PerformScript('Some Script', 'param')`
- or `fmp://$/FileName?script=ScriptName&param=...` (less preferred if PerformScript is available)

### 5.1 Best practice: use onclick handlers calling FileMaker.PerformScript

Pattern:
~~~html
<a href='#' onclick="goBreadcrumb('HOME')">
  <i class='fas fa-home icon'></i>Home
</a>
~~~

Then define:
~~~javascript
function goBreadcrumb(target) {
  FileMaker.PerformScript('+++ Some Page Script', target);
}
~~~

AI Agent rule:
- Breadcrumb navigation must be explicit and deterministic.
- Do not rely on browser history inside FileMaker WebViewer.

### 5.2 Breadcrumb navigation scripts (FileMaker side)

Breadcrumbs normally route to page scripts such as:
- `+++ Records List Page`
- `+++ Staff List Page`
- `+++ Item Details Page`
- `+++ Module Home Page`

In the sample script, `$Cancel Script` is already set:
- `$Cancel Script = "+++ Records List Page"`

AI Agent rule:
- If a breadcrumb link navigates “back to list”, reuse the same page script used by Cancel when appropriate.
- If breadcrumbs are deeper than Cancel, define dedicated scripts per breadcrumb level.

---

## 6) Implementation Pattern (Step-by-step)

### Step 1: Decide breadcrumb hierarchy for the page

Example (Item Details):
- Home
- Inventory
- Items
- Item Details (current)

Example (Staff KPIs detail context):
- Home
- HR
- Staff
- Staff Details (current)

AI Agent rule:
- Breadcrumb labels must be user-friendly and match the app’s module vocabulary.

### Step 2: Set breadcrumb target scripts in FileMaker variables

Recommended variables:
- `$Breadcrumb Home Script`
- `$Breadcrumb Level1 Script`
- `$Breadcrumb Level2 Script`

Example:
~~~filemaker
Set Variable [ $Breadcrumb Home Script ; Value: "+++ Home Page" ]
Set Variable [ $Breadcrumb Level1 Script ; Value: "+++ Inventory Module" ]
Set Variable [ $Breadcrumb Level2 Script ; Value: "+++ Items List Page" ]
~~~

AI Agent rule:
- Keep breadcrumb routing script names in variables, same style as Save/Cancel/Open Modal patterns.

### Step 3: Generate Breadcrumb HTML in FileMaker

Recommended approach:
- Build a variable `$Breadcrumbs HTML`
- Inject it into the page where needed (top of tab content or top of content-section)

Example:
~~~filemaker
Set Variable [ $Breadcrumbs HTML ; Value:
"
<div class='breadcrumbs'>
  <a href='#' onclick=\"goHome()\"><i class='fas fa-home icon'></i>Home</a>
  <a href='#' onclick=\"goLevel1()\"><i class='fas fa-folder icon'></i>Inventory</a>
  <a href='#' onclick=\"goLevel2()\"><i class='fas fa-file icon'></i>Items</a>
  <span class='current'>Item Details</span>
</div>
"
]
~~~

Then place it inside a tab:
~~~filemaker
Set Variable [ $TabX HTML ; Value:
"
<div id='tabX' class='content' ...>

 " & $Breadcrumbs HTML & "

 ...rest of content...

</div>
"
]
~~~

AI Agent rule:
- Breadcrumbs should appear near the top of the tab/page content, before heavy UI objects.

### Step 4: Add JavaScript handlers for breadcrumb clicks

Example:
~~~javascript
function goHome() {
  FileMaker.PerformScript('+++ Home Page');
}

function goLevel1() {
  FileMaker.PerformScript('+++ Inventory Module');
}

function goLevel2() {
  FileMaker.PerformScript('+++ Items List Page');
}
~~~

If parameters are required:
~~~javascript
function goLevel2() {
  const param = 'some|pipe|params';
  FileMaker.PerformScript('+++ Items List Page', param);
}
~~~

AI Agent rule:
- Breadcrumb handlers must be included in `$Scripts` just like Cancel/Save/Wizard scripts.

---

## 7) CSS Expectations for Breadcrumbs

Breadcrumbs depend on `.breadcrumbs` and `.current` styling.

Minimum behavior:
- Breadcrumb trail is readable
- Links look clickable
- Current item stands out and is not a link
- Spacing between segments is consistent

Recommended CSS (if not already in `🖌️ Use Details CSS`):

~~~css
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  font-size: 13px;
}

.breadcrumbs a {
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}

.breadcrumbs .icon {
  margin-right: 6px;
}

.breadcrumbs .current {
  font-weight: 600;
  opacity: 0.85;
}
~~~

Optional: add separators using CSS only (recommended):
~~~css
.breadcrumbs a::after {
  content: "›";
  margin-left: 10px;
  opacity: 0.5;
}

.breadcrumbs a:last-of-type::after {
  content: "›";
}
~~~

Alternative: build separators in HTML (less preferred):
~~~html
<a ...>Home</a>
<span class='sep'>›</span>
<a ...>Category</a>
<span class='sep'>›</span>
<span class='current'>Current</span>
~~~

AI Agent rule:
- Prefer CSS separators to avoid cluttering generated HTML.

---

## 8) Breadcrumb Placement Rules (In This Framework)

Breadcrumbs can be placed:
- Inside a specific tab (as in the sample Tab 4)
- At the top of the `content-section` so they remain visible across tabs
- Directly under the summary card, before tabs

Recommended placements:
1) For single-page flows: place under summary section
2) For tabbed pages: place inside each deep tab that needs context, or place once above tabs

AI Agent rule:
- If breadcrumbs represent overall page location (not tab location), place them once above the tabs.
- If breadcrumbs represent a special sub-context inside a tab, place them inside that tab.

---

## 9) Breadcrumbs vs Cancel Button (Policy)

Breadcrumbs are not the same as Cancel:

- Cancel is a form action (“leave without saving”)
- Breadcrumbs are navigation (“go back up the hierarchy”)

AI Agent rule:
- Do not replace Cancel with breadcrumbs.
- Breadcrumbs complement Cancel, they do not replace it.

---

## 10) Dynamic Breadcrumbs (Using Record Names)

Breadcrumbs often should include the record name:

Example:
- Home → Inventory → Items → Paracetamol

Implementation:
- FileMaker calculates the record label (name/title)
- Inject into the current segment

Example:
~~~filemaker
Set Variable [ $Current Label ; Value: $Item Name ]
Set Variable [ $Breadcrumbs HTML ; Value:
"
<div class='breadcrumbs'>
  <a href='#' onclick=\"goHome()\"><i class='fas fa-home icon'></i>Home</a>
  <a href='#' onclick=\"goLevel1()\"><i class='fas fa-folder icon'></i>Inventory</a>
  <a href='#' onclick=\"goLevel2()\"><i class='fas fa-file icon'></i>Items</a>
  <span class='current'>" & $Current Label & "</span>
</div>
"
]
~~~

AI Agent rule:
- If a page is “Record Details”, the current breadcrumb should be the record’s human label, not a generic “Details”.

---

## 11) Common Failure Modes and Fixes

### 11.1 Breadcrumb links do nothing
Cause:
- `<a href='#'>` has no onclick handler and no JS functions
Fix:
- Add onclick handlers and implement the functions in `$Scripts`

### 11.2 Breadcrumb navigation breaks parameters
Cause:
- scripts need parameters but breadcrumb handlers do not pass them
Fix:
- explicitly pass the required parameters, usually record IDs or tab targets

### 11.3 Breadcrumbs show wrong hierarchy
Cause:
- hardcoded labels reused across pages without updating
Fix:
- generate breadcrumb segments from page context (module, list, record)

### 11.4 Breadcrumbs clutter small screens
Cause:
- too many segments with long labels
Fix:
- keep labels short or hide middle segments on mobile via CSS

---

## 12) Required Clarifications (Ambiguities the AI Agent Cannot Guess)

To standardize breadcrumbs across your system, clarify:

1) Breadcrumb click behavior
   - Should breadcrumb links always call FileMaker scripts, or is browser history acceptable anywhere?

2) Standard breadcrumb levels
   - Do you always want: Home → Module → List → Record
   - Or do some modules add extra levels: Home → Module → Submodule → List → Record

3) Script naming conventions for breadcrumbs
   - What is your official Home page script name?
   - Do all module landing pages exist as scripts?

4) Breadcrumb persistence with tabs
   - When a page has tabs, should breadcrumbs reflect:
     - only the page hierarchy, or
     - the active tab too (rare but possible)

5) Icons standard
   - Do you want icons on every breadcrumb, or only the first one?

---

## 13) AI Agent Output Standard (What Must Be Produced)

When asked to add breadcrumbs to a page, the AI Agent must output:

1) FileMaker variables
   - breadcrumb target scripts
   - breadcrumb labels (module, list, record)
2) Breadcrumb HTML block (stored in a variable, injected into page)
3) JavaScript functions that call FileMaker scripts
4) CSS expectations for `.breadcrumbs`, `.current`, and `.icon`
5) Placement decision (where to inject breadcrumbs in the page)