import React from 'react';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getTeamMembers } from '@/lib/queries';

export const revalidate = 3600;

const STATS = [
	{ label: 'Members', value: '24' },
	{ label: 'Positions', value: '13' },
	{ label: 'Fund Year', value: '2026' },
	{ label: 'Strategies', value: '4' },
];

const PRINCIPLES = [
	{
		n: '01',
		title: 'Research-Driven',
		desc: 'Every position starts with a written investment thesis reviewed by the full committee before capital is committed.',
	},
	{
		n: '02',
		title: 'Education First',
		desc: 'Members learn by doing — from building DCF models to presenting investment theses to the full membership.',
	},
	{
		n: '03',
		title: 'Risk Managed',
		desc: 'Strict position sizing, stop-loss discipline, and portfolio-level risk metrics guide every decision.',
	},
	{
		n: '04',
		title: 'Collaborative',
		desc: 'Investment decisions are made collectively through structured debate and peer review of all research.',
	},
];

export default async function AboutPage() {
	const teamMembers = await getTeamMembers();

	return (
		<>
			<Background />
			<Navbar />
			<main style={{ position: 'relative', zIndex: 1, paddingTop: '104px' }}>
				<div
					className="container"
					style={{
						paddingTop: 'var(--space-8)',
						paddingBottom: 'var(--space-9)',
					}}
				>
					{/* Header */}
					<div style={{ maxWidth: '640px', marginBottom: 'var(--space-9)' }}>
						<div
							className="eyebrow"
							style={{ marginBottom: 'var(--space-4)' }}
						>
							Student Investment Society · University of Sydney
						</div>
						<h1
							style={{
								fontSize: 'clamp(40px, 6vw, 64px)',
								fontWeight: 800,
								letterSpacing: '-0.035em',
								lineHeight: 1.05,
								marginBottom: 'var(--space-5)',
							}}
						>
							About Us
						</h1>
						<p
							style={{
								fontSize: 'var(--text-md)',
								color: 'var(--text-secondary)',
								lineHeight: 1.75,
							}}
						>
							SF Capital is a student-managed demo fund operating under the FXIA
							Society at the University of Sydney. We give students hands-on
							experience with portfolio management, investment research, and
							financial analysis — running four live strategies across equities,
							commodities, and ETFs.
						</p>
					</div>

					{/* Stats */}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(4, 1fr)',
							gap: '1px',
							background: 'var(--border)',
							marginBottom: 'var(--space-9)',
						}}
					>
						{STATS.map((s) => (
							<div
								key={s.label}
								style={{
									background: 'var(--bg-raised)',
									padding: 'var(--space-5) var(--space-6)',
								}}
							>
								<div
									className="metric-value"
									style={{
										fontSize: 'clamp(28px, 4vw, 44px)',
										marginBottom: 'var(--space-2)',
									}}
								>
									{s.value}
								</div>
								<div className="eyebrow">{s.label}</div>
							</div>
						))}
					</div>

					{/* Mission + Principles */}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: 'var(--space-9)',
							marginBottom: 'var(--space-9)',
							alignItems: 'start',
						}}
					>
						<div>
							<div
								className="eyebrow"
								style={{ marginBottom: 'var(--space-4)' }}
							>
								Our Mission
							</div>
							<h2
								style={{
									fontSize: 'clamp(22px, 3vw, 32px)',
									fontWeight: 700,
									letterSpacing: '-0.02em',
									marginBottom: 'var(--space-5)',
									lineHeight: 1.2,
								}}
							>
								Bridging academia and real markets.
							</h2>
							<p
								style={{
									fontSize: 'var(--text-base)',
									color: 'var(--text-secondary)',
									lineHeight: 1.8,
									marginBottom: 'var(--space-4)',
								}}
							>
								SF Capital was founded in 2026 with a singular purpose: to give
								university students the opportunity to manage a real portfolio using
								real investment strategies. We believe the best way to learn
								finance is to do it.
							</p>
							<p
								style={{
									fontSize: 'var(--text-base)',
									color: 'var(--text-secondary)',
									lineHeight: 1.8,
								}}
							>
								Our members span Finance, Economics, Computer Science, and
								Engineering — bringing diverse perspectives to every investment
								decision. We host weekly research presentations, collaborate with
								industry mentors, and open applications each semester.
							</p>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: 'var(--space-4)',
							}}
						>
							{PRINCIPLES.map((p) => (
								<div
									key={p.n}
									style={{
										display: 'flex',
										gap: 'var(--space-4)',
										paddingBottom: 'var(--space-4)',
										borderBottom: '1px solid var(--border)',
									}}
								>
									<span
										style={{
											fontSize: 'var(--text-xs)',
											fontWeight: 700,
											color: 'var(--accent-text)',
											minWidth: '22px',
											paddingTop: '2px',
										}}
									>
										{p.n}
									</span>
									<div>
										<div
											style={{
												fontSize: 'var(--text-base)',
												fontWeight: 600,
												color: 'var(--text-primary)',
												marginBottom: '4px',
											}}
										>
											{p.title}
										</div>
										<p
											style={{
												fontSize: 'var(--text-sm)',
												color: 'var(--text-secondary)',
												lineHeight: 1.65,
											}}
										>
											{p.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<hr className="divider" />

					{/* Team */}
					<div>
						<div
							className="eyebrow"
							style={{ marginBottom: 'var(--space-3)' }}
						>
							The Team
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'baseline',
								marginBottom: 'var(--space-7)',
								flexWrap: 'wrap',
								gap: 'var(--space-3)',
							}}
						>
							<h2
								style={{
									fontSize: 'clamp(22px, 3vw, 32px)',
									fontWeight: 700,
									letterSpacing: '-0.02em',
								}}
							>
								Meet the members.
							</h2>
							<span
								style={{
									fontSize: 'var(--text-sm)',
									color: 'var(--text-tertiary)',
								}}
							>
								{teamMembers.length} members · Fund Year 2026
							</span>
						</div>

						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
								gap: 'var(--space-4)',
							}}
						>
							{teamMembers.map((member) => {
								const initials = member.name
									.split(' ')
									.map((n: string) => n[0])
									.join('')
									.slice(0, 2)
									.toUpperCase();
								return (
									<div
										key={member.name}
										className="surface"
										style={{ padding: 'var(--space-5)' }}
									>
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: 'var(--space-3)',
												marginBottom: 'var(--space-4)',
											}}
										>
											<div
												style={{
													width: '40px',
													height: '40px',
													borderRadius: 'var(--radius-md)',
													background: 'var(--accent-dim)',
													border: '1px solid rgba(155,18,57,0.18)',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													fontSize: '13px',
													fontWeight: 800,
													color: 'var(--accent-text)',
													flexShrink: 0,
													letterSpacing: '0.04em',
												}}
											>
												{initials}
											</div>
											<div>
												<div
													style={{
														fontSize: 'var(--text-base)',
														fontWeight: 700,
														color: 'var(--text-primary)',
														lineHeight: 1.2,
													}}
												>
													{member.name}
												</div>
												<div
													style={{
														fontSize: 'var(--text-xs)',
														color: 'var(--accent-text)',
														fontWeight: 600,
														textTransform: 'uppercase',
														letterSpacing: '0.07em',
														marginTop: '3px',
													}}
												>
													{member.role}
												</div>
											</div>
										</div>
										<p
											style={{
												fontSize: 'var(--text-sm)',
												color: 'var(--text-secondary)',
												lineHeight: 1.65,
											}}
										>
											{member.bio}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
