'use client';

import React, { useState, useEffect } from 'react';

export default function MobileWarning() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: 'rgba(8, 10, 15, 0.97)',
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
        maxWidth: '360px',
        width: '100%',
        textAlign: 'center',
      }}>
        {/* Icon */}
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>💻</div>

        {/* Title */}
        <div style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#e8eaf0',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          Desktop Only, For Now
        </div>

        {/* Body */}
        <p style={{
          fontSize: '14px',
          color: 'rgba(232,234,240,0.55)',
          lineHeight: 1.7,
          marginBottom: '28px',
        }}>
          SF Capital is currently designed for <strong style={{ color: '#e8eaf0' }}>laptop and desktop</strong> screens only. A mobile experience is in the works, check back soon.
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
          Continue anyway
        </button>
      </div>
    </div>
  );
}
