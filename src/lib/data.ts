import type { Holding, Portfolio, PerformancePoint, TeamMember } from './types';

// ── Holdings ─────────────────────────────────────────────────────────────────
// Share counts chosen so each portfolio's cost basis ≈ $50,000 AUD (demo capital)
export const HOLDINGS: Holding[] = [
  // ── Horizon Growth ────────────────────────────────────────────────────────
  {
    id: 'aapl', ticker: 'AAPL', name: 'Apple Inc.', assetClass: 'equity',
    shares: 18, avgCost: 172.50, currentPrice: 189.30, previousClose: 185.20,
    currency: 'USD', sector: 'Technology',
    portfolioIds: ['horizon-growth'],
    thesis: 'Strong ecosystem lock-in, services growth, and shareholder returns.',
    addedDate: '2026-02-20',
  },
  {
    id: 'msft', ticker: 'MSFT', name: 'Microsoft Corp.', assetClass: 'equity',
    shares: 14, avgCost: 385.00, currentPrice: 415.80, previousClose: 410.50,
    currency: 'USD', sector: 'Technology',
    portfolioIds: ['horizon-growth'],
    thesis: 'Azure cloud growth and AI integration via Copilot across enterprise.',
    addedDate: '2026-02-20',
  },
  {
    id: 'nvda', ticker: 'NVDA', name: 'NVIDIA Corp.', assetClass: 'equity',
    shares: 12, avgCost: 480.00, currentPrice: 875.40, previousClose: 850.10,
    currency: 'USD', sector: 'Technology',
    portfolioIds: ['horizon-growth'],
    thesis: 'Dominant AI accelerator; data center demand runway still long.',
    addedDate: '2026-02-20',
  },
  {
    id: 'googl', ticker: 'GOOGL', name: 'Alphabet Inc.', assetClass: 'equity',
    shares: 22, avgCost: 138.00, currentPrice: 163.50, previousClose: 160.80,
    currency: 'USD', sector: 'Communication Services',
    portfolioIds: ['horizon-growth'],
    thesis: 'Search moat plus YouTube growth; Gemini AI integration underway.',
    addedDate: '2026-02-20',
  },
  {
    id: 'tsla', ticker: 'TSLA', name: 'Tesla Inc.', assetClass: 'equity',
    shares: 10, avgCost: 225.00, currentPrice: 248.50, previousClose: 256.80,
    currency: 'USD', sector: 'Consumer Discretionary',
    portfolioIds: ['horizon-growth'],
    thesis: 'FSD approval catalyst and energy storage growth.',
    addedDate: '2026-02-20',
  },
  {
    id: 'meta', ticker: 'META', name: 'Meta Platforms', assetClass: 'equity',
    shares: 8, avgCost: 510.00, currentPrice: 553.20, previousClose: 548.90,
    currency: 'USD', sector: 'Communication Services',
    portfolioIds: ['horizon-growth'],
    thesis: 'Ad revenue rebound; Llama AI moat; Reality Labs optionality.',
    addedDate: '2026-02-20',
  },
  {
    id: 'spy', ticker: 'SPY', name: 'SPDR S&P 500 ETF', assetClass: 'etf',
    shares: 12, avgCost: 450.00, currentPrice: 521.30, previousClose: 518.40,
    currency: 'USD', sector: 'Broad Market',
    portfolioIds: ['horizon-growth'],
    thesis: 'Core market exposure; diversification anchor for the portfolio.',
    addedDate: '2026-02-20',
  },
  // ── Macro ─────────────────────────────────────────────────────────────────
  {
    id: 'gc-f', ticker: 'GC=F', name: 'Gold Futures', assetClass: 'commodity',
    shares: 8, avgCost: 1950.00, currentPrice: 2340.00, previousClose: 2310.50,
    currency: 'USD', sector: 'Commodities',
    portfolioIds: ['macro'],
    thesis: 'Inflation hedge; de-dollarisation tailwind; central bank buying.',
    addedDate: '2026-02-20',
  },
  {
    id: 'si-f', ticker: 'SI=F', name: 'Silver Futures', assetClass: 'commodity',
    shares: 120, avgCost: 22.00, currentPrice: 28.40, previousClose: 27.90,
    currency: 'USD', sector: 'Commodities',
    portfolioIds: ['macro'],
    thesis: 'Industrial demand from solar panels + monetary metal premium.',
    addedDate: '2026-02-20',
  },
  {
    id: 'cl-f', ticker: 'CL=F', name: 'Crude Oil WTI', assetClass: 'commodity',
    shares: 60, avgCost: 78.00, currentPrice: 74.20, previousClose: 75.60,
    currency: 'USD', sector: 'Commodities',
    portfolioIds: ['macro'],
    thesis: 'OPEC+ supply discipline; geopolitical risk premium.',
    addedDate: '2026-02-20',
  },
  {
    id: 'jpm', ticker: 'JPM', name: 'JPMorgan Chase', assetClass: 'equity',
    shares: 40, avgCost: 188.00, currentPrice: 213.60, previousClose: 211.40,
    currency: 'USD', sector: 'Financials',
    portfolioIds: ['macro'],
    thesis: 'Best-in-class bank with diversified revenue; benefits from higher rates.',
    addedDate: '2026-02-20',
  },
  {
    id: 'qqq', ticker: 'QQQ', name: 'Invesco QQQ ETF', assetClass: 'etf',
    shares: 20, avgCost: 390.00, currentPrice: 445.20, previousClose: 441.80,
    currency: 'USD', sector: 'Broad Market',
    portfolioIds: ['macro'],
    thesis: 'Tactical exposure to rate-sensitive tech; QQQ as macro barometer.',
    addedDate: '2026-02-20',
  },
  // ── Quant ─────────────────────────────────────────────────────────────────
  {
    id: 'amd', ticker: 'AMD', name: 'Advanced Micro Devices', assetClass: 'equity',
    shares: 55, avgCost: 145.00, currentPrice: 178.60, previousClose: 174.20,
    currency: 'USD', sector: 'Technology',
    portfolioIds: ['quant'],
    thesis: 'Momentum signal; AI GPU alternative play with strong factor score.',
    addedDate: '2026-02-20',
  },
  {
    id: 'pltr', ticker: 'PLTR', name: 'Palantir Technologies', assetClass: 'equity',
    shares: 180, avgCost: 22.00, currentPrice: 34.80, previousClose: 33.50,
    currency: 'USD', sector: 'Technology',
    portfolioIds: ['quant'],
    thesis: 'High momentum + quality factor; government AI contract pipeline.',
    addedDate: '2026-02-20',
  },
  {
    id: 'nflx', ticker: 'NFLX', name: 'Netflix Inc.', assetClass: 'equity',
    shares: 7, avgCost: 580.00, currentPrice: 698.40, previousClose: 690.10,
    currency: 'USD', sector: 'Communication Services',
    portfolioIds: ['quant'],
    thesis: 'Mean-reversion signal post-earnings; high quality score + low volatility.',
    addedDate: '2026-02-20',
  },
  {
    id: 'crm', ticker: 'CRM', name: 'Salesforce Inc.', assetClass: 'equity',
    shares: 18, avgCost: 240.00, currentPrice: 285.50, previousClose: 281.90,
    currency: 'USD', sector: 'Technology',
    portfolioIds: ['quant'],
    thesis: 'Value + momentum crossover; Agentforce AI product cycle.',
    addedDate: '2026-02-20',
  },
  {
    id: 'arkk', ticker: 'ARKK', name: 'ARK Innovation ETF', assetClass: 'etf',
    shares: 110, avgCost: 42.00, currentPrice: 47.80, previousClose: 46.90,
    currency: 'USD', sector: 'Disruptive Innovation',
    portfolioIds: ['quant'],
    thesis: 'Systematic exposure to high-beta innovation basket; momentum overlay.',
    addedDate: '2026-02-20',
  },
];

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
    holdingIds: ['aapl', 'msft', 'nvda', 'googl', 'tsla', 'meta', 'spy'],
    accentColor: '#3b82f6',
    team: [
      { name: 'Aariz Ery',       role: 'Portfolio Manager',  bio: 'FXIA President. Leads portfolio strategy and conviction calls.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Covers global technology and AI infrastructure equities.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Focuses on consumer discretionary and digital platforms.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Specialises in clean energy and critical minerals.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Healthcare, biotech and life sciences coverage.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Emerging markets and international equity research.' },
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
    holdingIds: ['gc-f', 'si-f', 'cl-f', 'jpm', 'qqq'],
    accentColor: '#f59e0b',
    team: [
      { name: 'Michael Deng',    role: 'Portfolio Manager',  bio: 'VP & Tech Officer. Leads macro strategy and top-down positioning.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Covers commodities: energy, metals and agriculture.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Focuses on currency and forex macro drivers.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Monitors interest rate dynamics and fixed income.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Sector rotation and ETF positioning analysis.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Geopolitical risk research and macro scenario modelling.' },
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
    holdingIds: ['amd', 'pltr', 'nflx', 'crm', 'arkk'],
    accentColor: '#a855f7',
    team: [
      { name: 'William Destro',  role: 'Portfolio Manager',  bio: 'Events Director. Leads systematic model design and execution.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Momentum and trend-following signal development.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Factor model construction and backtesting.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Mean-reversion strategies and statistical arbitrage.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Algorithmic execution and portfolio optimisation.' },
      { name: 'Analyst Name',    role: 'Analyst',            bio: 'Data engineering and quantitative research support.' },
    ],
  },
];

