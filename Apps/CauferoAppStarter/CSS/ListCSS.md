# List Pages CSS Generator (CauferoAppStarter)

## Purpose
This document defines the canonical CSS skeleton for List Pages (table view + grid view + empty state) in CauferoAppStarter.

The AI agent must create a new theme by changing CSS values only, while keeping the exact same selectors and the exact same property names.

This CSS covers:
- WebViewer list page container (full-viewport fixed content)
- Sticky header area (search, count, add button)
- Scrollable table with sticky header and selectable rows
- Optional record grid cards (with selected-card state)
- Category header rows inside the table
- Theming tokens via `:root` variables
- Row hover and selection effects using `#recordsTable` selectors
- “No Record Found” empty-state message card with CTA and animations

---

## Script Context
- Input: `$$Theme` (or whatever theme selector your List CSS generator uses)
- Output: `$styles` (full CSS stylesheet string)
- Script ends with: `Exit Script [ Text Result: $styles ]`

---

## Hard Rules (CSS Contract)
When creating a new List Page theme:
1. Keep the exact same selectors.
2. Keep the exact same property names under each selector.
3. Change values only.

Never:
- add selectors
- remove selectors
- rename selectors
- add properties
- remove properties

If a requested visual change would require adding selectors or properties, do not implement it. Achieve the best possible result using value changes only.

---

## Canonical List Page CSS Skeleton (Source Of Truth)
This is the canonical skeleton the AI must copy and edit for every new list-page theme.

~~~css
/* General reset and body styling */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
  height: 100vh;
  padding: 20px;
  overflow: hidden;
}

/* Main container styling */
.main-content {
  width: auto;
  height: auto;
  position: fixed;
  inset: 0;
  margin: 20px !important;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Sticky header styling */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 20px;
  z-index: 10;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.header .search-bar {
  width: 250px;
}

.search-wrapper {
  position: relative;
  width: 100%;
}

.search-wrapper i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 16px;
  pointer-events: none;
}

