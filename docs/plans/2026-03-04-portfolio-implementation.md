# w1r3d.dev Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a minimalist portfolio website showcasing 4 flagship projects with animations, blog, and testimonials.

**Architecture:** Next.js 15 App Router with TypeScript, Tailwind v4, shadcn/ui components, Framer Motion animations. Content in MDX (blog) + JSON (projects, testimonials). Single author, fast deployment to Vercel.

**Tech Stack:** Next.js 15, TypeScript, Tailwind v4, shadcn/ui, Framer Motion, MDX, Vercel

---

## Task 1: Project Setup & Configuration

**Files:**
- Create: `package.json`, `tsconfig.json`, `.gitignore`, `.biomerc.json`, `next.config.ts`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`
- Create: `.env.example`, `.env.local`

**Step 1: Initialize Next.js 15 project**

```bash
cd /home/mark/AI/projects/w1r3d.dev
rm -rf .git && pnpm create next-app@latest . --typescript --tailwind --app --src-dir --use-pnpm --yes
echo "22" > .node-version
```

Expected: Next.js 15 scaffolded with App Router, TypeScript, Tailwind v4 configured.

**Step 2: Remove ESLint, add Biome**

```bash
rm eslint.config.mjs 2>/dev/null
pnpm remove eslint eslint-config-next @eslint/eslintrc
pnpm add -D @biomejs/biome
pnpm biome init
```

**Step 3: Initialize shadcn/ui**

```bash
pnpm dlx shadcn@latest init
```

When prompted, accept defaults (TypeScript, Tailwind, CSS variables).

**Step 4: Add Framer Motion for animations**

```bash
pnpm add framer-motion
```

**Step 5: Add MDX support for blog**

```bash
pnpm add next-mdx-remote gray-matter
```

**Step 6: Create environment variables file**

```bash
cat > .env.example << 'EOF'
# Portfolio site environment (no secrets needed for static site)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF

cp .env.example .env.local
```

**Step 7: Verify setup**

```bash
pnpm dev
```

Expected: Next.js dev server runs on http://localhost:3000, no errors.

**Step 8: Commit**

```bash
git add .
git commit -m "chore: Initialize Next.js 15 with Tailwind, shadcn/ui, Framer Motion, Biome"
```

---

## Task 2: Create Type Definitions & Content Schema

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/projects.json`
- Create: `src/data/testimonials.json`
- Create: `blog/sample.mdx`

**Step 1: Create TypeScript types**

```typescript
// src/types/index.ts
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[];
}
```

**Step 2: Create projects data**

```json
// src/data/projects.json
[
  {
    "id": "gustavoFois",
    "title": "gustavoFois",
    "subtitle": "Finance Education Platform",
    "description": "A comprehensive platform for financial literacy and education. Built with Next.js, featuring interactive lessons, real-time market data, and personalized learning paths for users interested in personal finance and investing.",
    "techStack": ["Next.js 15", "TypeScript", "Tailwind v4", "Vercel"],
    "features": [
      "Interactive financial lessons",
      "Real-time market integration",
      "Progress tracking",
      "Responsive design"
    ],
    "liveUrl": "https://gustavoFois.com",
    "githubUrl": "https://github.com/w1r3dh4ck3r/gustavoFois",
    "image": "/projects/gustavoFois.png"
  },
  {
    "id": "expira",
    "title": "Expira",
    "subtitle": "Product Expiration Tracker (Mobile)",
    "description": "Cross-platform mobile app for restaurants and food businesses to track product expiration dates, manage inventory, and reduce waste. Features ML-based barcode OCR scanning and real-time synchronization.",
    "techStack": ["React Native", "Expo", "TypeScript", "Supabase", "PowerSync", "ML Kit"],
    "features": [
      "Barcode & QR code scanning",
      "ML-powered OCR recognition",
      "Real-time sync across devices",
      "Expiration alerts",
      "Waste reports"
    ],
    "liveUrl": "https://github.com/w1r3dh4ck3r/expira",
    "githubUrl": "https://github.com/w1r3dh4ck3r/expira",
    "image": "/projects/expira.png"
  },
  {
    "id": "ania",
    "title": "ANIA",
    "subtitle": "Autonomous News Intelligence Agent",
    "description": "Sophisticated AI system that aggregates news from 32+ sources, performs semantic clustering, generates summaries using Claude, and delivers personalized digests via Telegram at configurable times. Production-ready with Docker containerization and 83 passing tests.",
    "techStack": ["Python", "Claude API", "Telegram Bot API", "Docker", "APScheduler", "SQLAlchemy"],
    "features": [
      "Multi-source RSS aggregation",
      "Semantic clustering",
      "Claude-powered summaries",
      "Scheduled Telegram digests",
      "Source credibility weighting",
      "Docker containerization"
    ],
    "liveUrl": "https://github.com/w1r3dh4ck3r/news-agent",
    "githubUrl": "https://github.com/w1r3dh4ck3r/news-agent",
    "image": "/projects/ania.png"
  },
  {
    "id": "karolinejangola",
    "title": "Karolinejangola",
    "subtitle": "Psychotherapist Portfolio (PT-BR)",
    "description": "Professional portfolio website for a psychotherapist in Brazil. Bilingual (Portuguese/English), built with GitHub Pages, emphasizing professionalism and accessibility. Showcases services, experience, and contact information.",
    "techStack": ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    "features": [
      "Bilingual content (PT-BR/EN)",
      "Responsive design",
      "Service showcase",
      "Contact integration",
      "SEO optimized"
    ],
    "liveUrl": "https://karolinejangola.com.br",
    "githubUrl": "https://github.com/w1r3dh4ck3r/karolinejangola",
    "image": "/projects/karolinejangola.png"
  }
]
```

