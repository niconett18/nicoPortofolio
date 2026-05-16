# UI Redesign — Structured Editorial + Frosted Glass — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace every generic pill/rounded container with a 6px shape language, frosted glass surfaces, left-stripe hover accents, and a right-side drawer modal — making the portfolio feel handcrafted rather than template-assembled.

**Architecture:** Pure CSS/JSX changes across four files. No new components needed. The project modal is replaced by a fixed right-panel drawer using Framer Motion's AnimatePresence. The sidebar nav active indicator moves from a Framer Motion `layoutId` span to a CSS `::before` stripe, removing the JS hover-tracking state.

**Tech Stack:** Next.js App Router, Tailwind CSS v4, Framer Motion v12, plain CSS files

**Spec:** `docs/superpowers/specs/2026-05-16-ui-redesign-design.md`

---

## Files Modified

| File | What changes |
|---|---|
| `app/globals.css` | Accent tokens, grain texture, card frosted glass + 6px + stripe, button 6px, icon badge 6px, contact label rule, about-card-index class, remove old modal CSS, add drawer CSS |
| `components/Sidebar.css` | Nav link: remove box, add `::before` stripe; social/trigger/close: `9999px → 6px` |
| `components/Sidebar.jsx` | Remove `hovered` state + hover-bar + glow elements |
| `app/(site)/about/page.tsx` | Add `01 / 02 / 03` index spans inside about cards |
| `app/(site)/projects/page.tsx` | Replace modal JSX with right-side drawer (+ mobile bottom sheet) |

---

## Task 1: Accent color tokens + grain texture

**Files:**
- Modify: `app/globals.css` — `@theme` block and `:root` block and `.site-shell`

- [ ] **Step 1: Update `@theme` block accent tokens**

In `app/globals.css`, find the `@theme` block and replace the two accent lines:

```css
@theme {
  --color-canvas: #050508;
  --color-surface-1: #0c0c11;
  --color-surface-2: #13131a;
  --color-ink: #f5f5f7;
  --color-ink-muted: #a1a1aa;
  --color-ink-faint: #52525b;
  --color-accent: #818cf8;
  --color-accent-focus: #6366f1;

  --font-sans: "SF Pro Text", system-ui, -apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-display: "SF Pro Display", system-ui, -apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue", Arial, sans-serif;
}
```

- [ ] **Step 2: Update `:root` accent + soft tokens and selection color**

In `app/globals.css`, find the `:root` block. Replace the three accent lines and the `::selection` rule:

```css
    /* accent */
    --accent: #818cf8;
    --accent-focus: #6366f1;
```

```css
    /* legacy shims kept so existing utility refs still resolve */
    --background: var(--canvas);
    --foreground: var(--ink);
    --accent-soft: #c7d2fe;
```

```css
  ::selection {
    background: rgba(129, 140, 248, 0.3);
    color: var(--ink);
  }
```

- [ ] **Step 3: Add grain texture to `.site-shell`**

In `app/globals.css`, find the `.site-shell` rule and add the `::after` pseudo-element directly after it:

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

- [ ] **Step 4: Verify build**

```powershell
npm run build
```

Expected: no TypeScript or build errors.

- [ ] **Step 5: Commit**

```powershell
git add app/globals.css
git commit -m "style: swap accent to indigo + add grain texture overlay"
```

---

## Task 2: Card frosted glass + 6px radius + left-stripe hover

**Files:**
- Modify: `app/globals.css` — `.about-card`, `.contact-card`, `.project-card` sections

- [ ] **Step 1: Replace `.about-card` styles**

In `app/globals.css`, replace the entire `.about-card` rule and its existing hover rule:

```css
.about-card {
  position: relative;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  transition: background 0.3s;
}

.about-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.25s ease;
}

.about-card:hover {
  background: rgba(255, 255, 255, 0.045);
}

.about-card:hover::before {
  transform: scaleY(1);
}
```

Leave `.about-card h3`, `.about-card p`, and `.about-card-meta` styles unchanged.

