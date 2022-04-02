import { ReactNode } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const location = useLocation()
  const { user } = useAuth() ?? {}

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} />
  }
  return <>{children}</>
}
