export type AssetClass = 'equity' | 'commodity' | 'etf' | 'crypto' | 'bond' | 'cash';
export type PortfolioId = 'horizon-growth' | 'macro' | 'quant';

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

export interface PortfolioMember {
  name: string;
  role: string;
  bio: string;
}

export interface Portfolio {
  id: PortfolioId;
  name: string;
  tagline: string;          // e.g. "Global Equity | Growth-Oriented | Fundamental Conviction"
  description: string;
  overview: string;         // longer paragraph overview
  coverage: string[];       // bullet list of what's covered
  strategyPoints: string[]; // bullet list of strategy approach
  inception: string;
  initialAUM: number;       // starting capital in AUD, e.g. 50000
  targetReturn: string;
  targetReturnNote?: string; // e.g. "(Higher risk profile with controlled drawdowns)"
  strategy: string;          // short label e.g. "Growth-Oriented"
  holdingIds: string[];
  accentColor: string;       // hex for card accent
  team?: PortfolioMember[];  // 1 PM + 5 analysts shown on individual portfolio pages
}

export interface PerformancePoint {
  date: string;
  value: number;
  benchmark?: number;
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