// ── Performance Data (91 fixed daily points) ─────────────────────────────────
// Start: 2024-10-22. All values deterministic — NO new Date() or Math.random()
const PERF_BASE_VALUE = 100000;
const PERF_INCREMENTS = [
  120, -80, 200, 350, -150, 420, 180, -90, 310, 250,
  -200, 380, 140, -60, 290, 410, -170, 230, 160, 380,
  -110, 270, 320, -80, 450, 190, -220, 340, 280, 150,
  -130, 390, 210, -70, 480, 170, -300, 260, 330, -90,
  410, 200, -140, 370, 240, -80, 430, 180, -250, 310,
  290, -120, 400, 220, -60, 470, 160, -280, 350, 270,
  140, -100, 420, 230, -50, 490, 150, -260, 370, 260,
  130, -90, 440, 210, -40, 500, 140, -240, 390, 250,
  120, -80, 460, 220, -30, 510, 130, -220, 410, 240, 110,
];
const BENCH_INCREMENTS = [
  80, -50, 140, 200, -90, 280, 110, -60, 200, 170,
  -130, 250, 90, -40, 190, 270, -110, 160, 110, 240,
  -70, 180, 210, -50, 290, 130, -140, 220, 180, 100,
  -80, 250, 140, -40, 310, 120, -190, 170, 210, -60,
  270, 130, -90, 240, 160, -50, 280, 120, -160, 200,
  190, -80, 260, 150, -40, 300, 110, -180, 230, 180,
  90, -60, 280, 150, -30, 320, 100, -170, 240, 170,
  80, -50, 290, 140, -20, 330, 90, -150, 260, 160,
  70, -40, 310, 150, -10, 340, 80, -140, 280, 150, 60,
];

