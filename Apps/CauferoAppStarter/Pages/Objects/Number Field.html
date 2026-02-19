# CauferoAppStarter Documentation
## Number Fields and How They Are Implemented and Used

> Purpose of this doc  
> Train an AI Agent to correctly implement **number fields** in CauferoAppStarter WebViewer pages, including:
> 1) The HTML patterns used for numeric inputs  
> 2) Formatting rules (integers, decimals, currency, percent)  
> 3) Validation rules (min, max, required, decimals allowed)  
> 4) How values are preloaded from FileMaker variables  
> 5) How values are collected in JavaScript and sent back to FileMaker  
> 6) How the FileMaker Save script should parse and store the number correctly  
> 7) Common pitfalls and correct fixes

This document is written to match the architectural patterns in your sample page:
- fields are identified by stable `id`
- values are preloaded by string injection into HTML
- Save functions collect values via `document.getElementById('...').value`
- script parameters are sent using `|` delimiter: `[ ... ].join('|')`
- some values must be encoded to protect delimiter safety

Even though the sample page does not show a dedicated numeric input field, the AI Agent must implement number fields using the same CauferoAppStarter conventions.

---

## 1) What a Number Field Means in CauferoAppStarter

A number field is any input where the intended stored value is numeric:
- quantity
- price
- cost
- percentage
- duration (minutes/hours)
- scores
- IDs that are numeric (only if they behave like numbers, otherwise treat as text)
- rates (tax, discount)
- balances and totals

In this system, number fields are:
- rendered as HTML `<input>`
- validated in JS (recommended)
- parsed and validated again in FileMaker (required)
- passed as script parameters joined by `|`

---

## 2) Mandatory Rules (Non-Negotiable)

### 2.1 Every number field MUST have a stable `id`
All Save and action scripts depend on IDs.

Example:
- `quantity`
- `unit_price`
- `discount_percent`

### 2.2 Number fields MUST be validated before script call (recommended)
At minimum:
- prevent empty required numeric fields
- prevent non-numeric text from being sent

FileMaker validation still must exist as the final gate.

### 2.3 Never trust client input
Even if JS validates, FileMaker must validate again.
Users can paste weird text, and WebViewer can be manipulated.

### 2.4 Delimiter safety
Numbers usually do not contain `|`, so encoding is often optional.
But if you allow formatted values like `1,200.50`, currency symbols, or spaces, your parsing must be strict.

Standard approach:
- send raw numeric strings only (recommended)
- avoid commas and symbols in the actual input value

---

## 3) HTML Implementation Patterns

There are two acceptable HTML patterns:

### Pattern A: `<input type='number'>` (preferred)
Use when you want native numeric keyboard support on mobile and browser-level constraints.

~~~html
<div class='form-group-2'>
  <label for='quantity'>Quantity</label>
  <input type='number' id='quantity' placeholder='0' value='{{QUANTITY}}' min='0' step='1' inputmode='numeric'>
</div>
~~~

### Pattern B: `<input type='text'>` with numeric rules (fallback)
Use when:
- you want custom formatting
- or your WebViewer environment behaves inconsistently with `type='number'`

~~~html
<div class='form-group-2'>
  <label for='unit_price'>Unit Price</label>
  <input type='text' id='unit_price' placeholder='0.00' value='{{UNIT_PRICE}}' inputmode='decimal'>
</div>
~~~

### Rule
If you do not need special formatting:
- use `type='number'`

If you need formatting, thousands separators, or currency display:
- use `type='text'` and implement strict parsing.

---

## 4) Numeric Types You Must Support

The AI Agent must be able to implement these common numeric types:

### 4.1 Integer
Examples:
- quantity
- number of children
- count fields

HTML:
~~~html
<input type='number' id='qty' step='1' min='0'>
~~~

JS parsing:
~~~js
const qty = parseInt(document.getElementById('qty').value, 10);
~~~

### 4.2 Decimal
Examples:
- prices
- weights
- measurements

HTML:
~~~html
<input type='number' id='price' step='0.01' min='0'>
~~~

JS parsing:
~~~js
const price = parseFloat(document.getElementById('price').value);
~~~

### 4.3 Currency
Two approaches exist:

#### Approach 1: Store raw decimal, display label outside input (recommended)
~~~html
<label for='amount'>Amount ({{CURRENCY}})</label>
<input type='number' id='amount' step='0.01' min='0'>
~~~

#### Approach 2: Store formatted string and parse (not recommended unless required)
If you allow `1,200.00`, then you must strip commas before parsing.

