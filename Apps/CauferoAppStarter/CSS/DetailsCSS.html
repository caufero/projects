# Details Pages CSS Generator (CauferoAppStarter)

## Purpose
This document defines the canonical CSS skeleton for Details Pages in CauferoAppStarter.

A “Details Page” is any WebViewer page that shows one selected record, plus:
- A left summary column (image, status, key fields, buttons)
- A right content column (tabs, forms, subtables, widgets)
- Optional components like wizards, master-detail panels, hierarchical scoring tables, reports, vitals grids, and empty states

The AI agent must generate new Details Page themes by changing CSS values only, while keeping the same selectors and the same property names.

---

## Script Context
- Input: `$$Theme` (or your theme selector variable)
- Output: `$styles` (full CSS stylesheet string)
- Script ends with: `Exit Script [ Text Result: $styles ]`

---

## Hard Rules (CSS Contract)
When creating a new Details Page theme:
1. Keep the exact same selectors.
2. Keep the exact same property names under each selector.
3. Change values only.

Never:
- add selectors
- remove selectors
- rename selectors
- add properties
- remove properties

If a requested visual change would require new selectors or new properties, do not implement it. Achieve the best possible result using value changes only.

---

## Details Page Layout Model
The page is built around a fixed, full-viewport container split into two columns:

1. **Left: Summary Section (25%)**
   - `.summary-section` + `.summary-card`
   - Status badge, image, key fields, QR code
   - Buttons at the bottom (`save`, `cancel`, `third`, and color variants)
   - Optional “summary cards” above buttons

2. **Right: Content Section (75%)**
   - `.content-section` + `.tabs` + `.content`
   - Form grids (1–4 columns)
   - Inputs, selects, textarea, checkbox group
   - Subtables, accordions, alerts, breadcrumbs
   - Optional components (wizard, report layout, master-details, hierarchical scoring table, vitals grid)
   - Optional empty-state message container

All scrolling must be internal (inside cards or content blocks). The viewport must not scroll.

---

## Canonical Details Page CSS Skeleton (Source Of Truth)
The AI must copy this skeleton exactly for every theme and change values only.

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

/* ===== Theming tokens (updated for theme) ===== */
:root {
  --accent: #007bff;
  --accent-light: #66b2ff;
  --accent-strong: #0056b3;
  --row-hover-bg: #e9eef2;
  --row-selected-bg: #d1e7ff;
}

