import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IPost } from './BlogPage'
import styles from './Pages.module.scss'

export const PostPage = () => {
  const { id } = useParams()

  const navigate = useNavigate()
  const back = () => navigate(-1)

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
          <p className={styles['post-body']}>{post.body}</p>
          <button onClick={back}>Back</button>
          <button>
            <Link to='edit'>Edit</Link>
          </button>
        </>
      )}
    </>
  )
}
