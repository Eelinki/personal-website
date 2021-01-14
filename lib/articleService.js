import axios from 'axios'
import getStrapiURL from './api'

const fetchAll = () => {
  const request = axios.get(getStrapiURL('/articles'))
  return request.then((response) => response.data)
}

const fetchBySlug = (slug) => {
  const request = axios.get(getStrapiURL(`/articles?Slug=${slug}`))
  return request.then((response) => response.data)
}

export default { fetchAll, fetchBySlug }
