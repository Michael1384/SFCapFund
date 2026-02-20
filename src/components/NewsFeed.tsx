'use client';

import React from 'react';
import type { NewsItem } from '@/lib/types';

const SENTIMENT_STYLE = {
  positive: { color: 'var(--gain)',           bg: 'var(--gain-dim)',            label: 'Positive' },
  negative: { color: 'var(--loss)',           bg: 'var(--loss-dim)',            label: 'Negative' },
  neutral:  { color: 'var(--text-secondary)', bg: 'rgba(255,255,255,0.05)',    label: 'Neutral'  },
};

function timeAgo(iso: string) {
  const secs = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (secs < 60)   return `${secs}s ago`;
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`;
  if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`;
  return `${Math.floor(secs / 86400)}d ago`;
}

interface NewsFeedProps {
  items: NewsItem[];
  limit?: number;
}

export default function NewsFeed({ items, limit }: NewsFeedProps) {
  const feed = limit ? items.slice(0, limit) : items;

  return (
    <div className="surface" style={{ overflow: 'hidden' }}>
      <div style={{ padding: 'var(--space-5) var(--space-6)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: '2px' }}>Market Intelligence</div>
          <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>News</div>
        </div>
        <span className="eyebrow">{feed.length} articles</span>
      </div>

      <div>
        {feed.map((item, idx) => {
          const s = SENTIMENT_STYLE[item.sentiment];
          return (
            <div
              key={item.id}
              style={{
                padding: 'var(--space-5) var(--space-6)',
                borderBottom: idx < feed.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'background var(--transition)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {/* Top row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--text-tertiary)' }}>{item.source}</span>
                <span style={{ color: 'var(--border-strong)', fontSize: '10px' }}>·</span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{timeAgo(item.publishedAt)}</span>
                <span style={{ color: 'var(--border-strong)', fontSize: '10px' }}>·</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: s.color, background: s.bg, padding: '1px 6px', borderRadius: 'var(--radius-sm)' }}>
                  {s.label}
                </span>
              </div>

              {/* Headline */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  lineHeight: 1.4,
                  display: 'block',
                  marginBottom: 'var(--space-2)',
                  transition: 'color var(--transition)',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-text)')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)')}
              >
                {item.title}
              </a>

              {/* Summary */}
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                {item.summary}
              </p>

              {/* Ticker tags */}
              {item.tickers?.length ? (
                <div style={{ display: 'flex', gap: 'var(--space-1)', flexWrap: 'wrap' }}>
                  {item.tickers.map(t => (
                    <span key={t} className="ticker-tag">{t}</span>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
