# SF Capital — Copilot Instructions

## Critical Rules

1. **NEVER use `next/font/google`** — use `<link>` tags in layout.tsx head instead
2. **NEVER use `@theme {}` in globals.css** — causes PostCSS crash with Tailwind v4
3. **NEVER use `Math.random()` or `new Date()` at module level** — causes SSR hydration mismatch
4. **ALWAYS use `React.Fragment` with `key` prop** in `.map()` when returning multiple elements — never `<>` shorthand with key
5. **ALWAYS `import React from 'react'`** explicitly in every component file
6. **ALWAYS add `'use client'`** to components using hooks, framer-motion, recharts, or browser APIs
7. **Use inline `style={{}}` for layout-critical styles** — don't rely on Tailwind utility classes for grid/flex sizing
8. **globals.css must start with `@import "tailwindcss";`** as the very first line

## Brand Colors
- Background: `#080a0f`
- Maroon Primary: `#8b0030`
- Maroon Light: `#c0003a`, `#d4375a`, `#e06f88`
- Positive/Gain: `#10b981`
- Negative/Loss: `#ef4444`
- Text: `#e8eaf0`

## Stack
- Next.js 15 + App Router + TypeScript
- Tailwind CSS v4 (no @apply, no @theme)
- Framer Motion v11
- Recharts v2
- Lucide React
- react-countup
