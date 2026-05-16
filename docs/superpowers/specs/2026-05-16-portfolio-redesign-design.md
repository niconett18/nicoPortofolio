# Portfolio Redesign — Design Spec

**Date:** 2026-05-16
**Owner:** Nicholas Edmund Tanaka
**Goal:** Apply DESIGN.md's Apple typographic & component grammar to the existing dark-mode portfolio, deepen profile/projects/studies presentation, no new pages.

## Scope

- **Audience:** Balanced — recruiters and freelance clients.
- **Keep:** Dark theme, 4-page structure (Home / About / Projects / Contact), sidebar layout, existing animation system, ProfileTiltedCard, Aurora background.
- **Add:** Education block on About, optional tech-stack chips on project cards.
- **Replace:** Space Grotesk + Inter font → SF Pro Display / SF Pro Text system stack. All component typography to DESIGN.md tokens.
- **Out of scope:** New pages, blog, services page, testimonials, project detail routes.

## Design Tokens

### Colors
| Token | Value | Role |
|---|---|---|
| `--canvas` | `#050508` | Page background |
| `--surface-1` | `#0c0c11` | First tile lift — about-cards, project-card |
| `--surface-2` | `#13131a` | Second lift — modal, sticky surfaces |
| `--ink` | `#f5f5f7` | Headlines & body text |
| `--ink-muted` | `#a1a1aa` | Secondary copy |
| `--ink-faint` | `#52525b` | Captions, eyebrows |
| `--accent` | `#2997ff` | THE single accent (DESIGN.md `primary-on-dark`) |
| `--accent-focus` | `#0a84ff` | Focus ring |
| `--hairline` | `rgba(255,255,255,0.06)` | Borders, dividers |
| `--shadow-product` | `0 8px 40px rgba(0,0,0,0.55)` | Project/profile imagery only |

### Typography
Stack: `"SF Pro Display", system-ui, -apple-system, BlinkMacSystemFont, "Inter", sans-serif` (display) · `"SF Pro Text", ...` (text).

| Token | Size · Weight · LH · Tracking |
|---|---|
| `hero-display` | 56 · 600 · 1.07 · -0.28px |
| `display-lg` | 40 · 600 · 1.10 · 0 |
| `display-md` | 34 · 600 · 1.47 · -0.374px |
| `lead` | 28 · 400 · 1.14 · 0.196px |
| `tagline` | 21 · 600 · 1.19 · 0.231px |
| `body` | 17 · 400 · 1.47 · -0.374px |
| `caption` | 14 · 400 · 1.43 · -0.224px |
| `caption-strong` | 14 · 600 · 1.29 · -0.224px |
| `nav-link` | 12 · 400 · 1.0 · -0.12px |

### Spacing
4 · 8 · 12 · 17 · 24 · 32 · 48 · 80 (`xxs · xs · sm · md · lg · xl · xxl · section`)

### Radius
0 (tiles) · 8 (sm utility) · 11 (md capsule) · 18 (lg card) · 9999 (pill)

### Motion
- Active state on every button: `transform: scale(0.95)` (replaces translateY hovers)
- Hover: subtle border/bg shift, no transforms

## Components

- **Pill primary CTA**: bg `--accent`, text white, `rounded: pill`, 11×22px, body typography.
- **Pill ghost**: transparent, text `--accent`, 1px `--accent` border, `rounded: pill`, same padding.
- **Utility button**: bg `--surface-1`, `rounded: sm` (8px), 8×15px, caption typography.
- **Card**: bg `--surface-1`, 1px `--hairline`, `rounded: lg` (18px), 24px padding. NO shadow on card itself.
- **Single drop-shadow**: applied only to project thumbnails and the ProfileTiltedCard.

## Page-by-Page Changes

### Home
- Replace the giant uppercase 120px split title with `hero-display` (56px / 600 / -0.28px) on a single line, mixed case ("Nicholas Edmund").
- Eyebrow: `caption-strong` (was `0.7rem` uppercase with 0.2em spacing) — same intent, real token.
- Lead paragraph: bump to `lead` (28px / 400) for editorial weight.
- CTAs: two pills — primary blue + ghost (currently white-on-dark + white-border ghost).
- ProfileTiltedCard: keep, attach single product shadow.

### About
- Heading: `display-lg`. Intro: `body`.
- About-cards keep 2-col grid; titles use `caption-strong` for eyebrow, body for copy. Add **third "Education" card** with: program, university, year/term, and a one-line note.
- Stack section: heading `display-md`, group labels `caption-strong`, item rows `body`.

### Projects
- Heading: `display-lg`. Intro: `body`.
- Cards adopt store-utility-card grammar (dark variant): `--surface-1` bg, hairline border, `rounded: lg`, padding 24px.
- Title: `tagline` (21px / 600). Role: `caption-strong`. Desc: `caption` (clamped at 2 lines).
- Thumbnail keeps 4:3 ratio with the single drop-shadow inside the card.
- Modal: title `display-md`, copy `body`, role meta `caption-strong`, "View live site" CTA → pill primary.

### Contact
- Heading: `display-lg` ("Let's build something exceptional.") with `--ink-faint` modifier on "something".
- Intro: `body`.
- Two contact cards: same card grammar (surface-1, hairline, rounded-lg).

### Sidebar
- Logo "Nicholas Edmund Tanaka": `caption-strong`.
- Nav labels: `nav-link` (12 / 400 / -0.12px) with slightly more vertical room.
- Active state: keep current treatment but text in `--ink` and bar in `--accent`.
- Status pill: `caption` with `--ink-faint`.

### Footer
- Body: `caption` with `--ink-faint`.

### Global
- Body baseline 17px (was 16px).
- Selection color updates to `--accent` at 30%.
- Aurora background kept; vignette tightened slightly so it doesn't fight the new type.

## Implementation Order

1. **`app/globals.css`** — replace `@theme`, `:root`, font import. Add typography utility classes (`.t-hero-display`, `.t-display-lg`, etc.) AND map existing class names (`.page-heading`, `.page-title`, `.page-lead`, etc.) to new tokens to minimize JSX churn.
2. **`app/layout.tsx`** — remove `next/font/google` Inter, drop the `--font-inter` variable, update body classes.
3. **Component CSS** — `Sidebar.css`, `TiltedCard.css` updated to new tokens.
4. **Page JSX** — Home: drop uppercase split title, single mixed-case hero. About: add Education card. Projects: card markup unchanged except chip optional. Sidebar: remove decorative gradient bar above logo (replaced by typography).
5. **`tailwind` theme** — `--font-sans` becomes SF Pro Text stack so Tailwind's `font-sans` resolves correctly.

## Acceptance

- All headlines render in SF Pro Display (or Inter fallback on Windows).
- Body copy is 17px with -0.374px tracking.
- Sky Blue `#2997ff` is the ONLY accent anywhere — no green, no purple, no second blue.
- All buttons press to `scale(0.95)` on active.
- Project thumbnails and profile card carry the single drop-shadow; no other element does.
- Education card visible on /about.
- Site still builds with `npm run build`.
