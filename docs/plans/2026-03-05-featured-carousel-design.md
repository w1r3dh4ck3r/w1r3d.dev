---
title: "Featured Projects Carousel"
date: "2026-03-05"
status: "approved"
---

# Featured Projects Carousel — Design

**Goal:** Replace static featured project on home page with an auto-rotating carousel showing all 4 projects, starting with karolinejangola.

## Changes

1. **Reorder `projects.json`** — karolinejangola first
2. **New component `FeaturedCarousel.tsx`** — client component:
   - `useState` for active index
   - `useEffect` + `setInterval` for 5s auto-advance
   - Framer Motion `AnimatePresence` with `mode="wait"` for fade crossfade
   - Pause auto-scroll on hover
   - Left/right arrow buttons (neutral default, emerald hover)
   - Dot indicators (active = emerald, inactive = neutral)
   - Shows: title, subtitle, description, tech stack pills, "View Project" link
3. **Update `src/app/page.tsx`** — replace static featured section with `<FeaturedCarousel />`

## Visual Style

- Card: `bg-neutral-900/50 border border-white/10` (matches existing card style)
- Arrows: `text-neutral-500 hover:text-emerald-400`
- Active dot: `bg-emerald-500`, inactive: `bg-neutral-600`
- Tech pills: `bg-emerald-500/10 text-emerald-400`
- Links: `text-emerald-400 hover:text-emerald-300`
- Fade transition: ~300ms opacity crossfade

## No New Dependencies

Framer Motion already in the project handles AnimatePresence crossfade.
