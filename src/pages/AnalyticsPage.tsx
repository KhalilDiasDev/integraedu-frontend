"use client"

import { useState } from "react"
import { Card, Row, Col, Select, Spin } from "antd"
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
import { metricasApi } from "@/api/metricas"
import { escolasApi } from "@/api/escolas"

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#06b6d4"]

export default function AnalyticsPage() {
 /*  const [selectedEscola, setSelectedEscola] = useState<string>()

  const { data: profPorEscola, isLoading: loadingProfEsc } = useQuery({
    queryKey: ["professores-escola"],
    queryFn: metricasApi.professoresPorEscola,
  })

  const { data: escolas, isLoading: loadingEscolas } = useQuery({
    queryKey: ["escolas"],
    queryFn: () => escolasApi.list(),
  })

  const { data: analiseEscola, isLoading: loadingAnalise } = useQuery({
    queryKey: ["analise-escola", selectedEscola],
    queryFn: () => metricasApi.analiseEscola(selectedEscola!),
    enabled: !!selectedEscola,
  }) */


  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, marginBottom: 8 }}>Análises Avançadas</h1>
        <p style={{ color: "hsl(var(--muted-foreground))", margin: 0 }}>Métricas e visualizações detalhadas</p>
      </div>

      <Row gutter={[16, 16]}>
       
        {/* <Col xs={24} lg={12}>
          <Card title="Top 15 Escolas por Número de Professores" style={{ height: 450 }}>
            {loadingProfEsc ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 350 }}>
                <Spin />
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={profPorEscola} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="escola_nome" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="total_professores" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </Card>
        </Col>

        <Col xs={24}>
          <Card title="Análise Detalhada por Escola">
            <Select
              placeholder="Selecione uma escola"
              style={{ width: "100%", maxWidth: 500, marginBottom: 24 }}
              size="large"
              showSearch
              loading={loadingEscolas}
              options={escolas?.map((e) => ({
                label: `${e.nome} (${e.codigoINEP})`,
                value: e.codigoINEP,
              }))}
              onChange={setSelectedEscola}
              filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
            />

            {loadingAnalise && (
              <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
                <Spin />
              </div>
            )}

            {analiseEscola && (
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={8}>
                  <Card>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 32, fontWeight: 700, color: "hsl(var(--primary))" }}>
                        {analiseEscola.total_professores}
                      </div>
                      <div style={{ color: "hsl(var(--muted-foreground))" }}>Total de Professores</div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={8}>
                  <Card>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 32, fontWeight: 700, color: "hsl(var(--primary))" }}>
                        {analiseEscola.media_idade.toFixed(1)}
                      </div>
                      <div style={{ color: "hsl(var(--muted-foreground))" }}>Média de Idade</div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={8}>
                  <Card>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 32, fontWeight: 700, color: "hsl(var(--primary))" }}>
                        {analiseEscola.percentual_feminino.toFixed(1)}%
                      </div>
                      <div style={{ color: "hsl(var(--muted-foreground))" }}>Percentual Feminino</div>
                    </div>
                  </Card>
                </Col>
              </Row>
            )}
          </Card>
        </Col> */}
      </Row>
    </div>
  )
}