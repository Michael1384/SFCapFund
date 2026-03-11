'use client';

import React, { useState, useEffect } from 'react';
import Background from '@/components/Background';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, BarChart, Bar,
} from 'recharts';

// ── Raw monthly data ──────────────────────────────────────────────────────────

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Cumulative % return at end of each month
const QSTODIA_CUM = [
  4.752911241,
  6.038959518,
  7.29900142,
  10.19468497,
  11.62678286,
  18.64102701,
  18.99475592,
  18.61479575,
  19.54935781,
  20.77407349,
  21.44154836,
  27.52178455,
];

const VERSOFY_CUM = [
  2.78,
  3.46,
  5.79,
  6.57,
  9.73,
  13.59,
  15.94,
  17.17,
  23.5,
  26.45,
  27.95,
  26.9,
];

// S&P 500 cumulative YTD return at end of each month
const SP500_CUM = [
  2.70,
  1.24,
  -4.58,
  -5.30,
  0.52,
  5.50,
  7.79,
  9.85,
  13.73,
  16.31,
  16.46,
  16.41,
];

function cumToMonthly(cum: number[]): number[] {
  return cum.map((v, i) => i === 0 ? parseFloat(v.toFixed(3)) : parseFloat((v - cum[i - 1]).toFixed(3)));
}

const QSTODIA_MOM  = cumToMonthly(QSTODIA_CUM);
const VERSOFY_MOM  = cumToMonthly(VERSOFY_CUM);
const AGGREGATE_CUM = MONTHS.map((_, i) => parseFloat(((QSTODIA_CUM[i] + VERSOFY_CUM[i]) / 2).toFixed(3)));
const AGGREGATE_MOM = cumToMonthly(AGGREGATE_CUM);

const overallChartData = MONTHS.map((m, i) => ({
  month: m,
  aggregate: parseFloat(AGGREGATE_CUM[i].toFixed(2)),
  sp500:     parseFloat(SP500_CUM[i].toFixed(2)),
}));

const qstodiaChartData = MONTHS.map((m, i) => ({
  month: m,
  qstodia: parseFloat(QSTODIA_CUM[i].toFixed(2)),
  sp500:   parseFloat(SP500_CUM[i].toFixed(2)),
}));

const versofyChartData = MONTHS.map((m, i) => ({
  month: m,
  versofy: parseFloat(VERSOFY_CUM[i].toFixed(2)),
  sp500:   parseFloat(SP500_CUM[i].toFixed(2)),
}));

// ── Derived metrics ───────────────────────────────────────────────────────────

const qFinal      = QSTODIA_CUM[QSTODIA_CUM.length - 1];
const vFinal      = VERSOFY_CUM[VERSOFY_CUM.length - 1];
const aggFinal    = (qFinal + vFinal) / 2;
const sp500Final  = SP500_CUM[SP500_CUM.length - 1];
const alpha       = aggFinal - sp500Final;

const METRICS_OVERALL = [
  { label: 'Combined Return',  value: `+${aggFinal.toFixed(2)}%`,       color: 'var(--gain)',          sub: 'Avg of both funds' },
  { label: 'vs S&P 500',       value: `+${alpha.toFixed(2)}% α`,        color: 'var(--gain)',          sub: `S&P: +${sp500Final.toFixed(2)}%` },
  { label: 'Funds Active',     value: '2',                               color: 'var(--text-primary)',  sub: 'Qstodia · White Fox' },
  { label: 'Qstodia Return',   value: `+${qFinal.toFixed(2)}%`,         color: '#a855f7',              sub: 'Cumulative YTD' },
  { label: 'White Fox Return', value: `+${vFinal.toFixed(2)}%`,         color: '#f59e0b',              sub: 'Cumulative YTD' },
  { label: 'Status',           value: 'Concluded',                       color: 'var(--text-tertiary)', sub: 'Fund year closed' },
];

// ── Fund definitions ──────────────────────────────────────────────────────────

