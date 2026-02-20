-- ============================================================
-- SF Capital — Supabase SQL Schema
-- Paste this into: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- ── Enable UUID extension ────────────────────────────────
create extension if not exists "uuid-ossp";

-- ── holdings ─────────────────────────────────────────────
create table if not exists holdings (
  id           text primary key default uuid_generate_v4()::text,
  ticker       text        not null,
  name         text        not null,
  asset_class  text        not null check (asset_class in ('equity','commodity','etf','crypto','bond','cash')),
  shares       numeric     not null,
  avg_cost     numeric     not null,
  currency     text        not null default 'USD',
  sector       text,
  thesis       text,
  added_date   date        not null,
  created_at   timestamptz not null default now()
);

-- ── portfolios ───────────────────────────────────────────
create table if not exists portfolios (
  id            text primary key,   -- 'overall' | 'short-term' | etc.
  name          text        not null,
  description   text        not null,
  inception     date        not null,
  target_return text        not null,
  strategy      text        not null,
  created_at    timestamptz not null default now()
);

-- ── portfolio_holdings (junction) ────────────────────────
create table if not exists portfolio_holdings (
  portfolio_id  text not null references portfolios(id) on delete cascade,
  holding_id    text not null references holdings(id)   on delete cascade,
  primary key (portfolio_id, holding_id)
);

-- ── price_snapshots ──────────────────────────────────────
create table if not exists price_snapshots (
  id             uuid        primary key default uuid_generate_v4(),
  ticker         text        not null,
  price          numeric     not null,
  previous_close numeric     not null,
  change         numeric     not null default 0,
  change_pct     numeric     not null default 0,
  volume         bigint,
  market_cap     bigint,
  fetched_at     timestamptz not null default now(),
  date           date        not null,
  unique (ticker, date)      -- allows upsert on conflict
);

create index if not exists price_snapshots_ticker_date on price_snapshots (ticker, date desc);

-- ── news_items ───────────────────────────────────────────
create table if not exists news_items (
  id           uuid        primary key default uuid_generate_v4(),
  title        text        not null,
  summary      text        not null,
  source       text        not null,
  url          text        not null,
  published_at timestamptz not null,
  sentiment    text        not null check (sentiment in ('positive','negative','neutral')),
  tickers      text[],
  created_at   timestamptz not null default now()
);

create index if not exists news_items_published_at on news_items (published_at desc);

-- ── team_members ─────────────────────────────────────────
create table if not exists team_members (
  id         uuid    primary key default uuid_generate_v4(),
  name       text    not null,
  role       text    not null,
  bio        text    not null,
  linkedin   text,
  sort_order integer not null default 0
);

-- ============================================================
-- Seed data — matches src/lib/data.ts
-- Run AFTER creating the tables above
-- ============================================================

-- Portfolios
insert into portfolios (id, name, description, inception, target_return, strategy) values
  ('overall',    'Master Fund',             'The complete SF Capital portfolio across all strategies and asset classes.', '2024-10-22', '15% p.a.', 'Multi-Strategy'),
  ('short-term', 'Short-Term Alpha',        'High-conviction, catalyst-driven trades with 1–3 month horizons.',           '2024-11-01', '20% p.a.', 'Tactical / Event-Driven'),
  ('long-term',  'Long-Term Compounders',   'Quality businesses held for 2–5 years, benefiting from structural trends.',  '2024-10-22', '12% p.a.', 'Buy & Hold / Quality Growth'),
  ('macro',      'Macro & Commodities',     'Macro-driven positions in commodities and financials to hedge inflation.',    '2024-10-22', '10% p.a.', 'Global Macro / Commodities'),
  ('thematic',   'AI & Disruptive Tech',    'Pure-play exposure to artificial intelligence and disruptive innovation.',    '2024-11-20', '25% p.a.', 'Thematic / Growth')
on conflict (id) do nothing;

