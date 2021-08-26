import axios from 'axios'
import getStrapiURL from './api'

const fetch = () => {
  const request = axios.get(getStrapiURL('/homepage'))
  return request.then((response) => response.data)
}

export default { fetch }
