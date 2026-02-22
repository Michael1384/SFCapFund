'use client';

import React from 'react';
import PerformanceChart from '@/components/PerformanceChart';
import SectorAllocation from '@/components/SectorAllocation';
import type { Holding, PerformancePoint } from '@/lib/types';

interface Props {
  holdings:    Holding[];
  perfHistory: PerformancePoint[];
  isMobile?:   boolean;
}

export default function HomeDashboard({ holdings, perfHistory, isMobile }: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', gap: 'var(--space-5)' }}>
      <PerformanceChart data={perfHistory} />
      <SectorAllocation holdings={holdings} />
    </div>
  );
}
