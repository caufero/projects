# CauferoAppStarter Documentation
## Maps and How They Are Implemented and Used (Google Maps Embed)

> Purpose of this doc  
> Train an AI Agent to implement **maps** in CauferoAppStarter WebViewer pages using the sample Vendor Details page.  
> The map is implemented as a **Google Maps embed iframe** driven by a FileMaker text field (Location).  
> This doc covers the HTML structure, data preparation, URL formatting, CSS container rules, tab placement, and failure modes.

---

## 1) What “Map” Means in CauferoAppStarter

A map is a UI section that shows the physical location of an entity (Vendor, Business, Customer, Site, Warehouse, etc.).

In this framework, the map is:
- not an interactive JavaScript map SDK
- not a Google Maps API key integration
- simply an **iframe embed** pointing to Google Maps with a query string built from FileMaker data

This gives a fast implementation with:
- zero JS dependencies
- minimal maintenance
- predictable behavior in WebViewer

---

## 2) Where the Map Lives in the Page

In the sample, the page is tabbed:
- Tab 1: Vendor Details
- Tab 2: Supplies Catalog
- Tab 3: Transaction History

The map is placed inside **Tab 1** (Vendor Details), after the form fields and a divider:

~~~text
Tab 1 content
  - text fields + dropdown + segmented control + toggle
  - horizontal rule
  - MAP (iframe embed)
~~~

### AI Agent rule
If implementing a map:
- put it in the relevant tab (usually the “Details” tab)
- keep it near other address/location fields
- ensure it is inside the correct `.content` block so it shows only when that tab is active

---

## 3) Core Implementation Pattern (HTML)

### Map container + iframe (as used in sample)
The sample map block is:

~~~html
<!-- MAP (START) -->
<div class='map-container' style='width: 100%; height: 40vh; padding: 0px 20px'>
  <iframe
    src='https://local.google.com/maps?q={{LOCATION_QUERY}}&output=embed'
    allowfullscreen
    loading='lazy'>
  </iframe>
</div>
<!-- MAP (END) -->
~~~

Where `{{LOCATION_QUERY}}` is built from FileMaker:

- `Substitute ( $Location ; ", " ; "+" )`

So the actual generation used is:

~~~filemaker
"<iframe src='https://local.google.com/maps?q=" &
Substitute ( $Location ; ", " ; "+" ) &
"&output=embed' allowfullscreen loading='lazy'> </iframe>"
~~~

### AI Agent rule
The map must be implemented using an `<iframe>` with:
- a `src` that includes a `q=` query parameter
- `output=embed`
- `loading='lazy'` for performance

---

## 4) Data Source and Preparation (FileMaker)

### Source field
The map is driven from:

- `$Location` (Vendor Location) retrieved via ExecuteSQL:

~~~filemaker
sql = "Select \"Name\", \"Location\", ... From \"Vendors\" Where ID = ?"
~~~

### Formatting rule used in the sample
The sample uses:

- `Substitute ( $Location ; ", " ; "+" )`

This converts typical address formatting:
- `"Accra, Greater Accra Region"`  
into:
- `"Accra+Greater Accra Region"`

### AI Agent rule
The map query must be derived from a readable location string:
- city, region, country
- or an address line
- or a landmark name

---

## 5) Recommended Encoding Rules (Stronger Than Sample)

The sample only replaces `", "` with `"+"`. That works for many cases, but it is not a full URL encoding strategy.

### Recommended minimal encoding (safe baseline)
At minimum, replace:
- space with `+`

Example pattern:

~~~filemaker
Set Variable [ $Location Query ;
  Value: Substitute ( $Location ;
    [ " " ; "+" ]
    [ "¶" ; "+" ]
  )
]
~~~

### Recommended stronger encoding (if your data has symbols)
If locations may include `&`, `#`, or `?`, you must sanitize because it can break the URL.

Suggested replacement set:

~~~filemaker
Set Variable [ $Location Query ;
  Value: Substitute ( $Location ;
    [ " " ; "+" ] ;
    [ "¶" ; "+" ] ;
    [ "&" ; "" ] ;
    [ "#" ; "" ] ;
    [ "?" ; "" ] ;
    [ "\"" ; "" ] ;
    [ "'" ; "" ]
  )
]
~~~

### AI Agent rule
If your location text can contain URL-breaking characters:
- sanitize them before concatenating into the iframe `src`

---

## 6) CSS Contract for Map Rendering

The sample uses an inline style on the container:

- `width: 100%`
- `height: 40vh`
- `padding: 0px 20px`

This ensures the iframe gets a visible height.

### Required CSS / inline rules
The iframe must have a height. If not set, the map can render as a thin line.

Recommended baseline styling:

~~~css
.map-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
}
~~~

### AI Agent rule
A map container must define height, either by:
- inline style `height: ...`
- or CSS class with a height

Then the iframe must fill:
- `width: 100%`
- `height: 100%`

---

## 7) Implementation Steps (AI Agent Checklist)

When adding a map to a page:

1. **Ensure the page has a location variable**
   - `$Location` or `$Address` is loaded from ExecuteSQL or set to defaults

2. **Create a query-friendly string**
   - `$Location Query` derived from `$Location` using Substitute rules

3. **Insert a map container into the correct tab**
   - typically after location fields and before the tab ends

