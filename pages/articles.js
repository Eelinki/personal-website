import Layout from '../components/Layout'
import ArticleCard from '../components/ArticleCard'
import articleService from '../lib/articleService'
import Seo from '../components/Seo'

const Articles = ({ articles }) => {
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
            articles.map((article) => <ArticleCard key={article.Title} article={article} />)
          )
          : <p>No articles yet!</p>
        }
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = await articleService.fetchAll()

  const sortedArticles = articles.sort((a, b) => (
    new Date(b.published_at) - new Date(a.published_at)
  ))

  return {
    props: { articles: sortedArticles },
    revalidate: 1,
  }
}

export default Articles
