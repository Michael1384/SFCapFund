'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import TickerTape from '@/components/TickerTape';

const NAV_LINKS = [
  { label: 'Our Portfolios',  href: '/portfolios' },
  { label: 'Our Performance', href: '/performance' },
  { label: 'News',            href: '/news' },
  { label: 'About Us',        href: '/about' },
];

// Total header height = nav bar (72px) + ticker tape (32px) = 104px
export const HEADER_HEIGHT = 104;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen]       = useState(false);
  const [hidden, setHidden]   = useState(false);
  const [lastY, setLastY]     = useState(0);

  useEffect(() => {
    const onScroll = () => {
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
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 280ms cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      {/* ── Main nav bar ── */}
      <div style={{
        height: '72px',
        background: 'rgba(9,9,11,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>

          {/* Wordmark */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', flexShrink: 0 }}>
            <span style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.035em', lineHeight: 1 }}>
              SF Capital
            </span>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--accent)', flexShrink: 0,
              marginTop: '2px',
            }} />
          </Link>

          {/* Desktop nav — sits right next to the logo */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {NAV_LINKS.map(link => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link key={link.href} href={link.href} className="nav-item" style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'transparent',
                  transition: 'color 200ms ease',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.01em',
                }}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div style={{ flex: 1 }} />

          {/* Mobile toggle */}
          <button
            className="show-mobile"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: 'var(--space-2)' }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Ticker tape — flush beneath nav ── */}
      <TickerTape />

      {/* ── Mobile drawer ── */}
      {open && (
        <div style={{
          background: 'var(--bg-subtle)',
          borderBottom: '1px solid var(--border)',
          padding: 'var(--space-3) var(--space-4)',
          display: 'flex', flexDirection: 'column', gap: '2px',
        }}>
          {NAV_LINKS.map(link => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
                padding: '12px 14px',
                borderRadius: 'var(--radius-md)',
                fontSize: '16px',
                fontWeight: active ? 500 : 400,
                color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: 'transparent',
                textDecoration: 'none',
                display: 'block',
              }}>
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
