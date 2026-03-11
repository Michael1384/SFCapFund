'use client';

import React, { useState, useEffect } from 'react';
import Background from '@/components/Background';
import PerformanceChart from '@/components/PerformanceChart';
import { PERFORMANCE_DATA } from '@/lib/data';
import type { PortfolioId } from '@/lib/types';
import Link from 'next/link';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, BarChart, Bar,
} from 'recharts';

// ── Types ─────────────────────────────────────────────────────────────────────
type TradeAction = 'BUY' | 'SELL';
interface Trade {
  id: string; date: string; ticker: string; name: string; action: TradeAction;
  shares: number; price: number; currency: string; portfolio: PortfolioId; rationale?: string;
}

// ── 2026 data ─────────────────────────────────────────────────────────────────
const LATEST_TRADES_2026: Trade[] = [];

const PORTFOLIO_LABELS: Record<PortfolioId, { label: string; color: string }> = {
  'horizon-growth': { label: 'Horizon Growth', color: '#3b82f6' },
  'macro':          { label: 'Macro',           color: '#f59e0b' },
  'quant':          { label: 'Quant',           color: '#a855f7' },
};

const METRICS_2026 = [
  { label: 'Total Return',  value: '—', color: 'var(--text-secondary)', sub: 'Data coming soon' },
  { label: 'vs S&P 500',    value: '—', color: 'var(--text-secondary)', sub: 'Data coming soon' },
  { label: 'Sharpe Ratio',  value: '—', color: 'var(--text-secondary)', sub: 'Data coming soon' },
  { label: 'Max Drawdown',  value: '—', color: 'var(--text-secondary)', sub: 'Data coming soon' },
  { label: 'Win Rate',      value: '—', color: 'var(--text-secondary)', sub: 'Data coming soon' },
  { label: 'Volatility',    value: '—', color: 'var(--text-secondary)', sub: 'Data coming soon' },
];

// ── 2025 performance data ─────────────────────────────────────────────────────
const MONTHS_25 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const QSTODIA_CUM_25 = [4.752911241,6.038959518,7.29900142,10.19468497,11.62678286,18.64102701,18.99475592,18.61479575,19.54935781,20.77407349,21.44154836,27.52178455];
const VERSOFY_CUM_25 = [2.78,3.46,5.79,6.57,9.73,13.59,15.94,17.17,23.5,26.45,27.95,26.9];
const SP500_CUM_25   = [2.70,1.24,-4.58,-5.30,0.52,5.50,7.79,9.85,13.73,16.31,16.46,16.41];

function cumToMom(cum: number[]): number[] {
  return cum.map((v, i) => i === 0 ? parseFloat(v.toFixed(3)) : parseFloat((v - cum[i - 1]).toFixed(3)));
}

const AGGREGATE_CUM_25 = MONTHS_25.map((_, i) => parseFloat(((QSTODIA_CUM_25[i] + VERSOFY_CUM_25[i]) / 2).toFixed(3)));
const AGGREGATE_MOM_25 = cumToMom(AGGREGATE_CUM_25);
const QSTODIA_MOM_25   = cumToMom(QSTODIA_CUM_25);
const VERSOFY_MOM_25   = cumToMom(VERSOFY_CUM_25);

const qFinal25    = QSTODIA_CUM_25[QSTODIA_CUM_25.length - 1];
const vFinal25    = VERSOFY_CUM_25[VERSOFY_CUM_25.length - 1];
const aggFinal25  = (qFinal25 + vFinal25) / 2;
const sp500Final25 = SP500_CUM_25[SP500_CUM_25.length - 1];

const overallChartData25 = MONTHS_25.map((m, i) => ({
  month: m, aggregate: parseFloat(AGGREGATE_CUM_25[i].toFixed(2)), sp500: parseFloat(SP500_CUM_25[i].toFixed(2)),
}));
const qstodiaChartData25 = MONTHS_25.map((m, i) => ({
  month: m, qstodia: parseFloat(QSTODIA_CUM_25[i].toFixed(2)), sp500: parseFloat(SP500_CUM_25[i].toFixed(2)),
}));
const versofyChartData25 = MONTHS_25.map((m, i) => ({
  month: m, versofy: parseFloat(VERSOFY_CUM_25[i].toFixed(2)), sp500: parseFloat(SP500_CUM_25[i].toFixed(2)),
}));

