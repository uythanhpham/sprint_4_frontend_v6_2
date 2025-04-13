// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const mockProducts = Array.from({ length: 15 }, (_, i) => {
    const types = ['Upper', 'Lower', 'Full-body'];
    return {
      id: i,
      imageUrl: `/clothes/item${(i % 6) + 1}.jpg`,
      type: types[i % 3],
    };
  });

  return NextResponse.json({ products: mockProducts });
}
