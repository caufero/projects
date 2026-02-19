# CauferoAppStarter Documentation
## Text Editors (Rich Text Fields) in WebViewer Pages

> Scope: This document is only for text fields implemented as a rich text editor inside WebViewer pages (HTML + CSS + JavaScript).  
> Non-scope: number fields, dropdowns, date pickers, and other inputs (covered in separate docs).

---

## 1. Purpose

A “Text Editor” in CauferoAppStarter is a rich-text input that lets the user type and format content (bold, italics, lists, links, alignment, highlight, etc.) inside a WebViewer page, then save the formatted HTML back into FileMaker.

This editor is used when:
- You want more than plain text (formatting, lists, links).
- You want to store the content as HTML in a FileMaker text field.

---

## 2. High-Level Architecture

### 2.1 Data Flow (Round Trip)

1. **FileMaker loads record**
   - FileMaker reads the stored value for a rich text field (example: `Businesses::Notes`).
   - The stored value is treated as **HTML**.

2. **FileMaker generates HTML page**
   - Page HTML includes the editor markup:
     - Toolbar buttons
     - A `<div id="editor" contenteditable="true">...</div>`
   - The editor’s initial value is inserted directly inside the editor container:
     - `"<div id=\"editor\" ...>" & $Notes & "</div>"`

3. **User edits and formats in the WebViewer**
   - Buttons trigger formatting commands using `document.execCommand(...)`.

4. **User clicks Save**
   - JavaScript collects editor HTML via:
     - `document.getElementById('editor').innerHTML`
   - JavaScript encodes the content and sends it to FileMaker using `FileMaker.PerformScript(...)`.

5. **FileMaker Save script receives the HTML**
   - FileMaker decodes and normalizes the value.
   - FileMaker stores the HTML into the correct field.

---

## 3. Implementation Components

A Text Editor implementation has 4 parts:

1. **CSS styles** (toolbar and editor area)
2. **HTML markup** (toolbar + contenteditable editor)
3. **JavaScript logic** (formatting commands, selection restore, link handling, toolbar state)
4. **Save pipeline** (JS encode + FileMaker decode + store)

The sample code shows all four.

---

## 4. Editor UI and Features

### 4.1 Supported Formatting Controls (Sample)

Toolbar buttons and inputs included in the sample:

- Bold
- Italic
- Underline
- Strikethrough
- Align left / center / right
- Ordered list / unordered list
- Indent / outdent (also via Tab handling)
- Insert link (prompts for URL)
- Text color
- Highlight color
- Insert code tag (wrap prompt result in `<code>...</code>`)
- Insert blockquote

These map to `document.execCommand` commands like:
- `bold`, `italic`, `underline`, `strikethrough`
- `justifyLeft`, `justifyCenter`, `justifyRight`
- `insertOrderedList`, `insertUnorderedList`
- `indent`, `outdent`
- `createLink`
- `foreColor`, `hiliteColor`
- `insertHTML`, `formatBlock`

---

## 5. FileMaker-Side Preparation

### 5.1 Read the Field Value

Your FileMaker script typically loads the field using SQL or normal fields, then assigns it to a variable like `$Notes`.

In the sample, `$Notes` is read from SQL:
- `"Notes"` is selected as column 29 in the first SQL.
- `$Notes` is later prepared for safe insertion into the HTML page.

### 5.2 Decode Placeholder Tokens (If Used)

The sample shows a decode step that replaces placeholder tokens with real characters:

- `lessthan` → `<`
- `greaterthan` → `>`
- `forwardslash` → `/`
- `backslash` → `\\`
- `hashhhh` → `#`
- `singlequote` → `'`
- `doublequotes` → `"`
- `sometab` → (tab)
- `equalto` → `=`
- `doublecolon` → `::`
- `semicolon` → `;`
- `ampersand` → `&`
- `ppippe` → `|`

This implies the stored HTML may have been saved with these replacements earlier.

