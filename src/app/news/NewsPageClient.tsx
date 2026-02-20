'use client';

import React, { useState } from 'react';
import NewsFeed from '@/components/NewsFeed';
import type { NewsItem } from '@/lib/types';

const CATEGORIES = [
  { label: 'All',         tickers: null },
  { label: 'Equities',    tickers: ['AAPL','MSFT','NVDA','GOOGL','JPM','TSLA','META','AMZN'] },
  { label: 'Commodities', tickers: ['GC=F','SI=F','CL=F'] },
  { label: 'Macro',       tickers: ['JPM','SPY','GC=F'] },
  { label: 'AI & Tech',   tickers: ['NVDA','MSFT','GOOGL','META','ARKK'] },
];

export default function NewsPageClient({ news }: { news: NewsItem[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const category = CATEGORIES.find(c => c.label === activeCategory) ?? CATEGORIES[0];
  const filtered = category.tickers
    ? news.filter(n => n.tickers?.some(t => category.tickers!.includes(t)))
    : news;

  return (
    <main style={{ position: 'relative', zIndex: 1, paddingTop: '104px' }}>
      <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-9)' }}>

        <div style={{ marginBottom: 'var(--space-7)' }}>
          <div className="eyebrow" style={{ marginBottom: '6px' }}>Market Intelligence</div>
          <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>News</h1>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: '2px', marginBottom: 'var(--space-5)', borderBottom: '1px solid var(--border)' }}>
          {CATEGORIES.map(c => {
            const isActive = activeCategory === c.label;
            return (
              <button
                key={c.label}
                onClick={() => setActiveCategory(c.label)}
                style={{
                  padding: '8px 14px',
                  fontSize: 'var(--text-sm)',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                  marginBottom: '-1px',
                  cursor: 'pointer',
                  transition: 'color var(--transition), border-color var(--transition)',
                  whiteSpace: 'nowrap',
                }}
              >
                {c.label}
              </button>
            );
          })}
          <div style={{ flex: 1 }} />
          <span className="eyebrow" style={{ padding: '8px 0', alignSelf: 'center' }}>
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        <NewsFeed items={filtered} />
      </div>
    </main>
  );
}
