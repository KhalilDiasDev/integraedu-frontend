import { Card, Row, Col, Statistic, Spin } from "antd"
import { Users, School, BarChart3, TrendingUp } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { professoresApi } from "@/api/professores"
import { escolasApi } from "@/api/escolas"
import { metricasApi } from "@/api/metricas"

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"]

export default function Dashboard() {
 /*  const { data: professores, isLoading: loadingProf } = useQuery({
    queryKey: ["professores"],
    queryFn: professoresApi.list,
  })

  const { data: escolas, isLoading: loadingEsc } = useQuery({
    queryKey: ["escolas"],
    queryFn: () => escolasApi.list(),
  })

  const { data: formacao, isLoading: loadingForm } = useQuery({
    queryKey: ["formacao"],
    queryFn: metricasApi.formacaoProfessores,
  })

  const { data: profPorEscola, isLoading: loadingProfEsc } = useQuery({
    queryKey: ["professores-escola"],
    queryFn: metricasApi.professoresPorEscola,
  })

  if (loadingProf || loadingEsc || loadingForm || loadingProfEsc) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400 }}>
        <Spin size="large" />
      </div>
    )
  }

  const topEscolas = profPorEscola?.slice(0, 10) || [] */

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, marginBottom: 8 }}>Dashboard</h1>
        <p style={{ color: "hsl(var(--muted-foreground))", margin: 0 }}>Visão geral dos dados educacionais</p>
      </div>

  {/*     <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total de Escolas"
              value={escolas?.length || 0}
              prefix={<School size={20} style={{ color: "hsl(var(--primary))" }} />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total de Professores"
              value={professores?.length || 0}
              prefix={<Users size={20} style={{ color: "hsl(var(--primary))" }} />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Média Prof/Escola"
              value={escolas?.length ? Math.round((professores?.length || 0) / escolas.length) : 0}
              prefix={<BarChart3 size={20} style={{ color: "hsl(var(--primary))" }} />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Tipos de Formação"
              value={formacao?.length || 0}
              prefix={<TrendingUp size={20} style={{ color: "hsl(var(--primary))" }} />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Formação dos Professores" style={{ height: 400 }}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={formacao} dataKey="quantidade" nameKey="formacao" cx="50%" cy="50%" outerRadius={80} label>
                  {formacao?.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Top 10 Escolas por Número de Professores" style={{ height: 400 }}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topEscolas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="escola_nome" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total_professores" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row> */}
    </div>
  )
}
