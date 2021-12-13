import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import ArticleCard from '../components/ArticleCard'
import { fetchApi } from '../lib/api'
import Seo from '../components/Seo'
import {Article} from '../contract/Article'

const Articles = ({ articles }: { articles: Article[] }) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <header>
        <h1>Blog</h1>
        <p><b>Read my articles</b></p>
      </header>
      <section className="articles">
        { articles.length > 0
          ? (
            articles.map((article) => <ArticleCard key={article.title} article={article} />)
          )
          : <p>No articles yet!</p>
        }
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchApi('/api/articles?populate=headerImage,author')

  const sortedArticles = articles.sort((a: Article, b: Article) => (
    (+new Date(b.publishedAt)) - (+new Date(a.publishedAt))
  ))

  return {
    props: { articles: sortedArticles },
    revalidate: 1,
  }
}

export default Articles
