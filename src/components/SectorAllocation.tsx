'use client';

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { calcHoldingValue } from '@/lib/types';
import type { AssetClass, Holding } from '@/lib/types';

const SECTOR_COLORS = ['#c0003a','#a0002e','#7a0022','#600019','#e05575','#b83050','#d04060'];

const ASSET_LABELS: Record<AssetClass, string> = {
  equity: 'Equities', commodity: 'Commodities', etf: 'ETFs',
  crypto: 'Crypto', bond: 'Bonds', cash: 'Cash',
};

export default function SectorAllocation({ holdings }: { holdings: Holding[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const total = holdings.reduce((s, h) => s + calcHoldingValue(h), 0);

  const sectorMap = new Map<string, number>();
  holdings.forEach(h => {
    const s = h.sector ?? 'Other';
    sectorMap.set(s, (sectorMap.get(s) ?? 0) + calcHoldingValue(h));
  });
  const sectorData = Array.from(sectorMap.entries())
    .map(([name, value]) => ({ name, value, pct: (value / total) * 100 }))
    .sort((a, b) => b.value - a.value);

  const assetMap = new Map<AssetClass, number>();
  holdings.forEach(h => {
    assetMap.set(h.assetClass, (assetMap.get(h.assetClass) ?? 0) + calcHoldingValue(h));
  });
  const assetData = Array.from(assetMap.entries())
    .map(([name, value]) => ({ name, value, pct: (value / total) * 100 }))
    .sort((a, b) => b.value - a.value);

  return (
    <div className="surface" style={{ padding: 'var(--space-6)' }}>
      <div className="eyebrow" style={{ marginBottom: '4px' }}>Allocation</div>
      <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-5)' }}>Sector &amp; Asset Class</div>

      {/* Donut */}
      {mounted ? (
        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie data={sectorData} cx="50%" cy="50%" innerRadius={48} outerRadius={72} dataKey="value" stroke="none">
              {sectorData.map((_, i) => (
                <Cell key={i} fill={SECTOR_COLORS[i % SECTOR_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(v: number) => [`$${v.toLocaleString('en-US', { maximumFractionDigits: 0 })}`, '']}
              contentStyle={{ background: 'var(--bg-raised)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', fontSize: 11, color: 'var(--text-primary)' }}
            />
          </PieChart>
        </ResponsiveContainer>
      ) : <div style={{ height: 160 }} />}

      {/* Asset class bars */}
      <div style={{ marginTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <div className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>By Asset Class</div>
        {assetData.map(a => (
          <div key={a.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                {ASSET_LABELS[a.name as AssetClass] ?? a.name}
              </span>
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
                {a.pct.toFixed(1)}%
              </span>
            </div>
            <div style={{ height: '2px', background: 'var(--border-strong)', borderRadius: '1px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${a.pct}%`, background: 'var(--accent)', borderRadius: '1px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
