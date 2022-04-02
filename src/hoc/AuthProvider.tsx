import { createContext, ReactNode, useState } from 'react'

export interface IAuthContext {
  user: string | undefined
  login: Function
  logout: Function
}

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>()
  const login = (newUser: string, cb: Function) => {
    setUser(newUser)
    cb()
  }
  const logout = (cb: Function) => {
    setUser(undefined)
    cb()
  }

  const value: IAuthContext = { user, login, logout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