const START_YEAR = 2024;
const START_MONTH = 9; // 0-indexed October
const START_DAY = 22;

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

export const PERFORMANCE_DATA: PerformancePoint[] = Array.from({ length: 91 }, (_, i) => {
  const { y, m, d } = addDays(START_YEAR, START_MONTH, START_DAY, i);
  const value = PERF_INCREMENTS.slice(0, i).reduce((acc, v) => acc + v, PERF_BASE_VALUE);
  const benchmark = BENCH_INCREMENTS.slice(0, i).reduce((acc, v) => acc + v, PERF_BASE_VALUE);
  return { date: toIso(y, m, d), value, benchmark };
});

// ── Per-Portfolio Performance (30 daily points from Feb 20 2026) ──────────────
// Filler data — will be replaced with Supabase live data when connected
const PORT_START_YEAR  = 2026;
const PORT_START_MONTH = 1; // 0-indexed February
const PORT_START_DAY   = 20;
const PORT_DAYS        = 30;

// Horizon Growth — strong uptrend driven by NVDA/META gains
const HG_INCREMENTS  = [0, 420, -180, 560, 310, -90, 480, 620, -200, 390, 510, -140, 680, 290, -80, 740, 190, -310, 820, 430, -160, 910, 350, -220, 1050, 480, -190, 1180, 390, -100];
const HG_BENCH       = [0, 280, -120, 360, 200, -60, 310, 400, -130, 250, 330, -90, 440, 190, -50, 480, 120, -200, 530, 280, -100, 590, 230, -140, 680, 310, -120, 760, 250, -65];
const HG_BASE        = 50000;

