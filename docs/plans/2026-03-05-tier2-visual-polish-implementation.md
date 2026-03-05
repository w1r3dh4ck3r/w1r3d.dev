# Tier 2 Visual Polish — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add 6 high-impact visual polish features to w1r3d.dev: animated nav underline, card spotlight effect, hero text scramble, border beam on featured carousel, bento grid for projects page, and browser mockup component.

**Architecture:** All changes are client-side visual enhancements. Each task is independent and builds one component. We use Framer Motion (already installed) for animations, and add `motion-primitives` for TextScramble. The Border Beam effect is implemented from scratch (CSS animation) to avoid adding Magic UI as a full dependency. The Bento Grid replaces the existing 2-column grid on the projects page with an asymmetric layout. Browser mockups wrap project screenshots.

**Tech Stack:** Next.js 16, Tailwind v4, Framer Motion 12, motion-primitives (new), TypeScript

---

## Task 1: Animated Nav Underline

**Files:**
- Modify: `src/components/Navigation.tsx`

**Step 1: Add usePathname import and sliding indicator**

Replace the entire Navigation component with a version that uses `usePathname()` to track the active route and renders a `motion.div` with `layoutId="nav-indicator"` under the active link.

Key changes:
- Import `usePathname` from `next/navigation`
- Add `pathname` state tracking
- Desktop links: wrap each in a `relative` container, conditionally render a `motion.div` with `layoutId="nav-underline"` beneath the active link
- Active link gets `text-emerald-400`, inactive stays `text-neutral-400`
- The `motion.div` indicator: `absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full` with `layoutId="nav-underline"`

**Step 2: Verify build**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -10`
Expected: Build succeeds

**Step 3: Visual QA**

Open the tunnel URL. Navigate between pages. Verify:
- Green underline slides smoothly between nav links
- Active page is highlighted
- Mobile menu still works (no underline on mobile)

**Step 4: Commit**

```bash
git add src/components/Navigation.tsx
git commit -m "feat: animated sliding nav underline with layoutId"
```

---

## Task 2: Card Spotlight Effect

**Files:**
- Create: `src/components/SpotlightCard.tsx`
- Modify: `src/components/ProjectCard.tsx`

**Step 1: Create SpotlightCard wrapper component**

A wrapper that tracks mouse position via `onMouseMove` and renders a radial gradient overlay following the cursor. Uses `useRef` for the card element and `useState` for mouse coordinates.

```tsx
'use client';

import { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16,185,129,0.08), transparent 40%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
```

**Step 2: Wrap ProjectCard inner content with SpotlightCard**

In `ProjectCard.tsx`, wrap the `motion.div` content area with `SpotlightCard`. The spotlight overlay sits on top of the card background. Move the border/bg classes to SpotlightCard's className prop so the gradient aligns with the card bounds.

**Step 3: Verify build**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -10`
Expected: Build succeeds

**Step 4: Visual QA**

Open tunnel URL → /projects. Hover over project cards. Verify:
- Subtle emerald glow follows cursor
- Glow disappears on mouse leave
- Spring hover-lift still works
- No layout shift or flickering

**Step 5: Commit**

```bash
git add src/components/SpotlightCard.tsx src/components/ProjectCard.tsx
git commit -m "feat: cursor-following spotlight effect on project cards"
```

---

## Task 3: Hero TextScramble

**Files:**
- Modify: `package.json` (install motion-primitives)
- Modify: `src/components/HeroSection.tsx`

**Step 1: Install motion-primitives**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm add motion-primitives`

**Step 2: Update HeroSection with TextScramble cycling**

Replace the static "Full-stack Engineer" h1 with a component that cycles through roles using a scramble/decode text effect. Use `motion-primitives`' `TextScramble` component if available, otherwise implement a custom scramble effect with Framer Motion + `useEffect` interval.

Roles to cycle: `["Full-stack Engineer", "Game Mod Developer", "AI Systems Builder", "Mobile App Creator"]`

The component should:
- Start with "Full-stack Engineer" displayed
- Every 3 seconds, scramble the current text and decode the next role
- Use emerald-colored characters during the scramble phase
- Loop infinitely

**Step 3: Verify build**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -10`
Expected: Build succeeds

**Step 4: Visual QA**

Open tunnel URL → homepage. Verify:
- Text cycles through roles with scramble animation
- No layout shift (container should have stable height)
- Subtitle text below is unaffected

**Step 5: Commit**

```bash
git add package.json pnpm-lock.yaml src/components/HeroSection.tsx
git commit -m "feat: hero text scramble cycling through roles"
```

---

## Task 4: Border Beam on Featured Carousel

**Files:**
- Create: `src/components/BorderBeam.tsx`
- Modify: `src/components/FeaturedCarousel.tsx`

**Step 1: Create BorderBeam component**

A CSS-animated border effect — a small bright dot that travels around the border of a container. Pure CSS with a `@keyframes` animation rotating a conic-gradient.

