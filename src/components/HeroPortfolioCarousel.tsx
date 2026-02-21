'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const ITEMS = [
	{
		num: '01',
		name: 'Horizon Growth Portfolio',
		target: '18–30%',
		color: '#3b82f6',
		bg: 'rgba(59,130,246,0.07)',
		border: 'rgba(59,130,246,0.18)',
		overview: 'The Horizon Growth Portfolio combines fundamental equity research with forward-looking thematic exposure. It targets high-quality businesses benefiting from secular tailwinds, from AI infrastructure and energy transition to global consumer growth and digital platforms.',
		coverage: ['Global equities (US, AU, EU, China, Japan, Emerging Markets)', 'Tech and AI infrastructure', 'Clean energy and critical minerals', 'Healthcare, biotech and digital platforms'],
		strategies: ['Fundamental bottom-up equity research', 'Thematic overlay on structural trends', 'Long-term compounders with active risk management'],
	},
	{
		num: '02',
		name: 'Macro Portfolio',
		target: '8–15%',
		color: '#f59e0b',
		bg: 'rgba(245,158,11,0.07)',
		border: 'rgba(245,158,11,0.18)',
		overview: 'The Macro Portfolio adopts a flexible, top-down approach, allocating capital across asset classes and regions in response to global economic conditions. The strategy identifies shifts in growth, inflation, and monetary policy, using these signals to inform sector rotation and asset allocation decisions.',
		coverage: ['ETFs (equity indices, bonds, sectors)', 'Commodities (energy, metals, agriculture)', 'Currency & forex (AUD/USD, EUR/USD, USD/JPY)', 'Sector rotation'],
		strategies: ['Macro & policy analysis', 'Sector and asset-class rotation', 'Drawdown control'],
	},
	{
		num: '03',
		name: 'Quantitative Strategy',
		target: '30–50%',
		color: '#a855f7',
		bg: 'rgba(168,85,247,0.07)',
		border: 'rgba(168,85,247,0.18)',
		overview: 'The Quantitative Strategy Portfolio implements systematic investment models designed to capture persistent market inefficiencies. The strategy emphasises consistency, transparency, and repeatability, limiting discretionary intervention. Models are monitored and refined over time.',
		coverage: ['Global equities', 'ETFs & index products', 'Factor exposures (momentum, value, quality)', 'Forex & currency pairs (G10 and EM FX)'],
		strategies: ['Quantitative factor models', 'Algorithmic trading signals', 'Backtested rules-based execution'],
	},
];

// Clone array: [last, ...items, first] for seamless looping
const CLONED = [ITEMS[ITEMS.length - 1], ...ITEMS, ITEMS[0]];
const CARD_WIDTH = 500;
const CARD_HEIGHT = 360;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;

