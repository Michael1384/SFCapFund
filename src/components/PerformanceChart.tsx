'use client';

import React, { useState, useEffect } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import type { PerformancePoint } from '@/lib/types';

const RANGES = [
  { label: '1W', days: 7 },
  { label: '1M', days: 30 },
  { label: '3M', days: 91 },
  { label: 'All', days: 999 },
];

function normalise(data: PerformancePoint[]) {
  if (!data.length) return [];
  const base  = data[0].value;
  const baseBm = data[0].benchmark ?? base;
  return data.map(p => ({
    ...p,
    value:     parseFloat((((p.value - base) / base) * 100).toFixed(2)),
    benchmark: parseFloat((((( p.benchmark ?? baseBm) - baseBm) / baseBm) * 100).toFixed(2)),
  }));
}

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'var(--bg-raised)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px',
      fontSize: 'var(--text-xs)',
    }}>
      <div style={{ color: 'var(--text-tertiary)', marginBottom: '6px' }}>{label}</div>
      {payload.map(p => (
        <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginBottom: '3px' }}>
          <span style={{ color: 'var(--text-secondary)' }}>{p.name}</span>
          <span style={{ fontWeight: 600, color: p.value >= 0 ? 'var(--gain)' : 'var(--loss)', fontVariantNumeric: 'tabular-nums' }}>
            {p.value >= 0 ? '+' : ''}{p.value}%
          </span>
        </div>
      ))}
    </div>
  );
}

export default function PerformanceChart({ data }: { data: PerformancePoint[] }) {
  const [mounted, setMounted] = useState(false);
  const [range, setRange]     = useState('3M');
  useEffect(() => { setMounted(true); }, []);

  const days      = RANGES.find(r => r.label === range)?.days ?? 91;
  const chartData = normalise(data.slice(-days));

  return (
    <div className="surface" style={{ padding: 'var(--space-6)' }}>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)', gap: 'var(--space-4)' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: '4px' }}>Performance</div>
          <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)' }}>Fund vs. S&amp;P 500</div>
        </div>
        {/* Range tabs */}
        <div style={{ display: 'flex', gap: '2px' }}>
          {RANGES.map(r => (
            <button
              key={r.label}
              onClick={() => setRange(r.label)}
              className={`btn btn-ghost${range === r.label ? ' active' : ''}`}
              style={{ padding: '4px 12px', fontSize: 'var(--text-xs)', letterSpacing: '0.05em' }}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {mounted ? (
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={chartData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="fundFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="var(--accent)" stopOpacity={0.15} />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="2 4" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: 'var(--text-tertiary)', fontFamily: 'Inter' }}
              tickLine={false} axisLine={false}
              tickFormatter={(v: string) => { const p = v.split('-'); return `${p[1]}/${p[2]}`; }}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fontSize: 10, fill: 'var(--text-tertiary)', fontFamily: 'Inter' }}
              tickLine={false} axisLine={false}
              tickFormatter={(v: number) => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`}
              width={52}
            />
            <Tooltip content={<ChartTooltip />} />
            <Legend
              formatter={(v: string) => <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{v}</span>}
            />
            <Area type="monotone" dataKey="value" name="SF Capital"
              stroke="var(--accent)" strokeWidth={1.5}
              fill="url(#fundFill)" dot={false}
              activeDot={{ r: 3, fill: 'var(--accent)', strokeWidth: 0 }} />
            <Area type="monotone" dataKey="benchmark" name="S&P 500"
              stroke="var(--text-tertiary)" strokeWidth={1}
              fill="none" dot={false} strokeDasharray="3 4"
              activeDot={{ r: 3, fill: 'var(--text-secondary)', strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div style={{ height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>Loading…</span>
        </div>
      )}
    </div>
  );
}
