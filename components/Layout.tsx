import Link from 'next/link'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/articles">Blog</Link></li>
          <li><a href="https://github.com/Eelinki" target="_blank" rel="noopener noreferrer">GitHub &#8599;</a></li>
          <li><a href="https://www.linkedin.com/in/eeli-hakkarainen/" target="_blank" rel="noopener noreferrer">LinkedIn &#8599;</a></li>
        </ul>
      </nav>
      { children }
    </main>
  )
}

export default Layout
