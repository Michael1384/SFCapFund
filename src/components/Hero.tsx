'use client';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { calcHoldingValue, calcHoldingCost, calcHoldingPnL, calcDayChange } from '@/lib/types';
import type { Holding } from '@/lib/types';

export default function Hero({ holdings }: { holdings: Holding[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const totalValue  = holdings.reduce((sum, h) => sum + calcHoldingValue(h), 0);
  const totalCost   = holdings.reduce((sum, h) => sum + calcHoldingCost(h), 0);
  const totalPnL    = holdings.reduce((sum, h) => sum + calcHoldingPnL(h), 0);
  const totalPnLPct = totalCost === 0 ? 0 : (totalPnL / totalCost) * 100;
  const dayChange   = holdings.reduce((sum, h) => sum + calcDayChange(h), 0);
  const dayPct      = totalValue - dayChange === 0 ? 0 : (dayChange / (totalValue - dayChange)) * 100;

  const isUp = totalPnL >= 0;
  const dayUp = dayChange >= 0;

  return (
    <section style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-7)' }}>
      <div className="container">

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
          <div className="live-dot" />
          <span className="eyebrow">SF Capital · Fund Year 2026 · Mar 1 – Dec 31</span>
        </div>

        {/* AUM */}
        <div style={{ marginBottom: 'var(--space-3)' }}>
          <div style={{ fontSize: 'clamp(42px, 7vw, 64px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--text-primary)' }}>
            {mounted ? (
              <CountUp start={0} end={totalValue} duration={1.8} separator="," decimals={2} decimal="." prefix="$" />
            ) : (
              <span>${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            )}
          </div>
        </div>

        {/* Sub-label */}
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-6)', letterSpacing: '0.02em' }}>
          Total Assets Under Management
        </div>

        {/* Day change pill */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <span className={`badge ${dayUp ? 'badge-gain' : 'badge-loss'}`} style={{ fontSize: 'var(--text-sm)', padding: '5px 10px' }}>
            {dayUp ? '▲' : '▼'}&nbsp;
            {dayUp ? '+' : ''}${Math.abs(dayChange).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            &nbsp;({dayUp ? '+' : ''}{dayPct.toFixed(2)}%)&nbsp;today
          </span>
        </div>

        {/* Metrics row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {[
            {
              label: 'Total Return',
              value: `${isUp ? '+' : ''}${totalPnLPct.toFixed(2)}%`,
              sub: `${isUp ? '+' : ''}$${Math.abs(totalPnL).toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
              color: isUp ? 'var(--gain)' : 'var(--loss)',
            },
            {
              label: "Today's P&L",
              value: `${dayUp ? '+' : ''}$${Math.abs(dayChange).toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
              sub: `${dayUp ? '+' : ''}${dayPct.toFixed(2)}%`,
              color: dayUp ? 'var(--gain)' : 'var(--loss)',
            },
            {
              label: 'Open Positions',
              value: `${holdings.length}`,
              sub: '4 asset classes',
              color: 'var(--text-primary)',
            },
            {
              label: 'Fund Period',
              value: 'Mar–Dec 2026',
              sub: '10-month term',
              color: 'var(--text-secondary)',
            },
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'var(--bg-raised)',
              padding: 'var(--space-5) var(--space-6)',
            }}>
              <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>{stat.label}</div>
              <div className="metric-value" style={{ color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-2)' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
