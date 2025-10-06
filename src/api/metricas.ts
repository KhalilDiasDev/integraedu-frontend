import { api } from "./axios"

export interface FormacaoProfessor {
  formacao: string
  quantidade: number
  com_doutorado:number
  com_mestrado :number
  com_pos_graduacao :number
}

export interface ProfessoresPorEscola {
  escola: string
  distribuicao: string
  codigo_inep: string
  total_professores: number
}

export interface AnaliseEscola {
  escola_nome: string
  codigo_inep: string
  total_professores: number
  media_idade: number
  percentual_feminino: number

}

export const metricasApi = {
  formacaoProfessores: async (): Promise<FormacaoProfessor[]> => {
    const response = await api.get<FormacaoProfessor[]>("/metricas/formacao")
    return response.data
  },

  professoresPorEscola: async (): Promise<ProfessoresPorEscola[]> => {
    const response = await api.get<ProfessoresPorEscola[]>("/metricas/professores-por-escola")
    return response.data
  },

  analiseEscola: async (codigoInep: string): Promise<AnaliseEscola> => {
    const response = await api.get<AnaliseEscola>(`/metricas/analise-escola/${codigoInep}`)
    return response.data
  },
}
