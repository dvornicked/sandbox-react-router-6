import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'
import { IPost } from './BlogPage'

export const EditPage = () => {
  const { id } = useParams()
  const { logout } = useAuth() ?? {}
  const navigate = useNavigate()

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
          <h2>Edit Page of {post.title}</h2>
          <p>{post.body}</p>
          <button>
            <Link
              onClick={() =>
                logout && logout(() => navigate('/', { replace: true }))
              }
              to='/'
            >
              Logout
            </Link>
          </button>
        </>
      )}
    </>
  )
}
