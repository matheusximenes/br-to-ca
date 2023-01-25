import Link from 'next/link'
import React from 'react'

import Profile from './Profile'

const MainNavigation = () => {
  return (
    <nav className="border-2 ml-auto">
      <ul className="flex ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about" className="ml-2 text-sky-500 hover:text-sky-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
