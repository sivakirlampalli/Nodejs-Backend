import payload from 'payload'
import config from '@/payload.config'

let isInitialized = false

export const getPayloadClient = async () => {
  if (!isInitialized) {
    await payload.init({ config })
    isInitialized = true
  }
  return payload
}
