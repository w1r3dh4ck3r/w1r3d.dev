# Dark Professional Visual Polish — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert w1r3d.dev from a white/blue light theme to a dark-only emerald-green professional aesthetic.

**Architecture:** Pure visual layer swap. Replace all hardcoded light-mode Tailwind classes with dark equivalents and emerald accents. Update CSS custom properties to dark-only values. No structural, routing, or content changes.

**Tech Stack:** Tailwind v4, shadcn/ui CSS variables (OKLCH), Next.js 16

---

## Task 1: Update CSS Custom Properties to Dark-Only

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Replace `:root` light vars with dark palette**

Replace the full `:root` block (lines 50-83) with:

```css
:root {
  --radius: 0.625rem;
  --background: oklch(0.09 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.765 0.177 163);
  --primary-foreground: oklch(0.145 0 0);
  --secondary: oklch(0.205 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.205 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.765 0.177 163);
  --accent-foreground: oklch(0.145 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 10%);
  --ring: oklch(0.765 0.177 163);
  --chart-1: oklch(0.765 0.177 163);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.09 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.765 0.177 163);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.205 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.765 0.177 163);
}
```

**Step 2: Delete the `.dark` block**

Remove the entire `.dark { ... }` block (lines 85-117). We're dark-only.

**Step 3: Verify build**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -15`
Expected: Build succeeds, all routes generated.

**Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: replace light theme CSS vars with dark-only emerald palette"
```

---

## Task 2: Update Layout Body Classes

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Replace hardcoded light classes with semantic vars**

Change line 24 from:
```tsx
<body className="bg-white text-gray-900">
```
to:
```tsx
<body className="bg-background text-foreground antialiased">
```

**Step 2: Verify build**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5`
Expected: PASS

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: use semantic color vars in body element"
```

---

## Task 3: Dark Navigation

**Files:**
- Modify: `src/components/Navigation.tsx`

**Step 1: Update nav container**

Change line 19 from:
```tsx
<nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
```
to:
```tsx
<nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
```

**Step 2: Update logo link**

Change line 23 from:
```tsx
<Link href="/" className="text-xl font-bold text-gray-900">
```
to:
```tsx
<Link href="/" className="text-xl font-bold text-white">
```

**Step 3: Update desktop nav links**

Change line 33 from:
```tsx
className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
```
to:
```tsx
className="text-neutral-400 hover:text-emerald-400 transition-colors font-medium"
```

**Step 4: Update mobile menu button**

Change line 45 from:
```tsx
className="sm:hidden inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
```
to:
```tsx
className="sm:hidden inline-flex items-center gap-2 text-neutral-400 hover:text-white"
```

**Step 5: Update mobile menu links**

Change line 78 from:
```tsx
className="block text-gray-600 hover:text-gray-900 py-2 font-medium"
```
to:
```tsx
className="block text-neutral-400 hover:text-emerald-400 py-2 font-medium"
```

**Step 6: Verify build**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5`
Expected: PASS

**Step 7: Commit**

```bash
git add src/components/Navigation.tsx
git commit -m "feat: dark glass navigation with emerald hover accents"
```

---

## Task 4: Dark Hero Section

**Files:**
- Modify: `src/components/HeroSection.tsx`

**Step 1: Update heading**

Change line 14 from:
```tsx
<h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
```
to:
```tsx
<h1 className="text-5xl font-bold text-white sm:text-6xl">
```

**Step 2: Update subtext**

Change line 17 from:
```tsx
<p className="mt-4 text-xl text-gray-600">
```
to:
```tsx
<p className="mt-4 text-xl text-neutral-400">
```

**Step 3: Update primary CTA**

Change line 22 from:
```tsx
className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
```
to:
```tsx
className="rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400 transition-colors"
```

**Step 4: Update secondary CTA**

Change line 28 from:
```tsx
className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 hover:bg-gray-50 transition-colors"
```
to:
```tsx
className="rounded-lg border border-white/20 px-6 py-3 font-medium text-neutral-300 hover:border-emerald-500/50 hover:text-white transition-colors"
```

**Step 5: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/components/HeroSection.tsx
git commit -m "feat: dark hero with emerald CTAs"
```

---

## Task 5: Dark Home Page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Update "Featured Project" heading**

Change line 17 from:
```tsx
<h2 className="text-3xl font-bold text-gray-900">Featured Project</h2>
```
to:
```tsx
<h2 className="text-3xl font-bold text-white">Featured Project</h2>
```

**Step 2: Update featured project subtitle**

Change line 18-19 from:
```tsx
<p className="mt-2 text-gray-600">
```
to:
```tsx
<p className="mt-2 text-neutral-400">
```

