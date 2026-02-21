import React from 'react';
import Link from 'next/link';
import Background from '@/components/Background';
import { getHoldings, getPerformanceHistory } from '@/lib/queries';
import { PORTFOLIOS } from '@/lib/data';
import HeroTyping from '@/components/HeroTyping';
import HeroPortfolioCarousel from '@/components/HeroPortfolioCarousel';
import PortfolioCard from '@/components/PortfolioCard';
import HomeDashboard from '@/components/HomeDashboard';

export const revalidate = 300;

export default async function Home() {
  const [holdings, perfHistory] = await Promise.all([
    getHoldings(),
    getPerformanceHistory(91),
  ]);

  return (
    <>
      <Background />

      <main style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          borderBottom: '1px solid var(--border)',
          overflow: 'hidden',
        }}>
          {/* Background image — starts below the 104px header, crops at bottom */}
          <img
            src="https://oztrekk.com/wp-content/uploads/2019/01/sydney_campus.jpg"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '104px',
              left: 0,
              width: '100%',
              height: 'calc(100% - 104px)',
              objectFit: 'cover',
              objectPosition: 'top center',
              filter: 'brightness(0.38) saturate(0.7)',
              zIndex: 0,
              display: 'block',
            }}
          />

          {/* Gradient vignette — starts at image top, fades at the bottom */}
          <div style={{
            position: 'absolute',
            top: '104px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, transparent 0%, transparent 55%, rgba(9,9,11,0.6) 78%, rgba(9,9,11,0.97) 100%)',
            zIndex: 1,
          }} />

          {/* Content */}
          <div style={{
            position: 'relative', zIndex: 2,
            display: 'grid',
            gridTemplateColumns: '52% 1fr',
            gap: '60px',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '104px 5% 80px 5%',
            minHeight: '100vh',
            boxSizing: 'border-box',
          }}>
            {/* LEFT — hero text */}
            <div>
              <h1 style={{ fontWeight: 800, letterSpacing: '-0.04em', color: '#ffffff', margin: '0 0 28px 0' }}>
                <span style={{ display: 'block', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '80px', lineHeight: 1.2 }}>
                  <HeroTyping />
                </span>
                <span style={{ display: 'block', fontSize: '112px', whiteSpace: 'nowrap', lineHeight: 0.90 }}>
                  Capital.
                </span>
              </h1>
              <p style={{ fontSize: '20px', fontWeight: 500, color: 'rgba(255,255,255,0.50)', maxWidth: '520px', lineHeight: 1.55, margin: 0 }}>
                The University of Sydney{' '}
                <a
                  href="https://www.instagram.com/usydfxia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.50)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.20)', textUnderlineOffset: '3px' }}
                >
                  FXIA Society
                </a>
                &apos;s Flagship Investment Fund
              </p>
            </div>

            {/* RIGHT — carousel, nudged down */}
            <div style={{ paddingTop: '80px' }}>
              <HeroPortfolioCarousel />
            </div>
          </div>
        </section>

        {/* ── What We Are ──────────────────────────────────────── */}
        <section style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-9)', alignItems: 'start' }}>

              <div>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-base)' }}>What We Are</div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 'var(--space-5)', lineHeight: 1.15 }}>
                  Real research.<br />Real learning.
                </h2>
                <p style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', color: 'rgba(244,244,245,0.60)', lineHeight: 1.8, fontWeight: 400, borderLeft: '2px solid rgba(155,18,57,0.5)', paddingLeft: 'var(--space-5)', margin: 0 }}>
                  A student-managed investment fund working with industry professionals to simulate a real portfolio management environment; equipping our members with investment experience and financial literacy to grow their own wealth, long after graduation.
                </p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(244,244,245,0.30)', lineHeight: 1.7, marginTop: 'var(--space-4)', paddingLeft: 'var(--space-5)', borderLeft: '2px solid rgba(155,18,57,0.2)' }}>
                  All capital deployed is demo money only. SF Capital is affiliated with industry partners and sponsors, and operates in full compliance with USU regulations and Australian law. All research, analysis, and investment decisions are conducted solely to simulate professional industry practice.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[
                  { n: '01', title: 'Research &amp; Analysis',      body: 'Every position starts with a written investment thesis, reviewed by a committee of analysts and portfolio managers before capital is committed.' },
                  { n: '02', title: 'Portfolio Management',        body: 'Three teams manage three portfolios with separate coverages and strategies across equities, commodities, ETFs, and thematic plays.' },
                  { n: '03', title: 'Performance Accountability',  body: 'All positions are posted live and open source; no cheating. Our only goals are to generate alpha and manage risk. A true simulation of industry.' },
                  { n: '04', title: 'Education &amp; Community',   body: 'Weekly events, seminars, and meetings with mentors from industry and sponsors, with an open application process each semester.' },
                ].map(item => (
                  <div key={item.n} style={{ display: 'flex', gap: 'var(--space-4)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--accent-text)', fontVariantNumeric: 'tabular-nums', minWidth: '22px', paddingTop: '2px' }}>{item.n}</span>
                    <div>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }} dangerouslySetInnerHTML={{ __html: item.title }} />
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Our Portfolios ───────────────────────────────────── */}
        <section style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-9)' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-7)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)' }}>Our Portfolios</div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em' }}>Three portfolios, one fund.</h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-3)', lineHeight: 1.65, maxWidth: '480px' }}>
                  Horizon Growth targets long-term compounders across global equities and structural themes. Macro positions across asset classes based on economic cycles and top-down research. Quant deploys systematic, rules-based models to exploit statistical inefficiencies. Each portfolio is run by a dedicated PM and 5 analysts, independently managed with its own strategy.
                </p>
              </div>
              <Link href="/portfolios" style={{ fontSize: 'var(--text-base)', color: 'var(--accent-text)', fontWeight: 600, borderBottom: '1px solid rgba(244,63,94,0.3)', paddingBottom: '1px' }}>
                View our portfolios
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
              {PORTFOLIOS.map(p => (
                <PortfolioCard key={p.id} portfolio={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Fund at a Glance ─────────────────────────────────── */}
        <section style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-7)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)' }}>Live</div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em' }}>Fund at a glance.</h2>
              </div>
              <Link href="/portfolios" style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-text)', fontWeight: 500, borderBottom: '1px solid rgba(244,63,94,0.3)', paddingBottom: '1px' }}>
                View portfolios →
              </Link>
            </div>
            <HomeDashboard holdings={holdings} perfHistory={perfHistory} />
          </div>
        </section>

        {/* ── Our 2025 Performance ─────────────────────────────── */}
        <section style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-7)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)' }}>Historical</div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em' }}>Our 2025 Performance.</h2>
              </div>
              <Link href="/performance" style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-text)', fontWeight: 500, borderBottom: '1px solid rgba(244,63,94,0.3)', paddingBottom: '1px' }}>
                View full analytics →
              </Link>
            </div>

            {/* Key metrics row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', marginBottom: 'var(--space-7)' }}>
              {[
                { label: 'Total Return',  value: '+24.7%', sub: 'Mar – Dec 2025', positive: true  },
                { label: 'vs S&P 500',    value: '+8.3%',  sub: 'outperformance', positive: true  },
                { label: 'Max Drawdown',  value: '-6.1%',  sub: 'peak to trough', positive: false },
                { label: 'Sharpe Ratio',  value: '1.84',   sub: 'risk-adjusted',  positive: true  },
              ].map(m => (
                <div key={m.label} style={{ background: 'var(--bg-raised)', padding: 'var(--space-5)' }}>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-2)' }}>{m.label}</div>
                  <div style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 800, letterSpacing: '-0.03em', color: m.positive ? 'var(--gain)' : 'var(--loss)', marginBottom: '4px', fontVariantNumeric: 'tabular-nums' }}>{m.value}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Placeholder — replace with real 2025 chart when data is ready */}
            <div style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '10px', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', minHeight: '160px' }}>
              <div style={{ fontSize: '32px', opacity: 0.2 }}>📈</div>
              <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', margin: 0 }}>2025 historical chart — data to be added.</p>
              <Link href="/performance" style={{ color: 'var(--accent-text)', fontSize: 'var(--text-sm)', borderBottom: '1px solid rgba(244,63,94,0.3)', paddingBottom: '1px' }}>
                View full performance page →
              </Link>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
