import React from 'react';
import Link from 'next/link';

// Footer is used in both server and client pages.
// Hover colour changes are handled via CSS so no event handlers are needed.

const LINKS = [
  { label: 'Our Portfolios',  href: '/portfolios' },
  { label: 'Our Performance', href: '/performance' },
  { label: 'About Us',        href: '/about' },
];

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid var(--border)',
      marginTop: 'var(--space-9)',
    }}>
      <div className="container" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-7)', flexWrap: 'wrap' }}>

          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 'var(--space-3)' }}>
              SF Capital
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', lineHeight: 1.65, marginBottom: 'var(--space-2)', opacity: 0.75 }}>
              This site is a solo dev project by<br />Michael Deng, FXIA/SFCap VP &amp; CTO
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
              {/* Instagram */}
              <a href="https://www.instagram.com/michael.dengg/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', opacity: 0.55, display: 'flex', alignItems: 'center', transition: 'opacity 0.2s' }} className="footer-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/michael-deng-254784244/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', opacity: 0.55, display: 'flex', alignItems: 'center', transition: 'opacity 0.2s' }} className="footer-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', lineHeight: 1.65, margin: 0, opacity: 0.6 }}>
              (with the help of my friend claude) :)
            </p>
          </div>

          {/* Disclaimer — centre column */}
          <div style={{ flex: 1, maxWidth: '380px', minWidth: '220px', marginRight: 'var(--space-7)' }}>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', lineHeight: 1.7, opacity: 0.55, margin: 0 }}>
              All capital deployed is demo money only. SF Capital is affiliated with industry partners and sponsors, and operates in full compliance with USU regulations and Australian law. All research, analysis, and investment decisions are conducted solely to simulate professional industry practice.
            </p>
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
            © 2026 University of Sydney ·{' '}
            <a href="https://www.instagram.com/fxia.usyd/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)', textDecoration: 'none' }} className="footer-link">
              FXIA Society
            </a>
            {' '}· SF Capital
          </span>
        </div>
      </div>
    </footer>
  );
}
