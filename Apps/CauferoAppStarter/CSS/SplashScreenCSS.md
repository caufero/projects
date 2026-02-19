# Splash Screen CSS Generator (CauferoAppStarter)

## Purpose
This document defines the canonical Splash Screen CSS skeleton and the rules an AI agent must follow when creating a new splash screen theme in the Splash Screen CSS generator script.

The AI agent must create a new theme by changing CSS values only, while keeping the exact same selectors and the exact same property names.

---

## Script Context
- Input: `$$Theme`
- Output: `$styles` (full CSS stylesheet string)
- The script ends with: `Exit Script [ Text Result: $styles ]`

Each theme branch does:
- `Set Variable [ $styles ; Value: "<FULL CSS STRING>" ]`

---

## Hard Rules (CSS Contract)
When creating a new Splash Screen theme:
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

## Canonical Splash Screen CSS Skeleton (Source Of Truth)
This is the real Splash Screen CSS skeleton that the AI must copy and edit for every new theme.

Notes:
- This CSS is designed for a FileMaker WebViewer.
- It uses layered background elements: `.background`, `.overlay`, `.colour`, and foreground content.
- The z-index ordering must remain intact for correct layering.

~~~css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}

body, html {
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #2f2e41, #3b3a58);
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: hue-rotate(-10deg) saturate(1.08);
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(47, 46, 65, 0.52);
  z-index: 2;
}

.colour {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(47, 46, 65, 1) 34%,
    rgba(47, 46, 65, 0.74) 68%,
    rgba(47, 46, 65, 0.32) 82%,
    rgba(0, 0, 0, 0) 92%
  );
  z-index: 3;
}

.container {
  text-align: center;
  max-width: 100%;
  padding: 20px;
  margin-bottom: 0px;
  position: relative;
  z-index: 4;
}

.title {
  font-size: 5em;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1.2px;
  background: linear-gradient(90deg, #ff6a2a, #ffb020);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.22);
  margin-top: 10%;
  margin-bottom: 10px;
  filter: brightness(1.25);
}

.subtitle {
  font-size: 1.5em;
  font-family: 'Open Sans', sans-serif;
  color: #e5e7eb;
  letter-spacing: 0.6px;
  margin-bottom: 50px;
}

.partners {
  font-size: 0.95em;
  color: #ffffff;
  opacity: 0.88;
  margin-bottom: 20%;
}

.loading-bar {
  width: 50%;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.28);
  border-radius: 5px;
  overflow: hidden;
  margin: 26px auto 10px;
  position: relative;
  z-index: 4;
}

.loading-bar-inner {
  width: 0;
  height: 100%;
  background-color: #66bb6a;
  border-radius: 5px;
  animation: loading 2s infinite;
}

@keyframes loading {
  0% { width: 0; }
  50% { width: 50%; }
  100% { width: 100%; }
}

.loading-message {
  font-size: 0.9em;
  color: #66bb6a;
  margin-bottom: 14px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.32);
  position: relative;
  z-index: 4;
}

.footer {
  font-size: 0.8em;
  color: #d7dde6;
  text-align: center;
  margin-bottom: 0px;
  position: relative;
  z-index: 4;
}

.partners .developers {
  font-weight: bold;
  color: #66bb6a;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.32);
}
~~~

---

## Contract Manifest (Selectors and Property Names)
The AI agent must ensure every new theme keeps these exact selectors and property names.

- `*`
  - box-sizing, margin, padding, font-family

- `body, html`
  - margin, width, height, display, flex-direction, justify-content, align-items, position, overflow, background

- `.background`
  - position, top, left, width, height, object-fit, filter, z-index

- `.overlay`
  - position, top, left, width, height, background, z-index

- `.colour`
  - position, top, left, width, height, background, z-index

- `.container`
  - text-align, max-width, padding, margin-bottom, position, z-index

- `.title`
  - font-size, font-weight, text-transform, font-family, letter-spacing, background, -webkit-background-clip, -webkit-text-fill-color, text-shadow, margin-top, margin-bottom, filter

- `.subtitle`
  - font-size, font-family, color, letter-spacing, margin-bottom

- `.partners`
  - font-size, color, opacity, margin-bottom

- `.loading-bar`
  - width, height, background-color, border-radius, overflow, margin, position, z-index

- `.loading-bar-inner`
  - width, height, background-color, border-radius, animation

- `@keyframes loading`
  - 0% width, 50% width, 100% width

- `.loading-message`
  - font-size, color, margin-bottom, text-shadow, position, z-index

- `.footer`
  - font-size, color, text-align, margin-bottom, position, z-index

- `.partners .developers`
  - font-weight, color, text-shadow

---

## Theme Creation Procedure
When creating a new theme:
1. Create a new theme name (unique, Title Case).
2. Copy the canonical Splash Screen CSS skeleton exactly.
3. Change values only, mainly:
   - background gradient in `body, html`
   - image filter values in `.background`
   - overlay darkness and colour fade values in `.overlay` and `.colour`
   - title gradient colors in `.title`
   - title and layout spacing values (for example: `.title` margin-top, `.subtitle` margin-bottom, `.partners` margin-bottom)
   - accent color used in `.loading-bar-inner`, `.loading-message`, and `.partners .developers`
   - text colors and opacities for `.subtitle`, `.partners`, `.footer`
4. Ensure it looks professional, sharp, modern, cohesive, and remains readable on top of the background image.

---

## FileMaker Script Branch Template
Add a new branch to the Splash Screen CSS generator script:

~~~text
Else If [ $$Theme = "New Theme Name" ]
  Set Variable [ $styles ; Value: "PASTE FULL UPDATED CSS STRING HERE" ]
End If
~~~

---

## AI Request Template
Create a new Splash Screen theme using the canonical Splash Screen CSS in this document.

Theme Name: <New Theme Name>
Mode: <Light or Dark>
Vibe Keywords: <example: premium, modern, cohesive>

Rules:
- Copy the canonical Splash Screen CSS exactly.
- Change values only.
- Do not add, remove, or rename selectors.
- Do not add or remove properties.
- Do not make sizes bigger. Make sizes similar to the original values or smaller.

Deliver:
1. Full updated CSS string
2. Full FileMaker `Else If` branch for the new theme
