import { NextResponse } from 'next/server';
import { companies as allCompanies } from '@/lib/data/models';

export async function GET() {
  return NextResponse.json({ companies: allCompanies });
}
