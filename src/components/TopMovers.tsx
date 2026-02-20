'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { calcDayChangePercent, calcDayChange } from '@/lib/types';
import type { Holding } from '@/lib/types';

export default function TopMovers({ holdings }: { holdings: Holding[] }) {
  const sorted  = [...holdings].sort((a, b) => Math.abs(calcDayChangePercent(b)) - Math.abs(calcDayChangePercent(a)));
  const gainers = sorted.filter(h => calcDayChangePercent(h) >= 0).slice(0, 3);
  const losers  = sorted.filter(h => calcDayChangePercent(h) < 0).slice(0, 3);

  function List({ items, up }: { items: Holding[]; up: boolean }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {items.map(h => {
          const pct = calcDayChangePercent(h);
          const chg = calcDayChange(h);
          return (
            <div key={h.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'var(--space-3) var(--space-4)',
              borderRadius: 'var(--radius-md)',
              transition: 'background var(--transition)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
                {h.ticker}
              </span>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: up ? 'var(--gain)' : 'var(--loss)', fontVariantNumeric: 'tabular-nums' }}>
                  {up ? '+' : ''}{pct.toFixed(2)}%
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontVariantNumeric: 'tabular-nums' }}>
                  {chg >= 0 ? '+' : ''}${Math.abs(chg).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="surface" style={{ padding: 'var(--space-6)' }}>
      <div className="eyebrow" style={{ marginBottom: '4px' }}>Daily Movers</div>
      <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-5)' }}>Top Gainers &amp; Losers</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: 'var(--space-3)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--border)' }}>
            <TrendingUp size={12} color="var(--gain)" />
            <span className="eyebrow" style={{ color: 'var(--gain)' }}>Gainers</span>
          </div>
          <List items={gainers} up={true} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: 'var(--space-3)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--border)' }}>
            <TrendingDown size={12} color="var(--loss)" />
            <span className="eyebrow" style={{ color: 'var(--loss)' }}>Losers</span>
          </div>
          <List items={losers} up={false} />
        </div>
      </div>
    </div>
  );
}