.search-wrapper input[type='search'] {
  padding: 10px 12px 10px 38px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  background-color: #f9f9f9;
  color: #555;
  outline: none;
  width: 100%;
  font-size: 14px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.search-wrapper input[type='search']:focus {
  border-color: #007bff;
  box-shadow: 0px 4px 8px rgba(0, 123, 255, 0.2);
  background-color: #ffffff;
}

.search-wrapper input[type='search']::placeholder {
  color: #aaa;
  opacity: 0.8;
}

/* Record count display */
.record-count {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #333;
}

.record-count .count-number {
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  margin-left: 5px;
}

/* Button styling */
.add-button button {
  background-color: #28a745;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}

.add-button button:hover {
  background-color: #006b7a;
}

/* Table styling */
.table-container {
  flex-grow: 1;
  overflow-y: auto;
  border-radius: 8px;
  padding: 0 20px;
}

/* Table Wrapper for Scrollable Body */
.table-wrapper {
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  background-color: #ffffff;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

/* Fixed Header */
thead th {
  position: sticky;
  top: 0;
  background: #f5f5f5;
  font-weight: bold;
  padding: 12px;
  border-bottom: 2px solid #dcdcdc;
  z-index: 2;
  color: #333;
}

th,
td {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  color: #555;
}

th {
  background-color: #f5f5f5;
  font-weight: bold;
}

/* Alternating row colors */
tbody tr:nth-child(odd) {
  background-color: #f9fafb;
}

tbody tr:nth-child(even) {
  background-color: #ffffff;
}

tr:hover {
  background-color: #e9eef2;
}

/* Selected row styling */
.selected-row {
  background-color: #d1e7ff !important;
}

/* Status Chip Styling */
.status {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.status.gray {
  background-color: #6c757d;
  color: #fff;
}

.status.yellow {
  background-color: #f0ad4e;
  color: #fff;
}

.status.green {
  background-color: #5cb85c;
  color: #fff;
}

.status.red {
  background-color: #dc3545;
  color: #fff;
}

.icon {
  font-size: 16px;
  color: #999;
  cursor: pointer;
}

.record-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 10px;
  padding: 20px;
  overflow-y: auto;
  height: auto;
  background-color: rgba(255, 255, 255, 1);
  height: 100vh;
}

.record-grid-card {
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  height: 170px;
}

.record-grid-card img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.record-grid-info h3 {
  font-size: 13px;
  margin-top: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.record-grid-info p {
  font-size: 12px;
  color: #555;
  margin-top: 4px;
}

h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #007bff;
  border-bottom: 1px solid #007bff;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

/* Category Header Styling - Aligned to Bottom */
.category-header {
  height: 60px;
  padding-bottom: 5px!important;
  font-weight: 700;
  text-transform: uppercase;
  color: #007bff;
  border-bottom: 1px solid #007bff;
  letter-spacing: 0.03em;
  text-shadow: 0px 1px 3px rgba(0, 123, 255, 0.15);
  font-size: 1.1rem;
}

/* Reduce space above category header */
.category-header:first-child {
  margin-top: 0;
  padding-top: 8px;
}

/* Reduce spacing between category and next row */
.category-header + tr {
  margin-top: 0;
  padding-top: 0;
}

.category-header td {
  vertical-align: bottom;
  padding-top: 2px;
  padding-bottom: 5px;
  font-size: 1.1rem;
  color: #007bff;
  font-weight: 600;
}

/* ===== Theming tokens (updated for theme) ===== */
:root {
  --accent: #007bff;
  --accent-light: #66b2ff;
  --accent-strong: #0056b3;
  --row-hover-bg: #e9eef2;
  --row-selected-bg: #d1e7ff;
}

/* Make the whole row feel clickable */
#recordsTable tbody tr.clickable-row {
  cursor: pointer;
}

/* Hover effect */
#recordsTable tbody tr.clickable-row:hover {
  background-color: var(--row-hover-bg) !important;
  box-shadow: inset 0 0 0 2px var(--accent-light);
  transition: none;
}

#recordsTable tbody tr.clickable-row:hover td:first-child {
  box-shadow: inset 8px 0 0 var(--accent-light);
  transition: none;
}

/* Selected effect */
#recordsTable tbody tr.selected-row {
  background-color: var(--row-selected-bg) !important;
  color: #333;
  box-shadow: inset 0 0 0 3px var(--accent-strong);
  transition: none;
}

#recordsTable tbody tr.selected-row td:first-child {
  box-shadow: inset 8px 0 0 var(--accent-strong);
  transition: none;
}

/* Neutralize default hover to avoid conflicts */
#recordsTable tbody tr:hover {
  background-color: inherit;
}

/* Selected card styling - matches grid theme */
.selected-card {
  outline: 2px solid #007bff;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.2);
  background-color: #f0f8ff;
  transform: scale(1.02);
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
}

/* =========================
   No Record Found (Themed)
   ========================= */

.message-container {
  text-align: center;
  padding: 40px 48px;
  animation: fadeIn 0.8s ease-out forwards;
  max-width: 700px;
  width: 90%;
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  color: var(--accent-strong, #0056b3);
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.08);
}

.message-container h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  animation: slideInDown 0.8s ease-out;
  text-shadow: 0 1px 2px rgba(0,0,0,0.04);
}

.message-container p {
  font-size: 14px;
  color: #555;
  margin-bottom: 18px;
  animation: slideInUp 1s ease-out;
}

