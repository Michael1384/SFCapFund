'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Background from '@/components/Background';
import HoldingsTable from '@/components/HoldingsTable';
import { PORTFOLIOS, HOLDINGS, PORTFOLIO_PERFORMANCE } from '@/lib/data';
import { calcHoldingValue, calcHoldingCost, calcHoldingPnL } from '@/lib/types';
import type { PortfolioId, Holding, PerformancePoint } from '@/lib/types';

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

function MiniChart({ data, accent, isMobile }: { data: PerformancePoint[]; accent: string; isMobile?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const chartData = normalise(data);
  const chartHeight = isMobile ? 160 : 200;
  if (!mounted) return (
    <div style={{ height: chartHeight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Loading…</span>
    </div>
  );
  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <AreaChart data={chartData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id={`fill-${accent.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
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
          stroke={accent} strokeWidth={1.5} fill={`url(#fill-${accent.replace('#','')})`} dot={false}
          activeDot={{ r: 3, fill: accent, strokeWidth: 0 }} />
        <Area type="monotone" dataKey="sp500" name="S&P 500"
          stroke="var(--text-tertiary)" strokeWidth={1} fill="none" dot={false} strokeDasharray="3 4"
          activeDot={{ r: 3, fill: 'var(--text-secondary)', strokeWidth: 0 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function PortfoliosClient({ initialHoldings }: { initialHoldings: Holding[] }) {
  const [activeId, setActiveId] = useState<PortfolioId>('horizon-growth');
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const portfolio = PORTFOLIOS.find(p => p.id === activeId) ?? PORTFOLIOS[0];
  const holdings  = initialHoldings.filter(h => portfolio.holdingIds.includes(h.id));

  const totalCost  = holdings.reduce((sum, h) => sum + calcHoldingCost(h), 0);
  const totalPnL   = holdings.reduce((sum, h) => sum + calcHoldingPnL(h), 0);
  const pnlPct     = totalCost > 0 ? (totalPnL / totalCost) * 100 : 0;
  const currentAUM = portfolio.initialAUM * (1 + pnlPct / 100);

  const accent  = portfolio.accentColor ?? 'var(--accent-text)';
  const perfData = PORTFOLIO_PERFORMANCE[activeId] ?? [];

  return (
    <>
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '104px', overflowX: 'hidden' }}>
        <div className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 0 }}>

          {/* Page heading — stays at normal container width */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <div className="eyebrow" style={{ marginBottom: '6px', fontSize: isMobile ? '10px' : 'var(--text-sm)' }}>Fund Year 2026</div>
            <h1 style={{ fontSize: isMobile ? '22px' : 'var(--text-3xl)', fontWeight: 800, letterSpacing: '-0.025em' }}>Our Portfolios At A Glance</h1>
            <p style={{ fontSize: isMobile ? '12px' : 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-3)', lineHeight: 1.7 }}>
              Each portfolio is managed independently by a group including one portfolio manager and 5 analysts, allowing for diversification across styles, time horizons, and risk profiles.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', paddingLeft: 'var(--space-8)', paddingRight: 'var(--space-8)' }}>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0' }} />
        </div>

        {/* Wide section — tabs + all portfolio content */}
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', paddingLeft: isMobile ? '16px' : 'var(--space-8)', paddingRight: isMobile ? '16px' : 'var(--space-8)', paddingBottom: 'var(--space-9)' }}>

          {/* Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            borderBottom: isMobile ? 'none' : '1px solid var(--border)',
            marginBottom: 'var(--space-6)',
            gap: isMobile ? '4px' : 0,
          }}>
            {PORTFOLIOS.map(p => {
              const isActive = activeId === p.id;
              return (
                <button key={p.id} onClick={() => setActiveId(p.id)} style={{
                  padding: isMobile ? '8px 12px' : '10px 12px',
                  fontSize: isMobile ? '12px' : 'var(--text-lg)',
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: isMobile ? (isActive ? 'var(--bg-raised)' : 'none') : 'none',
                  borderTop: isMobile ? `1px solid ${isActive ? p.accentColor : 'var(--border)'}` : 'none',
                  borderLeft: isMobile ? `1px solid ${isActive ? p.accentColor : 'var(--border)'}` : 'none',
                  borderRight: isMobile ? `1px solid ${isActive ? p.accentColor : 'var(--border)'}` : 'none',
                  borderBottom: isMobile ? `1px solid ${isActive ? p.accentColor : 'var(--border)'}` : (isActive ? `3px solid ${p.accentColor}` : '3px solid transparent'),
                  borderRadius: isMobile ? '6px' : 0,
                  marginBottom: isMobile ? 0 : '-1px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  whiteSpace: isMobile ? 'normal' : 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'color var(--transition), border-color var(--transition)',
                }}>
                  {p.name}
                </button>
              );
            })}
          </div>

          {/* Portfolio header */}
          <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 'var(--space-4)', marginBottom: 'var(--space-5)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Link href={`/portfolios/${portfolio.id}`} style={{ textDecoration: 'none' }}>
              <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '4px', color: accent, borderBottom: `1px solid ${accent}55`, display: 'inline-block', paddingBottom: '1px' }}>{portfolio.name}</h2>
              {portfolio.tagline && (
                <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {portfolio.tagline}
                </div>
              )}
            </Link>
            <Link href={`/portfolios/${portfolio.id}`} style={{
              fontSize: 'var(--text-xs)', color: accent, fontWeight: 600,
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px',
              opacity: 0.85, whiteSpace: 'nowrap', marginTop: '2px',
            }}>
              View full page →
            </Link>
          </div>

          {/* Stats bar */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1px', background: 'var(--border)', marginBottom: 'var(--space-6)' }}>
            {[
              { label: 'AUM',           value: `$${currentAUM.toLocaleString('en-US', { maximumFractionDigits: 0 })}`, color: 'var(--text-primary)' },
              { label: 'YTD Growth',    value: `${pnlPct >= 0 ? '+' : ''}${pnlPct.toFixed(2)}%`,                       color: pnlPct >= 0 ? 'var(--gain)' : 'var(--loss)' },
              { label: 'Total P&L',     value: `${totalPnL >= 0 ? '+' : ''}$${Math.abs(totalPnL).toLocaleString('en-US', { maximumFractionDigits: 0 })}`, color: totalPnL >= 0 ? 'var(--gain)' : 'var(--loss)' },
              { label: 'Target Return', value: portfolio.targetReturn,                                                   color: accent },
              { label: 'Strategy',      value: portfolio.strategy,                                                       color: 'var(--text-primary)' },
              { label: 'Inception',     value: portfolio.inception,                                                      color: 'var(--text-secondary)' },
              { label: 'Positions',     value: `${holdings.length}`,                                                    color: 'var(--text-primary)' },
            ].map(item => (
              <div key={item.label} style={{ background: 'var(--bg-raised)', padding: isMobile ? 'var(--space-3)' : 'var(--space-4) var(--space-5)' }}>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-2)', fontSize: isMobile ? '9px' : undefined }}>{item.label}</div>
                <div style={{ fontSize: isMobile ? '13px' : 'var(--text-base)', fontWeight: 600, color: item.color }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Overview — full width */}
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
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 'var(--space-5)', marginBottom: 'var(--space-6)' }}>
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

          {/* Mini performance chart */}
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
            <MiniChart data={perfData} accent={accent} isMobile={isMobile} />
          </div>

          <HoldingsTable holdings={holdings} />
        </div>
      </main>
    </>
  );
}

export default function PortfoliosPage() {
  return (
    <>
      <Background />
      <PortfoliosClient initialHoldings={HOLDINGS} />
    </>
  );
}
