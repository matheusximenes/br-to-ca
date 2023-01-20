import * as React from 'react'
import BlogTemplate from '../../components/blog/BlogTemplate'
import Post from '../../components/blog/Post'

const Blog = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5`
        )
        const postsData = await response.json()
        setPosts(postsData)
      } catch (error) {}
    }
    fetchPosts()
  }, [])

  return (
    <BlogTemplate>
      {posts.map((p) => (
        <Post
          key={p.id}
          title={p.title}
          subtitle={`Sub title ${p.title}`}
          body={p.body}
          author={p.userId}
        />
      ))}
    </BlogTemplate>
  )
}

export default Blog
