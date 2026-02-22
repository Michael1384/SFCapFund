# SF Capital — Mobile Version Instructions

This document defines the rules and patterns for converting each page to a mobile-responsive layout.
Mobile is defined as any screen under **1024px** wide (matching the `MobileWarning` breakpoint).
Use a `isMobile` boolean derived from a `useWindowWidth()` hook or `window.innerWidth < 1024` in a `useEffect`.

---

## General Rules (Apply to Every Page)

### 1. The `isMobile` Hook Pattern
Every page that needs mobile layout must be a Client Component with this pattern at the top:

```tsx
'use client';
import React, { useState, useEffect } from 'react';

const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 1024);
  check();
  window.addEventListener('resize', check);
  return () => window.removeEventListener('resize', check);
}, []);
```

### 2. Font Size Scale (Mobile vs Desktop)

| Element | Desktop | Mobile |
|---|---|---|
| Hero h1 (e.g. "Capital.") | `112px` | `48px` |
| Hero typing line | `80px` | `36px` |
| Page h1 (e.g. "About Us") | `clamp(28px, 4vw, 44px)` | `24px` |
| Section h2 | `clamp(22px, 3vw, 32px)` | `20px` |
| Body / paragraph text | `var(--text-sm)` / `14–16px` | `13px` |
| Eyebrow labels | `var(--text-xs)` | `10px` |
| Metric/stat values | `clamp(28px, 4vw, 44px)` | `22px` |
| Card titles | `var(--text-base)` | `13px` |
| Sub-labels | `var(--text-xs)` | `11px` |

### 3. Grid Collapse Rules

All multi-column grids must collapse to a single column on mobile:

```tsx
gridTemplateColumns: isMobile ? '1fr' : 'repeat(N, 1fr)'
```

Specific grid overrides per page are listed in each page section below.

### 4. Spacing Scale (Mobile)

All `var(--space-*)` values should be halved on mobile:

| Desktop | Mobile |
|---|---|
| `var(--space-9)` | `var(--space-5)` |
| `var(--space-8)` | `var(--space-5)` |
| `var(--space-7)` | `var(--space-4)` |
| `var(--space-6)` | `var(--space-4)` |
| `var(--space-5)` | `var(--space-3)` |
| `var(--space-4)` | `var(--space-3)` |

### 5. Container Padding

```tsx
paddingLeft: isMobile ? '16px' : undefined,
paddingRight: isMobile ? '16px' : undefined,
```

### 6. Hide on Mobile (use `display: isMobile ? 'none' : ...`)

These elements should be hidden entirely on mobile to reduce clutter:
- `TickerTape` scrolling bar
- `HeroPortfolioCarousel` (right column of hero)
- The "Each portfolio carries equal weighting" sub-label on About page
- Performance chart bar labels / X-axis ticks (handled via Recharts props)
- Holdings table columns: hide "Thesis", "Added Date", "Sector" columns
- Footer nav column (keep brand blurb and disclaimer only)

### 7. Navbar on Mobile

- Collapse nav links into a hamburger menu button (top-right)
- Show a slide-down drawer with stacked links on tap
- Keep "SF Capital." wordmark visible at all times
- Navbar height can reduce from `64px` to `52px`

---

## Page-by-Page Instructions

---

### `/` — Homepage

#### Hero Section
- Stack the 2-column grid (`52% 1fr`) into a single column: `gridTemplateColumns: '1fr'`
- Hide the right column (`HeroPortfolioCarousel`) entirely on mobile
- Reduce h1 "Capital." from `112px` to `48px`
- Reduce typing line from `80px` to `36px`
- Reduce subheading paragraph from `20px` to `14px`
- Remove `whiteSpace: 'nowrap'` on both heading spans

#### "Our Portfolios" Section
- Stack portfolio cards to single column
- Reduce section `paddingTop`/`paddingBottom` to `var(--space-5)`

#### "What We Are" Section
- Stack 2-column grid (`1fr 1fr`) to single column
- Reduce h2 to `20px`
- Reduce body paragraph to `13px`
- Reduce numbered list items' gap

---

### `/about` — About Us

