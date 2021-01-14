import Link from 'next/link'
import getStrapiMedia from '../lib/media'

const ArticleCard = ({ article }) => {
  return (
    <aside className="ArticleCard">
      <img src={getStrapiMedia(article.HeaderImage.formats.small)} alt={article.Title} className="ArticleCardHeader" />
      <h3><Link href={`/articles/${article.Slug}`}>{article.Title}</Link></h3>
      <p>{article.Description}</p>
    </aside>
  )
}

export default ArticleCard
