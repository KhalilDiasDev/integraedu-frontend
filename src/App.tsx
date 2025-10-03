"use client"

import type React from "react"

import { Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
import LoginPage from "./pages/LoginPage"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import EscolasPage from "./pages/EscolasPage"
import ProfessoresPage from "./pages/ProfessoresPage"
import ProfessorDetailPage from "./pages/ProfessorDetailPage"
import AnalyticsPage from "./pages/AnalyticsPage"

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { token } = useAuth()
  return token ? <>{children}</> : <Navigate to="/login" replace />
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="escolas" element={<EscolasPage />} />
        <Route path="professores" element={<ProfessoresPage />} />
        <Route path="professores/:id" element={<ProfessorDetailPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
      </Route>
    </Routes>
  )
}

export default App
