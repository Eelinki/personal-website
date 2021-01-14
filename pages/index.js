import Layout from '../components/Layout'
import homeService from '../lib/homeService'
import mdParser from '../lib/mdParser'
import Seo from '../components/Seo'

const Home = ({ homepage }) => {
  return (
    <Layout>
      <Seo />
      <header>
        <div className="ArticleContent" dangerouslySetInnerHTML={{ __html: homepage.contentHtml }} />
      </header>
    </Layout>
  )
}

export async function getStaticProps() {
  const homepage = await homeService.fetch()

  const contentHtml = await mdParser.parse(homepage.Content)

  return {
    props: { homepage: { ...homepage, contentHtml } },
    revalidate: 1,
  }
}

export default Home
