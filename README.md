# IntegraEDU Frontend

Frontend React + TypeScript para consumir a API IntegraEDU.

## Tecnologias

- **React 18** com TypeScript
- **Vite** - Build tool
- **React Router** - Roteamento
- **TanStack Query** - Gerenciamento de estado e cache
- **Ant Design** - Biblioteca de componentes UI
- **Recharts** - Visualização de dados
- **Axios** - Cliente HTTP

## Estrutura do Projeto

\`\`\`
/src
  /api          - Configuração axios e endpoints
  /components   - Componentes reutilizáveis
  /contexts     - Context API (autenticação)
  /layouts      - Layouts da aplicação
  /pages        - Páginas da aplicação
  /hooks        - Custom hooks
\`\`\`

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
\`\`\`bash
cp .env.example .env
\`\`\`

2. Configure a URL da API no arquivo `.env`:
\`\`\`
VITE_API_URL=http://localhost:8000
\`\`\`

3. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

4. Execute o projeto:
\`\`\`bash
npm run dev
\`\`\`

## Funcionalidades

- **Autenticação**: Login com JWT token
- **Dashboard**: Visão geral com KPIs e gráficos
- **Escolas**: Lista e filtros de escolas
- **Professores**: Lista, busca e detalhes de professores
- **Análises**: Métricas avançadas e visualizações

## Segurança

- Token JWT armazenado no localStorage
- Axios interceptor para incluir token automaticamente
- Logout automático em caso de token expirado (401)
- Tratamento de erros centralizado
