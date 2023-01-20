import Link from 'next/link'
import React from 'react'

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
