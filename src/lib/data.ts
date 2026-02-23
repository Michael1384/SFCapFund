import type { Holding, Portfolio, PerformancePoint, TeamMember } from './types';

// ── Holdings ─────────────────────────────────────────────────────────────────
// Populate with real positions when the fund is live. See .github/DATA_STRUCTURE.md
export const HOLDINGS: Holding[] = [];

// ── Portfolios ────────────────────────────────────────────────────────────────
export const PORTFOLIOS: Portfolio[] = [
  {
    id: 'horizon-growth',
    name: 'Horizon Growth Portfolio',
    tagline: 'Global Equity | Long-Term Compounders | Structural Themes',
    description: 'A conviction-driven portfolio targeting long-term capital growth through global equities and structural thematic opportunities.',
    overview: 'The Horizon Growth Portfolio combines fundamental equity research with forward-looking thematic exposure. It targets high-quality businesses benefiting from secular tailwinds, from AI infrastructure and energy transition to consumer technology and global market expansion.',
    coverage: [
      'Global equities (US, Australia, Europe, China, Japan, Emerging Markets)',
      'Technology and AI infrastructure',
      'Clean energy and critical minerals (lithium, copper, mining equities)',
      'Healthcare, biotech and life sciences',
      'Consumer discretionary and digital platforms',
      'Disruptive innovation ETFs and select small/mid-cap growth',
    ],
    strategyPoints: [
      'Fundamental bottom-up equity research',
      'Thematic overlay on structural multi-year trends',
      'Valuation-disciplined stock selection',
      'Long-term compounders with active risk management',
    ],
    inception: '2026-02-20',
    initialAUM: 50000,
    targetReturn: '18–30%',
    strategy: 'Growth / Thematic',
    holdingIds: [],
    accentColor: '#3b82f6',
    team: [
      { name: 'Aariz Ery', role: 'Portfolio Manager', bio: 'FXIA President. Leads portfolio strategy and conviction calls.' },
    ],
  },
  {
    id: 'macro',
    name: 'Macro Portfolio',
    tagline: 'Top-Down | Asset Allocation | Economic Cycles',
    description: 'Top-down portfolio positioning across asset classes based on global economic conditions, monetary policy, and geopolitical developments.',
    overview: 'The Macro Portfolio is designed to be adaptive, defensive when needed, and opportunistic during macro dislocations. It rotates across sectors and asset classes based on the prevailing economic cycle.',
    coverage: [
      'ETFs (equity indices, bonds, sectors)',
      'Commodities (energy, metals, agriculture)',
      'Interest rate–sensitive assets',
      'Currency & forex exposure (AUD/USD, EUR/USD, USD/JPY and more)',
      'Sector rotation strategies',
    ],
    strategyPoints: [
      'Macroeconomic and policy analysis',
      'Sector and asset-class rotation',
      'Tactical positioning based on economic cycles',
      'Risk-adjusted exposure and drawdown control',
    ],
    inception: '2026-02-20',
    initialAUM: 50000,
    targetReturn: '8–15%',
    strategy: 'Global Macro',
    holdingIds: [],
    accentColor: '#f59e0b',
    team: [
      { name: 'Michael Deng', role: 'Portfolio Manager', bio: 'VP & Tech Officer. Leads macro strategy and top-down positioning.' },
    ],
  },
  {
    id: 'quant',
    name: 'Quantitative Strategy Portfolio',
    tagline: 'Systematic | Data-Driven | Rules-Based',
    description: 'Deploys systematic, algorithmic models to exploit statistical inefficiencies in financial markets. All decisions are rules-based.',
    overview: 'The Quantitative Strategy Portfolio minimises behavioural bias and ensures consistency through fully systematic execution. Models are continuously refined and backtested against live performance.',
    coverage: [
      'Global equities',
      'ETFs and index products',
      'Factor exposures (momentum, value, volatility, quality)',
      'Mean-reversion and trend-following strategies',
      'Forex & currency pairs (G10 and emerging market FX)',
    ],
    strategyPoints: [
      'Quantitative factor models',
      'Algorithmic trading signals',
      'Backtested, rules-based execution',
      'Continuous model refinement and performance evaluation',
    ],
    inception: '2026-02-20',
    initialAUM: 50000,
    targetReturn: '30–50%',
    targetReturnNote: 'Higher risk profile with controlled drawdowns',
    strategy: 'Systematic / Algorithmic',
    holdingIds: [],
    accentColor: '#a855f7',
    team: [
      { name: 'William Destro', role: 'Portfolio Manager', bio: 'Events Director. Leads systematic model design and execution.' },
    ],
  },
];

// ── Performance Data ──────────────────────────────────────────────────────────
// Populate with real daily NAV points when the fund is live.
// Format: { date: 'YYYY-MM-DD', value: number, benchmark?: number }
// Helper functions below are retained for when data is added.

const START_YEAR = 2026;
const START_MONTH = 1; // 0-indexed February
const START_DAY = 20;