**Step 3: Create testimonials data**

```json
// src/data/testimonials.json
[
  {
    "quote": "Mark built our platform from scratch and it's been rock-solid in production. His attention to detail and problem-solving skills are exceptional.",
    "author": "Client A",
    "role": "Founder, FinTech Startup"
  },
  {
    "quote": "Working with Mark on the mobile app was a smooth experience. The codebase is clean, well-documented, and easy to maintain.",
    "author": "Team Lead B",
    "role": "Product Manager"
  },
  {
    "quote": "The ANIA system he built is incredibly sophisticated. The architectural decisions and system design show deep technical maturity.",
    "author": "Collaborator C",
    "role": "AI Engineer"
  }
]
```

**Step 4: Create sample blog post**

```markdown
// blog/sample.mdx
---
title: "Building Scalable Systems with Python and Docker"
date: "2026-03-04"
slug: "building-scalable-systems"
excerpt: "Lessons learned building ANIA, a production-ready autonomous news intelligence agent with Docker, APScheduler, and semantic clustering."
tags: ["Python", "Docker", "Architecture", "AI"]
---

# Building Scalable Systems with Python and Docker

When I started building ANIA, I knew I wanted a system that could:
- Aggregate news from 30+ sources
- Run reliably in production
- Scale horizontally if needed
- Be easy to maintain and debug

This post covers the architectural decisions, key challenges, and how Docker + APScheduler became the backbone of the system.

## Why Docker?

Docker solved three problems for us:
1. **Dependency hell** — No more "works on my machine"
2. **Auto-restart** — systemd was fragile; Docker handles it gracefully
3. **Persistence** — Named volumes for SQLite databases

## Lessons Learned

The biggest win was moving from `nohup` + manual background processes to Docker containers with restart policies. This alone prevented dozens of "agent went down at 2am" incidents.

[Read full post on GitHub](https://github.com/w1r3dh4ck3r/news-agent)
```

**Step 5: Verify files created**

```bash
ls -la src/types/ src/data/ blog/
```

Expected: All files exist with correct content.

**Step 6: Commit**

```bash
git add src/types/ src/data/ blog/
git commit -m "feat: Add type definitions and content data (projects, testimonials, sample blog)"
```

---

## Task 3: Build Core Components

