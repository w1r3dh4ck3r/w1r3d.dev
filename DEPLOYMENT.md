# w1r3d.dev Deployment Guide

## Prerequisites
- Vercel account (create at https://vercel.com if needed)
- `pnpm` installed globally
- Local copy of this project

## Deployment Steps

### Step 1: Authenticate with Vercel
```bash
cd /home/mark/AI/projects/w1r3d.dev
pnpm dlx vercel login
```

This will:
- Open a browser window (or provide a link)
- Authenticate your Vercel account
- Save auth token locally at `~/.vercel/auth.json`

### Step 2: Deploy to Production
```bash
pnpm dlx vercel --prod
```

When prompted:
- **Project name:** `w1r3d` (or press Enter to accept default)
- **Root directory:** `.` (or press Enter)
- **Build command:** `pnpm run build` (or press Enter to accept)

### Step 3: Verify Deployment
Once deployment completes, Vercel will provide:
- Production URL: `https://w1r3d.vercel.app`
- GitHub integration status

Test the deployment:
```bash
curl -s https://w1r3d.vercel.app | grep -o '<title>' | head -1
# Should output: <title>
```

## What Gets Deployed
- All 4 featured projects (gustavoFois, expira, ANIA, karolinejangola)
- Blog with MDX rendering
- Testimonials section
- Contact form (mock implementation)
- Responsive design with mobile navigation
- Framer Motion animations

## Production Notes
- `vercel.json` configures build and install commands
- All pages pre-rendered as static HTML (fast)
- Blog post: `/blog/building-scalable-systems`
- Contact form currently sends to mock endpoint (set up Resend/SendGrid to go live)

## After Deployment
1. Custom domain: Go to Vercel dashboard → Settings → Domains → Add `w1r3d.dev`
2. Update contact form: Replace mock `sendContactEmail` in `src/app/actions.ts` with real email service
3. Analytics: Optionally add Vercel Analytics in `next.config.ts`

---

Questions? Check the main README or see `docs/plans/` for architecture details.
