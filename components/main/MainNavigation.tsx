import Link from 'next/link'
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

const MainNavigation = () => {
  const { user, error, isLoading } = useUser()

  React.useEffect(() => {
    const fetchUser = async () => {
      if (user) {
        console.log(user)
        try {
          let response = await fetch(`/api/users/${user.sid}`)
          if (response.status === 404) {
            console.log('here')
            response = await fetch(`/api/users`, {
              method: 'POST',
              body: JSON.stringify({
                name: user.name,
                email: user.email,
                imageUrl: user.picture || '',
              }),
              headers: {
                'Content-type': 'application/json',
              },
            })
          }
          const data = await response.json()
          console.log(data)
        } catch (error) {
          console.error(error.message)
        }
      }
    }
    fetchUser()
  }, [user])

  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <>{error.message}</>
  }

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          {user ? (
            <div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <img src={user.picture!} alt={user.name!} />
              <a href="/api/auth/logout">Logout</a>
            </div>
          ) : (
            <a href="/api/auth/login">Login</a>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
