import payload from 'payload'
import config from '../payload.config' // ✅ Path is correct since both are in /src

let isInitialized = false

export const getPayloadClient = async () => {
  if (!isInitialized) {
    await payload.init({ config }) // ✅ Initialize using actual config object
    isInitialized = true
  }
  return payload
}
