# CauferoAppStarter Documentation
## Text Areas (Multi-line Text Fields) and How They Are Implemented

> Purpose of this doc  
> Train an AI Agent to correctly implement **text areas** in CauferoAppStarter WebViewer pages, including:
> 1) HTML `<textarea>` rendering patterns used in pages  
> 2) How values are preloaded from FileMaker variables  
> 3) How user input is collected in JavaScript and sent back to FileMaker  
> 4) Encoding rules for safe parameter passing  
> 5) Line break handling between FileMaker and HTML  
> 6) Common pitfalls and the correct fixes

This documentation is based on patterns in your sample page:
- Text areas used:
  - `residential_address`
  - `postal_address`
- Data pre-processing:
  - `ConvertLineBreakMarkersToReturns(...)`
- Save logic:
  - `encodeURIComponent(document.getElementById('residential_address').value)`
  - `encodeURIComponent(document.getElementById('postal_address').value)`

---

## 1) What a Text Area Means in CauferoAppStarter

A text area is used for multi-line values such as:
- addresses
- descriptions
- notes
- remarks
- long comments

In CauferoAppStarter, a text area is implemented using:
- an HTML `<textarea>` element with a stable `id`
- FileMaker variable injection to preload existing value
- JavaScript collection on Save
- URL encoding to protect delimiters and line breaks

---

## 2) Mandatory Rules (Non-Negotiable)

### 2.1 Always use a stable `id`
JavaScript reads the value by ID.

Example IDs:
- `residential_address`
- `postal_address`

### 2.2 Always use a label
The label must match `for='ID'`.

### 2.3 Never use `value='...'` attribute on `<textarea>`
Textareas do not use `value` attribute.
Their value is the inner text content:

Correct:
~~~html
<textarea id='residential_address'>Existing text</textarea>
~~~

Wrong:
~~~html
<textarea id='residential_address' value='Existing text'></textarea>
~~~

### 2.4 Always encode textarea values on Save
Because:
- you join parameters using `|`
- textarea content can contain line breaks, pipes, and special characters

So do:
~~~js
encodeURIComponent(document.getElementById('residential_address').value)
~~~

---

## 3) Data Flow Overview (End-to-End)

### Step A: Get stored text from database
You query and assign values to variables like:
- `$Residential Address`
- `$Postal Address`

### Step B: Normalize line breaks for HTML insertion
Your page does:
- `ConvertLineBreakMarkersToReturns(...)`

### Step C: Inject into `<textarea>` inner text
Your page injects:
~~~html
<textarea id='residential_address'>{{RES_ADDRESS}}</textarea>
~~~

### Step D: Read on Save and encode
Your save script does:
- `encodeURIComponent(textarea.value)`

### Step E: Pass to FileMaker via parameters
Parameters are joined with `|`
FileMaker receives and decodes if needed.

---

## 4) Preloading Text Area Values (FileMaker Side)

### 4.1 Canonical pattern (from your page)
You set values like:

~~~filemaker
Set Variable [ $Residential Address ;
  Value: ConvertLineBreakMarkersToReturns ( GetValue ( $Link Record As List ; 14 ) )
]

Set Variable [ $Postal Address ;
  Value: ConvertLineBreakMarkersToReturns ( GetValue ( $Link Record As List ; 16 ) )
]
~~~

### 4.2 What `ConvertLineBreakMarkersToReturns` is doing (assumed)
The AI Agent must assume your stored text may contain markers such as:
- `¶`
- `\n`
- other placeholders

The function converts them into actual returns suitable for HTML insertion.

If your storage uses a different marker system, the AI Agent needs it clarified.

---

## 5) Rendering Text Areas (HTML)

### 5.1 Canonical HTML pattern (from your page)
Your Tab 2 uses:

~~~html
<div class='form-group-2'>
  <label for='residential_address'>Residential Address</label>
  <textarea id='residential_address' placeholder='Type the residential address here...'>{{RES_ADDRESS}}</textarea>
</div>

<div class='form-group-2'>
  <label for='postal_address'>Postal Address</label>
  <textarea id='postal_address' placeholder='Type the postal address here...'>{{POSTAL_ADDRESS}}</textarea>
</div>
~~~

### 5.2 Layout pattern
Text areas typically sit in a 2-column grid container:
- `form-grid2`
- each text area uses `form-group-2`

Example container:
~~~html
<div class='form-grid2'>
  ...two textarea blocks...
</div>
~~~

### 5.3 Placeholder guidelines
Placeholders must be:
- short
- instructive
- consistent with your page tone

Example:
- `placeholder='Type the residential address here...'`

---

## 6) Collecting Text Area Values on Save (JavaScript)

### 6.1 Canonical pattern (from your page)
Your save script uses:

~~~js
const residential_address = encodeURIComponent(document.getElementById('residential_address').value);
const postal_address = encodeURIComponent(document.getElementById('postal_address').value);
~~~

### 6.2 Why encodeURIComponent is required
Your parameter system uses:
~~~js
const parameters = [ ... ].join('|');
~~~

If textarea content contains:
- pipes `|`
- returns
- commas
- quotes
- Unicode characters

Then encoding is mandatory to avoid breaking parsing in FileMaker.