#### Header
- Keep single column (already no grid on the h1)
- Collapse 3-column blurb grid (`1fr 1fr 1fr`) to single column
- Show only the FIRST paragraph on mobile, hide the other two (or stack all three, tiny font)

#### Stats Bar
- Collapse 4-column stats grid (`repeat(4, 1fr)`) to 2-column: `repeat(2, 1fr)`
- Reduce stat value font from `clamp(28px, 4vw, 44px)` to `22px`

#### Fund Structure
- Collapse 3-column team grid (`repeat(3, 1fr)`) to single column
- Show only the PM card per portfolio, collapse analysts behind an "expand" toggle or hide entirely
- Hide the "Each portfolio carries equal weighting" subtitle span

---

### `/performance` — Performance

#### Metrics Grid
- Collapse `repeat(auto-fit, minmax(160px, 1fr))` to `repeat(2, 1fr)`
- Reduce metric value font size to `22px`
- Reduce card padding to `var(--space-3)`

#### Performance Chart
- Reduce chart height from `320px` to `220px`
- Hide X-axis tick labels (set `hide` on `XAxis`)
- Keep the tooltip

#### Monthly Returns Bar Chart
- Reduce bar chart height to `180px`
- Hide bar labels if present

---

### `/portfolios` — Portfolios List

#### Tab Switcher
- Make tabs full-width, stacked or scrollable horizontally with `overflowX: 'auto'`

#### Portfolio Card
- Stack any internal 2-column layout to single column
- Reduce portfolio name font size
- Truncate overview text to 3 lines with `overflow: hidden`, `display: '-webkit-box'`, `WebkitLineClamp: 3`

#### Holdings Mini-Table
- Show only: Ticker, Price, P&L% — hide all other columns
- Reduce row font size to `12px`

---

### `/portfolios/[slug]` — Portfolio Detail

#### Page Header
- Stack heading block, reduce h1 to `26px`
- Reduce the accent subheader to `32px` (from `64px`)

#### Stats Bar
- Collapse to `repeat(2, 1fr)` grid
- Reduce padding and font sizes

#### Overview / Coverage / Strategy
- Stack 2-column layouts to single column
- Reduce all body text to `13px`

#### Performance Chart
- Same as `/performance` chart rules above

#### Holdings Table (`HoldingsTable`)
- Hide columns: Sector, Thesis, Added Date, Day Change $
- Keep: Ticker, Name, Price, P&L%, Weight
- Reduce all font sizes to `12px`
- Reduce row padding

#### Team Section
- Collapse 6-column grid (`repeat(6, 1fr)`) to `repeat(2, 1fr)`
- Reduce avatar size from `72px` to `48px`
- Reduce name/role font sizes

---

### `/opportunities` — Opportunities

#### Role Cards Grid
- Collapse to single column

#### How to Apply Steps
- Already column-based, just reduce padding and font sizes

#### Contact Cards
- Collapse to single column
- Reduce card padding

#### "What We Look For" Bullet List
- Reduce font size to `13px`
- Reduce gap between bullets

---

### `/opportunities` — Footer (all pages)

- Hide the nav links column entirely
- Stack brand blurb and disclaimer vertically
- Reduce all footer text to `11px`
- Reduce icon size from `22px` to `18px`
- Reduce footer padding

---

## Implementation Strategy

When converting a page, work in this order:

1. Add `'use client'` if not already present
2. Add the `isMobile` hook
3. Collapse grids top-to-bottom through the JSX
4. Scale down font sizes
5. Reduce spacing
6. Hide non-essential elements
7. Check for `whiteSpace: 'nowrap'` and remove on mobile (prevents overflow)
8. Check for fixed `px` widths and replace with `100%` or `maxWidth` on mobile
9. Test at 390px width (iPhone 14 viewport)

---

## Do Not Do on Mobile

- Do NOT use `overflow: hidden` on the `<body>` or `<main>` — breaks scroll
- Do NOT hide the Navbar, Footer, Background, or popups
- Do NOT use `position: fixed` for layout elements other than the Navbar and popups
- Do NOT remove the `MobileWarning` or `MVPNotice` popups
- Do NOT change the brand colors or font family
- Do NOT use CSS media queries in `globals.css` — keep all responsive logic inline via `isMobile`
