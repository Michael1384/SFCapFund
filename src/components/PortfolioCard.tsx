'use client';

import React from 'react';
import Link from 'next/link';
import type { Portfolio } from '@/lib/types';

export default function PortfolioCard({ portfolio: p }: { portfolio: Portfolio }) {
  return (
    <Link href="/portfolios" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div
        className="surface"
        style={{ padding: 'var(--space-5)', height: '100%', transition: 'border-color var(--transition)', cursor: 'pointer' }}
        onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-strong)')}
        onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)')}
      >
        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--accent-text)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>
          {p.strategy}
        </div>
        <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 'var(--space-2)' }}>
          {p.name}
        </div>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
          {p.description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Target return</span>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--accent-text)' }}>{p.targetReturn}</span>
        </div>
      </div>
    </Link>
  );
}
