import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import homeService from '../lib/homeService'
import Seo from '../components/Seo'

const Home = ({ homepage }) => {
  return (
    <Layout>
      <Seo />
      <div className="landing">
        <h1>{homepage.Title}</h1>
        <div className="content">
          <ReactMarkdown>{ homepage.Content }</ReactMarkdown>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const homepage = await homeService.fetch()

  return {
    props: { homepage },
    revalidate: 1,
  }
}

export default Home