- [ ] **Step 2: Replace `.contact-card` styles**

In `app/globals.css`, replace the entire `.contact-card` rule and its existing hover/active rules:

```css
.contact-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: background 0.3s, transform 0.15s;
}

.contact-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.25s ease;
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.045);
}

.contact-card:hover::before {
  transform: scaleY(1);
}

.contact-card:active {
  transform: scale(0.99);
}
```

Leave `.contact-card svg:first-child`, `.contact-card:hover svg:first-child`, `.contact-card-label`, `.contact-card-value`, and `.contact-card-arrow` / `.contact-card:hover .contact-card-arrow` unchanged for now (updated in Task 3).

- [ ] **Step 3: Replace `.project-card` styles**

In `app/globals.css`, replace the `.project-card` rule and its existing hover/active rules:

```css
.project-card {
  position: relative;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s, transform 0.15s;
  font-family: inherit;
  color: inherit;
}

.project-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.25s ease;
  z-index: 2;
}

.project-card:hover {
  background: rgba(255, 255, 255, 0.045);
}

.project-card:hover::before {
  transform: scaleY(1);
}

.project-card:active {
  transform: scale(0.99);
}
```

- [ ] **Step 4: Update `.project-card-image` border**

Find `.project-card-image` and update the `border-bottom` to match the new surface system:

```css
.project-card-image {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  filter: drop-shadow(var(--shadow-product));
}
```

- [ ] **Step 5: Run dev server and visually verify**

```powershell
npm run dev
```

Open `http://localhost:3000/about` and `http://localhost:3000/contact` in browser. Check:
- Cards are semi-transparent with aurora visible through them
- Card corners are sharp (6px) — not rounded pills
- Hovering a card shows a 2px indigo stripe sliding in from the top on the left edge
- No blue border-color change on hover (the old behavior is gone)

- [ ] **Step 6: Commit**

```powershell
git add app/globals.css
git commit -m "style: frosted glass cards with 6px radius and left-stripe hover"
```

---

## Task 3: Buttons + icon badge + contact label rule

**Files:**
- Modify: `app/globals.css` — `.page-btn`, `.page-btn--primary`, `.project-card-icon`, `.contact-card-label`

- [ ] **Step 1: Update `.page-btn` border-radius**

Find `.page-btn` in `app/globals.css` and change `border-radius: 9999px` to `border-radius: 6px`:

```css
.page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 2.75rem;
  padding: 11px 22px;
  font-family: var(--font-text);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.24;
  letter-spacing: -0.374px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
  cursor: pointer;
}
```

- [ ] **Step 2: Add inner highlight to `.page-btn--primary`**

Find `.page-btn--primary` and add the `box-shadow` line:

```css
.page-btn--primary {
  background: var(--accent);
  color: #ffffff;
  border-color: var(--accent);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
}
```

- [ ] **Step 3: Update `.project-card-icon` border-radius**

Find `.project-card-icon` and change `border-radius: 9999px` to `border-radius: 6px`:

```css
.project-card-icon {
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid var(--hairline);
  border-radius: 6px;
  color: var(--ink-muted);
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}
```

- [ ] **Step 4: Add bottom rule to `.contact-card-label`**

Find `.contact-card-label` and add `padding-bottom` + `border-bottom`:

```css
.contact-card-label {
  font-family: var(--font-text);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.224px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.45rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
```

- [ ] **Step 5: Visually verify in dev server**

Open `http://localhost:3000` and `http://localhost:3000/projects` in browser. Check:
- "View projects" and "Get in touch" buttons are rectangular (6px corners), not pills
- Primary button has a subtle glossy top-edge highlight
- Project card arrow icon badge is a square, not a circle — fills with indigo on hover

- [ ] **Step 6: Commit**

```powershell
git add app/globals.css
git commit -m "style: 6px buttons with inner highlight, square icon badge, contact label rule"
```

---

## Task 4: Sidebar CSS — plain nav rows + 6px squares

