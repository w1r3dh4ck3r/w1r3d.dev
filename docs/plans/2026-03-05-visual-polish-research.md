---
title: "Visual Polish Research"
date: "2026-03-05"
status: "pending-implementation"
---

# Visual Polish Research — Developer Portfolio Inspiration

Research findings for enhancing w1r3d.dev visuals. Organized by priority tier.

## Tier 1 — High Impact, Low Effort (~3 hours total)

### 1. Ambient Glow Orbs (30 min)
Two absolutely-positioned blurred emerald divs in layout background. Instant depth.

```tsx
<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
  <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-[120px]" />
  <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-emerald-600/6 blur-[100px]" />
</div>
```

### 2. Dot Grid Background (20 min)
Subtle repeating dot pattern on body, faded at edges with mask.

```css
body {
  background-image: radial-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px);
  background-size: 28px 28px;
}
```

### 3. Spring Physics on Hover (30 min)
Replace CSS `transition-colors` with Framer Motion springs on buttons/cards.

```tsx
transition={{ type: 'spring', stiffness: 400, damping: 25 }}
```

### 4. Stagger Variants Upgrade (1 hr)
Replace `delay: index * 0.1` with proper parent/child variants:

```tsx
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] } }
};
```

### 5. Lenis Smooth Scroll (1 hr)
Install `lenis`, wrap layout children.

```bash
pnpm add lenis
```

```tsx
// src/components/SmoothScrollProvider.tsx
'use client';
import { ReactLenis } from 'lenis/react';
export default function SmoothScrollProvider({ children }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
```

---

## Tier 2 — High Impact, Medium Effort

### 6. Animated Nav Underline (2 hr)
Sliding `motion.div` with `layoutId="nav-indicator"` + `usePathname()`.

### 7. Card Spotlight Effect (3 hr)
Cursor-following radial gradient on project cards via `onMouseMove`.

```tsx
background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(16,185,129,0.08), transparent 40%)`
```

### 8. Hero TextLoop/TextScramble (2 hr)
Cycle roles: "Full-stack Engineer" → "Game Mod Developer" → "AI Systems Builder".
Library: `motion-primitives` — `<TextLoop>` or `<TextScramble>`.

### 9. Border Beam on Featured Cards (1 hr)
Magic UI `<BorderBeam>` on carousel items.

```bash
npx shadcn@latest add "https://magicui.design/r/border-beam"
```

### 10. Bento Grid for Projects Page (4-6 hr)
Asymmetric grid with browser mockup screenshots.

### 11. Browser Mockup Component (1 hr)
Styled div mimicking macOS browser chrome above project screenshots.

---

## Tier 3 — Statement Pieces (pick one)

### 12. Hero Parallax (Aceternity UI, 3 hr)
Dramatic scrolling grid of project screenshots.

### 13. Shooting Stars + Stars Background (1 hr)
Diagonal light streaks on hero. Aceternity UI component.

### 14. Retro Grid (Magic UI, 30 min)
Perspective grid in footer background.

---

## Key Libraries

| Library | Purpose | Install |
|---------|---------|---------|
| Magic UI | Border Beam, Bento Grid, Particles, Retro Grid | `npx shadcn@latest add "https://magicui.design/r/[component]"` |
| Aceternity UI | Hero Parallax, Aurora BG, Shooting Stars | `npx shadcn@latest add [component]` |
| Motion Primitives | TextLoop, TextScramble, Spotlight, Magnetic | `pnpm add motion-primitives` |
| Lenis | Smooth scroll | `pnpm add lenis` |

## Reference Portfolios

- brittanychiang.com — dark portfolio gold standard
- emilkowal.ski — refinement over flash
- rauno.me — OS-inspired, snappy easing
- joshwcomeau.com — craft-level micro-interactions
- cassidoo.co — personality via randomized accents
