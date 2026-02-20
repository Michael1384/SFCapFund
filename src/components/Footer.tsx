import React from 'react';
import Link from 'next/link';

// Footer is used in both server and client pages.
// Hover colour changes are handled via CSS so no event handlers are needed.

const LINKS = [
  { label: 'Our Portfolios',  href: '/portfolios' },
  { label: 'Our Performance', href: '/performance' },
  { label: 'News',            href: '/news' },
  { label: 'About Us',        href: '/about' },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      marginTop: 'var(--space-9)',
    }}>
      <div className="container" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-7)', flexWrap: 'wrap' }}>

          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 'var(--space-2)' }}>
              SF Capital
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 1.65 }}>
              University of Sydney student-managed demo fund. A division of the FXIA Society.
            </p>
            <div style={{ marginTop: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <div className="live-dot" />
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', letterSpacing: '0.05em' }}>
                Fund Year 2026 · Mar 1 – Dec 31
              </span>
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: 'flex', gap: 'var(--space-7)' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Navigate</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {LINKS.map(l => (
                  <Link key={l.href} href={l.href} className="footer-link" style={{ fontSize: 'var(--text-sm)', textDecoration: 'none' }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 'var(--space-6)',
          paddingTop: 'var(--space-5)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
        }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
            © 2026 SF Capital · University of Sydney · FXIA Society
          </span>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
            For educational purposes only. Not financial advice.
          </span>
        </div>
      </div>
    </footer>
  );
}
