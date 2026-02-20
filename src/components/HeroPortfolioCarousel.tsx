'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const ITEMS = [
	{
		num: '01',
		name: 'Growth Portfolio',
		strategy: 'Long-Term Equity',
		target: '+18%',
		color: '#10b981',
		bg: 'rgba(16,185,129,0.07)',
		border: 'rgba(16,185,129,0.18)',
		desc: 'High-conviction positions in compounding businesses with durable competitive advantages.',
		tags: ['Equities', 'Buy & Hold', 'Large Cap'],
		stat: { label: 'Avg Hold', value: '18mo+' },
	},
	{
		num: '02',
		name: 'Income Portfolio',
		strategy: 'Dividend & Value',
		target: '+10%',
		color: '#60a5fa',
		bg: 'rgba(96,165,250,0.07)',
		border: 'rgba(96,165,250,0.18)',
		desc: 'Yield-focused, defensive positions prioritising consistent cashflows and capital preservation.',
		tags: ['Dividends', 'Value', 'Defensive'],
		stat: { label: 'Avg Yield', value: '4–6%' },
	},
	{
		num: '03',
		name: 'Macro Portfolio',
		strategy: 'Commodities & ETFs',
		target: '+14%',
		color: '#fbbf24',
		bg: 'rgba(251,191,36,0.07)',
		border: 'rgba(251,191,36,0.18)',
		desc: 'Top-down macro themes expressed through ETFs, commodities, and sector rotations.',
		tags: ['ETFs', 'Commodities', 'Global'],
		stat: { label: 'Asset Classes', value: '6+' },
	},
	{
		num: '04',
		name: 'Thematic Portfolio',
		strategy: 'Emerging Trends',
		target: '+22%',
		color: '#c084fc',
		bg: 'rgba(192,132,252,0.07)',
		border: 'rgba(192,132,252,0.18)',
		desc: 'Concentrated bets on structural shifts — AI infrastructure, energy transition, and biotech.',
		tags: ['Technology', 'High Growth', 'Thematic'],
		stat: { label: 'Conviction', value: 'High' },
	},
];

// Clone array: [last, ...items, first] for seamless looping
const CLONED = [ITEMS[ITEMS.length - 1], ...ITEMS, ITEMS[0]];
const CARD_WIDTH = 500;
const CARD_HEIGHT = 300;
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

							<div style={{ padding: '18px 22px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flex: 1 }}>
								{/* Left: name + strategy + desc */}
								<div style={{ flex: 1, minWidth: 0, marginRight: '16px' }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
										<span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.25)' }}>{item.num}</span>
										<span style={{ fontSize: '18px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{item.name}</span>
										<span style={{
											fontSize: '9px', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase',
											color: item.color, padding: '3px 8px', borderRadius: '5px',
											background: `${item.color}18`, border: `1px solid ${item.color}30`,
										}}>{item.strategy}</span>
									</div>
									<p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.6, margin: 0 }}>
										{item.desc}
									</p>
								</div>

								{/* Right: target badge + stat */}
								<div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
									<div style={{
										borderRadius: '10px', padding: '8px 14px', textAlign: 'center',
										background: 'rgba(0,0,0,0.35)', border: `1px solid ${item.border}`,
									}}>
										<div style={{ fontSize: '22px', fontWeight: 900, color: item.color, lineHeight: 1, letterSpacing: '-0.02em' }}>{item.target}</div>
										<div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)', marginTop: '3px', letterSpacing: '0.10em', textTransform: 'uppercase' }}>Target</div>
									</div>
									<div style={{ textAlign: 'right' }}>
										<div style={{ fontSize: '14px', fontWeight: 800, color: 'rgba(255,255,255,0.65)', lineHeight: 1 }}>{item.stat.value}</div>
										<div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.22)', marginTop: '2px', letterSpacing: '0.07em', textTransform: 'uppercase' }}>{item.stat.label}</div>
									</div>
								</div>
							</div>

							{/* Tags row + progress bar */}
							<div>
								<div style={{ padding: '10px 22px', display: 'flex', gap: '5px' }}>
									{item.tags.map(tag => (
										<span key={tag} style={{
											fontSize: '9px', fontWeight: 600, padding: '3px 8px', borderRadius: '5px',
											background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
											color: 'rgba(255,255,255,0.30)', letterSpacing: '0.04em',
										}}>{tag}</span>
									))}
								</div>
								<div style={{ height: '3px', background: 'rgba(255,255,255,0.04)' }}>
									{!paused && ci === active + 1 && (
										<motion.div
											key={`prog-${active}`}
											initial={{ scaleX: 0 }}
											animate={{ scaleX: 1 }}
											transition={{ duration: 5, ease: 'linear' }}
											style={{ height: '100%', background: item.color, opacity: 0.45, transformOrigin: 'left' }}
										/>
									)}
								</div>
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
