"use client"

import { useParams, useNavigate } from "react-router-dom"
import { Card, Descriptions, Table, Button, Spin, Tag } from "antd"
import { ArrowLeft } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { professoresApi } from "@/api/professores"
import type { ColumnsType } from "antd/es/table"

export default function ProfessorDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data: professor, isLoading } = useQuery({
    queryKey: ["professor", id],
    queryFn: () => professoresApi.getById(Number(id)),
    enabled: !!id,
  })

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400 }}>
        <Spin size="large" />
      </div>
    )
  }

  if (!professor) {
    return <div>Professor não encontrado</div>
  }

  const atuacoesColumns: ColumnsType<(typeof professor.historico_atuacoes)[0]> = [
    { title: "Ano", dataIndex: "ano", key: "ano", width: 80 },
    { title: "Escola", dataIndex: "escola_nome", key: "escola_nome", ellipsis: true },
    { title: "Código INEP", dataIndex: "escola_codigo_inep", key: "escola_codigo_inep", width: 120 },
    { title: "Município", dataIndex: "municipio", key: "municipio", width: 150 },
    { title: "UF", dataIndex: "uf", key: "uf", width: 60 },
    { title: "Dependência", dataIndex: "dependencia_administrativa", key: "dependencia_administrativa", width: 120 },
  ]

  return (
    <div>
      <Button icon={<ArrowLeft size={16} />} onClick={() => navigate("/professores")} style={{ marginBottom: 24 }}>
        Voltar
      </Button>

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, marginBottom: 8 }}>{professor.nome}</h1>
        <p style={{ color: "hsl(var(--muted-foreground))", margin: 0 }}>Detalhes do professor</p>
      </div>

      <Card title="Informações Pessoais" style={{ marginBottom: 16 }}>
        <Descriptions column={{ xs: 1, sm: 2, md: 3 }}>
          <Descriptions.Item label="CPF">{professor.cpf}</Descriptions.Item>
          <Descriptions.Item label="Data de Nascimento">{professor.data_nascimento}</Descriptions.Item>
          <Descriptions.Item label="Sexo">{professor.sexo}</Descriptions.Item>
          <Descriptions.Item label="Cor/Raça">{professor.cor_raca}</Descriptions.Item>
          <Descriptions.Item label="Nacionalidade">{professor.nacionalidade}</Descriptions.Item>
          <Descriptions.Item label="UF Nascimento">{professor.uf_nascimento}</Descriptions.Item>
          <Descriptions.Item label="Município Nascimento" span={2}>
            {professor.municipio_nascimento}
          </Descriptions.Item>
        </Descriptions>
      </Card>

      {professor.especializacoes && professor.especializacoes.length > 0 && (
        <Card title="Especializações" style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {professor.especializacoes.map((esp, idx) => (
              <Tag key={idx} color="blue">
                {esp.tipo_especializacao} - {esp.area_conhecimento}
              </Tag>
            ))}
          </div>
        </Card>
      )}

      <Card title="Histórico de Atuações">
        <Table
          columns={atuacoesColumns}
          dataSource={professor.historico_atuacoes}
          rowKey={(record) => `${record.ano}-${record.escola_codigo_inep}`}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  )
}
