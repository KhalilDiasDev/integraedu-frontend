"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input, Button, Card, message } from "antd"
import { User, Lock, GraduationCap } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { authApi } from "@/api/auth"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true)
    try {
      const response = await authApi.login(values)
      login(response.access_token, values.username)
      message.success("Login realizado com sucesso!")
      navigate("/")
    } catch (error: any) {
      message.error(error.response?.data?.detail || "Erro ao fazer login")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "hsl(var(--background))",
        padding: 24,
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 420,
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "hsl(var(--primary))",
              marginBottom: 16,
            }}
          >
            <GraduationCap size={32} color="white" />
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, marginBottom: 8 }}>IntegraEDU</h1>
          <p style={{ color: "hsl(var(--muted-foreground))", margin: 0 }}>Sistema de Análise Educacional</p>
        </div>

        <Form name="login" onFinish={onFinish} layout="vertical" size="large">
          <Form.Item name="username" rules={[{ required: true, message: "Por favor, insira seu usuário" }]}>
            <Input prefix={<User size={18} />} placeholder="Usuário" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Por favor, insira sua senha" }]}>
            <Input.Password prefix={<Lock size={18} />} placeholder="Senha" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
