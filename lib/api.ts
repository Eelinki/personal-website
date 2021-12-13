export function getStrapiURL (path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`
}

export async function fetchApi(path: string) {
  const response = await fetch(getStrapiURL(path))
  if (!response.ok) {
    return null
  }
  return response.json()
}
