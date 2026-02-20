// Supabase is an optional dependency — only used when env vars are set.
// Install with: npm install @supabase/supabase-js
// Until then, queries.ts falls back to static seed data automatically.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SupabaseClient = any;

let _clientCache: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null;
  }
  if (_clientCache) return _clientCache;
  // Dynamic require so the build doesn't fail when the package isn't installed
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createClient } = require('@supabase/supabase-js');
  _clientCache = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
  return _clientCache;
}

export function createServerClient(): SupabaseClient | null {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createClient } = require('@supabase/supabase-js');
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}
