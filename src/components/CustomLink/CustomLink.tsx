import { NavLink } from 'react-router-dom'
import { CustomLinkProps } from './CustomLink.props'
import styles from './CustomLink.module.scss'

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.active : ''

export const CustomLink = ({ children, to, ...props }: CustomLinkProps) => {
  return (
    <NavLink className={setActive} to={to} {...props}>
      {children}
    </NavLink>
  )
}
