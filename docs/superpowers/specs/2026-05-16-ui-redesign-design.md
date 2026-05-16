# UI Redesign — Structured Editorial + Frosted Glass

**Date:** 2026-05-16  
**Status:** Approved  
**Scope:** Full visual overhaul — colors, surfaces, cards, modal, buttons, sidebar nav

---

## Problem

Every container in the current design uses the same `border-radius: 18px` / `9999px` pill formula, identical `hairline` borders, and `surface-1` fills. The project modal is a generic centered floating box. Buttons are pure pills. Sidebar nav links are rounded dashboard-style boxes. The result looks AI-generated and template-assembled.

---

## Goal

Refined and minimal, but with genuine character. Frosted glass surfaces, a consistent low-radius shape language (6px), a left-stripe hover/active accent, and a right-side drawer modal. Feels handcrafted, not templated.

---

## 1. Color & Surface Tokens

### Accent color change
| Token | Old | New |
|---|---|---|
| `--accent` | `#2997ff` | `#818cf8` (indigo) |
| `--accent-focus` | `#0a84ff` | `#6366f1` (indigo-600) |
| `--accent-soft` | `#60a5fa` | `#c7d2fe` (indigo-200) |

All other canvas/ink tokens remain unchanged.

### Frosted glass surface
Cards no longer use flat `var(--surface-1)` / `var(--surface-2)` fills. Instead:
```css
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.07);
```
This makes cards semi-transparent floating panels against the aurora background — the aurora bleeds through subtly.

### Grain texture
Added to `.site-shell` (the outermost wrapper) as a `::after` pseudo-element:
```css
.site-shell::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```
Reuses the exact same inline SVG fractalNoise already used for `.aurora-noise` in `globals.css`. Opacity: `0.035`. Applied at the shell level so it overlays everything uniformly.

---

## 2. Shape Language

**Rule:** Nothing is `border-radius: 9999px` (pill) anymore except the status dot. Nothing is `18px` anymore. The single radius token is **`6px`**.

| Element | Old radius | New radius |
|---|---|---|
| About cards | 18px | 6px |
| Project cards | 18px | 6px |
| Contact cards | 18px | 6px |
| Project modal | 18px | N/A (drawer, no radius needed on panel edge) |
| Buttons (all) | 9999px | 6px |
| Sidebar nav links | 11px box | No box (plain rows) |
| Sidebar social icons | 9999px circle | 6px square |
| Sidebar mobile trigger | 9999px circle | 6px square |
| Sidebar close button | 9999px | 6px |
| Project card icon badge | 9999px circle | 6px square |
| Modal close button | 9999px | 6px |

---

## 3. Card Treatment

### Shared card pattern (about, contact, project)
```
- border-radius: 6px
- border: 1px solid rgba(255,255,255,0.07)  (at rest)
- background: rgba(255,255,255,0.03) + backdrop-filter: blur(12px)
- position: relative; overflow: hidden
```

**Hover state** — replaces the current "border turns blue" generic glow:
- A `::before` pseudo-element creates a `2px` wide left-edge accent stripe
- Stripe color: `var(--accent)` (indigo `#818cf8`)
- Animates via `transform: scaleY(0→1)` with `transform-origin: top`, ~`0.25s ease`
- Border at rest stays `rgba(255,255,255,0.07)` — does NOT turn blue on hover
- Background brightens slightly: `rgba(255,255,255,0.045)` on hover

### About cards — additional detail
- A small index label (`01`, `02`, `03`) added in the top-right corner
- Styling: `font-size: 11px`, monospace, `color: var(--ink-faint)`, `opacity: 0.5`
- This distinguishes them from generic "feature cards" and adds editorial character

### Contact cards — restructured
- Icon: top-left corner (unchanged position)
- Label + value: stacked below (unchanged)
- Arrow indicator: top-right (unchanged)
- New: a `1px` bottom rule (`rgba(255,255,255,0.07)`) between label and value — adds structure
- Hover: left-stripe accent, same as other cards

### Project cards — icon badge
- `ArrowUpRight` badge: was `border-radius: 9999px` circle → now `6px` square
- On hover: fills with `var(--accent)` (indigo) instead of blue

---

## 4. Project Modal — Right-Side Drawer

Replaces the centered floating box entirely.

### Behavior
- Slides in from the **right edge of the viewport** (not sidebar edge — right side of full window)
- Backdrop: darkens rest of the screen, no blur on backdrop
- Panel: full viewport height (`100dvh`), fixed position
- Width: `min(560px, 100vw)` on desktop

### Mobile
- On `max-width: 767px`: slides up from bottom as a sheet
- Height: `90dvh` — leaves a small gap at top for backdrop tap
- Has a `3px` drag-handle indicator at top

### Visual treatment
```css
background: rgba(12, 12, 18, 0.88);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border-left: 1px solid rgba(255, 255, 255, 0.10);
```

### Layout (inside panel)
1. **Image** — full-width, `16:9` aspect ratio at top of panel
2. **Content area** — padding `1.75rem 2rem`, scrollable
   - Role label (accent, uppercase, 12px)
   - Project name (display, 28px, bold)
   - Description paragraph
   - Role meta row
   - "View live site" button (6px radius, indigo fill)
3. **Close button** — top-right corner of panel, `6px` radius square, `X` icon, no fill at rest

### Animation
- Entry: `x: 100% → 0`, `opacity: 0 → 1`, `duration: 0.32s`, `ease: [0.22, 1, 0.36, 1]`
- Exit: `x: 0 → 100%`, `opacity: 1 → 0`, `duration: 0.22s`

---

## 5. Buttons

```css
border-radius: 6px; /* was 9999px */
```

**Primary button** — gains inner highlight:
```css
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
```

**Ghost button** — same `6px` radius, outlined with `var(--accent)` (indigo).

All other sizing, padding, and font properties unchanged.

---

## 6. Sidebar

### Nav links
- **Remove** the box background (`var(--surface-1)`) and border (`var(--hairline)`) at rest and hover
- Nav link is now a plain row: icon + label, no container box
- **Active / hover state**: a `2px` left accent stripe (same `::before` stripe language as cards), indigo color
- Icon color: `var(--accent)` when active/hovered (unchanged)
- Label text: `var(--ink)` when active/hovered (unchanged)
- No `border-radius` needed since there's no box

### Social icon buttons
```css
border-radius: 6px; /* was 9999px */
```
Width/height unchanged (`2.25rem`).

### Mobile trigger button
```css
border-radius: 6px; /* was 9999px */
```

### Close button (mobile drawer)
```css
border-radius: 6px; /* was 9999px */
```

---

## Files Affected

| File | Changes |
|---|---|
| `app/globals.css` | Color tokens, card styles, button radius, modal → drawer styles, grain texture on shell |
| `components/Sidebar.css` | Nav link style (remove box), social/trigger/close button radius |
| `app/(site)/about/page.tsx` | Add index labels (`01`, `02`, `03`) to about cards |
| `app/(site)/projects/page.tsx` | Replace modal with drawer component |

---

## Out of Scope

- Animations on page transitions (existing Framer Motion variants stay)
- Typography scale (unchanged)
- Layout grid / spacing (unchanged)
- Aurora background component (unchanged)
- ProfileTiltedCard (unchanged)
