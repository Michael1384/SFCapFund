'use client';

import React, { useState, useEffect } from 'react';
import Background from '@/components/Background';
import PerformanceChart from '@/components/PerformanceChart';
import { PERFORMANCE_DATA } from '@/lib/data';
import type { PortfolioId } from '@/lib/types';

// ── Types ─────────────────────────────────────────────────────────────────────
type TradeAction = 'BUY' | 'SELL';

interface Trade {
  id: string;
  date: string;            // 'YYYY-MM-DD'
  ticker: string;
  name: string;
  action: TradeAction;
  shares: number;
  price: number;
  currency: string;
  portfolio: PortfolioId;
  rationale?: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
// Populate with real trades as they are executed.
// See .github/DATA_STRUCTURE.md for full field descriptions.
const LATEST_TRADES: Trade[] = [];

const PORTFOLIO_LABELS: Record<PortfolioId, { label: string; color: string }> = {
  'horizon-growth': { label: 'Horizon Growth', color: '#3b82f6' },
  'macro':          { label: 'Macro',           color: '#f59e0b' },
  'quant':          { label: 'Quant',           color: '#a855f7' },
};

const METRICS = [
  { label: 'Total Return',  value: '—', color: 'var(--text-secondary)',  sub: 'Data coming soon' },
  { label: 'vs S&P 500',    value: '—', color: 'var(--text-secondary)',  sub: 'Data coming soon' },
  { label: 'Sharpe Ratio',  value: '—', color: 'var(--text-secondary)',  sub: 'Data coming soon' },
  { label: 'Max Drawdown',  value: '—', color: 'var(--text-secondary)',  sub: 'Data coming soon' },
  { label: 'Win Rate',      value: '—', color: 'var(--text-secondary)',  sub: 'Data coming soon' },
  { label: 'Volatility',    value: '—', color: 'var(--text-secondary)',  sub: 'Data coming soon' },
];

// ── Trade accordion item ──────────────────────────────────────────────────────
function TradeRow({ trade }: { trade: Trade }) {
  const [open, setOpen] = useState(false);
  const port = PORTFOLIO_LABELS[trade.portfolio];
  const isBuy = trade.action === 'BUY';

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      {/* Header row — always visible */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '14px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textAlign: 'left',
        }}
      >
        {/* Action badge */}
        <span style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          padding: '2px 7px',
          borderRadius: '4px',
          background: isBuy ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)',
          color: isBuy ? 'var(--gain)' : 'var(--loss)',
          flexShrink: 0,
        }}>
          {trade.action}
        </span>

        {/* Ticker + name */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
            {trade.ticker}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginLeft: '6px' }}>
            {trade.name}
          </span>
        </div>

        {/* Date */}
        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', flexShrink: 0 }}>
          {trade.date}
        </span>

        {/* Chevron */}
        <span style={{
          fontSize: '10px',
          color: 'var(--text-tertiary)',
          flexShrink: 0,
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease',
        }}>▼</span>
      </button>

      {/* Expanded detail */}
      {open && (
        <div style={{
          paddingBottom: '14px',
          paddingLeft: '4px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          {/* Stats row */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '9px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Shares</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>{trade.shares.toLocaleString()}</div>
            </div>
            <div>
              <div style={{ fontSize: '9px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Price</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
                {trade.currency} {trade.price.toFixed(2)}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '9px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Notional</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
                {trade.currency} {(trade.shares * trade.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '9px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Portfolio</div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: port.color }}>{port.label}</div>
            </div>
          </div>

          {/* Rationale */}
          {trade.rationale && (
            <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, borderLeft: '2px solid var(--border-strong)', paddingLeft: '10px' }}>
              {trade.rationale}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PerformancePage() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <Background />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '104px', overflowX: 'hidden' }}>
        <div className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 'var(--space-9)', maxWidth: '90%' }}>

          {/* Page heading */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <div className="eyebrow" style={{ marginBottom: '6px', fontSize: isMobile ? '10px' : 'var(--text-sm)' }}>Analytics · Fund Year 2026</div>
            <h1 style={{ fontSize: isMobile ? '22px' : 'var(--text-3xl)', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--text-primary)' }}>Performance</h1>
          </div>

          {/* Two-column layout: left 65% / right 35% */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '65fr 35fr',
            gap: isMobile ? 'var(--space-5)' : 'var(--space-6)',
            alignItems: 'start',
          }}>

            {/* ── LEFT COLUMN — main content ─────────────────────────────── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>

              {/* Metrics grid */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
                {METRICS.map(m => (
                  <div key={m.label} style={{ background: 'var(--bg-raised)', padding: isMobile ? 'var(--space-2)' : 'var(--space-4)' }}>
                    <div className="eyebrow" style={{ marginBottom: 'var(--space-1)', fontSize: isMobile ? '9px' : '10px' }}>{m.label}</div>
                    <div className="metric-value" style={{ color: m.color, fontSize: isMobile ? '18px' : '22px' }}>{m.value}</div>
                    <div style={{ fontSize: isMobile ? '9px' : '11px', color: 'var(--text-tertiary)', marginTop: 'var(--space-1)' }}>{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <PerformanceChart data={PERFORMANCE_DATA} />

              {/* Monthly Returns */}
              <div className="surface" style={{ padding: isMobile ? 'var(--space-3)' : 'var(--space-5)' }}>
                <div className="eyebrow" style={{ marginBottom: '4px', fontSize: isMobile ? '9px' : '10px' }}>Breakdown</div>
                <div style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: isMobile ? 'var(--space-3)' : 'var(--space-4)' }}>
                  Monthly Returns
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', minHeight: '120px', opacity: 0.5 }}>
                  <div style={{ fontSize: '24px' }}>📊</div>
                  <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '11px' : '12px', margin: 0, textAlign: 'center' }}>
                    Monthly return data will appear here once the fund is live.
                  </p>
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN — Latest Trades ───────────────────────────── */}
            <div>
              <div style={{
                background: 'var(--bg-raised)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}>
                {/* Panel header */}
                <div style={{
                  padding: 'var(--space-4) var(--space-5)',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: '4px', fontSize: '9px' }}>Activity</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                      Our Latest Trades
                    </div>
                  </div>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    padding: '3px 8px',
                    borderRadius: '20px',
                    background: 'var(--border)',
                    color: 'var(--text-tertiary)',
                  }}>
                    {LATEST_TRADES.length} trades
                  </span>
                </div>

                {/* Trade list — tall scrollable area */}
                <div style={{ padding: '0 var(--space-5)', minHeight: '520px', maxHeight: '680px', overflowY: 'auto' }}>
                  {LATEST_TRADES.length === 0 ? (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--space-3)',
                      minHeight: '520px',
                      opacity: 0.45,
                    }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-tertiary)' }}>
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', margin: 0, textAlign: 'center', lineHeight: 1.5 }}>
                        No trades yet.<br />Positions will appear here once the fund opens.
                      </p>
                    </div>
                  ) : (
                    LATEST_TRADES.map(trade => (
                      <TradeRow key={trade.id} trade={trade} />
                    ))
                  )}
                </div>

                {/* Footer note */}
                <div style={{
                  padding: 'var(--space-3) var(--space-5)',
                  borderTop: LATEST_TRADES.length > 0 ? '1px solid var(--border)' : 'none',
                }}>
                  <p style={{ margin: 0, fontSize: '10px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
                    Trades are recorded at execution price. All figures in the asset&apos;s native currency.
                  </p>
                </div>
              </div>
            </div>

          </div>{/* end two-column grid */}
        </div>
      </main>
    </>
  );
}
