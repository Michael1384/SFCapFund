'use client';
import React, { useState, useEffect } from 'react';
import Background from '@/components/Background';

const STATS = [
	{ label: 'FXIA Society Members', value: '300+' },
	{ label: 'Fund Members', value: '18' },
	{ label: 'Open Positions', value: '15' },
	{ label: 'Fund Year', value: '2026' },
];

const FUND_TEAMS = [
	{
		portfolio: 'Horizon Growth Portfolio',
		color: '#3b82f6',
		pm: { name: 'Aariz Ery', role: 'Portfolio Manager & FXIA President', photo: null },
		analysts: ['Jamie Lee', 'Priya Nair', 'Tom Wu', 'Chloe Martin'],
	},
	{
		portfolio: 'Macro Portfolio',
		color: '#f59e0b',
		pm: { name: 'Michael Deng', role: 'Portfolio Manager, VP & Tech Officer', photo: null },
		analysts: ['Sarah Chen', 'Ryan Park', 'Mia Torres', 'Luca Rossi'],
	},
	{
		portfolio: 'Quantitative Strategy',
		color: '#a855f7',
		pm: { name: 'William Destro', role: 'Portfolio Manager & Events Director', photo: null },
		analysts: ['Nina Patel', 'Kevin Zhang', 'Olivia Brown', 'Sam Nguyen'],
	},
];

export default function AboutClient() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 1024);
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	}, []);

	return (
		<>
			<Background />
			<main style={{ position: 'relative', zIndex: 1, paddingTop: '104px', overflowX: 'hidden' }}>
				<div className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 'var(--space-9)' }}>

				{/* Header */}
				<div style={{ marginBottom: 'var(--space-5)' }}>
					<div className="eyebrow" style={{ marginBottom: '6px', fontSize: isMobile ? '10px' : undefined }}>Overview · Fund Year 2026</div>
					<h1 style={{ fontSize: isMobile ? '24px' : 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.05, marginBottom: 'var(--space-4)', marginTop: '2px' }}>
						About Us
					</h1>
					<div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: isMobile ? 'var(--space-3)' : 'var(--space-6)' }}>
						<p style={{ fontSize: isMobile ? '13px' : 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.85, margin: 0 }}>
							SF Capital is the <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>flagship investment fund</strong> of the FXIA Society at the University of Sydney; a society with <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>over 300 members</strong>. The fund itself is a select group of students running <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>three live portfolios</strong> across equities, commodities, ETFs, and systematic strategies.
						</p>
						{!isMobile && (
							<React.Fragment>
								<p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.85, margin: 0 }}>
									SF Capital was founded in <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>2025</strong> with a singular purpose: to give university students the opportunity to <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>manage a real portfolio</strong> using real investment strategies. We believe the best way to learn finance is to <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>do it</strong>.
								</p>
								<p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.85, margin: 0 }}>
									Our members span <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Finance, Economics, Computer Science, and Engineering</strong>; bringing diverse perspectives to every investment decision. We host <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>weekly research presentations</strong>, collaborate with industry mentors, and open applications each semester.
								</p>
							</React.Fragment>
						)}
					</div>
				</div>

				{/* Stats */}
				<div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)', marginBottom: 'var(--space-2)' }}>
					{STATS.map((s) => (
						<div key={s.label} style={{ background: 'var(--bg-raised)', padding: isMobile ? 'var(--space-4)' : 'var(--space-5) var(--space-6)' }}>
							<div className="metric-value" style={{ fontSize: isMobile ? '22px' : 'clamp(28px, 4vw, 44px)', marginBottom: 'var(--space-2)' }}>
								{s.value}
							</div>
							<div className="eyebrow" style={{ fontSize: isMobile ? '9px' : undefined }}>{s.label}</div>
						</div>
					))}
				</div>

				<hr className="divider" />

				{/* Fund Structure */}
				<div style={{ marginTop: 'var(--space-2)' }}>
					<div className="eyebrow" style={{ marginBottom: 'var(--space-3)', fontSize: isMobile ? '10px' : undefined }}>Fund Structure</div>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-4)', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
						<h2 style={{ fontSize: isMobile ? '20px' : 'clamp(22px, 3vw, 32px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
							Three teams. Three portfolios.
						</h2>
						{!isMobile && (
							<span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
								Each portfolio carries equal weighting (1/3 of the fund)
							</span>
						)}
					</div>

					{/* Team columns */}
					<div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
						{FUND_TEAMS.map((team) => (
							<div key={team.portfolio} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>

								{/* Portfolio label */}
								<div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: team.color, textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: 'var(--space-2)', borderBottom: `2px solid ${team.color}` }}>
									{team.portfolio}
								</div>

								{/* Portfolio Manager */}
								<div style={{ background: 'var(--bg-raised)', border: `1px solid ${team.color}33`, borderRadius: 'var(--radius-md)', padding: isMobile ? 'var(--space-4)' : 'var(--space-5)' }}>
									<div style={{
										width: isMobile ? '52px' : '72px',
										height: isMobile ? '52px' : '72px',
										borderRadius: '50%',
										background: `${team.color}18`,
										border: `2px solid ${team.color}44`,
										display: 'flex', alignItems: 'center', justifyContent: 'center',
										fontSize: isMobile ? '18px' : '24px',
										color: team.color, marginBottom: 'var(--space-3)',
										fontWeight: 800, letterSpacing: '-0.02em',
									}}>
										{team.pm.name.split(' ').map((n: string) => n[0]).join('')}
									</div>
									<div style={{ fontSize: isMobile ? '13px' : 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>{team.pm.name}</div>
									<div style={{ fontSize: isMobile ? '10px' : 'var(--text-xs)', color: team.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', marginTop: '4px' }}>
										{team.pm.role}
									</div>
								</div>

								{/* Analysts */}
								<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
									{team.analysts.map((analyst) => (
										<div key={analyst} style={{
											background: 'var(--bg-raised)',
											border: '1px solid var(--border)',
											borderRadius: 'var(--radius-sm)',
											padding: isMobile ? 'var(--space-2) var(--space-3)' : 'var(--space-3) var(--space-4)',
											display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
										}}>
											<div style={{
												width: isMobile ? '24px' : '28px',
												height: isMobile ? '24px' : '28px',
												borderRadius: '50%',
												background: `${team.color}14`,
												border: `1px solid ${team.color}33`,
												display: 'flex', alignItems: 'center', justifyContent: 'center',
												fontSize: '10px', fontWeight: 700, color: team.color, flexShrink: 0,
											}}>
												{analyst.split(' ').map((n: string) => n[0]).join('')}
											</div>
											<div>
												<div style={{ fontSize: isMobile ? '12px' : 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{analyst}</div>
												<div style={{ fontSize: isMobile ? '10px' : 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Analyst</div>
											</div>
										</div>
									))}
								</div>

							</div>
						))}
					</div>
				</div>

				</div>
			</main>
		</>
	);
}
