import React from 'react';
import { notFound } from 'next/navigation';
import { PORTFOLIOS, HOLDINGS } from '@/lib/data';
import PortfolioDetail from '@/components/PortfolioDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PORTFOLIOS.map(p => ({ slug: p.id }));
}

export default async function PortfolioPage({ params }: Props) {
  const { slug } = await params;
  const portfolio = PORTFOLIOS.find(p => p.id === slug);
  if (!portfolio) notFound();

  const holdings = HOLDINGS.filter(h => portfolio.holdingIds.includes(h.id));

  return <PortfolioDetail portfolio={portfolio} holdings={holdings} />;
}
