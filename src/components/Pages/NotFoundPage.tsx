import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigate = useNavigate()
  const back = () => navigate(-1)
  return (
    <>
      <h1>NotFound Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        corrupti!
      </p>
      <button onClick={back}>Back</button>
    </>
  )
}
