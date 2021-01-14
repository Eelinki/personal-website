import remark from 'remark'
import html from 'remark-html'

const articleContent = async (article) => {
  const processedContent = await remark()
    .use(html)
    .process(article.Content)
  const contentHtml = processedContent.toString()

  return { ...article, contentHtml }
}

export default articleContent