**Files:**
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/TestimonialCard.tsx`
- Create: `src/components/BlogPostCard.tsx`
- Create: `src/components/Navigation.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/ContactForm.tsx`

**Step 1: Create ProjectCard component**

```typescript
// src/components/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all"
    >
      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{project.subtitle}</p>
      <p className="mt-3 text-gray-700">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-1">
        {project.features.map((feature) => (
          <li key={feature} className="text-sm text-gray-600">
            • {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          View Project →
        </Link>
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-700 font-medium text-sm"
        >
          GitHub
        </Link>
      </div>
    </motion.div>
  );
}
```

**Step 2: Create TestimonialCard component**

```typescript
// src/components/TestimonialCard.tsx
'use client';

import { motion } from 'framer-motion';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
    >
      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
      <div className="mt-4">
        <p className="font-semibold text-gray-900">{testimonial.author}</p>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </motion.div>
  );
}
```

**Step 3: Create BlogPostCard component**

```typescript
// src/components/BlogPostCard.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <p className="text-sm text-gray-500">{post.date}</p>
      <Link href={`/blog/${post.slug}`}>
        <h3 className="mt-1 text-lg font-bold text-gray-900 hover:text-blue-600">
          {post.title}
        </h3>
      </Link>
      <p className="mt-2 text-gray-600">{post.excerpt}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium text-sm"
      >
        Read more →
      </Link>
    </motion.div>
  );
}
```

**Step 4: Create Navigation component**

```typescript
// src/components/Navigation.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/" className="text-xl font-bold text-gray-900">
              w1r3d.dev
            </Link>
          </motion.div>

          <ul className="hidden sm:flex gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle would go here */}
        </div>
      </div>
    </nav>
  );
}
```

**Step 5: Create Footer component**

```typescript
// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-gray-600">
            Built with Next.js, Tailwind, and Framer Motion
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/w1r3dh4ck3r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/w1r3dh4ck3r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hi@w1r3d.dev"
              className="text-gray-600 hover:text-gray-900"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {currentYear} w1r3d. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 6: Create ContactForm component**

```typescript
// src/components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Mock implementation — in production, send to actual email service
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder="Your name"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-2"
      />
      <input
        type="email"
        placeholder="your@email.com"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-2"
      />
      <textarea
        placeholder="Your message"
        required
        rows={4}
        className="w-full rounded-lg border border-gray-300 px-4 py-2"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-lg bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">Message sent! I'll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Error sending message. Please try again.</p>
      )}
    </form>
  );
}
```

