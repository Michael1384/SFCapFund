'use client';

import React, { useMemo, useEffect, useRef, useState, useCallback } from 'react';
import { TICKER_TAPE } from '@/lib/data';
import type { TickerItem } from '@/lib/fetchTickers';

const DURATION = 120;      // CSS animation duration in seconds (higher = slower scroll)
const POLL_INTERVAL = 15_000;
const TOGGLE_INTERVAL = 5_000;

// Null-filled placeholder — shown only if no initialData provided
const EMPTY_TICKERS: TickerItem[] = TICKER_TAPE.map(t => ({
  ticker: t.ticker, market: t.market, price: null, change: null, changePct: null,
}));

export default function TickerTape({ initialData }: { initialData?: TickerItem[] }) {
  const [tickers, setTickers] = useState<TickerItem[]>(initialData ?? EMPTY_TICKERS);
  const [showPct, setShowPct] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Sync animation offset to fixed epoch so position is consistent across navigations
  useEffect(() => {
    if (!trackRef.current) return;
    const EPOCH = 1_700_000_000_000;
    const elapsed = (Date.now() - EPOCH) / 1000;
    const offset = elapsed % DURATION;
    trackRef.current.style.animationDelay = `-${offset}s`;
  }, []);

  // Poll /api/tickers every 15 seconds for live prices
  const fetchTickers = useCallback(async () => {
    try {
      const res = await fetch('/api/tickers', { cache: 'no-store' });
      if (!res.ok) return;
      const data: TickerItem[] = await res.json();
      if (Array.isArray(data) && data.length > 0) setTickers(data);
    } catch { /* keep existing nulls on failure */ }
  }, []);

  useEffect(() => {
    fetchTickers();
    const id = setInterval(fetchTickers, POLL_INTERVAL);
    return () => clearInterval(id);
  }, [fetchTickers]);

  // Toggle between absolute $ change and % change every 5 seconds
  useEffect(() => {
    const id = setInterval(() => setShowPct(p => !p), TOGGLE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const items = useMemo(() => [...tickers, ...tickers], [tickers]);

  return (
    <div style={{
      height: '32px',
      background: 'rgba(9,9,11,0.98)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div ref={trackRef} className="ticker-track">
        {items.map((item, i) => {
          const hasData = item.price !== null;
          const isPositive = (item.change ?? 0) >= 0;
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '0 16px' }}>
              <span style={{
                fontSize: '11px', fontWeight: 700,
                color: 'var(--text-primary)',
                fontFamily: 'ui-monospace, monospace',
                letterSpacing: '0.05em',
              }}>
                {item.market ? `${item.market}:${item.ticker}` : item.ticker}
              </span>
              <span style={{
                fontSize: '11px',
                color: 'var(--text-secondary)',
                fontVariantNumeric: 'tabular-nums',
                fontFamily: 'ui-monospace, monospace',
              }}>
                {hasData
                  ? item.price!.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                  : '---'}
              </span>
              <span style={{
                fontSize: '11px', fontWeight: 600,
                color: hasData ? (isPositive ? 'var(--gain)' : 'var(--loss)') : 'var(--text-secondary)',
                fontVariantNumeric: 'tabular-nums',
                fontFamily: 'ui-monospace, monospace',
                display: 'inline-block',
                minWidth: '46px',
                textAlign: 'center',
              }}>
                {hasData
                  ? (showPct
                    ? `${(item.changePct ?? 0) >= 0 ? '+' : ''}${(item.changePct ?? 0).toFixed(2)}%`
                    : `${(item.change ?? 0) >= 0 ? '+' : ''}$${Math.abs(item.change ?? 0).toFixed(2)}`)
                  : '---'}
              </span>
              <span style={{ color: 'var(--border-strong)', fontSize: '10px' }}>·</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
