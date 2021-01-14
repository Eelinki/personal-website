import remark from 'remark'
import html from 'remark-html'

const parse = async (markdown) => {
  const processedContent = await remark()
    .use(html)
    .process(markdown)
  const contentHtml = processedContent.toString()

  return contentHtml
}

export default { parse }
