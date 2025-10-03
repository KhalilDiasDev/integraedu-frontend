"use client"

import { useState } from "react"
import { Card, Table, Input, Select } from "antd"
import { Search } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { escolasApi, type Escola } from "@/api/escolas"
import type { ColumnsType } from "antd/es/table"

export default function EscolasPage() {
  const [searchText, setSearchText] = useState("")
  const [municipioFilter, setMunicipioFilter] = useState<string>()

  const { data: escolas, isLoading } = useQuery({
    queryKey: ["escolas", municipioFilter],
    queryFn: () => escolasApi.list(municipioFilter),
  })



  const columns: ColumnsType<Escola> = [
    {
      title: "Código INEP",
      dataIndex: "codigoINEP",
      key: "codigoINEP",
      width: 120,
    },
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      ellipsis: true,
    },
    {
      title: "Dependência",
      dataIndex: "dependencia",
      key: "dependencia",
      width: 120,
    }
  ]

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, marginBottom: 8 }}>Escolas</h1>
        <p style={{ color: "hsl(var(--muted-foreground))", margin: 0 }}>Lista completa de escolas cadastradas</p>
      </div>

      <Card>
        <div style={{ display: "flex", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
          <Input
            placeholder="Buscar por nome ou código INEP"
            prefix={<Search size={18} />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ maxWidth: 400 }}
            size="large"
          />
         {/*  <Select
            placeholder="Filtrar por município"
            allowClear
            value={municipioFilter}
            onChange={setMunicipioFilter}
            style={{ minWidth: 200 }}
            size="large"
            options={escolas.map((m) => ({ label: m, value: m }))}
          /> */}
        </div>

        <Table
          columns={columns}
          dataSource={escolas}
          rowKey="id"
          loading={isLoading}
          pagination={{
            pageSize: 20,
            showSizeChanger: true,
            showTotal: (total) => `Total: ${total} escolas`,
          }}
        />
      </Card>
    </div>
  )
}