### 4.4 Percentage
Store as numeric percent or decimal fraction depending on your database standard.

Common percent-as-0-100 approach:
~~~html
<label for='discount'>Discount (%)</label>
<input type='number' id='discount' step='0.01' min='0' max='100'>
~~~

---

## 5) Preloading Number Values (FileMaker Side)

### 5.1 Standard: preload numeric values as plain text
When inserting into HTML, numeric values must be converted to text.

Recommended pattern:
~~~filemaker
Set Variable [ $Quantity ; Value: GetAsText ( table::Quantity ) ]
Set Variable [ $Unit Price ; Value: GetAsText ( table::UnitPrice ) ]
~~~

### 5.2 Default values
If empty, use `0` or blank based on field type and UX requirements:

~~~filemaker
Set Variable [ $Quantity ; Value: DefaultIfEmpty ( GetAsText ( table::Quantity ) ; "0" ) ]
~~~

### Rule
Do not preload values with commas or currency symbols unless your JS is explicitly designed to parse them.

---

## 6) Collecting Number Values (JavaScript)

### 6.1 Basic collection pattern (string)
Even if you use `type='number'`, `.value` returns a string.
You can send the raw string to FileMaker if it is already clean.

~~~js
const quantity_raw = document.getElementById('quantity').value;
~~~

### 6.2 Clean parse pattern (recommended)
Always normalize before sending:

#### Integer normalize
~~~js
function getIntValue(id) {
  const v = document.getElementById(id).value.trim();
  if (!v) return null;
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : null;
}
~~~

#### Decimal normalize
~~~js
function getFloatValue(id) {
  const v = document.getElementById(id).value.trim();
  if (!v) return null;
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : null;
}
~~~

### 6.3 Sending values to FileMaker
Your system joins parameters with `|`.
Numbers must be converted back to strings.

~~~js
const qty = getIntValue('quantity');
const price = getFloatValue('unit_price');

const parameters = [ qty, price ].join('|');
FileMaker.PerformScript('Save Something', parameters);
~~~

### Rule
If a value is `null`, decide your system standard:
- send empty string
- or send `0`
- or send explicit keyword like `NULL`

Your current pages commonly send strings. The AI Agent needs your canonical standard clarified.

---

## 7) Validation Rules (JS + UX)

### 7.1 Required numeric field
~~~js
function requireNumber(id, label) {
  const v = document.getElementById(id).value.trim();
  if (!v) {
    alert(label + ' is required.');
    return false;
  }
  const n = parseFloat(v);
  if (!Number.isFinite(n)) {
    alert(label + ' must be a number.');
    return false;
  }
  return true;
}
~~~

### 7.2 Min/Max constraints
~~~js
function enforceRange(id, label, min, max) {
  const v = document.getElementById(id).value.trim();
  if (!v) return true;
  const n = parseFloat(v);
  if (!Number.isFinite(n)) return false;
  if (n < min || n > max) {
    alert(label + ' must be between ' + min + ' and ' + max + '.');
    return false;
  }
  return true;
}
~~~

### 7.3 Integer only
~~~js
function enforceInteger(id, label) {
  const v = document.getElementById(id).value.trim();
  if (!v) return true;
  const n = Number(v);
  if (!Number.isInteger(n)) {
    alert(label + ' must be a whole number.');
    return false;
  }
  return true;
}
~~~

### Rule
Use JS validation as the first wall.
FileMaker validation remains the final wall.

---

## 8) FileMaker Parsing and Storage Rules

### 8.1 FileMaker receives parameters as text
Numbers arrive inside a delimited string:
- `param1|param2|param3`

So FileMaker must:
1. split parameters
2. validate numeric
3. store into numeric fields

### 8.2 FileMaker numeric conversion
Recommended pattern:
- `GetAsNumber ( value )` for numeric conversion

Example:
~~~filemaker
Set Variable [ $qtyText ; Value: GetValue ( $params ; 1 ) ]
Set Variable [ $qty ; Value: GetAsNumber ( $qtyText ) ]
~~~

### 8.3 Empty handling
If the string is empty:
- decide whether to store 0 or leave empty

Example:
~~~filemaker
Set Variable [ $qty ;
  Value:
    Case (
      IsEmpty ( $qtyText ) ; "" ;
      GetAsNumber ( $qtyText )
    )
]
~~~

### Rule
The Save script must enforce:
- numeric fields do not store non-numeric strings
- min/max rules that matter to business logic

---

