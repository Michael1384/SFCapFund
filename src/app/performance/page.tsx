'use client';

import React, { useState, useEffect } from 'react';
import Background from '@/components/Background';
import PerformanceChart from '@/components/PerformanceChart';
import { PERFORMANCE_DATA } from '@/lib/data';
import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const MONTHLY_RETURNS = [
  { month: 'Mar 26', return: 3.2 },
  { month: 'Apr 26', return: -1.4 },
  { month: 'May 26', return: 4.8 },
];

const METRICS = [
  { label: 'Total Return',  value: '+18.4%', color: 'var(--gain)',          sub: 'Since inception Mar 2026' },
  { label: 'vs S&P 500',    value: '+6.1%',  color: 'var(--gain)',          sub: 'Alpha generated' },
  { label: 'Sharpe Ratio',  value: '1.42',   color: 'var(--text-primary)',  sub: 'Risk-adjusted return' },
  { label: 'Max Drawdown',  value: '-8.3%',  color: 'var(--loss)',          sub: 'Worst peak-to-trough' },
  { label: 'Win Rate',      value: '69%',    color: 'var(--gain)',          sub: 'Positions with +P&L' },
  { label: 'Volatility',    value: '12.1%',  color: 'var(--text-primary)',  sub: 'Annualised std dev' },
];

export default function PerformancePage() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <Background />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '104px', overflowX: 'hidden' }}>
        <div className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 'var(--space-9)' }}>

          <div style={{ marginBottom: 'var(--space-4)' }}>
            <div className="eyebrow" style={{ marginBottom: '6px', fontSize: isMobile ? '10px' : undefined }}>Analytics · Fund Year 2026</div>
            <h1 style={{ fontSize: isMobile ? '24px' : 'var(--text-3xl)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>Performance</h1>
          </div>

          {/* Metrics — joined border grid */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', background: 'var(--border)', marginBottom: 'var(--space-5)' }}>
            {METRICS.map(m => (
              <div key={m.label} style={{ background: 'var(--bg-raised)', padding: isMobile ? 'var(--space-3)' : 'var(--space-5)' }}>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-2)', fontSize: isMobile ? '9px' : undefined }}>{m.label}</div>
                <div className="metric-value" style={{ color: m.color, fontSize: isMobile ? '22px' : undefined }}>{m.value}</div>
                <div style={{ fontSize: isMobile ? '10px' : 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-1)' }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <PerformanceChart data={PERFORMANCE_DATA} />
          </div>

          {/* Monthly Returns */}
          <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-6)' }}>
            <div className="eyebrow" style={{ marginBottom: '4px', fontSize: isMobile ? '10px' : undefined }}>Breakdown</div>
            <div style={{ fontSize: isMobile ? '14px' : 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: isMobile ? 'var(--space-4)' : 'var(--space-6)' }}>
              Monthly Returns
            </div>

            {mounted ? (
              <ResponsiveContainer width="100%" height={isMobile ? 140 : 180}>
                <BarChart data={MONTHLY_RETURNS} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} tickLine={false} axisLine={false} />
                  <YAxis
                    tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} tickLine={false} axisLine={false}
                    tickFormatter={(v: number) => `${v > 0 ? '+' : ''}${v.toFixed(1)}%`}
                    width={48}
                  />
                  <Tooltip
                    formatter={(v: number) => [`${v > 0 ? '+' : ''}${v.toFixed(2)}%`, 'Return']}
                    contentStyle={{ background: 'var(--bg-raised)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', fontSize: 12, color: 'var(--text-primary)' }}
                    cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  />
                  <Bar dataKey="return" radius={[3, 3, 0, 0]} maxBarSize={48}>
                    {MONTHLY_RETURNS.map((entry, i) => (
                      <Cell key={i} fill={entry.return >= 0 ? 'var(--gain)' : 'var(--loss)'} fillOpacity={0.85} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ height: isMobile ? 140 : 180 }} />
            )}

            {/* Table */}
            <div style={{ marginTop: 'var(--space-5)', display: 'flex', flexDirection: 'column' }}>
              {MONTHLY_RETURNS.map((r, i) => (
                <div key={r.month} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: isMobile ? 'var(--space-2) 0' : 'var(--space-3) 0',
                  borderBottom: i < MONTHLY_RETURNS.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ fontSize: isMobile ? '12px' : 'var(--text-sm)', color: 'var(--text-secondary)' }}>{r.month}</span>
                  <span style={{ fontSize: isMobile ? '12px' : 'var(--text-sm)', fontWeight: 600, color: r.return >= 0 ? 'var(--gain)' : 'var(--loss)', fontVariantNumeric: 'tabular-nums' }}>
                    {r.return >= 0 ? '+' : ''}{r.return.toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
