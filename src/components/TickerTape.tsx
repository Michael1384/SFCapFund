'use client';

import React, { useMemo, useEffect, useRef } from 'react';
import { TICKER_TAPE } from '@/lib/data';

const DURATION = 55; // seconds — must match the CSS animation duration

// Renders inline — parent <header> in Navbar owns the fixed positioning
export default function TickerTape() {
  const items = useMemo(() => [...TICKER_TAPE, ...TICKER_TAPE], []);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    // Derive offset from a fixed epoch so the ticker position is identical
    // on every page mount/navigation, regardless of when the component mounts.
    const EPOCH = 1_700_000_000_000; // fixed ms reference — never changes
    const elapsed = (Date.now() - EPOCH) / 1000; // seconds since epoch
    const offset = elapsed % DURATION; // position within one cycle
    trackRef.current.style.animationDelay = `-${offset}s`;
  }, []);

  return (
    <div
      style={{
        height: '32px',
        background: 'rgba(9,9,11,0.98)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div ref={trackRef} className="ticker-track">
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0 20px',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                fontFamily: 'ui-monospace, monospace',
                letterSpacing: '0.05em',
              }}
            >
              {item.ticker}
            </span>
            <span
              style={{
                fontSize: '11px',
                color: 'var(--text-secondary)',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 600,
                color: item.change >= 0 ? 'var(--gain)' : 'var(--loss)',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {item.change >= 0 ? '+' : ''}{item.changePct.toFixed(2)}%
            </span>
            <span
              style={{
                color: 'var(--border-strong)',
                fontSize: '10px',
              }}
            >
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
