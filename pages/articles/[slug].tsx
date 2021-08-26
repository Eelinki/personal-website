import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import { fetchAll, fetchBySlug } from '../../lib/articleService'
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
  const articles = await fetchAll()

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
  const articles = await fetchBySlug(params.slug)

  const article = articles[0]

  return {
    props: { article },
    revalidate: 1,
  }
}

export default Article
