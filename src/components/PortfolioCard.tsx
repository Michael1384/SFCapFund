'use client';

import React from 'react';
import Link from 'next/link';
import type { Portfolio } from '@/lib/types';

export default function PortfolioCard({ portfolio: p }: { portfolio: Portfolio }) {
  const accent = p.accentColor ?? 'var(--accent-text)';

  return (
    <Link href={`/portfolios/${p.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div
        style={{
          position: 'relative',
          padding: 'var(--space-5)',
          height: '100%',
          background: 'var(--bg-raised)',
          border: '1px solid var(--border)',
          borderLeft: `3px solid ${accent}`,
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'border-color 0.2s, background 0.2s',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.background = 'rgba(255,255,255,0.03)';
          el.style.borderColor = 'var(--border-strong)';
          el.style.borderLeftColor = accent;
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.background = 'var(--bg-raised)';
          el.style.borderColor = 'var(--border)';
          el.style.borderLeftColor = accent;
        }}
      >
        {/* Name + target return */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
          <div style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
            {p.name}
          </div>
          <div style={{
            flexShrink: 0,
            fontSize: 'var(--text-sm)',
            fontWeight: 800,
            color: accent,
            background: `${accent}18`,
            border: `1px solid ${accent}35`,
            borderRadius: '4px',
            padding: '2px 8px',
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
          }}>
            {p.targetReturn}
          </div>
        </div>

        {/* Tagline */}
        {p.tagline && (
          <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {p.tagline}
          </div>
        )}

        {/* Description */}
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
          {p.description}
        </p>

        {/* Coverage tags (first 3) */}
        {p.coverage && p.coverage.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {p.coverage.slice(0, 3).map((item, i) => (
              <span key={i} style={{
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'var(--text-tertiary)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '3px',
                padding: '3px 7px',
              }}>
                {item.length > 30 ? item.slice(0, 28) + '…' : item}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--space-2)', borderTop: '1px solid var(--border)' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{p.strategy}</span>
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: accent }}>View →</span>
        </div>
      </div>
    </Link>
  );
}
