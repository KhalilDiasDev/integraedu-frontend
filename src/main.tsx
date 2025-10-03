import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ConfigProvider } from "antd"
import ptBR from "antd/locale/pt_BR"
import App from "./App"
import { AuthProvider } from "./contexts/AuthContext"
import "./index.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        locale={ptBR}
        theme={{
          token: {
            colorPrimary: "#000000",
            colorBgBase: "#ffffff",
            colorBgContainer: "#ffffff",
            colorBorder: "#e5e5e5",
            borderRadius: 8,
            fontSize: 14,
          },
        }}
      >
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
