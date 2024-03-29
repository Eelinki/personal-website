import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import { fetchApi } from '../../lib/api'
import getStrapiMedia from '../../lib/media'
import AuthorCard from '../../components/AuthorCard'
import Seo from '../../components/Seo'
import {ParsedUrlQuery} from 'querystring'
import {Article as ArticleInterface } from '../../contract/Article'

const Article = ({ article }: {article: ArticleInterface}) => {
  return (
    <Layout>
      <Seo title={article.title} />
      <header className="article">
        { article.headerImage &&
          <img src={getStrapiMedia(article.headerImage)} alt={article.title} className="article-header" />
        }
        <h1>{article.title}</h1>
      </header>
      <article>
        <AuthorCard article={article} />
        <div className="content">
          <ReactMarkdown>{ article.content }</ReactMarkdown>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetchApi('/api/articles?populate=headerImage,author')

  return {
    paths: articles.map((article: ArticleInterface) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

interface Params extends ParsedUrlQuery {
  slug: string,
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params
  const articles = await fetchApi(`/api/articles?slug=${params.slug}&populate=headerImage,author`)

  return {
    props: { article: articles[0] },
    revalidate: 1,
  }
}

export default Article
