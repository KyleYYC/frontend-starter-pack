//eslint-disable
import { createContext, useState, useContext, ReactNode } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signIn = async (email: string, password: string) => {
    try {
      //TODO Replace with your API endpoint
      //const response = await axios.post('/api/auth/signin', { email, password })
      //TODO Handle token storage, e.g., localStorage.setItem('token', response.data.token)
      setIsAuthenticated(true)
    } catch (error) {
      console.error('Sign-in failed:', error)
    }
  }

  const signOut = () => {
    //TODO Implement sign-out logic
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth }