# 06 - Cronograma de Desenvolvimento

## 1. Objetivo
Planejar a execucao do LMS Lite em 4 fases, com entregas incrementais e criterios de aceite claros.

## 2. Visao Geral por Fase
| Fase | Duracao sugerida | Foco principal |
|---|---|---|
| 1. Setup e Git | Semana 1 | Fundacao de projeto e governanca |
| 2. Backend e API | Semanas 2 a 4 | Dominio, autenticacao e regras de negocio |
| 3. Frontend e Integracao | Semanas 5 e 6 | Dashboard React e consumo da API |
| 4. Docker e Deploy | Semanas 7 e 8 | Containerizacao e operacao Linux |

## 3. Fase 1 - Setup e Git
Objetivos:
- organizar repositorio e padroes tecnicos
- configurar fluxo GitFlow
- definir arquitetura e backlog inicial

Entregaveis:
- documentacao de arquitetura
- templates de issue e pull request
- convencao de commits e branch naming
- pipeline basica (lint/test) habilitada

Criterios de aceite:
- branches protegidas (`main`, `develop`)
- PR obrigatorio funcionando
- checklist de qualidade aprovado

## 4. Fase 2 - Backend e API
Objetivos:
- implementar autenticacao JWT completa
- desenvolver modulos de cursos, modulos e progresso
- consolidar modelagem PostgreSQL com migracoes

Entregaveis:
- endpoints REST versionados (`/api/v1`)
- RBAC por papel de usuario
- migracoes de banco e seeds minimas
- testes unitarios e de integracao da API

Criterios de aceite:
- fluxo login/refresh/logout funcional
- regras de negocio criticas validadas
- cobertura de testes para casos essenciais

## 5. Fase 3 - Frontend e Integracao
Objetivos:
- construir dashboard React orientado a casos reais
- integrar autenticacao e consumo de API
- tratar estados de erro, carregamento e sessao expirada

Entregaveis:
- telas: login, listagem de cursos, detalhe de curso, progresso
- camada de servicos HTTP organizada
- protecao de rotas por autenticacao
- testes de componentes criticos

Criterios de aceite:
- fluxo ponta a ponta operando sem mocks
- UX minima consistente (erros e feedbacks)
- sessao e renovacao de token validadas

## 6. Fase 4 - Docker e Deploy
Objetivos:
- containerizar servicos com isolamento adequado
- validar stack em Linux
- documentar operacao e estrategia de rollback

Entregaveis:
- Dockerfile backend e frontend
- docker-compose com PostgreSQL e health checks
- runbook de subida, monitoramento e debug
- checklist operacional Linux executado

Criterios de aceite:
- ambiente sobe com comando unico
- persistencia de dados validada
- logs suficientes para diagnostico
- rollback documentado

## 7. Riscos e Mitigacoes
| Risco | Impacto | Mitigacao |
|---|---|---|
| Escopo inflado no inicio | atraso | backlog priorizado por valor |
| Falhas de integracao frontend/API | retrabalho | contratos de API definidos cedo |
| Problemas de ambiente | baixa produtividade | dockerizacao antecipada |
| Falta de teste em regra critica | regressao | testes obrigatorios por PR |

## 8. Metricas de Acompanhamento
- lead time por feature
- taxa de sucesso do pipeline CI
- defeitos encontrados por fase
- cobertura de testes dos modulos criticos
- tempo medio de resolucao de incidente local

## 9. Definicao de Conclusao do Projeto
O projeto e considerado concluido quando:
1. todas as fases estao com criterios de aceite cumpridos
2. documentacao tecnica esta atualizada
3. fluxo GitFlow esta sendo seguido sem excecao
4. aplicacao roda em Linux via Docker com saude comprovada
