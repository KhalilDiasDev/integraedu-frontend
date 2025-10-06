"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface AuthContextType {
  token: string | null
  username: string | null
  isLoading: boolean 
  login: (token: string, username: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token")
    const storedUsername = localStorage.getItem("username")

    if (storedToken && storedUsername) {
      setToken(storedToken)
      setUsername(storedUsername)
    }

    setIsLoading(false)
  }, [])

  const login = (newToken: string, newUsername: string) => {
    localStorage.setItem("access_token", newToken)
    localStorage.setItem("username", newUsername)
    setToken(newToken)
    setUsername(newUsername)
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("username")
    setToken(null)
    setUsername(null)
  }

  const value = { token, username, isLoading, login, logout }

  return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}