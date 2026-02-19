# CauferoAppStarter Documentation
## File Upload Fields and Image Display Sections (How They Work and How to Implement Them)

> Purpose of this doc  
> Train an AI Agent to correctly implement:
> 1) A **file upload field** (the UI element that looks like a file picker)  
> 2) An **image display section** (thumbnail or profile image shown on the page)  
> 3) A **modal image viewer** (click image to enlarge)  
> 4) The **FileMaker bridging logic** where the browser UI triggers FileMaker scripts to do the real file selection and saving

This documentation is based on the patterns in your sample page:
- File upload field: `<input type='file' id='materialPhoto' />`
- Image display section: `<img src='data:image/png;base64,...' class='summary-image' />`
- File dialog interception: JS prevents native browser picker and calls FileMaker script
- Modal: `openImageModal()`, `closeImageModal()`

---

## 1) Key Concept: WebViewer Cannot Reliably Own the File System

In CauferoAppStarter, the WebViewer UI does not own the file system workflow end-to-end.

Instead:
- The WebViewer provides the UI surface (file input control for familiarity)
- JavaScript intercepts the interaction
- FileMaker does the real work:
  - select file
  - read file container
  - store base64
  - update record
  - re-render the page

This design is intentional and consistent with FileMaker WebViewer realities.

---

## 2) Components of the System

### 2.1 File Upload UI Component
A file upload field is represented in HTML as:

~~~html
<input type='file' id='materialPhoto' />
~~~

But in this framework:
- the click is intercepted
- FileMaker script opens the file picker and handles import

### 2.2 Image Display Component
The image is displayed as a normal `<img>` tag whose `src` is a base64 data URI:

~~~html
<img src='data:image/png;base64,XXXXX' class='summary-image' />
~~~

### 2.3 Click-to-View Modal
An overlay modal is shown when the user clicks the thumbnail.

### 2.4 FileMaker Script Bridge
JavaScript triggers FileMaker scripts using:

~~~js
FileMaker.PerformScript('Insert Staff Photo');
~~~

---

## 3) Image Data Pipeline (How the Image Gets Onto the Page)

This is the canonical pipeline used in your page:

### Step A: Fetch stored image base64 from the database
Your page uses SQL:

~~~filemaker
Set Variable [ $Image ;
Let (
  [
    sql = "Select \"Base64 Image\"
From Images
Where \"Reference\" = ?" ;
    fieldseparator = "xxxxx" ;
    rowseparator = "¶" ;
    id = $$Staff ID ;
    result = ExecuteSQL ( sql ; fieldseparator ; rowseparator ; id )
  ] ;
  result
)
]
~~~

### Step B: Use a placeholder when no image exists
Your page sets a default base64 placeholder:

~~~filemaker
Set Variable [ $Image Placeholder ; Value: "iVBORw0K...RK5CYII=" ]
~~~

### Step C: Construct an HTML-safe image source string
Your page builds:

~~~filemaker
Set Variable [ $Image Source HTML ;
  Value: "data:image/png;base64," & If ( IsEmpty ( $Image ) ; $Image Placeholder ; $Image )
]
~~~

### Step D: Inject it into HTML `<img src='...'>`
Example from your summary section:

~~~html
<img src='{{IMAGE_SOURCE_HTML}}' alt='Staff Photo' class='summary-image' />
~~~

---

## 4) Implementing the Image Display Section (Summary Card Pattern)

### 4.1 Canonical HTML Pattern
This is the exact structure pattern your page uses:

~~~html
<div class='image-container' onclick='openImageModal()'>
  <img src='{{IMAGE_SOURCE_HTML}}' alt='Staff Photo' class='summary-image' />
  <i class='fas fa-search-plus summary-image-icon'></i>
</div>
~~~

### 4.2 Behaviors this provides
- Shows a thumbnail in a fixed summary section
- Displays a magnifier icon overlay
- Clicking the container triggers `openImageModal()`

### 4.3 Mandatory class names
The AI Agent must preserve these class names because the CSS and JS assume them:
- `image-container`
- `summary-image`
- `summary-image-icon`

If you rename classes, update the CSS and JS selectors accordingly.

---

## 5) Implementing the Modal Viewer

### 5.1 Modal HTML Pattern
Your page uses:

