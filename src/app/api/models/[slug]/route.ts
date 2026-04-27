import { NextResponse } from 'next/server';
import { allModels } from '@/lib/data/models';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const model = allModels.find(m => m.slug === slug);

  if (!model) {
    return NextResponse.json({ error: 'Model not found' }, { status: 404 });
  }

  // Get similar models (same categories, different model)
  const similar = allModels
    .filter(m => m.slug !== slug && m.status === 'published')
    .filter(m => m.categories.some(c => model.categories.includes(c)))
    .slice(0, 3);

  return NextResponse.json({ model, similar });
}
