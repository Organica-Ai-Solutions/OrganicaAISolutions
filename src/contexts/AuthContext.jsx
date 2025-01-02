import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { login as loginApi, signup as signupApi, validateToken } from '../utils/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      validateToken()
        .then(response => {
          setUser(response.data.user)
        })
        .catch(() => {
          localStorage.removeItem('token')
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (email, password) => {
    try {
      const response = await loginApi(email, password)
      localStorage.setItem('token', response.data.token)
      setUser(response.data.user)
      toast.success('Logged in successfully')
      navigate('/dashboard')
      return response.data
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to login')
      throw error
    }
  }

  const signup = async (name, email, password) => {
    try {
      const response = await signupApi(name, email, password)
      localStorage.setItem('token', response.data.token)
      setUser(response.data.user)
      toast.success('Account created successfully. Please verify your email.')
      navigate('/dashboard')
      return response.data
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create account')
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    toast.success('Logged out successfully')
    navigate('/login')
  }

  const value = {
    user,
    loading,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContext 