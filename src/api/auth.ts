import { api } from "./axios"

export interface LoginRequest {
  username: string
  password: string
}

export interface TokenResponse {
  access_token: string
  token_type: string
}

export const authApi = {
  login: async (credentials: LoginRequest): Promise<TokenResponse> => {
    const formData = new URLSearchParams()
    formData.append("username", credentials.username)
    formData.append("password", credentials.password)

    const response = await api.post<TokenResponse>("/login", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    return response.data
  },
}
