const getStrapiURL = (path = '') => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://api.eelij.fi'
  }${path}`
}

export default getStrapiURL
