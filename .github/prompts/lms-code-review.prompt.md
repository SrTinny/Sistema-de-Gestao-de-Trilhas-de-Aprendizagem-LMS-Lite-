---
name: lms-code-review
description: "Executa revisao tecnica com foco em bugs, regressao e seguranca."
argument-hint: "Informe alteracao ou pull request a revisar."
agent: "lms-code-review"
---
Tarefa:
Revise a alteracao abaixo com mentalidade de risco tecnico.

Entrada:
[DESCREVER ALTERACAO OU PR]

Formato de resposta esperado:
1. Achados por severidade: critico, alto, medio, baixo.
2. Evidencia e impacto tecnico de cada achado.
3. Recomendacao de correcao.
4. Riscos residuais e lacunas de teste.
5. Decisao final: aprovar, aprovar com ressalvas ou bloquear.
