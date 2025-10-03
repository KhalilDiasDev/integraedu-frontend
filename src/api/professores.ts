import { api } from "./axios"

export interface Professor {
  id: number
  nome: string
  cpf: string
  data_nascimento: string
  sexo: string
  cor_raca: string
  nacionalidade: string
  uf_nascimento: string
  municipio_nascimento: string
}

export interface ProfessorDetail extends Professor {
  historico_atuacoes: Array<{
    ano: number
    escola_nome: string
    escola_codigo_inep: string
    municipio: string
    uf: string
    dependencia_administrativa: string
  }>
  especializacoes: Array<{
    tipo_especializacao: string
    area_conhecimento: string
  }>
}

export const professoresApi = {
  list: async (): Promise<Professor[]> => {
    const response = await api.get<Professor[]>("/professores/")
    return response.data
  },

  getById: async (id: number): Promise<ProfessorDetail> => {
    const response = await api.get<ProfessorDetail>(`/professores/${id}`)
    return response.data
  },
}
