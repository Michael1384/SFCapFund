export type AssetClass = 'equity' | 'commodity' | 'etf' | 'crypto' | 'bond' | 'cash';
export type PortfolioId = 'overall' | 'short-term' | 'long-term' | 'macro' | 'thematic';

export interface Holding {
  id: string;
  ticker: string;
  name: string;
  assetClass: AssetClass;
  shares: number;
  avgCost: number;
  currentPrice: number;
  previousClose: number;
  currency: string;
  sector?: string;
  portfolioIds: PortfolioId[];
  thesis?: string;
  addedDate: string;
}

export interface Portfolio {
  id: PortfolioId;
  name: string;
  description: string;
  inception: string;
  targetReturn: string;
  strategy: string;
  holdingIds: string[];
}

export interface PerformancePoint {
  date: string;
  value: number;
  benchmark?: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  publishedAt: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  tickers?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
}

// Pure helper functions
export const calcHoldingValue      = (h: Holding) => h.shares * h.currentPrice;
export const calcHoldingCost       = (h: Holding) => h.shares * h.avgCost;
export const calcHoldingPnL        = (h: Holding) => calcHoldingValue(h) - calcHoldingCost(h);
export const calcHoldingPnLPercent = (h: Holding) =>
  calcHoldingCost(h) === 0 ? 0 : (calcHoldingPnL(h) / calcHoldingCost(h)) * 100;
export const calcDayChange         = (h: Holding) => (h.currentPrice - h.previousClose) * h.shares;
export const calcDayChangePercent  = (h: Holding) =>
  h.previousClose === 0 ? 0 : ((h.currentPrice - h.previousClose) / h.previousClose) * 100;
