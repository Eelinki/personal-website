import Date from './Date'
import {Article} from '../contract/Article'

const AuthorCard = ({ article }: { article: Article }) => {
  return (
    <aside className="author-card">
      <p className="author">{article.author.name}</p>
      <p className="date"><Date dateString={article.publishedAt.toString()} /></p>
    </aside>
  )
}

export default AuthorCard
