---
name: lms-historico-git-revisao
description: "Revisa historico Git de uma branch para coerencia e qualidade."
argument-hint: "Informe branch e criterios de validacao desejados."
agent: "lms-git-workflow"
---
Contexto do projeto:
- Conventional Commits
- Commits pequenos e coesos

Tarefa:
Revise o historico Git da branch para validar qualidade e coerencia.

Entrada:
[DESCREVER BRANCH OU RANGE DE COMMITS]

Formato de resposta esperado:
1. Resumo dos commits.
2. Achados: mensagens inadequadas, commits muito grandes, etc.
3. Recomendacoes de reorganizacao (rebase, squash).
4. Impacto em rastreabilidade.
5. Decisao: pronto para PR ou precisa ajustes.
