'use client';

import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Background from '@/components/Background';
import HoldingsTable from '@/components/HoldingsTable';
import { PORTFOLIO_PERFORMANCE } from '@/lib/data';
import { calcHoldingCost, calcHoldingPnL } from '@/lib/types';
import type { Portfolio, Holding, PerformancePoint } from '@/lib/types';

function normalise(data: PerformancePoint[]) {
  if (!data.length) return [];
  const base = data[0].value;
  const baseBm = data[0].benchmark ?? base;
  return data.map(p => ({
    date: p.date,
    portfolio: parseFloat((((p.value - base) / base) * 100).toFixed(2)),
    sp500:     parseFloat(((((p.benchmark ?? baseBm) - baseBm) / baseBm) * 100).toFixed(2)),
  }));
}

function MiniChart({ data, accent }: { data: PerformancePoint[]; accent: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const chartData = normalise(data);
  if (!mounted) return (
    <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Loading…</span>
    </div>
  );
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={chartData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id={`fill-${accent.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity={0.18} />
            <stop offset="100%" stopColor={accent} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="2 4" stroke="var(--border)" vertical={false} />
        <XAxis dataKey="date" tick={{ fontSize: 9, fill: 'var(--text-tertiary)' }} tickLine={false} axisLine={false}
          tickFormatter={(v: string) => { const p = v.split('-'); return `${p[2]}/${p[1]}`; }}
          interval={4} />
        <YAxis tick={{ fontSize: 9, fill: 'var(--text-tertiary)' }} tickLine={false} axisLine={false}
          tickFormatter={(v: number) => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`} width={46} />
        <Tooltip
          contentStyle={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '11px' }}
          labelStyle={{ color: 'var(--text-tertiary)', marginBottom: '4px' }}
          formatter={(val: number, name: string) => [`${val >= 0 ? '+' : ''}${val}%`, name]}
        />
        <Area type="monotone" dataKey="portfolio" name="Portfolio"
          stroke={accent} strokeWidth={1.5} fill={`url(#fill-${accent.replace('#', '')})`} dot={false}
          activeDot={{ r: 3, fill: accent, strokeWidth: 0 }} />
        <Area type="monotone" dataKey="sp500" name="S&P 500"
          stroke="var(--text-tertiary)" strokeWidth={1} fill="none" dot={false} strokeDasharray="3 4"
          activeDot={{ r: 3, fill: 'var(--text-secondary)', strokeWidth: 0 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

interface PortfolioDetailProps {
  portfolio: Portfolio;
  holdings: Holding[];
}

export default function PortfolioDetail({ portfolio, holdings }: PortfolioDetailProps) {
  const totalCost  = holdings.reduce((sum, h) => sum + calcHoldingCost(h), 0);
  const totalPnL   = holdings.reduce((sum, h) => sum + calcHoldingPnL(h), 0);
  const pnlPct     = totalCost > 0 ? (totalPnL / totalCost) * 100 : 0;
  const currentAUM = portfolio.initialAUM * (1 + pnlPct / 100);

  const accent   = portfolio.accentColor ?? 'var(--accent-text)';
  const perfData = PORTFOLIO_PERFORMANCE[portfolio.id] ?? [];

  return (
    <>
      <Background />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '104px' }}>
        {/* Page heading */}
        <div className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 0 }}>
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <div className="eyebrow" style={{ marginBottom: '6px', fontSize: 'var(--text-sm)' }}>Fund Year 2026</div>
            <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, letterSpacing: '-0.025em' }}>{portfolio.name}</h1>
            {portfolio.tagline && (
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-2)', lineHeight: 1.6 }}>
                {portfolio.tagline}
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', paddingLeft: 'var(--space-8)', paddingRight: 'var(--space-8)' }}>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0' }} />
        </div>

        {/* Wide content */}
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', paddingLeft: 'var(--space-8)', paddingRight: 'var(--space-8)', paddingBottom: 'var(--space-9)' }}>

          {/* Portfolio accent header */}
          <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 'var(--space-4)', marginBottom: 'var(--space-5)', marginTop: 'var(--space-6)' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '4px' }}>{portfolio.name}</h2>
            {portfolio.tagline && (
              <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                {portfolio.tagline}
              </div>
            )}
          </div>

          {/* Stats bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1px', background: 'var(--border)', marginBottom: 'var(--space-6)' }}>
            {[
              { label: 'AUM',           value: `$${currentAUM.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,                                    color: 'var(--text-primary)' },
              { label: 'YTD Growth',    value: `${pnlPct >= 0 ? '+' : ''}${pnlPct.toFixed(2)}%`,                                                          color: pnlPct >= 0 ? 'var(--gain)' : 'var(--loss)' },
              { label: 'Total P&L',     value: `${totalPnL >= 0 ? '+' : ''}$${Math.abs(totalPnL).toLocaleString('en-US', { maximumFractionDigits: 0 })}`, color: totalPnL >= 0 ? 'var(--gain)' : 'var(--loss)' },
              { label: 'Target Return', value: portfolio.targetReturn,                                                                                      color: accent },
              { label: 'Strategy',      value: portfolio.strategy,                                                                                          color: 'var(--text-primary)' },
              { label: 'Inception',     value: portfolio.inception,                                                                                         color: 'var(--text-secondary)' },
              { label: 'Positions',     value: `${holdings.length}`,                                                                                       color: 'var(--text-primary)' },
            ].map(item => (
              <div key={item.label} style={{ background: 'var(--bg-raised)', padding: 'var(--space-4) var(--space-5)' }}>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>{item.label}</div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: item.color }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Overview</div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, maxWidth: '780px' }}>
              {portfolio.overview ?? portfolio.description}
            </p>
            {portfolio.targetReturnNote && (
              <div style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '4px', padding: 'var(--space-3) var(--space-4)', maxWidth: '480px' }}>
                ⚠ {portfolio.targetReturnNote}
              </div>
            )}
          </div>

          {/* Coverage + Strategy — side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', marginBottom: 'var(--space-6)' }}>
            {portfolio.coverage && portfolio.coverage.length > 0 && (
              <div>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Coverage</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {portfolio.coverage.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <span style={{ color: accent, flexShrink: 0, marginTop: '1px' }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {portfolio.strategyPoints && portfolio.strategyPoints.length > 0 && (
              <div>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Strategy</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {portfolio.strategyPoints.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <span style={{ color: accent, flexShrink: 0, marginTop: '1px' }}>—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Performance chart */}
          <div className="surface" style={{ padding: 'var(--space-5)', marginBottom: 'var(--space-6)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: '3px' }}>Performance</div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Portfolio vs. S&amp;P 500
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '20px', height: '2px', background: accent, display: 'inline-block', borderRadius: '2px' }} />
                  Portfolio
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '20px', height: '2px', background: 'var(--text-tertiary)', display: 'inline-block', borderRadius: '2px', opacity: 0.5 }} />
                  S&amp;P 500
                </span>
                <span style={{ fontSize: '10px', opacity: 0.5 }}>Filler data — live soon</span>
              </div>
            </div>
            <MiniChart data={perfData} accent={accent} />
          </div>

          <HoldingsTable holdings={holdings} />

          {/* The Team */}
          {portfolio.team && portfolio.team.length > 0 && (
            <div style={{ marginTop: 'var(--space-8)' }}>
              <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: 'var(--space-6)' }} />
              <div className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>The Team</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--space-3)' }}>
                {portfolio.team.map((member, i) => (
                  <div key={i} style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '6px', padding: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ width: '100%', aspectRatio: '1 / 1', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{member.name}</div>
                      <div style={{ fontSize: '10px', fontWeight: 600, color: accent, marginTop: '2px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{member.role}</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', marginTop: '4px', lineHeight: 1.5 }}>{member.bio}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
