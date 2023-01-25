import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

const Profile = () => {
  const { user, error, isLoading } = useUser()

  React.useEffect(() => {
    const fetchUser = async () => {
      if (user) {
        try {
          await fetch(`/api/users/`, {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json',
              Accept: 'application/json',
            }),
            body: JSON.stringify(user),
          })
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
    <div>
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
    </div>
  )
}

export default Profile