**Files:**
- Modify: `components/Sidebar.css`

- [ ] **Step 1: Replace `.sidebar-link` and its child rules**

In `components/Sidebar.css`, replace the entire `.sidebar-link`, `.sidebar-link:hover`, `.sidebar-link--active`, `.sidebar-link-icon`, `.sidebar-link-label`, `.sidebar-link-glow`, and `.sidebar-link-hover-bar` / `.sidebar-link--active .sidebar-link-glow` block with:

```css
.sidebar-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 2.75rem;
  padding: 0.5rem 0.9rem 0.5rem 1.1rem;
  text-decoration: none;
  color: var(--ink-muted);
  transition: color 0.2s ease;
}

.sidebar-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: var(--accent);
  border-radius: 0 1px 1px 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.2s ease;
}

.sidebar-link:hover {
  color: var(--ink);
}

.sidebar-link:hover::before {
  transform: scaleY(1);
}

.sidebar-link--active {
  color: var(--ink);
}

.sidebar-link--active::before {
  transform: scaleY(1);
}

.sidebar-link-icon {
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  color: var(--ink-muted);
  transition: color 0.2s ease;
}

.sidebar-link:hover .sidebar-link-icon,
.sidebar-link--active .sidebar-link-icon {
  color: var(--accent);
}

.sidebar-link-label {
  position: relative;
  z-index: 1;
  font-family: var(--font-text);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: -0.224px;
}
```

- [ ] **Step 2: Update `.sidebar-social` border-radius**

Find `.sidebar-social` and change `border-radius: 9999px` to `border-radius: 6px`:

```css
.sidebar-social {
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid var(--hairline);
  border-radius: 6px;
  background: transparent;
  color: var(--ink-muted);
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.15s;
}
```

- [ ] **Step 3: Update `.sidebar-mobile-trigger` border-radius**

Find `.sidebar-mobile-trigger` and change `border-radius: 9999px` to `border-radius: 6px`:

```css
.sidebar-mobile-trigger {
  display: none;
  position: fixed;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 60;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--hairline);
  border-radius: 6px;
  background: rgba(10, 10, 14, 0.92);
  backdrop-filter: blur(14px);
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, transform 0.15s;
}
```

- [ ] **Step 4: Update `.sidebar-close` border-radius**

Find `.sidebar-close` and change `border-radius: 9999px` to `border-radius: 6px`:

```css
.sidebar-close {
  display: none;
  width: 2.75rem;
  height: 2.75rem;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--hairline);
  border-radius: 6px;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, color 0.2s, transform 0.15s;
}
```

Also update the mobile responsive override in the `@media (max-width: 1023px)` block — remove the `border-radius: 0 18px 18px 0` on `.sidebar` (the mobile drawer panel). Replace it with `border-radius: 0 6px 6px 0`:

```css
  .sidebar {
    width: min(19rem, calc(100vw - 1rem));
    transform: translateX(-100%);
    border-right: 1px solid var(--hairline);
    border-radius: 0 6px 6px 0;
    box-shadow: 10px 0 36px rgba(0, 0, 0, 0.35);
    transition: transform 0.44s cubic-bezier(0.22, 1, 0.36, 1);
    padding-bottom: env(safe-area-inset-bottom, 0px);
    will-change: transform;
  }
```

- [ ] **Step 5: Verify**

```powershell
npm run build
```

Expected: no errors.

- [ ] **Step 6: Commit**

```powershell
git add components/Sidebar.css
git commit -m "style: plain sidebar nav rows with ::before stripe, 6px square icon buttons"
```

---

## Task 5: Sidebar JSX — remove hover state and glow elements

**Files:**
- Modify: `components/Sidebar.jsx`

- [ ] **Step 1: Remove `hovered` state**

Find line 21:
```jsx
const [hovered, setHovered] = useState(null);
```

Delete that line entirely.

- [ ] **Step 2: Remove `onMouseLeave` from `<nav>`**

Find the `<nav>` opening tag (line 115):
```jsx
<nav className="sidebar-nav" onMouseLeave={() => setHovered(null)}>
```