const METRICS_2025_OVERALL = [
  { label: 'Combined Return',  value: `+${aggFinal25.toFixed(2)}%`,         color: 'var(--gain)',          sub: 'Avg of both funds' },
  { label: 'vs S&P 500',       value: `+${(aggFinal25 - sp500Final25).toFixed(2)}% α`, color: 'var(--gain)', sub: `S&P: +${sp500Final25.toFixed(2)}%` },
  { label: 'Funds Active',     value: '2',                                   color: 'var(--text-primary)',  sub: 'Qstodia · White Fox' },
  { label: 'Qstodia Return',   value: `+${qFinal25.toFixed(2)}%`,           color: '#a855f7',              sub: 'Cumulative YTD' },
  { label: 'White Fox Return', value: `+${vFinal25.toFixed(2)}%`,           color: '#f59e0b',              sub: 'Cumulative YTD' },
  { label: 'Status',           value: 'Concluded',                           color: 'var(--text-tertiary)', sub: 'Fund year closed' },
];

const FUNDS_2025 = [
  {
    id: 'qstodia', name: 'Qstodia', subtitle: 'Quantitative & Liquid Capital',
    strategy: 'Quantitative', accentColor: '#a855f7', targetReturn: '25-40%',
    finalReturn: qFinal25, cumData: QSTODIA_CUM_25, momData: QSTODIA_MOM_25,
    chartData: qstodiaChartData25, chartKey: 'qstodia',
    keyFacts: ['Fully rules-based entry and exit signals','Strict liquidity requirements on all positions','Global equities, ETFs, forex (G10)'],
  },
  {
    id: 'white-fox', name: 'Versofy / White Fox', subtitle: 'Alternative Investments & Macro Research',
    strategy: 'Global Macro', accentColor: '#f59e0b', targetReturn: '10-20%',
    finalReturn: vFinal25, cumData: VERSOFY_CUM_25, momData: VERSOFY_MOM_25,
    chartData: versofyChartData25, chartKey: 'versofy',
    keyFacts: ['Top-down macroeconomic research framework','Asymmetric risk/reward positioning','Commodities, bonds, EM currencies'],
  },
];

// ── Qstodia 2025 risk & allocation data ──────────────────────────────────────
const QSTODIA_RISK = [
  { measure: 'Sharpe Ratio',       qstodia: '1.428',  spx: '1.339',  better: true  },
  { measure: 'Sortino Ratio',      qstodia: '3.166',  spx: '2.515',  better: true  },
  { measure: 'Max Drawdown',       qstodia: '3.54%',  spx: '7.50%',  better: true  },
  { measure: 'Standard Deviation', qstodia: '2.20%',  spx: '3.02%',  better: true  },
  { measure: 'Downside Deviation', qstodia: '0.99%',  spx: '1.61%',  better: true  },
  { measure: 'Beta',               qstodia: '0.418',  spx: '1.000',  better: true  },
  { measure: 'Positive Periods',   qstodia: '14 / 19 (73.7%)', spx: '13 / 19 (68.4%)', better: true },
  { measure: 'Negative Periods',   qstodia: '5 / 19 (26.3%)',  spx: '6 / 19 (31.6%)',  better: true },
  { measure: 'Recovery',           qstodia: '1 Month',  spx: '2 Months',  better: true },
];

const QSTODIA_ALLOC = [
  { month: 'Jan', equities: 63.6,  fi: 33.7, cash: 2.7,  nav: 160433 },
  { month: 'Feb', equities: 56.0,  fi: 38.4, cash: 5.6,  nav: 169166 },
  { month: 'Mar', equities: 54.9,  fi: 39.5, cash: 5.6,  nav: 168971 },
  { month: 'Apr', equities: 56.5,  fi: 40.5, cash: 3.0,  nav: 218259 },
  { month: 'May', equities: 58.4,  fi: 39.5, cash: 2.1,  nav: 248402 },
  { month: 'Jun', equities: 60.4,  fi: 38.4, cash: 1.2,  nav: 282028 },
  { month: 'Jul', equities: 52.5,  fi: 41.9, cash: 5.5,  nav: 261668 },
  { month: 'Aug', equities: 60.1,  fi: 37.8, cash: 2.1,  nav: 357452 },
  { month: 'Sep', equities: 53.5,  fi: 42.5, cash: 3.9,  nav: 318465 },
  { month: 'Oct', equities: 51.9,  fi: 43.7, cash: 4.3,  nav: 313520 },
  { month: 'Nov', equities: 55.1,  fi: 41.4, cash: 3.5,  nav: 332803 },
  { month: 'Dec', equities: 45.1,  fi: 41.4, cash: 13.5, nav: 332473 },
];

