'use client';
import React from 'react';
import Background from '@/components/Background';

const ROLES = [
  {
    portfolio: 'Horizon Growth Portfolio',
    accent: '#3b82f6',
    description: 'Fundamental equity research across global markets, covering technology, clean energy, healthcare, consumer platforms, and emerging markets.',
    analysts: 5,
  },
  {
    portfolio: 'Macro Portfolio',
    accent: '#f59e0b',
    description: 'Top-down macroeconomic research spanning commodities, currencies, interest rates, sector rotation, and geopolitical risk.',
    analysts: 5,
  },
  {
    portfolio: 'Quantitative Strategy Portfolio',
    accent: '#a855f7',
    description: 'Systematic model development including factor research, backtesting, algorithmic signal generation, and data engineering.',
    analysts: 5,
  },
];

const CONTACTS = [
  {
    name: 'Aariz Ery',
    title: 'FXIA President',
    linkedin: 'https://www.linkedin.com/in/aariz-e/',
  },
  {
    name: 'Michael Deng',
    title: 'FXIA Vice President & CTO',
    linkedin: 'https://www.linkedin.com/in/michael-deng-254784244/',
  },
];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
    </svg>
  );
}

export default function OpportunitiesPage() {
  return (
    <>
      <Background />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '104px' }}>
        <div className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 'var(--space-9)' }}>

          {/* Header */}
          <div style={{ marginBottom: 'var(--space-7)' }}>
            <div className="eyebrow" style={{ marginBottom: '6px' }}>Join SF Capital · Fund Year 2026</div>
            <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, letterSpacing: '-0.025em' }}>Opportunities</h1>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', marginTop: 'var(--space-3)', lineHeight: 1.8, maxWidth: '720px' }}>
              SF Capital draws from a society of over 300 members, but the fund itself operates with just 15. We are recruiting <strong style={{ color: 'var(--text-primary)' }}>5 analysts per portfolio</strong>, across three independently managed books. Competition is high, and standards are even higher.
            </p>
          </div>

          {/* Role cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)', marginBottom: 'var(--space-4)' }}>
            {ROLES.map((role) => (
              <div key={role.portfolio} style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderTop: `3px solid ${role.accent}`, borderRadius: '6px', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: '6px' }}>Analyst · {role.analysts} positions</div>
                  <div style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{role.portfolio}</div>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {role.description}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: role.accent, display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Applications opening shortly</span>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: 'var(--space-4)' }} />

          {/* Get Involved */}
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>How to Apply</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 'var(--space-6)', lineHeight: 1.2 }}>
              Get involved with the FXIA.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
              {[
                {
                  n: '01',
                  title: 'Trading competition',
                  body: 'SF Capital may offer direct or priority access to roles for standout performers in FXIA trading competitions. Demonstrating skill in a competitive setting is one of the strongest signals we look for in prospective analysts.',
                },
                {
                  n: '02',
                  title: 'Formal applications',
                  body: 'Applications will open shortly through official FXIA Society channels. You will be asked to specify which portfolio you are applying to, submit a brief written pitch, and complete a short screening process with current fund members.',
                },
                {
                  n: '03',
                  title: 'Reach out directly',
                  body: 'If you have questions or want to express early interest, reach out to a current member of the SF Capital team directly. We are always happy to talk to motivated students before applications open.',
                },
              ].map(item => (
                <div key={item.n} style={{ display: 'flex', gap: 'var(--space-4)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--accent-text)', fontVariantNumeric: 'tabular-nums', minWidth: '22px', paddingTop: '3px' }}>{item.n}</span>
                  <div>
                    <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>{item.title}</div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact cards */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Contact the team</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 320px))', gap: 'var(--space-4)' }}>
                {CONTACTS.map(c => (
                  <a
                    key={c.name}
                    href={c.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 'var(--space-4)', background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: '6px', padding: 'var(--space-4) var(--space-5)', transition: 'border-color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>{c.name}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', letterSpacing: '0.03em' }}>{c.title}</div>
                    </div>
                    <LinkedInIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: 0 }} />

          {/* What we look for */}
          <div style={{ paddingTop: 'var(--space-5)' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 'var(--space-3)', lineHeight: 1.2 }}>
              What We Look For
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-5)', maxWidth: '680px' }}>
              We value drive and curiosity over credentials. There is no required year level or GPA threshold. What we care about is whether you are genuinely engaged with markets and willing to put in the work.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {[
                'Genuine interest in financial markets and investment research',
                'Analytical mindset with strong attention to detail',
                'Commitment to a rigorous, process-driven research standard',
                'Ability to work independently and as part of a small, focused team',
                'Any year level welcome — skills and attitude matter more than seniority',
                'Prior experience in trading competitions, financial modelling, or equity research is a plus',
              ].map((point, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-text)', flexShrink: 0, marginTop: '9px' }} />
                  <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>
    </>
  );
}
