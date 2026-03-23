# Copilot Customizacao do LMS Lite

Este diretorio contem a configuracao de agentes e prompts para acelerar a construcao do projeto com padrao tecnico.

## Como usar
1. Abra o chat do Copilot no VS Code.
2. Para usar prompts, digite / e selecione um prompt da lista.
3. Para usar agentes, selecione o agente no chat e envie sua tarefa.
4. Sempre informe contexto, restricoes e criterio de aceite.

## Agentes disponiveis
- lms-arquiteto
- lms-backend-django
- lms-frontend-react
- lms-integracao-fullstack
- lms-seguranca-web
- lms-qa-testes
- lms-devops-docker-linux
- lms-code-review

## Prompts disponiveis
- lms-arquitetura-decisao
- lms-backend-modulo
- lms-frontend-tela
- lms-integracao-fluxo
- lms-seguranca-revisao
- lms-qa-plano-testes
- lms-devops-plano
- lms-code-review
- lms-handoff-projeto
- lms-planejamento-semanal

## Fluxo recomendado
1. Comece por lms-planejamento-semanal.
2. Use lms-arquitetura-decisao para definicoes tecnicas.
3. Execute backend e frontend em paralelo com seus prompts.
4. Rode lms-integracao-fluxo ao fim de cada modulo.
5. Valide com lms-seguranca-revisao e lms-qa-plano-testes.
6. Feche cada PR com lms-code-review.