**Step 3: Update featured project card**

Change line 21 from:
```tsx
<div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-8">
```
to:
```tsx
<div className="mt-6 rounded-lg border border-white/10 bg-neutral-900/50 p-8">
```

**Step 4: Update featured project title**

Change line 22-23 from:
```tsx
<h3 className="text-2xl font-bold text-gray-900">
```
to:
```tsx
<h3 className="text-2xl font-bold text-white">
```

**Step 5: Update featured project description**

Change line 25 from:
```tsx
<p className="mt-3 text-gray-700">{featuredProject.description}</p>
```
to:
```tsx
<p className="mt-3 text-neutral-400">{featuredProject.description}</p>
```

**Step 6: Update "View Project" link**

Change line 30 from:
```tsx
className="text-blue-600 hover:text-blue-700 font-medium"
```
to:
```tsx
className="text-emerald-400 hover:text-emerald-300 font-medium"
```

**Step 7: Update "See all projects" link**

Change line 36 from:
```tsx
className="text-gray-600 hover:text-gray-900 font-medium"
```
to:
```tsx
className="text-neutral-500 hover:text-white font-medium"
```

**Step 8: Update CTA section heading**

Change line 47 from:
```tsx
<h2 className="text-3xl font-bold text-gray-900">Ready to build something?</h2>
```
to:
```tsx
<h2 className="text-3xl font-bold text-white">Ready to build something?</h2>
```

**Step 9: Update CTA subtext**

Change line 48 from:
```tsx
<p className="mt-3 text-lg text-gray-600">
```
to:
```tsx
<p className="mt-3 text-lg text-neutral-400">
```

**Step 10: Update CTA button**

Change line 52 from:
```tsx
className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
```
to:
```tsx
className="mt-6 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400"
```

**Step 11: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/app/page.tsx
git commit -m "feat: dark home page with emerald accents"
```

---

## Task 6: Dark ProjectCard

**Files:**
- Modify: `src/components/ProjectCard.tsx`

**Step 1: Update card container**

Change line 19 from:
```tsx
className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
```
to:
```tsx
className="rounded-lg border border-white/10 bg-neutral-900/50 p-6 shadow-sm hover:shadow-lg hover:border-emerald-500/30 hover:shadow-emerald-500/5 transition-all"
```

**Step 2: Update title**

Change line 21 from:
```tsx
<h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
```
to:
```tsx
<h3 className="text-xl font-bold text-white">{project.title}</h3>
```

**Step 3: Update subtitle**

Change line 22 from:
```tsx
<p className="mt-1 text-sm text-gray-500">{project.subtitle}</p>
```
to:
```tsx
<p className="mt-1 text-sm text-neutral-500">{project.subtitle}</p>
```

**Step 4: Update description**

Change line 23 from:
```tsx
<p className="mt-3 text-gray-700">{project.description}</p>
```
to:
```tsx
<p className="mt-3 text-neutral-400">{project.description}</p>
```

**Step 5: Update tech pills**

Change line 29 from:
```tsx
className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
```
to:
```tsx
className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
```

**Step 6: Update feature list items**

Change line 38 from:
```tsx
<li key={feature} className="text-sm text-gray-600">
```
to:
```tsx
<li key={feature} className="text-sm text-neutral-500">
```

**Step 7: Update "View Project" link**

Change line 49 from:
```tsx
className="text-blue-600 hover:text-blue-700 font-medium text-sm"
```
to:
```tsx
className="text-emerald-400 hover:text-emerald-300 font-medium text-sm"
```

**Step 8: Update "GitHub" link**

Change line 55 from:
```tsx
className="text-gray-600 hover:text-gray-700 font-medium text-sm"
```
to:
```tsx
className="text-neutral-500 hover:text-white font-medium text-sm"
```

**Step 9: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/components/ProjectCard.tsx
git commit -m "feat: dark project cards with emerald accents and hover glow"
```

---

## Task 7: Dark BlogPostCard

**Files:**
- Modify: `src/components/BlogPostCard.tsx`

**Step 1: Update card container**

Change line 18 from:
```tsx
className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
```
to:
```tsx
className="rounded-lg border border-white/10 bg-neutral-900/50 p-6 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all"
```

**Step 2: Update date**

Change line 20 from:
```tsx
<p className="text-sm text-gray-500">{post.date}</p>
```
to:
```tsx
<p className="text-sm text-neutral-500">{post.date}</p>
```

**Step 3: Update title**

Change line 22 from:
```tsx
<h3 className="mt-1 text-lg font-bold text-gray-900 hover:text-blue-600">
```
to:
```tsx
<h3 className="mt-1 text-lg font-bold text-white hover:text-emerald-400">
```

