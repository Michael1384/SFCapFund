// Shared server-side ticker fetch — called directly (no HTTP) by layout.tsx
// and re-used by the /api/tickers route for client polling.

// eslint-disable-next-line @typescript-eslint/no-require-imports
const YahooFinanceLib = require('yahoo-finance2');
// yahoo-finance2 v3 requires instantiation with new
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const yf: any = new YahooFinanceLib.default({ suppressNotices: ['yahooSurvey'] });

import { TICKER_TAPE } from '@/lib/data';

export interface TickerItem {
  ticker: string;
  market?: string;   // e.g. 'NASDAQ', 'ASX' — undefined for crypto/forex/futures
  price: number | null;
  change: number | null;
  changePct: number | null;
}

interface YahooQuote {
  symbol: string;
  regularMarketPrice?: number | null;
  regularMarketChange?: number | null;
  regularMarketChangePercent?: number | null;
}

// In-process cache shared across all callers (layout + API route)
let cache: { data: TickerItem[]; fetchedAt: number } | null = null;
export const CACHE_TTL_MS = 15_000;

export async function fetchTickers(): Promise<TickerItem[]> {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.data;
  }

  // Use yahooSymbol override if present, otherwise pass ticker straight through
  const symbols = TICKER_TAPE.map(t => t.yahooSymbol ?? t.ticker);

  let results: TickerItem[];

  try {
    const raw: YahooQuote[] = await yf.quote(symbols, {}, { validateResult: false });
    const quoteArray: YahooQuote[] = Array.isArray(raw) ? raw : [raw];
    const quoteMap = new Map(quoteArray.map(q => [q.symbol, q]));

    results = TICKER_TAPE.map(t => {
      const yahooSym = t.yahooSymbol ?? t.ticker;
      const q = quoteMap.get(yahooSym);
      if (q && q.regularMarketPrice && q.regularMarketPrice > 0) {
        return {
          ticker:    t.ticker,
          market:    t.market,
          price:     q.regularMarketPrice,
          change:    q.regularMarketChange ?? null,
          changePct: q.regularMarketChangePercent ?? null,
        };
      }
      return { ticker: t.ticker, market: t.market, price: null, change: null, changePct: null };
    });
  } catch {
    results = TICKER_TAPE.map(t => ({ ticker: t.ticker, market: t.market, price: null, change: null, changePct: null }));
  }

  cache = { data: results, fetchedAt: Date.now() };
  return results;
}
