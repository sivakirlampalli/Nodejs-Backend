import type { NextApiRequest, NextApiResponse } from 'next'
import { getPayloadClient } from '@/lib/payloadClient' // Or use: '../../lib/payloadClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { collectionSlug, documentId } = req.body

  if (!collectionSlug || !documentId) {
    return res.status(400).json({ message: 'Missing collectionSlug or documentId' })
  }

  try {
    const payload = await getPayloadClient()

    // 1. Create log
    const log = await payload.create({
      collection: 'workflow-logs',
      data: {
        collectionSlug,
        documentId,
        status: 'in-progress',
      },
    })

    // 2. Update log
    await payload.update({
      collection: 'workflow-logs',
      id: log.id,
      data: {
        status: 'completed',
      },
    })

    return res.status(200).json({
      message: 'Workflow triggered and log updated',
      logId: log.id,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
