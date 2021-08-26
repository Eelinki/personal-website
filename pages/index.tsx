import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import homeService from '../lib/homeService'
import Seo from '../components/Seo'
import {Homepage} from '../contract/Homepage'

const Home = ({ homepage }: { homepage: Homepage }) => {
  return (
    <Layout>
      <Seo />
      <div className="landing">
        <h1>{homepage.title}</h1>
        <div className="content">
          <ReactMarkdown>{ homepage.content }</ReactMarkdown>
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
