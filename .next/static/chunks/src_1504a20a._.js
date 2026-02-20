(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    height: '64px',
                    background: 'rgba(9,9,11,0.90)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderBottom: '1px solid var(--border)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    style: {
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            style: {
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '3px',
                                textDecoration: 'none',
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '22px',
                                        fontWeight: 800,
                                        color: 'var(--text-primary)',
                                        letterSpacing: '-0.03em'
                                    },
                                    children: "SF Capital"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: '5px',
                                        height: '5px',
                                        borderRadius: '50%',
                                        background: 'var(--accent)',
                                        display: 'inline-block',
                                        marginBottom: '3px',
                                        marginLeft: '1px',
                                        flexShrink: 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hide-mobile",
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-1)'
                            },
                            children: NAV_LINKS.map((link)=>{
                                const active = pathname === link.href || link.href !== '/' && pathname.startsWith(link.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    style: {
                                        fontSize: 'var(--text-sm)',
                                        fontWeight: active ? 600 : 400,
                                        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                                        padding: '6px 14px',
                                        borderRadius: 'var(--radius-md)',
                                        background: active ? 'rgba(255,255,255,0.05)' : 'transparent',
                                        transition: 'color var(--transition), background var(--transition)',
                                        textDecoration: 'none',
                                        whiteSpace: 'nowrap'
                                    },
                                    onMouseEnter: (e)=>{
                                        if (!active) e.currentTarget.style.color = 'var(--text-primary)';
                                    },
                                    onMouseLeave: (e)=>{
                                        if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
                                    },
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "show-mobile",
                            onClick: ()=>setOpen((o)=>!o),
                            "aria-label": "Toggle menu",
                            style: {
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                padding: 'var(--space-2)',
                                marginLeft: 'var(--space-3)'
                            },
                            children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 73,
                                columnNumber: 39
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: '64px',
                    left: 0,
                    right: 0,
                    zIndex: 49,
                    background: 'var(--bg-subtle)',
                    borderBottom: '1px solid var(--border)',
                    padding: 'var(--space-3) var(--space-4)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                },
                children: NAV_LINKS.map((link)=>{
                    const active = pathname === link.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        onClick: ()=>setOpen(false),
                        style: {
                            padding: '11px 14px',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--text-base)',
                            fontWeight: active ? 600 : 400,
                            color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                            background: active ? 'rgba(255,255,255,0.05)' : 'transparent',
                            borderLeft: active ? '2px solid var(--accent)' : '2px solid transparent',
                            textDecoration: 'none'
                        },
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 90,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "v3TFSdztexVkGEr5cLhcJl2cWfw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    return "".concat(y, "-").concat(String(m + 1).padStart(2, '0'), "-").concat(String(d).padStart(2, '0'));
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TickerTape.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TickerTape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TickerTape() {
    _s();
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TickerTape.useMemo[items]": ()=>[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TICKER_TAPE"],
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TICKER_TAPE"]
            ]
    }["TickerTape.useMemo[items]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: '56px',
            left: 0,
            right: 0,
            height: '32px',
            zIndex: 40,
            background: 'var(--bg-subtle)',
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ticker-track",
            children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '0 20px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 'var(--text-xs)',
                                fontWeight: 700,
                                color: 'var(--text-primary)',
                                fontFamily: 'monospace',
                                letterSpacing: '0.06em'
                            },
                            children: item.ticker
                        }, void 0, false, {
                            fileName: "[project]/src/components/TickerTape.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 'var(--text-xs)',
                                color: 'var(--text-secondary)',
                                fontVariantNumeric: 'tabular-nums'
                            },
                            children: item.price.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/TickerTape.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: 'var(--border-strong)',
                                fontSize: '10px',
                                padding: '0 4px'
                            },
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TickerTape.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/TickerTape.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/TickerTape.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TickerTape.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(TickerTape, "JuH2Tip3cwnoihIGVm6QoIvsF5k=");
_c = TickerTape;
var _c;
__turbopack_context__.k.register(_c, "TickerTape");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-countup/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Hero(param) {
    let { holdings } = param;
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            setMounted(true);
        }
    }["Hero.useEffect"], []);
    const totalValue = holdings.reduce((sum, h)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingValue"])(h), 0);
    const totalCost = holdings.reduce((sum, h)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingCost"])(h), 0);
    const totalPnL = holdings.reduce((sum, h)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingPnL"])(h), 0);
    const totalPnLPct = totalCost === 0 ? 0 : totalPnL / totalCost * 100;
    const dayChange = holdings.reduce((sum, h)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChange"])(h), 0);
    const dayPct = totalValue - dayChange === 0 ? 0 : dayChange / (totalValue - dayChange) * 100;
    const isUp = totalPnL >= 0;
    const dayUp = dayChange >= 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            paddingTop: 'var(--space-9)',
            paddingBottom: 'var(--space-7)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-5)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "live-dot"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: "SF Capital · Fund Year 2026 · Mar 1 – Dec 31"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 'var(--space-3)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 'clamp(42px, 7vw, 64px)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            lineHeight: 1,
                            color: 'var(--text-primary)'
                        },
                        children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            start: 0,
                            end: totalValue,
                            duration: 1.8,
                            separator: ",",
                            decimals: 2,
                            decimal: ".",
                            prefix: "$"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "$",
                                totalValue.toLocaleString('en-US', {
                                    minimumFractionDigits: 2
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-tertiary)',
                        marginBottom: 'var(--space-6)',
                        letterSpacing: '0.02em'
                    },
                    children: "Total Assets Under Management"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 'var(--space-8)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "badge ".concat(dayUp ? 'badge-gain' : 'badge-loss'),
                        style: {
                            fontSize: 'var(--text-sm)',
                            padding: '5px 10px'
                        },
                        children: [
                            dayUp ? '▲' : '▼',
                            " ",
                            dayUp ? '+' : '',
                            "$",
                            Math.abs(dayChange).toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }),
                            " (",
                            dayUp ? '+' : '',
                            dayPct.toFixed(2),
                            "%) today"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1px',
                        background: 'var(--border)'
                    },
                    children: [
                        {
                            label: 'Total Return',
                            value: "".concat(isUp ? '+' : '').concat(totalPnLPct.toFixed(2), "%"),
                            sub: "".concat(isUp ? '+' : '', "$").concat(Math.abs(totalPnL).toLocaleString('en-US', {
                                maximumFractionDigits: 0
                            })),
                            color: isUp ? 'var(--gain)' : 'var(--loss)'
                        },
                        {
                            label: "Today's P&L",
                            value: "".concat(dayUp ? '+' : '', "$").concat(Math.abs(dayChange).toLocaleString('en-US', {
                                maximumFractionDigits: 0
                            })),
                            sub: "".concat(dayUp ? '+' : '').concat(dayPct.toFixed(2), "%"),
                            color: dayUp ? 'var(--gain)' : 'var(--loss)'
                        },
                        {
                            label: 'Open Positions',
                            value: "".concat(holdings.length),
                            sub: '4 asset classes',
                            color: 'var(--text-primary)'
                        },
                        {
                            label: 'Fund Period',
                            value: 'Mar–Dec 2026',
                            sub: '10-month term',
                            color: 'var(--text-secondary)'
                        }
                    ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'var(--bg-raised)',
                                padding: 'var(--space-5) var(--space-6)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "eyebrow",
                                    style: {
                                        marginBottom: 'var(--space-3)'
                                    },
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "metric-value",
                                    style: {
                                        color: stat.color
                                    },
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 'var(--text-xs)',
                                        color: 'var(--text-tertiary)',
                                        marginTop: 'var(--space-2)'
                                    },
                                    children: stat.sub
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Hero, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PerformanceChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PerformanceChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const RANGES = [
    {
        label: '1W',
        days: 7
    },
    {
        label: '1M',
        days: 30
    },
    {
        label: '3M',
        days: 91
    },
    {
        label: 'All',
        days: 999
    }
];
function normalise(data) {
    if (!data.length) return [];
    const base = data[0].value;
    var _data__benchmark;
    const baseBm = (_data__benchmark = data[0].benchmark) !== null && _data__benchmark !== void 0 ? _data__benchmark : base;
    return data.map((p)=>{
        var _p_benchmark;
        return {
            ...p,
            value: parseFloat(((p.value - base) / base * 100).toFixed(2)),
            benchmark: parseFloat(((((_p_benchmark = p.benchmark) !== null && _p_benchmark !== void 0 ? _p_benchmark : baseBm) - baseBm) / baseBm * 100).toFixed(2))
        };
    });
}
function ChartTooltip(param) {
    let { active, payload, label } = param;
    if (!active || !(payload === null || payload === void 0 ? void 0 : payload.length)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-raised)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-md)',
            padding: '10px 14px',
            fontSize: 'var(--text-xs)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'var(--text-tertiary)',
                    marginBottom: '6px'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/PerformanceChart.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            payload.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '16px',
                        marginBottom: '3px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: 'var(--text-secondary)'
                            },
                            children: p.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/PerformanceChart.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontWeight: 600,
                                color: p.value >= 0 ? 'var(--gain)' : 'var(--loss)',
                                fontVariantNumeric: 'tabular-nums'
                            },
                            children: [
                                p.value >= 0 ? '+' : '',
                                p.value,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PerformanceChart.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, p.name, true, {
                    fileName: "[project]/src/components/PerformanceChart.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PerformanceChart.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = ChartTooltip;
function PerformanceChart(param) {
    let { data } = param;
    var _RANGES_find;
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [range, setRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('3M');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerformanceChart.useEffect": ()=>{
            setMounted(true);
        }
    }["PerformanceChart.useEffect"], []);
    var _RANGES_find_days;
    const days = (_RANGES_find_days = (_RANGES_find = RANGES.find((r)=>r.label === range)) === null || _RANGES_find === void 0 ? void 0 : _RANGES_find.days) !== null && _RANGES_find_days !== void 0 ? _RANGES_find_days : 91;
    const chartData = normalise(data.slice(-days));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "surface",
        style: {
            padding: 'var(--space-6)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--space-6)',
                    gap: 'var(--space-4)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "eyebrow",
                                style: {
                                    marginBottom: '4px'
                                },
                                children: "Performance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PerformanceChart.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 'var(--text-lg)',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)'
                                },
                                children: "Fund vs. S&P 500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PerformanceChart.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PerformanceChart.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '2px'
                        },
                        children: RANGES.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setRange(r.label),
                                className: "btn btn-ghost".concat(range === r.label ? ' active' : ''),
                                style: {
                                    padding: '4px 12px',
                                    fontSize: 'var(--text-xs)',
                                    letterSpacing: '0.05em'
                                },
                                children: r.label
                            }, r.label, false, {
                                fileName: "[project]/src/components/PerformanceChart.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/PerformanceChart.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PerformanceChart.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 260,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                    data: chartData,
                    margin: {
                        top: 4,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "fundFill",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "var(--accent)",
                                        stopOpacity: 0.15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PerformanceChart.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "var(--accent)",
                                        stopOpacity: 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PerformanceChart.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PerformanceChart.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PerformanceChart.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "2 4",
                            stroke: "var(--border)",
                            vertical: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/PerformanceChart.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "date",
                            tick: {
                                fontSize: 10,
                                fill: 'var(--text-tertiary)',
                                fontFamily: 'Inter'
                            },
                            tickLine: false,
                            axisLine: false,
                            tickFormatter: (v)=>{
                                const p = v.split('-');
                                return "".concat(p[1], "/").concat(p[2]);
                            },
                            interval: "preserveStartEnd"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PerformanceChart.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            tick: {
                                fontSize: 10,
                                fill: 'var(--text-tertiary)',
                                fontFamily: 'Inter'
                            },
                            tickLine: false,
                            axisLine: false,
                            tickFormatter: (v)=>"".concat(v >= 0 ? '+' : '').concat(v.toFixed(1), "%"),
                            width: 52
                        }, void 0, false, {
                            fileName: "[project]/src/components/PerformanceChart.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartTooltip, {}, void 0, false, {
                                fileName: "[project]/src/components/PerformanceChart.tsx",
                                lineNumber: 105,
                                columnNumber: 31
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PerformanceChart.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                            formatter: (v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 11,
                                        color: 'var(--text-secondary)'
                                    },
                                    children: v
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PerformanceChart.tsx",
                                    lineNumber: 107,
                                    columnNumber: 41
                                }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PerformanceChart.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: "value",
                            name: "SF Capital",
                            stroke: "var(--accent)",
                            strokeWidth: 1.5,
                            fill: "url(#fundFill)",
                            dot: false,
                            activeDot: {
                                r: 3,
                                fill: 'var(--accent)',
                                strokeWidth: 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/PerformanceChart.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: "benchmark",
                            name: "S&P 500",
                            stroke: "var(--text-tertiary)",
                            strokeWidth: 1,
                            fill: "none",
                            dot: false,
                            strokeDasharray: "3 4",
                            activeDot: {
                                r: 3,
                                fill: 'var(--text-secondary)',
                                strokeWidth: 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/PerformanceChart.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PerformanceChart.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PerformanceChart.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 260,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-tertiary)'
                    },
                    children: "Loading…"
                }, void 0, false, {
                    fileName: "[project]/src/components/PerformanceChart.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PerformanceChart.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PerformanceChart.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(PerformanceChart, "3nfut1xg7MGZTfK17v/vD34mJHw=");
_c1 = PerformanceChart;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChartTooltip");
__turbopack_context__.k.register(_c1, "PerformanceChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SectorAllocation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectorAllocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SECTOR_COLORS = [
    '#c0003a',
    '#a0002e',
    '#7a0022',
    '#600019',
    '#e05575',
    '#b83050',
    '#d04060'
];
const ASSET_LABELS = {
    equity: 'Equities',
    commodity: 'Commodities',
    etf: 'ETFs',
    crypto: 'Crypto',
    bond: 'Bonds',
    cash: 'Cash'
};
function SectorAllocation(param) {
    let { holdings } = param;
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectorAllocation.useEffect": ()=>{
            setMounted(true);
        }
    }["SectorAllocation.useEffect"], []);
    const total = holdings.reduce((s, h)=>s + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingValue"])(h), 0);
    const sectorMap = new Map();
    holdings.forEach((h)=>{
        var _h_sector;
        const s = (_h_sector = h.sector) !== null && _h_sector !== void 0 ? _h_sector : 'Other';
        var _sectorMap_get;
        sectorMap.set(s, ((_sectorMap_get = sectorMap.get(s)) !== null && _sectorMap_get !== void 0 ? _sectorMap_get : 0) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingValue"])(h));
    });
    const sectorData = Array.from(sectorMap.entries()).map((param)=>{
        let [name, value] = param;
        return {
            name,
            value,
            pct: value / total * 100
        };
    }).sort((a, b)=>b.value - a.value);
    const assetMap = new Map();
    holdings.forEach((h)=>{
        var _assetMap_get;
        assetMap.set(h.assetClass, ((_assetMap_get = assetMap.get(h.assetClass)) !== null && _assetMap_get !== void 0 ? _assetMap_get : 0) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingValue"])(h));
    });
    const assetData = Array.from(assetMap.entries()).map((param)=>{
        let [name, value] = param;
        return {
            name,
            value,
            pct: value / total * 100
        };
    }).sort((a, b)=>b.value - a.value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "surface",
        style: {
            padding: 'var(--space-6)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "eyebrow",
                style: {
                    marginBottom: '4px'
                },
                children: "Allocation"
            }, void 0, false, {
                fileName: "[project]/src/components/SectorAllocation.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-5)'
                },
                children: "Sector & Asset Class"
            }, void 0, false, {
                fileName: "[project]/src/components/SectorAllocation.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 160,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                            data: sectorData,
                            cx: "50%",
                            cy: "50%",
                            innerRadius: 48,
                            outerRadius: 72,
                            dataKey: "value",
                            stroke: "none",
                            children: sectorData.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                    fill: SECTOR_COLORS[i % SECTOR_COLORS.length]
                                }, i, false, {
                                    fileName: "[project]/src/components/SectorAllocation.tsx",
                                    lineNumber: 49,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SectorAllocation.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            formatter: (v)=>[
                                    "$".concat(v.toLocaleString('en-US', {
                                        maximumFractionDigits: 0
                                    })),
                                    ''
                                ],
                            contentStyle: {
                                background: 'var(--bg-raised)',
                                border: '1px solid var(--border-strong)',
                                borderRadius: 'var(--radius-md)',
                                fontSize: 11,
                                color: 'var(--text-primary)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/SectorAllocation.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SectorAllocation.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SectorAllocation.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 160
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SectorAllocation.tsx",
                lineNumber: 58,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 'var(--space-4)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        style: {
                            marginBottom: 'var(--space-1)'
                        },
                        children: "By Asset Class"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectorAllocation.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    assetData.map((a)=>{
                        var _ASSET_LABELS_a_name;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '4px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 'var(--text-xs)',
                                                color: 'var(--text-secondary)'
                                            },
                                            children: (_ASSET_LABELS_a_name = ASSET_LABELS[a.name]) !== null && _ASSET_LABELS_a_name !== void 0 ? _ASSET_LABELS_a_name : a.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SectorAllocation.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 'var(--text-xs)',
                                                fontWeight: 600,
                                                color: 'var(--text-primary)',
                                                fontVariantNumeric: 'tabular-nums'
                                            },
                                            children: [
                                                a.pct.toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SectorAllocation.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SectorAllocation.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '2px',
                                        background: 'var(--border-strong)',
                                        borderRadius: '1px',
                                        overflow: 'hidden'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '100%',
                                            width: "".concat(a.pct, "%"),
                                            background: 'var(--accent)',
                                            borderRadius: '1px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SectorAllocation.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SectorAllocation.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, a.name, true, {
                            fileName: "[project]/src/components/SectorAllocation.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SectorAllocation.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SectorAllocation.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(SectorAllocation, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = SectorAllocation;
var _c;
__turbopack_context__.k.register(_c, "SectorAllocation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TopMovers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopMovers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
'use client';
;
;
;
function TopMovers(param) {
    let { holdings } = param;
    const sorted = [
        ...holdings
    ].sort((a, b)=>Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(b)) - Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(a)));
    const gainers = sorted.filter((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(h) >= 0).slice(0, 3);
    const losers = sorted.filter((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(h) < 0).slice(0, 3);
    function List(param) {
        let { items, up } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
            },
            children: items.map((h)=>{
                const pct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(h);
                const chg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChange"])(h);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 'var(--space-3) var(--space-4)',
                        borderRadius: 'var(--radius-md)',
                        transition: 'background var(--transition)'
                    },
                    onMouseEnter: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.03)',
                    onMouseLeave: (e)=>e.currentTarget.style.background = 'transparent',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: 'var(--text-sm)',
                                color: 'var(--text-primary)',
                                letterSpacing: '0.04em'
                            },
                            children: h.ticker
                        }, void 0, false, {
                            fileName: "[project]/src/components/TopMovers.tsx",
                            lineNumber: 31,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'right'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 'var(--text-sm)',
                                        fontWeight: 600,
                                        color: up ? 'var(--gain)' : 'var(--loss)',
                                        fontVariantNumeric: 'tabular-nums'
                                    },
                                    children: [
                                        up ? '+' : '',
                                        pct.toFixed(2),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TopMovers.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 'var(--text-xs)',
                                        color: 'var(--text-tertiary)',
                                        fontVariantNumeric: 'tabular-nums'
                                    },
                                    children: [
                                        chg >= 0 ? '+' : '',
                                        "$",
                                        Math.abs(chg).toLocaleString('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TopMovers.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TopMovers.tsx",
                            lineNumber: 34,
                            columnNumber: 15
                        }, this)
                    ]
                }, h.id, true, {
                    fileName: "[project]/src/components/TopMovers.tsx",
                    lineNumber: 20,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/TopMovers.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "surface",
        style: {
            padding: 'var(--space-6)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "eyebrow",
                style: {
                    marginBottom: '4px'
                },
                children: "Daily Movers"
            }, void 0, false, {
                fileName: "[project]/src/components/TopMovers.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-5)'
                },
                children: "Top Gainers & Losers"
            }, void 0, false, {
                fileName: "[project]/src/components/TopMovers.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--space-5)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    marginBottom: 'var(--space-3)',
                                    paddingBottom: 'var(--space-3)',
                                    borderBottom: '1px solid var(--border)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        size: 12,
                                        color: "var(--gain)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TopMovers.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        style: {
                                            color: 'var(--gain)'
                                        },
                                        children: "Gainers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TopMovers.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TopMovers.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {
                                items: gainers,
                                up: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/TopMovers.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TopMovers.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    marginBottom: 'var(--space-3)',
                                    paddingBottom: 'var(--space-3)',
                                    borderBottom: '1px solid var(--border)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                        size: 12,
                                        color: "var(--loss)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TopMovers.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        style: {
                                            color: 'var(--loss)'
                                        },
                                        children: "Losers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TopMovers.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TopMovers.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {
                                items: losers,
                                up: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/TopMovers.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TopMovers.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TopMovers.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TopMovers.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = TopMovers;
var _c;
__turbopack_context__.k.register(_c, "TopMovers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NewsFeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const SENTIMENT_STYLE = {
    positive: {
        color: 'var(--gain)',
        bg: 'var(--gain-dim)',
        label: 'Positive'
    },
    negative: {
        color: 'var(--loss)',
        bg: 'var(--loss-dim)',
        label: 'Negative'
    },
    neutral: {
        color: 'var(--text-secondary)',
        bg: 'rgba(255,255,255,0.05)',
        label: 'Neutral'
    }
};
function timeAgo(iso) {
    const secs = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
    if (secs < 60) return "".concat(secs, "s ago");
    if (secs < 3600) return "".concat(Math.floor(secs / 60), "m ago");
    if (secs < 86400) return "".concat(Math.floor(secs / 3600), "h ago");
    return "".concat(Math.floor(secs / 86400), "d ago");
}
function NewsFeed(param) {
    let { items, limit } = param;
    const feed = limit ? items.slice(0, limit) : items;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "surface",
        style: {
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 'var(--space-5) var(--space-6)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "eyebrow",
                                style: {
                                    marginBottom: '2px'
                                },
                                children: "Market Intelligence"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewsFeed.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 'var(--text-lg)',
                                    fontWeight: 700
                                },
                                children: "News"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewsFeed.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewsFeed.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: [
                            feed.length,
                            " articles"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewsFeed.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NewsFeed.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: feed.map((item, idx)=>{
                    var _item_tickers;
                    const s = SENTIMENT_STYLE[item.sentiment];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 'var(--space-5) var(--space-6)',
                            borderBottom: idx < feed.length - 1 ? '1px solid var(--border)' : 'none',
                            transition: 'background var(--transition)'
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.02)',
                        onMouseLeave: (e)=>e.currentTarget.style.background = 'transparent',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-2)',
                                    marginBottom: 'var(--space-2)',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 600,
                                            color: 'var(--text-tertiary)'
                                        },
                                        children: item.source
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsFeed.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--border-strong)',
                                            fontSize: '10px'
                                        },
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsFeed.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 'var(--text-xs)',
                                            color: 'var(--text-tertiary)'
                                        },
                                        children: timeAgo(item.publishedAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsFeed.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--border-strong)',
                                            fontSize: '10px'
                                        },
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsFeed.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 10,
                                            fontWeight: 600,
                                            color: s.color,
                                            background: s.bg,
                                            padding: '1px 6px',
                                            borderRadius: 'var(--radius-sm)'
                                        },
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsFeed.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NewsFeed.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    fontSize: 'var(--text-base)',
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none',
                                    lineHeight: 1.4,
                                    display: 'block',
                                    marginBottom: 'var(--space-2)',
                                    transition: 'color var(--transition)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--accent-text)',
                                onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--text-primary)',
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewsFeed.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 'var(--text-sm)',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.6,
                                    marginBottom: 'var(--space-3)'
                                },
                                children: item.summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewsFeed.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this),
                            ((_item_tickers = item.tickers) === null || _item_tickers === void 0 ? void 0 : _item_tickers.length) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 'var(--space-1)',
                                    flexWrap: 'wrap'
                                },
                                children: item.tickers.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ticker-tag",
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/src/components/NewsFeed.tsx",
                                        lineNumber: 93,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewsFeed.tsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/components/NewsFeed.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/NewsFeed.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NewsFeed.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = NewsFeed;
