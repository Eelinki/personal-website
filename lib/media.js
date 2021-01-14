import getStrapiURL from './api'

const getStrapiMedia = (media) => {
  const imageUrl = media.url.startsWith('/')
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}

export default getStrapiMedia
