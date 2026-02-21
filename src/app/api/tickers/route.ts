import { NextResponse } from 'next/server';
import { fetchTickers } from '@/lib/fetchTickers';

export async function GET() {
  const data = await fetchTickers();
  return NextResponse.json(data, {
    headers: { 'Cache-Control': 'public, max-age=15, stale-while-revalidate=30' },
  });
}

