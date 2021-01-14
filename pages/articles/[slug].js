import Layout from '../../components/Layout'
import articleService from '../../lib/articleService'
import getStrapiMedia from '../../lib/media'
import articleContent from '../../lib/articleContent'
import AuthorCard from '../../components/AuthorCard'
import Date from '../../components/Date'
import Seo from '../../components/Seo'

const Article = ({ article }) => {
  return (
    <Layout>
      <Seo title={article.Title} />
      <header>
        <img src={getStrapiMedia(article.HeaderImage.formats.large)} alt={article.Title} className="ArticleHeader" />
        <h1>{article.Title}</h1>
        <p><Date dateString={article.published_at} /></p>
      </header>
      <article>
        <AuthorCard article={article} />
        <div className="ArticleContent" dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
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

  const article = await articleContent(articles[0])

  return {
    props: { article },
    revalidate: 1,
  }
}

export default Article
