# Banner Page CSS Generator (CauferoAppStarter)

## Purpose
This document defines the canonical Banner page CSS skeleton and the rules an AI agent must follow when creating a new theme in the Banner CSS generator script.

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
When creating a new Banner theme:
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

## Canonical Banner CSS Skeleton (Source Of Truth)
This is the real Banner CSS skeleton that the AI must copy and edit for every new theme.

~~~css
/* FileMaker WebViewer-safe base.
   html/body are forced to 100% so the layout references the WebViewer height, not the device viewport. */
html, body {
  height: 100%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}

/* Use 100% instead of 100vh for embedded WebViewer stability. */
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #121423, #1d2134);
}

/* Banner fills the WebViewer height.
   In FileMaker, control the banner thickness by resizing the WebViewer object. */
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #1a1d2f, #252a43);
  color: #f8fafc;
  position: relative;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

/* Keep the gloss subtle for a modern premium look.
   If it ever washes out contrast, reduce opacity slightly. */
.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    75deg,
    rgba(255, 255, 255, 0.18) 18%,
    rgba(255, 255, 255, 0.08) 48%,
    rgba(255, 255, 255, 0) 78%
  );
  opacity: 0.35;
  pointer-events: none;
  transform: rotate(-10deg) translateY(-10%);
  mix-blend-mode: screen;
}

.banner-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
}

.logo-container {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.banner-logo img, .list-icon {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.28);
}

.banner-logo img {
  background: #ffffff;
  padding: 3px;
  z-index: 2;
}

.list-icon {
  background: #22c55e;
  color: #ffffff;
  width: 36px;
  height: 36px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.92);
  z-index: 1;
}

.logo-container:hover img {
  opacity: 0;
  transform: scale(0.92);
}

.logo-container:hover .list-icon {
  opacity: 1;
  transform: scale(1);
}

/* Kept vivid but controlled. This is already in a good modern range. */
.banner-logo .logo-text {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 650;
  background: linear-gradient(90deg, #ff6a2a, #ffb020);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.22);
  filter: brightness(1.25);
}

.banner-logo .logo-subtitle {
  font-size: 12px;
  color: #cbd5e1;
  opacity: 0.85;
  letter-spacing: 0.6px;
  margin-top: 2px;
}

/* Clear accent, compact sizing. Works well for a thin banner. */
.banner-title {
  font-size: 15px;
  font-weight: 800;
  text-transform: uppercase;
  color: #22c55e;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.32);
  letter-spacing: 0.4px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.notification-icon, .chat-icon {
  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.10);
  border-radius: 50%;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.22);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.notification-icon:hover, .chat-icon:hover {
  background: rgba(255, 255, 255, 0.16);
  transform: scale(1.08);
}

.notification-icon svg, .chat-icon svg {
  width: 20px;
  height: 20px;
  fill: #ffffff;
  transition: fill 0.2s ease;
}

/* Cohesive: hover ties back to the same accent green used in the header. */
.notification-icon:hover svg, .chat-icon:hover svg {
  fill: #22c55e;
}

.notification-icon .alert-badge, .chat-icon .alert-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ef4444;
  color: #ffffff;
  width: 16px;
  height: 16px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

~~~

---

## Contract Manifest (Selectors and Property Names)
The AI agent must ensure every new theme keeps these exact selectors and property names.

- `html, body`
  - height

- `*`
  - box-sizing, margin, padding, font-family

- `body`
  - margin, height, overflow, background

- `.banner`
  - display, align-items, justify-content, padding, width, height, background, color, position, box-shadow, overflow

- `.banner::before`
  - content, position, top, left, width, height, background, opacity, pointer-events, transform, mix-blend-mode

- `.banner-logo`
  - display, align-items, gap, position

- `.logo-container`
  - position, width, height, cursor

- `.banner-logo img, .list-icon`
  - width, height, border-radius, position, top, left, transition, box-shadow

- `.banner-logo img`
  - background, padding, z-index

- `.list-icon`
  - background, color, width, height, font-size, display, align-items, justify-content, cursor, opacity, transform, z-index

- `.logo-container:hover img`
  - opacity, transform

- `.logo-container:hover .list-icon`
  - opacity, transform

- `.banner-logo .logo-text`
  - font-size, font-family, font-weight, background, -webkit-background-clip, -webkit-text-fill-color, text-transform, letter-spacing, text-shadow, filter

- `.banner-logo .logo-subtitle`
  - font-size, color, opacity, letter-spacing, margin-top

- `.banner-title`
  - font-size, font-weight, text-transform, color, text-shadow, letter-spacing, margin-right, display, align-items, gap

- `.notification-icon, .chat-icon`
  - position, width, height, cursor, display, align-items, justify-content, background, border-radius, box-shadow, transition

- `.notification-icon:hover, .chat-icon:hover`
  - background, transform

- `.notification-icon svg, .chat-icon svg`
  - width, height, fill, transition

- `.notification-icon:hover svg, .chat-icon:hover svg`
  - fill

- `.notification-icon .alert-badge, .chat-icon .alert-badge`
  - position, top, right, background, color, width, height, font-size, font-weight, border-radius, display, align-items, justify-content, box-shadow

---

## Theme Creation Procedure
When creating a new theme:
1. Create a new theme name (unique, Title Case).
2. Copy the canonical CSS skeleton exactly.
3. Change values only, mainly:
   - gradient colors in `body` and `.banner`
   - overlay gradient colors and opacity in `.banner::before`
   - highlight colors in `.list-icon`, `.banner-title`, icon backgrounds, hover fills
   - shadows and opacities
   - font-family values (only where they already exist)
4. Ensure it looks professional, sharp, modern, cohesive.

---

## FileMaker Script Branch Template
Add a new branch to the Banner CSS generator script:

~~~text
Else If [ $$Theme = "New Theme Name" ]
  Set Variable [ $styles ; Value: "PASTE FULL UPDATED CSS STRING HERE" ]
End If
~~~

---

## AI Request Template
Create a new Banner theme using the canonical Banner CSS in this document.

Theme Name: <New Theme Name>
Mode: <Light or Dark>
Vibe Keywords: <example: premium, modern, cohesive>

Rules:
- Copy the canonical Banner CSS exactly.
- Change values only.
- Do not add, remove, or rename selectors.
- Do not add or remove properties.
- Do not make sizes bigger. Make sizes similar to the original values or smaller.

Deliver:
1. Full updated CSS string
2. Full FileMaker `Else If` branch for the new theme