const FUNDS_2025 = [
  {
    id: 'qstodia',
    name: 'Qstodia',
    subtitle: 'Quantitative & Liquid Capital',
    tagline: 'Quant Emphasis · Liquid Capital Requirements · Systematic Execution',
    description:
      "Qstodia was SF Capital's quantitative-first fund in 2025, with a strong emphasis on systematic models and strict liquid capital requirements. All positions were required to meet minimum liquidity thresholds, ensuring rapid deployment and exit capability across all market conditions.",
    strategy: 'Quantitative / Systematic',
    coverage: [
      'Global equities with high liquidity screening',
      'ETFs and index products',
      'Factor exposures: momentum, value, volatility, quality',
      'Mean-reversion and trend-following strategies',
      'Forex and G10 currency pairs',
    ],
    highlights: [
      'Strict liquidity requirements on all positions',
      'Fully rules-based entry and exit signals',
      'Backtested factor models deployed live',
      'Rapid capital redeployment capability',
    ],
    accentColor: '#a855f7',
    targetReturn: '25–40%',
    finalReturn: qFinal,
    cumData: QSTODIA_CUM,
    momData: QSTODIA_MOM,
    chartData: qstodiaChartData,
    chartKey: 'qstodia',
  },
  {
    id: 'white-fox',
    name: 'Versofy / White Fox',
    subtitle: 'Alternative Investments & Macro Research',
    tagline: 'Macro Research · Alternative Assets · Top-Down Positioning',
    description:
      "Versofy, operating under the White Fox mandate, was SF Capital's macro and alternative investment fund in 2025. It took a top-down research approach, seeking asymmetric opportunities across alternative assets, macro dislocations, and geopolitical-driven positioning.",
    strategy: 'Global Macro / Alternatives',
    coverage: [
      'Alternative investments and private market proxies',
      'Commodities: energy, metals, agriculture',
      'Macro-driven ETF and index positioning',
      'Interest rate sensitive assets and bonds',
      'Currency and forex exposure (G10 + EM)',
    ],
    highlights: [
      'Top-down macroeconomic research framework',
      'Focus on asymmetric risk/reward opportunities',
      'Alternative asset class exposure',
      'Geopolitical and policy-driven scenario modelling',
    ],
    accentColor: '#f59e0b',
    targetReturn: '10–20%',
    finalReturn: vFinal,
    cumData: VERSOFY_CUM,
    momData: VERSOFY_MOM,
    chartData: versofyChartData,
    chartKey: 'versofy',
  },
];

// ── Chart component ───────────────────────────────────────────────────────────

interface PerfChartProps {
  data: { month: string; sp500: number; [key: string]: string | number }[];
  fundKey: string;
  fundColor: string;
  fundLabel: string;
  height?: number;
}

