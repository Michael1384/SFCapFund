'use client';

import React, { useState } from 'react';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import HoldingsTable from '@/components/HoldingsTable';
import Footer from '@/components/Footer';
import { PORTFOLIOS, HOLDINGS } from '@/lib/data';
import { calcHoldingValue, calcHoldingPnLPercent } from '@/lib/types';
import type { PortfolioId, Holding } from '@/lib/types';

function PortfoliosClient({ initialHoldings }: { initialHoldings: Holding[] }) {
  const [activeId, setActiveId] = useState<PortfolioId>('overall');
  const portfolio  = PORTFOLIOS.find(p => p.id === activeId) ?? PORTFOLIOS[0];
  const holdings   = initialHoldings.filter(h => portfolio.holdingIds.includes(h.id));
  const totalValue = holdings.reduce((sum, h) => sum + calcHoldingValue(h), 0);
  const avgPnLPct  = holdings.length
    ? holdings.reduce((sum, h) => sum + calcHoldingPnLPercent(h), 0) / holdings.length
    : 0;

  return (
    <>
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '104px' }}>
        <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-9)' }}>
          <div style={{ marginBottom: 'var(--space-7)' }}>
            <div className="eyebrow" style={{ marginBottom: '6px' }}>Fund Year 2026</div>
            <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, letterSpacing: '-0.025em' }}>Our Portfolios</h1>
          </div>
          <div style={{ display: 'flex', gap: '2px', borderBottom: '1px solid var(--border)', marginBottom: 'var(--space-6)', overflowX: 'auto' }}>
            {PORTFOLIOS.map(p => {
              const isActive = activeId === p.id;
              return (
                <button key={p.id} onClick={() => setActiveId(p.id)} style={{
                  padding: '9px 16px', fontSize: 'var(--text-sm)',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: 'none', border: 'none',
                  borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                  marginBottom: '-1px', cursor: 'pointer', whiteSpace: 'nowrap',
                  transition: 'color var(--transition), border-color var(--transition)',
                }}>
                  {p.name}
                </button>
              );
            })}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1px', background: 'var(--border)', marginBottom: 'var(--space-5)' }}>
            {[
              { label: 'AUM',           value: `$${totalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}`, color: 'var(--text-primary)' },
              { label: 'Avg P&L',       value: `${avgPnLPct >= 0 ? '+' : ''}${avgPnLPct.toFixed(2)}%`,                 color: avgPnLPct >= 0 ? 'var(--gain)' : 'var(--loss)' },
              { label: 'Target Return', value: portfolio.targetReturn,                                                   color: 'var(--accent-text)' },
              { label: 'Strategy',      value: portfolio.strategy,                                                       color: 'var(--text-primary)' },
              { label: 'Inception',     value: portfolio.inception,                                                      color: 'var(--text-secondary)' },
              { label: 'Positions',     value: `${holdings.length}`,                                                    color: 'var(--text-primary)' },
            ].map(item => (
              <div key={item.label} style={{ background: 'var(--bg-raised)', padding: 'var(--space-4) var(--space-5)' }}>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>{item.label}</div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: item.color }}>{item.value}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
            {portfolio.description}
          </p>
          <HoldingsTable holdings={holdings} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function PortfoliosPage() {
  return (
    <>
      <Background />
      <Navbar />
      <PortfoliosClient initialHoldings={HOLDINGS} />
    </>
  );
}
