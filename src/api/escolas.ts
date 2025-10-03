import { api } from "./axios"

export interface Escola {
  id: number
  codigo_inep: string
  nome: string
  municipio: string
  uf: string
  dependencia_administrativa: string
  localizacao: string
  situacao_funcionamento: string
}

export const escolasApi = {
  list: async (municipio?: string): Promise<Escola[]> => {
    const params = municipio ? { municipio } : {}
    const response = await api.get<Escola[]>("/escolas/", { params })
    return response.data
  },
}
