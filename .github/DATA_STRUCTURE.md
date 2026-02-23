# SF Capital — Data Structure Reference

This document describes the complete data architecture so filler data can be re-added or replaced with live data later.

---

## 1. Core Types (`src/lib/types.ts`)

### `Holding`
Each open position in a portfolio. One holding can belong to multiple portfolios via `portfolioIds`.

```ts
{
  id: string;               // unique slug, e.g. 'aapl'
  ticker: string;           // display ticker, e.g. 'AAPL'
  name: string;             // full name, e.g. 'Apple Inc.'
  assetClass: AssetClass;   // 'equity' | 'commodity' | 'etf' | 'crypto' | 'bond' | 'cash'
  shares: number;           // number of shares/units held
  avgCost: number;          // average cost per share (in currency)
  currentPrice: number;     // live/latest price per share
  previousClose: number;    // prior day close (for day change calc)
  currency: string;         // 'USD' | 'AUD' etc.
  sector?: string;          // e.g. 'Technology', 'Commodities'
  portfolioIds: PortfolioId[];  // which portfolios this holding belongs to
  thesis?: string;          // one-line investment thesis (shown in expandable row)
  addedDate: string;        // ISO date string 'YYYY-MM-DD'
}
```

**Computed helpers** (in `types.ts`):
- `calcHoldingValue(h)`      → `shares × currentPrice`
- `calcHoldingCost(h)`       → `shares × avgCost`
- `calcHoldingPnL(h)`        → `value − cost`
- `calcHoldingPnLPercent(h)` → `PnL / cost × 100`
- `calcDayChange(h)`         → `(currentPrice − previousClose) × shares`
- `calcDayChangePercent(h)`  → `(currentPrice − previousClose) / previousClose × 100`

---

### `Portfolio`
Static metadata for each of the three portfolios.

```ts
{
  id: PortfolioId;            // 'horizon-growth' | 'macro' | 'quant'
  name: string;               // display name
  tagline: string;            // short tagline shown under title
  description: string;        // one-paragraph description
  overview: string;           // longer overview paragraph (portfolio detail page)
  coverage: string[];         // bullet list — what asset classes/regions are covered
  strategyPoints: string[];   // bullet list — how the strategy works
  inception: string;          // ISO date 'YYYY-MM-DD'
  initialAUM: number;         // starting capital in AUD, e.g. 50000
  targetReturn: string;       // display string e.g. '18–30%'
  targetReturnNote?: string;  // optional caveat, e.g. 'Higher risk profile...'
  strategy: string;           // short one-liner label e.g. 'Growth / Thematic'
  holdingIds: string[];       // list of Holding.id values that belong here
  accentColor: string;        // hex colour for UI accents
  team?: PortfolioMember[];   // 1 PM + 5 analysts (shown on /portfolios/[slug])
}
```

**Portfolio IDs:**
- `'horizon-growth'` — accent `#3b82f6` (blue)
- `'macro'`          — accent `#f59e0b` (amber)
- `'quant'`          — accent `#a855f7` (purple)

---

### `PerformancePoint`
A single data point for any time-series chart.

```ts
{
  date: string;       // ISO date 'YYYY-MM-DD'
  value: number;      // portfolio NAV (e.g. 50000, 51200, ...)
  benchmark?: number; // S&P 500 benchmark NAV for same start date
}
```

Used in:
- `PERFORMANCE_DATA` — fund-wide 91-day history (used on `/performance` page and homepage chart)
- `PORTFOLIO_PERFORMANCE` — per-portfolio 30-day history (used in mini charts on `/portfolios`)

---

### `TeamMember`
Used for the global team array (not currently shown on any page, reserved).

```ts
{
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
}
```

---

## 2. Data File (`src/lib/data.ts`)

All static/filler data lives here. When real data is available, replace these exports.

### `HOLDINGS: Holding[]`
Array of all holdings across all three portfolios.

**When filler data was present:**
- Horizon Growth: AAPL, MSFT, NVDA, GOOGL, TSLA, META, SPY (7 holdings)
- Macro: GC=F, SI=F, CL=F, JPM, QQQ (5 holdings)
- Quant: AMD, PLTR, NFLX, CRM, ARKK (5 holdings)
- Each portfolio's cost basis ≈ $50,000 AUD

**Current state:** Empty array `[]`

### `PORTFOLIOS: Portfolio[]`
Three portfolio objects. The `holdingIds` array links holdings to each portfolio.
**Current state:** Portfolio metadata retained, `holdingIds: []` for all three.

### `PERFORMANCE_DATA: PerformancePoint[]`
91 daily data points used on the homepage dashboard and `/performance` chart.
Generated from deterministic increment arrays (no `Math.random()`).
**Current state:** Empty array `[]`