var _c;
__turbopack_context__.k.register(_c, "NewsFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HoldingsTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HoldingsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function HoldingsTable(param) {
    let { holdings: propHoldings, holdingIds } = param;
    _s();
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('value');
    const [sortAsc, setSortAsc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const source = propHoldings !== null && propHoldings !== void 0 ? propHoldings : holdingIds ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOLDINGS"].filter((h)=>holdingIds.includes(h.id)) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOLDINGS"];
    const totalValue = source.reduce((sum, h)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingValue"])(h), 0);
    const sorted = [
        ...source
    ].sort((a, b)=>{
        let av = 0, bv = 0;
        if (sortKey === 'ticker') return sortAsc ? a.ticker.localeCompare(b.ticker) : b.ticker.localeCompare(a.ticker);
        if (sortKey === 'value') {
            av = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingValue"])(a);
            bv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingValue"])(b);
        }
        if (sortKey === 'pnlPct') {
            av = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingPnLPercent"])(a);
            bv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingPnLPercent"])(b);
        }
        if (sortKey === 'dayPct') {
            av = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(a);
            bv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(b);
        }
        if (sortKey === 'weight') {
            av = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingValue"])(a) / totalValue;
            bv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingValue"])(b) / totalValue;
        }
        return sortAsc ? av - bv : bv - av;
    });
    function SortTh(param) {
        let { label, k, right } = param;
        const active = sortKey === k;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "surface",
        style: {
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 'var(--space-5) var(--space-6)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    overflowX: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "data-table",
                    style: {
                        minWidth: '680px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
                                        label: "Ticker",
                                        k: "ticker"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
                                        label: "Value",
                                        k: "value",
                                        right: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
                                        label: "Total P&L",
                                        k: "pnlPct",
                                        right: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
                                        label: "Day",
                                        k: "dayPct",
                                        right: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HoldingsTable.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: sorted.map((h)=>{
                                const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingValue"])(h);
                                const pnl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingPnL"])(h);
                                const pnlPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcHoldingPnLPercent"])(h);
                                const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChange"])(h);
                                const dayPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcDayChangePercent"])(h);
                                const weight = value / totalValue * 100;
                                const isOpen = expandedId === h.id;
                                var _ASSET_CLASS_COLORS_h_assetClass;
                                const cls = (_ASSET_CLASS_COLORS_h_assetClass = ASSET_CLASS_COLORS[h.assetClass]) !== null && _ASSET_CLASS_COLORS_h_assetClass !== void 0 ? _ASSET_CLASS_COLORS_h_assetClass : ASSET_CLASS_COLORS.cash;
                                var _h_sector;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            onClick: ()=>setExpandedId(isOpen ? null : h.id),
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "right tabular-nums",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "right tabular-nums",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            justifyContent: 'flex-end'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '48px',
                                                                    height: '2px',
                                                                    background: 'var(--border-strong)',
                                                                    borderRadius: '1px',
                                                                    overflow: 'hidden'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        height: '100%',
                                                                        width: "".concat(Math.min(weight * 2, 100), "%"),
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                background: 'var(--bg-subtle)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 6,
                                                style: {
                                                    padding: 'var(--space-4) var(--space-6) var(--space-5)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                                                            gap: 'var(--space-5)',
                                                            marginBottom: h.thesis ? 'var(--space-4)' : 0
                                                        },
                                                        children: [
                                                            {
                                                                label: 'Avg. Cost',
                                                                value: "$".concat(h.avgCost.toFixed(2))
                                                            },
                                                            {
                                                                label: 'Current',
                                                                value: "$".concat(h.currentPrice.toFixed(2))
                                                            },
                                                            {
                                                                label: 'Sector',
                                                                value: (_h_sector = h.sector) !== null && _h_sector !== void 0 ? _h_sector : '—'
                                                            },
                                                            {
                                                                label: 'Currency',
                                                                value: h.currency
                                                            },
                                                            {
                                                                label: 'Added',
                                                                value: h.addedDate
                                                            }
                                                        ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    h.thesis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 'var(--text-sm)',
                                                            color: 'var(--text-secondary)',
                                                            lineHeight: 1.6,
                                                            borderTop: '1px solid var(--border)',
                                                            paddingTop: 'var(--space-4)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(HoldingsTable, "8Dplr53M5XSqTOZxAh8LNxWKyi4=");
_c = HoldingsTable;
var _c;
__turbopack_context__.k.register(_c, "HoldingsTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1504a20a._.js.map