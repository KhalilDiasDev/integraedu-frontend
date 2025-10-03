"use client"

import { useState } from "react"
import { Card, Table, Input, Button } from "antd"
import { Search, Eye } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { professoresApi, type Professor } from "@/api/professores"
import type { ColumnsType } from "antd/es/table"

export default function ProfessoresPage() {
  const [searchText, setSearchText] = useState("")
  const navigate = useNavigate()

  const { data: professores, isLoading } = useQuery({
    queryKey: ["professores"],
    queryFn: professoresApi.list,
  })

  
/*   const filteredData = professores?.filter(
    (prof) => prof.nome.toLowerCase().includes(searchText.toLowerCase()) || prof.cpf.includes(searchText),
  )

  console.log('aksdjlaksjdla',filteredData);
   */

  const columns: ColumnsType<Professor> = [
    {
      title: "Nome",
      dataIndex: "nomeCompleto",
      key: "nomeCompleto",
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 140,
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 180,
    },
    {
      title: "Ações",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Button type="link" icon={<Eye size={16} />} onClick={() => navigate(`/professores/${record.id}`)}>
          Ver
        </Button>
      ),
    },
  ]

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, marginBottom: 8 }}>Professores</h1>
        <p style={{ color: "hsl(var(--muted-foreground))", margin: 0 }}>Lista completa de professores cadastrados</p>
      </div>

      <Card>
        <Input
          placeholder="Buscar por nome ou CPF"
          prefix={<Search size={18} />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ maxWidth: 400, marginBottom: 16 }}
          size="large"
        />

        <Table
          columns={columns}
          dataSource={professores}
          rowKey="id"
          loading={isLoading}
          pagination={{
            pageSize: 20,
            showSizeChanger: true,
            showTotal: (total) => `Total: ${total} professores`,
          }}
        />
      </Card>
    </div>
  )
}