**Rule for the AI Agent:**  
If the system uses placeholder tokens for HTML-safe storage, always apply the same decode mapping before inserting HTML into the editor.

### 5.3 Store a Plain-Text Version (Optional)

The sample also computes:
- `$Notes No Tags = HTMLToTextStripTags ( $Notes )`

This is useful for:
- Prompt building
- Search indexing
- Summaries

It is separate from the editor’s stored HTML.

---

## 6. CSS Requirements

### 6.1 Minimum Required Styles

The sample styles define:
- `.texteditor` wrapper
- `.toolbar` layout and button styling
- `#editor` sizing, padding, typography
- `.color_icon` for color pickers
- Explicit list styling in `#editor ol`, `#editor ul`, `#editor li`
- Link behavior styling in `#editor a`

**Key requirement:**  
Make sure lists show bullets and numbering inside the editor. The sample enforces this explicitly.

### 6.2 Example CSS (Template)

~~~css
.texteditor {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #fff;
}

.toolbar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background: #f4f4f4;
  border-bottom: 1px solid #ddd;
  padding: 8px;
  gap: 8px;
}

.toolbar button,
.toolbar select,
.toolbar input {
  margin: 0;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toolbar button:hover,
.toolbar select:hover,
.toolbar input:hover {
  background: #e0e0e0;
}

.toolbar button.active {
  background: #d1e7fd;
  color: #0056b3;
  border-color: #0056b3;
}

#editor {
  height: 65vh;
  margin: 0;
  padding: 12px;
  width: 100%;
  background: #fff;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  resize: none;
  overflow: auto;
}

.color_icon[type="color"] {
  padding: 0;
  border: none;
  height: 27px;
  width: 30px;
  cursor: pointer;
  border-radius: 4px;
  background: transparent;
}

.color_icon[type="color"]::-webkit-color-swatch {
  border-radius: 4px;
}

#editor a {
  pointer-events: auto;
  color: #007bff;
  text-decoration: underline;
}

#editor ol {
  list-style-type: decimal;
  padding-left: 20px;
}

#editor ul {
  list-style-type: disc;
  padding-left: 20px;
}

#editor li {
  margin-bottom: 5px;
}
~~~

---

## 7. HTML Markup Requirements

### 7.1 Editor Markup Structure

The editor is a wrapper that contains:
- Toolbar (`.toolbar`)
- Editable content area (`#editor` with `contenteditable="true"`)

The sample uses Font Awesome icons inside toolbar buttons:
- `<i class="fas fa-bold"></i>` etc.

**Dependency requirement:**  
Font Awesome must be included in the page header or globally in the WebViewer HTML. If it is missing, buttons still work but icons may not render.

### 7.2 Example HTML (Template)

Important: Insert FileMaker value inside the editor container as raw HTML.

~~~html
<div class="texteditor">

  <div class="toolbar">
    <button id="boldBtn" onclick="toggleFormat('bold')"><i class="fas fa-bold"></i></button>
    <button id="italicBtn" onclick="toggleFormat('italic')"><i class="fas fa-italic"></i></button>
    <button id="underlineBtn" onclick="toggleFormat('underline')"><i class="fas fa-underline"></i></button>
    <button id="strikeBtn" onclick="toggleFormat('strikethrough')"><i class="fas fa-strikethrough"></i></button>

    <button id="justifyLeftBtn" onclick="toggleFormat('justifyLeft')"><i class="fas fa-align-left"></i></button>
    <button id="justifyCenterBtn" onclick="toggleFormat('justifyCenter')"><i class="fas fa-align-center"></i></button>
    <button id="justifyRightBtn" onclick="toggleFormat('justifyRight')"><i class="fas fa-align-right"></i></button>

    <button id="orderedListBtn" onclick="toggleFormat('insertOrderedList')"><i class="fas fa-list-ol"></i></button>
    <button id="unorderedListBtn" onclick="toggleFormat('insertUnorderedList')"><i class="fas fa-list-ul"></i></button>

    <button id="indentBtn" onclick="toggleFormat('indent')"><i class="fas fa-indent"></i></button>
    <button id="outdentBtn" onclick="toggleFormat('outdent')"><i class="fas fa-outdent"></i></button>

    <button id="linkBtn" onclick="addLink()"><i class="fas fa-link"></i></button>

    <input type="color" class="color_icon" id="textColor"
      onchange="formatText('foreColor', this.value)" title="Text Color">

    <input type="color" class="color_icon" id="highlightColor"
      onchange="formatText('hiliteColor', this.value)" title="Highlight Color">

    <button id="codeBtn"
      onclick="formatText('insertHTML', '<code>'+prompt('Enter code:')+'</code>')">
      <i class="fas fa-code"></i>
    </button>

    <button id="quoteBtn" onclick="formatText('formatBlock', '<blockquote>')">
      <i class="fas fa-quote-right"></i>
    </button>
  </div>

  <div id="editor"
       contenteditable="true"
       onkeydown="handleListTab(event)"
       onmouseup="updateToolbar()">
    <!-- FileMaker inserts existing HTML here -->
  </div>

