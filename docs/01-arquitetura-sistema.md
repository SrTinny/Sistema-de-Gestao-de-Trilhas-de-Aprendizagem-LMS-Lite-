# 01 - Arquitetura do Sistema

## 1. Visao Geral
O LMS Lite sera estruturado como aplicacao web em arquitetura cliente-servidor:
- Cliente: Dashboard React.js (SPA)
- Servidor: API REST em Python (Django + DRF)
- Persistencia: PostgreSQL
- Infra de execucao: containers Docker em host Linux

Objetivo principal: garantir separacao de responsabilidades, seguranca, escalabilidade horizontal basica e manutencao simples.

## 2. Componentes
- React Dashboard
  - Gerencia interface, estado de sessao e chamadas HTTP para a API.
- API Python
  - Exponibiliza endpoints REST versionados (`/api/v1`).
  - Centraliza regras de negocio, autenticacao e autorizacao.
- PostgreSQL
  - Armazena usuarios, cursos, modulos e progresso.
- Reverse Proxy (recomendado para deploy)
  - Encaminha trafego HTTPS para frontend e API.
  - Aplica headers de seguranca e politicas de cache.

## 3. Fluxo de Comunicacao
1. Usuario acessa o dashboard no navegador.
2. Frontend solicita autenticacao na API.
3. API valida credenciais e retorna tokens JWT.
4. Frontend envia `Authorization: Bearer <access_token>` nas rotas protegidas.
5. API valida token, executa regra de negocio e consulta o PostgreSQL.
6. API responde JSON para o frontend renderizar dados e indicadores.

## 4. Fluxo de Autenticacao JWT
### 4.1 Login
1. `POST /api/v1/auth/login` com email e senha.
2. API valida senha com hash forte (Argon2 ou bcrypt).
3. API retorna:
   - Access Token curto (exemplo: 15 minutos)
   - Refresh Token maior (exemplo: 7 dias)

### 4.2 Sessao autenticada
1. Frontend usa access token no header Authorization.
2. API valida assinatura, expiracao e claims.
3. Endpoints autorizam acesso por papel (RBAC: admin, instrutor, aluno).

### 4.3 Renovacao de token
1. Frontend chama `POST /api/v1/auth/refresh` quando access expira.
2. API valida refresh token e aplica rotacao de token.
3. API invalida refresh token anterior para reduzir risco de replay.

### 4.4 Logout
1. Frontend chama `POST /api/v1/auth/logout`.
2. API revoga token de refresh ativo (denylist/blacklist).

## 5. Requisitos de Seguranca
- HTTPS obrigatorio em qualquer ambiente externo.
- Refresh token em cookie `HttpOnly`, `Secure`, `SameSite`.
- CORS restritivo por dominio autorizado.
- Rate limiting em login e endpoints sensiveis.
- Sanitizacao e validacao de payload em todos os endpoints.
- Segredos por variaveis de ambiente (nunca em repositorio).
- Logs sem dados sensiveis (senha, token completo, PII).

## 6. Estrutura de Camadas (Clean Architecture simplificada)
- Camada API
  - Controllers/ViewSets e serializers.
- Camada de Aplicacao
  - Services e casos de uso.
- Camada de Dominio
  - Entidades, regras e politicas do negocio.
- Camada de Infraestrutura
  - Repositorios, ORM, integracoes externas.

## 7. Padroes e Boas Praticas
- DTO/Serializer para contrato de entrada e saida.
- Service Layer para regras de negocio nao triviais.
- Repository Pattern para desacoplar persistencia.
- Tratamento centralizado de excecoes.
- Versionamento de API (`/v1`, `/v2`) para evolucao sem quebra.

## 8. Observabilidade Minima
- Endpoint de health check (`/health`).
- Logs estruturados com correlacao de request id.
- Metricas basicas: latencia, taxa de erro e volume de requisicoes.

## 9. Criterios de Pronto da Arquitetura
- Fluxo JWT completo funcionando (login, refresh, logout).
- RBAC aplicado nas rotas protegidas.
- Contratos da API definidos e documentados.
- Health check e logs estruturados disponiveis.
