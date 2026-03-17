---
name: lms-commit-estrutura
description: "Estrutura e valida commits seguindo Conventional Commits para o LMS Lite."
argument-hint: "Informe arquivos modificados, intencao de mudanca e contexto."
agent: "lms-git-workflow"
---
Contexto do projeto:
- GitFlow com branches: main, develop, feature/*, release/*, hotfix/*
- Conventional Commits obrigatorio

Tarefa:
Estruture os commits para a mudanca abaixo.

Entrada:
[DESCREVER MUDANCA, ARQUIVOS E INTENCAO]

Formato de resposta esperado:
1. Numero e tipos de commits necessarios.
2. Mensagens de commit por Conventional Commits.
3. Sequencia logica dos commits.
4. Validacao de coerencia historica.
5. Criterio de pronto.
