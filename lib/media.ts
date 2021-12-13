import { getStrapiURL } from './api'
import {Media} from '../contract/Media'

const getStrapiMedia = (media: Media) => {
  return media.url.startsWith('/')
      ? getStrapiURL(media.url)
      : media.url
}

export default getStrapiMedia
