# LMS Lite - Documentacao Tecnica

## Objetivo
Este diretorio consolida a documentacao tecnica do projeto **Sistema de Gestao de Trilhas de Aprendizagem (LMS Lite)**.
O foco e demonstrar maturidade de engenharia de software para uma vaga de Programador Pleno.

## Escopo Tecnico
- Backend: Python com Django REST Framework
- Frontend: React.js
- Banco de dados: PostgreSQL
- Versionamento: Git com GitFlow
- Infraestrutura: Docker em ambiente Linux

## Documentos
1. [Arquitetura do Sistema](./01-arquitetura-sistema.md)
2. [Modelagem de Dados PostgreSQL](./02-modelagem-dados-postgresql.md)
3. [Guia de GitFlow](./03-guia-gitflow.md)
4. [Roteiro de Dockerizacao](./04-roteiro-dockerizacao.md)
5. [Checklist de Linux](./05-checklist-linux.md)
6. [Cronograma de Desenvolvimento](./06-cronograma-desenvolvimento.md)
7. [Prompts para Agentes de IA](./07-prompts-agentes-ia.md)

## Ordem Recomendada de Implementacao
1. Ler arquitetura e regras de seguranca.
2. Validar modelagem de dados e regras de negocio.
3. Configurar fluxo GitFlow e padrao de PR.
4. Implementar backend e frontend por incrementos.
5. Containerizar e validar operacao no Linux.
6. Executar cronograma por fases e criterios de pronto.

## Principios de Engenharia Aplicados
- Clean Code e responsabilidade unica.
- Separacao por camadas (API, aplicacao, dominio, infraestrutura).
- Seguranca por padrao (secure by default).
- Testabilidade e observabilidade desde o inicio.
- Entregas incrementais com governanca de versionamento.
