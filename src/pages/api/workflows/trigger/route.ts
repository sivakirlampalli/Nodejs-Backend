import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { collectionSlug, documentId } = body;

  if (!collectionSlug || !documentId) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // For now, just return what we received
  return NextResponse.json({
    message: 'Workflow triggered successfully',
    data: { collectionSlug, documentId }
  });
}
