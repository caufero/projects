# Dashboard CSS Generator (CauferoAppStarter)

## Purpose
This document defines the canonical Dashboard CSS skeleton and the rules an AI agent must follow when creating a new Dashboard theme in CauferoAppStarter.

The AI agent must create a new theme by changing CSS values only, while keeping the exact same selectors and the exact same property names.

This CSS is used for dashboard widgets like:
- KPI cards
- Chart cards (pie/doughnut charts, labels, legends)
- Counters
- Progress bars and progress circles
- Tables and gantt charts
- Timeline UI elements

---

## Script Context
- Input: `$$Theme` (or other theme selector used in your CSS script)
- Output: `$styles` (full CSS stylesheet string)
- The script ends with: `Exit Script [ Text Result: $styles ]`

Important dynamic blocks inside the CSS string:
- The `grid-template-columns` value in `.cards` is built using FileMaker logic:
  - `grid-template-columns: repeat(auto-fit, minmax(<calculated px>, 1fr));`
- The KPI card color definitions are injected using:
  - `" & $$KPI Card Colours & "`

The AI must preserve these dynamic FileMaker insertions exactly.

---

## Hard Rules (CSS Contract)
When creating a new Dashboard theme:
1. Keep the exact same selectors.
2. Keep the exact same property names under each selector.
3. Change values only.

Never:
- add selectors
- remove selectors
- rename selectors
- add properties
- remove properties
- remove or change FileMaker merge insertions such as `" & $$KPI Card Colours & "` or the `Case ( $$Menu Mode ... )` expression inside `.cards`

If a requested visual change would require adding selectors or properties, do not implement it. Achieve the best possible result using value changes only.

---

## Canonical Dashboard CSS Skeleton (Source Of Truth)
This is the canonical dashboard skeleton that the AI must copy and edit for every new dashboard theme.

Notes:
- Keep the `$$Menu Mode` calculation inside `.cards` exactly as-is.
- Keep `" & $$KPI Card Colours & "` exactly as-is.

~~~css
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
  background: linear-gradient(145deg, #D1D9E6, #A4B6D0);
  color: #333;
  padding: 20px;
  overflow: auto;
}

.chart-card {
  background: rgba(247, 249, 249, 1);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
}

.chart-card h2 {
  color: #003A70;
  font-size: 1.2em;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chart-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

canvas {
  max-width: 100%;
  height: auto;
}

.chart-label, .chart-doughnut_label {
  position: absolute;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  z-index: 1;
}

.chart-label {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.chart-doughnut_label {
  color: #003A70;
}

.chart-label span {
  font-size: 0.7em;
  font-weight: normal;
  display: block;
  margin-top: 5px;
  color: white;
}

.legend-custom {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 5px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
  font-size: 0.8em;
}

.legend-color {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background-color: #aaa;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(" & Case ( $$Menu Mode = "Persistent Side Menu" ; 100 ; 180 ) & "px, 1fr));
}

.kpi-card {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
}

" & $$KPI Card Colours & "

.kpi-card svg {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  transition: transform 0.3s ease, fill 0.3s ease;
  fill: white;
}

.kpi-card:hover svg {
  transform: scale(1.1);
}

.kpi-card h3 {
  font-size: 1em;
  margin-bottom: 5px;
  z-index: 1;
  font-weight: 500;
  color: white;
}

.kpi-card .value {
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 5px;
  z-index: 1;
  color: white;
}

.kpi-card p {
  font-size: 0.8em;
  z-index: 1;
  color: white;
}

a {
  text-decoration: none;
}

.gauge-labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -40%;
  padding: 0 20px;
  font-size: 0.9em;
  color: #666;
}

.gauge_performance-details {
  margin-top: 8%;
  font-size: 0.85em;
  color: #666;
}

.counter {
  font-size: 3em;
  font-weight: bold;
  margin: 20px 0;
  color: #0057A3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.counter_details {
  font-size: 0.9em;
  color: #888;
}

.progress_bar-container {
  position: relative;
  height: 20px;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0 20px;
}

.progress-bar {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #003A70 0%, #0057A3 100%);
  border-radius: 10px 0 0 10px;
  transition: width 0.2s ease-in-out;
}

.progress_bar-label {
  font-size: 0.9em;
  margin-top: 5px;
  color: #888;
}

.progress-circle {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;
}

.progress-circle canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.progress-circle .progress_circle-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  font-weight: bold;
  color: #28A745;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress_circle_details {
  font-size: 0.9em;
  color: #666;
  margin-top: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin-top: 10px;
  font-size: 0.85em;
}

