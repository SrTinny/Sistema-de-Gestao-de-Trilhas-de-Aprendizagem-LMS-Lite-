# 03 - Guia de GitFlow

## 1. Objetivo
Demonstrar processo profissional de versionamento, com historico rastreavel e entregas previsiveis.

## 2. Estrategia de Branches
- main: estado estavel de producao.
- develop: integracao da proxima versao.
- feature/<nome-curto>: desenvolvimento de funcionalidade.
- release/<x.y.z>: preparacao de release.
- hotfix/<x.y.z>: correcao urgente em producao.

## 3. Setup Inicial
1. Criar repositorio com branch `main`.
2. Criar branch `develop` a partir da `main`.
3. Configurar protecao de branch para `main` e `develop`.
4. Exigir pull request e status checks para merge.

## 4. Fluxo Diario de Desenvolvimento
1. Sincronizar `develop` local.
2. Criar branch de feature a partir de `develop`.
3. Realizar commits pequenos e coesos.
4. Publicar branch remota e abrir PR para `develop`.
5. Revisar, aprovar e mergear via PR.

Exemplo de comandos:
```bash
git checkout develop
git pull origin develop
git checkout -b feature/autenticacao-jwt
# ... trabalho local ...
git add .
git commit -m "feat(auth): implementa fluxo de login com jwt"
git push -u origin feature/autenticacao-jwt
```

## 5. Convencao de Commits
Padrao recomendado: Conventional Commits.

Formato:
`tipo(escopo): descricao objetiva`

Tipos:
- feat
- fix
- refactor
- test
- docs
- chore

Boas praticas:
- Uma intencao por commit.
- Mensagens em ASCII para evitar problema de encoding no Windows.
- Evitar commit gigante com mudancas sem relacao.

## 6. Pull Request Profissional
Checklist minimo no PR:
- problema e contexto
- abordagem da solucao
- impacto tecnico (API, DB, seguranca)
- evidencias de teste
- plano de rollback

## 7. Processo de Release
1. Criar `release/x.y.z` a partir de `develop`.
2. Ajustar versao, notas e correcao final.
3. Validar testes regressivos.
4. Mergear release em `main` e em `develop`.
5. Criar tag da versao (`vX.Y.Z`).

Exemplo:
```bash
git checkout develop
git pull origin develop
git checkout -b release/1.0.0
# ajustes finais
git checkout main
git merge --no-ff release/1.0.0
git tag v1.0.0
git push origin main --tags
git checkout develop
git merge --no-ff release/1.0.0
git push origin develop
```

## 8. Processo de Hotfix
1. Criar `hotfix/x.y.z` a partir de `main`.
2. Aplicar correcao urgente.
3. Abrir PR para `main`.
4. Mergear em `main` e propagar para `develop`.
5. Taggear versao de hotfix.

## 9. Politicas de Qualidade
- Nao commitar direto em `main` e `develop`.
- PR sem review nao entra.
- Pipeline CI obrigatoria antes do merge.
- Tag semantica por release.

## 10. Criterios de Pronto de GitFlow
- Fluxo documentado e seguido por todas as features.
- Historico limpo e rastreavel.
- Releases e hotfixes com tags e changelog.
- PRs com padrao de qualidade consistente.