```tsx
'use client';

interface BorderBeamProps {
  duration?: number;
  size?: number;
  color?: string;
}

export default function BorderBeam({
  duration = 6,
  size = 200,
  color = 'rgba(16,185,129,0.6)',
}: BorderBeamProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
      style={{
        padding: '1px',
        mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
      }}
    >
      <div
        className="absolute inset-[-1px] rounded-[inherit]"
        style={{
          background: `conic-gradient(from var(--border-beam-angle, 0deg), transparent 80%, ${color})`,
          animation: `border-beam-spin ${duration}s linear infinite`,
        }}
      />
    </div>
  );
}
```

Also add the keyframe to `globals.css`:

```css
@keyframes border-beam-spin {
  to { --border-beam-angle: 360deg; }
}
```

And register the CSS custom property:

```css
@property --border-beam-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
```

**Step 2: Add BorderBeam to FeaturedCarousel container**

Wrap the carousel's outer `div` with `relative` (already has it implicitly) and add `<BorderBeam />` as a child.

**Step 3: Verify build**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -10`
Expected: Build succeeds

**Step 4: Visual QA**

Open tunnel URL → homepage. Verify:
- Emerald light beam travels around the featured carousel border
- Animation is smooth and continuous
- Does not interfere with carousel controls or content

**Step 5: Commit**

```bash
git add src/components/BorderBeam.tsx src/components/FeaturedCarousel.tsx src/app/globals.css
git commit -m "feat: border beam animation on featured carousel"
```

---

## Task 5: Bento Grid for Projects Page

**Files:**
- Create: `src/components/BentoProjectCard.tsx`
- Modify: `src/app/projects/page.tsx`

**Step 1: Create BentoProjectCard component**

A variant of ProjectCard designed for asymmetric bento grid layout. Key differences:
- Accepts a `size` prop: `"large" | "medium" | "small"`
- `large` cards span 2 columns, show full description + features
- `medium` cards span 1 column, show description (no features list)
- `small` cards span 1 column, compact — title + subtitle + tech pills only
- All cards include SpotlightCard wrapper for the cursor glow effect
- All cards use the same stagger variant animation

Layout for 4 projects (2x3 grid):
```
┌─────────────────┬──────────┐
│   Project 1     │Project 2 │
│   (large)       │(medium)  │
├──────────┬──────┴──────────┤
│Project 3 │   Project 4     │
│(medium)  │   (large)       │
└──────────┴─────────────────┘
```

The bento sizes array: `['large', 'medium', 'medium', 'large']`

**Step 2: Update projects/page.tsx**

Replace `StaggerContainer` + `ProjectCard` grid with the bento layout using CSS grid with explicit column spans.

Grid classes: `grid grid-cols-1 md:grid-cols-3 gap-6`
- Large cards: `md:col-span-2`
- Medium/small cards: `md:col-span-1`

**Step 3: Verify build**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -10`
Expected: Build succeeds

**Step 4: Visual QA**

Open tunnel URL → /projects. Verify:
- Asymmetric grid layout renders correctly
- Large cards span 2 columns on desktop
- Falls back to single column on mobile
- Spotlight effect works on all cards
- Stagger animation works

**Step 5: Commit**

```bash
git add src/components/BentoProjectCard.tsx src/app/projects/page.tsx
git commit -m "feat: bento grid layout for projects page"
```

---

## Task 6: Browser Mockup Component

**Files:**
- Create: `src/components/BrowserMockup.tsx`
- Modify: `src/components/BentoProjectCard.tsx` (add mockup to large cards)

**Step 1: Create BrowserMockup component**

A styled div mimicking macOS browser chrome above project content/screenshots.

```tsx
interface BrowserMockupProps {
  url?: string;
  children: React.ReactNode;
}

export default function BrowserMockup({ url = 'https://example.com', children }: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 bg-neutral-900 px-4 py-2.5 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-neutral-500 bg-neutral-800 px-3 py-1 rounded-md">
            {url}
          </span>
        </div>
      </div>
      {/* Content area */}
      <div className="bg-neutral-950">
        {children}
      </div>
    </div>
  );
}
```

**Step 2: Add BrowserMockup to large BentoProjectCards**

For `size="large"` cards, render a BrowserMockup containing a placeholder gradient (since we don't have real screenshots yet). The gradient mimics a site preview with the project's accent color.

```tsx
<BrowserMockup url={project.liveUrl}>
  <div className="h-40 bg-gradient-to-br from-emerald-500/10 via-neutral-900 to-neutral-950" />
</BrowserMockup>
```

**Step 3: Verify build**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -10`
Expected: Build succeeds

**Step 4: Visual QA**

Open tunnel URL → /projects. Verify:
- Large cards show browser mockup with traffic light dots
- URL bar shows the project's live URL
- Gradient placeholder looks clean
- Responsive — mockup hides or scales on mobile

**Step 5: Commit**

```bash
git add src/components/BrowserMockup.tsx src/components/BentoProjectCard.tsx
git commit -m "feat: browser mockup chrome on large project cards"
```

---

## Task 7: Final QA & Push

**Step 1: Full build verification**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -15`
Expected: All routes build successfully

**Step 2: Visual QA — full site walkthrough**

Check every page via tunnel:
- `/` — hero text scramble cycles, featured carousel has border beam
- `/projects` — bento grid, spotlight effect, browser mockups on large cards
- `/about` — no regressions
- `/blog` — no regressions
- `/contact` — no regressions
- Navigate between pages — nav underline slides

**Step 3: Push**

```bash
git push
```
