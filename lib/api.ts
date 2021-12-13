import { StrapiData } from '../contract/Strapi'
import { recursiveFlat } from './helpers'

export function getStrapiURL (path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`
}

export async function fetchApi(path: string, flat = true) {
  const response = await fetch(getStrapiURL(path))
  
  if (!response.ok) {
    return null
  }

  const content = await response.json()

  if (flat) {
    if (Array.isArray(content.data)) {
      return content.data.map((entry: StrapiData<unknown>) => recursiveFlat(entry))
    }

    return recursiveFlat(content.data)
  }

  return content
}
