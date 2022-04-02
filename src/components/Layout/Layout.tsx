import { Outlet } from 'react-router-dom'
import { CustomLink } from '../CustomLink/CustomLink'

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <CustomLink to='/'>Home</CustomLink>
          </li>
          <li>
            <CustomLink to='/blog'>Blog</CustomLink>
          </li>
          <li>
            <CustomLink to='/about'>About</CustomLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  )
}
