import React from 'react';
import Link from 'next/link';
import Background from '@/components/Background';
import { getHoldings, getPerformanceHistory } from '@/lib/queries';
import { PORTFOLIOS } from '@/lib/data';
import HeroTyping from '@/components/HeroTyping';
import HeroPortfolioCarousel from '@/components/HeroPortfolioCarousel';
import PortfolioCard from '@/components/PortfolioCard';
import HomeDashboard from '@/components/HomeDashboard';
import HomeClient from '@/components/HomeClient';

export const revalidate = 300;

export default async function Home() {
  const [holdings, perfHistory] = await Promise.all([
    getHoldings(),
    getPerformanceHistory(91),
  ]);

  return (
    <>
      <Background />
      <HomeClient holdings={holdings} perfHistory={perfHistory} />
    </>
  );
}