**Step 4: Update excerpt**

Change line 26 from:
```tsx
<p className="mt-2 text-gray-600">{post.excerpt}</p>
```
to:
```tsx
<p className="mt-2 text-neutral-400">{post.excerpt}</p>
```

**Step 5: Update tag pills**

Change line 31 from:
```tsx
className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
```
to:
```tsx
className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded"
```

**Step 6: Update "Read more" link**

Change line 39 from:
```tsx
className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium text-sm"
```
to:
```tsx
className="mt-4 inline-block text-emerald-400 hover:text-emerald-300 font-medium text-sm"
```

**Step 7: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/components/BlogPostCard.tsx
git commit -m "feat: dark blog post cards with emerald accents"
```

---

## Task 8: Dark TestimonialCard

**Files:**
- Modify: `src/components/TestimonialCard.tsx`

**Step 1: Update card container**

Change line 20 from:
```tsx
className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
```
to:
```tsx
className="rounded-lg border border-white/10 bg-neutral-900/50 p-6 shadow-sm"
```

**Step 2: Update quote text**

Change line 22 from:
```tsx
<p className="text-gray-700 italic">"{testimonial.quote}"</p>
```
to:
```tsx
<p className="text-neutral-300 italic">"{testimonial.quote}"</p>
```

**Step 3: Update author name**

Change line 24 from:
```tsx
<p className="font-semibold text-gray-900">{testimonial.author}</p>
```
to:
```tsx
<p className="font-semibold text-white">{testimonial.author}</p>
```

**Step 4: Update role**

Change line 25 from:
```tsx
<p className="text-sm text-gray-500">{testimonial.role}</p>
```
to:
```tsx
<p className="text-sm text-neutral-500">{testimonial.role}</p>
```

**Step 5: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/components/TestimonialCard.tsx
git commit -m "feat: dark testimonial cards"
```

---

## Task 9: Dark ContactForm

**Files:**
- Modify: `src/components/ContactForm.tsx`

**Step 1: Update name input**

Change line 43 from:
```tsx
className="w-full rounded-lg border border-gray-300 px-4 py-2"
```
to:
```tsx
className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
```

**Step 2: Update email input**

Change line 52 from:
```tsx
className="w-full rounded-lg border border-gray-300 px-4 py-2"
```
to:
```tsx
className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
```

**Step 3: Update textarea**

Change line 64 from:
```tsx
className="w-full rounded-lg border border-gray-300 px-4 py-2"
```
to:
```tsx
className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
```

**Step 4: Update submit button**

Change line 70 from:
```tsx
className="w-full rounded-lg bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
```
to:
```tsx
className="w-full rounded-lg bg-emerald-500 py-2 text-black font-medium hover:bg-emerald-400 disabled:opacity-50"
```

**Step 5: Update success message**

Change line 76 from:
```tsx
<p className="text-green-600 text-sm">Message received! I'll get back to you soon.</p>
```
to:
```tsx
<p className="text-emerald-400 text-sm">Message received! I'll get back to you soon.</p>
```

**Step 6: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/components/ContactForm.tsx
git commit -m "feat: dark contact form with emerald focus states"
```

---

## Task 10: Dark Footer

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Update footer container**

Change line 5 from:
```tsx
<footer className="border-t border-gray-200 bg-gray-50 py-12">
```
to:
```tsx
<footer className="border-t border-white/10 bg-neutral-950 py-12">
```

**Step 2: Update "Built with" text**

Change line 8 from:
```tsx
<p className="text-gray-600">
```
to:
```tsx
<p className="text-neutral-500">
```

**Step 3: Update GitHub link**

Change line 16 from:
```tsx
className="text-gray-600 hover:text-gray-900"
```
to:
```tsx
className="text-neutral-500 hover:text-emerald-400"
```

**Step 4: Update LinkedIn link**

Change line 23 from:
```tsx
className="text-gray-600 hover:text-gray-900"
```
to:
```tsx
className="text-neutral-500 hover:text-emerald-400"
```

**Step 5: Update Email link**

Change line 30 from:
```tsx
className="text-gray-600 hover:text-gray-900"
```
to:
```tsx
className="text-neutral-500 hover:text-emerald-400"
```

**Step 6: Update copyright text**

Change line 33 from:
```tsx
<p className="text-sm text-gray-500">
```
to:
```tsx
<p className="text-sm text-neutral-600">
```

**Step 7: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/components/Footer.tsx
git commit -m "feat: dark footer with emerald link hovers"
```

---

