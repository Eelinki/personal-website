import Head from 'next/head'

const Seo = ({ title }: { title?: string }) => {
  return (
    <Head>
      { title
        ? <title>{title} - EELIJ.FI</title>
        : <title>EELIJ.FI</title>
      }
    </Head>
  )
}

export default Seo
