import React from 'react'

const Post = ({ title, subtitle, body, author }) => {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div>{body}</div>
      <div>{author}</div>
    </article>
  )
}

export default Post