### 6.3 Standard saving rule
Always encode textareas.
Even if you think "it is just an address".
Addresses can contain:
- line breaks
- commas
- special characters

---

## 7) Parameter Passing Rules (Delimiter Safety)

### 7.1 Standard join method
Your system uses:
~~~js
const parameters = [ field1, field2, field3, ... ].join('|');
FileMaker.PerformScript('Save Staff', parameters);
~~~

### 7.2 Implication for text areas
FileMaker receives encoded values.
So the FileMaker Save script must decode them (if your standard requires it).

Two possibilities exist:

#### Option A: Decode in FileMaker Save Script
- Use `GetAsText` and decode percent encoding
- Example utility might exist in your system (unknown name)

#### Option B: Store encoded value as-is
Not recommended for text fields because it stores `%0A` sequences and reduces readability.

The AI Agent needs your canonical approach clarified.

---

## 8) Recommended Standard: Text Areas Must Be Decoded Before Saving

This is the clean standard the AI Agent should follow unless you say otherwise:

1. JS encodes textarea:
   - `encodeURIComponent(...)`
2. FileMaker Save script decodes to real text
3. Save decoded text into the field

If you already have a standard function like:
- `URLDecode`
- `PercentDecode`
- `DecodeURIComponent`
the AI Agent must be told the exact function name.

---

## 9) Copy-Paste Implementation Templates

### 9.1 Template: Text area in a form group
~~~html
<div class='form-group-2'>
  <label for='FIELD_ID'>LABEL</label>
  <textarea id='FIELD_ID' placeholder='PLACEHOLDER'>{{PRELOADED_VALUE}}</textarea>
</div>
~~~

### 9.2 Template: JS read and encode
~~~js
const FIELD_ID_value = encodeURIComponent(document.getElementById('FIELD_ID').value);
~~~

### 9.3 Template: Save parameter inclusion
~~~js
const parameters = [ ..., FIELD_ID_value, ... ].join('|');
FileMaker.PerformScript('SAVE_SCRIPT_NAME', parameters);
~~~

---

## 10) Quality Checklist for the AI Agent

When implementing text areas, the AI Agent must verify:

### HTML correctness
1. `<textarea>` has an ID
2. `<label for>` matches ID
3. Preloaded value is inside textarea inner text, not an attribute
4. Placeholder exists (optional but recommended)

### Data correctness
5. FileMaker variable is normalized for line breaks before injection
6. The injected value does not break HTML structure

### Save correctness
7. Textarea value is read using `.value`
8. Value is always passed through `encodeURIComponent`
9. Encoded value is included in the correct parameter order

### Integration correctness
10. FileMaker Save script correctly decodes the encoded text area values before storing (if that is your standard)

---

## 11) Common Failure Modes and Fixes

### 11.1 Text area appears empty even though record has text
Cause:
- The value was injected into `value=''` attribute instead of inner text
Fix:
- Use:
  - `<textarea>VALUE</textarea>`

### 11.2 Text area breaks the page HTML
Cause:
- Injected text contains raw HTML-like characters (`<`, `>`, `&`)
Fix:
- Escape the text before injection, or ensure your page builder does escaping.
This is not shown in your sample, so the AI Agent needs your standard:
- Do you HTML-escape text values before injecting?

### 11.3 Save script receives partial address only
Cause:
- address contains `|`
Fix:
- Always `encodeURIComponent` before joining parameters

### 11.4 Saved address contains `%0A` and `%2C`
Cause:
- You encoded but never decoded in FileMaker
Fix:
- Decode in FileMaker before saving into address field

### 11.5 Line breaks vanish after save
Cause:
- FileMaker decoding or normalization removed returns
Fix:
- Ensure decode restores actual returns
- Ensure you store in a text field that supports returns
- Ensure you do not strip returns during parsing

---

## 12) Clarifications Needed (Ambiguities the AI Agent Cannot Guess)

These must be clarified to make the AI Agent implementation perfect:

1. **Decoding standard in FileMaker**
   - After JS encodes textarea values, what exact method do you use in FileMaker to decode them?
   - Provide the function name or script step pattern.

2. **HTML escaping standard**
   - Do you escape user text before injecting into HTML?
   - If yes, what is the standard function used in your system?
   - Without escaping, `<` and `&` can break HTML.

3. **Line break storage**
   - When you store addresses in FileMaker, do you store:
     - real returns
     - or markers that later need conversion
   - Confirm what `ConvertLineBreakMarkersToReturns` expects.

4. **Maximum length and validation**
   - Do you limit textarea length for certain fields?
   - Do you sanitize content (remove scripts, etc.)?

5. **Multi-language and unicode**
   - Should the system preserve all unicode characters exactly?

---

## 13) Implementation Standard (What the AI Agent Must Produce)

When asked to implement a textarea field in CauferoAppStarter, the AI Agent must produce:

1. A `<textarea>` with:
   - stable ID
   - matching label
   - placeholder (recommended)
   - preloaded inner text value from FileMaker

2. FileMaker preprocessing:
   - normalize line breaks before injection (example: `ConvertLineBreakMarkersToReturns(...)`)

3. Save integration:
   - read `.value`
   - apply `encodeURIComponent`
   - include in parameter list in correct order
   - FileMaker side decodes before saving (if that is your standard)