</div>
~~~

### 7.3 FileMaker Concatenation Pattern

The sample builds `$TextEditor HTML` like this:

- HTML string in a FileMaker calculation
- Insert `$Notes` into the editor div:
  - `...>" & $Notes & "</div>`

**Rule for the AI Agent:**  
Treat the stored editor field as HTML. Insert it raw inside the contenteditable container.

---

## 8. JavaScript Requirements

### 8.1 Why Selection Restore Exists

In contenteditable editors, clicking a toolbar button steals focus from the editor and the selection can collapse.

The sample fixes this using:
- Save selection on mouseup
- Restore selection before executing commands
- Refocus the editor after formatting

### 8.2 Core Functions (Sample Behavior)

1. `formatText(command, value)`
   - Restores selection
   - Runs `document.execCommand(command, false, value)`
   - Focuses editor

2. `toggleFormat(command)`
   - Restores selection
   - Runs `execCommand`
   - Updates toolbar active states
   - Focuses editor

3. `updateToolbar()`
   - Uses `document.queryCommandState(cmd)`
   - Toggles `.active` class on toolbar buttons

4. `addLink()`
   - Prompts for URL
   - Forces `https://` if missing
   - Creates link via `createLink`
   - Sets `target="_blank"` and `rel="noopener noreferrer"`
   - Also adds click handler so links open in new window

5. `handleListTab(event)`
   - Tab: indent
   - Shift + Tab: outdent
   - Backspace at start of list item: outdent

### 8.3 Example JS (Template)

Use block comments in code examples.

~~~javascript
let lastSelection;

document.getElementById('editor').addEventListener('mouseup', () => {
  lastSelection = saveSelection();
});

function formatText(command, value = null) {
  restoreSelection();
  document.execCommand(command, false, value);
  document.getElementById('editor').focus();
}

function toggleFormat(command) {
  restoreSelection();
  document.execCommand(command, false, null);
  updateToolbar();
  document.getElementById('editor').focus();
}

function updateToolbar() {
  const commands = [
    { cmd: 'bold', buttonId: 'boldBtn' },
    { cmd: 'italic', buttonId: 'italicBtn' },
    { cmd: 'underline', buttonId: 'underlineBtn' },
    { cmd: 'strikethrough', buttonId: 'strikeBtn' },
    { cmd: 'justifyLeft', buttonId: 'justifyLeftBtn' },
    { cmd: 'justifyCenter', buttonId: 'justifyCenterBtn' },
    { cmd: 'justifyRight', buttonId: 'justifyRightBtn' },
    { cmd: 'insertOrderedList', buttonId: 'orderedListBtn' },
    { cmd: 'insertUnorderedList', buttonId: 'unorderedListBtn' },
    { cmd: 'indent', buttonId: 'indentBtn' },
    { cmd: 'outdent', buttonId: 'outdentBtn' }
  ];

  commands.forEach(({ cmd, buttonId }) => {
    const isActive = document.queryCommandState(cmd);
    document.getElementById(buttonId).classList.toggle('active', isActive);
  });
}