Change it to:
```jsx
<nav className="sidebar-nav">
```

- [ ] **Step 3: Remove `onMouseEnter` from `<Link>`**

Find the `<Link>` element inside the `NAV.map`. Remove the `onMouseEnter` prop:

```jsx
<Link
  href={item.href}
  onClick={closeMobile}
  className={`sidebar-link ${active ? 'sidebar-link--active' : ''}`}
  aria-current={active ? 'page' : undefined}
>
```

- [ ] **Step 4: Remove the glow and hover-bar motion spans**

Inside the `<Link>`, find and remove these two conditional blocks:

```jsx
{active && (
  <motion.span
    layoutId="sidebar-active"
    className="sidebar-link-glow"
    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
  />
)}
{hovered === item.href && !active && (
  <motion.span
    layoutId="sidebar-hover"
    className="sidebar-link-hover-bar"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
  />
)}
```

The `<Link>` body should now be just:
```jsx
<Link
  href={item.href}
  onClick={closeMobile}
  className={`sidebar-link ${active ? 'sidebar-link--active' : ''}`}
  aria-current={active ? 'page' : undefined}
>
  <item.icon className="sidebar-link-icon" size={16} strokeWidth={1.8} aria-hidden="true" />
  <span className="sidebar-link-label">{item.label}</span>
</Link>
```

- [ ] **Step 5: Visually verify sidebar in dev server**

Open `http://localhost:3000` and check the sidebar:
- Nav links have no background box — just icon + text rows
- Active page shows a 2px indigo left stripe
- Hovering a non-active link shows the stripe animating in
- Social icon buttons and mobile trigger are square (6px corners)

Navigate between pages and check the active stripe updates correctly.

- [ ] **Step 6: Commit**

```powershell
git add components/Sidebar.jsx
git commit -m "style: remove layout-animated glow spans, sidebar active state now CSS-only"
```

---

## Task 6: About card index labels

**Files:**
- Modify: `app/globals.css` — add `.about-card-index`
- Modify: `app/(site)/about/page.tsx` — add index spans

- [ ] **Step 1: Add `.about-card-index` CSS**

In `app/globals.css`, inside the `/* ===== About ===== */` section, add after `.about-card-meta`:

```css
.about-card-index {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-family: monospace;
  font-size: 11px;
  line-height: 1;
  color: var(--ink-faint);
  opacity: 0.5;
  user-select: none;
  pointer-events: none;
}
```

- [ ] **Step 2: Add index spans to the three about cards**

In `app/(site)/about/page.tsx`, add a `<span className="about-card-index">` as the **first child** of each `<motion.article className="about-card">`:

```tsx
<motion.article variants={fadeUp} className="about-card">
  <span className="about-card-index">01</span>
  <h3>Focus</h3>
  <p>
    Next.js &amp; React ecosystem, backend architecture, and high-performance user
    interfaces.
  </p>
</motion.article>
<motion.article variants={fadeUp} className="about-card">
  <span className="about-card-index">02</span>
  <h3>Education</h3>
  <p>Computer Engineering</p>
  <p className="about-card-meta">
    Universitas Indonesia &middot; expected 2027
  </p>
</motion.article>
<motion.article variants={fadeUp} className="about-card">
  <span className="about-card-index">03</span>
  <h3>Currently</h3>
  <p>
    Shipping freelance web work and exploring AI-assisted developer tooling.
  </p>
</motion.article>
```

- [ ] **Step 3: Verify in dev server**

Open `http://localhost:3000/about`. Each of the three info cards should show a faint monospaced `01`, `02`, `03` in the top-right corner.

- [ ] **Step 4: Commit**

```powershell
git add app/globals.css app/(site)/about/page.tsx
git commit -m "style: add editorial index labels to about cards"
```

---

## Task 7: Drawer CSS — remove old modal, add drawer styles

**Files:**
- Modify: `app/globals.css` — remove `/* ===== Project modal ===== */` section, add drawer CSS

