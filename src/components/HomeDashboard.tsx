'use client';

import React from 'react';
import PerformanceChart from '@/components/PerformanceChart';
import SectorAllocation from '@/components/SectorAllocation';
import TopMovers from '@/components/TopMovers';
import NewsFeed from '@/components/NewsFeed';
import HoldingsTable from '@/components/HoldingsTable';
import type { Holding, NewsItem, PerformancePoint } from '@/lib/types';

interface Props {
  holdings:    Holding[];
  news:        NewsItem[];
  perfHistory: PerformancePoint[];
}

export default function HomeDashboard({ holdings, news, perfHistory }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>

      {/* Performance + Allocation */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-5)' }}>
        <PerformanceChart data={perfHistory} />
        <SectorAllocation holdings={holdings} />
      </div>

      {/* Movers + News */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-5)' }}>
        <TopMovers holdings={holdings} />
        <NewsFeed items={news} />
      </div>

      {/* Holdings */}
      <HoldingsTable holdings={holdings} />

    </div>
  );
}