function PerfChart({ data, fundKey, fundColor, fundLabel, height = 280 }: PerfChartProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return (
    <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Loading…</span>
    </div>
  );
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
        <CartesianGrid strokeDasharray="2 4" stroke="rgba(255,255,255,0.06)" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} tickLine={false} axisLine={false} />
        <YAxis
          tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }}
          tickLine={false} axisLine={false}
          tickFormatter={(v: number) => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`}
          width={54}
        />
        <Tooltip
          contentStyle={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px' }}
          labelStyle={{ color: 'var(--text-tertiary)', marginBottom: '4px', fontWeight: 600 }}
          formatter={(val: number, name: string) => [`${val >= 0 ? '+' : ''}${val.toFixed(2)}%`, name]}
        />
        <Legend
          wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }}
          formatter={(value: string) => <span style={{ color: 'var(--text-secondary)' }}>{value}</span>}
        />
        <Line
          type="monotone" dataKey={fundKey} name={fundLabel}
          stroke={fundColor} strokeWidth={2.5}
          dot={{ r: 3, fill: fundColor, strokeWidth: 0 }}
          activeDot={{ r: 5, fill: fundColor, strokeWidth: 0 }}
        />
        <Line
          type="monotone" dataKey="sp500" name="S&P 500"
          stroke="rgba(255,255,255,0.35)" strokeWidth={1.5} strokeDasharray="4 3"
          dot={false} activeDot={{ r: 4, fill: 'rgba(255,255,255,0.5)', strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

// ── Monthly returns table ─────────────────────────────────────────────────────

function MonthlyTable({ cumData, momData, accentColor, isMobile }: {
  cumData: number[]; momData: number[]; accentColor: string; isMobile: boolean;
}) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? '11px' : '12px' }}>
        <thead>
          <tr>
            {['Month', 'Monthly Δ', 'Cumulative YTD', 'S&P 500 YTD'].map(h => (
              <th key={h} style={{
                padding: '8px 12px', textAlign: 'left', fontWeight: 600,
                color: 'var(--text-tertiary)', fontSize: '10px', letterSpacing: '0.06em',
                textTransform: 'uppercase', borderBottom: '1px solid var(--border)',
                whiteSpace: 'nowrap',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MONTHS.map((m, i) => {
            const mom = momData[i];
            const cum = cumData[i];
            const sp  = SP500_CUM[i];
            return (
              <tr key={m} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '9px 12px', color: 'var(--text-secondary)', fontWeight: 600 }}>{m}</td>
                <td style={{ padding: '9px 12px', color: mom >= 0 ? 'var(--gain)' : 'var(--loss)', fontWeight: 700 }}>
                  {mom >= 0 ? '+' : ''}{mom.toFixed(2)}%
                </td>
                <td style={{ padding: '9px 12px', color: cum >= 0 ? accentColor : 'var(--loss)', fontWeight: 700 }}>
                  {cum >= 0 ? '+' : ''}{cum.toFixed(2)}%
                </td>
                <td style={{ padding: '9px 12px', color: sp >= 0 ? 'rgba(255,255,255,0.45)' : 'var(--loss)' }}>
                  {sp >= 0 ? '+' : ''}{sp.toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Performance2025Page() {
  const [activeId, setActiveId] = useState<string>(FUNDS_2025[0].id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const fund = FUNDS_2025.find(f => f.id === activeId) ?? FUNDS_2025[0];

  return (
    <>
      <Background />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '104px', overflowX: 'hidden' }}>
        <div className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 'var(--space-9)', maxWidth: '90%' }}>

          {/* ── Header ───────────────────────────────────────────────────── */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: '12px' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: '6px', fontSize: isMobile ? '10px' : undefined }}>
                  Analytics · Fund Performance
                </div>
                <h1 style={{
                  fontSize: isMobile ? '24px' : 'clamp(28px, 4vw, 44px)',
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.05,
                  marginBottom: 0,
                  marginTop: '2px',
                }}>
                  Performance
                </h1>
              </div>
              {/* Large amber 2025 badge */}
              <div style={{
                padding: isMobile ? '10px 28px' : '14px 52px',
                borderRadius: '14px',
                fontWeight: 900,
                fontSize: isMobile ? '28px' : '42px',
                letterSpacing: '-0.04em',
                background: 'rgba(245,158,11,0.10)',
                color: '#f59e0b',
                border: '1px solid rgba(245,158,11,0.35)',
                boxShadow: '0 0 32px rgba(245,158,11,0.18)',
                flexShrink: 0,
              }}>
                2025
              </div>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', maxWidth: '580px', lineHeight: 1.6 }}>
              SF Capital ran two funds in 2025: <span style={{ color: '#a855f7', fontWeight: 600 }}>Qstodia</span>, a quantitative rules-based fund with strict liquidity requirements, and <span style={{ color: '#f59e0b', fontWeight: 600 }}>Versofy / White Fox</span>, a global macro fund with top-down positioning across alternatives and commodities. Both mandates concluded in December 2025.
            </div>
          </div>

          {/* ── Overall Fund Performance banner ──────────────────────────── */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.07) 0%, var(--bg-raised) 60%)',
            border: '1px solid var(--border)',
            borderLeft: '4px solid #f59e0b',
            borderRadius: '10px',
            padding: isMobile ? 'var(--space-5)' : 'var(--space-5) var(--space-7)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 'var(--space-3)',
            marginBottom: 'var(--space-6)',
          }}>
            <div>
              <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '6px', color: '#f59e0b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                SF Capital · 2025
              </div>
              <div style={{ fontSize: isMobile ? '20px' : '26px', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '6px' }}>
                Overall Fund Performance
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                Qstodia · Versofy / White Fox · two mandates, concluded Dec 2025
              </div>
            </div>
            <span style={{
              fontSize: '12px', fontWeight: 700, padding: '6px 14px', borderRadius: '20px',
              background: 'rgba(255,255,255,0.06)', color: 'var(--text-tertiary)', letterSpacing: '0.04em',
              border: '1px solid var(--border)',
            }}>Concluded</span>
          </div>

          {/* ── Overall metrics grid ─────────────────────────────────────── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '1px', background: 'var(--border)',
            marginBottom: 'var(--space-7)',
          }}>
            {METRICS_OVERALL.map(m => (
              <div key={m.label} style={{ background: 'var(--bg-raised)', padding: isMobile ? 'var(--space-3)' : 'var(--space-4)' }}>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-1)', fontSize: isMobile ? '9px' : '10px' }}>{m.label}</div>
                <div className="metric-value" style={{ color: m.color, fontSize: isMobile ? '18px' : '22px' }}>{m.value}</div>
                <div style={{ fontSize: isMobile ? '9px' : '11px', color: 'var(--text-tertiary)', marginTop: 'var(--space-1)' }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* ── Overall chart + monthly table side-by-side ───────────────── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
            gap: 'var(--space-5)',
            alignItems: 'start',
            marginBottom: 'var(--space-8)',
          }}>
            <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-6)' }}>
              <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: '#f59e0b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                SF Capital · 2025
              </div>
              <div style={{ fontSize: isMobile ? '15px' : '18px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: 'var(--space-2)' }}>
                Combined Performance vs S&P 500
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>
                Equal-weight average of Qstodia + Versofy/White Fox · Cumulative YTD return
              </div>
              <PerfChart
                data={overallChartData}
                fundKey="aggregate"
                fundColor="#f59e0b"
                fundLabel="SF Capital (avg)"
                height={isMobile ? 240 : 340}
              />
            </div>

            <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-5)' }}>
              <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: '#f59e0b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Combined Monthly Returns
              </div>
              <div style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 'var(--space-4)' }}>
                Equal-Weighted Average
              </div>
              <MonthlyTable cumData={AGGREGATE_CUM} momData={AGGREGATE_MOM} accentColor="#f59e0b" isMobile={isMobile} />
            </div>
          </div>

          {/* ── Fund selector — large cards ──────────────────────────────── */}
          <div className="eyebrow" style={{ marginBottom: 'var(--space-3)', fontSize: '10px' }}>
            2025 Funds — Select to view details
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-6)',
          }}>
            {FUNDS_2025.map(f => {
              const isActive = activeId === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveId(f.id)}
                  style={{
                    padding: isMobile ? 'var(--space-4)' : 'var(--space-5) var(--space-6)',
                    background: isActive ? 'var(--bg-raised)' : 'var(--surface)',
                    border: `1px solid ${isActive ? f.accentColor + '60' : 'var(--border)'}`,
                    borderLeft: `4px solid ${isActive ? f.accentColor : 'transparent'}`,
                    borderRadius: '10px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
                  }}
                >
                  <div style={{ fontSize: isMobile ? '16px' : '20px', fontWeight: isActive ? 800 : 600, color: isActive ? f.accentColor : 'var(--text-secondary)', marginBottom: '4px' }}>
                    {f.name}
                  </div>
                  <div style={{ fontSize: isMobile ? '11px' : '12px', color: 'var(--text-tertiary)', marginBottom: '10px' }}>
                    {f.subtitle}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: isMobile ? '22px' : '28px', fontWeight: 900, color: f.accentColor }}>
                      +{f.finalReturn.toFixed(2)}%
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>YTD · {f.strategy}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Per-fund section ─────────────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

            {/* Fund banner */}
            <div style={{
              background: `linear-gradient(135deg, ${fund.accentColor}0f 0%, var(--bg-raised) 60%)`,
              border: '1px solid var(--border)', borderLeft: `4px solid ${fund.accentColor}`,
              borderRadius: '10px', padding: isMobile ? 'var(--space-4)' : 'var(--space-5) var(--space-7)',
            }}>
              <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '6px', color: fund.accentColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                SF Capital · 2025
              </div>
              <div style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '4px' }}>
                {fund.name}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>{fund.subtitle} · {fund.strategy}</div>
            </div>

            {/* Per-fund chart + monthly table side-by-side */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
              gap: 'var(--space-5)',
              alignItems: 'start',
            }}>
              <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-6)' }}>
                <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: fund.accentColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  SF Capital · 2025
                </div>
                <div style={{ fontSize: isMobile ? '15px' : '18px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: 'var(--space-2)' }}>
                  {fund.name} vs S&amp;P 500
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>
                  Cumulative YTD return · 2025
                </div>
                <PerfChart
                  data={fund.chartData}
                  fundKey={fund.chartKey}
                  fundColor={fund.accentColor}
                  fundLabel={fund.name}
                  height={isMobile ? 220 : 320}
                />
              </div>

              <div className="surface" style={{ padding: isMobile ? 'var(--space-4)' : 'var(--space-5)' }}>
                <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: fund.accentColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Monthly Returns
                </div>
                <div style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 'var(--space-4)' }}>
                  {fund.name}
                </div>
                <MonthlyTable cumData={fund.cumData} momData={fund.momData} accentColor={fund.accentColor} isMobile={isMobile} />
              </div>
            </div>

            {/* ── Qstodia-only: Risk measures + Allocation ─────────────── */}
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

                {/* Risk measures table */}
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

            {/* Two-column detail layout */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '65fr 35fr',
              gap: isMobile ? 'var(--space-5)' : 'var(--space-6)',
              alignItems: 'start',
            }}>
              {/* Left — fund detail */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: fund.accentColor, marginBottom: 'var(--space-3)' }}>
                    {fund.tagline}
                  </p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '640px' }}>
                    {fund.description}
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 'var(--space-5)' }}>
                  <div style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '8px', padding: 'var(--space-5)' }}>
                    <div className="eyebrow" style={{ marginBottom: 'var(--space-3)', fontSize: '10px' }}>Coverage</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {fund.coverage.map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <span style={{ color: fund.accentColor, flexShrink: 0, marginTop: '1px' }}>›</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '8px', padding: 'var(--space-5)' }}>
                    <div className="eyebrow" style={{ marginBottom: 'var(--space-3)', fontSize: '10px' }}>Strategy</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {fund.highlights.map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <span style={{ color: fund.accentColor, flexShrink: 0, marginTop: '1px' }}>›</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right — stats card */}
              <div style={{
                background: 'var(--bg-raised)', border: '1px solid var(--border)',
                borderTop: `3px solid ${fund.accentColor}`, borderRadius: '8px', overflow: 'hidden',
              }}>
                <div style={{ padding: 'var(--space-4) var(--space-5)', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, marginBottom: '4px', color: fund.accentColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    SF Capital · 2025
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: fund.accentColor, letterSpacing: '-0.01em' }}>{fund.name}</div>
                </div>
                {[
                  { label: 'Final Return',  value: `+${fund.finalReturn.toFixed(2)}%` },
                  { label: 'vs S&P 500',    value: `${(fund.finalReturn - sp500Final) >= 0 ? '+' : ''}${(fund.finalReturn - sp500Final).toFixed(2)}% α` },
                  { label: 'Strategy',      value: fund.strategy },
                  { label: 'Target Return', value: fund.targetReturn },
                  { label: 'Fund Year',     value: '2025' },
                  { label: 'Status',        value: 'Concluded', muted: true },
                ].map((row, i) => (
                  <div key={i} style={{ padding: 'var(--space-4) var(--space-5)', borderBottom: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div className="eyebrow" style={{ fontSize: '9px' }}>{row.label}</div>
                    <div style={{
                      fontSize: '13px', fontWeight: 600,
                      color: row.muted ? 'var(--text-tertiary)' : 'var(--text-primary)',
                      fontStyle: row.muted ? 'italic' : 'normal',
                    }}>
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
