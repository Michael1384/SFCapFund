import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

// All tickers we track — must match holdings in DB
const TICKERS = [
  'AAPL','MSFT','NVDA','GOOGL','JPM',
  'TSLA','META','AMZN','ARKK','SPY',
  // Commodities use different symbols on FMP
  'GCUSD',   // Gold  (GC=F equivalent)
  'SIUSD',   // Silver
  'CLUSD',   // Crude Oil
];

// Map FMP commodity tickers back to our internal ticker names
const FMP_TO_INTERNAL: Record<string, string> = {
  GCUSD: 'GC=F',
  SIUSD: 'SI=F',
  CLUSD: 'CL=F',
};

async function fetchPricesFromFMP(tickers: string[]) {
  const apiKey = process.env.FMP_API_KEY;
  if (!apiKey) throw new Error('FMP_API_KEY not set');

  const joined = tickers.join(',');
  const url = `https://financialmodelingprep.com/api/v3/quote/${joined}?apikey=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: 0 } }); // never cache
  if (!res.ok) throw new Error(`FMP API error: ${res.status}`);

  const data = await res.json();
  return data as Array<{
    symbol: string;
    price: number;
    previousClose: number;
    change: number;
    changesPercentage: number;
    volume: number;
    marketCap: number;
  }>;
}

// POST /api/prices/refresh
// Called by Vercel Cron (vercel.json) or manually
export async function POST(request: Request) {
  // Protect with a shared secret so only your cron can call it
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const db = createServerClient();
    const quotes = await fetchPricesFromFMP(TICKERS);

    const now = new Date();
    const today = now.toISOString().split('T')[0]; // YYYY-MM-DD

    const rows = quotes.map(q => ({
      ticker:         FMP_TO_INTERNAL[q.symbol] ?? q.symbol,
      price:          q.price,
      previous_close: q.previousClose,
      change:         q.change,
      change_pct:     q.changesPercentage,
      volume:         q.volume ?? null,
      market_cap:     q.marketCap ?? null,
      fetched_at:     now.toISOString(),
      date:           today,
    }));

    // Upsert — if same ticker+date already exists, update it
    const { error } = await db
      .from('price_snapshots')
      .upsert(rows, { onConflict: 'ticker,date' });

    if (error) throw error;

    return NextResponse.json({
      ok: true,
      updated: rows.length,
      tickers: rows.map(r => r.ticker),
      at: now.toISOString(),
    });
  } catch (err) {
    console.error('[prices/refresh]', err);
    return NextResponse.json(
      { error: String(err) },
      { status: 500 },
    );
  }
}

// GET /api/prices/refresh — for manual browser testing
export async function GET(request: Request) {
  return POST(request);
}
