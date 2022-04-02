import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPost } from './BlogPage'

export const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState<IPost>()
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setPost(json))
  }, [id])
  return (
    <>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </>
  )
}