-- Holdings
insert into holdings (id, ticker, name, asset_class, shares, avg_cost, currency, sector, thesis, added_date) values
  ('aapl',  'AAPL',  'Apple Inc.',          'equity',    50,  172.50, 'USD', 'Technology',               'Strong ecosystem lock-in, services growth, and shareholder returns.',           '2024-10-22'),
  ('msft',  'MSFT',  'Microsoft Corp.',     'equity',    30,  385.00, 'USD', 'Technology',               'Azure cloud growth and AI integration via Copilot across enterprise.',          '2024-10-22'),
  ('nvda',  'NVDA',  'NVIDIA Corp.',        'equity',    40,  480.00, 'USD', 'Technology',               'Dominant AI accelerator; data center demand runway still long.',                '2024-10-23'),
  ('googl', 'GOOGL', 'Alphabet Inc.',       'equity',    45,  138.00, 'USD', 'Communication Services',   'Search moat plus YouTube growth; Gemini AI integration underway.',             '2024-10-24'),
  ('jpm',   'JPM',   'JPMorgan Chase',      'equity',    35,  188.00, 'USD', 'Financials',               'Best-in-class bank with diversified revenue; benefits from higher rates.',     '2024-10-25'),
  ('tsla',  'TSLA',  'Tesla Inc.',          'equity',    25,  225.00, 'USD', 'Consumer Discretionary',   'Short-term play on FSD approval catalyst and energy storage growth.',          '2024-11-01'),
  ('meta',  'META',  'Meta Platforms',      'equity',    20,  510.00, 'USD', 'Communication Services',   'Ad revenue rebound; Llama AI moat; Reality Labs optionality.',                 '2024-11-03'),
  ('amzn',  'AMZN',  'Amazon.com Inc.',     'equity',    30,  178.00, 'USD', 'Consumer Discretionary',   'AWS acceleration + margin expansion in retail division.',                     '2024-11-05'),
  ('gc-f',  'GC=F',  'Gold Futures',        'commodity',  5, 1950.00, 'USD', 'Commodities',              'Inflation hedge; de-dollarisation tailwind; central bank buying.',             '2024-10-22'),
  ('si-f',  'SI=F',  'Silver Futures',      'commodity', 50,   22.00, 'USD', 'Commodities',              'Industrial demand from solar panels + monetary metal premium.',                '2024-11-10'),
  ('cl-f',  'CL=F',  'Crude Oil WTI',       'commodity', 20,   78.00, 'USD', 'Commodities',              'OPEC+ supply discipline; geopolitical risk premium.',                          '2024-11-15'),
  ('arkk',  'ARKK',  'ARK Innovation ETF',  'etf',      100,   42.00, 'USD', 'Disruptive Innovation',    'Exposure to genomics, robotics, and fintech innovation basket.',               '2024-11-20'),
  ('spy',   'SPY',   'SPDR S&P 500 ETF',    'etf',       15,  450.00, 'USD', 'Broad Market',             'Core market exposure; diversification anchor for the portfolio.',              '2024-10-22')
on conflict (id) do nothing;

-- Portfolio memberships
insert into portfolio_holdings (portfolio_id, holding_id) values
  ('overall','aapl'),('overall','msft'),('overall','nvda'),('overall','googl'),('overall','jpm'),
  ('overall','tsla'),('overall','meta'),('overall','amzn'),('overall','gc-f'),('overall','si-f'),
  ('overall','cl-f'),('overall','arkk'),('overall','spy'),
  ('short-term','tsla'),('short-term','meta'),('short-term','amzn'),
  ('long-term','aapl'),('long-term','msft'),('long-term','nvda'),('long-term','googl'),('long-term','jpm'),('long-term','spy'),
  ('macro','gc-f'),('macro','si-f'),('macro','cl-f'),('macro','jpm'),
  ('thematic','nvda'),('thematic','arkk')
on conflict do nothing;

-- Team members
insert into team_members (name, role, bio, linkedin, sort_order) values
  ('Michael Deng',  'President & Portfolio Manager',  'Final year Finance student. Oversees overall portfolio strategy and runs the macro book.',            '#', 1),
  ('Sarah Chen',    'Head of Equity Research',        'Third year Commerce/Law student specialising in technology sector analysis.',                         '#', 2),
  ('James Park',    'Head of Quantitative Analysis',  'Computer Science & Finance double degree. Builds the risk models and performance attribution.',       '#', 3),
  ('Priya Sharma',  'Head of Investor Relations',     'Commerce student majoring in Marketing and Finance. Manages society communications and recruitment.', '#', 4)
on conflict do nothing;

-- ============================================================
-- Row Level Security (RLS) — read-only public access
-- ============================================================
alter table holdings          enable row level security;
alter table portfolios        enable row level security;
alter table portfolio_holdings enable row level security;
alter table price_snapshots   enable row level security;
alter table news_items        enable row level security;
alter table team_members      enable row level security;

-- Allow anyone to read (public portfolio tracker)
create policy "public read holdings"          on holdings          for select using (true);
create policy "public read portfolios"        on portfolios        for select using (true);
create policy "public read portfolio_holdings" on portfolio_holdings for select using (true);
create policy "public read price_snapshots"   on price_snapshots   for select using (true);
create policy "public read news_items"        on news_items        for select using (true);
create policy "public read team_members"      on team_members      for select using (true);

-- Only service role can write (your API route uses service role key)
-- No insert/update/delete policies needed — service role bypasses RLS
