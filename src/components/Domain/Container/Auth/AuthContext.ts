import { createContext } from 'react'
import { UserManager } from '@/app/model/user/manager'
import { User } from '@/app/model/user/types'

export interface AuthContextValue {
  user: UserManager<User>
  getUser(): void
  logout(): void
  loading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextValue | null>(null)

export default AuthContext
