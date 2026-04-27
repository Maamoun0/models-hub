import { NextResponse } from 'next/server';
import { allModels } from '@/lib/data/models';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const modelSlugs = searchParams.get('models')?.split(',') || [];

  if (modelSlugs.length < 2) {
    return NextResponse.json({ error: 'Please provide at least 2 model slugs' }, { status: 400 });
  }

  const models = modelSlugs
    .map(slug => allModels.find(m => m.slug === slug.trim()))
    .filter(Boolean);

  if (models.length < 2) {
    return NextResponse.json({ error: 'One or more models not found' }, { status: 404 });
  }

  return NextResponse.json({ models });
}