// ── Shared chart ──────────────────────────────────────────────────────────────
interface PerfChartProps {
  data: { month: string; sp500: number; [key: string]: string | number }[];
  fundKey: string; fundColor: string; fundLabel: string; height?: number;
}
function PerfChart({ data, fundKey, fundColor, fundLabel, height = 260 }: PerfChartProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Loading...</span></div>;
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
        <CartesianGrid strokeDasharray="2 4" stroke="rgba(255,255,255,0.06)" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} tickLine={false} axisLine={false}
          tickFormatter={(v: number) => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`} width={54} />
        <Tooltip
          contentStyle={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px' }}
          labelStyle={{ color: 'var(--text-tertiary)', marginBottom: '4px', fontWeight: 600 }}
          formatter={(val: number, name: string) => [`${val >= 0 ? '+' : ''}${val.toFixed(2)}%`, name]}
        />
        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }}
          formatter={(value: string) => <span style={{ color: 'var(--text-secondary)' }}>{value}</span>} />
        <Line type="monotone" dataKey={fundKey} name={fundLabel} stroke={fundColor} strokeWidth={2.5}
          dot={{ r: 3, fill: fundColor, strokeWidth: 0 }} activeDot={{ r: 5, fill: fundColor, strokeWidth: 0 }} />
        <Line type="monotone" dataKey="sp500" name="S&P 500" stroke="rgba(255,255,255,0.35)"
          strokeWidth={1.5} strokeDasharray="4 3" dot={false}
          activeDot={{ r: 4, fill: 'rgba(255,255,255,0.5)', strokeWidth: 0 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

// ── Monthly table ─────────────────────────────────────────────────────────────
function MonthlyTable25({ cumData, momData, accentColor }: { cumData: number[]; momData: number[]; accentColor: string }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
        <thead>
          <tr>
            {['Month','Monthly','Cum. YTD','S&P 500'].map(h => (
              <th key={h} style={{ padding: '7px 10px', textAlign: 'left', fontWeight: 600, color: 'var(--text-tertiary)',
                fontSize: '9px', letterSpacing: '0.06em', textTransform: 'uppercase',
                borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MONTHS_25.map((m, i) => {
            const mom = momData[i]; const cum = cumData[i]; const sp = SP500_CUM_25[i];
            return (
              <tr key={m} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '8px 10px', color: 'var(--text-secondary)', fontWeight: 600 }}>{m}</td>
                <td style={{ padding: '8px 10px', color: mom >= 0 ? 'var(--gain)' : 'var(--loss)', fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {mom >= 0 ? '+' : ''}{mom.toFixed(2)}%</td>
                <td style={{ padding: '8px 10px', color: cum >= 0 ? accentColor : 'var(--loss)', fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {cum >= 0 ? '+' : ''}{cum.toFixed(2)}%</td>
                <td style={{ padding: '8px 10px', color: sp >= 0 ? 'rgba(255,255,255,0.4)' : 'var(--loss)', whiteSpace: 'nowrap' }}>
                  {sp >= 0 ? '+' : ''}{sp.toFixed(2)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Trade row ─────────────────────────────────────────────────────────────────
function TradeRow({ trade }: { trade: Trade }) {
  const [open, setOpen] = useState(false);
  const port = PORTFOLIO_LABELS[trade.portfolio];
  const isBuy = trade.action === 'BUY';
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 0', display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', padding: '2px 7px', borderRadius: '4px', flexShrink: 0, background: isBuy ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)', color: isBuy ? 'var(--gain)' : 'var(--loss)' }}>{trade.action}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>{trade.ticker}</span>
          <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginLeft: '6px' }}>{trade.name}</span>
        </div>
        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', flexShrink: 0 }}>{trade.date}</span>
        <span style={{ fontSize: '10px', color: 'var(--text-tertiary)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>▼</span>
      </button>
      {open && (
        <div style={{ paddingBottom: '14px', paddingLeft: '4px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[{ label: 'Shares', val: trade.shares.toLocaleString() }, { label: 'Price', val: `${trade.currency} ${trade.price.toFixed(2)}` }, { label: 'Notional', val: `${trade.currency} ${(trade.shares * trade.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` }].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '9px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{s.label}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>{s.val}</div>
              </div>
            ))}
            <div>
              <div style={{ fontSize: '9px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Portfolio</div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: port.color }}>{port.label}</div>
            </div>
          </div>
          {trade.rationale && <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, borderLeft: '2px solid var(--border-strong)', paddingLeft: '10px' }}>{trade.rationale}</p>}
        </div>
      )}
    </div>
  );
}

function TradesPanel({ trades, label }: { trades: Trade[]; label: string }) {
  return (
    <div style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
      <div style={{ padding: 'var(--space-4) var(--space-5)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: '4px', fontSize: '9px' }}>Activity</div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{label}</div>
        </div>
        <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em', padding: '3px 8px', borderRadius: '20px', background: 'var(--border)', color: 'var(--text-tertiary)' }}>{trades.length} trades</span>
      </div>
      <div style={{ padding: '0 var(--space-5)', minHeight: '480px', maxHeight: '640px', overflowY: 'auto' }}>
        {trades.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', minHeight: '480px', opacity: 0.45 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-tertiary)' }}>
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', margin: 0, textAlign: 'center', lineHeight: 1.5 }}>No trades recorded.<br />Positions will appear here.</p>
          </div>
        ) : trades.map(t => <TradeRow key={t.id} trade={t} />)}
      </div>
      <div style={{ padding: 'var(--space-3) var(--space-5)', borderTop: trades.length > 0 ? '1px solid var(--border)' : 'none' }}>
        <p style={{ margin: 0, fontSize: '10px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>Trades recorded at execution price. All figures in the asset&apos;s native currency.</p>
      </div>
    </div>
  );
}

// ── 2026 view ─────────────────────────────────────────────────────────────────
function Year2026View({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <div style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.07) 0%, var(--bg-raised) 60%)', border: '1px solid var(--border)', borderLeft: '4px solid #3b82f6', borderRadius: '10px', padding: isMobile ? 'var(--space-5)' : 'var(--space-5) var(--space-7)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
        <div>
          <div className="eyebrow" style={{ fontSize: '10px', marginBottom: '6px', color: '#3b82f6', letterSpacing: '0.1em' }}>SF Capital · 2026</div>
          <div style={{ fontSize: isMobile ? '20px' : '26px', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '6px' }}>Overall Fund Performance</div>
          <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontWeight: 500 }}>Horizon Growth · Macro · Quant · active fund year</div>
        </div>
        <span style={{ fontSize: '12px', fontWeight: 700, padding: '6px 14px', borderRadius: '20px', background: 'rgba(16,185,129,0.12)', color: 'var(--gain)', letterSpacing: '0.04em', border: '1px solid rgba(16,185,129,0.2)' }}>● Active</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '65fr 35fr', gap: isMobile ? 'var(--space-5)' : 'var(--space-6)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
            {METRICS_2026.map(m => (
              <div key={m.label} style={{ background: 'var(--bg-raised)', padding: isMobile ? 'var(--space-2)' : 'var(--space-4)' }}>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-1)', fontSize: isMobile ? '9px' : '10px' }}>{m.label}</div>
                <div className="metric-value" style={{ color: m.color, fontSize: isMobile ? '18px' : '22px' }}>{m.value}</div>
                <div style={{ fontSize: isMobile ? '9px' : '11px', color: 'var(--text-tertiary)', marginTop: 'var(--space-1)' }}>{m.sub}</div>
              </div>
            ))}
          </div>
          <PerformanceChart data={PERFORMANCE_DATA} />
          <div className="surface" style={{ padding: isMobile ? 'var(--space-3)' : 'var(--space-5)' }}>
            <div className="eyebrow" style={{ marginBottom: '4px', fontSize: isMobile ? '9px' : '10px' }}>Breakdown</div>
            <div style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: isMobile ? 'var(--space-3)' : 'var(--space-4)' }}>Monthly Returns</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', minHeight: '120px', opacity: 0.5 }}>
              <div style={{ fontSize: '24px' }}>📊</div>
              <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '11px' : '12px', margin: 0, textAlign: 'center' }}>Monthly return data will appear here once the fund is live.</p>
            </div>
          </div>
        </div>
        <TradesPanel trades={LATEST_TRADES_2026} label="Latest Trades" />
      </div>
    </div>
  );
}

// ── Qstodia allocation stacked bar chart ─────────────────────────────────────
function QstodiaAllocChart({ isMobile }: { isMobile: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div style={{ height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Loading...</span></div>;
  return (
    <ResponsiveContainer width="100%" height={isMobile ? 220 : 280}>
      <BarChart data={QSTODIA_ALLOC} margin={{ top: 4, right: 8, bottom: 0, left: 0 }} barCategoryGap="20%">
        <CartesianGrid strokeDasharray="2 4" stroke="rgba(255,255,255,0.06)" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} tickLine={false} axisLine={false}
          tickFormatter={(v: number) => `${v}%`} width={38} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
        <Tooltip
          contentStyle={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px' }}
          labelStyle={{ color: 'var(--text-tertiary)', marginBottom: '4px', fontWeight: 600 }}
          formatter={(val: number, name: string) => [`${val.toFixed(1)}%`, name]}
        />
        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }}
          formatter={(value: string) => <span style={{ color: 'var(--text-secondary)' }}>{value}</span>} />
        <Bar dataKey="equities" name="Equities"     stackId="a" fill="#60a5fa" radius={[0,0,0,0]} />
        <Bar dataKey="fi"       name="Fixed Income" stackId="a" fill="#34d399" radius={[0,0,0,0]} />
        <Bar dataKey="cash"     name="Cash"         stackId="a" fill="rgba(255,255,255,0.18)" radius={[3,3,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

// ── 2025 view ─────────────────────────────────────────────────────────────────
function Year2025View({ isMobile }: { isMobile: boolean }) {
  const [activeId, setActiveId] = useState<string>(FUNDS_2025[0].id);
  const fund = FUNDS_2025.find(f => f.id === activeId) ?? FUNDS_2025[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>

      {/* Overall banner */}
      <div style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.07) 0%, var(--bg-raised) 60%)', border: '1px solid var(--border)', borderLeft: '4px solid #f59e0b', borderRadius: '10px', padding: isMobile ? 'var(--space-5)' : 'var(--space-5) var(--space-7)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
        <div>
          <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '6px', color: '#f59e0b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>SF Capital · 2025</div>
          <div style={{ fontSize: isMobile ? '20px' : '26px', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '6px' }}>Overall Fund Performance</div>
          <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontWeight: 500 }}>Qstodia (Quantitative) and Versofy / White Fox (Global Macro) · two mandates, concluded Dec 2025</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, padding: '6px 14px', borderRadius: '20px', background: 'rgba(255,255,255,0.06)', color: 'var(--text-tertiary)', letterSpacing: '0.04em', border: '1px solid var(--border)' }}>Concluded</span>
          <Link href="/performance/2025" style={{ fontSize: '12px', fontWeight: 600, padding: '6px 14px', borderRadius: '20px', background: 'rgba(245,158,11,0.1)', color: '#f59e0b', textDecoration: 'none', letterSpacing: '0.02em', border: '1px solid rgba(245,158,11,0.25)' }}>Full details</Link>
        </div>
      </div>

      {/* Overall metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
        {METRICS_2025_OVERALL.map(m => (
          <div key={m.label} style={{ background: 'var(--bg-raised)', padding: isMobile ? 'var(--space-2)' : 'var(--space-4)' }}>
            <div className="eyebrow" style={{ marginBottom: 'var(--space-1)', fontSize: isMobile ? '9px' : '10px' }}>{m.label}</div>
            <div className="metric-value" style={{ color: m.color, fontSize: isMobile ? '18px' : '22px' }}>{m.value}</div>
            <div style={{ fontSize: isMobile ? '9px' : '11px', color: 'var(--text-tertiary)', marginTop: 'var(--space-1)' }}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Combined chart + monthly table side by side */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', gap: isMobile ? 'var(--space-5)' : 'var(--space-5)', alignItems: 'start' }}>
        {/* Chart */}
        <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-5)' }}>
          <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: '#f59e0b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>SF Capital · 2025</div>
          <div style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: 'var(--space-1)' }}>Combined Performance vs S&P 500</div>
          <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>Equal-weight avg · Cumulative YTD</div>
          <PerfChart data={overallChartData25} fundKey="aggregate" fundColor="#f59e0b" fundLabel="SF Capital (avg)" height={isMobile ? 220 : 280} />
        </div>
        {/* Monthly table */}
        <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-5)' }}>
          <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: '#f59e0b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>SF Capital · 2025</div>
          <div style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: 'var(--space-4)' }}>Monthly Returns</div>
          <MonthlyTable25 cumData={AGGREGATE_CUM_25} momData={AGGREGATE_MOM_25} accentColor="#f59e0b" />
        </div>
      </div>

      {/* Fund selector — large */}
      <div>
        <div style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
          2025 Funds — Select to View Details
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
          {FUNDS_2025.map(f => {
            const isActive = activeId === f.id;
            return (
              <button key={f.id} onClick={() => setActiveId(f.id)} style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-5) var(--space-6)', background: isActive ? 'var(--bg-raised)' : 'var(--surface)', border: `1px solid ${isActive ? f.accentColor + '60' : 'var(--border)'}`, borderLeft: `4px solid ${isActive ? f.accentColor : 'transparent'}`, borderRadius: '10px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s' }}>
                <div style={{ fontSize: isMobile ? '16px' : '20px', fontWeight: isActive ? 800 : 600, color: isActive ? f.accentColor : 'var(--text-secondary)', marginBottom: '4px', letterSpacing: '-0.02em' }}>{f.name}</div>
                <div style={{ fontSize: isMobile ? '12px' : '13px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>{f.subtitle}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: isMobile ? '22px' : '28px', fontWeight: 900, color: f.accentColor, letterSpacing: '-0.03em' }}>+{f.finalReturn.toFixed(2)}%</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>YTD · {f.strategy}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Per-fund: chart (2/3) + monthly table (1/3) */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', gap: isMobile ? 'var(--space-5)' : 'var(--space-5)', alignItems: 'start' }}>
        {/* Chart */}
        <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-5)' }}>
          <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: fund.accentColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}>SF Capital · 2025</div>
          <div style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: 'var(--space-1)' }}>{fund.name} vs S&P 500</div>
          <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>Cumulative YTD return · 2025</div>
          <PerfChart data={fund.chartData} fundKey={fund.chartKey} fundColor={fund.accentColor} fundLabel={fund.name} height={isMobile ? 220 : 280} />
        </div>
        {/* Monthly table */}
        <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-5)' }}>
          <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: fund.accentColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}>SF Capital · 2025</div>
          <div style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: 'var(--space-4)' }}>{fund.name} · Monthly</div>
          <MonthlyTable25 cumData={fund.cumData} momData={fund.momData} accentColor={fund.accentColor} />
        </div>
      </div>

      {/* ── Qstodia-only: Risk measures + Allocation ──────────────────── */}
      {activeId === 'qstodia' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

          {/* Section heading */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--space-6)' }}>
            <div style={{ fontSize: isMobile ? '10px' : '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '6px' }}>
              Qstodia · 2025 · Deep Dive
            </div>
            <div style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.025em' }}>
              Risk Analysis &amp; Portfolio Allocation
            </div>
          </div>

          {/* Risk measures — full-width table */}
          <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-6)', overflow: 'hidden' }}>
            <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: '#a855f7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Risk Measures
            </div>
            <div style={{ fontSize: isMobile ? '15px' : '18px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
              Qstodia vs S&amp;P 500 (SPXTR)
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: 'var(--space-5)' }}>
              Full-year 2025 · Benchmark: S&amp;P 500 Total Return
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    {['Risk Measure', 'Qstodia', 'S&P 500 (BM)', 'Edge'].map(h => (
                      <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 600, fontSize: '10px', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {QSTODIA_RISK.map((row, i) => (
                    <tr key={row.measure} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                      <td style={{ padding: '13px 16px', color: 'var(--text-secondary)', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.measure}</td>
                      <td style={{ padding: '13px 16px', color: '#a855f7', fontWeight: 800, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{row.qstodia}</td>
                      <td style={{ padding: '13px 16px', color: 'var(--text-tertiary)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{row.spx}</td>
                      <td style={{ padding: '13px 16px' }}>
                        {row.better === null
                          ? <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Informational</span>
                          : <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '20px', background: 'rgba(16,185,129,0.12)', color: 'var(--gain)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                              ✓ Outperforms
                            </span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Allocation chart + table side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '3fr 2fr', gap: 'var(--space-5)', alignItems: 'start' }}>

            {/* Stacked bar chart */}
            <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-6)' }}>
              <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: '#a855f7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Portfolio Allocation
              </div>
              <div style={{ fontSize: isMobile ? '15px' : '18px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                Asset Class Mix by Month
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: 'var(--space-5)' }}>
                Equities · Fixed Income · Cash · 2025
              </div>
              <QstodiaAllocChart isMobile={isMobile} />
            </div>

            {/* Allocation table */}
            <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-5)' }}>
              <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: '#a855f7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Monthly Breakdown
              </div>
              <div style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 'var(--space-4)' }}>
                Allocation %
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      {['Mo.', 'EQ', 'FI', 'Cash', 'NAV'].map(h => (
                        <th key={h} style={{ padding: '7px 8px', textAlign: 'left', fontWeight: 600, fontSize: '9px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {QSTODIA_ALLOC.map((row, i) => (
                      <tr key={row.month} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                        <td style={{ padding: '9px 8px', color: 'var(--text-secondary)', fontWeight: 700 }}>{row.month}</td>
                        <td style={{ padding: '9px 8px', color: '#60a5fa', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.equities}%</td>
                        <td style={{ padding: '9px 8px', color: '#34d399', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.fi}%</td>
                        <td style={{ padding: '9px 8px', color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>{row.cash}%</td>
                        <td style={{ padding: '9px 8px', color: 'var(--text-muted)', fontSize: '11px', whiteSpace: 'nowrap' }}>${(row.nav / 1000).toFixed(0)}k</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PerformancePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeYear, setActiveYear] = useState<'2026' | '2025'>('2026');

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const years: Array<'2026' | '2025'> = ['2025', '2026'];

  return (
    <>
      <Background />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '104px', overflowX: 'hidden' }}>
        <div className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 'var(--space-9)', maxWidth: '90%' }}>

          {/* ── Header ─────────────────────────────────────────────────── */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: '10px' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: '6px', fontSize: isMobile ? '10px' : undefined }}>
                  Analytics · Fund Performance
                </div>
                <h1 style={{ fontSize: isMobile ? '24px' : 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.05, marginBottom: 0, marginTop: '2px' }}>
                  Performance
                </h1>
              </div>
              <div style={{ display: 'inline-flex', background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '16px', padding: '6px', gap: '4px', flexShrink: 0 }}>
                {years.map(year => {
                  const isActive = activeYear === year;
                  const accentColor = year === '2026' ? '#3b82f6' : '#f59e0b';
                  const accentBg   = year === '2026' ? 'rgba(59,130,246,0.12)' : 'rgba(245,158,11,0.12)';
                  return (
                    <button key={year} onClick={() => setActiveYear(year)} style={{ padding: isMobile ? '10px 22px' : '12px 36px', borderRadius: '11px', border: isActive ? `1px solid ${accentColor}40` : '1px solid transparent', cursor: 'pointer', fontWeight: isActive ? 900 : 500, fontSize: isMobile ? '18px' : '22px', letterSpacing: '-0.03em', transition: 'all 0.15s ease', background: isActive ? accentBg : 'transparent', color: isActive ? accentColor : 'var(--text-muted)', boxShadow: isActive ? `0 0 22px ${accentColor}30` : 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {year}
                      {year === '2026' && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isActive ? '#10b981' : 'var(--text-muted)', display: 'inline-block', flexShrink: 0, opacity: isActive ? 1 : 0.35, boxShadow: isActive ? '0 0 8px #10b981' : 'none' }} />}
                    </button>
                  );
                })}
              </div>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>
              {activeYear === '2026'
                ? 'Active fund year · data populates as positions are opened'
                : 'Two funds, two mandates, concluded Dec 2025'}
            </div>
          </div>

          {activeYear === '2026' ? <Year2026View isMobile={isMobile} /> : <Year2025View isMobile={isMobile} />}

        </div>
      </main>
    </>
  );
}
