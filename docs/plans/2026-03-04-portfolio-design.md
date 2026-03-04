# w1r3d.dev — Portfolio Website Design

**Date**: 2026-03-04
**Project**: Personal portfolio showcasing full-stack, mobile, AI, and systems work
**Target Audience**: Prospective clients + potential employers/collaborators

## Overview

A minimalist, clean portfolio website built with Next.js 15 + TypeScript + Tailwind v4 + shadcn/ui. Features 4 flagship project case studies, occasional technical blog, skills showcase, and light social proof (testimonials). Deployed on Vercel.

**Design Philosophy**: Minimalist base with purposeful animations that add polish without distraction. Every motion has a reason—guide attention, provide feedback, delight.

---

## Core Pages & Content

### 1. **Home**
- Hero section: Name + 1-line pitch ("Full-stack engineer. AI systems. Mobile. Game mods.")
- Featured project preview (rotating or highlighted)
- Brief CTA to Projects section
- Clean, spacious layout with optional floating/scale animations on load

### 2. **Projects** (4 Case Studies)
Each project includes:
- **gustavoFois** — Full-stack finance education platform (Next.js, Vercel)
- **expira** — Mobile product expiration tracker (React Native, Expo, Supabase, ML)
- **ANIA** — Autonomous news intelligence agent (Python, Docker, AI/backend depth)
- **karolinejangola** — Psychotherapist portfolio site (GitHub Pages, multi-language)

**Structure per project**:
- Description (problem + solution)
- Tech stack (visual badges/pills)
- Key features (3-4 bullet points)
- Live link / demo / GitHub repo
- Optional: before/after screenshots, metrics

**Animations**: Cards fade-in + lift on scroll and hover

### 3. **About**
- Brief personal bio (2-3 paragraphs)
- Skills breakdown (organized by category: Languages, Frameworks, Tools, etc.)
- Testimonials/social proof (2-3 quotes from clients or collaborators)

**Animations**: Testimonial cards stagger-fade in on scroll

### 4. **Blog**
- Archive of occasional technical posts (monthly cadence)
- Simple search/filter (optional)
- MDX-based, easy to write and maintain
- Posts cover: architecture decisions, technical deep-dives, project retrospectives

**Animations**: Blog post cards slide in gently

### 5. **Contact**
- Email contact form (simple validation, spam protection)
- Social links (GitHub, LinkedIn, etc.)
- Optional: brief availability/response time note

---

## Design System

### Aesthetic
- **Base**: Minimalist, whitespace-heavy
- **Colors**: Light background (white/off-white), dark text, 1-2 accent colors derived from project themes
- **Typography**: Modern sans-serif (system stack or Vercel favorite like Inter/Geist)
- **Layout**: Responsive grid, mobile-first, generous padding

### Animations (Purposeful)
- **Page load**: Hero section fades in + subtle scale
- **On scroll**: Project cards, testimonials fade-in; parallax optional for hero
- **On hover**: Cards lift (shadow + scale), buttons glow or change color
- **Page transitions**: Smooth route transitions
- **Reduced motion**: Respect `prefers-reduced-motion` media query

### Accessibility
- WCAG AA compliant
- Semantic HTML
- Proper contrast ratios
- Alt text for images
- Keyboard navigation

---

## Data Structure

### Projects (MDX or JSON)
```json
{
  "id": "gustavoFois",
  "title": "gustavoFois",
  "subtitle": "Finance Education Platform",
  "description": "...",
  "techStack": ["Next.js 15", "TypeScript", "Tailwind v4", "Vercel"],
  "features": ["...", "..."],
  "liveUrl": "https://...",
  "githubUrl": "https://...",
  "image": "..."
}
```

### Blog Posts (MDX)
- Frontmatter: title, date, slug, excerpt, tags
- Markdown body with code highlighting

### Testimonials (JSON)
```json
{
  "quote": "...",
  "author": "Name",
  "role": "Title/Relationship",
  "image": "..." (optional)
}
```

---

## Tech Stack

| Layer | Tech |
|-------|------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind v4 |
| **Components** | shadcn/ui |
| **Animations** | Framer Motion |
| **Code Quality** | Biome |
| **Deployment** | Vercel |
| **CMS/Data** | MDX (blog) + JSON (projects, testimonials) |

---

## Development Workflow

1. **Setup**: Create Next.js project, configure Tailwind, shadcn/ui, Biome
2. **Components**: Build reusable components (ProjectCard, TestimonialCard, BlogPost, etc.)
3. **Pages**: Implement Home, Projects, About, Blog, Contact
4. **Content**: Populate projects, testimonials, write initial blog post
5. **Animations**: Add Framer Motion effects
6. **Polish**: SEO, metadata, analytics (optional)
7. **Deploy**: Link to Vercel, auto-deploy on push

---

## Success Criteria

- [ ] All 4 flagship projects showcase with live links
- [ ] Clean, minimalist design (no clutter)
- [ ] Animations smooth and purposeful (no jank)
- [ ] Mobile-responsive and accessible (WCAG AA)
- [ ] Blog functional and easy to maintain
- [ ] 2-3 testimonials displayed
- [ ] Contact form working
- [ ] Deployed on Vercel with auto-deploys
- [ ] Core Web Vitals passing (LCP <2.5s, FID <100ms, CLS <0.1)
- [ ] GitHub repo with clean commit history (added as submodule to ~/AI)
