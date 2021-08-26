import {Media} from './Media'
import {Author} from './Author'

export interface Article {
    title: string
    headerImage: Media
    content: string
    slug: string
    description?: string
    published_at: Date,
    author: Author
}