- [ ] **Step 1: Remove the entire old modal CSS block**

In `app/globals.css`, find and delete everything from `/* ===== Project modal ===== */` through the closing `}` of `.project-modal-image` (the full block including all `.project-modal-*` rules and their responsive overrides inside `@media (min-width: 768px)` and `@media (min-width: 1024px)`).

The lines to remove start at `/* ===== Project modal ===== */` and include:
- `.project-modal-backdrop`
- `.project-modal`
- `.project-modal-header`
- `.project-modal-header h3`
- `.project-modal-header button` + `:hover` + `:active`
- `.project-modal-content`
- The `@media (min-width: 768px)` overrides for backdrop, header, content
- `@media (min-width: 1024px)` override for content
- `.project-modal-copy`
- `.project-modal-copy h4`
- `.project-modal-copy p`
- `.project-modal-meta`
- `.project-modal-meta span`
- `.project-modal-meta p`
- `.project-modal-image`

- [ ] **Step 2: Add drawer CSS in place of the deleted modal block**

In `app/globals.css`, where the modal block was, add:

```css
/* ===== Project Drawer ===== */
.project-drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(5, 5, 8, 0.75);
}

.project-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  width: min(560px, 100vw);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(12, 12, 18, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.10);
}

.project-drawer-handle {
  display: none;
  width: 3rem;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  margin: 0.85rem auto 0;
  flex-shrink: 0;
}

.project-drawer-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.project-drawer-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1.75rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

.project-drawer-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 2.25rem;
  height: 2.25rem;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: transparent;
  color: var(--ink-muted);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
  flex-shrink: 0;
  z-index: 1;
}

.project-drawer-close:hover {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.project-drawer-close:active {
  transform: scale(0.95);
}

.project-drawer-role {
  font-family: var(--font-text);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent);
}

.project-drawer-title {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: 0.196px;
  color: var(--ink);
  padding-right: 3.5rem;
}

.project-drawer-desc {
  font-family: var(--font-text);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.47;
  letter-spacing: -0.374px;
  color: var(--ink);
}

.project-drawer-meta-label {
  font-family: var(--font-text);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent);
  margin-bottom: 0.3rem;
}

.project-drawer-meta-value {
  font-family: var(--font-text);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.47;
  letter-spacing: -0.374px;
  color: var(--ink);
}

@media (max-width: 767px) {
  .project-drawer {
    top: auto;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 90dvh;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 12px 12px 0 0;
  }

  .project-drawer-handle {
    display: block;
  }
}
```

- [ ] **Step 3: Verify build**

```powershell
npm run build
```