// Macro — moderate, some drag from crude oil but gold strong
const MAC_INCREMENTS = [0, 180, -90, 240, 120, -160, 290, -80, 340, 180, -220, 390, 150, -60, 430, 210, -140, 470, 190, -80, 500, 230, -120, 540, 200, -90, 570, 240, -100, 590];
const MAC_BENCH      = [0, 280, -120, 360, 200, -60, 310, 400, -130, 250, 330, -90, 440, 190, -50, 480, 120, -200, 530, 280, -100, 590, 230, -140, 680, 310, -120, 760, 250, -65];
const MAC_BASE       = 50000;

// Quant — high volatility, strong momentum
const QNT_INCREMENTS = [0, 650, -280, 810, -190, 420, 980, -350, 1100, 520, -240, 1280, 410, -300, 1450, 580, -260, 1620, 490, -180, 1780, 620, -290, 1950, 540, -210, 2100, 680, -250, 2280];
const QNT_BENCH      = [0, 280, -120, 360, 200, -60, 310, 400, -130, 250, 330, -90, 440, 190, -50, 480, 120, -200, 530, 280, -100, 590, 230, -140, 680, 310, -120, 760, 250, -65];
const QNT_BASE       = 50000;

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

export const PORTFOLIO_PERFORMANCE: Record<string, PerformancePoint[]> = {
  'horizon-growth': makePortPerf(HG_BASE, HG_INCREMENTS, HG_BENCH),
  'macro':          makePortPerf(MAC_BASE, MAC_INCREMENTS, MAC_BENCH),
  'quant':          makePortPerf(QNT_BASE, QNT_INCREMENTS, QNT_BENCH),
};

// ── Team ──────────────────────────────────────────────────────────────────────
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Michael Deng',
    role: 'President & Portfolio Manager',
    bio: 'Final year Finance student. Oversees overall portfolio strategy and runs the macro book. Previously interned at a Sydney-based hedge fund.',
    linkedin: '#',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Equity Research',
    bio: 'Third year Commerce/Law student specialising in technology sector analysis. Leads due diligence on all long-term equity positions.',
    linkedin: '#',
  },
  {
    name: 'James Park',
    role: 'Head of Quantitative Analysis',
    bio: 'Computer Science & Finance double degree. Builds the risk models, performance attribution frameworks, and data pipelines.',
    linkedin: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Investor Relations',
    bio: 'Commerce student majoring in Marketing and Finance. Manages society communications, presentations, and recruitement.',
    linkedin: '#',
  },
];

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
