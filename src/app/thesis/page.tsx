'use client';

import React from 'react';
import Background from '@/components/Background';

export default function ThesisPage() {
  return (
    <>
      <Background />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '104px', overflowX: 'hidden' }}>
        <div className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 'var(--space-9)', maxWidth: '90%' }}>
          <div className="eyebrow" style={{ marginBottom: '6px' }}>Research · Investment Thesis</div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
            marginBottom: 'var(--space-4)',
            marginTop: '2px',
          }}>
            Thesis
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', lineHeight: 1.7, maxWidth: '560px' }}>
            Content coming soon. SF Capital&apos;s investment thesis and research framework will be published here.
          </p>
        </div>
      </main>
    </>
  );
}
