module.exports = [
"[project]/src/components/Background.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Background
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Background() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            background: 'var(--bg)'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/Background.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOLDINGS",
    ()=>HOLDINGS,
    "NEWS_ITEMS",
    ()=>NEWS_ITEMS,
    "PERFORMANCE_DATA",
    ()=>PERFORMANCE_DATA,
    "PORTFOLIOS",
    ()=>PORTFOLIOS,
    "TEAM_MEMBERS",
    ()=>TEAM_MEMBERS,
    "TICKER_TAPE",
    ()=>TICKER_TAPE
]);
const HOLDINGS = [
    {
        id: 'aapl',
        ticker: 'AAPL',
        name: 'Apple Inc.',
        assetClass: 'equity',
        shares: 50,
        avgCost: 172.50,
        currentPrice: 189.30,
        previousClose: 185.20,
        currency: 'USD',
        sector: 'Technology',
        portfolioIds: [
            'overall',
            'long-term'
        ],
        thesis: 'Strong ecosystem lock-in, services growth, and shareholder returns.',
        addedDate: '2024-10-22'
    },
    {
        id: 'msft',
        ticker: 'MSFT',
        name: 'Microsoft Corp.',
        assetClass: 'equity',
        shares: 30,
        avgCost: 385.00,
        currentPrice: 415.80,
        previousClose: 410.50,
        currency: 'USD',
        sector: 'Technology',
        portfolioIds: [
            'overall',
            'long-term'
        ],
        thesis: 'Azure cloud growth and AI integration via Copilot across enterprise.',
        addedDate: '2024-10-22'
    },
    {
        id: 'nvda',
        ticker: 'NVDA',
        name: 'NVIDIA Corp.',
        assetClass: 'equity',
        shares: 40,
        avgCost: 480.00,
        currentPrice: 875.40,
        previousClose: 850.10,
        currency: 'USD',
        sector: 'Technology',
        portfolioIds: [
            'overall',
            'long-term',
            'thematic'
        ],
        thesis: 'Dominant AI accelerator; data center demand runway still long.',
        addedDate: '2024-10-23'
    },
    {
        id: 'googl',
        ticker: 'GOOGL',
        name: 'Alphabet Inc.',
        assetClass: 'equity',
        shares: 45,
        avgCost: 138.00,
        currentPrice: 163.50,
        previousClose: 160.80,
        currency: 'USD',
        sector: 'Communication Services',
        portfolioIds: [
            'overall',
            'long-term'
        ],
        thesis: 'Search moat plus YouTube growth; Gemini AI integration underway.',
        addedDate: '2024-10-24'
    },
    {
        id: 'jpm',
        ticker: 'JPM',
        name: 'JPMorgan Chase',
        assetClass: 'equity',
        shares: 35,
        avgCost: 188.00,
        currentPrice: 213.60,
        previousClose: 211.40,
        currency: 'USD',
        sector: 'Financials',
        portfolioIds: [
            'overall',
            'long-term',
            'macro'
        ],
        thesis: 'Best-in-class bank with diversified revenue; benefits from higher rates.',
        addedDate: '2024-10-25'
    },
    {
        id: 'tsla',
        ticker: 'TSLA',
        name: 'Tesla Inc.',
        assetClass: 'equity',
        shares: 25,
        avgCost: 225.00,
        currentPrice: 248.50,
        previousClose: 256.80,
        currency: 'USD',
        sector: 'Consumer Discretionary',
        portfolioIds: [
            'overall',
            'short-term'
        ],
        thesis: 'Short-term play on FSD approval catalyst and energy storage growth.',
        addedDate: '2024-11-01'
    },
    {
        id: 'meta',
        ticker: 'META',
        name: 'Meta Platforms',
        assetClass: 'equity',
        shares: 20,
        avgCost: 510.00,
        currentPrice: 553.20,
        previousClose: 548.90,
        currency: 'USD',
        sector: 'Communication Services',
        portfolioIds: [
            'overall',
            'short-term'
        ],
        thesis: 'Ad revenue rebound; Llama AI moat; Reality Labs optionality.',
        addedDate: '2024-11-03'
    },
    {
        id: 'amzn',
        ticker: 'AMZN',
        name: 'Amazon.com Inc.',
        assetClass: 'equity',
        shares: 30,
        avgCost: 178.00,
        currentPrice: 196.40,
        previousClose: 193.10,
        currency: 'USD',
        sector: 'Consumer Discretionary',
        portfolioIds: [
            'overall',
            'short-term'
        ],
        thesis: 'AWS acceleration + margin expansion in retail division.',
        addedDate: '2024-11-05'
    },
    {
        id: 'gc-f',
        ticker: 'GC=F',
        name: 'Gold Futures',
        assetClass: 'commodity',
        shares: 5,
        avgCost: 1950.00,
        currentPrice: 2340.00,
        previousClose: 2310.50,
        currency: 'USD',
        sector: 'Commodities',
        portfolioIds: [
            'overall',
            'macro'
        ],
        thesis: 'Inflation hedge; de-dollarisation tailwind; central bank buying.',
        addedDate: '2024-10-22'
    },
    {
        id: 'si-f',
        ticker: 'SI=F',
        name: 'Silver Futures',
        assetClass: 'commodity',
        shares: 50,
        avgCost: 22.00,
        currentPrice: 28.40,
        previousClose: 27.90,
        currency: 'USD',
        sector: 'Commodities',
        portfolioIds: [
            'overall',
            'macro'
        ],
        thesis: 'Industrial demand from solar panels + monetary metal premium.',
        addedDate: '2024-11-10'
    },
    {
        id: 'cl-f',
        ticker: 'CL=F',
        name: 'Crude Oil WTI',
        assetClass: 'commodity',
        shares: 20,
        avgCost: 78.00,
        currentPrice: 74.20,
        previousClose: 75.60,
        currency: 'USD',
        sector: 'Commodities',
        portfolioIds: [
            'overall',
            'macro'
        ],
        thesis: 'OPEC+ supply discipline; geopolitical risk premium.',
        addedDate: '2024-11-15'
    },
    {
        id: 'arkk',
        ticker: 'ARKK',
        name: 'ARK Innovation ETF',
        assetClass: 'etf',
        shares: 100,
        avgCost: 42.00,
        currentPrice: 47.80,
        previousClose: 46.90,
        currency: 'USD',
        sector: 'Disruptive Innovation',
        portfolioIds: [
            'overall',
            'thematic'
        ],
        thesis: 'Exposure to genomics, robotics, and fintech innovation basket.',
        addedDate: '2024-11-20'
    },
    {
        id: 'spy',
        ticker: 'SPY',
        name: 'SPDR S&P 500 ETF',
        assetClass: 'etf',
        shares: 15,
        avgCost: 450.00,
        currentPrice: 521.30,
        previousClose: 518.40,
        currency: 'USD',
        sector: 'Broad Market',
        portfolioIds: [
            'overall',
            'long-term'
        ],
        thesis: 'Core market exposure; diversification anchor for the portfolio.',
        addedDate: '2024-10-22'
    }
];
const PORTFOLIOS = [
    {
        id: 'overall',
        name: 'Master Fund',
        description: 'The complete SF Capital portfolio across all strategies and asset classes.',
        inception: '2024-10-22',
        targetReturn: '15% p.a.',
        strategy: 'Multi-Strategy',
        holdingIds: HOLDINGS.map((h)=>h.id)
    },
    {
        id: 'short-term',
        name: 'Short-Term Alpha',
        description: 'High-conviction, catalyst-driven trades with 1–3 month horizons.',
        inception: '2024-11-01',
        targetReturn: '20% p.a.',
        strategy: 'Tactical / Event-Driven',
        holdingIds: [
            'tsla',
            'meta',
            'amzn'
        ]
    },
    {
        id: 'long-term',
        name: 'Long-Term Compounders',
        description: 'Quality businesses held for 2–5 years, benefiting from structural trends.',
        inception: '2024-10-22',
        targetReturn: '12% p.a.',
        strategy: 'Buy & Hold / Quality Growth',
        holdingIds: [
            'aapl',
            'msft',
            'nvda',
            'googl',
            'jpm',
            'spy'
        ]
    },
    {
        id: 'macro',
        name: 'Macro & Commodities',
        description: 'Macro-driven positions in commodities and financials to hedge inflation.',
        inception: '2024-10-22',
        targetReturn: '10% p.a.',
        strategy: 'Global Macro / Commodities',
        holdingIds: [
            'gc-f',
            'si-f',
            'cl-f',
            'jpm'
        ]
    },
    {
        id: 'thematic',
        name: 'AI & Disruptive Tech',
        description: 'Pure-play exposure to artificial intelligence and disruptive innovation.',
        inception: '2024-11-20',
        targetReturn: '25% p.a.',
        strategy: 'Thematic / Growth',
        holdingIds: [
            'nvda',
            'arkk'
        ]
    }
];
// ── Performance Data (91 fixed daily points) ─────────────────────────────────
// Start: 2024-10-22. All values deterministic — NO new Date() or Math.random()
const PERF_BASE_VALUE = 100000;
const PERF_INCREMENTS = [
    120,
    -80,
    200,
    350,
    -150,
    420,
    180,
    -90,
    310,
    250,
    -200,
    380,
    140,
    -60,
    290,
    410,
    -170,
    230,
    160,
    380,
    -110,
    270,
    320,
    -80,
    450,
    190,
    -220,
    340,
    280,
    150,
    -130,
    390,
    210,
    -70,
    480,
    170,
    -300,
    260,
    330,
    -90,
    410,
    200,
    -140,
    370,
    240,
    -80,
    430,
    180,
    -250,
    310,
    290,
    -120,
    400,
    220,
    -60,
    470,
    160,
    -280,
    350,
    270,
    140,
    -100,
    420,
    230,
    -50,
    490,
    150,
    -260,
    370,
    260,
    130,
    -90,
    440,
    210,
    -40,
    500,
    140,
    -240,
    390,
    250,
    120,
    -80,
    460,
    220,
    -30,
    510,
    130,
    -220,
    410,
    240,
    110
];
const BENCH_INCREMENTS = [
    80,
    -50,
    140,
    200,
    -90,
    280,
    110,
    -60,
    200,
    170,
    -130,
    250,
    90,
    -40,
    190,
    270,
    -110,
    160,
    110,
    240,
    -70,
    180,
    210,
    -50,
    290,
    130,
    -140,
    220,
    180,
    100,
    -80,
    250,
    140,
    -40,
    310,
    120,
    -190,
    170,
    210,
    -60,
    270,
    130,
    -90,
    240,
    160,
    -50,
    280,
    120,
    -160,
    200,
    190,
    -80,
    260,
    150,
    -40,
    300,
    110,
    -180,
    230,
    180,
    90,
    -60,
    280,
    150,
    -30,
    320,
    100,
    -170,
    240,
    170,
    80,
    -50,
    290,
    140,
    -20,
    330,
    90,
    -150,
    260,
    160,
    70,
    -40,
    310,
    150,
    -10,
    340,
    80,
    -140,
    280,
    150,
    60
];
const START_YEAR = 2024;
const START_MONTH = 9; // 0-indexed October
const START_DAY = 22;
function addDays(year, month, day, days) {
    const months = [
        31,
        29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
    let d = day + days;
    let m = month;
    let y = year;
    while(d > months[m]){
        d -= months[m];
        m++;
        if (m > 11) {
            m = 0;
            y++;
        }
    }
    return {
        y,
        m,
        d
    };
}
function toIso(y, m, d) {
    return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}
const PERFORMANCE_DATA = Array.from({
    length: 91
}, (_, i)=>{
    const { y, m, d } = addDays(START_YEAR, START_MONTH, START_DAY, i);
    const value = PERF_INCREMENTS.slice(0, i).reduce((acc, v)=>acc + v, PERF_BASE_VALUE);
    const benchmark = BENCH_INCREMENTS.slice(0, i).reduce((acc, v)=>acc + v, PERF_BASE_VALUE);
    return {
        date: toIso(y, m, d),
        value,
        benchmark
    };
});
const NEWS_ITEMS = [
    {
        id: 'n1',
        title: 'NVIDIA Surges as AI Chip Demand Exceeds All Forecasts',
        summary: 'NVIDIA\'s data center revenue grew 122% YoY as hyperscalers continue to accelerate GPU orders for LLM training and inference workloads.',
        source: 'Bloomberg',
        url: '#',
        publishedAt: '2025-01-18T09:30:00Z',
        sentiment: 'positive',
        tickers: [
            'NVDA'
        ]
    },
    {
        id: 'n2',
        title: 'Federal Reserve Minutes Signal Patience on Rate Cuts',
        summary: 'FOMC minutes revealed committee members want more progress on inflation before cutting rates, pushing Treasury yields higher.',
        source: 'Reuters',
        url: '#',
        publishedAt: '2025-01-17T14:00:00Z',
        sentiment: 'negative',
        tickers: [
            'JPM',
            'SPY'
        ]
    },
    {
        id: 'n3',
        title: 'Apple Reports Record Services Revenue in Q1 Earnings',
        summary: 'Apple\'s services segment hit $26.3B, up 17% YoY, driven by App Store, Apple TV+, and iCloud subscriptions as hardware remains steady.',
        source: 'CNBC',
        url: '#',
        publishedAt: '2025-01-16T21:00:00Z',
        sentiment: 'positive',
        tickers: [
            'AAPL'
        ]
    },
    {
        id: 'n4',
        title: 'Gold Hits All-Time High as Dollar Weakens',
        summary: 'Spot gold breached $2,400/oz amid central bank buying from China and Russia, with safe-haven demand elevated due to geopolitical tensions.',
        source: 'Financial Times',
        url: '#',
        publishedAt: '2025-01-15T11:00:00Z',
        sentiment: 'positive',
        tickers: [
            'GC=F'
        ]
    },
    {
        id: 'n5',
        title: 'Tesla Misses Delivery Estimates, Shares Slide 8%',
        summary: 'Tesla delivered 484,507 vehicles in Q4, missing analyst estimates of 510,000, citing production challenges at Giga Berlin and pricing pressure.',
        source: 'WSJ',
        url: '#',
        publishedAt: '2025-01-14T19:00:00Z',
        sentiment: 'negative',
        tickers: [
            'TSLA'
        ]
    },
    {
        id: 'n6',
        title: 'Microsoft Azure Growth Reaccelerates to 33% in Latest Quarter',
        summary: 'Azure\'s reacceleration driven by Copilot enterprise adoption and OpenAI partnership demand — analysts raise price targets across the board.',
        source: 'Seeking Alpha',
        url: '#',
        publishedAt: '2025-01-13T16:30:00Z',
        sentiment: 'positive',
        tickers: [
            'MSFT'
        ]
    },
    {
        id: 'n7',
        title: 'Crude Oil Steadies Amid OPEC+ Compliance Concerns',
        summary: 'WTI crude oscillated around $74 as traders weighed OPEC+ output discipline against weakening Chinese demand signals.',
        source: 'Reuters',
        url: '#',
        publishedAt: '2025-01-12T10:00:00Z',
        sentiment: 'neutral',
        tickers: [
            'CL=F'
        ]
    },
    {
        id: 'n8',
        title: 'Meta\'s AI Advertising Tools Drive Strong Q4 Ad Revenue',
        summary: 'Meta\'s Advantage+ AI ad suite continues to take market share, with ROAS improving materially for SMBs on Facebook and Instagram.',
        source: 'TechCrunch',
        url: '#',
        publishedAt: '2025-01-11T13:00:00Z',
        sentiment: 'positive',
        tickers: [
            'META'
        ]
    },
    {
        id: 'n9',
        title: 'Amazon AWS Wins Major Government Cloud Contract',
        summary: 'AWS secured a $10B multi-year contract with the US Department of Defense, reinforcing its cloud leadership position.',
        source: 'Bloomberg',
        url: '#',
        publishedAt: '2025-01-10T08:00:00Z',
        sentiment: 'positive',
        tickers: [
            'AMZN'
        ]
    },
    {
        id: 'n10',
        title: 'Alphabet Launches Gemini Ultra 2.0, Benchmarks Surpass GPT-4',
        summary: 'Google\'s new Gemini Ultra 2.0 model outperforms competitors on MMLU, HumanEval, and reasoning benchmarks, boosting AI narrative.',
        source: 'The Verge',
        url: '#',
        publishedAt: '2025-01-09T17:00:00Z',
        sentiment: 'positive',
        tickers: [
            'GOOGL'
        ]
    }
];
const TEAM_MEMBERS = [
    {
        name: 'Michael Deng',
        role: 'President & Portfolio Manager',
        bio: 'Final year Finance student. Oversees overall portfolio strategy and runs the macro book. Previously interned at a Sydney-based hedge fund.',
        linkedin: '#'
    },
    {
        name: 'Sarah Chen',
        role: 'Head of Equity Research',
        bio: 'Third year Commerce/Law student specialising in technology sector analysis. Leads due diligence on all long-term equity positions.',
        linkedin: '#'
    },
    {
        name: 'James Park',
        role: 'Head of Quantitative Analysis',
        bio: 'Computer Science & Finance double degree. Builds the risk models, performance attribution frameworks, and data pipelines.',
        linkedin: '#'
    },
    {
        name: 'Priya Sharma',
        role: 'Head of Investor Relations',
        bio: 'Commerce student majoring in Marketing and Finance. Manages society communications, presentations, and recruitement.',
        linkedin: '#'
    }
];
const TICKER_TAPE = [
    {
        ticker: 'AAPL',
        price: 189.30,
        change: 4.10,
        changePct: 2.21
    },
    {
        ticker: 'MSFT',
        price: 415.80,
        change: 5.30,
        changePct: 1.29
    },
    {
        ticker: 'NVDA',
        price: 875.40,
        change: 25.30,
        changePct: 2.98
    },
    {
        ticker: 'GOOGL',
        price: 163.50,
        change: 2.70,
        changePct: 1.68
    },
    {
        ticker: 'JPM',
        price: 213.60,
        change: 2.20,
        changePct: 1.04
    },
    {
        ticker: 'TSLA',
        price: 248.50,
        change: -8.30,
        changePct: -3.23
    },
    {
        ticker: 'META',
        price: 553.20,
        change: 4.30,
        changePct: 0.78
    },
    {
        ticker: 'AMZN',
        price: 196.40,
        change: 3.30,
        changePct: 1.71
    },
    {
        ticker: 'GC=F',
        price: 2340.00,
        change: 29.50,
        changePct: 1.28
    },
    {
        ticker: 'SI=F',
        price: 28.40,
        change: 0.50,
        changePct: 1.79
    },
    {
        ticker: 'CL=F',
        price: 74.20,
        change: -1.40,
        changePct: -1.85
    },
    {
        ticker: 'ARKK',
        price: 47.80,
        change: 0.90,
        changePct: 1.92
    },
    {
        ticker: 'SPY',
        price: 521.30,
        change: 2.90,
        changePct: 0.56
    },
    {
        ticker: 'BTC',
        price: 67450.00,
        change: 1250.00,
        changePct: 1.89
    },
    {
        ticker: 'ETH',
        price: 3480.00,
        change: -120.00,
        changePct: -3.33
    },
    {
        ticker: 'QQQ',
        price: 449.80,
        change: 3.10,
        changePct: 0.69
    },
    {
        ticker: 'VIX',
        price: 14.82,
        change: -0.42,
        changePct: -2.75
    },
    {
        ticker: 'DXY',
        price: 104.35,
        change: 0.22,
        changePct: 0.21
    }
];
}),
"[project]/src/components/TickerTape.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TickerTape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const DURATION = 55; // seconds — must match the CSS animation duration
function TickerTape() {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TICKER_TAPE"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TICKER_TAPE"]
        ], []);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!trackRef.current) return;
        // Derive offset from a fixed epoch so the ticker position is identical
        // on every page mount/navigation, regardless of when the component mounts.
        const EPOCH = 1_700_000_000_000; // fixed ms reference — never changes
        const elapsed = (Date.now() - EPOCH) / 1000; // seconds since epoch
        const offset = elapsed % DURATION; // position within one cycle
        trackRef.current.style.animationDelay = `-${offset}s`;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: '32px',
            background: 'rgba(9,9,11,0.98)',
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: trackRef,
            className: "ticker-track",
            children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '0 20px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '11px',
                                fontWeight: 700,
                                color: 'var(--text-primary)',
                                fontFamily: 'ui-monospace, monospace',
                                letterSpacing: '0.05em'
                            },
                            children: item.ticker
                        }, void 0, false, {
                            fileName: "[project]/src/components/TickerTape.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '11px',
                                color: 'var(--text-secondary)',
                                fontVariantNumeric: 'tabular-nums'
                            },
                            children: item.price.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/TickerTape.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '10px',
                                fontWeight: 600,
                                color: item.change >= 0 ? 'var(--gain)' : 'var(--loss)',
                                fontVariantNumeric: 'tabular-nums'
                            },
                            children: [
                                item.change >= 0 ? '+' : '',
                                item.changePct.toFixed(2),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TickerTape.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: 'var(--border-strong)',
                                fontSize: '10px'
                            },
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TickerTape.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/TickerTape.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/TickerTape.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TickerTape.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEADER_HEIGHT",
    ()=>HEADER_HEIGHT,
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TickerTape$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TickerTape.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const NAV_LINKS = [
    {
        label: 'Our Portfolios',
        href: '/portfolios'
    },
    {
        label: 'Our Performance',
        href: '/performance'
    },
    {
        label: 'News',
        href: '/news'
    },
    {
        label: 'About Us',
        href: '/about'
    }
];
const HEADER_HEIGHT = 104;
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastY, setLastY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
            const y = window.scrollY;
            // Hide when scrolling down past 80px, show when scrolling back up
            if (y > 80 && y > lastY) {
                setHidden(true);
                setOpen(false);
            } else {
                setHidden(false);
            }
            setLastY(y);
        };
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', onScroll);
    }, [
        lastY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
            transition: 'transform 280ms cubic-bezier(0.4, 0, 0.2, 1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: '72px',
                    background: 'rgba(9,9,11,0.95)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: '1px solid var(--border)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    style: {
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-6)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                textDecoration: 'none',
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '26px',
                                        fontWeight: 800,
                                        color: 'var(--text-primary)',
                                        letterSpacing: '-0.035em',
                                        lineHeight: 1
                                    },
                                    children: "SF Capital"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        background: 'var(--accent)',
                                        flexShrink: 0,
                                        marginTop: '2px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hide-mobile",
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2px'
                            },
                            children: NAV_LINKS.map((link)=>{
                                const active = pathname === link.href || link.href !== '/' && pathname.startsWith(link.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "nav-item",
                                    style: {
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                                        padding: '6px 14px',
                                        borderRadius: 'var(--radius-md)',
                                        background: 'transparent',
                                        transition: 'color 200ms ease',
                                        textDecoration: 'none',
                                        whiteSpace: 'nowrap',
                                        letterSpacing: '-0.01em'
                                    },
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "show-mobile",
                            onClick: ()=>setOpen((o)=>!o),
                            "aria-label": "Toggle menu",
                            style: {
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                padding: 'var(--space-2)'
                            },
                            children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 101,
                                columnNumber: 39
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TickerTape$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--bg-subtle)',
                    borderBottom: '1px solid var(--border)',
                    padding: 'var(--space-3) var(--space-4)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                },
                children: NAV_LINKS.map((link)=>{
                    const active = pathname === link.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        onClick: ()=>setOpen(false),
                        style: {
                            padding: '12px 14px',
                            borderRadius: 'var(--radius-md)',
                            fontSize: '16px',
                            fontWeight: active ? 500 : 400,
                            color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                            background: 'transparent',
                            textDecoration: 'none',
                            display: 'block'
                        },
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 120,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcDayChange",
    ()=>calcDayChange,
    "calcDayChangePercent",
    ()=>calcDayChangePercent,
    "calcHoldingCost",
    ()=>calcHoldingCost,
    "calcHoldingPnL",
    ()=>calcHoldingPnL,
    "calcHoldingPnLPercent",
    ()=>calcHoldingPnLPercent,
    "calcHoldingValue",
    ()=>calcHoldingValue
]);
const calcHoldingValue = (h)=>h.shares * h.currentPrice;
const calcHoldingCost = (h)=>h.shares * h.avgCost;
const calcHoldingPnL = (h)=>calcHoldingValue(h) - calcHoldingCost(h);
const calcHoldingPnLPercent = (h)=>calcHoldingCost(h) === 0 ? 0 : calcHoldingPnL(h) / calcHoldingCost(h) * 100;
const calcDayChange = (h)=>(h.currentPrice - h.previousClose) * h.shares;
const calcDayChangePercent = (h)=>h.previousClose === 0 ? 0 : (h.currentPrice - h.previousClose) / h.previousClose * 100;
}),
"[project]/src/components/HoldingsTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HoldingsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ASSET_CLASS_COLORS = {
    equity: {
        text: '#60a5fa',
        bg: 'rgba(59,130,246,0.10)'
    },
    commodity: {
        text: '#fbbf24',
        bg: 'rgba(251,191,36,0.10)'
    },
    etf: {
        text: '#a78bfa',
        bg: 'rgba(167,139,250,0.10)'
    },
    crypto: {
        text: 'var(--gain)',
        bg: 'var(--gain-dim)'
    },
    bond: {
        text: '#818cf8',
        bg: 'rgba(79,70,229,0.10)'
    },
    cash: {
        text: 'var(--text-secondary)',
        bg: 'rgba(255,255,255,0.05)'
    }
};
function HoldingsTable({ holdings: propHoldings, holdingIds }) {
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('value');
    const [sortAsc, setSortAsc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const source = propHoldings ?? (holdingIds ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOLDINGS"].filter((h)=>holdingIds.includes(h.id)) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOLDINGS"]);
    const totalValue = source.reduce((sum, h)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingValue"])(h), 0);
    const sorted = [
        ...source
    ].sort((a, b)=>{
        let av = 0, bv = 0;
        if (sortKey === 'ticker') return sortAsc ? a.ticker.localeCompare(b.ticker) : b.ticker.localeCompare(a.ticker);
        if (sortKey === 'value') {
            av = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingValue"])(a);
            bv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingValue"])(b);
        }
        if (sortKey === 'pnlPct') {
            av = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingPnLPercent"])(a);
            bv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingPnLPercent"])(b);
        }
        if (sortKey === 'dayPct') {
            av = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(a);
            bv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(b);
        }
        if (sortKey === 'weight') {
            av = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingValue"])(a) / totalValue;
            bv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingValue"])(b) / totalValue;
        }
        return sortAsc ? av - bv : bv - av;
    });
    function SortTh({ label, k, right }) {
        const active = sortKey === k;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: right ? 'right' : '',
            onClick: ()=>{
                if (sortKey === k) setSortAsc((a)=>!a);
                else {
                    setSortKey(k);
                    setSortAsc(false);
                }
            },
            style: {
                cursor: 'pointer',
                userSelect: 'none',
                paddingLeft: right ? 0 : undefined
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: active ? 'var(--text-primary)' : undefined
                },
                children: [
                    label,
                    active ? sortAsc ? ' ↑' : ' ↓' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HoldingsTable.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/HoldingsTable.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "surface",
        style: {
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 'var(--space-5) var(--space-6)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "eyebrow",
                                style: {
                                    marginBottom: '2px'
                                },
                                children: "Holdings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 'var(--text-lg)',
                                    fontWeight: 700
                                },
                                children: "Portfolio Positions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HoldingsTable.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: [
                            source.length,
                            " positions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HoldingsTable.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HoldingsTable.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    overflowX: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "data-table",
                    style: {
                        minWidth: '680px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
                                        label: "Ticker",
                                        k: "ticker"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
                                        label: "Value",
                                        k: "value",
                                        right: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
                                        label: "Total P&L",
                                        k: "pnlPct",
                                        right: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
                                        label: "Day",
                                        k: "dayPct",
                                        right: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
                                        label: "Weight",
                                        k: "weight",
                                        right: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HoldingsTable.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: sorted.map((h)=>{
                                const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingValue"])(h);
                                const pnl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingPnL"])(h);
                                const pnlPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingPnLPercent"])(h);
                                const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcDayChange"])(h);
                                const dayPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(h);
                                const weight = value / totalValue * 100;
                                const isOpen = expandedId === h.id;
                                const cls = ASSET_CLASS_COLORS[h.assetClass] ?? ASSET_CLASS_COLORS.cash;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            onClick: ()=>setExpandedId(isOpen ? null : h.id),
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '10px',
                                                                    color: isOpen ? 'var(--accent-text)' : 'var(--text-tertiary)',
                                                                    transition: 'color var(--transition)'
                                                                },
                                                                children: "▶"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'monospace',
                                                                    fontWeight: 700,
                                                                    fontSize: 'var(--text-sm)',
                                                                    color: 'var(--text-primary)',
                                                                    letterSpacing: '0.04em'
                                                                },
                                                                children: h.ticker
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    fontWeight: 600,
                                                                    padding: '1px 5px',
                                                                    borderRadius: 'var(--radius-sm)',
                                                                    color: cls.text,
                                                                    background: cls.bg,
                                                                    textTransform: 'uppercase',
                                                                    letterSpacing: '0.06em'
                                                                },
                                                                children: h.assetClass
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HoldingsTable.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        color: 'var(--text-secondary)',
                                                        maxWidth: '160px',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap'
                                                    },
                                                    children: h.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HoldingsTable.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "right tabular-nums",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontWeight: 600
                                                            },
                                                            children: [
                                                                "$",
                                                                value.toLocaleString('en-US', {
                                                                    maximumFractionDigits: 0
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/HoldingsTable.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 'var(--text-xs)',
                                                                color: 'var(--text-tertiary)'
                                                            },
                                                            children: [
                                                                h.shares,
                                                                " × $",
                                                                h.currentPrice.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/HoldingsTable.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HoldingsTable.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "right tabular-nums",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: 600,
                                                                color: pnlPct >= 0 ? 'var(--gain)' : 'var(--loss)'
                                                            },
                                                            children: [
                                                                pnlPct >= 0 ? '+' : '',
                                                                pnlPct.toFixed(2),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/HoldingsTable.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 'var(--text-xs)',
                                                                color: 'var(--text-tertiary)'
                                                            },
                                                            children: [
                                                                pnl >= 0 ? '+' : '',
                                                                "$",
                                                                pnl.toLocaleString('en-US', {
                                                                    maximumFractionDigits: 0
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/HoldingsTable.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HoldingsTable.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "right tabular-nums",
                                                    style: {
                                                        color: dayPct >= 0 ? 'var(--gain)' : 'var(--loss)',
                                                        fontWeight: 500
                                                    },
                                                    children: [
                                                        dayPct >= 0 ? '+' : '',
                                                        dayPct.toFixed(2),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HoldingsTable.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            justifyContent: 'flex-end'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '48px',
                                                                    height: '2px',
                                                                    background: 'var(--border-strong)',
                                                                    borderRadius: '1px',
                                                                    overflow: 'hidden'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        height: '100%',
                                                                        width: `${Math.min(weight * 2, 100)}%`,
                                                                        background: 'var(--accent)',
                                                                        borderRadius: '1px'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/HoldingsTable.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "tabular-nums",
                                                                style: {
                                                                    fontSize: 'var(--text-xs)',
                                                                    color: 'var(--text-secondary)',
                                                                    minWidth: '32px'
                                                                },
                                                                children: [
                                                                    weight.toFixed(1),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HoldingsTable.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HoldingsTable.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                background: 'var(--bg-subtle)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 6,
                                                style: {
                                                    padding: 'var(--space-4) var(--space-6) var(--space-5)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                                                            gap: 'var(--space-5)',
                                                            marginBottom: h.thesis ? 'var(--space-4)' : 0
                                                        },
                                                        children: [
                                                            {
                                                                label: 'Avg. Cost',
                                                                value: `$${h.avgCost.toFixed(2)}`
                                                            },
                                                            {
                                                                label: 'Current',
                                                                value: `$${h.currentPrice.toFixed(2)}`
                                                            },
                                                            {
                                                                label: 'Sector',
                                                                value: h.sector ?? '—'
                                                            },
                                                            {
                                                                label: 'Currency',
                                                                value: h.currency
                                                            },
                                                            {
                                                                label: 'Added',
                                                                value: h.addedDate
                                                            }
                                                        ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "eyebrow",
                                                                        style: {
                                                                            marginBottom: '3px'
                                                                        },
                                                                        children: d.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: 'var(--text-sm)',
                                                                            color: 'var(--text-primary)'
                                                                        },
                                                                        children: d.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                                                        lineNumber: 169,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, d.label, true, {
                                                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 25
                                                    }, this),
                                                    h.thesis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 'var(--text-sm)',
                                                            color: 'var(--text-secondary)',
                                                            lineHeight: 1.6,
                                                            borderTop: '1px solid var(--border)',
                                                            paddingTop: 'var(--space-4)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'var(--text-tertiary)',
                                                                    marginRight: '8px',
                                                                    fontWeight: 600,
                                                                    fontSize: 'var(--text-xs)',
                                                                    textTransform: 'uppercase',
                                                                    letterSpacing: '0.08em'
                                                                },
                                                                children: "Thesis"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 29
                                                            }, this),
                                                            h.thesis
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HoldingsTable.tsx",
                                                lineNumber: 158,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HoldingsTable.tsx",
                                            lineNumber: 157,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, h.id, true, {
                                    fileName: "[project]/src/components/HoldingsTable.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/HoldingsTable.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HoldingsTable.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HoldingsTable.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HoldingsTable.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
// Footer is used in both server and client pages.
// Hover colour changes are handled via CSS so no event handlers are needed.
const LINKS = [
    {
        label: 'Our Portfolios',
        href: '/portfolios'
    },
    {
        label: 'Our Performance',
        href: '/performance'
    },
    {
        label: 'News',
        href: '/news'
    },
    {
        label: 'About Us',
        href: '/about'
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            borderTop: '1px solid var(--border)',
            marginTop: 'var(--space-9)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            style: {
                padding: 'var(--space-7) var(--space-6)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: 'var(--space-7)',
                        flexWrap: 'wrap'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: '280px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '16px',
                                        fontWeight: 800,
                                        color: 'var(--text-primary)',
                                        letterSpacing: '-0.02em',
                                        marginBottom: 'var(--space-2)'
                                    },
                                    children: "SF Capital"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 'var(--text-sm)',
                                        color: 'var(--text-tertiary)',
                                        lineHeight: 1.65
                                    },
                                    children: "University of Sydney student-managed demo fund. A division of the FXIA Society."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 'var(--space-3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-2)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "live-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 'var(--text-xs)',
                                                color: 'var(--text-tertiary)',
                                                letterSpacing: '0.05em'
                                            },
                                            children: "Fund Year 2026 · Mar 1 – Dec 31"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 'var(--space-7)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "eyebrow",
                                        style: {
                                            marginBottom: 'var(--space-3)'
                                        },
                                        children: "Navigate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 'var(--space-2)'
                                        },
                                        children: LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: l.href,
                                                className: "footer-link",
                                                style: {
                                                    fontSize: 'var(--text-sm)',
                                                    textDecoration: 'none'
                                                },
                                                children: l.label
                                            }, l.href, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 'var(--space-6)',
                        paddingTop: 'var(--space-5)',
                        borderTop: '1px solid var(--border)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 'var(--space-3)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 'var(--text-xs)',
                                color: 'var(--text-tertiary)'
                            },
                            children: "© 2026 SF Capital · University of Sydney · FXIA Society"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 'var(--text-xs)',
                                color: 'var(--text-tertiary)'
                            },
                            children: "For educational purposes only. Not financial advice."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/portfolios/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfoliosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Background.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HoldingsTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HoldingsTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function PortfoliosClient({ initialHoldings }) {
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('overall');
    const portfolio = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PORTFOLIOS"].find((p)=>p.id === activeId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PORTFOLIOS"][0];
    const holdings = initialHoldings.filter((h)=>portfolio.holdingIds.includes(h.id));
    const totalValue = holdings.reduce((sum, h)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingValue"])(h), 0);
    const avgPnLPct = holdings.length ? holdings.reduce((sum, h)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcHoldingPnLPercent"])(h), 0) / holdings.length : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    position: 'relative',
                    zIndex: 1,
                    paddingTop: '104px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    style: {
                        paddingTop: 'var(--space-8)',
                        paddingBottom: 'var(--space-9)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 'var(--space-7)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "eyebrow",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "Fund Year 2026"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/portfolios/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: 'var(--text-3xl)',
                                        fontWeight: 800,
                                        letterSpacing: '-0.025em'
                                    },
                                    children: "Our Portfolios"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/portfolios/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/portfolios/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '2px',
                                borderBottom: '1px solid var(--border)',
                                marginBottom: 'var(--space-6)',
                                overflowX: 'auto'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PORTFOLIOS"].map((p)=>{
                                const isActive = activeId === p.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveId(p.id),
                                    style: {
                                        padding: '9px 16px',
                                        fontSize: 'var(--text-sm)',
                                        fontWeight: isActive ? 600 : 400,
                                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                                        background: 'none',
                                        border: 'none',
                                        borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                                        marginBottom: '-1px',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                        transition: 'color var(--transition), border-color var(--transition)'
                                    },
                                    children: p.name
                                }, p.id, false, {
                                    fileName: "[project]/src/app/portfolios/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/portfolios/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                                gap: '1px',
                                background: 'var(--border)',
                                marginBottom: 'var(--space-5)'
                            },
                            children: [
                                {
                                    label: 'AUM',
                                    value: `$${totalValue.toLocaleString('en-US', {
                                        maximumFractionDigits: 0
                                    })}`,
                                    color: 'var(--text-primary)'
                                },
                                {
                                    label: 'Avg P&L',
                                    value: `${avgPnLPct >= 0 ? '+' : ''}${avgPnLPct.toFixed(2)}%`,
                                    color: avgPnLPct >= 0 ? 'var(--gain)' : 'var(--loss)'
                                },
                                {
                                    label: 'Target Return',
                                    value: portfolio.targetReturn,
                                    color: 'var(--accent-text)'
                                },
                                {
                                    label: 'Strategy',
                                    value: portfolio.strategy,
                                    color: 'var(--text-primary)'
                                },
                                {
                                    label: 'Inception',
                                    value: portfolio.inception,
                                    color: 'var(--text-secondary)'
                                },
                                {
                                    label: 'Positions',
                                    value: `${holdings.length}`,
                                    color: 'var(--text-primary)'
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'var(--bg-raised)',
                                        padding: 'var(--space-4) var(--space-5)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "eyebrow",
                                            style: {
                                                marginBottom: 'var(--space-2)'
                                            },
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/portfolios/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 'var(--text-base)',
                                                fontWeight: 600,
                                                color: item.color
                                            },
                                            children: item.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/portfolios/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/src/app/portfolios/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/portfolios/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 'var(--text-sm)',
                                color: 'var(--text-secondary)',
                                marginBottom: 'var(--space-6)',
                                lineHeight: 1.7
                            },
                            children: portfolio.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/portfolios/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HoldingsTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            holdings: holdings
                        }, void 0, false, {
                            fileName: "[project]/src/app/portfolios/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/portfolios/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/portfolios/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/portfolios/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function PortfoliosPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/portfolios/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/portfolios/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfoliosClient, {
                initialHoldings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOLDINGS"]
            }, void 0, false, {
                fileName: "[project]/src/app/portfolios/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_df9086c7._.js.map