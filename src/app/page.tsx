import React from 'react';
import Link from 'next/link';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getHoldings, getNews, getPerformanceHistory } from '@/lib/queries';
import { PORTFOLIOS } from '@/lib/data';
import HeroTyping from '@/components/HeroTyping';
import HeroPortfolioCarousel from '@/components/HeroPortfolioCarousel';
import PortfolioCard from '@/components/PortfolioCard';
import HomeDashboard from '@/components/HomeDashboard';

export const revalidate = 300;

export default async function Home() {
  const [holdings, news, perfHistory] = await Promise.all([
    getHoldings(),
    getNews(4),
    getPerformanceHistory(91),
  ]);

  return (
    <>
      <Background />
      <Navbar />

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
            padding: '104px 5% 80px 5%',            minHeight: '100vh',
            boxSizing: 'border-box',
          }}>
            {/* LEFT — hero text */}
            <div>
              <h1 style={{ fontWeight: 800, letterSpacing: '-0.04em', color: '#ffffff', margin: '0 0 28px 0' }}>
                <span style={{ display: 'block', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '80px', lineHeight: 1.2 }}>
                  <HeroTyping />
                </span>
                <span style={{ display: 'block', fontSize: '112px', whiteSpace: 'nowrap', lineHeight: 0.90 }}>
                  Capital<span style={{ position: 'relative', top: '8px', fontSize: '112px' }}>.</span>
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

            {/* RIGHT — carousel */}
            <HeroPortfolioCarousel />
          </div>
        </section>

        {/* ── What We Do ───────────────────────────────────────── */}
        <section style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>

            {/* Slogan banner */}
            <p style={{
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              color: 'rgba(244,244,245,0.55)',
              lineHeight: 1.8,
              fontWeight: 400,
              maxWidth: '720px',
              marginBottom: 'var(--space-9)',
              borderLeft: '2px solid rgba(155,18,57,0.5)',
              paddingLeft: 'var(--space-5)',
            }}>
              A student-managed investment fund working with industry professionals to simulate a real portfolio management environment; equipping our members with investment experience and financial literacy to grow their own wealth, long after graduation.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-9)', alignItems: 'start' }}>

              <div>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>What We Do</div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 'var(--space-5)', lineHeight: 1.15 }}>
                  Real investing.<br />Real learning.
                </h2>
                <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 'var(--space-5)' }}>
                  SF Capital gives University of Sydney students hands-on experience managing a simulated investment portfolio.
                  Every decision is research-backed, committee-reviewed, and tracked transparently.
                </p>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  We run four distinct strategies — from long-term compounders to macro &amp; commodities — so members develop
                  a broad, practical understanding of global markets.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[
                  { n: '01', title: 'Research &amp; Analysis',      body: 'Every position starts with a written investment thesis, reviewed by the full committee before capital is committed.' },
                  { n: '02', title: 'Portfolio Management',        body: 'We manage four live strategies across equities, commodities, ETFs, and thematic plays — Mar to Dec 2026.' },
                  { n: '03', title: 'Performance Accountability',  body: 'Returns are tracked publicly against S&P 500. We own our wins and our losses equally.' },
                  { n: '04', title: 'Education &amp; Community',   body: 'Weekly presentations, mentors from industry, and an open application process each semester.' },
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
          <div className="container" style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-7)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Our Portfolios</div>
                <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em' }}>Four strategies, one fund.</h2>
              </div>
              <Link href="/portfolios" style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-text)', fontWeight: 500, borderBottom: '1px solid rgba(244,63,94,0.3)', paddingBottom: '1px' }}>
                View all positions →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
              {PORTFOLIOS.filter(p => p.id !== 'overall').map(p => (
                <PortfolioCard key={p.id} portfolio={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Live Dashboard ───────────────────────────────────── */}
        <section style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-7)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Live Dashboard</div>
                <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em' }}>Fund at a glance.</h2>
              </div>
              <Link href="/performance" style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-text)', fontWeight: 500, borderBottom: '1px solid rgba(244,63,94,0.3)', paddingBottom: '1px' }}>
                Full performance →
              </Link>
            </div>
            <HomeDashboard holdings={holdings} news={news} perfHistory={perfHistory} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
