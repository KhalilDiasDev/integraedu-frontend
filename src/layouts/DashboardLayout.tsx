"use client"

import { useState } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { Layout, Menu, Button, Dropdown, Avatar } from "antd"
import { LayoutDashboard, School, Users, BarChart3, LogOut, User, MenuIcon } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

const { Header, Sider, Content } = Layout

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { username, logout } = useAuth()

  const menuItems = [
    {
      key: "/",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
    },
    {
      key: "/escolas",
      icon: <School size={20} />,
      label: "Escolas",
    },
    {
      key: "/professores",
      icon: <Users size={20} />,
      label: "Professores",
    },
    {
      key: "/analytics",
      icon: <BarChart3 size={20} />,
      label: "Análises",
    },
  ]

  const userMenuItems = [
    {
      key: "logout",
      icon: <LogOut size={16} />,
      label: "Sair",
      onClick: () => {
        logout()
        navigate("/login")
      },
    },
  ]

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={240}
        theme="light"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid hsl(var(--border))",
            fontSize: collapsed ? 16 : 20,
            fontWeight: 700,
            color: "hsl(var(--primary))",
          }}
        >
          {collapsed ? "IE" : "IntegraEDU"}
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{ marginTop: 16 }}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 240, transition: "all 0.2s" }}>
        <Header
          style={{
            padding: "0 24px",
            background: "hsl(var(--card))",
            borderBottom: "1px solid hsl(var(--border))",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={<MenuIcon size={20} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ color: "hsl(var(--foreground))" }}
          />
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
              <span style={{ color: "hsl(var(--muted-foreground))" }}>{username}</span>
              <Avatar icon={<User size={16} />} style={{ background: "hsl(var(--primary))" }} />
            </div>
          </Dropdown>
        </Header>
        <Content style={{ margin: 24, minHeight: 280 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