~~~html
<div class='image-modal' id='imageModal'>
  <span class='image-modal-close-btn' onclick='closeImageModal()'>&times;</span>
  <img id='modalImage' src='' alt='Enlarged Image'>
</div>
~~~

### 5.2 Modal JavaScript Pattern
Your page uses:

~~~js
function openImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const thumbnail = document.querySelector('.summary-image');

  modalImage.src = thumbnail.src;
  modal.style.display = 'flex';
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.getElementById('imageModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
~~~

### 5.3 Critical rules
1. The thumbnail must be selectable:
   - `.summary-image` must exist
2. Modal must have:
   - container id `imageModal`
   - image id `modalImage`
3. The modal display style must match CSS assumptions:
   - typically `display: none` by default
   - show via `flex`

---

## 6) Implementing the File Upload Field

### 6.1 Canonical HTML Pattern
Your page places the upload field in the form:

~~~html
<div class='form-group form-group-2'>
  <label for='materialPhoto'>Photo</label>
  <input type='file' id='materialPhoto' />
</div>
~~~

### 6.2 Why it is not used as a normal file input
In FileMaker WebViewer contexts, letting the browser open a native file dialog can be unreliable or inconsistent depending on:
- platform
- WebViewer implementation
- security and sandbox restrictions

So your solution:
- intercepts click
- uses FileMaker script to do the file selection and import

---

## 7) Intercepting the File Input and Calling FileMaker

### 7.1 Canonical JavaScript Intercept Pattern
Your page does:

~~~js
/* Prevent the file dialog from opening by intercepting the 'click' event */
document.getElementById('materialPhoto').addEventListener('click', function(event) {
  /* Prevent the default click behavior (opening the file dialog) */
  event.preventDefault(); 

  /* Trigger FileMaker to handle the file selection */
  FileMaker.PerformScript('Insert Staff Photo');
});

/* Add an event listener to the file input for the 'change' event */
document.getElementById('materialPhoto').addEventListener('change', function(event) {
  /* Prevent default file handling behavior */
  event.preventDefault(); 

  /* Optional debug */
  alert('Change event triggered, but file dialog didn’t open.');
});
~~~

### 7.2 Core rule
In this framework, the file input is a trigger widget, not a real uploader.

Meaning:
- It exists to look like upload UI
- It exists to give user an obvious entry point
- The real upload occurs in FileMaker

### 7.3 Script variable mapping rule
Your page uses:

~~~filemaker
Set Variable [ $Insert Image Script ; Value: "Insert Staff Photo" ]
~~~

Then injects that name into the JS:

~~~js
FileMaker.PerformScript('" & $Insert Image Script & "');
~~~

The AI Agent must always follow this approach:
- store the FM script name in a FileMaker variable
- inject into JS
- never hardcode script names deep inside JS unless your standard says otherwise

---

## 8) FileMaker Side: What the "Insert Photo" Script Must Do

This doc describes the contract, not the exact internal script steps (your implementation may differ).

### 8.1 Script contract (must be true)
When JavaScript calls the FM script:
- FileMaker must prompt user to select an image
- FileMaker must associate the image with the current entity (example: staff record)
- FileMaker must store the image in a predictable way
- FileMaker must refresh the WebViewer page

### 8.2 Data storage pattern implied by your page
Your page fetches from a table called `Images`:

- It selects `"Base64 Image"`
- It filters by `"Reference" = $$Staff ID`

So the implied contract is:
- The Insert Photo script stores:
  - `Images::Reference = $$Staff ID`
  - `Images::Base64 Image = <base64 of selected image>`

If your system uses a different table or reference strategy, the AI Agent needs that clarified.

### 8.3 Refresh rule
After inserting, FileMaker must regenerate the page (or refresh) so the new base64 appears in `$Image Source HTML`.

Typical approaches:
- re-run the page generation script
- refresh window / flush caches
- re-set `$$Page` and load WebViewer again

---

## 9) Putting It Together: Minimum End-to-End Implementation

### 9.1 FileMaker variables (script names)
~~~filemaker
Set Variable [ $Insert Image Script ; Value: "Insert Staff Photo" ]
~~~

### 9.2 HTML (upload field + image preview)
~~~html
<div class='form-group form-group-2'>
  <label for='materialPhoto'>Photo</label>
  <input type='file' id='materialPhoto' />
</div>

<div class='image-container' onclick='openImageModal()'>
  <img src='{{IMAGE_SOURCE_HTML}}' alt='Staff Photo' class='summary-image' />
  <i class='fas fa-search-plus summary-image-icon'></i>
</div>
~~~

### 9.3 JS (intercept + modal)
~~~js
document.getElementById('materialPhoto').addEventListener('click', function(event) {
  event.preventDefault();
  FileMaker.PerformScript('Insert Staff Photo');
});

function openImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const thumbnail = document.querySelector('.summary-image');
  modalImage.src = thumbnail.src;
  modal.style.display = 'flex';
}