/* Main container styling */
.container {
  width: auto;
  height: auto;
  position: fixed;
  inset: 0;
  margin: 20px !important;
  display: flex;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Left section styling (Summary) */
.summary-section {
  width: 25%;
  padding-right: 20px;
  border-right: 1px solid #e0e0e0;
}

.summary-card {
  background: #edf7ff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.summary-content {
  overflow-y: auto;
  padding-right: 10px;
  height: calc(100% - 120px);
}

.summary-card h2 {
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.summary-info {
  font-size: 13px;
  color: #333;
  line-height: 1.4;
}

.summary-info p {
  margin: 5px 0;
}

.summary-info strong {
  color: #007BB0;
  font-weight: 600;
}

.summary-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: black;
  margin-bottom: 15px;
  display: block;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

/* Status Badge Styling */
.status-badge {
  display: inline-block;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 5px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  border-radius: 12px;
  text-align: center;
  width: fit-content;
}

.status-badge.gray { background-color: #6c757d; }
.status-badge.yellow { background-color: #007BFF; }
.status-badge.green { background-color: #28a745; }
.status-badge.red { background-color: #dc3545; }

.qr-code {
  width: 80px;
  height: auto;
  margin: 15px auto;
  display: block;
}

.section-title {
  font-size: 16px;
  margin-top: 15px;
  font-weight: bold;
}

/* Line styling */
hr {
  border: none;
  border-top: 1px solid #ddd;
  margin-top: auto;
  margin-bottom: 10px;
}

/* Button styling */
.button-container {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.save-button,
.cancel-button,
.third-button,
.button_red,
.button_green,
.button_blue,
.button_yellow,
.button_purple {
  padding: 10px 15px;
  font-size: 13px;
  font-weight: 500;
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.save-button { background-color: #28a745; }
.save-button:hover { background-color: #218838; }

.cancel-button { background-color: #dc3545; }
.cancel-button:hover { background-color: #c82333; }

/* Third Button Styling */
.third-button {
  background-color: #007BFF;
  width: 100%;
  margin-top: 10px;
}
.third-button:hover { background-color: #0056b3; }

/* Add Another Item Button */
.add-another-item-button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
}
.add-another-item-button:hover { background-color: #0056b3; }

.button1 {
  background-color: #FF9800;
  color: #fff;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
}
.button1:hover { background-color: #F57C00; }

.button_red { background-color: #FF4C4C; }
.button_red:hover { background-color: #D43A3A; }

.button_green { background-color: #33CC99; }
.button_green:hover { background-color: #29A87C; }

.button_blue { background-color: #6699FF; }
.button_blue:hover { background-color: #4C7AD6; }

.button_yellow { background-color: #FFD700; }
.button_yellow:hover { background-color: #D4B200; }

.button_purple { background-color: #B266FF; }
.button_purple:hover { background-color: #8A4CD6; }

.save-button_,
.cancel-button_,
.third-button_,
.button_red_,
.button_green_,
.button_blue_,
.button_yellow_,
.button_purple_ {
  padding: 10px 15px;
  font-size: 13px;
  font-weight: 500;
  width: 50%;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid;
  color: inherit;
  transition: color 0.3s, border-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

/* Outline variants */
.save-button_ { color: #28a745; border-color: #28a745; }
.save-button_:hover { color: #218838; border-color: #218838; }

.cancel-button_ { color: #dc3545; border-color: #dc3545; }
.cancel-button_:hover { color: #c82333; border-color: #c82333; }

.third-button_ {
  color: #007BFF;
  border-color: #007BFF;
  width: 100%;
  margin-top: 10px;
}
.third-button_:hover { color: #0056b3; border-color: #0056b3; }

.button_red_ { color: #FF4C4C; border-color: #FF4C4C; }
.button_red_:hover { color: #D43A3A; border-color: #D43A3A; }

.button_green_ { color: #33CC99; border-color: #33CC99; }
.button_green_:hover { color: #29A87C; border-color: #29A87C; }

.button_blue_ { color: #6699FF; border-color: #6699FF; }
.button_blue_:hover { color: #4C7AD6; border-color: #4C7AD6; }

.button_yellow_ { color: #FFD700; border-color: #FFD700; }
.button_yellow_:hover { color: #D4B200; border-color: #D4B200; }

.button_purple_ { color: #B266FF; border-color: #B266FF; }
.button_purple_:hover { color: #8A4CD6; border-color: #8A4CD6; }

/* Right section styling (Tabs and content) */
.content-section {
  width: 75%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  height: 100%;
}

.tabs {
  display: flex;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 10px;
}

.tab {
  padding: 10px 20px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  position: relative;
  transition: color 0.2s ease, border-bottom 0.2s ease;
}

.tab.active {
  color: #1e293b;
  font-weight: 600;
  border-bottom-color: #1e293b;
}

/* Badge styling */
.tab.badge-tab::after {
  content: '5';
  position: absolute;
  top: -5px;
  right: 5px;
  background-color: #dc3545;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 50%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.content {
  padding: 10px 0;
  display: none;
  overflow-y: auto;
  max-height: 100%;
}

.content h3 {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
}

.content p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.form-grid1 { display: grid; grid-template-columns: repeat(1, 1fr); gap: 15px; }
.form-grid2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
.form-grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
.form-grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }

.form-group { margin-bottom: 15px; }
.form-group-2 { margin-bottom: 15px; padding: 0 20px; }

/* Instruction Styling */
.instructions1 {
  background: #e3f2fd;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-left: 5px solid #007BFF;
  margin-bottom: 15px;
  border-radius: 5px;
  position: relative;
  font-size: 14px;
}
.instructions2 {
  background: #f3e5f5;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-left: 5px solid #8E24AA;
  margin-bottom: 15px;
  border-radius: 5px;
  position: relative;
  font-size: 14px;
}
.instructions3 {
  background: #e8f5e9;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-left: 5px solid #28a745;
  margin-bottom: 15px;
  border-radius: 5px;
  position: relative;
  font-size: 14px;
}

.instructions1 h2,
.instructions2 h2,
.instructions3 h2 {
  color: #333;
  font-size: 15px;
  margin-bottom: 5px;
}

label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  display: block;
  margin-bottom: 5px;
}

input[type='text']:not(.combined-inputs-input),
input[type='file']:not(.combined-inputs-input),
input[type='number']:not(.combined-inputs-input),
input[type='email']:not(.combined-inputs-input),
input[type='date']:not(.combined-inputs-input),
textarea {
  width: 100%;
  height: 38px;
  padding: 10px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  background-color: #f9f9f9;
}

textarea {
  height: 150px;
  resize: none;
}

/* Dropdown Styling */
select:not(.combined-inputs-dropdown) {
  width: 100%;
  height: 38px;
  padding: 10px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  appearance: none;
  background-image: url('https://img.playbook.com/EiJ_h1h3ku1Tk5o2UUdY2GR36EdGRYp_FFrAGJtJ9BA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzU5ZmU3Zjk4/LTliMWEtNDZjYy1h/MTA4LWQ5ODI4YmJl/ZDZlZQ');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;
}

/* Container for the Checkbox Group */
.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  padding: 15px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  background-color: #F9FAFB;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  font-family: Arial, sans-serif;
}

.sub-table-container {
  border: 1px solid #ddd;
  border-radius: 0px;
  overflow-y: auto;
}

/* Another Item Table */
.sub-table { width: 100%; border-collapse: collapse; }
.sub-table th,
.sub-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 12px;
}
.sub-table th { background-color: #f2f2f2; font-weight: bold; }
.sub-table tr:nth-child(even) { background-color: #f9f9f9; }

/* Specific column widths */
.sub-table-column-style1 { width: 30%; }
.sub-table-column-style2 { width: 15%; }
.sub-table-column-style3 { width: 10%; }
.sub-table-column-style4 { width: 5%; }

.sub_table_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

/* Sub Table Footer Styling */
.sub_table_footer .total {
  font-size: 18px;
  font-weight: bold;
  color: #dc3545;
}

.sub-table td img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.icon-group {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.view-icon {
  color: #007BFF;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s;
}
.view-icon:hover { color: #0056b3; }

.edit-icon, .delete-icon {
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s;
}

.edit-icon { color: #8E24AA; }
.edit-icon:hover { color: #6A1B9A; }

.delete-icon { color: #dc3545; }
.delete-icon:hover { color: #c82333; }

/* Accordion */
.accordion-container { margin-top: 10px; }
.accordion { border: 1px solid #ddd; border-radius: 5px; margin-bottom: 10px; }
.accordion-header {
  padding: 10px;
  background: #f2f2f2;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}
.accordion-header:hover { background: #e0e0e0; }
.accordion-content { padding: 10px; display: none; background: #fafafa; }

/* Improved Inline Alert */
.alert {
  padding: 15px 20px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}
.alert-title { font-weight: bold; margin-right: 10px; }
.alert i { cursor: pointer; color: #721c24; }
.alert i:hover { color: #491116; }

/* Breadcrumbs Styles */
.breadcrumbs {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 20px;
}
.breadcrumbs::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 8px;
  background: linear-gradient(135deg, #4a90e2, #50e3c2);
  border-radius: 10px 10px 0 0;
  z-index: -1;
}
.breadcrumbs a {
  text-decoration: none;
  color: #4a90e2;
  padding: 10px 15px;
  border-radius: 5px;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
}
.breadcrumbs a:hover { background-color: rgba(74, 144, 226, 0.1); color: #007BFF; }
.breadcrumbs a::after {
  content: '>';
  margin-left: 10px;
  margin-right: 10px;
  color: #aaa;
  font-weight: bold;
}
.breadcrumbs a:last-child::after { content: ''; }
.current {
  color: #555;
  font-weight: bold;
  pointer-events: none;
  position: relative;
  z-index: 1;
}
.icon { margin-right: 5px; font-size: 18px; transition: transform 0.3s; }
.breadcrumbs a:hover .icon { transform: scale(1.2); }

/* Example icon styles - using Font Awesome */
.fa-home:before { content: '\f015'; }
.fa-folder:before { content: '\f07b'; }
.fa-file:before { content: '\f15b'; }
.fa-chevron-right:before { content: '\f054'; }

/* Custom Sign-Up Button for Tab 4 */
.big_button {
  display: flex;
  align-items: center;
  background-color: #4A90E2;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-top: 15px;
}
.big_button span { margin-right: 10px; }
.divider { height: 24px; width: 1px; background-color: white; margin: 0 10px; }
.checkmark { font-size: 16px; }

/* Basic styling for the iframe container */
.map-container {
  display: flex;
  justify-content: center;
  align-items: top;
  align-items: left;
}
iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

/* Gallery Styles */
.gallery-container { width: 45%; margin-left: 30px; }
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.gallery-item img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.gallery-item:hover img { transform: scale(1.05); }
.gallery-item .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 5px 0;
  font-size: 12px;
  display: none;
}
.gallery-item:hover .caption { display: block; }

/* Message container */
.message-container {
  text-align: center;
  padding: 50px 60px;
  animation: fadeIn 0.8s ease-out forwards;
  width: 700px;
  max-width: 100%;
  color: var(--accent-strong, #0056b3);
  background: #ffffff;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  border-radius: 16px;
  margin: auto;
}

/* Headline */
.message-container h1 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  animation: slideInDown 0.8s ease-out;
}

/* Paragraph */
.message-container p {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
  animation: slideInUp 1s ease-out;
}

/* SVG icon */
.message-container .svg-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  fill: currentColor;
  stroke: currentColor;
  color: var(--accent, #007bff) !Important;
  animation: fadeInZoom 1s ease-out;
  transition: color 0.3s ease, transform 0.2s ease;
}
.message-container .svg-icon:hover { color: var(--accent-strong, #0056b3); transform: scale(1.04); }

/* Button */
.cta-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 14px 30px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, var(--accent, #007bff), var(--accent-strong, #0056b3));
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease;
}
.cta-btn:hover {
  background: linear-gradient(135deg, var(--accent-strong, #0056b3), var(--accent, #007bff));
  transform: translateY(-2px);
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInZoom {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes slideInDown {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes slideInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Row and Card Styling */
.cards_row { display: flex; gap: 20px; margin-top: 10px; }
.note-card {
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #e0f7fa;
  display: flex;
  flex-direction: column;
}
.note-header {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
}
.note-content { flex-grow: 1; overflow-y: auto; max-height: 300px; }
.note-content ul { list-style-type: none; padding: 0; margin: 0; }
.note-content li {
  padding: 10px;
  margin: 10px 0;
  background-color: #ffffff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.note-content li:hover { transform: scale(1.02); }
.note-content button {
  background: transparent;
  border: none;
  font-size: 18px;
  color: #007bff;
  cursor: pointer;
}
.note-content button:hover { color: #0056b3; }

/* Rating */
.rating {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  direction: rtl;
}
.rating input { display: none; }
.rating label {
  font-size: 30px;
  color: #ddd;
  cursor: pointer;
  transition: color 0.3s;
}
.rating label:hover,
.rating label:hover ~ label { color: #ffc107; }
.rating input:checked ~ label { color: #ffc107; }
.rating input:checked + label:hover,
.rating input:checked + label:hover ~ label { color: #ffab00; }
.rating label:hover ~ label { color: #ddd; }

/* Wizard */
.wizard-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.stepper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: linear-gradient(135deg, #007bff, #4c9fff);
  color: #fff;
  position: relative;
}
.step { text-align: center; flex: 1; position: relative; margin-bottom: -25px; }
.step .icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
  color: #007bff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto 8px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.step.active .icon {
  background-color: #fff;
  color: #007bff;
  border: 2px solid #007bff;
  transform: scale(1.2);
  box-shadow: 0 0 10px 3px rgba(0, 123, 255, 0.6);
}
.step .line {
  position: absolute;
  top: 25px;
  left: 50%;
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  z-index: -1;
  transition: background-color 0.3s ease;
}
.step.active + .line { background-color: #fff; }
.step p { font-size: 14px; font-weight: bold; margin-top: 8px; color: #fff; }

.step-wizard_content { display: none; }
.step-wizard_content.active { display: block; }

.wizard_content {
  padding: 20px;
  animation: fadeIn 0.3s ease;
  flex: 1;
  overflow-y: auto;
}
.wizard_content > .step-wizard_content > div.table-top-legend { display: flex !important; }
.wizard_content div.active { display: block; }

.wizard_buttons {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f9f9f9;
}
.wizard_button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.wizard_button:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.wizard_button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  box-shadow: none;
}

/* Toggles */
.toggle-container { display: flex; align-items: center; gap: 10px; font-size: 16px; color: #333; }
.toggle-switch { display: inline-block; width: 50px; height: 25px; position: relative; }
.toggle-switch input { opacity: 0; width: 0; height: 0; }
.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  border-radius: 25px;
  transition: background-color 0.3s;
}
.slider::before {
  content: '';
  position: absolute;
  height: 21px; width: 21px;
  left: 2px; bottom: 2px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}
input:checked + .slider { background-color: #4caf50; }
input:checked + .slider::before { transform: translateX(25px); }
.status { font-weight: bold; }

/* Segmented Control */
.segmented-control {
  display: flex;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 38px;
}
.segmented-control button {
  flex: 1;
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s, color 0.3s;
}
.segmented-control button.active { background-color: #4caf50; color: white; }
.segmented-control button:not(:last-child) { border-right: 1px solid #ccc; }
.segmented-control button:hover { background-color: #bfbfbf; }

/* Report */
.report_header {
  border-bottom: 2px solid #d6d6d6;
  padding-bottom: 15px;
  margin-bottom: 25px;
  text-align: center;
  font-family: Arial, sans-serif;
}
.report_header .company-info { font-size: 14px; color: #555; margin-bottom: 10px; }
.report_header .title { font-size: 20px; font-weight: bold; color: #1e293b; text-transform: uppercase; }
.report_header .date { font-size: 14px; color: #666; }

.report_table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 13px;
  color: #333;
}
.report_table th,
.report_table td {
  border: 1px solid #e0e0e0;
  padding: 8px 12px;
  text-align: left;
}
.report_table th {
  background-color: #edf7ff;
  font-weight: bold;
  color: #2c3e50;
  text-transform: uppercase;
  font-size: 13px;
}
.report_cell_highlight { font-weight: bold; color: #2c3e50; }
.report_table_footer { text-align: right; margin-top: 25px; font-size: 16px; font-weight: bold; color: #444; }
.report_table_footer span { color: #28a745; }

.report_footer {
  text-align: center;
  font-size: 13px;
  color: #555;
  padding: 20px 0;
  background-color: #f7f9f9;
  border-top: 1px solid #e0e0e0;
}
.report_footer p { margin: 0px 0; }
.report_footer a { color: #007BFF; text-decoration: none; font-weight: bold; }
.report_footer a:hover { text-decoration: underline; }

/* Grid Numbers */
.grid-numbers-container {
  display: grid;
  margin-top: 20px;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
.grid-number {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007BFF;
  color: #fff;
  font-size: 1.5rem;
  height: 60px;
  width: 60px;
  border-radius: 6px;
  border: 1px solid #0056B3;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.grid-number:hover { background-color: #0056B3; transform: scale(1.05); }

/* Image + Text Grid */
.imagetext-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 100%;
}
.imagetext-grid-item {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background: linear-gradient(135deg, #ffffff, #e9ebef);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}
.imagetext-grid-item:hover { box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1); }
.imagetext-grid-photo {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  border: 2px solid #007bff;
}
.imagetext-grid-photo img { width: 100%; height: 100%; object-fit: cover; }
.imagetext-grid-info { display: flex; flex-direction: column; gap: 2px; }
.imagetext-grid-info1 { font-size: 0.85rem; font-weight: bold; color: #1e293b; }
.imagetext-grid-info2 { font-size: 0.75rem; color: #4b5563; }
.imagetext-grid-info3 { font-size: 0.7rem; color: #374151; }
.email {
  font-size: 0.75rem;
  color: #2563eb;
  text-decoration: none;
  transition: color 0.2s ease;
  word-break: break-word;
}
.email:hover { color: #1d4ed8; text-decoration: underline; }

/* Combined Inputs */
.combined-inputs-container {
  width: 100%;
  height: 38px;
  padding: 10px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.combined-inputs-input {
  border: none;
  outline: none;
  text-align: center;
  font-size: 14px;
  background-color: transparent;
  color: #333;
}
.combined-inputs-dropdown {
  padding: 10px;
  border: none;
  outline: none;
  font-size: 12px;
  text-align: center;
  color: #333;
  background-color: transparent;
  appearance: none;
}

/* Flatpickr Top Banner Styling */
.flatpickr-months { display: flex; align-items: center; justify-content: center; padding: 8px 0; gap: 12px; }
.flatpickr-current-month { display: flex; align-items: center; justify-content: center; gap: 12px; line-height: 1.2; }
.flatpickr-monthDropdown-months {
  width: 120px;
  height: 36px;
  padding: 4px 8px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
}
.flatpickr-yearDropdown-years {
  position: relative;
  width: 90px;
  height: 36px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flatpickr-current-month input.cur-year {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  border: none;
  box-sizing: border-box;
  -moz-appearance: textfield;
}
.flatpickr-current-month input.cur-year::-webkit-inner-spin-button,
.flatpickr-current-month input.cur-year::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.flatpickr-yearDropdown-years::after {
  content: '▲';
  position: absolute;
  right: 4px;
  top: 4px;
  font-size: 10px;
  cursor: pointer;
  pointer-events: all;
}
.flatpickr-yearDropdown-years::before {
  content: '▼';
  position: absolute;
  right: 4px;
  bottom: 4px;
  font-size: 10px;
  cursor: pointer;
  pointer-events: all;
}
.flatpickr-prev-month,
.flatpickr-next-month {
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
}
.flatpickr-prev-month { margin-right: 8px; }
.flatpickr-next-month { margin-left: 8px; }
.flatpickr-monthDropdown-months,
.flatpickr-yearDropdown-years,
.flatpickr-current-month input.cur-year {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.flatpickr-calendar {
  margin: 0;
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
}

/* Master Details */
.master-details-container { display: flex; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
.master { background: #f7f9fc; border-right: 1px solid #ddd; overflow-y: auto; }
.master-item {
  display: flex;
  align-items: center;
  padding: 5px 5px;
  border-bottom: 1px solid #ececec;
  cursor: pointer;
  transition: background-color 0.3s ease, border-left 0.3s ease;
  border-left: 4px solid transparent;
}
.master-item:hover { background-color: #f1f7ff; }
.master-item.selected {
  background-color: #e8f0fe;
  border-left: 4px solid #007BFF;
  font-weight: 600;
}
.master-item img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 10px;
  object-fit: cover;
  border: 1px solid #ccc;
}
.master-item-text { display: flex; flex-direction: column; }
.master-item-text1 { font-weight: 600; font-size: 0.85em; color: #2c3e50; }
.master-item-text2 { font-size: 0.75em; color: #666; }

.details { padding: 20px; background-color: #fff; overflow-y: auto; }
.details h2 { margin-top: 0; font-size: 1.2em; color: #2c3e50; }
.details p { font-size: 0.8em; line-height: 1.5; color: #444; }
.details img { max-width: 100%; border-radius: 3px; border: 1px solid #ddd; }

/* Responsive Design */
@media (max-width: 768px) {
  .container { flex-direction: column; }
  .master, .details { width: 100%; height: 50%; }
}

/* Master Header Styling */
.master-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ececec;
  background-color: #f7f9fc;
}
.master-header-search-field {
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

/* Score Labels */
.table-top-legend {
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  width: 100%;
  font-size: 0.9em;
  text-align: center;
  gap: 12px;
  flex-wrap: wrap;
}
.table-top-legend div {
  padding: 10px 15px;
  border-radius: 6px;
  flex: 1;
  margin: 5px;
  background-color: #f9fafc;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.table-top-legend .score-1 { background: #f8d7da; color: #721c24; }
.table-top-legend .score-2 { background: #fff3cd; color: #856404; }
.table-top-legend .score-3 { background: #d4edda; color: #155724; }
.table-top-legend .score-4 { background: #d1ecf1; color: #0c5460; }
.table-top-legend .score-5 { background: #f5e6fe; color: #6f42c1; }

/* Checkmark Radio Buttons */
.radio-cell { text-align: center; position: relative; }
.radio-cell input[type='radio'] { display: none; }
.radio-cell label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: 2px solid #007BFF;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.radio-cell input[type='radio']:checked + label {
  background-color: #007BFF;
  border-color: #0056b3;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
}
.radio-cell label::after {
  content: '';
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  position: absolute;
  width: 100%;
  height: 100%;
}
.radio-cell input[type='radio']:checked + label::after {
  content: '\f00c';
  color: white;
  opacity: 1;
  transform: scale(1);
}
.radio-cell label:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  box-shadow: 0 0 10px rgba(0, 86, 179, 0.4);
}

/* Hierarchical Table Container */
.hierarchical_table_container {
  width: 100%;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
}
.hierarchical_table { width: 100%; border-collapse: collapse; }
.hierarchical_table thead {
  position: sticky;
  top: 0;
  background-color: #007BFF;
  z-index: 10;
}
.hierarchical_table th {
  background-color: #007BFF;
  color: #fff;
  text-align: center;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
}
.hierarchical_table td {
  padding: 12px;
  border-bottom: 1px solid #f1f1f1;
  text-align: center;
  vertical-align: middle;
  font-size: 13px;
}
.hierarchical_table_record_category {
  font-weight: bold;
  text-align: left;
  padding: 15px;
  color: #6A1B9A;
  background-color: #f9fafc;
  font-size: 14px;
  border-left: 5px solid #8E24AA;
}
.hierarchical_table_row { background-color: #ffffff; }
.hierarchical_table_record { text-align: left; padding: 12px; font-size: 13px; }
.hierarchical_table_record_title {
  font-weight: bold;
  font-size: 13px;
  color: #333;
  display: block;
  margin-bottom: 4px;
}
.hierarchical_table_record_description { font-size: 12px; color: #7f8c8d; }
.left-align { text-align: left !important; }
.hierarchical_table_action_icons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
  margin-right: 5%;
}
.hierarchical_table_action_icons button {
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  color: #007BFF;
  background: none;
  transition: color 0.3s ease;
}
.hierarchical_table_action_icons button:hover { color: #0056b3; }
.hierarchical_table tr:hover { background-color: #f0f8ff; transition: background-color 0.3s ease; }

/* Summary Cards Above Buttons */
.summary-cards { display: flex; flex-direction: column; gap: 15px; margin: 5px 0; }
.summary-card-item {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.summary-card-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
.summary-card-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: #007BFF;
  margin-bottom: 8px;
}
.summary-card-item p { font-size: 14px; color: #555; margin: 0; }
.summary-card-item strong { font-size: 18px; color: #333; }
.summary-section hr {
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ddd;
}

/* Status Chip Styling */
.status { display: inline-block; padding: 5px 10px; border-radius: 12px; font-size: 12px; font-weight: 500; }
.status.gray { background-color: #6c757d; color: #fff; }
.status.yellow { background-color: #f0ad4e; color: #fff; }
.status.green { background-color: #5cb85c; color: #fff; }
.status.red { background-color: #dc3545; color: #fff; }

/* List Container */
.list-container {
  background: #F9FAFB;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.list-item {
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  border-bottom: 1px solid #E0E0E0;
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
}
.list-item:last-child { border-bottom: none; }
.list-item:hover {
  background: #EDF7FF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.list-item.selected {
  background: #E8F5E9;
  box-shadow: inset 0 0 5px rgba(40, 167, 69, 0.2);
}

/* Checkbox Styling */
.list-checkbox { margin-top: 15px; margin-right: 12px; }
.list-checkbox input { visibility: hidden; position: absolute; }
.list-checkbox .checkbox-label {
  width: 20px;
  height: 20px;
  border: 2px solid #D1D5DB;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;
}
.list-checkbox input:checked + .checkbox-label {
  background: #4A90E2;
  border-color: #4A90E2;
}
.list-checkbox .checkbox-label::after {
  content: '';
  position: absolute;
  top: 0px;
  left: 4px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(0);
  transition: transform 0.2s ease;
}
.list-checkbox input:checked + .checkbox-label::after {
  transform: rotate(45deg) scale(1);
}

/* Record Details Styling */
.item-details { flex-grow: 1; }
.item-title { font-size: 16px; font-weight: bold; margin-bottom: 4px; color: #333; }
.item-subtitle { font-size: 14px; color: #555; }
.item-description { font-size: 12px; color: #888; margin-top: 4px; }

/* Footer */
.list-footer {
  margin-top: auto;
  text-align: center;
  padding: 12px;
  font-size: 14px;
  background: #FFFFFF;
  color: #666;
  border-top: 1px solid #E0E0E0;
  border-radius: 0 0 8px 8px;
}
.list-footer-highlight { color: #28A745; font-weight: bold; }

/* Grid Layout */
.vitals_grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; justify-content: center; }
@media (max-width: 1024px) { .vitals_grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) { .vitals_grid { grid-template-columns: repeat(1, 1fr); } }

/* Vital Card Styling */
.vital_card {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.vital_card:hover { box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12); }

.vital-input {
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.8rem;
  font-weight: bold;
  width: 75px;
  text-align: center;
  color: #007BFF;
  transition: color 0.3s ease-in-out;
}
.vital-label { font-size: 0.9rem; font-weight: 600; color: #333; }
.vital-unit { font-size: 0.8rem; color: #666; }

.vital_card input[type='number'],
.vital_card input[type='text'] {
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
  padding: 0 !important;
  font-size: 1.8rem !important;
  font-weight: bold !important;
  text-align: center !important;
  color: #007BFF !important;
  width: 100px !important;
}

.vital_card .bp-slash {
  font-size: 1.8rem;
  font-weight: bold;
  color: #007BFF;
  padding: 0 4px;
}

.vital_icon { font-size: 3rem; padding: 8px; border-radius: 8px; }
.height-icon { color: #007BFF; background-color: #E3F2FD; }
.weight-icon { color: #28A745; background-color: #E8F5E9; }
.bmi-icon { color: #8E44AD; background-color: #F3E5F5; }
.temp-icon { color: #E74C3C; background-color: #FDECEA; }
.bp-icon { color: #D35400; background-color: #FBE7DC; }
.pulse-icon { color: #F39C12; background-color: #FDF3D9; }
.resp-icon { color: #16A085; background-color: #E0F5F5; }
.oxygen-icon { color: #3498DB; background-color: #E4F0FA; }
.glucose-icon { color: #E67E22; background-color: #FDF2E0; }
~~~

---

## Contract Manifest (Selectors and Property Names)
When generating a new theme, the AI must ensure every selector below exists and keeps the same property names.

### 1) Global Base
- `*`: box-sizing, margin, padding, font-family
- `body`: display, justify-content, align-items, background-color, height, padding, overflow
- `:root`: --accent, --accent-light, --accent-strong, --row-hover-bg, --row-selected-bg

### 2) Container + Two-Column Layout
- `.container`: width, height, position, inset, margin, display, padding, background, border-radius, box-shadow, overflow
- `.summary-section`: width, padding-right, border-right
- `.content-section`: width, padding-left, display, flex-direction, overflow-y, height

### 3) Summary Card
- `.summary-card`: background, padding, border-radius, box-shadow, height, display, flex-direction, overflow, position
- `.summary-content`: overflow-y, padding-right, height
- `.summary-card h2`: font-size, color, text-align, margin-bottom
- `.summary-info`: font-size, color, line-height
- `.summary-info p`: margin
- `.summary-info strong`: color, font-weight
- `.summary-image`: width, height, object-fit, background, margin-bottom, display, border-radius, box-shadow

### 4) Status Badge + QR + Divider
- `.status-badge`: display, margin, margin-top, margin-bottom, padding, font-size, font-weight, color, border-radius, text-align, width
- `.status-badge.gray/.yellow/.green/.red`: background-color
- `.qr-code`: width, height, margin, display
- `.section-title`: font-size, margin-top, font-weight
- `hr`: border, border-top, margin-top, margin-bottom

### 5) Buttons
- `.button-container`: margin-top, display, justify-content, gap
- `.save-button, .cancel-button, .third-button, .button_red, .button_green, .button_blue, .button_yellow, .button_purple`
  - padding, font-size, font-weight, width, height, border, border-radius, cursor, color, transition, display, align-items, justify-content, gap
- Each filled button + hover selector keeps background-color changes
- `.add-another-item-button`: background-color, color, padding, font-size, border, border-radius, cursor, transition, margin-top, width, display, align-items, gap
- `.button1`: background-color, color, padding, font-size, border, border-radius, cursor, transition, margin-top, width, display, align-items, gap
- Outline button group: `.save-button_ ... .button_purple_` with their color/border-color + hover

### 6) Tabs + Content Scroll
- `.tabs`: display, border-bottom, margin-bottom
- `.tab`: padding, font-size, color, cursor, border-bottom, position, transition
- `.tab.active`: color, font-weight, border-bottom-color
- `.tab.badge-tab::after`: content, position, top, right, background-color, color, font-size, font-weight, padding, border-radius, box-shadow
- `.content`: padding, display, overflow-y, max-height
- `.content h3`: font-size, font-weight, color, margin-bottom
- `.content p`: color, font-size, line-height, margin-bottom

### 7) Form Grid + Inputs
- `.form-grid1/2/3/4`: display, grid-template-columns, gap
- `.form-group`: margin-bottom
- `.form-group-2`: margin-bottom, padding
- `.instructions1/2/3`: background, padding, padding-left, padding-right, border-left, margin-bottom, border-radius, position, font-size
- `.instructions1 h2, .instructions2 h2, .instructions3 h2`: color, font-size, margin-bottom
- `label`: font-size, font-weight, color, display, margin-bottom
- `input[type=...]:not(.combined-inputs-input), textarea`: width, height, padding, font-size, color, border, border-radius, outline, background-color
- `textarea`: height, resize
- `select:not(.combined-inputs-dropdown)`: width, height, padding, font-size, color, border, border-radius, outline, appearance, background-image, background-repeat, background-position, background-size
- `.checkbox-group`: display, grid-template-columns, padding, border, border-radius, background-color, box-shadow, margin-top, font-family

### 8) Subtables + Action Icons
- `.sub-table-container`: border, border-radius, overflow-y
- `.sub-table`: width, border-collapse
- `.sub-table th, .sub-table td`: border, padding, text-align, font-size
- `.sub-table th`: background-color, font-weight
- `.sub-table tr:nth-child(even)`: background-color
- `.sub-table-column-style1/2/3/4`: width
- `.sub_table_footer`: display, justify-content, align-items, margin-top
- `.sub_table_footer .total`: font-size, font-weight, color
- `.sub-table td img`: width, height, object-fit
- `.icon-group`: display, gap, justify-content, align-items
- `.view-icon` + hover: color, font-size, cursor, transition
- `.edit-icon` + hover: font-size, cursor, transition, color
- `.delete-icon` + hover: font-size, cursor, transition, color

### 9) Accordions + Alerts + Breadcrumbs
- `.accordion-container`, `.accordion`, `.accordion-header`, `.accordion-content`
- `.alert`, `.alert-title`, `.alert i`
- `.breadcrumbs` plus pseudo-element and link styling
- `.current`, `.icon`, Font Awesome `:before` rules

### 10) Media / Gallery / Empty State
- `.map-container`, `iframe`
- `.gallery-container`, `.gallery`, `.gallery-item`, `.gallery-item img`, `.caption`
- `.message-container`, `.message-container h1`, `.message-container p`, `.message-container .svg-icon`, `.cta-btn`
- `@keyframes fadeIn`, `fadeInZoom`, `slideInDown`, `slideInUp`

### 11) Cards, Rating, Wizard, Toggles, Segments
- `.cards_row`, `.note-card`, `.note-header`, `.note-content` and list items
- `.rating` group (inputs, labels, hover and checked behavior)
- `.wizard-container`, `.stepper`, `.step`, `.step .icon`, `.step.active .icon`, `.step .line`, `.step.active + .line`, `.wizard_content`, `.wizard_buttons`, `.wizard_button`
- Toggle group: `.toggle-container`, `.toggle-switch`, `.slider`, `.slider::before`, `input:checked + .slider`
- `.segmented-control` and its buttons

### 12) Reports + Grid Numbers + ImageText Grid
- `.report_header`, `.report_table`, `.report_footer`, and sub-elements
- `.grid-numbers-container`, `.grid-number`
- `.imagetext-grid-container` and its parts
- `.combined-inputs-*`

### 13) Flatpickr Styling
- `.flatpickr-months`, `.flatpickr-current-month`, month/year dropdown classes, `::before/::after` arrows, nav arrows, `.flatpickr-calendar`

### 14) Master-Details + Score Legend + Radio Checkmarks
- `.master-details-container`, `.master`, `.master-item` and states, `.details`
- `.master-header`, `.master-header-search-field`
- `.table-top-legend` + `.score-1..5`
- `.radio-cell` group + checkmark animation

### 15) Hierarchical Table
- `.hierarchical_table_container`, `.hierarchical_table`, sticky header, category row, record title/description, action icons, hover

### 16) List Selector Panel
- `.list-container`, `.list-item` and selected, `.list-checkbox` + label, `.item-*`, `.list-footer`

### 17) Vitals Grid
- `.vitals_grid` + media queries
- `.vital_card`, `.vital-input`, `.vital-label`, `.vital-unit`, overrides for inputs, `.vital_icon` and icon color classes

---

## Theme Creation Procedure
When creating a new Details Page theme:
1. Choose a unique theme name (Title Case).
2. Copy the canonical Details Page CSS skeleton exactly.
3. Adjust values in this order:
   - `:root` tokens first (accent family and selection/hover washes)
   - Base surfaces (`body`, `.container`, `.summary-card`, `.content-section`)
   - Buttons (filled and outline variants)
   - Tabs (active border and text)
   - Form controls (input/select backgrounds, borders, focus feel if any)
   - Tables and cards (subtables, hierarchical table, wizard header gradient)
   - Special components (breadcrumbs gradient, empty state, vitals icon colors)
4. Ensure:
   - readability is strong
   - hover and selection are obvious
   - internal scrolling works (content areas scroll, viewport does not)
   - spacing and alignment stay clean in both summary and content columns

---

## FileMaker Script Branch Template
Add a new branch in the Details Page CSS generator:

~~~text
Else If [ $$Theme = "New Details Theme Name" ]
  Set Variable [ $styles ; Value: "PASTE FULL UPDATED DETAILS CSS STRING HERE" ]
End If
~~~

---

## AI Request Template
Create a new Details Page theme using the canonical Details Page CSS in this document.

Theme Name: <New Theme Name>
Mode: <Light or Dark>
Vibe Keywords: <example: premium, calm, modern, sharp>

Rules:
- Copy the canonical Details Page CSS exactly.
- Change values only.
- Do not add, remove, or rename selectors.
- Do not add or remove properties.

Deliver:
1. Full updated CSS string
2. Full FileMaker `Else If` branch for the new theme
