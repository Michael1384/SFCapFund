# SF Capital Fund

A professional-grade financial dashboard for the SF Capital Student Investment Society.

## Stack
- **Next.js 15** (App Router + Turbopack)  
- **TypeScript** · **Tailwind CSS v4** · **Framer Motion v11**  
- **Recharts v2** · **Lucide React** · **react-countup**  
- **Supabase** (Postgres + Realtime) · **Financial Modeling Prep API**

---

## Quick Start

```bash
npm install
npm run dev
```

The app works immediately with **static seed data** — no database needed to get started.

---

## Going Live (Supabase + Real Prices)

### Step 1 — Install Supabase client
```bash
npm install @supabase/supabase-js
```

### Step 2 — Create a Supabase project
1. Go to [supabase.com](https://supabase.com) → New Project
2. Open **SQL Editor** → paste the entire contents of `supabase/schema.sql` → Run
3. This creates all tables, seeds the data, and sets up RLS

### Step 3 — Get a free stock price API key
1. Go to [financialmodelingprep.com](https://financialmodelingprep.com) → Sign Up (free)
2. Copy your API key from the dashboard

### Step 4 — Set environment variables
Copy `.env.local.example` to `.env.local` and fill in:
```bash
cp .env.local.example .env.local
```
```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
FMP_API_KEY=your_fmp_key
CRON_SECRET=any_random_string
```

### Step 5 — Seed live prices (first run)
```bash
curl -X POST http://localhost:3000/api/prices/refresh \
  -H "Authorization: Bearer your_random_string"
```

### Step 6 — Deploy to Vercel
```bash
npx vercel
```
Add the same env vars in the Vercel dashboard. The `vercel.json` cron job will then refresh prices **every 15 minutes** automatically.

---

## Architecture

```
[Vercel Cron — every 15min]
  → POST /api/prices/refresh
  → Fetch 13 tickers from FMP API
  → Upsert into Supabase price_snapshots

[Next.js Server Components — revalidate: 300s]
  → getHoldings()       — holdings + latest price joined
  → getPerformanceHistory() — daily NAV from price_snapshots
  → getNews()           — news_items ordered by published_at
  → getTeamMembers()    — team ordered by sort_order

[Client Components]
  → Receive data as props (no client-side fetching)
  → Charts, tables, and interactive UI render client-side
```

**Fallback:** If `NEXT_PUBLIC_SUPABASE_URL` is not set, all queries fall back to the static seed data in `src/lib/data.ts` — so the site always works.

---

## Pages
| Route | Description |
|-------|------------|
| `/` | Dashboard — AUM hero, performance chart, holdings, news |
| `/portfolios` | Portfolio switcher with filtered holdings table |
| `/performance` | Analytics, metrics, monthly returns bar chart |
| `/news` | News feed with category filters |
| `/about` | Team and investment philosophy |

## Critical Notes
- **Never** use `next/font/google` — Inter is loaded via `<link>` in `layout.tsx`
- **Never** use `@theme {}` in `globals.css` — crashes PostCSS with Tailwind v4
- **Never** use `Math.random()` or `new Date()` at module level — SSR hydration mismatch
- Always use `React.Fragment` with `key` in `.map()` returning multiple rows


## Stack
- **Next.js 15** (App Router + Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion v11**
- **Recharts v2**
- **Lucide React**
- **react-countup**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages
- `/` — Main dashboard (AUM, performance chart, holdings, news)
- `/portfolios` — Portfolio switcher with filtered holdings
- `/performance` — Analytics, metrics, monthly returns
- `/news` — News feed with category filters
- `/about` — Team and investment philosophy

## Project Structure
```
src/
├── app/             # Next.js App Router pages
├── components/      # UI components
└── lib/
    ├── types.ts     # TypeScript interfaces + helper functions
    └── data.ts      # Static seed data (holdings, news, team)
```

## Critical Notes
- **Never** use `next/font/google` — Inter is loaded via `<link>` in layout.tsx
- **Never** use `@theme {}` in globals.css — causes PostCSS crash with Tailwind v4
- **Never** use `Math.random()` or `new Date()` at module level — SSR hydration mismatch
- Always use `React.Fragment` with `key` in `.map()` returning multiple rows