function closeImageModal() {
  document.getElementById('imageModal').style.display = 'none';
}
~~~

---

## 10) Quality Checklist for the AI Agent

When implementing file upload + image display, the AI Agent must verify:

### Upload trigger
1. A file input exists with a stable ID (example: `materialPhoto`)
2. A JS click handler intercepts the input and calls a FileMaker script
3. The FileMaker script name is injected from a FileMaker variable (preferred standard)
4. The native file dialog does not open

### Display
5. The image `src` is built as a data URI
6. A placeholder base64 is used when no image exists
7. The image is visible in the summary section with correct classes

### Modal
8. Modal HTML exists (`imageModal`, `modalImage`)
9. Clicking thumbnail opens modal
10. Close button and outside click closes modal

### Refresh
11. After inserting photo, FileMaker refreshes page so the new image appears

---

## 11) Common Failure Modes and Fixes

### 11.1 Clicking the file input does nothing
Cause:
- No click listener attached
- Wrong element ID in JS
Fix:
- Ensure `document.getElementById('materialPhoto')` matches HTML

### 11.2 Browser file picker still opens
Cause:
- missing `event.preventDefault()`
Fix:
- add `event.preventDefault()` at top of click handler

### 11.3 FileMaker script does not run
Cause:
- wrong script name
- script not available in file context
Fix:
- ensure `$Insert Image Script` is correct
- ensure script exists and is accessible

### 11.4 Image never updates after inserting
Cause:
- Insert script stored the image but page did not refresh
Fix:
- re-run page generator and refresh WebViewer

### 11.5 Modal opens but shows blank image
Cause:
- `.summary-image` selector not found
- modal image ID mismatch
Fix:
- ensure thumbnail has class `summary-image`
- ensure modal image id is `modalImage`

---

## 12) Clarifications Needed (Ambiguities the AI Agent Cannot Guess)

These must be clarified to make the AI Agent implementation perfect:

1. **Exact FileMaker Insert Photo script behavior**
   - Does it:
     - open dialog using Insert Picture / Open File?
     - store into container first?
     - then convert to base64 and store in `Images::Base64 Image`?
   - The AI Agent needs the canonical internal approach.

2. **Image formats**
   - Are you standardizing on PNG only?
   - Or do you support JPG, JPEG, WEBP?
   - If multiple formats, how do you store MIME type and build the data URI prefix?

3. **Reference strategy**
   - You use `Images::Reference = $$Staff ID`.
   - Is `Reference` always the entity ID?
   - Or do you combine it with type (example: `StaffPhoto|<ID>`)?

4. **Single image vs multiple images per entity**
   - Is there one profile photo per staff record?
   - Or can staff have multiple images?

5. **Security rules**
   - Do you validate file size?
   - Do you validate image type?
   - Do you compress or resize images before saving?

6. **Where to place the upload UI**
   - Your page places it in Tab 1 and shows preview in Summary.
   - Is that always your standard pattern?

---

## 13) Implementation Standard (What the AI Agent Must Produce)

When asked to implement "Upload Photo + Show Photo" on a page, the AI Agent must produce:

1. FileMaker variables:
   - `$Insert Image Script`
   - `$Image`, `$Image Placeholder`, `$Image Source HTML`

2. HTML:
   - `<input type='file' id='materialPhoto'>`
   - `<img src='{{IMAGE_SOURCE_HTML}}' class='summary-image'>`
   - modal markup

3. JavaScript:
   - intercept click and call FileMaker script
   - modal open/close functions

4. FileMaker contract:
   - Insert script stores base64 image for the current entity reference
   - page refreshes after insert