**Step 7: Update main layout**

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'w1r3d.dev — Full-stack Engineer',
  description:
    'Portfolio showcasing full-stack web, mobile, AI systems, and game mods.',
  openGraph: {
    title: 'w1r3d.dev',
    description: 'Full-stack engineer portfolio',
    url: 'https://w1r3d.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Step 8: Verify components compile**

```bash
pnpm run build 2>&1 | head -20
```

Expected: No TypeScript errors in component definitions.

**Step 9: Commit**

```bash
git add src/components/
git commit -m "feat: Create core components (ProjectCard, TestimonialCard, BlogPostCard, Navigation, Footer, ContactForm)"
```

---

## Task 4: Build Home Page

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/app/globals.css` (add animations)

**Step 1: Create home page**

```typescript
// src/app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import projects from '@/data/projects.json';

export default function Home() {
  const featuredProject = projects[0];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
            Full-stack Engineer
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Building web, mobile, AI systems, and game mods.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Project */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Featured Project</h2>
        <p className="mt-2 text-gray-600">
          {featuredProject.subtitle}
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-8">
          <h3 className="text-2xl font-bold text-gray-900">
            {featuredProject.title}
          </h3>
          <p className="mt-3 text-gray-700">{featuredProject.description}</p>
          <div className="mt-6 flex gap-3">
            <Link
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Project →
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              See all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ready to build something?</h2>
        <p className="mt-3 text-lg text-gray-600">
          Let's talk about your next project.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
```

**Step 2: Add animation CSS**

```css
/* src/app/globals.css — add to existing file */

@supports (animation: none) {
  @media (prefers-reduced-motion: no-preference) {
    .animate-in {
      animation: fadeInUp 0.6s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
```

**Step 3: Verify home page renders**

```bash
pnpm dev &
sleep 2
curl -s http://localhost:3000 | grep -o '<h1' | head -1
kill %1
```

Expected: HTML contains `<h1` tag from hero section.

**Step 4: Commit**

```bash
git add src/app/page.tsx src/app/globals.css
git commit -m "feat: Add home page with hero, featured project, and CTAs"
```

---

## Task 5: Build Projects Page

**Files:**
- Create: `src/app/projects/page.tsx`

**Step 1: Create projects page**

```typescript
// src/app/projects/page.tsx
import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';

export const metadata: Metadata = {
  title: 'Projects — w1r3d.dev',
  description: 'Showcase of my featured projects.',
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
        <p className="mt-4 text-lg text-gray-600">
          A selection of my recent work across full-stack, mobile, and AI systems.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
```

**Step 2: Verify page compiles**

```bash
pnpm run build 2>&1 | grep -i "error" | head -5
```

Expected: No build errors.

**Step 3: Commit**

```bash
git add src/app/projects/page.tsx
git commit -m "feat: Add projects showcase page with 4 flagship case studies"
```

---

## Task 6: Build About Page

**Files:**
- Create: `src/app/about/page.tsx`

**Step 1: Create about page**

```typescript
// src/app/about/page.tsx
import { Metadata } from 'next';
import TestimonialCard from '@/components/TestimonialCard';
import testimonials from '@/data/testimonials.json';

export const metadata: Metadata = {
  title: 'About — w1r3d.dev',
  description: 'About me and my work.',
};

export default function AboutPage() {
  const skills = {
    Languages: ['TypeScript', 'Python', 'C#', 'JavaScript'],
    Frontend: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    Backend: ['Node.js', 'FastAPI', 'SQLAlchemy', 'Docker'],
    Databases: ['PostgreSQL', 'Supabase', 'SQLite'],
    Tools: ['Git', 'Docker', 'Vercel', 'Claude API'],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 space-y-16">
      {/* Bio Section */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <div className="mt-6 space-y-4 text-gray-700">
          <p>
            I'm a full-stack engineer with a passion for building scalable systems, from
            web and mobile applications to AI-powered backends. I thrive on solving
            complex problems and writing clean, maintainable code.
          </p>
          <p>
            My work spans multiple domains: finance platforms, product management tools,
            autonomous AI agents, and more. I believe in shipping quality software and
            collaborating closely with teams to deliver real value.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, contributing to open
            source, or working on creative side projects that push my skills.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900">Skills & Tools</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900">What Others Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.author}-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
```

**Step 2: Verify page compiles**

```bash
pnpm run build 2>&1 | grep -c "error"
```

Expected: Output is `0`.

**Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: Add about page with bio, skills, and testimonials"
```

---

## Task 7: Build Blog Pages

**Files:**
- Create: `src/app/blog/page.tsx`
- Create: `src/app/blog/[slug]/page.tsx`
- Create: `src/lib/mdx.ts`

**Step 1: Create MDX utility**

```typescript
// src/lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types';

const postsDirectory = path.join(process.cwd(), 'blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title,
        date: data.date,
        slug: data.slug,
        excerpt: data.excerpt,
        tags: data.tags || [],
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  };
}
```

**Step 2: Create blog list page**

```typescript
// src/app/blog/page.tsx
import { Metadata } from 'next';
import BlogPostCard from '@/components/BlogPostCard';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog — w1r3d.dev',
  description: 'Technical articles and insights.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
      <p className="mt-4 text-lg text-gray-600">
        Technical articles, architecture decisions, and project retrospectives.
      </p>

      <div className="mt-12 space-y-6">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))
        ) : (
          <p className="text-gray-600">No posts yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
}
```

**Step 3: Create blog post page**

```typescript
// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { title: 'Not found' };
  }

  return {
    title: `${post.title} — w1r3d.dev`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-blue-600 hover:text-blue-700">
        ← Back to blog
      </Link>

      <header className="mt-8">
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
        <p className="mt-2 text-gray-600">{post.date}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags?.map((tag: string) => (
            <span
              key={tag}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose max-w-none mt-8 text-gray-700">
        {post.content}
      </div>
    </article>
  );
}
```

**Step 4: Verify blog pages compile**

```bash
pnpm run build 2>&1 | tail -5
```

Expected: Build completes successfully.

**Step 5: Commit**

```bash
git add src/app/blog/ src/lib/mdx.ts
git commit -m "feat: Add blog pages with MDX support and post listing"
```

---

## Task 8: Build Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`

**Step 1: Create contact page**

```typescript
// src/app/contact/page.tsx
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact — w1r3d.dev',
  description: 'Get in touch with me.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have a project in mind? Let's talk about it.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Send me a message</h2>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="mt-2 text-gray-600">
              <a
                href="mailto:hi@w1r3d.dev"
                className="text-blue-600 hover:text-blue-700"
              >
                hi@w1r3d.dev
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Social</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://github.com/w1r3dh4ck3r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/w1r3dh4ck3r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Availability</h3>
            <p className="mt-2 text-gray-600">
              Usually available for new projects. Response time: 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Verify page compiles**

```bash
pnpm run build 2>&1 | grep -i "error"
```

Expected: No errors.

**Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat: Add contact page with email form and social links"
```

---

## Task 9: Configure Vercel & Deploy

**Files:**
- Create: `vercel.json`

**Step 1: Create Vercel config**

```json
{
  "buildCommand": "pnpm run build",
  "installCommand": "pnpm install",
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://w1r3d.dev"
  }
}
```

**Step 2: Add Vercel deployment**

```bash
cd /home/mark/AI/projects/w1r3d.dev

# Initialize Vercel project
pnpm dlx vercel --prod
```

Follow prompts:
- Set project name: `w1r3d`
- Set root directory: `.`
- Build command: `pnpm run build`

Expected: Project deployed to `https://w1r3d.vercel.app`

**Step 3: Verify deployment**

```bash
curl -s https://w1r3d.vercel.app | grep -o '<title>' | head -1
```

Expected: `<title>` tag found.

**Step 4: Commit Vercel config**

```bash
git add vercel.json
git commit -m "chore: Add Vercel deployment configuration"
```

---

## Task 10: Add as Git Submodule to ~/AI

**Files:**
- Modify: `/home/mark/AI/.gitmodules`
- Modify: `/home/mark/AI/projects.md`

**Step 1: Create GitHub repo**

```bash
cd /home/mark/AI/projects/w1r3d.dev
git remote add origin https://github.com/w1r3dh4ck3r/w1r3d.dev.git
git branch -M main
git push -u origin main
```

**Step 2: Add submodule to ~/AI**

```bash
cd /home/mark/AI
git submodule add https://github.com/w1r3dh4ck3r/w1r3d.dev.git projects/w1r3d.dev
git add .gitmodules projects/w1r3d.dev
git commit -m "feat: Add w1r3d.dev portfolio as submodule"
git push origin master
```

**Step 3: Update projects.md**

```markdown
// In /home/mark/AI/.claude/projects/-home-mark/memory/projects.md
// Add to Web / Tools section:

| w1r3d.dev | main | Personal portfolio: 4 case studies, blog, testimonials, animations, Vercel |
```

**Step 4: Verify submodule**

```bash
cd /home/mark/AI
git submodule status | grep w1r3d
```

Expected: Output shows `w1r3d.dev` submodule initialized.

**Step 5: Commit**

```bash
git add .
git commit -m "docs: Update projects list with w1r3d.dev portfolio"
```

---

## Final Verification Checklist

Run these before claiming completion:

```bash
# 1. All pages load without errors
pnpm dev &
sleep 2
for page in / /projects /about /blog /contact; do
  echo "Testing $page..."
  curl -s http://localhost:3000$page | grep -q "<h1" && echo "✓ $page OK" || echo "✗ $page FAILED"
done
kill %1

# 2. Build succeeds
pnpm run build && echo "✓ Build OK" || echo "✗ Build FAILED"

# 3. Git history is clean
git log --oneline -10

# 4. All tests pass (if applicable)
pnpm run test 2>/dev/null || echo "Note: No tests configured yet"

# 5. Deployed to Vercel
echo "Visit: https://w1r3d.vercel.app"
```

---

## Success Criteria

- [ ] All 5 pages build and render without errors
- [ ] Projects showcase all 4 case studies with live links
- [ ] Blog pages load with sample post visible
- [ ] Animations smooth (checked in Firefox DevTools)
- [ ] Mobile responsive (tested at 375px width)
- [ ] Deployed to Vercel with auto-deploys enabled
- [ ] GitHub repo clean with conventional commits
- [ ] Added as submodule to ~/AI
- [ ] Core Web Vitals passing (https://pagespeed.web.dev)
