'use client';

import React, { useState, useEffect } from 'react';

function getOrdinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function MVPNotice() {
  const [visible, setVisible] = useState(false);
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const now = new Date();
    const day = getOrdinal(now.getDate());
    const month = now.toLocaleString('en-AU', { month: 'long' });
    const year = now.getFullYear();
    setDateStr(`${day} of ${month}, ${year}`);
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9998,
      background: 'rgba(8, 10, 15, 0.96)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        background: '#0e1117',
        border: '1px solid #8b003055',
        borderRadius: '12px',
        padding: '36px 28px',
        maxWidth: '420px',
        width: '100%',
        textAlign: 'center',
      }}>
        {/* Date badge */}
        <div style={{
          display: 'inline-block',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#8b0030',
          border: '1px solid #8b003055',
          borderRadius: '4px',
          padding: '4px 10px',
          marginBottom: '16px',
        }}>
          {dateStr}
        </div>

        {/* Title */}
        <div style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#e8eaf0',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          MVP Preview
        </div>

        {/* Body */}
        <p style={{
          fontSize: '14px',
          color: 'rgba(232,234,240,0.55)',
          lineHeight: 1.75,
          marginBottom: '28px',
          margin: '0 0 28px 0',
        }}>
          This site is currently an <strong style={{ color: '#e8eaf0' }}>MVP for display purposes only</strong>. All fund data, holdings, and performance figures shown are placeholder information. The SF Capital fund has not yet commenced for 2026. Please keep this in mind as you browse, and expect the real fund to go live <strong style={{ color: '#e8eaf0' }}>sometime soon</strong>.
        </p>

        {/* CTA */}
        <button
          onClick={() => setVisible(false)}
          style={{
            background: '#8b0030',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '12px 28px',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            width: '100%',
            letterSpacing: '0.01em',
          }}
        >
          Got it, take me in
        </button>
      </div>
    </div>
  );
}