export default function HeroPortfolioCarousel() {
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);
	const x = useMotionValue(-1 * STEP);
	const dragStartX = useRef(0);

	const goToClone = useCallback(
		(cloneIdx: number, instant = false) => {
			if (instant) {
				x.set(-cloneIdx * STEP);
				return;
			}
			animate(x, -cloneIdx * STEP, {
				type: 'spring',
				stiffness: 300,
				damping: 35,
			});
		},
		[x]
	);

	const goTo = useCallback(
		(itemIdx: number) => {
			const wrapped = ((itemIdx % ITEMS.length) + ITEMS.length) % ITEMS.length;
			setActive(wrapped);
			goToClone(wrapped + 1);
		},
		[goToClone]
	);

	const next = useCallback(() => {
		const nextActive = (active + 1) % ITEMS.length;
		animate(x, -(active + 2) * STEP, {
			type: 'spring',
			stiffness: 300,
			damping: 35,
			onComplete: () => { if (active === ITEMS.length - 1) x.set(-1 * STEP); },
		});
		setActive(nextActive);
	}, [active, x]);

	const prev = useCallback(() => {
		const prevActive = (active - 1 + ITEMS.length) % ITEMS.length;
		animate(x, -active * STEP, {
			type: 'spring',
			stiffness: 300,
			damping: 35,
			onComplete: () => { if (active === 0) x.set(-ITEMS.length * STEP); },
		});
		setActive(prevActive);
	}, [active, x]);

	useEffect(() => {
		if (paused) return;
		const id = setInterval(() => next(), 5000);
		return () => clearInterval(id);
	}, [paused, next]);

	const p = ITEMS[active];

	const NavBtn = ({ onClick, label }: { onClick: () => void; label: string }) => (
		<button
			onClick={onClick}
			style={{
				width: '54px', height: '54px', borderRadius: '14px', flexShrink: 0,
				background: 'rgba(255,255,255,0.07)',
				border: '1px solid rgba(255,255,255,0.13)',
				color: 'rgba(255,255,255,0.80)',
				cursor: 'pointer',
				fontSize: '22px', fontWeight: 700,
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				transition: 'all 0.2s',
			}}
		>{label}</button>
	);

	return (
		<div
			style={{ width: '100%', userSelect: 'none' }}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			{/* Header */}
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
				<span style={{ fontSize: '25px', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
					Explore our 2026 Portfolios
				</span>
			</div>

			{/* Track viewport */}
			<div style={{ overflow: 'hidden', borderRadius: '18px', width: `${CARD_WIDTH}px` }}>
				<motion.div
					style={{ display: 'flex', gap: `${GAP}px`, x, cursor: 'grab' }}
					whileTap={{ cursor: 'grabbing' }}
					drag="x"
					dragConstraints={{ left: -(CLONED.length - 1) * STEP, right: 0 }}
					dragElastic={0.08}
					onDragStart={(_, info) => { dragStartX.current = info.point.x; }}
					onDragEnd={(_, info) => {
						const delta = info.point.x - dragStartX.current;
						if (delta < -40) next();
						else if (delta > 40) prev();
						else goToClone(active + 1);
					}}
				>
					{CLONED.map((item, ci) => (
						<div
							key={ci}
							style={{
								minWidth: `${CARD_WIDTH}px`,
								width: `${CARD_WIDTH}px`,
								height: `${CARD_HEIGHT}px`,
								borderRadius: '18px',
								border: `1px solid ${item.border}`,
								background: `linear-gradient(135deg, ${item.bg} 0%, rgba(8,10,15,0.65) 100%)`,
								backdropFilter: 'blur(24px)',
								WebkitBackdropFilter: 'blur(24px)',
								overflow: 'hidden',
								position: 'relative',
								flexShrink: 0,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}
						>
							{/* Glow */}
							<div style={{
								position: 'absolute', top: '-60px', right: '-60px',
								width: '200px', height: '200px', borderRadius: '50%',
								background: item.color, opacity: 0.07, filter: 'blur(50px)',
								pointerEvents: 'none',
							}} />

							<div style={{ padding: '18px 22px 14px', display: 'flex', flexDirection: 'column', flex: 1, gap: '12px' }}>
								{/* Header row: num + name + target badge */}
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
										<span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.25)', flexShrink: 0 }}>{item.num}</span>
										<span style={{ fontSize: '19px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
									</div>
									<div style={{
										flexShrink: 0,
										borderRadius: '8px', padding: '5px 12px', textAlign: 'center',
										background: 'rgba(0,0,0,0.35)', border: `1px solid ${item.border}`,
									}}>
										<div style={{ fontSize: '18px', fontWeight: 900, color: item.color, lineHeight: 1, letterSpacing: '-0.02em' }}>{item.target}</div>
										<div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)', marginTop: '2px', letterSpacing: '0.10em', textTransform: 'uppercase' }}>Target</div>
									</div>
								</div>

								{/* Overview */}
								<p style={{ margin: 0, fontSize: '12.5px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.65 }}>
									{item.overview}
								</p>

								{/* Coverage + Strategy two-column */}
								<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1 }}>
									<div>
										<div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.color, marginBottom: '6px', opacity: 0.85 }}>Coverage</div>
										<ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
											{item.coverage.map((c, i) => (
												<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '5px', fontSize: '11.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.45 }}>
													<span style={{ color: item.color, opacity: 0.6, flexShrink: 0 }}>–</span>
													{c}
												</li>
											))}
										</ul>
									</div>
									<div>
										<div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.color, marginBottom: '6px', opacity: 0.85 }}>Strategy</div>
										<ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
											{item.strategies.map((s, i) => (
												<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '5px', fontSize: '11.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.45 }}>
													<span style={{ color: item.color, opacity: 0.6, flexShrink: 0 }}>–</span>
													{s}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>

							{/* Progress bar only */}
							<div style={{ height: '3px', background: 'rgba(255,255,255,0.04)', borderBottomLeftRadius: '18px', borderBottomRightRadius: '18px' }}>
								{!paused && ci === active + 1 && (
									<motion.div
										key={`prog-${active}`}
										initial={{ scaleX: 0 }}
										animate={{ scaleX: 1 }}
										transition={{ duration: 5, ease: 'linear' }}
										style={{ height: '100%', background: item.color, opacity: 0.45, transformOrigin: 'left', borderBottomLeftRadius: '18px' }}
									/>
								)}
							</div>
						</div>
					))}
				</motion.div>
			</div>

			{/* Bottom controls */}
			<div style={{ width: `${CARD_WIDTH}px`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
				<NavBtn onClick={prev} label="←" />
				<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
					{ITEMS.map((item, i) => (
						<button key={i} onClick={() => goTo(i)} style={{
							width: i === active ? '30px' : '9px', height: '9px',
							borderRadius: '5px', border: 'none', padding: 0, cursor: 'pointer',
							background: i === active ? p.color : 'rgba(255,255,255,0.13)',
							transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
						}} />
					))}
				</div>
				<NavBtn onClick={next} label="→" />
			</div>
		</div>
	);
}
