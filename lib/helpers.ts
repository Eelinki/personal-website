/**
 * zlib License
 * (c) 2021 Marko Leinikka
 * https://github.com/Luukuton/shingetsu-blog/blob/8e188ba520b9ad2f97d1264ca245b464c99520c7/frontend/lib/helpers.ts
 */

import { StrapiData } from '../contract/Strapi'

type Obj = { [key: string]: unknown }
export const recursiveFlat = (response: StrapiData<unknown> | Obj, depth = 0): unknown => {
  if (!response || depth > 10) {
    return response
  }

  if (Array.isArray(response)) {
    return response.map((item) => recursiveFlat(item, depth + 1))
  } else if (typeof response === 'object') {
    const flat = {} as Obj

    for (const [key, value] of Object.entries(response)) {
      switch (key) {
        case 'data':
          return recursiveFlat(value, depth + 1)
        case 'attributes':
          const tmp = recursiveFlat(value, depth + 1)
          const id = response.id ? response.id : undefined

          return tmp && typeof tmp === 'object' ? { ...tmp, id } : tmp
        case 'id':
          flat[key] = recursiveFlat(value, depth + 1)
          break
        default:
          flat[key] = recursiveFlat(value, depth + 1)
      }
    }

    return flat
  }

  return response
}
