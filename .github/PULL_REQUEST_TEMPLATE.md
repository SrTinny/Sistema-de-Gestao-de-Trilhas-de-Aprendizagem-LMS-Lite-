# Checklist de Pull Request – LMS Lite

## Clean Code
- [ ] Código com nomes claros e autoexplicativos
- [ ] Funções pequenas e com responsabilidade única
- [ ] Sem código morto, prints ou TODOs não tratados
- [ ] Comentários apenas quando necessário para contexto
- [ ] Separação clara de camadas (API, Application, Domain, Infra)

## Testes
- [ ] Testes unitários cobrindo regras de negócio críticas
- [ ] Testes de integração para endpoints e fluxos principais
- [ ] Todos os testes passam localmente
- [ ] Cobertura de testes não diminuiu

## Evidências de Funcionamento
- [ ] Screenshots, logs ou GIFs de funcionalidades implementadas
- [ ] Descrição clara do que foi testado manualmente
- [ ] Instruções para reproduzir/testar a feature

## Revisão e Segurança
- [ ] Validação de payloads e tratamento de erros
- [ ] Sem exposição de segredos ou dados sensíveis
- [ ] Revisão de roles/autorização quando aplicável

## Git e Documentação
- [ ] Commits pequenos, coesos e com mensagem clara (Conventional Commits)
- [ ] Branch nomeada conforme GitFlow
- [ ] Documentação atualizada (README, docs, comentários)

---
> PRs que não atenderem todos os critérios podem ser recusados até ajuste.
