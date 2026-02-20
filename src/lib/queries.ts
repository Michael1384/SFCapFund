/**
 * src/lib/queries.ts
 *
 * Server-side data fetching functions.
 * Call these from Server Components (no 'use client').
 * They fall back to static seed data if Supabase env vars are not set.
 */

import { createServerClient } from '@/lib/supabase';
import {
  HOLDINGS as SEED_HOLDINGS,
  PORTFOLIOS as SEED_PORTFOLIOS,
  PERFORMANCE_DATA as SEED_PERF,
  NEWS_ITEMS as SEED_NEWS,
  TEAM_MEMBERS as SEED_TEAM,
} from '@/lib/data';
import type { Holding, Portfolio, PerformancePoint, NewsItem, TeamMember } from '@/lib/types';

// ─── Helper ──────────────────────────────────────────────────────────────────
function hasSupabase() {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}
/**
 * Fetches all holdings joined with the latest price snapshot for each ticker.
 * Falls back to static seed data if Supabase is not configured.
 */
export async function getHoldings(): Promise<Holding[]> {
  if (!hasSupabase()) return SEED_HOLDINGS;

  const db = createServerClient();
  if (!db) return SEED_HOLDINGS;

  // 1. Get all holdings
  const { data: holdingRows, error: hErr } = await db
    .from('holdings')
    .select('*')
    .order('added_date', { ascending: true });

  if (hErr || !holdingRows?.length) return SEED_HOLDINGS;

  // 2. Get latest price for each ticker
  const tickers = holdingRows.map(h => h.ticker);
  const { data: priceRows, error: pErr } = await db
    .from('price_snapshots')
    .select('ticker, price, previous_close')
    .in('ticker', tickers)
    .order('fetched_at', { ascending: false });

  if (pErr) return SEED_HOLDINGS;

  // Build a map: ticker → latest price row
  const priceMap = new Map<string, { price: number; previousClose: number }>();
  for (const p of priceRows ?? []) {
    if (!priceMap.has(p.ticker)) {
      priceMap.set(p.ticker, { price: p.price, previousClose: p.previous_close });
    }
  }

  // 3. Get portfolio memberships
  const { data: membershipRows } = await db
    .from('portfolio_holdings')
    .select('portfolio_id, holding_id');

  const membershipMap = new Map<string, string[]>();
  for (const m of membershipRows ?? []) {
    const arr = membershipMap.get(m.holding_id) ?? [];
    arr.push(m.portfolio_id);
    membershipMap.set(m.holding_id, arr);
  }

  // 4. Merge into Holding shape
  return holdingRows.map(h => {
    const live = priceMap.get(h.ticker);
    return {
      id:            h.id,
      ticker:        h.ticker,
      name:          h.name,
      assetClass:    h.asset_class,
      shares:        h.shares,
      avgCost:       h.avg_cost,
      currentPrice:  live?.price         ?? h.avg_cost,
      previousClose: live?.previousClose ?? h.avg_cost,
      currency:      h.currency,
      sector:        h.sector ?? undefined,
      portfolioIds:  (membershipMap.get(h.id) ?? []) as Holding['portfolioIds'],
      thesis:        h.thesis ?? undefined,
      addedDate:     h.added_date,
    };
  });
}

// ─── Portfolios ───────────────────────────────────────────────────────────────
export async function getPortfolios(): Promise<Portfolio[]> {
  if (!hasSupabase()) return SEED_PORTFOLIOS;

  const db = createServerClient();
  if (!db) return SEED_PORTFOLIOS;

  const { data: portRows, error } = await db
    .from('portfolios')
    .select('*, portfolio_holdings(holding_id)')
    .order('id');

  if (error || !portRows?.length) return SEED_PORTFOLIOS;

  return portRows.map(p => ({
    id:           p.id as Portfolio['id'],
    name:         p.name,
    description:  p.description,
    inception:    p.inception,
    targetReturn: p.target_return,
    strategy:     p.strategy,
    holdingIds:   (p.portfolio_holdings as { holding_id: string }[]).map(ph => ph.holding_id),
  }));
}

// ─── Performance History ──────────────────────────────────────────────────────
/**
 * Returns daily NAV history from price_snapshots.
 * Computes fund value per day by summing (shares × price) for each holding.
 * Falls back to seed data if Supabase not configured.
 */
export async function getPerformanceHistory(days = 91): Promise<PerformancePoint[]> {
  if (!hasSupabase()) return SEED_PERF;

  const db = createServerClient();
  if (!db) return SEED_PERF;

  const { data: holdings } = await db
    .from('holdings')
    .select('id, ticker, shares');

  if (!holdings?.length) return SEED_PERF;

  const { data: snapshots, error } = await db
    .from('price_snapshots')
    .select('ticker, price, date')
    .order('date', { ascending: true })
    .limit(days * holdings.length);

  if (error || !snapshots?.length) return SEED_PERF;

  // Group snapshots by date
  const byDate = new Map<string, Map<string, number>>();
  for (const s of snapshots) {
    if (!byDate.has(s.date)) byDate.set(s.date, new Map());
    byDate.get(s.date)!.set(s.ticker, s.price);
  }

  // Compute fund NAV per date
  const points: PerformancePoint[] = [];
  for (const [date, prices] of Array.from(byDate.entries()).sort()) {
    const value = holdings.reduce((sum, h) => {
      const price = prices.get(h.ticker) ?? 0;
      return sum + h.shares * price;
    }, 0);
    points.push({ date, value });
  }

  return points.slice(-days);
}

// ─── News ─────────────────────────────────────────────────────────────────────
export async function getNews(limit = 20): Promise<NewsItem[]> {
  if (!hasSupabase()) return SEED_NEWS;

  const db = createServerClient();
  if (!db) return SEED_NEWS;

  const { data, error } = await db
    .from('news_items')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error || !data?.length) return SEED_NEWS;

  return data.map(n => ({
    id:          n.id,
    title:       n.title,
    summary:     n.summary,
    source:      n.source,
    url:         n.url,
    publishedAt: n.published_at,
    sentiment:   n.sentiment,
    tickers:     n.tickers ?? undefined,
  }));
}

// ─── Team ─────────────────────────────────────────────────────────────────────
export async function getTeamMembers(): Promise<TeamMember[]> {
  if (!hasSupabase()) return SEED_TEAM;

  const db = createServerClient();
  if (!db) return SEED_TEAM;

  const { data, error } = await db
    .from('team_members')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error || !data?.length) return SEED_TEAM;

  return data.map(m => ({
    name:     m.name,
    role:     m.role,
    bio:      m.bio,
    linkedin: m.linkedin ?? undefined,
  }));
}
