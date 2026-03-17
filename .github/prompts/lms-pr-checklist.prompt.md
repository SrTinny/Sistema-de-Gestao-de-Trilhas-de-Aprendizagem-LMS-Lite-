---
name: lms-pr-checklist
description: "Gera checklist completo para submissao de PR no GitFlow."
argument-hint: "Informe nome da branch, escopo e mudancas principais."
agent: "lms-git-workflow"
---
Contexto do projeto:
- PRs com aprovacao obrigatoria
- Criterios de qualidade tecnicos

Tarefa:
Gere checklist de PR para validacao antes do merge.

Entrada:
[DESCREVER BRANCH, ESCOPO E MUDANCAS]

Formato de resposta esperado:
1. Checklist estrutural (commits, mensagens, branch naming).
2. Checklist de qualidade (testes, linting, docs).
3. Checklist de seguranca (secrets, validacoes, CORS).
4. Checklist de regressao e impacto.
5. Template para descricao do PR.
