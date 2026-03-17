---
name: lms-devops-plano
description: "Gera plano tecnico de Docker e operacao Linux para o LMS."
argument-hint: "Informe objetivo DevOps, ambiente e restricoes."
agent: "lms-devops-docker-linux"
---
Contexto do projeto:
- Docker para backend, frontend e banco
- Operacao em Linux

Tarefa:
Elabore o plano tecnico para o objetivo abaixo.

Entrada:
[DESCREVER OBJETIVO DEVOPS]

Formato de resposta esperado:
1. Estrategia de Dockerfile e compose.
2. Variaveis de ambiente e segredos.
3. Health checks, logs e observabilidade.
4. Checklist de validacao operacional.
5. Plano de rollback.
