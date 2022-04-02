import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  )
}