## 9) Formatting Rules (Display vs Stored Value)

### 9.1 Stored value should be raw numeric
Store:
- `1200.5`
not:
- `1,200.50`
not:
- `GHS 1,200.50`

### 9.2 Display formatting should be optional UI sugar
If you want formatted display, use one of these:
- format on blur event (and strip formatting before save)
- display formatted value in a separate label/span next to input
- store raw number and render formatted totals elsewhere (KPI cards, summary sections, tables)

The AI Agent must not introduce formatted input values unless instructed, because it complicates parsing.

---

## 10) Implementation Templates (Copy-Paste)

### 10.1 Integer field template
HTML:
~~~html
<div class='form-group-2'>
  <label for='quantity'>Quantity</label>
  <input type='number' id='quantity' placeholder='0' value='{{QUANTITY}}' min='0' step='1' inputmode='numeric'>
</div>
~~~

JS read:
~~~js
const quantity = document.getElementById('quantity').value.trim();
~~~

### 10.2 Decimal field template
HTML:
~~~html
<div class='form-group-2'>
  <label for='unit_price'>Unit Price</label>
  <input type='number' id='unit_price' placeholder='0.00' value='{{UNIT_PRICE}}' min='0' step='0.01' inputmode='decimal'>
</div>
~~~

JS read:
~~~js
const unit_price = document.getElementById('unit_price').value.trim();
~~~

### 10.3 Percent field template
HTML:
~~~html
<div class='form-group-2'>
  <label for='discount_percent'>Discount (%)</label>
  <input type='number' id='discount_percent' placeholder='0' value='{{DISCOUNT}}' min='0' max='100' step='0.01' inputmode='decimal'>
</div>
~~~

JS read:
~~~js
const discount_percent = document.getElementById('discount_percent').value.trim();
~~~

---

## 11) Quality Checklist for the AI Agent

When implementing a number field, the AI Agent must verify:

### HTML correctness
1. input has stable `id`
2. label exists and points to id
3. appropriate type is chosen:
   - `number` preferred
   - `text` only when needed
4. step/min/max reflect numeric type

### Data correctness
5. FileMaker preloads raw numeric text
6. default is applied if required (0 or blank)

### Save correctness
7. JS reads value by id
8. JS validates numeric (recommended)
9. parameters are joined in correct order

### FileMaker correctness
10. Save script converts using `GetAsNumber`
11. business rules validation enforced (min/max, required)

---

## 12) Common Failure Modes and Fixes

### 12.1 User enters commas and save fails
Cause:
- you allowed `1,200` and FileMaker `GetAsNumber` may interpret it unexpectedly depending on locale
Fix:
- prevent commas in input, or strip commas in JS before sending:
~~~js
const raw = document.getElementById('amount').value;
const cleaned = raw.replace(/,/g, '').trim();
~~~

### 12.2 Empty numeric field becomes 0 but should be blank
Cause:
- `GetAsNumber("")` results in 0
Fix:
- handle empty explicitly before conversion

### 12.3 Decimal field stores too many decimals
Cause:
- no rounding rule
Fix:
- round in FileMaker or JS:
~~~js
const rounded = Math.round(n * 100) / 100;
~~~
Use the correct factor based on required decimals.

### 12.4 Negative values allowed accidentally
Cause:
- missing `min='0'`
Fix:
- set min in HTML and validate in FileMaker

---

## 13) Clarifications Needed (Ambiguities the AI Agent Cannot Guess)

To make number field implementation perfect, confirm these:

1. **Null vs 0 standard**
   - When a number field is empty, do you store:
     - empty
     - 0
     - or keep existing value

2. **Decimal precision standard**
   - For currency, do you always enforce 2 decimals?
   - For measurements, do you allow more?

3. **Thousands separator policy**
   - Do you allow users to type commas?
   - If yes, should JS strip them automatically?

4. **Locale and decimal separator**
   - Do you assume dot `.` as decimal separator always?

5. **Validation responsibility**
   - Which rules must be enforced in JS vs FileMaker?
   - Example: min/max, required, rounding, negative restrictions.

---

## 14) Implementation Standard (What the AI Agent Must Produce)

When asked to implement a number field in CauferoAppStarter, the AI Agent must produce:

1. HTML numeric input with stable id and label
2. appropriate numeric constraints (step, min, max)
3. preload raw numeric values from FileMaker variables
4. JS logic that reads the value and validates it (recommended)
5. JS parameter packaging using `|`
6. FileMaker Save script conversion and validation using numeric-safe rules