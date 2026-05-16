@AGENTS.md

# nicoPortfolio — Project Context

## What This Is

Personal portfolio site for **Nicholas Edmund Tanaka** — Fullstack Software Developer and Computer Engineering student at Universitas Indonesia. Deployed as a static site via GitHub Pages.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| Language | TypeScript + JSX (mixed — some components are `.jsx`) |
| Styling | Tailwind CSS v4 + plain CSS files per component |
| Animation | Framer Motion / Motion v12 |
| 3D | Three.js, OGL |
| Icons | Lucide React, react-icons (SI set) |
| Font | Space Grotesk (Google Fonts), Inter (Next.js font) |

## File Structure

```
app/
  layout.tsx              — root layout: Inter font, dark bg (#050508), global meta
  globals.css             — all shared CSS: layout, page sections, component classes
  (site)/
    layout.tsx            — wraps all pages in <SiteShell>
    page.tsx              — Home (hero with ProfileTiltedCard)
    about/page.tsx        — About + tech stack grid
    projects/page.tsx     — Projects grid with modal
    contact/page.tsx      — Contact cards (email + resume)
components/
  SiteShell.jsx           — layout wrapper: Aurora bg + Sidebar + main + Footer
  Sidebar.jsx             — left sidebar nav (desktop fixed, mobile drawer)
  Sidebar.css             — sidebar styles
  Aurora.jsx / .css       — animated aurora background canvas
  AuroraBackground.jsx    — wrapper that renders Aurora
  Footer.jsx              — site footer
  ProfileTiltedCard.jsx   — 3D tilting profile card on home hero
  TiltedCard.jsx / .css   — generic tilted card component
  LiquidEther.jsx         — WebGL liquid/ether visual effect (OGL)
lib/
  animations.ts           — shared Framer Motion variants (fadeUp, staggerContainer, lineReveal, pageEnter, modalContentStagger)
  projects.ts             — Project[] data array (6 projects)
  useBreakpoint.js        — responsive breakpoint hook
assets/web/               — project screenshot images (PNG)
public/                   — static assets (card.glb, profile-card.jpg, SVGs)
```

## Design System

- **Background**: `#050508` (near-black)
- **Foreground**: `#f4f4f5` (zinc-100)
- **Accent**: `#3b82f6` (blue-500), soft `#60a5fa`
- **Sidebar width**: `17rem` (desktop fixed left panel)
- CSS is written as utility classes in `globals.css` — prefix pattern: `page-*`, `sidebar-*`, `project-*`, `contact-*`, `about-*`, `stack-*`, `site-*`
- No CSS Modules; Tailwind used sparingly for one-off utilities
- Responsive breakpoints: mobile `<768px`, tablet `768–1023px`, desktop `≥1024px`

## Pages & Nav

| Route | Label | Icon |
|---|---|---|
| `/` | Home | Home |
| `/about` | About | UserRound |
| `/projects` | Projects | FolderKanban |
| `/contact` | Contact | Mail |

## Owner Info

- **Name**: Nicholas Edmund Tanaka
- **Email**: nicholasedmund18@gmail.com
- **GitHub**: github.com/niconett18
- **Instagram**: instagram.com/niconet18/
- **Status shown in sidebar**: "Available for work"

## Projects Data (`lib/projects.ts`)

6 entries: sumopower.id, cloudream.id, Fore Nico, G2M Church, To-Do List by Nico, Idzhar Dwi Karya. Each has `id`, `name`, `url`, `desc`, `role`, `image`, `imageAlt`.

## Dev Commands

```powershell
npm run dev      # start dev server
npm run build    # production build
npm run lint     # ESLint
```

## Key Conventions

- Pages under `app/(site)/` use the shared `SiteShell` layout automatically via `(site)/layout.tsx`
- All pages are `'use client'` — animations require client-side rendering
- Heavy 3D components (ProfileTiltedCard) are loaded with `next/dynamic` + `ssr: false` to avoid SSR errors
- Animation variants live in `lib/animations.ts` — reuse them, don't inline one-offs
- CSS class names follow the `{block}-{element}--{modifier}` BEM-like pattern defined in `globals.css`
