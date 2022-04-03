import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BlogFilter } from '..'

export const BlogPage = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  const postQuery = searchParams.get('post') || ''
  const latest = searchParams.has('latest')
  const startsFrom = latest ? 80 : 1

  return (
    <>
      <h1>Blog Page</h1>
      <BlogFilter
        setSearchParams={setSearchParams}
        latest={latest}
        postQuery={postQuery}
      />
      <ul>
        {posts
          .filter(
            post => post.title.includes(postQuery) && post.id >= startsFrom,
          )
          .map(post => (
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
