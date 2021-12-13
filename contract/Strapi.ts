/**
 * zlib License
 * (c) 2021 Marko Leinikka
 * https://github.com/Luukuton/shingetsu-blog/blob/9fd9586830805f7db3819f76cfb15585a9b45818/frontend/types.ts
 */

export interface StrapiResponse<Type> {
  data: StrapiData<Type> | StrapiData<Type>[]
  meta?: unknown
  error?: StrapiError
}

export interface StrapiData<Type> {
  id: number
  attributes: Type
}

export interface StrapiError {
  status: string
  name: string
  message: string
  details: unknown
}
