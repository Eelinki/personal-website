import Link from 'next/link'
import getStrapiMedia from '../lib/media'
import {Article as ArticleInterface} from '../contract/Article'

const ArticleCard = ({ article }: { article: ArticleInterface }) => {
  return (
    <aside className="article-card">
      <figure>
        <Link href={`/articles/${article.slug}`} passHref>
          <a href="replace">
              {article.headerImage &&
                  <img
                    src={getStrapiMedia(article.headerImage)}
                    alt={article.title}
                    className="article-card-header"
                  />
              }
          </a>
        </Link>
      </figure>
      <h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.description}</p>
    </aside>
  )
}

export default ArticleCard
