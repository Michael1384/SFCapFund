'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PORTFOLIOS } from '@/lib/data';
import HeroTyping from '@/components/HeroTyping';
import HeroPortfolioCarousel from '@/components/HeroPortfolioCarousel';
import PortfolioCard from '@/components/PortfolioCard';
import HomeDashboard from '@/components/HomeDashboard';
import type { Holding, PerformancePoint } from '@/lib/types';

interface Props {
  holdings: Holding[];
  perfHistory: PerformancePoint[];
}

export default function HomeClient({ holdings, perfHistory }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <main style={{ position: 'relative', zIndex: 1, overflowX: 'hidden' }}>

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
        <div style={{
          position: 'absolute',
          top: '104px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(9,9,11,0.55) 70%, rgba(9,9,11,0.97) 100%)',
          zIndex: 1,
        }} />

        {isMobile ? (
          /* ── MOBILE HERO ── */
          <div style={{
            position: 'relative', zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '0 16px 36px 16px',
            minHeight: '100vh',
            boxSizing: 'border-box',
            gap: '24px',
          }}>
            {/* Heading anchored to bottom */}
            <div>
              <h1 style={{ fontWeight: 800, letterSpacing: '-0.04em', color: '#ffffff', margin: '0 0 12px 0', lineHeight: 1 }}>
                <span style={{ display: 'block', fontSize: '28px', lineHeight: 1.3, opacity: 0.85 }}>
                  <HeroTyping />
                </span>
                <span style={{ display: 'block', fontSize: '48px', lineHeight: 0.95 }}>
                  Capital.
                </span>
              </h1>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55, margin: 0 }}>
                The University of Sydney{' '}
                <a
                  href="https://www.instagram.com/usydfxia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.18)', textUnderlineOffset: '3px' }}
                >
                  FXIA Society
                </a>
                &apos;s flagship investment fund.
              </p>
            </div>
            {/* Carousel — full width, no overflow */}
            <div style={{ width: '100%' }}>
              <HeroPortfolioCarousel isMobile={true} />
            </div>
          </div>
        ) : (
          /* ── DESKTOP HERO ── */
          <div style={{
            position: 'relative', zIndex: 2,
            display: 'grid',
            gridTemplateColumns: '52% 1fr',
            gap: '60px',
            alignItems: 'center',
            padding: '104px 5% 80px 5%',
            minHeight: '100vh',
            boxSizing: 'border-box',
          }}>
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
            <div style={{ paddingTop: '80px' }}>
              <HeroPortfolioCarousel />
            </div>
          </div>
        )}
      </section>

      {/* ── What We Are ──────────────────────────────────────── */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{
          paddingTop: isMobile ? 'var(--space-5)' : 'var(--space-9)',
          paddingBottom: isMobile ? 'var(--space-5)' : 'var(--space-9)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 'var(--space-5)' : 'var(--space-9)',
            alignItems: 'start',
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: isMobile ? 'var(--space-2)' : 'var(--space-4)', fontSize: isMobile ? '10px' : 'var(--text-base)' }}>What We Are</div>
              <h2 style={{ fontSize: isMobile ? '20px' : 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: isMobile ? 'var(--space-3)' : 'var(--space-5)', lineHeight: 1.15 }}>
                Real research.<br />Real learning.
              </h2>
              <p style={{ fontSize: isMobile ? '13px' : 'clamp(16px, 1.6vw, 19px)', color: 'rgba(244,244,245,0.60)', lineHeight: 1.8, fontWeight: 400, borderLeft: '2px solid rgba(155,18,57,0.5)', paddingLeft: 'var(--space-4)', margin: 0 }}>
                A student-managed investment fund working with industry professionals to simulate a real portfolio management environment; equipping our members with investment experience and financial literacy to grow their own wealth, long after graduation.
              </p>
              <p style={{ fontSize: isMobile ? '11px' : 'var(--text-xs)', color: 'rgba(244,244,245,0.30)', lineHeight: 1.7, marginTop: 'var(--space-3)', paddingLeft: 'var(--space-4)', borderLeft: '2px solid rgba(155,18,57,0.2)' }}>
                All capital deployed is strictly paper trading/demo money only. SF Capital is affiliated with industry partners and sponsors, and operates in full compliance with USU regulations and Australian law. All research, analysis, and investment decisions are conducted solely to simulate professional industry practice.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 'var(--space-3)' : 'var(--space-4)' }}>
              {[
                { n: '01', title: 'Research &amp; Analysis',      body: 'Every position starts with a written investment thesis, reviewed by a committee of analysts and portfolio managers before capital is committed.' },
                { n: '02', title: 'Portfolio Management',        body: 'Three teams manage three portfolios with separate coverages and strategies across equities, commodities, ETFs, and thematic plays.' },
                { n: '03', title: 'Performance Accountability',  body: 'All positions are posted live and open source; no cheating. Our only goals are to generate alpha and manage risk. A true simulation of industry.' },
                { n: '04', title: 'Education &amp; Community',   body: 'Weekly events, seminars, and meetings with mentors from industry and sponsors, with an open application process each semester.' },
              ].map(item => (
                <div key={item.n} style={{ display: 'flex', gap: 'var(--space-3)', paddingBottom: isMobile ? 'var(--space-3)' : 'var(--space-4)', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-text)', fontVariantNumeric: 'tabular-nums', minWidth: '22px', paddingTop: '2px' }}>{item.n}</span>
                  <div>
                    <div style={{ fontSize: isMobile ? '13px' : 'var(--text-base)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p style={{ fontSize: isMobile ? '12px' : 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Portfolios ───────────────────────────────────── */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{
          paddingTop: isMobile ? 'var(--space-5)' : 'var(--space-7)',
          paddingBottom: isMobile ? 'var(--space-5)' : 'var(--space-9)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: isMobile ? 'var(--space-4)' : 'var(--space-7)', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 'var(--space-2)', fontSize: isMobile ? '10px' : 'var(--text-base)' }}>Our Portfolios</div>
              <h2 style={{ fontSize: isMobile ? '20px' : 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em' }}>Three portfolios, one fund.</h2>
              {!isMobile && (
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-3)', lineHeight: 1.65, maxWidth: '480px' }}>
                  Horizon Growth targets long-term compounders across global equities and structural themes. Macro positions across asset classes based on economic cycles and top-down research. Quant deploys systematic, rules-based models to exploit statistical inefficiencies. Each portfolio is run by a dedicated PM and 5 analysts, independently managed with its own strategy.
                </p>
              )}
            </div>
            <Link href="/portfolios" style={{ fontSize: isMobile ? '13px' : 'var(--text-base)', color: 'var(--accent-text)', fontWeight: 600, borderBottom: '1px solid rgba(244,63,94,0.3)', paddingBottom: '1px' }}>
              View our portfolios
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-3)' }}>
            {PORTFOLIOS.map(p => (
              <PortfolioCard key={p.id} portfolio={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Fund at a Glance ─────────────────────────────────── */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{
          paddingTop: isMobile ? 'var(--space-5)' : 'var(--space-9)',
          paddingBottom: isMobile ? 'var(--space-5)' : 'var(--space-9)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: isMobile ? 'var(--space-4)' : 'var(--space-7)', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 'var(--space-2)', fontSize: isMobile ? '10px' : 'var(--text-base)' }}>Live</div>
              <h2 style={{ fontSize: isMobile ? '20px' : 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em' }}>Fund at a glance.</h2>
            </div>
            <Link href="/portfolios" style={{ fontSize: isMobile ? '13px' : 'var(--text-sm)', color: 'var(--accent-text)', fontWeight: 500, borderBottom: '1px solid rgba(244,63,94,0.3)', paddingBottom: '1px' }}>
              View portfolios →
            </Link>
          </div>
          <HomeDashboard holdings={holdings} perfHistory={perfHistory} isMobile={isMobile} />
        </div>
      </section>

      {/* ── Performance ── hidden until live data is available ─────────────── */}

    </main>
  );
}