4. **Generate iframe src**
   - `https://local.google.com/maps?q={{Location Query}}&output=embed`

5. **Ensure container height**
   - inline `height: 40vh` or CSS `min-height`

6. **Add iframe styling**
   - width/height 100%, border 0

7. **Handle empty locations gracefully**
   - show a message if no location is available (see section 9)

---

## 8) Copy-Paste Map Template (Framework-Compatible)

Use this block inside a `$TabX HTML` calculation:

~~~text
<!-- MAP (START) -->
<div class='map-container' style='width: 100%; height: 40vh; padding: 0px 20px'>
  <iframe
    src='https://local.google.com/maps?q={{LOCATION_QUERY}}&output=embed'
    allowfullscreen
    loading='lazy'>
  </iframe>
</div>
<!-- MAP (END) -->
~~~

And build `{{LOCATION_QUERY}}` from FileMaker:

~~~filemaker
Set Variable [ $Location Query ;
  Value: Substitute ( $Location ; [ " " ; "+" ] [ ", " ; "+" ] [ "¶" ; "+" ] )
]
~~~

Then inject:

~~~filemaker
"<iframe src='https://local.google.com/maps?q=" & $Location Query & "&output=embed' allowfullscreen loading='lazy'></iframe>"
~~~

---

## 9) Empty Location Handling (Must Not Show a Broken Map)

If `$Location` is empty, the embed may show:
- a random world view
- a blank map
- an error inside the iframe

### Recommended behavior
If location is empty:
- display a friendly message instead of an iframe

Template:

~~~text
<div class='map-container' style='width: 100%; height: 40vh; padding: 0px 20px'>
  {{MAP_HTML}}
</div>
~~~

Where `{{MAP_HTML}}` becomes either:
- iframe embed when `$Location` is not empty
- a placeholder card when `$Location` is empty

Example placeholder:

~~~html
<div class="no-record-card">
  <div class="no-record-title">No Location Provided</div>
  <div class="no-record-body">Add a location to view this vendor on the map.</div>
</div>
~~~

### AI Agent rule
Never embed a map with an empty `q=` query. Use a placeholder UI.

---

## 10) Security and WebViewer Constraints

This implementation:
- does not require API keys
- does not require external JS
- works by embedding a third-party site

Potential constraints:
- some environments may restrict iframe access to Google domains
- some WebDirect deployments may enforce content security rules

### AI Agent rule
If iframe embeds are blocked in a target environment, you must:
- switch to a different embed domain policy
- or open maps externally via a clickable link instead of iframe

Fallback link pattern:

~~~html
<a href="https://www.google.com/maps/search/?api=1&query={{LOCATION_QUERY}}" target="_blank">
  Open in Google Maps
</a>
~~~

---

## 11) Performance and UX Rules

Recommended options used in the sample:
- `loading='lazy'` reduces initial load cost
- map is placed lower on the page after form fields
- uses a moderate height (40vh)

### AI Agent rule
- always use `loading='lazy'`
- do not place a heavy map at the very top unless the page is a “Location Page”
- keep the height between `30vh` and `60vh` depending on the page density

---

## 12) Common Failure Modes and Fixes

### 12.1 Map shows but is tiny / invisible
Cause:
- container has no height
Fix:
- set container height and iframe height to 100%

### 12.2 Map query is wrong or too broad
Cause:
- location string is incomplete
Fix:
- include city + region + country, or add a more specific address

### 12.3 Map breaks when location has special characters
Cause:
- URL not sanitized
Fix:
- remove or encode `&`, `#`, `?`, quotes

### 12.4 Map does not load in WebDirect
Cause:
- iframe blocked by environment policy
Fix:
- use “Open in Google Maps” link fallback
- or whitelist the domain in deployment policy where possible

---

## 13) Required Clarifications (Ambiguities the AI Agent Cannot Guess)

These items affect “perfect” map generation:

1. **Canonical location format**
   - What is the expected structure of `$Location` in your system?
   - Examples: `"East Legon, Accra"`, `"P. O. Box ..."`, `"GPS Address ..."`, `"Street + City + Country"`

2. **Preferred map provider**
   - Must it always be Google Maps embed, or do you also support OpenStreetMap?

3. **Offline / low-connectivity fallback**
   - If map cannot load, should we show:
     - a link only
     - a static image (screenshot map)
     - or a simple text-only panel?

4. **Multiple locations**
   - If an entity has multiple addresses, which one should the map display?
   - Primary address only, or selectable?

5. **Exact CSS contract**
   - Is `.map-container` styled inside `🖌️ Use Details CSS` in all themes?
   - If not, should the AI Agent always inject map CSS locally?

---

## 14) AI Agent Output Standard (What Must Be Produced)

When asked to implement a map in CauferoAppStarter, the AI Agent must produce:

1. FileMaker variables:
   - `$Location` loaded (or defaulted)
   - `$Location Query` derived by sanitizing `$Location`

2. HTML block:
   - `.map-container` with a defined height
   - iframe embed with `q=` and `output=embed`
   - placeholder UI if location is empty

3. CSS (if needed):
   - iframe fill rules: width/height 100%, border 0, optional radius

4. Optional fallback:
   - “Open in Google Maps” link when iframe is blocked