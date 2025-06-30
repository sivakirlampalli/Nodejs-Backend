import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    query: { docId },
  } = req;

  if (!docId || typeof docId !== 'string') {
    return res.status(400).json({ message: 'Invalid document ID' });
  }


  return res.status(200).json({
    documentId: docId,
    status: 'completed',
    updatedAt: new Date().toISOString(),
  });
}