Expected: no errors (the old modal classes are referenced in the JSX we haven't updated yet — this will cause a lint/build warning but not a hard error since CSS class names are strings).

Actually: `npm run build` may fail if `project-modal-*` classes are still in `projects/page.tsx`. Run this instead to just check CSS syntax:

```powershell
npm run dev
```

Expected: dev server starts. The projects page will temporarily not show a modal when clicking cards — that's expected since we haven't updated the JSX yet.

- [ ] **Step 4: Commit**

```powershell
git add app/globals.css
git commit -m "style: remove old modal CSS, add project drawer panel styles"
```

---

## Task 8: Drawer JSX — replace modal with drawer in projects/page.tsx

**Files:**
- Modify: `app/(site)/projects/page.tsx`

- [ ] **Step 1: Update imports**

In `app/(site)/projects/page.tsx`, the existing imports are fine (`useState`, `Image`, `motion`, `AnimatePresence`, `ArrowUpRight`, `X`, `ExternalLink`). Add `useEffect`:

```tsx
import { useState, useEffect } from 'react';
```

- [ ] **Step 2: Add mobile detection state**

After the `selectedProject` useState declaration, add:

```tsx
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const mq = window.matchMedia('(max-width: 767px)');
  setIsMobile(mq.matches);
  const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
  mq.addEventListener('change', handler);
  return () => mq.removeEventListener('change', handler);
}, []);
```

- [ ] **Step 3: Add body scroll lock**

After the mobile detection effect, add:

```tsx
useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => { document.body.style.overflow = ''; };
}, [selectedProject]);
```

- [ ] **Step 4: Replace the AnimatePresence block**

Find the entire `<AnimatePresence>` block (from `<AnimatePresence>` to `</AnimatePresence>`) and replace it with:

```tsx
<AnimatePresence>
  {selectedProject && (
    <>
      <motion.div
        className="project-drawer-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={() => setSelectedProject(null)}
      />
      <motion.div
        className="project-drawer"
        initial={isMobile ? { y: '100%', opacity: 0 } : { x: '100%', opacity: 0 }}
        animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
        exit={isMobile ? { y: '100%', opacity: 0 } : { x: '100%', opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="project-drawer-handle" />
        <div className="project-drawer-image">
          <Image
            src={selectedProject.image}
            alt={selectedProject.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 560px"
            className="object-cover"
            priority
          />
        </div>
        <div className="project-drawer-body">
          <button
            type="button"
            className="project-drawer-close"
            onClick={() => setSelectedProject(null)}
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <p className="project-drawer-role">{selectedProject.role}</p>
          <h3 className="project-drawer-title">{selectedProject.name}</h3>
          <p className="project-drawer-desc">{selectedProject.desc}</p>
          <div>
            <p className="project-drawer-meta-label">Role</p>
            <p className="project-drawer-meta-value">{selectedProject.role}</p>
          </div>
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="page-btn page-btn--primary"
          >
            View live site
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
```

Also remove the unused import `modalContentStagger` from the import line since it was only used by the old modal:

```tsx
import { fadeUp, staggerContainer } from '../../../lib/animations';
```

- [ ] **Step 5: Verify in dev server — full flow**

```powershell
npm run dev
```

Open `http://localhost:3000/projects` and:

1. Click any project card — a panel should slide in from the right edge of the screen (not a centered popup)
2. The panel should be full viewport height
3. Check the panel shows: project image (16:9) at top, then role/title/description/meta/button below
4. The close button (top-right of panel) should be a 6px square, fills indigo on hover
5. Clicking outside the panel (on the dark backdrop) closes it
6. Press Escape — should NOT close (unless you add a keydown handler; that's out of scope)
7. Resize browser to < 768px width — panel should instead slide up from the bottom, be 90dvh tall, and show a drag-handle indicator at the top

- [ ] **Step 6: Run full build**

```powershell
npm run build
```

Expected: clean build, zero TypeScript errors.

- [ ] **Step 7: Run lint**

```powershell
npm run lint
```

Expected: no errors.

- [ ] **Step 8: Commit**

```powershell
git add "app/(site)/projects/page.tsx"
git commit -m "feat: replace centered modal with right-side drawer panel (bottom sheet on mobile)"
```

---

## Self-Review Checklist

After all 8 tasks, verify against the spec:

| Spec requirement | Task |
|---|---|
| Accent: `#818cf8` indigo | Task 1 |
| Grain texture `3.5%` on shell | Task 1 |
| Cards: `6px` radius | Task 2 |
| Cards: frosted glass surface | Task 2 |
| Cards: left-stripe hover (not blue border) | Task 2 |
| Contact card: label/value bottom rule | Task 3 |
| Buttons: `6px` radius | Task 3 |
| Primary button: inner highlight | Task 3 |
| Project card icon badge: `6px` square | Task 3 |
| Sidebar nav: plain rows, no box | Tasks 4–5 |
| Sidebar active: `::before` stripe | Task 4 |
| Sidebar socials/trigger/close: `6px` | Task 4 |
| About cards: `01/02/03` index labels | Task 6 |
| Modal → right-side drawer | Tasks 7–8 |
| Drawer: frosted glass, full height | Task 7 |
| Drawer: mobile bottom sheet (`90dvh`) | Tasks 7–8 |
| Drawer: close button `6px` square | Tasks 7–8 |
