import Date from './Date'

const AuthorCard = ({ article }) => {
  return (
    <aside className="author-card">
      <p className="author">{article.author.Name}</p>
      <p className="date"><Date dateString={article.published_at} /></p>
    </aside>
  )
}

export default AuthorCard
