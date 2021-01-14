const AuthorCard = ({ article }) => {
  return (
    <aside className="AuthorCard">
      <p>{article.author.Name}</p>
    </aside>
  )
}

export default AuthorCard
