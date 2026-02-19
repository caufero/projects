# Modal Pages CSS Generator (CauferoAppStarter)

## Purpose
This document defines the canonical CSS skeleton for Modal Pages in CauferoAppStarter.

A “Modal Page” is any WebViewer page that fills the viewport and behaves like a focused overlay screen, usually used for:
- creating or editing a record
- quick workflows (wizard steps)
- confirmations and approvals
- pickers and selectors
- embedded master-detail panels
- short reports or summary dashboards inside a modal shell

The AI agent must generate new Modal Page themes by changing CSS values only, while keeping the same selectors and the same property names.

---

## Script Context
- Input: `$$Theme` (or your theme selector variable)
- Output: `$styles` (full CSS stylesheet string)
- Script ends with: `Exit Script [ Text Result: $styles ]`

---

## Hard Rules (CSS Contract)
When creating a new Modal Page theme:
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

## Modal Page Layout Model
The page is built around a full-viewport modal shell:

1. **Body (Viewport)**
   - `body` is locked to viewport height.
   - The viewport must not scroll.

2. **Modal Shell**
   - `.modal` fills the viewport and contains header, body, footer.
   - `.modal` uses internal layout and internal scrolling only.

3. **Header**
   - `.modal-header` is the title zone.
   - Decorative gradient underline is done via `.modal-header::after`.

4. **Scrollable Content**
   - `.modal-body` is the primary scroll container (`overflow-y: auto`).

5. **Footer**
   - `.modal-footer` holds modal action buttons and stays visible while content scrolls.

6. **Optional Embedded Components**
   This canonical skeleton also includes shared components that can be used inside modals, such as:
   - two-column summary + content split (`.container`, `.summary-section`, `.content-section`)
   - tabs
   - form grids and inputs
   - subtables and icons
   - alerts, accordions, breadcrumbs
   - gallery, empty state, wizard, rating
   - flatpickr styling
   - master-detail panels
   - list selector panel
   - vitals grid

All scrolling must be internal. The modal page must not allow viewport scrolling.

---

## Canonical Modal Page CSS Skeleton (Source Of Truth)
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
    background-color: #f3f4f6;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.modal {
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow: hidden;
}

.modal-header {
    color: #4A90E2;
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.5px;
    position: relative;
}

.modal-header::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #4A90E2, #50E3C2);
    position: absolute;
    bottom: 0;
    left: 0;
}

.modal-body {
    flex: 1;
    padding: 20px;
    background-color: #F9FAFB;
    overflow-y: auto;
}

.modal-footer {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    border-top: 1px solid #E0E0E0;
    background: #fff;
}

/* Button Styling */
.modal-footer .button {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    transition: background-color 0.3s, box-shadow 0.3s;
}

.modal-footer .button.save {
    background-color: #28A745;
}

.modal-footer .button.save:hover {
    background-color: #218838;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-footer .button.cancel {
    background-color: #DC3545;
}

.modal-footer .button.cancel:hover {
    background-color: #C82333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-footer .button.secondary {
    background-color: #007BFF;
}

