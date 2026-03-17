# 04 - Roteiro de Dockerizacao

## 1. Objetivo
Padronizar execucao dos servicos (backend, frontend e banco) em containers isolados, com foco em reproducibilidade local e deploy em Linux.

## 2. Escopo de Containers
- backend: API Python
- frontend: aplicacao React
- db: PostgreSQL
- (opcional em producao) reverse proxy para TLS e roteamento

## 3. Estrategia de Dockerfile

## 3.1 Backend Python
Diretrizes:
- Usar imagem base slim.
- Instalar apenas dependencias necessarias.
- Evitar rodar como root.
- Definir comando explicito de inicializacao.
- Separar variaveis de ambiente por ambiente.

Checklist tecnico:
1. Definir `WORKDIR`.
2. Copiar arquivo de dependencias antes do codigo para aproveitar cache de build.
3. Instalar dependencias.
4. Copiar codigo da aplicacao.
5. Criar usuario nao-root.
6. Expor porta da API.
7. Definir command/entrypoint.

## 3.2 Frontend React
Diretrizes:
- Build em estagio separado (multi-stage).
- Runtime leve para servir artefato estatico.
- Injetar URL da API por variavel de ambiente.

Checklist tecnico:
1. Stage de build para gerar bundle.
2. Stage de runtime enxuto.
3. Expor porta do frontend.
4. Garantir cache-control para assets quando aplicavel.

## 4. Estrutura do docker-compose
Servicos recomendados:
- `db`
  - imagem postgres
  - volume persistente
  - healthcheck de disponibilidade
- `backend`
  - build local do Dockerfile da API
  - depende da saude do banco
  - variaveis de conexao e JWT
- `frontend`
  - build local do Dockerfile React
  - aponta para endpoint da API

Elementos obrigatorios:
- redes dedicadas
- volumes nomeados
- health checks
- restart policy adequada

## 5. Variaveis de Ambiente
Separar por arquivo de ambiente:
- `.env.example` com placeholders
- `.env` local fora de versionamento sensivel

Variaveis minimas:
- APP_ENV
- DATABASE_URL
- JWT_SECRET
- JWT_ACCESS_TTL
- JWT_REFRESH_TTL
- CORS_ALLOWED_ORIGINS

Regras:
- Nao commitar segredos reais.
- Trocar secrets por ambiente (dev/stage/prod).

## 6. Ordem de Implementacao
1. Criar Dockerfile do backend.
2. Criar Dockerfile do frontend.
3. Criar compose com db/backend/frontend.
4. Configurar volume persistente do banco.
5. Adicionar health checks.
6. Subir stack e validar conectividade entre servicos.
7. Validar reinicio e persistencia de dados.
8. Documentar runbook de operacao.

## 7. Validacoes Obrigatorias
- API responde endpoint de health.
- Frontend consome API sem erro de CORS.
- Banco permanece consistente apos restart.
- Logs de backend e banco disponiveis para debug.

## 8. Hardening para Producao
- Rodar containers com usuario nao-root.
- Minimizar superficie da imagem.
- Limitar recursos (cpu/memoria) quando necessario.
- Configurar politica de logs e rotacao.
- Aplicar scanner de vulnerabilidade nas imagens.

## 9. Criterios de Pronto
- Subida do ambiente com comando unico.
- Isolamento dos servicos funcional.
- Persistencia de dados comprovada.
- Processo de diagnostico documentado.