## Task 11: Dark Projects Page

**Files:**
- Modify: `src/app/projects/page.tsx`

**Step 1: Update heading**

Change line 14 from:
```tsx
<h1 className="text-4xl font-bold text-gray-900">Projects</h1>
```
to:
```tsx
<h1 className="text-4xl font-bold text-white">Projects</h1>
```

**Step 2: Update subtext**

Change line 15 from:
```tsx
<p className="mt-4 text-lg text-gray-600">
```
to:
```tsx
<p className="mt-4 text-lg text-neutral-400">
```

**Step 3: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/app/projects/page.tsx
git commit -m "feat: dark projects page headings"
```

---

## Task 12: Dark About Page

**Files:**
- Modify: `src/app/about/page.tsx`

**Step 1: Update "About Me" heading**

Change line 23 from:
```tsx
<h1 className="text-4xl font-bold text-gray-900">About Me</h1>
```
to:
```tsx
<h1 className="text-4xl font-bold text-white">About Me</h1>
```

**Step 2: Update bio text container**

Change line 24 from:
```tsx
<div className="mt-6 space-y-4 text-gray-700">
```
to:
```tsx
<div className="mt-6 space-y-4 text-neutral-400">
```

**Step 3: Update "Skills & Tools" heading**

Change line 44 from:
```tsx
<h2 className="text-2xl font-bold text-gray-900">Skills & Tools</h2>
```
to:
```tsx
<h2 className="text-2xl font-bold text-white">Skills & Tools</h2>
```

**Step 4: Update skill category headings**

Change line 48 from:
```tsx
<h3 className="font-semibold text-gray-900">{category}</h3>
```
to:
```tsx
<h3 className="font-semibold text-neutral-300">{category}</h3>
```

**Step 5: Update skill pills**

Change line 53 from:
```tsx
className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
```
to:
```tsx
className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400"
```

**Step 6: Update "What Others Say" heading**

Change line 66 from:
```tsx
<h2 className="text-2xl font-bold text-gray-900">What Others Say</h2>
```
to:
```tsx
<h2 className="text-2xl font-bold text-white">What Others Say</h2>
```

**Step 7: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/app/about/page.tsx
git commit -m "feat: dark about page with emerald skill pills"
```

---

## Task 13: Dark Blog Pages

**Files:**
- Modify: `src/app/blog/page.tsx`
- Modify: `src/app/blog/[slug]/page.tsx`

**Step 1: Update blog listing heading**

In `src/app/blog/page.tsx`, change line 15 from:
```tsx
<h1 className="text-4xl font-bold text-gray-900">Blog</h1>
```
to:
```tsx
<h1 className="text-4xl font-bold text-white">Blog</h1>
```

**Step 2: Update blog listing subtext**

Change line 16 from:
```tsx
<p className="mt-4 text-lg text-gray-600">
```
to:
```tsx
<p className="mt-4 text-lg text-neutral-400">
```

**Step 3: Update empty state text**

Change line 26 from:
```tsx
<p className="text-gray-600">No posts yet. Check back soon!</p>
```
to:
```tsx
<p className="text-neutral-500">No posts yet. Check back soon!</p>
```

**Step 4: Update blog post "Back to blog" link**

In `src/app/blog/[slug]/page.tsx`, change line 44 from:
```tsx
<Link href="/blog" className="text-blue-600 hover:text-blue-700">
```
to:
```tsx
<Link href="/blog" className="text-emerald-400 hover:text-emerald-300">
```

**Step 5: Update blog post title**

Change line 49 from:
```tsx
<h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
```
to:
```tsx
<h1 className="text-4xl font-bold text-white">{post.title}</h1>
```

**Step 6: Update blog post date**

Change line 50 from:
```tsx
<p className="mt-2 text-gray-600">{post.date}</p>
```
to:
```tsx
<p className="mt-2 text-neutral-500">{post.date}</p>
```

**Step 7: Update blog post tags**

Change line 55 from:
```tsx
className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm"
```
to:
```tsx
className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded text-sm"
```

**Step 8: Update prose container for dark MDX rendering**

Change line 63 from:
```tsx
<div className="prose prose-sm max-w-none mt-8">
```
to:
```tsx
<div className="prose prose-sm prose-invert max-w-none mt-8 prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 prose-code:text-emerald-300 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-white/10">
```

