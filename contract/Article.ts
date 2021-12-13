import {Media} from './Media'
import {Author} from './Author'

export interface Article {
    title: string
    headerImage: Media
    content: string
    slug: string
    description?: string
    publishedAt: Date,
    author: Author
}