### `PORTFOLIO_PERFORMANCE: Record<PortfolioId, PerformancePoint[]>`
30 daily data points per portfolio, used in the mini charts on `/portfolios`.
**Current state:** All three set to `[]`

### `TEAM_MEMBERS: TeamMember[]`
Global team array. Not currently rendered on any page.
**Current state:** Empty array `[]`

### `TICKER_TAPE`
Symbol list for the scrolling ticker at the top. This is **live-fetched** via `/api/tickers` — not filler data. Keep as-is.

---

## 3. How Holdings Flow Through the UI

```
data.ts: HOLDINGS[]
    ↓
/app/page.tsx (server)         → getHoldings() from Supabase (or falls back to HOLDINGS)
    ↓ props
HomeClient.tsx → HomeDashboard → PerformanceChart + SectorAllocation

/app/portfolios/page.tsx       → uses HOLDINGS directly (client)
    ↓
PortfoliosClient → HoldingsTable (expandable rows with thesis, day change, weight)

/app/portfolios/[slug]/page.tsx (server) → filters HOLDINGS by portfolio.holdingIds
    ↓ props
PortfolioDetail → HoldingsTable
```

---

## 4. How the Expandable Holdings Row Works (`HoldingsTable.tsx`)

Each row in the holdings table can be clicked to expand a detail panel.
The expanded row shows:
- Investment thesis text (`holding.thesis`)
- Entry price / avg cost
- Day change $ and %
- Added date

State: `expandedId: string | null` — set to `holding.id` on click, `null` on second click.

Sorting: click any column header (`Ticker`, `Value`, `P&L %`, `Day %`, `Weight`) to sort asc/desc.

---

## 5. How Performance Charts Work

### `PerformanceChart` (`src/components/PerformanceChart.tsx`)
- Recharts `AreaChart` with two series: portfolio NAV and S&P 500 benchmark
- Normalises both series to % return from the start point
- Props: `data: PerformancePoint[]`
- When `data` is empty, renders a placeholder message

### `MiniChart` (inside `src/app/portfolios/page.tsx`)
- Same Recharts `AreaChart` pattern, smaller height
- Uses `PORTFOLIO_PERFORMANCE[activeId]`
- When data is empty, renders a placeholder

---

## 6. Filler Metrics on `/performance` Page

These are hardcoded in `performance/page.tsx` (not from `data.ts`):

```ts
const METRICS = [
  { label: 'Total Return',  value: '+18.4%', ... },
  { label: 'vs S&P 500',    value: '+6.1%',  ... },
  { label: 'Sharpe Ratio',  value: '1.42',   ... },
  { label: 'Max Drawdown',  value: '-8.3%',  ... },
  { label: 'Win Rate',      value: '69%',    ... },
  { label: 'Volatility',    value: '12.1%',  ... },
];
const MONTHLY_RETURNS = [
  { month: 'Mar 26', return: 3.2 },
  { month: 'Apr 26', return: -1.4 },
  { month: 'May 26', return: 4.8 },
];
```

**Current state:** Metrics replaced with `—` placeholders. Monthly returns table hidden.

---

## 7. Filler Metrics on Homepage (`HomeClient.tsx`)

The "Our 2025 Performance" section had four hardcoded stat cards:
```ts
{ label: 'Total Return',  value: '+24.7%', sub: 'Mar – Dec 2025' }
{ label: 'vs S&P 500',    value: '+8.3%',  sub: 'outperformance' }
{ label: 'Max Drawdown',  value: '-6.1%',  sub: 'peak to trough' }
{ label: 'Sharpe Ratio',  value: '1.84',   sub: 'risk-adjusted'  }
```

**Current state:** Section hidden entirely on the homepage.

---

## 8. Supabase Integration (Future)

`src/lib/queries.ts` — `getHoldings()` and `getPerformanceHistory()` fetch from Supabase.
`src/lib/supabase.ts` — Supabase client setup.
`src/app/page.tsx` — already calls these, falls back gracefully if empty.

When live data is ready:
1. Add real holdings to Supabase `holdings` table (schema in `supabase/schema.sql`)
2. `getHoldings()` will return them; `HOLDINGS` in `data.ts` becomes a fallback only
3. Update `PORTFOLIOS[].holdingIds` to match real Supabase holding IDs
4. Feed real `PerformancePoint[]` data into `PERFORMANCE_DATA` or serve from Supabase

---

## 9. Analyst Names (Placeholder)

In `PORTFOLIOS[].team`, all analyst slots currently use `'Analyst Name'` as placeholder.
Replace with real names once recruitment is complete.

The `about/page.tsx` `FUND_TEAMS` array is separate (hardcoded in the page file) and also uses placeholder analyst names. Update both when ready.
