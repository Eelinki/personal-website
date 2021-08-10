import Link from 'next/link'
import getStrapiMedia from '../lib/media'

const ArticleCard = ({ article }) => {
  return (
    <aside className="article-card">
      <figure>
        <Link href={`/articles/${article.Slug}`} passHref>
          <a href="replace">
            <img
              src={getStrapiMedia(article.HeaderImage.formats.small)}
              alt={article.Title}
              className="article-card-header"
            />
          </a>
        </Link>
      </figure>
      <h3><Link href={`/articles/${article.Slug}`}>{article.Title}</Link></h3>
      <p>{article.Description}</p>
    </aside>
  )
}

export default ArticleCard
