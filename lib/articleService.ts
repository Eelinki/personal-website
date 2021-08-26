import axios from 'axios'
import getStrapiURL from './api'

export const fetchAll = () => {
  const request = axios.get(getStrapiURL('/articles'))
  return request.then((response) => response.data)
}

export const fetchBySlug = (slug: string) => {
  const request = axios.get(getStrapiURL(`/articles?slug=${slug}`))
  return request.then((response) => response.data)
}
