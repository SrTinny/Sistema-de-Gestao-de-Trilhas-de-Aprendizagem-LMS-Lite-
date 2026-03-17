---
name: lms-qa-plano-testes
description: "Cria plano de testes por risco para uma feature do LMS."
argument-hint: "Informe feature, risco e escopo de validacao."
agent: "lms-qa-testes"
---
Contexto do projeto:
- LMS Lite com backend Django e frontend React

Tarefa:
Monte o plano de testes da feature abaixo.

Entrada:
[DESCREVER FEATURE]

Formato de resposta esperado:
1. Matriz de cenarios por criticidade.
2. Pre-condicoes e dados de teste.
3. Cobertura por camada: unitario, integracao, E2E.
4. Riscos de regressao.
5. Criterio de aprovacao.
