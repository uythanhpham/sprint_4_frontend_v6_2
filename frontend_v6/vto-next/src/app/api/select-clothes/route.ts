import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  console.log('Selected product: ', body);

  return NextResponse.json({
    success: true,
    message: 'Selected product received',
    received: body,
  });
}
