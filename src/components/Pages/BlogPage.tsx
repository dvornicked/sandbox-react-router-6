import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const BlogPage = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}