function addDays(year: number, month: number, day: number, days: number): { y: number; m: number; d: number } {
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let d = day + days;
  let m = month;
  let y = year;
  while (d > months[m]) {
    d -= months[m];
    m++;
    if (m > 11) { m = 0; y++; }
  }
  return { y, m, d };
}

function toIso(y: number, m: number, d: number): string {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

export const PERFORMANCE_DATA: PerformancePoint[] = [];

// ── Per-Portfolio Performance ─────────────────────────────────────────────────
// Populate with real daily NAV points per portfolio when live.
// Helper kept for reference — pass base NAV + daily increment arrays.
const PORT_START_YEAR  = 2026;
const PORT_START_MONTH = 1;
const PORT_START_DAY   = 20;
const PORT_DAYS        = 30;

function makePortPerf(base: number, increments: number[], benchInc: number[]): PerformancePoint[] {
  return Array.from({ length: PORT_DAYS }, (_, i) => {
    const { y, m, d } = addDays(PORT_START_YEAR, PORT_START_MONTH, PORT_START_DAY, i);
    return {
      date:      toIso(y, m, d),
      value:     base + increments[i],
      benchmark: base + benchInc[i],
    };
  });
}

// Suppress unused-variable warnings — these helpers are kept for re-population
void makePortPerf;
void PORT_DAYS;

export const PORTFOLIO_PERFORMANCE: Record<string, PerformancePoint[]> = {
  'horizon-growth': [],
  'macro':          [],
  'quant':          [],
};

// ── Team ──────────────────────────────────────────────────────────────────────
// Populate with real team members when confirmed. See .github/DATA_STRUCTURE.md
export const TEAM_MEMBERS: TeamMember[] = [];

// ── Ticker Tape — symbol list only, all prices are fetched live ───────────────
// market: shown as a small label in the tape. undefined = no label (crypto, forex, futures)
export const TICKER_TAPE: { ticker: string; market?: string; yahooSymbol?: string }[] = [
  // US Equities — Megacap
  { ticker: 'AAPL',    market: 'NASDAQ' },
  { ticker: 'MSFT',    market: 'NASDAQ' },
  { ticker: 'NVDA',    market: 'NASDAQ' },
  { ticker: 'GOOGL',   market: 'NASDAQ' },
  { ticker: 'AMZN',    market: 'NASDAQ' },
  { ticker: 'META',    market: 'NASDAQ' },
  { ticker: 'TSLA',    market: 'NASDAQ' },
  // US Equities — Finance
  { ticker: 'JPM',     market: 'NYSE'   },
  { ticker: 'V',       market: 'NYSE'   },
  { ticker: 'MA',      market: 'NYSE'   },
  { ticker: 'BAC',     market: 'NYSE'   },
  // US Equities — Tech / Growth
  { ticker: 'AMD',     market: 'NASDAQ' },
  { ticker: 'NFLX',   market: 'NASDAQ' },
  { ticker: 'CRM',     market: 'NYSE'   },
  { ticker: 'PLTR',    market: 'NYSE'   },
  { ticker: 'ARM',     market: 'NASDAQ' },
  // US Equities — Consumer / Defensive
  { ticker: 'WMT',     market: 'NYSE'   },
  { ticker: 'COST',    market: 'NASDAQ' },
  { ticker: 'UNH',     market: 'NYSE'   },
  // International
  { ticker: 'TSM',     market: 'NYSE'   },
  // ASX Equities
  { ticker: 'CBA',     market: 'ASX',   yahooSymbol: 'CBA.AX'  },
  { ticker: 'BHP',     market: 'ASX',   yahooSymbol: 'BHP.AX'  },
  { ticker: 'CSL',     market: 'ASX',   yahooSymbol: 'CSL.AX'  },
  { ticker: 'WES',     market: 'ASX',   yahooSymbol: 'WES.AX'  },
  { ticker: 'NAB',     market: 'ASX',   yahooSymbol: 'NAB.AX'  },
  // Index ETFs / Futures
  { ticker: 'SPY',     market: 'NYSE'   },
  { ticker: 'QQQ',     market: 'NASDAQ' },
  { ticker: 'ARKK',    market: 'NYSE'   },
  { ticker: 'NQ=F'                      },
  // Commodities
  { ticker: 'GC=F'                      },
  { ticker: 'CL=F'                      },
  // Crypto
  { ticker: 'BTC',     yahooSymbol: 'BTC-USD' },
  { ticker: 'ETH',     yahooSymbol: 'ETH-USD' },
  { ticker: 'SOL',     yahooSymbol: 'SOL-USD' },
  // Forex
  { ticker: 'EUR/USD', yahooSymbol: 'EURUSD=X' },
  { ticker: 'GBP/USD', yahooSymbol: 'GBPUSD=X' },
  { ticker: 'USD/JPY', yahooSymbol: 'USDJPY=X' },
  { ticker: 'AUD/USD', yahooSymbol: 'AUDUSD=X' },
  // Volatility
  { ticker: 'VIX',     yahooSymbol: '^VIX'     },
];