function addLink() {
  let url = prompt('Enter the URL:');
  if (!url) return;

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  formatText('createLink', url);

  const links = document.getElementById('editor').getElementsByTagName('a');
  for (let link of links) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
}

function handleListTab(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    if (event.shiftKey) {
      /* Outdent if Shift + Tab */
      document.execCommand('outdent');
    } else {
      /* Indent if Tab */
      document.execCommand('indent');
    }
  }

  if (event.key === 'Backspace') {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const parent = range.startContainer.parentNode;
      if (parent.tagName === 'LI' && range.startOffset === 0) {
        /* Outdent if backspace is pressed at start of list item */
        event.preventDefault();
        document.execCommand('outdent');
      }
    }
  }
}

function saveSelection() {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) return selection.getRangeAt(0);
  return null;
}

function restoreSelection() {
  const selection = window.getSelection();
  if (lastSelection) {
    selection.removeAllRanges();
    selection.addRange(lastSelection);
  }
}

document.getElementById('editor').addEventListener('click', function (event) {
  const target = event.target;
  if (target.tagName === 'A') {
    event.preventDefault();
    window.open(target.href, '_blank', 'noopener,noreferrer');
  }
});
~~~

---

## 9. Saving to FileMaker (Critical)

### 9.1 Extract Editor HTML

The sample does:

- `let editor_ = document.getElementById('editor').innerHTML;`

This preserves formatting and tags.

### 9.2 Prevent Delimiter Collisions

The sample replaces pipes before encoding:

- `editor_ = editor_.replace(/\|/g, 'ppippe');`

This implies the system’s parameter serialization uses `|` somewhere (common in your SQL parsing and likely in your script parameter encoding).

**Rule for the AI Agent:**  
Whatever delimiter is used to join the parameters, replace it inside editor content before sending to FileMaker.

### 9.3 Encode for Script Parameter Transport

The sample then does:

- `const editor = encodeURIComponent(editor_);`

This makes the payload safe for transport inside a single script parameter string.

### 9.4 Add to Parameters List

The editor value is appended to the parameters array.

Later (not shown due to truncation), your code likely:
- Joins parameters using a delimiter (often `|` or `¶`)
- Calls `FileMaker.PerformScript('Save Business', joinedParams)`

**Rule for the AI Agent:**  
The editor HTML must be included as a separate parameter, encoded.

### 9.5 FileMaker Save Script Responsibilities

In the target FileMaker script (example: `Save Business`):

1. Read the editor parameter.
2. URL-decode it.
3. Reverse delimiter replacements:
   - `ppippe` → `|`
4. (If your system uses placeholder tokens) re-encode unsafe characters consistently for storage.

---

## 10. Implementation Checklist (AI Agent)

When the AI Agent implements a text editor in a new page:

### 10.1 Variables (FileMaker script)

- Ensure a variable exists for the field value (example: `$Notes`).
- If placeholder tokens are used in storage, decode them before HTML insertion.
- Build `$TextEditor HTML`:
  - Contains toolbar
  - Contains `#editor`
  - Inserts the existing value inside `#editor`

### 10.2 CSS

- Add editor CSS into `$styles`.
- Ensure lists render properly.
- Ensure the editor height fits your page and tab context.

### 10.3 JavaScript

- Inject the editor JS logic into the page scripts bundle.
- Ensure functions are globally accessible (toolbar uses `onclick="..."`).
- Ensure selection restore is enabled.

### 10.4 Save Pipeline

- On Save:
  - `innerHTML` captured
  - delimiter-safe replacements
  - `encodeURIComponent`
  - included in parameters
  - sent to FileMaker

### 10.5 FileMaker Save Script

- Decode and store editor HTML into the correct field.
- Keep the placeholder-token strategy consistent with the rest of the system.

---

## 11. Patterns and Naming Conventions

### 11.1 IDs