th, td {
  padding: 8px 10px;
}

thead {
  background: rgba(0, 58, 112, 0.1);
}

th {
  color: #003A70;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 58, 112, 0.2);
}

tbody tr {
  transition: background 0.2s;
}

tbody tr:nth-child(even) {
  background: rgba(0, 87, 163, 0.05);
}

tbody tr:hover {
  background: rgba(0, 87, 163, 0.1);
}

td {
  color: #0057A3;
}

@media screen and (max-width: 600px) {
  th, td {
    padding: 6px 8px;
    font-size: 0.75em;
  }
}

.gantt-chart {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.gantt-chart th, .gantt-chart td {
  padding: 10px;
  font-size: 0.85em;
}

.gantt-chart thead {
  background: rgba(0, 58, 112, 0.1);
}

.gantt-chart th {
  color: #003A70;
  font-weight: bold;
  text-align: left;
  border-bottom: 1px solid rgba(0, 58, 112, 0.2);
}

.gantt-chart td {
  color: #0057A3;
  border-bottom: 1px solid rgba(0, 87, 163, 0.1);
  position: relative;
  vertical-align: middle;
}

.gantt_task-bar {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 30px;
  border-radius: 4px;
  background: linear-gradient(90deg, #003A70, #0057A3);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 0.8em;
  white-space: nowrap;
  overflow: hidden;
}

.gantt_task-bar.delay {
  background: linear-gradient(90deg, #DC3545, #FF6A6A);
}

.gantt_task-label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  left: 5px;
  font-size: 0.8em;
  font-weight: bold;
  color: #003A70;
}

.timeline-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}

.timeline-point {
  width: 30px;
  height: 30px;
  background: linear-gradient(90deg, #E9EBEF 0%, #F7F9F9 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  font-weight: bold;
  color: grey;
  transition: background 0.3s ease;
}

.timeline-point.active {
  background: linear-gradient(90deg, #28A745 0%, #0057A3 100%);
  color: white;
}

.timeline-label {
  margin-top: 10px;
  font-size: 0.85em;
  color: #777777;
  text-align: center;
}

.timeline-line {
  position: absolute;
  top: 15px;
  left: 10px;
  right: 10px;
  height: 5px;
  background: linear-gradient(90deg, #E9EBEF 0%, #F7F9F9 100%);
}

.timeline-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #28A745 0%, #0057A3 100%);
  transition: width 0.3s ease;
}
~~~

---

## Contract Manifest (Selectors and Property Names)
The AI agent must ensure every new theme keeps these exact selectors and property names.

- `*`
  - box-sizing, margin, padding, font-family

- `body`
  - display, justify-content, align-items, background, color, padding, overflow

- `.chart-card`
  - background, backdrop-filter, border-radius, box-shadow, padding, text-align

- `.chart-card h2`
  - color, font-size, margin-bottom, text-shadow

- `.chart-container`
  - position, display, justify-content, align-items, margin-bottom

- `canvas`
  - max-width, height

- `.chart-label, .chart-doughnut_label`
  - position, text-align, font-size, font-weight, z-index

- `.chart-label`
  - color, text-shadow

- `.chart-doughnut_label`
  - color

- `.chart-label span`
  - font-size, font-weight, display, margin-top, color

- `.legend-custom`
  - display, justify-content, flex-wrap, gap, margin-top

- `.legend-item`
  - display, align-items, gap, color, font-size

- `.legend-color`
  - width, height, border-radius, display, background-color

- `.cards`
  - display, grid-template-columns

- `.kpi-card`
  - border, border-radius, box-shadow, padding, text-align, display, flex-direction, justify-content, align-items, position, overflow, transition, text-decoration, color

- `.kpi-card svg`
  - width, height, margin-bottom, transition, fill

- `.kpi-card:hover svg`
  - transform

- `.kpi-card h3`
  - font-size, margin-bottom, z-index, font-weight, color

- `.kpi-card .value`
  - font-size, font-weight, margin-bottom, z-index, color

- `.kpi-card p`
  - font-size, z-index, color

- `a`
  - text-decoration

- `.gauge-labels`
  - display, justify-content, align-items, margin-top, padding, font-size, color

- `.gauge_performance-details`
  - margin-top, font-size, color

- `.counter`
  - font-size, font-weight, margin, color, text-shadow

- `.counter_details`
  - font-size, color

- `.progress_bar-container`
  - position, height, width, background, border-radius, overflow, margin

- `.progress-bar`
  - height, width, background, border-radius, transition

- `.progress_bar-label`
  - font-size, margin-top, color

- `.progress-circle`
  - position, width, height, margin

- `.progress-circle canvas`
  - position, top, left

- `.progress-circle .progress_circle-value`
  - position, top, left, transform, font-size, font-weight, color, text-shadow

- `.progress_circle_details`
  - font-size, color, margin-top

- `table`
  - width, border-collapse, text-align, margin-top, font-size

- `th, td`
  - padding

- `thead`
  - background

- `th`
  - color, font-weight, border-bottom

- `tbody tr`
  - transition

- `tbody tr:nth-child(even)`
  - background

- `tbody tr:hover`
  - background

- `td`
  - color

- `@media screen and (max-width: 600px) th, td`
  - padding, font-size

- `.gantt-chart`
  - width, border-collapse, text-align

- `.gantt-chart th, .gantt-chart td`
  - padding, font-size

- `.gantt-chart thead`
  - background

- `.gantt-chart th`
  - color, font-weight, text-align, border-bottom

- `.gantt-chart td`
  - color, border-bottom, position, vertical-align

- `.gantt_task-bar`
  - position, top, left, transform, height, border-radius, background, display, align-items, justify-content, padding-right, color, font-weight, font-size, white-space, overflow

- `.gantt_task-bar.delay`
  - background

- `.gantt_task-label`
  - position, top, transform, z-index, left, font-size, font-weight, color

- `.timeline-item`
  - position, display, flex-direction, align-items, width

- `.timeline-point`
  - width, height, background, border-radius, display, justify-content, align-items, font-size, font-weight, color, transition

- `.timeline-point.active`
  - background, color

- `.timeline-label`
  - margin-top, font-size, color, text-align

- `.timeline-line`
  - position, top, left, right, height, background

- `.timeline-fill`
  - height, width, background, transition

---

## Theme Creation Procedure
When creating a new theme:
1. Create a new theme name (unique, Title Case).
2. Copy the canonical Dashboard CSS skeleton exactly.
3. Change values only, mainly:
   - page background gradient and base text color in `body`
   - card backgrounds, blur strength, border radii, shadows (`.chart-card`, `.kpi-card`)
   - heading colors and text shadows (`.chart-card h2`, `.counter`)
   - neutral text colors used across legends, labels, details (`.legend-item`, `.gauge-labels`, `.counter_details`, `.progress_bar-label`, `.progress_circle_details`)
   - progress gradients and accent colors (`.progress-bar`, `.progress-circle .progress_circle-value`)
   - table header and row background opacities (`thead`, `tbody tr:nth-child(even)`, `tbody tr:hover`)
   - gantt bar gradients and delay color (`.gantt_task-bar`, `.gantt_task-bar.delay`)
   - timeline inactive and active gradients (`.timeline-point`, `.timeline-point.active`, `.timeline-fill`)
4. Ensure it looks professional, sharp, compact, modern, cohesive, and remains readable.

---

## FileMaker Script Branch Template
Add a new branch to the Dashboard CSS generator script:

~~~text
Else If [ $$Theme = "New Theme Name" ]
  Set Variable [ $styles ; Value: "PASTE FULL UPDATED CSS STRING HERE (KEEP ALL FILEMAKER INSERTIONS INTACT)" ]
End If
~~~

---

## AI Request Template
Create a new Dashboard theme using the canonical Dashboard CSS in this document.

Theme Name: <New Theme Name>
Mode: <Light or Dark>
Vibe Keywords: <example: premium, compact, modern, cohesive>

Rules:
- Copy the canonical Dashboard CSS exactly.
- Change values only.
- Do not add, remove, or rename selectors.
- Do not add or remove properties.
- Do not remove or change FileMaker merge insertions (for example `" & $$KPI Card Colours & "` and the `.cards` grid-template-columns expression).

Deliver:
1. Full updated CSS string
2. Full FileMaker `Else If` branch for the new theme
