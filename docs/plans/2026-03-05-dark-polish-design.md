---
title: "Dark Professional Visual Polish"
date: "2026-03-05"
status: "approved"
---

# Dark Professional Visual Polish — Design

**Goal:** Shift w1r3d.dev from a white/blue light theme to a dark-only, subtle professional aesthetic with emerald green accents. DevOps-inspired but clean, not gimmicky.

**Approach:** Skin change only — same layout, animations, page structure, content.

## Color System

Dark-only. Remove `.dark` block, make `:root` dark.

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `oklch(0.09 0 0)` | Page background |
| `--foreground` | `oklch(0.985 0 0)` | Primary text |
| `--card` | `oklch(0.145 0 0)` | Card/surface background |
| `--card-foreground` | `oklch(0.985 0 0)` | Card text |
| `--primary` | `oklch(0.765 0.177 163)` | Emerald green — buttons, links, accents |
| `--primary-foreground` | `oklch(0.145 0 0)` | Dark text on green |
| `--secondary` | `oklch(0.205 0 0)` | Secondary surface |
| `--secondary-foreground` | `oklch(0.985 0 0)` | Secondary text |
| `--muted` | `oklch(0.205 0 0)` | Muted background |
| `--muted-foreground` | `oklch(0.556 0 0)` | Muted text |
| `--accent` | `oklch(0.765 0.177 163)` | Same emerald |
| `--accent-foreground` | `oklch(0.145 0 0)` | Dark text on accent |
| `--border` | `oklch(1 0 0 / 10%)` | Subtle white borders |
| `--input` | `oklch(1 0 0 / 10%)` | Input borders |
| `--ring` | `oklch(0.765 0.177 163)` | Focus rings |

## Component Specifics

### Navigation
- `bg-black/80 backdrop-blur-md border-b border-white/10`
- Links: `text-neutral-400 hover:text-emerald-400`
- Logo: white, bold

### Hero
- Heading: white
- Subtext: `text-neutral-400`
- Primary CTA: `bg-emerald-500 hover:bg-emerald-400 text-black`
- Secondary CTA: `border border-white/20 text-neutral-300 hover:border-emerald-500/50`

### Cards (Project, Blog, Testimonial)
- `bg-neutral-900/50 border border-white/10`
- Hover: `hover:border-emerald-500/30 hover:shadow-emerald-500/5`
- Tech pills: `bg-emerald-500/10 text-emerald-400`
- Links: `text-emerald-400 hover:text-emerald-300`

### Footer
- `bg-neutral-950 border-t border-white/10`
- Links: `text-neutral-500 hover:text-emerald-400`

### Contact Form
- Inputs: `bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500`
- Focus: `focus:border-emerald-500/50 focus:ring-emerald-500/20`
- Submit: green CTA button

### Blog Post Detail
- Light text on dark, green links, darker code blocks

### 404
- White heading, muted subtext, green CTA

## Dependency
- `tar@7.5.7`: transitive dep from mdx toolchain. Run `pnpm update` to pull latest patches. No direct fix available.

## Not Changing
- Page structure, routing, Framer Motion animations, content, MDX setup