**Step 9: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/app/blog/page.tsx src/app/blog/\[slug\]/page.tsx
git commit -m "feat: dark blog pages with emerald links and prose-invert"
```

---

## Task 14: Dark Contact Page

**Files:**
- Modify: `src/app/contact/page.tsx`

**Step 1: Update heading**

Change line 14 from:
```tsx
<h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
```
to:
```tsx
<h1 className="text-4xl font-bold text-white">Get in Touch</h1>
```

**Step 2: Update subtext**

Change line 15 from:
```tsx
<p className="mt-4 text-lg text-gray-600">
```
to:
```tsx
<p className="mt-4 text-lg text-neutral-400">
```

**Step 3: Update "Send me a message" heading**

Change line 23 from:
```tsx
<h2 className="text-xl font-bold text-gray-900 mb-6">Send me a message</h2>
```
to:
```tsx
<h2 className="text-xl font-bold text-white mb-6">Send me a message</h2>
```

**Step 4: Update "Email" heading**

Change line 30 from:
```tsx
<h3 className="font-semibold text-gray-900">Email</h3>
```
to:
```tsx
<h3 className="font-semibold text-neutral-300">Email</h3>
```

**Step 5: Update email text**

Change line 31 from:
```tsx
<p className="mt-2 text-gray-600">
```
to:
```tsx
<p className="mt-2 text-neutral-400">
```

**Step 6: Update email link**

Change line 34 from:
```tsx
className="text-blue-600 hover:text-blue-700"
```
to:
```tsx
className="text-emerald-400 hover:text-emerald-300"
```

**Step 7: Update "Social" heading**

Change line 41 from:
```tsx
<h3 className="font-semibold text-gray-900">Social</h3>
```
to:
```tsx
<h3 className="font-semibold text-neutral-300">Social</h3>
```

**Step 8: Update GitHub social link**

Change line 49 from:
```tsx
className="text-blue-600 hover:text-blue-700"
```
to:
```tsx
className="text-emerald-400 hover:text-emerald-300"
```

**Step 9: Update LinkedIn social link**

Change line 57 from:
```tsx
className="text-blue-600 hover:text-blue-700"
```
to:
```tsx
className="text-emerald-400 hover:text-emerald-300"
```

**Step 10: Update "Availability" heading**

Change line 63 from:
```tsx
<h3 className="font-semibold text-gray-900">Availability</h3>
```
to:
```tsx
<h3 className="font-semibold text-neutral-300">Availability</h3>
```

**Step 11: Update availability text**

Change line 64 from:
```tsx
<p className="mt-2 text-gray-600">
```
to:
```tsx
<p className="mt-2 text-neutral-400">
```

**Step 12: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/app/contact/page.tsx
git commit -m "feat: dark contact page with emerald links"
```

---

## Task 15: Dark 404 Page

**Files:**
- Modify: `src/app/not-found.tsx`

**Step 1: Update heading**

Change line 6 from:
```tsx
<h1 className="text-6xl font-bold text-gray-900">404</h1>
```
to:
```tsx
<h1 className="text-6xl font-bold text-white">404</h1>
```

**Step 2: Update subtext**

Change line 7 from:
```tsx
<p className="mt-4 text-lg text-gray-600">
```
to:
```tsx
<p className="mt-4 text-lg text-neutral-400">
```

**Step 3: Update CTA button**

Change line 11 from:
```tsx
className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
```
to:
```tsx
className="mt-8 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400"
```

**Step 4: Verify build & commit**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -5
git add src/app/not-found.tsx
git commit -m "feat: dark 404 page"
```

---

## Task 16: Add Tailwind Typography Plugin for prose-invert

**Files:**
- Modify: `package.json` (via pnpm add)

**Step 1: Install typography plugin**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm add @tailwindcss/typography
```

**Step 2: Add import to globals.css**

Add after line 1 (`@import "tailwindcss";`):
```css
@import "@tailwindcss/typography";
```

**Step 3: Verify build**

Run: `cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -15`
Expected: Build succeeds, prose styles work.

**Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml src/app/globals.css
git commit -m "feat: add tailwind typography plugin for blog prose styling"
```

---

## Task 17: Update Dependencies & Deploy

**Files:**
- Modify: `pnpm-lock.yaml` (via pnpm update)

**Step 1: Update all dependencies to latest patches**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm update 2>&1 | tail -10
```

This pulls latest patches, which may resolve the tar@7.5.7 deprecation warning.

**Step 2: Verify build still works**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm build 2>&1 | tail -15
```

Expected: Build succeeds.

**Step 3: Commit**

```bash
git add pnpm-lock.yaml package.json
git commit -m "chore: update dependencies to latest patches"
```

**Step 4: Deploy to Vercel**

```bash
cd ~/AI/projects/w1r3d.dev && pnpm dlx vercel --prod --yes 2>&1 | tail -20
```

Expected: Production deployment succeeds.