.modal-footer .button.secondary:hover {
    background-color: #0056B3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


      /* Main container styling */
      .container {
         width: 100%;
         height: 100%;
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
	height: calc(100% - 120px); /* Adjusted for additional spacing */
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
         width: 300px;
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

.status-badge.gray {
    background-color: #6c757d; /* Neutral gray for draft */
}

.status-badge.yellow {
	background-color: #007BFF; /* Blue for pending */
}

.status-badge.green {
	background-color: #28a745; /* Green for approved */
}

.status-badge.red {
	background-color: #dc3545; /* Red for rejected */
}

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

.save-button {
         background-color: #28a745;
}

.save-button:hover {
         background-color: #218838;
}

.cancel-button {
         background-color: #dc3545;
}

.cancel-button:hover {
         background-color: #c82333;
}


/* Third Button Styling */
.third-button {
	background-color: #007BFF; /* Consistent blue for third button */
	width: 100%;
	margin-top: 10px;
}

.third-button:hover {
	background-color: #0056b3; /* Darker blue for hover */
}

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

      .add-another-item-button:hover {
         background-color: #0056b3;
      }

.button1 {
    background-color: #FF9800; /* Bright orange to complement the blue and green theme */
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

.button1:hover {
    background-color: #F57C00; /* Darker orange for hover effect */
}

.button_red {
    background-color: #FF4C4C; /* Bright and bold red for high visibility */
}

.button_red:hover {
    background-color: #D43A3A; /* Slightly darker red for hover effect */
}

.button_green {
    background-color: #33CC99; /* Vibrant mint green for a fresh look */
}

.button_green:hover {
    background-color: #29A87C; /* Deeper green for hover effect */
}

.button_blue {
    background-color: #6699FF; /* Bright periwinkle blue for distinction */
}

.button_blue:hover {
    background-color: #4C7AD6; /* Slightly muted blue for hover effect */
}

.button_yellow {
    background-color: #FFD700; /* Radiant golden yellow for prominence */
}

.button_yellow:hover {
    background-color: #D4B200; /* Rich mustard yellow for hover effect */
}

.button_purple {
    background-color: #B266FF; /* Bright lavender purple for uniqueness */
}

.button_purple:hover {
    background-color: #8A4CD6; /* Softer but rich purple for hover effect */
}

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
         overflow-y: auto; /* Allow vertical scrolling */
         max-height: 80vh; /* Limit the height and make it scrollable */
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

.form-grid1 {
         display: grid;
         grid-template-columns: repeat(1, 1fr);
         gap: 15px;
}

.form-grid2 {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         gap: 15px;
}

.form-grid3 {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         gap: 15px;
}

.form-grid4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}

      .form-group {
         margin-bottom: 15px;
      }

      .form-group-2 {
         margin-bottom: 15px;
         padding: 0 20px;
      }

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
	color: #333; /* Consistent dark text color for titles */
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

/* Main label */
label.main-label {
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
    font-size: 16px;
    color: #333;
}

/* Individual Checkbox Wrapper */
.checkbox-group label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #555;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 6px;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

/* Hover effect for checkbox label */
.checkbox-group label:hover {
    background-color: #EDF7FF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Checkbox Input Styling */
.checkbox-group input[type='checkbox'] {
    accent-color: #4A90E2; /* Matches the modal-header gradient */
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    cursor: pointer;
}

/* Checked State */
.checkbox-group input[type='checkbox']:checked + span {
    font-weight: bold;
    color: #4A90E2;
}

/* Focus State */
.checkbox-group input[type='checkbox']:focus {
    outline: 2px solid #50E3C2;
    border-radius: 4px;
}

/* Disabled State */
.checkbox-group input[type='checkbox']:disabled + span {
    color: #CCC;
    cursor: not-allowed;
}

/* Checkbox Text Span */
.checkbox-group label span {
    font-size: 14px;
    color: #333;
    flex-grow: 1;
}


      /* Another Item Table */
      .sub-table {
	     width: 100%;
	     border-collapse: collapse;
      }

      .sub-table th,
      .sub-table td {
         border: 1px solid #ddd;
         padding: 8px;
         text-align: left;
         font-size: 12px;
      }

      .sub-table th {
         background-color: #f2f2f2;
         font-weight: bold;
      }

      .sub-table tr:nth-child(even) {
         background-color: #f9f9f9;
      }

      /* Specific column widths */
      .sub-table-column-style1 {
         width: 30%;
      }

      .sub-table-column-style2 {
         width: 15%;
      }

      .sub-table-column-style3 {
         width: 10%;
      }

.sub-table-column-style4 {
	width: 5%;
}

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
	color: #dc3545; /* Red for total indicator */
}

.sub-table td img {
 width: 50px;
 height: 50px;
 object-fit: cover;
}

.icon-group {
   display: flex;
   gap: 15px; /* Space between icons */
   justify-content: center;
   align-items: center;
}

.view-icon {
   color: #007BFF; /* Consistent blue */
   font-size: 16px;
   cursor: pointer;
   transition: color 0.3s;
}

.view-icon:hover {
   color: #0056b3; /* Darker blue on hover */
}

.edit-icon, .delete-icon {
   font-size: 16px;
   cursor: pointer;
   transition: color 0.3s;
}

.edit-icon {
   color: #8E24AA; /* Purple for edit */
}

.edit-icon:hover {
   color: #6A1B9A; /* Darker purple on hover */
}

.delete-icon {
   color: #dc3545; /* Red for delete */
}

.delete-icon:hover {
   color: #c82333; /* Darker red on hover */
}


      /* Accordion */
      .accordion-container {
         margin-top: 10px;
      }

      .accordion {
         border: 1px solid #ddd;
         border-radius: 5px;
         margin-bottom: 10px;
      }

      .accordion-header {
         padding: 10px;
         background: #f2f2f2;
         cursor: pointer;
         display: flex;
         justify-content: space-between;
         align-items: center;
         font-weight: 500;
      }

      .accordion-header:hover {
         background: #e0e0e0;
      }

      .accordion-content {
         padding: 10px;
         display: none;
         background: #fafafa;
      }

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

      .alert-title {
         font-weight: bold;
         margin-right: 10px;
      }

      .alert i {
         cursor: pointer;
         color: #721c24;
      }

      .alert i:hover {
         color: #491116;
      }

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

      .breadcrumbs a:hover {
         background-color: rgba(74, 144, 226, 0.1);
         color: #007BFF;
      }

      .breadcrumbs a::after {
         content: '>';
         margin-left: 10px;
         margin-right: 10px;
         color: #aaa;
         font-weight: bold;
      }

      .breadcrumbs a:last-child::after {
         content: '';
      }

      .current {
         color: #555;
         font-weight: bold;
         pointer-events: none;
         position: relative;
         z-index: 1;
      }

      .icon {
         margin-right: 5px;
         font-size: 18px;
         transition: transform 0.3s;
      }

      .breadcrumbs a:hover .icon {
         transform: scale(1.2);
      }

      /* Example icon styles - using Font Awesome */
      .fa-home:before {
         content: '\f015';
      }

      .fa-folder:before {
         content: '\f07b';
      }

      .fa-file:before {
         content: '\f15b';
      }

      .fa-chevron-right:before {
         content: '\f054';
      }

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

      .big_button span {
         margin-right: 10px;
      }

      .divider {
         height: 24px;
         width: 1px;
         background-color: white;
         margin: 0 10px;
      }

      .checkmark {
         font-size: 16px;
      }


    /* Basic styling for the iframe container */
    .map-container {
      width: 50%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: top;
      align-items: left;
    }

    iframe {
      width: 100%;
      height: 70%;
      border: none;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }

    /* Gallery Styles */
    .gallery-container {
      width: 45%;
      margin-left: 30px;
    }

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

    .gallery-item:hover img {
      transform: scale(1.05);
    }

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

    .gallery-item:hover .caption {
      display: block;
    }

    /* No Product Found Message Styles */
   .message-container {
      text-align: center;
      background: #ffffff;
      padding: 50px 60px;
      border-radius: 16px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
      animation: fadeIn 0.8s ease-out forwards;
      max-width: 500px;
      position: absolute;
      top: 25%;
      left: 45%;
      transform: translate(-50%, -50%);
    }

      .message-container h1 {
         font-size: 28px;
         color: #333;
         margin-bottom: 10px;
         animation: slideInDown 0.8s ease-out;
      }

      .message-container p {
         font-size: 16px;
         color: #555;
         margin-bottom: 20px;
         animation: slideInUp 1s ease-out;
      }

      .message-container img {
         width: 100px;
         margin-bottom: 20px;
         animation: fadeInZoom 1s ease-out;
      }

      .cta-btn {
         display: inline-block;
         margin-top: 20px;
         padding: 14px 30px;
         font-size: 16px;
         font-weight: 600;
         color: #ffffff;
         background: linear-gradient(135deg, #007BFF, #0056D2);
         border: none;
         border-radius: 8px;
         cursor: pointer;
         text-decoration: none;
         box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
         transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
      }

      .cta-btn:hover {
         background: linear-gradient(135deg, #0056D2, #007BFF);
         transform: translateY(-2px);
         box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
      }

      @keyframes fadeIn {
         0% {
            opacity: 0;
            transform: translateY(20px);
         }

         100% {
            opacity: 1;
            transform: translateY(0);
         }
      }

      @keyframes fadeInZoom {
         0% {
            opacity: 0;
            transform: scale(0.8);
         }

         100% {
            opacity: 1;
            transform: scale(1);
         }
      }

      @keyframes slideInDown {
         0% {
            opacity: 0;
            transform: translateY(-20px);
         }

         100% {
            opacity: 1;
            transform: translateY(0);
         }
      }

      @keyframes slideInUp {
         0% {
            opacity: 0;
            transform: translateY(20px);
         }

         100% {
            opacity: 1;
            transform: translateY(0);
         }
      }

      /* Row and Card Styling */
      .cards_row {
         display: flex;
         gap: 20px;
         margin-top: 10px;
      }

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

.note-content {
    flex-grow: 1;
    overflow-y: auto; /* Allow vertical scrolling */
    max-height: 300px; /* Set the max height as per your requirement */
}

      .note-content ul {
         list-style-type: none;
         padding: 0;
         margin: 0;
      }

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

      .note-content li:hover {
         transform: scale(1.02);
      }

      .note-content button {
         background: transparent;
         border: none;
         font-size: 18px;
         color: #007bff;
         cursor: pointer;
      }

      .note-content button:hover {
         color: #0056b3;
      }


    .rating {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      direction: rtl; /* Corrects the display order for right-to-left alignment */
    }
    .rating input {
      display: none;
    }
    .rating label {
      font-size: 30px;
      color: #ddd;
      cursor: pointer;
      transition: color 0.3s;
    }
    .rating label:hover,
    .rating label:hover ~ label {
      color: #ffc107;
    }
    .rating input:checked ~ label {
      color: #ffc107;
    }
    .rating input:checked + label:hover,
    .rating input:checked + label:hover ~ label {
      color: #ffab00;
    }
    .rating label:hover ~ label {
      color: #ddd; /* Reverts stars on the left side */
    }

    .wizard-container {
      width: 600px;
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

    .step {
      text-align: center;
      flex: 1;
      position: relative;
    }

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

    .step.active + .line {
      background-color: #fff;
    }

    .step p {
      font-size: 14px;
      font-weight: bold;
      margin-top: 8px;
      color: #fff;
    }

    .wizard_content {
      padding: 20px;
      animation: fadeIn 0.3s ease;
    }

    .wizard_content div {
      display: none;
    }

    .wizard_content div.active {
      display: block;
    }

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

    .toggle-container {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      color: #333;
    }

    .toggle-switch {
      display: inline-block;
      width: 50px;
      height: 25px;
      position: relative;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 25px;
      transition: background-color 0.3s;
    }

    .slider::before {
      content: '';
      position: absolute;
      height: 21px;
      width: 21px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.3s;
    }

    input:checked + .slider {
      background-color: #4caf50;
    }

    input:checked + .slider::before {
      transform: translateX(25px);
    }

    .status {
      font-weight: bold;
    }

    .segmented-control {
      display: flex;
      background-color: #ddd;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 400px;
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

    .segmented-control button.active {
      background-color: #4caf50;
      color: white;
    }

    .segmented-control button:not(:last-child) {
      border-right: 1px solid #ccc;
    }

    .segmented-control button:hover {
      background-color: #bfbfbf;
    }

.icon {
	font-size: 16px;
	color: #999;
	cursor: pointer;
}

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
    appearance: none; /* Removes default dropdown styling */
}

/* 📅 Flatpickr Top Banner Styling */
.flatpickr-months {
  display: flex;
  align-items: center; /* Align vertically */
  justify-content: center; /* Align horizontally */
  padding: 8px 0;
  gap: 12px; /* Increased spacing for clarity */
}

/* 📆 Month and Year Container Styling */
.flatpickr-current-month {
  display: flex;
  align-items: center; /* Vertical alignment */
  justify-content: center; /* Horizontal alignment */
  gap: 12px; /* Space between month and year */
  line-height: 1.2; /* Prevent content cutoff */
}

/* 📅 Month Dropdown Styling */
.flatpickr-monthDropdown-months {
  width: 120px; /* Ensure enough space for full month names */
  height: 36px; /* Matching heights */
  padding: 4px 8px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
}

/* 📆 Year Dropdown Container */
.flatpickr-yearDropdown-years {
  position: relative; /* Allows precise arrow placement */
  width: 90px; /* Consistent width */
  height: 36px; /* Match the month dropdown height */
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

/* 📆 Year Input Styling */
.flatpickr-current-month input.cur-year {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  border: none;
  box-sizing: border-box;
  -moz-appearance: textfield; /* Firefox */
}

.flatpickr-current-month input.cur-year::-webkit-inner-spin-button,
.flatpickr-current-month input.cur-year::-webkit-outer-spin-button {
  -webkit-appearance: none; /* Chrome, Safari, Edge */
  margin: 0;
}

/* 🠕🠗 Custom Year Arrows on Right Side */
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

/* ⬅️➡️ Navigation Arrows Styling */
.flatpickr-prev-month,
.flatpickr-next-month {
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
}

.flatpickr-prev-month {
  margin-right: 8px;
}

.flatpickr-next-month {
  margin-left: 8px;
}

/* ✨ Ensure Uniform Alignment for Both Fields */
.flatpickr-monthDropdown-months,
.flatpickr-yearDropdown-years,
.flatpickr-current-month input.cur-year {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

/* 🛠️ Overall Calendar Adjustment */
.flatpickr-calendar {
  margin: 0;
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
}

.master-details-container {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

/* Master Section */
.master {
  background: #f7f9fc;
  border-right: 1px solid #ddd;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.master-item {
  display: flex;
  align-items: center;
  padding: 5px 5px;
  border-bottom: 1px solid #ececec;
  cursor: pointer;
  transition: background-color 0.3s ease, border-left 0.3s ease;
  border-left: 4px solid transparent;
}

.master-item:hover {
  background-color: #f1f7ff;
}

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

.master-item-text {
  display: flex;
  flex-direction: column;
}

.master-item-text1 {
  font-weight: 600;
  font-size: 0.85em;
  color: #2c3e50;
}

.master-item-text2 {
  font-size: 0.75em;
  color: #666;
}

/* Details Section */
.details {
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
}

.details h2 {
  margin-top: 0;
  font-size: 1.2em;
  color: #2c3e50;
}

.details p {
  font-size: 0.8em;
  line-height: 1.5;
  color: #444;
}

.details img {
  max-width: 100%;
  border-radius: 3px;
  border: 1px solid #ddd;
}


/* Responsive Design */
@media (max-width: 768px) {
.container {
  flex-direction: column;
}

.master, .details {
  width: 100%;
  height: 50%;
}
}

/* Master Header Styling */
.master-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ececec;
  background-color: #f7f9fc;
  position: sticky; /* Keeps the header fixed */
  top: 0; /* Ensures the header stays at the top */
  z-index: 1; /* Ensures it stays above the list items */
}

.master-header-search-field {
   padding: 8px 10px;
   border: 1px solid #ddd;
   border-radius: 4px;
   font-size: 14px;
}

/* List Container */
.list-container {
    background: #F9FAFB; /* Matches modal body */
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* List Item */
.list-item {
    display: flex;
    align-items: flex-start;
    padding: 12px 16px;
    border-bottom: 1px solid #E0E0E0;
    transition: background-color 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

.list-item:last-child {
    border-bottom: none;
}

.list-item:hover {
    background: #EDF7FF; /* Matches summary card hover effect */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.list-item.selected {
    background: #E8F5E9; /* Soft green to match modal-footer save button */
    box-shadow: inset 0 0 5px rgba(40, 167, 69, 0.2);
}

/* Checkbox Styling */
.list-checkbox {
    margin-top: 15px;
    margin-right: 12px;
}

.list-checkbox input {
    visibility: hidden;
    position: absolute;
}

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
    background: #4A90E2; /* Matches modal-header */
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
.item-details {
    flex-grow: 1;
}

.item-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
    color: #333; /* Matches section-title */
}

.item-subtitle {
    font-size: 14px;
    color: #555;
}

.item-description {
    font-size: 12px;
    color: #888;
    margin-top: 4px;
}

/* Footer */
.list-footer {
    margin-top: auto; /* Pushes the footer to the bottom */
    text-align: center;
    padding: 12px;
    font-size: 14px;
    background: #FFFFFF; /* Matches modal-footer */
    color: #666;
    border-top: 1px solid #E0E0E0;
    border-radius: 0 0 8px 8px;
}

.list-footer-highlight {
    color: #28A745; /* Matches save button */
    font-weight: bold;
}

/* Grid Layout */
.vitals_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-content: center;
}

/* Responsive: Stack cards on smaller screens */
@media (max-width: 1024px) {
    .vitals_grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .vitals_grid {
        grid-template-columns: repeat(1, 1fr);
    }
}

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

.vital_card:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
}

/* Input Fields */
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

.vital-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
}

.vital-unit {
    font-size: 0.8rem;
    color: #666;
}

/* Override general input styles */
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

/* Blood pressure inputs */
.vital_card .bp-slash {
    font-size: 1.8rem;
    font-weight: bold;
    color: #007BFF;
    padding: 0 4px;
}

/* Icon Styling */
.vital_icon {
    font-size: 3rem;
    padding: 8px;
    border-radius: 8px;
}

/* Icon Colors */
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
- `body`: background-color, height, display, flex-direction, justify-content, align-items, overflow

### 2) Modal Shell
- `.modal`: width, height, background, box-shadow, display, flex-direction, padding, overflow
- `.modal-header`: color, text-align, padding, font-size, font-weight, letter-spacing, position
- `.modal-header::after`: content, display, width, height, background, position, bottom, left
- `.modal-body`: flex, padding, background-color, overflow-y
- `.modal-footer`: padding, display, justify-content, gap, border-top, background

### 3) Modal Footer Buttons
- `.modal-footer .button`: padding, font-size, font-weight, border, border-radius, cursor, color, transition
- `.modal-footer .button.save`: background-color
- `.modal-footer .button.save:hover`: background-color, box-shadow
- `.modal-footer .button.cancel`: background-color
- `.modal-footer .button.cancel:hover`: background-color, box-shadow
- `.modal-footer .button.secondary`: background-color
- `.modal-footer .button.secondary:hover`: background-color, box-shadow

### 4) Optional Embedded Two-Column Section
- `.container`: width, height, display, padding, background, border-radius, box-shadow, overflow
- `.summary-section`: width, padding-right, border-right
- `.summary-card`: background, padding, border-radius, box-shadow, height, display, flex-direction, overflow, position
- `.summary-content`: overflow-y, padding-right, height
- `.summary-card h2`: font-size, color, text-align, margin-bottom
- `.summary-info`: font-size, color, line-height
- `.summary-info p`: margin
- `.summary-info strong`: color, font-weight
- `.summary-image`: width, height, object-fit, background, margin-bottom, display, border-radius, box-shadow

### 5) Status Badge + QR + Divider
- `.status-badge`: display, margin, margin-top, margin-bottom, padding, font-size, font-weight, color, border-radius, text-align, width
- `.status-badge.gray/.yellow/.green/.red`: background-color
- `.qr-code`: width, height, margin, display
- `.section-title`: font-size, margin-top, font-weight
- `hr`: border, border-top, margin-top, margin-bottom

### 6) Shared Button Set (Inside Summary Card)
- `.button-container`: margin-top, display, justify-content, gap
- `.save-button, .cancel-button, .third-button, .button_red, .button_green, .button_blue, .button_yellow, .button_purple`
  - padding, font-size, font-weight, width, height, border, border-radius, cursor, color, transition, display, align-items, justify-content, gap
- `.save-button` + hover: background-color
- `.cancel-button` + hover: background-color
- `.third-button` + hover: background-color, width, margin-top
- `.add-another-item-button` + hover:
  - background-color, color, padding, font-size, border, border-radius, cursor, transition, margin-top, width, display, align-items, gap
- `.button1` + hover:
  - background-color, color, padding, font-size, border, border-radius, cursor, transition, margin-top, width, display, align-items, gap
- `.button_red/.green/.blue/.yellow/.purple` + hover: background-color

### 7) Tabs + Content
- `.content-section`: width, padding-left, display, flex-direction, overflow-y, height
- `.tabs`: display, border-bottom, margin-bottom
- `.tab`: padding, font-size, color, cursor, border-bottom, position, transition
- `.tab.active`: color, font-weight, border-bottom-color
- `.tab.badge-tab::after`: content, position, top, right, background-color, color, font-size, font-weight, padding, border-radius, box-shadow
- `.content`: padding, display, overflow-y, max-height
- `.content h3`: font-size, font-weight, color, margin-bottom
- `.content p`: color, font-size, line-height, margin-bottom

### 8) Form Grid + Inputs + Select
- `.form-grid1/2/3/4`: display, grid-template-columns, gap
- `.form-group`: margin-bottom
- `.form-group-2`: margin-bottom, padding
- `.instructions1/2/3`: background, padding, padding-left, padding-right, border-left, margin-bottom, border-radius, position, font-size
- `.instructions1 h2, .instructions2 h2, .instructions3 h2`: color, font-size, margin-bottom
- `label`: font-size, font-weight, color, display, margin-bottom
- `input[type=...]:not(.combined-inputs-input), textarea`: width, height, padding, font-size, color, border, border-radius, outline, background-color
- `textarea`: height, resize
- `select:not(.combined-inputs-dropdown)`: width, height, padding, font-size, color, border, border-radius, outline, appearance, background-image, background-repeat, background-position, background-size

### 9) Checkbox Group (Extended)
- `.checkbox-group`: display, grid-template-columns, padding, border, border-radius, background-color, box-shadow, margin-top, font-family
- `label.main-label`: font-weight, margin-bottom, display, font-size, color
- `.checkbox-group label`: display, align-items, gap, font-size, color, cursor, padding, border-radius, transition
- `.checkbox-group label:hover`: background-color, box-shadow
- `.checkbox-group input[type='checkbox']`: accent-color, width, height, flex-shrink, cursor
- `.checkbox-group input[type='checkbox']:checked + span`: font-weight, color
- `.checkbox-group input[type='checkbox']:focus`: outline, border-radius
- `.checkbox-group input[type='checkbox']:disabled + span`: color, cursor
- `.checkbox-group label span`: font-size, color, flex-grow

### 10) Subtable + Icons
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

### 11) Accordions + Alerts + Breadcrumbs
- `.accordion-container`: margin-top
- `.accordion`: border, border-radius, margin-bottom
- `.accordion-header`: padding, background, cursor, display, justify-content, align-items, font-weight
- `.accordion-header:hover`: background
- `.accordion-content`: padding, display, background
- `.alert`: padding, background-color, color, border, border-radius, display, justify-content, align-items, font-size, font-weight, box-shadow, margin-bottom
- `.alert-title`: font-weight, margin-right
- `.alert i` + hover: cursor, color
- `.breadcrumbs`: display, align-items, padding, background, border-radius, box-shadow, position, margin-bottom
- `.breadcrumbs::before`: content, position, left, right, top, height, background, border-radius, z-index
- `.breadcrumbs a`: text-decoration, color, padding, border-radius, position, transition, display, align-items
- `.breadcrumbs a:hover`: background-color, color
- `.breadcrumbs a::after`: content, margin-left, margin-right, color, font-weight
- `.breadcrumbs a:last-child::after`: content
- `.current`: color, font-weight, pointer-events, position, z-index
- `.icon`: margin-right, font-size, transition
- `.breadcrumbs a:hover .icon`: transform
- `.fa-home:before`, `.fa-folder:before`, `.fa-file:before`, `.fa-chevron-right:before`: content

### 12) Media, Gallery, Empty State, Animations
- `.map-container`: width, height, display, justify-content, align-items (two align-items lines exist)
- `iframe`: width, height, border, border-radius, box-shadow
- `.gallery-container`: width, margin-left
- `.gallery`: display, grid-template-columns, gap
- `.gallery-item`: position, overflow, border-radius, box-shadow
- `.gallery-item img`: width, height, object-fit, transition
- `.gallery-item:hover img`: transform
- `.gallery-item .caption`: position, bottom, left, width, background, color, text-align, padding, font-size, display
- `.gallery-item:hover .caption`: display
- `.message-container`: text-align, background, padding, border-radius, box-shadow, animation, max-width, position, top, left, transform
- `.message-container h1`: font-size, color, margin-bottom, animation
- `.message-container p`: font-size, color, margin-bottom, animation
- `.message-container img`: width, margin-bottom, animation
- `.cta-btn` + hover: display, margin-top, padding, font-size, font-weight, color, background, border, border-radius, cursor, text-decoration, box-shadow, transition, transform
- `@keyframes fadeIn`: opacity, transform
- `@keyframes fadeInZoom`: opacity, transform
- `@keyframes slideInDown`: opacity, transform
- `@keyframes slideInUp`: opacity, transform

### 13) Cards and Rating
- `.cards_row`: display, gap, margin-top
- `.note-card`: flex, padding, border-radius, box-shadow, background-color, display, flex-direction
- `.note-header`: font-weight, margin-bottom, font-size, display, justify-content
- `.note-content`: flex-grow, overflow-y, max-height
- `.note-content ul`: list-style-type, padding, margin
- `.note-content li`: padding, margin, background-color, border-radius, display, justify-content, align-items, box-shadow, transition
- `.note-content li:hover`: transform
- `.note-content button` + hover: background, border, font-size, color, cursor
- `.rating`: display, justify-content, align-items, gap, direction
- `.rating input`: display
- `.rating label`: font-size, color, cursor, transition
- `.rating label:hover, .rating label:hover ~ label`: color
- `.rating input:checked ~ label`: color
- `.rating input:checked + label:hover, .rating input:checked + label:hover ~ label`: color
- `.rating label:hover ~ label`: color

### 14) Wizard, Toggles, Segmented Control
- `.wizard-container`: width, background-color, border-radius, box-shadow, overflow
- `.stepper`: display, justify-content, align-items, padding, background, color, position
- `.step`: text-align, flex, position
- `.step .icon`: width, height, border-radius, background-color, color, display, justify-content, align-items, font-size, font-weight, margin, transition, box-shadow
- `.step.active .icon`: background-color, color, border, transform, box-shadow
- `.step .line`: position, top, left, width, height, background-color, z-index, transition
- `.step.active + .line`: background-color
- `.step p`: font-size, font-weight, margin-top, color
- `.wizard_content`: padding, animation
- `.wizard_content div`: display
- `.wizard_content div.active`: display
- `.wizard_buttons`: display, justify-content, padding, background-color
- `.wizard_button` + hover + disabled: padding, border, border-radius, background-color, color, cursor, transition, box-shadow
- `.toggle-container`: display, align-items, gap, font-size, color
- `.toggle-switch`: display, width, height, position
- `.toggle-switch input`: opacity, width, height
- `.slider`: position, cursor, top, left, right, bottom, background-color, border-radius, transition
- `.slider::before`: content, position, height, width, left, bottom, background-color, border-radius, transition
- `input:checked + .slider`: background-color
- `input:checked + .slider::before`: transform
- `.status`: font-weight
- `.segmented-control`: display, background-color, border-radius, overflow, box-shadow, width
- `.segmented-control button`: flex, padding, background-color, border, outline, cursor, font-size, color, transition
- `.segmented-control button.active`: background-color, color
- `.segmented-control button:not(:last-child)`: border-right
- `.segmented-control button:hover`: background-color
- `.icon`: font-size, color, cursor

### 15) Combined Inputs
- `.combined-inputs-container`: width, height, padding, font-size, color, border, border-radius, outline, background-color, display, align-items, box-sizing
- `.combined-inputs-input`: border, outline, text-align, font-size, background-color, color
- `.combined-inputs-dropdown`: padding, border, outline, font-size, text-align, color, background-color, appearance

### 16) Flatpickr Styling
- `.flatpickr-months`: display, align-items, justify-content, padding, gap
- `.flatpickr-current-month`: display, align-items, justify-content, gap, line-height
- `.flatpickr-monthDropdown-months`: width, height, padding, text-align, border, border-radius, box-sizing, font-size, line-height
- `.flatpickr-yearDropdown-years`: position, width, height, text-align, border, border-radius, box-sizing, font-size, line-height, display, align-items, justify-content
- `.flatpickr-current-month input.cur-year`: width, height, text-align, font-size, border, box-sizing, -moz-appearance
- `.flatpickr-current-month input.cur-year::-webkit-inner-spin-button`, `.flatpickr-current-month input.cur-year::-webkit-outer-spin-button`: -webkit-appearance, margin
- `.flatpickr-yearDropdown-years::after`: content, position, right, top, font-size, cursor, pointer-events
- `.flatpickr-yearDropdown-years::before`: content, position, right, bottom, font-size, cursor, pointer-events
- `.flatpickr-prev-month, .flatpickr-next-month`: font-size, cursor, padding, line-height
- `.flatpickr-prev-month`: margin-right
- `.flatpickr-next-month`: margin-left
- `.flatpickr-monthDropdown-months, .flatpickr-yearDropdown-years, .flatpickr-current-month input.cur-year`: display, align-items, justify-content, vertical-align
- `.flatpickr-calendar`: margin, padding, border-radius, overflow

### 17) Master-Details
- `.master-details-container`: display, border, border-radius, overflow
- `.master`: background, border-right, overflow-y, display, flex-direction
- `.master-item`: display, align-items, padding, border-bottom, cursor, transition, border-left
- `.master-item:hover`: background-color
- `.master-item.selected`: background-color, border-left, font-weight
- `.master-item img`: width, height, border-radius, margin-right, object-fit, border
- `.master-item-text`: display, flex-direction
- `.master-item-text1`: font-weight, font-size, color
- `.master-item-text2`: font-size, color
- `.details`: padding, background-color, overflow-y
- `.details h2`: margin-top, font-size, color
- `.details p`: font-size, line-height, color
- `.details img`: max-width, border-radius, border
- `@media (max-width: 768px) { .container { flex-direction } .master, .details { width, height } }`

### 18) Master Header
- `.master-header`: display, align-items, justify-content, padding, border-bottom, background-color, position, top, z-index
- `.master-header-search-field`: padding, border, border-radius, font-size

### 19) List Selector Panel
- `.list-container`: background, flex, overflow-y, display, flex-direction, height, box-shadow
- `.list-item`: display, align-items, padding, border-bottom, transition, cursor
- `.list-item:last-child`: border-bottom
- `.list-item:hover`: background, box-shadow
- `.list-item.selected`: background, box-shadow
- `.list-checkbox`: margin-top, margin-right
- `.list-checkbox input`: visibility, position
- `.list-checkbox .checkbox-label`: width, height, border, border-radius, display, position, transition
- `.list-checkbox input:checked + .checkbox-label`: background, border-color
- `.list-checkbox .checkbox-label::after`: content, position, top, left, width, height, border, border-width, transform, transition
- `.list-checkbox input:checked + .checkbox-label::after`: transform
- `.item-details`: flex-grow
- `.item-title`: font-size, font-weight, margin-bottom, color
- `.item-subtitle`: font-size, color
- `.item-description`: font-size, color, margin-top
- `.list-footer`: margin-top, text-align, padding, font-size, background, color, border-top, border-radius
- `.list-footer-highlight`: color, font-weight

### 20) Vitals Grid
- `.vitals_grid`: display, grid-template-columns, gap, justify-content
- `@media (max-width: 1024px) { .vitals_grid { grid-template-columns } }`
- `@media (max-width: 768px) { .vitals_grid { grid-template-columns } }`
- `.vital_card`: background, border-radius, padding, box-shadow, display, justify-content, align-items, transition
- `.vital_card:hover`: box-shadow
- `.vital-input`: background, border, outline, font-size, font-weight, width, text-align, color, transition
- `.vital-label`: font-size, font-weight, color
- `.vital-unit`: font-size, color
- `.vital_card input[type='number'], .vital_card input[type='text']`: border, background, box-shadow, padding, font-size, font-weight, text-align, color, width
- `.vital_card .bp-slash`: font-size, font-weight, color, padding
- `.vital_icon`: font-size, padding, border-radius
- Icon classes: `.height-icon`, `.weight-icon`, `.bmi-icon`, `.temp-icon`, `.bp-icon`, `.pulse-icon`, `.resp-icon`, `.oxygen-icon`, `.glucose-icon` with color + background-color

---

## Theme Creation Procedure
When creating a new Modal Page theme:
1. Choose a unique theme name (Title Case).
2. Copy the canonical Modal Page CSS skeleton exactly.
3. Adjust values in this order:
   - Modal surfaces first (`body`, `.modal`, `.modal-body`, `.modal-footer`)
   - Header color and underline gradient (`.modal-header`, `.modal-header::after`)
   - Footer buttons (`.modal-footer .button.*` + hover)
   - Shared components used inside the modal (forms, tabs, tables, alerts, wizard, list panel, vitals)
4. Ensure:
   - readability is strong
   - the primary scroll area is `.modal-body`
   - the footer remains clear and visible
   - hover and selection states are obvious inside lists and tables

---

## FileMaker Script Branch Template
Add a new branch in the Modal Page CSS generator:

~~~text
Else If [ $$Theme = "New Modal Theme Name" ]
  Set Variable [ $styles ; Value: "PASTE FULL UPDATED MODAL CSS STRING HERE" ]
End If
~~~

---

## AI Request Template
Create a new Modal Page theme using the canonical Modal Page CSS in this document.

Theme Name: <New Theme Name>
Mode: <Light or Dark>
Vibe Keywords: <example: premium, calm, modern, sharp>

Rules:
- Copy the canonical Modal Page CSS exactly.
- Change values only.
- Do not add, remove, or rename selectors.
- Do not add or remove properties.

Deliver:
1. Full updated CSS string
2. Full FileMaker `Else If` branch for the new theme