.message-container .svg-icon {
  width: 96px;
  height: 96px;
  margin: 0 auto 18px auto;
  display: block;
  fill: currentColor;
  stroke: currentColor;
  color: var(--accent, #007bff);
  animation: fadeInZoom 0.9s ease-out;
  transition: color 0.25s ease, transform 0.2s ease;
}

.message-container .svg-icon:hover {
  color: var(--accent-strong, #0056b3);
  transform: scale(1.04);
}

.cta-btn {
  display: inline-block;
  margin-top: 14px;
  padding: 12px 26px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, var(--accent, #007bff), var(--accent-strong, #0056b3));
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.18);
  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.18s ease;
}

.cta-btn:hover {
  background: linear-gradient(135deg, var(--accent-strong, #0056b3), var(--accent, #007bff));
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 123, 255, 0.25);
}

/* Subtle link style inside message (if any) */
.message-container a.inline-link {
  color: var(--accent, #007bff);
  text-decoration: none;
  border-bottom: 1px dashed var(--accent-light, #66b2ff);
}
.message-container a.inline-link:hover {
  color: var(--accent-strong, #0056b3);
  border-bottom-color: var(--accent-strong, #0056b3);
}

/* ===== Animations (unchanged) ===== */
@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, calc(-50% + 8px)); }
  to   { opacity: 1; transform: translate(-50%, -50%); }
}
@keyframes slideInDown {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slideInUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInZoom {
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .message-container,
  .message-container h1,
  .message-container p,
  .message-container .svg-icon {
    animation: none !important;
    transition: none !important;
  }
}
~~~

---

## Contract Manifest (Selectors and Property Names)
The AI agent must ensure every new theme keeps these exact selectors and property names.

- `*`
  - box-sizing, margin, padding, font-family

- `body`
  - display, justify-content, align-items, background-color, height, padding, overflow

- `.main-content`
  - width, height, position, inset, margin, display, flex-direction, padding, background, border-radius, box-shadow, overflow

- `.header`
  - display, justify-content, align-items, position, top, background-color, padding, z-index, box-shadow

- `.header .search-bar`
  - width

- `.search-wrapper`
  - position, width

- `.search-wrapper i`
  - position, left, top, transform, color, font-size, pointer-events

- `.search-wrapper input[type='search']`
  - padding, border, border-radius, background-color, color, outline, width, font-size, transition

- `.search-wrapper input[type='search']:focus`
  - border-color, box-shadow, background-color

- `.search-wrapper input[type='search']::placeholder`
  - color, opacity

- `.record-count`
  - display, align-items, font-size, color

- `.record-count .count-number`
  - font-size, font-weight, color, margin-left

- `.add-button button`
  - background-color, color, padding, border, border-radius, cursor, font-size, font-weight

- `.add-button button:hover`
  - background-color

- `.table-container`
  - flex-grow, overflow-y, border-radius, padding

- `.table-wrapper`
  - max-height, overflow-y, border, border-radius, background-color

- `table`
  - width, border-collapse, margin-bottom

- `thead th`
  - position, top, background, font-weight, padding, border-bottom, z-index, color

- `th, td`
  - padding, text-align, font-size, color

- `th`
  - background-color, font-weight

- `tbody tr:nth-child(odd)`
  - background-color

- `tbody tr:nth-child(even)`
  - background-color

- `tr:hover`
  - background-color

- `.selected-row`
  - background-color

- `.status`
  - display, padding, border-radius, font-size, font-weight

- `.status.gray`
  - background-color, color

- `.status.yellow`
  - background-color, color

- `.status.green`
  - background-color, color

- `.status.red`
  - background-color, color

- `.icon`
  - font-size, color, cursor

- `.record-grid`
  - display, grid-template-columns, gap, padding, overflow-y, height, background-color

- `.record-grid-card`
  - background-color, border-radius, box-shadow, overflow, text-align, padding, transition, cursor, height

- `.record-grid-card img`
  - width, height, object-fit, border-radius

- `.record-grid-info h3`
  - font-size, margin-top, white-space, overflow, text-overflow

- `.record-grid-info p`
  - font-size, color, margin-top

- `h2`
  - font-size, font-weight, color, border-bottom, text-transform, letter-spacing

- `.category-header`
  - height, padding-bottom, font-weight, text-transform, color, border-bottom, letter-spacing, text-shadow, font-size

- `.category-header:first-child`
  - margin-top, padding-top

- `.category-header + tr`
  - margin-top, padding-top

- `.category-header td`
  - vertical-align, padding-top, padding-bottom, font-size, color, font-weight

- `:root`
  - --accent, --accent-light, --accent-strong, --row-hover-bg, --row-selected-bg

- `#recordsTable tbody tr.clickable-row`
  - cursor

- `#recordsTable tbody tr.clickable-row:hover`
  - background-color, box-shadow, transition

- `#recordsTable tbody tr.clickable-row:hover td:first-child`
  - box-shadow, transition

- `#recordsTable tbody tr.selected-row`
  - background-color, color, box-shadow, transition

- `#recordsTable tbody tr.selected-row td:first-child`
  - box-shadow, transition

- `#recordsTable tbody tr:hover`
  - background-color

- `.selected-card`
  - outline, box-shadow, background-color, transform, transition

- `.message-container`
  - text-align, padding, animation, max-width, width, position, inset, transform, color, background, border, border-radius, box-shadow

- `.message-container h1`
  - font-size, color, margin-bottom, animation, text-shadow

- `.message-container p`
  - font-size, color, margin-bottom, animation

- `.message-container .svg-icon`
  - width, height, margin, display, fill, stroke, color, animation, transition

- `.message-container .svg-icon:hover`
  - color, transform

- `.cta-btn`
  - display, margin-top, padding, font-size, font-weight, color, background, border, border-radius, cursor, text-decoration, box-shadow, transition

- `.cta-btn:hover`
  - background, transform, box-shadow

- `.message-container a.inline-link`
  - color, text-decoration, border-bottom

- `.message-container a.inline-link:hover`
  - color, border-bottom-color

- `@keyframes fadeIn`
  - from opacity, from transform, to opacity, to transform

- `@keyframes slideInDown`
  - from opacity, from transform, to opacity, to transform

- `@keyframes slideInUp`
  - from opacity, from transform, to opacity, to transform

- `@keyframes fadeInZoom`
  - from opacity, from transform, to opacity, to transform

- `@media (prefers-reduced-motion: reduce)`
  - (keep selectors exactly as in the skeleton)
  - .message-container animation, transition
  - .message-container h1 animation, transition
  - .message-container p animation, transition
  - .message-container .svg-icon animation, transition

---

## Theme Creation Procedure
When creating a new theme:
1. Create a new theme name (unique, Title Case).
2. Copy the canonical List Page CSS skeleton exactly.
3. Change values only, mainly:
   - overall background and base surfaces (`body`, `.main-content`, `.header`, `.table-wrapper`)
   - accent colors used in count, headings, selection, and empty state (`.record-count .count-number`, `h2`, `.category-header`, `:root` variables)
   - focus state glow for the search input (`.search-wrapper input[type='search']:focus`)
   - row hover and selection effects (`tr:hover`, `.selected-row`, `#recordsTable ...`)
   - chip colors (`.status.*`) to match the theme palette
   - shadows and borders to stay sharp and modern (`.main-content`, `.header`, `.table-wrapper`, `.record-grid-card`, `.message-container`, `.cta-btn`)
4. Ensure it looks professional, sharp, compact, modern, cohesive, and remains readable.

---

## FileMaker Script Branch Template
Add a new branch to the List Pages CSS generator script:

~~~text
Else If [ $$Theme = "New Theme Name" ]
  Set Variable [ $styles ; Value: "PASTE FULL UPDATED CSS STRING HERE" ]
End If
~~~

---

## AI Request Template
Create a new List Page theme using the canonical List Page CSS in this document.

Theme Name: <New Theme Name>
Mode: <Light or Dark>
Vibe Keywords: <example: premium, compact, modern, cohesive>

Rules:
- Copy the canonical List Page CSS exactly.
- Change values only.
- Do not add, remove, or rename selectors.
- Do not add or remove properties.

Deliver:
1. Full updated CSS string
2. Full FileMaker `Else If` branch for the new theme
