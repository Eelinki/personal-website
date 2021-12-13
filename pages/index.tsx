import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import { fetchApi } from '../lib/api'
import Seo from '../components/Seo'
import { Homepage } from '../contract/Homepage'
import { GetStaticProps } from 'next'

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

export const getStaticProps: GetStaticProps = async () => {
  const homepage = await fetchApi('/homepage')

  return {
    props: { homepage },
    revalidate: 1,
  }
}

export default Home
