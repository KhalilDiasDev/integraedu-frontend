import axios from "axios"
import { message } from "antd"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000"

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token")
      localStorage.removeItem("username")
      window.location.href = "/login"
      message.error("Sessão expirada. Faça login novamente.")
    } else if (error.response?.status >= 500) {
      message.error("Erro no servidor. Tente novamente mais tarde.")
    }
    return Promise.reject(error)
  },
)
