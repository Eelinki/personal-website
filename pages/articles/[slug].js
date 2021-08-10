import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import articleService from '../../lib/articleService'
import getStrapiMedia from '../../lib/media'
import AuthorCard from '../../components/AuthorCard'
import Seo from '../../components/Seo'

const Article = ({ article }) => {
  return (
    <Layout>
      <Seo title={article.Title} />
      <header className="article">
        <img src={getStrapiMedia(article.HeaderImage.formats.large)} alt={article.Title} className="article-header" />
        <h1>{article.Title}</h1>
      </header>
      <article>
        <AuthorCard article={article} />
        <div className="content">
          <ReactMarkdown>{ article.Content }</ReactMarkdown>
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = await articleService.fetchAll()

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.Slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articles = await articleService.fetchBySlug(params.slug)

  const article = articles[0]

  return {
    props: { article },
    revalidate: 1,
  }
}

export default Article
