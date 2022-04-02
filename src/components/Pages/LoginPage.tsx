import { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth() ?? {}

  const {
    from: { pathname: fromPage },
  } = (location.state as { from: Location }) || '/'

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const user = e.currentTarget.username.value

    login && login(user, () => navigate(fromPage, { replace: true }))
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Name: <input type='text' name='username' />
        </label>
        <button type='submit'>LogIn</button>
      </form>
    </>
  )
}
