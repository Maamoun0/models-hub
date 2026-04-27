import { NextResponse } from 'next/server';
import { categories as allCategories } from '@/lib/data/models';

export async function GET() {
  return NextResponse.json({ categories: allCategories });
}