The sample uses fixed IDs:
- `editor`
- `boldBtn`, `italicBtn`, etc.

**Rule for the AI Agent:**  
If a page has only one editor, fixed IDs are acceptable.  
If a page will have multiple editors, IDs must be unique and the JS must be refactored to target the correct editor instance.

### 11.2 Reusable Component Strategy (Recommended)

For future scalability, implement the editor as a reusable component:

- Unique editor container id: `editor_notes`, `editor_description`, etc.
- Pass the editor id into all formatting functions:
  - `toggleFormat(editorId, command)`
  - `formatText(editorId, command, value)`
- Store last selection per editor id.

This is optional for the current sample, required if you add multiple editors to one page.

---

## 12. WebViewer Compatibility Notes

- `document.execCommand` is deprecated in modern browsers, yet it still works widely inside embedded webviews.
- FileMaker WebViewer (WKWebView on macOS/iOS) generally supports this pattern well for internal tools.

**Rule for the AI Agent:**  
Keep this implementation for consistency across CauferoAppStarter until a planned migration to a modern editor engine (like ProseMirror, TipTap, Quill) is approved.

---

## 13. Security and Content Hygiene

Rich text editors can accept pasted HTML.

Minimum hygiene steps:
- In FileMaker save scripts, reject `<script>` tags or strip them.
- If users paste content from external sites, consider sanitizing HTML to allowed tags:
  - `b`, `strong`, `i`, `em`, `u`, `s`, `ol`, `ul`, `li`, `a`, `blockquote`, `code`, `p`, `br`, `div`, `span`

**Rule for the AI Agent:**  
If the page is internal-only and used by trusted staff, keep hygiene minimal. If the page is public-facing or client-facing, sanitize strictly.

---

## 14. Known Ambiguities and Clarifications Needed

The AI Agent can implement the editor as shown, yet these items should be clarified to make the round-trip fully deterministic:

1. **What exactly is `JSNormalizeTextChain`**
   - The save script uses `...value" & JSNormalizeTextChain & ";`
   - This chain likely replaces characters that break delimiters or script parameters.
   - Clarification needed: What replacements does it perform, and does it already handle:
     - quotes
     - ampersands
     - less-than / greater-than
     - pipes
     - line breaks

2. **What delimiter is used to serialize the parameters**
   - The editor replaces `|` with `ppippe`, which suggests `|` is used as a delimiter somewhere.
   - Clarification needed: When sending to FileMaker, do you join parameters with `|`, with `¶`, or with something else?

3. **What is the canonical storage format for rich-text fields**
   - The load pipeline decodes tokens (`lessthan`, `doublequotes`, etc.), which suggests the stored value is tokenized HTML.
   - The save pipeline shown only replaces pipes and then URL-encodes.
   - Clarification needed: On save, do you re-tokenize the HTML into the same placeholders before storing? If yes, where does it happen (JavaScript or FileMaker script)?

4. **Which FileMaker field holds the HTML**
   - The sample reads `"Notes"` into `$Notes`.
   - Clarification needed: Is `"Notes"` always the HTML field, or do some tables store rich text in a different field naming convention (example: `Notes HTML`, `Notes_RichText`)?

5. **Do you want to preserve or strip certain tags**
   - Example: the code button inserts `<code>...</code>`.
   - Clarification needed: Are there tags you want to disallow in saved HTML (example: `<img>`, `<iframe>`)?

Until these are clarified, the AI Agent should:
- Follow the sample pipeline exactly.
- Keep delimiter replacement for `|`
- Keep encodeURIComponent
- Expect FileMaker scripts to finalize the storage normalization.

---

## 15. Minimum “Done” Definition for an AI-Generated Editor

The text editor feature is considered complete when:

- Existing saved HTML loads correctly inside the editor.
- Toolbar actions apply formatting correctly.
- Links open in a new tab/window inside the WebViewer context.
- Ordered and unordered lists display correctly.
- Save captures HTML and persists it in FileMaker.
- Reload shows the same formatting.