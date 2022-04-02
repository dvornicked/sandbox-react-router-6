import { HTMLAttributes, ReactNode } from 'react'

export interface CustomLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  to: string
}
