# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server → http://localhost:5173
npm run build    # Typecheck (tsc -b) + Vite bundle → dist/
npm run preview  # Serve dist/ locally
npm run lint     # ESLint
npx tsc --noEmit # Type-check only, no output
```

## Stack

- **Vite 8** + **React 19** + **TypeScript 6**
- **Tailwind CSS v4** — CSS-first config. No `tailwind.config.js`. Tokens and keyframes live in `src/index.css` under `@theme` and `@keyframes`.

## Architecture

Single-page portfolio (`zabroso.cl`). Sections are flat components composed in `src/App.tsx`. No router, no state management.

```
src/
  components/
    pixel/            # SVG pixel art (pure SVG rects, no images)
      PixelCup.tsx    # Animated coffee cup — props: size, steam
      PixelAvatar.tsx # Pablo avatar — props: size, walking
      PixelCat.tsx    # Decorative cat
    Nav.tsx           # Fixed top bar, scroll shadow
    Hero.tsx          # Full-height, parallax, walking avatar easter egg
    SobrePablo.tsx    # Las cuatro facetas + bio
    Galeria.tsx       # Bento grid 12-col, expand/collapse per card
    ElTaller.tsx      # Dark section, tech stack icons
    Bitacora.tsx      # Simulated GitHub contribution grid
    Footer.tsx        # Gradient CTA
    GitHubGrid.tsx    # 53×7 seeded contribution grid
  hooks/
    useReveal.ts      # IntersectionObserver — adds .in to .rv/.rvL/.rvR elements
  App.tsx             # Composes all sections, calls useReveal
  main.tsx
  index.css           # @import "tailwindcss", @theme tokens, @keyframes, .dot-grid, .rv*
```

## Design tokens

Defined in `src/index.css → @theme`. Available as Tailwind utilities: `bg-roble`, `text-terra`, `bg-cream`, etc.

| Token       | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| `cream`     | `#FAF9F6` | Page background              |
| `roble`     | `#5D4037` | Primary brown (borders, text)|
| `roble-l`   | `#8D6E63` | Light brown                  |
| `terra`     | `#E2725B` | Accent / CTA color           |
| `muted`     | `#8B7355` | Body text                    |
| `carbon`    | `#2C1810` | Dark text                    |
| `sun-a`     | `#FF9E80` | Gradient start (footer)      |
| `sun-b`     | `#9575CD` | Gradient end (footer)        |

Custom fonts are referenced via CSS variables `var(--font-display)` (Playfair Display) and `var(--font-sans)` (Montserrat), loaded from Google Fonts in `index.html`.

## Scroll reveal

Add class `rv` (fade up), `rvL` (fade from left), or `rvR` (fade from right) to any element. `useReveal` in `App.tsx` observes them and adds `.in` when they enter the viewport.

## Known files to ignore

- `src/App.css` — leftover from Vite scaffold, not imported anywhere, safe to delete.

## Design reference

Original HTML prototype (design handoff): `design_handoff_zabroso/zabroso.html`

```bash
npx serve design_handoff_zabroso   # → http://localhost:3000/zabroso.html
```
