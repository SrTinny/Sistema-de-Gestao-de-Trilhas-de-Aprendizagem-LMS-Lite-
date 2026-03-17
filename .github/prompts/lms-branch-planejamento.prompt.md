---
name: lms-branch-planejamento
description: "Planeja estrutura de branch para feature, hotfix ou release no GitFlow."
argument-hint: "Informe tipo de trabalho (feature, hotfix, release) e escopo."
agent: "lms-git-workflow"
---
Contexto do projeto:
- GitFlow com main/develop
- Nomeclatura: feature/*, hotfix/*, release/*

Tarefa:
Planeje a estrutura de branch e fluxo de merge.

Entrada:
[DESCREVER TIPO DE TRABALHO E ESCOPO]

Formato de resposta esperado:
1. Nome da branch seguindo convencao.
2. Branch origem recomendada.
3. Fluxo esperado de merge.
4. Criterios de PR.
5. Checklist de validacao pre-merge.
