import { NextResponse } from 'next/server';
import { allModels, categories, companies } from '@/lib/data/models';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const company = searchParams.get('company');
  const search = searchParams.get('search');
  const featured = searchParams.get('featured');
  const sort = searchParams.get('sort') || 'score';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');

  let filtered = [...allModels].filter(m => m.status === 'published');

  if (category) {
    filtered = filtered.filter(m => m.categories.some(c => c.toLowerCase() === category.toLowerCase()));
  }

  if (company) {
    filtered = filtered.filter(m => m.companySlug === company.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.company.toLowerCase().includes(q) ||
      m.shortDescription.toLowerCase().includes(q)
    );
  }

  if (featured === 'true') {
    filtered = filtered.filter(m => m.featured);
  }

  // Sort
  switch (sort) {
    case 'score':
      filtered.sort((a, b) => b.score - a.score);
      break;
    case 'newest':
      filtered.sort((a, b) => b.id.localeCompare(a.id));
      break;
    case 'cheapest':
      filtered.sort((a, b) => (a.pricingInput || 0) - (b.pricingInput || 0));
      break;
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const items = filtered.slice(start, start + limit);

  return NextResponse.json({
    models: items,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  });
}
