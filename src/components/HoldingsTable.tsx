'use client';

import React, { useState } from 'react';
import { HOLDINGS } from '@/lib/data';
import type { Holding } from '@/lib/types';
import {
  calcHoldingValue, calcHoldingCost, calcHoldingPnL,
  calcHoldingPnLPercent, calcDayChange, calcDayChangePercent,
} from '@/lib/types';

type SortKey = 'ticker' | 'value' | 'pnlPct' | 'dayPct' | 'weight';

interface HoldingsTableProps {
  holdings?: Holding[];
  holdingIds?: string[];
}

const ASSET_CLASS_COLORS: Record<string, { text: string; bg: string }> = {
  equity:    { text: '#60a5fa', bg: 'rgba(59,130,246,0.10)' },
  commodity: { text: '#fbbf24', bg: 'rgba(251,191,36,0.10)' },
  etf:       { text: '#a78bfa', bg: 'rgba(167,139,250,0.10)' },
  crypto:    { text: 'var(--gain)', bg: 'var(--gain-dim)' },
  bond:      { text: '#818cf8', bg: 'rgba(79,70,229,0.10)' },
  cash:      { text: 'var(--text-secondary)', bg: 'rgba(255,255,255,0.05)' },
};

export default function HoldingsTable({ holdings: propHoldings, holdingIds }: HoldingsTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('value');
  const [sortAsc, setSortAsc] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const source: Holding[] = propHoldings
    ?? (holdingIds ? HOLDINGS.filter(h => holdingIds.includes(h.id)) : HOLDINGS);

  const totalValue = source.reduce((sum, h) => sum + calcHoldingValue(h), 0);

  const sorted = [...source].sort((a, b) => {
    let av = 0, bv = 0;
    if (sortKey === 'ticker')  return sortAsc ? a.ticker.localeCompare(b.ticker) : b.ticker.localeCompare(a.ticker);
    if (sortKey === 'value')   { av = calcHoldingValue(a);       bv = calcHoldingValue(b); }
    if (sortKey === 'pnlPct')  { av = calcHoldingPnLPercent(a);  bv = calcHoldingPnLPercent(b); }
    if (sortKey === 'dayPct')  { av = calcDayChangePercent(a);   bv = calcDayChangePercent(b); }
    if (sortKey === 'weight')  { av = calcHoldingValue(a) / totalValue; bv = calcHoldingValue(b) / totalValue; }
    return sortAsc ? av - bv : bv - av;
  });

  function SortTh({ label, k, right }: { label: string; k: SortKey; right?: boolean }) {
    const active = sortKey === k;
    return (
      <th
        className={right ? 'right' : ''}
        onClick={() => { if (sortKey === k) setSortAsc(a => !a); else { setSortKey(k); setSortAsc(false); } }}
        style={{ cursor: 'pointer', userSelect: 'none', paddingLeft: right ? 0 : undefined }}
      >
        <span style={{ color: active ? 'var(--text-primary)' : undefined }}>
          {label}{active ? (sortAsc ? ' ↑' : ' ↓') : ''}
        </span>
      </th>
    );
  }

  return (
    <div className="surface" style={{ overflow: 'hidden' }}>
      {/* Table header */}
      <div style={{ padding: 'var(--space-5) var(--space-6)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: '2px' }}>Holdings</div>
          <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>Portfolio Positions</div>
        </div>
        <span className="eyebrow">{source.length} positions</span>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="data-table" style={{ minWidth: '680px' }}>
          <thead>
            <tr>
              <SortTh label="Ticker" k="ticker" />
              <th>Name</th>
              <SortTh label="Value" k="value" right />
              <SortTh label="Total P&L" k="pnlPct" right />
              <SortTh label="Day" k="dayPct" right />
              <SortTh label="Weight" k="weight" right />
            </tr>
          </thead>
          <tbody>
            {sorted.map(h => {
              const value    = calcHoldingValue(h);
              const pnl      = calcHoldingPnL(h);
              const pnlPct   = calcHoldingPnLPercent(h);
              const day      = calcDayChange(h);
              const dayPct   = calcDayChangePercent(h);
              const weight   = (value / totalValue) * 100;
              const isOpen   = expandedId === h.id;
              const cls      = ASSET_CLASS_COLORS[h.assetClass] ?? ASSET_CLASS_COLORS.cash;

              return (
                <React.Fragment key={h.id}>
                  <tr
                    onClick={() => setExpandedId(isOpen ? null : h.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          fontSize: '10px',
                          color: isOpen ? 'var(--accent-text)' : 'var(--text-tertiary)',
                          transition: 'color var(--transition)',
                        }}>▶</span>
                        <span style={{
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-primary)',
                          letterSpacing: '0.04em',
                        }}>{h.ticker}</span>
                        <span style={{
                          fontSize: 10, fontWeight: 600,
                          padding: '1px 5px', borderRadius: 'var(--radius-sm)',
                          color: cls.text, background: cls.bg,
                          textTransform: 'uppercase', letterSpacing: '0.06em',
                        }}>{h.assetClass}</span>
                      </div>
                    </td>
                    <td style={{ color: 'var(--text-secondary)', maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {h.name}
                    </td>
                    <td className="right tabular-nums">
                      <div style={{ fontWeight: 600 }}>${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                        {h.shares} × ${h.currentPrice.toFixed(2)}
                      </div>
                    </td>
                    <td className="right tabular-nums">
                      <span style={{ fontWeight: 600, color: pnlPct >= 0 ? 'var(--gain)' : 'var(--loss)' }}>
                        {pnlPct >= 0 ? '+' : ''}{pnlPct.toFixed(2)}%
                      </span>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                        {pnl >= 0 ? '+' : ''}${pnl.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </div>
                    </td>
                    <td className="right tabular-nums" style={{ color: dayPct >= 0 ? 'var(--gain)' : 'var(--loss)', fontWeight: 500 }}>
                      {dayPct >= 0 ? '+' : ''}{dayPct.toFixed(2)}%
                    </td>
                    <td className="right">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                        <div style={{ width: '48px', height: '2px', background: 'var(--border-strong)', borderRadius: '1px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${Math.min(weight * 2, 100)}%`, background: 'var(--accent)', borderRadius: '1px' }} />
                        </div>
                        <span className="tabular-nums" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', minWidth: '32px' }}>
                          {weight.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                  </tr>

                  {isOpen && (
                    <tr style={{ background: 'var(--bg-subtle)' }}>
                      <td colSpan={6} style={{ padding: 'var(--space-4) var(--space-6) var(--space-5)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 'var(--space-5)', marginBottom: h.thesis ? 'var(--space-4)' : 0 }}>
                          {[
                            { label: 'Avg. Cost',  value: `$${h.avgCost.toFixed(2)}` },
                            { label: 'Current',    value: `$${h.currentPrice.toFixed(2)}` },
                            { label: 'Sector',     value: h.sector ?? '—' },
                            { label: 'Currency',   value: h.currency },
                            { label: 'Added',      value: h.addedDate },
                          ].map(d => (
                            <div key={d.label}>
                              <div className="eyebrow" style={{ marginBottom: '3px' }}>{d.label}</div>
                              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{d.value}</div>
                            </div>
                          ))}
                        </div>
                        {h.thesis && (
                          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, borderTop: '1px solid var(--border)', paddingTop: 'var(--space-4)' }}>
                            <span style={{ color: 'var(--text-tertiary)', marginRight: '8px', fontWeight: 600, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Thesis</span>
                            {h.thesis}
                          </div>
                        )}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
