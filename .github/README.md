# Sistema de Gestão de Trilhas de Aprendizagem (LMS Lite)

## Stack Utilizada
- **Backend:** Python, Django REST Framework
- **Frontend:** React.js
- **Banco de Dados:** PostgreSQL
- **Infraestrutura:** Docker Compose (Linux-friendly)
- **Controle de Versão:** GitFlow

## Descrição do Projeto
Plataforma LMS simplificada para gestão de cursos, trilhas, usuários e progresso, com autenticação JWT, RBAC e integração frontend-backend desacoplada.

## Troubleshooting: Erros de Encoding e Migrações

**Problema:** UnicodeDecodeError ao rodar migrações ou conectar ao banco.

**Causas comuns:**
- Banco criado sem encoding UTF-8
- Variáveis de ambiente ou arquivos .env com caracteres especiais fora de UTF-8
- Execução de comandos Django fora do container Docker

**Solução Recomendada:**
1. Sempre rode comandos Django dentro do container backend:
    ```sh
    docker exec -it NOME_DO_CONTAINER_BACKEND bash
    python /backend/lmslite/manage.py migrate
    ```
2. Confirme que o banco está em UTF8 (via psql: `\l` e `\encoding`).
3. Garanta que arquivos Python e .env estejam salvos em UTF-8.
4. Variáveis de ambiente no docker-compose.yml devem ser ASCII.

**Exemplo de comando para rodar migrações:**
```sh
docker exec -it sistema-de-gestao-de-trilhas-de-aprendizagem-lms-lite--backend-1 bash
python /backend/lmslite/manage.py migrate
```

Se precisar rodar seeds ou outros comandos, execute-os também dentro do container.

## Documentação Técnica

### Objetivo
Consolidar informações técnicas do projeto **Sistema de Gestão de Trilhas de Aprendizagem (LMS Lite)**, demonstrando maturidade de engenharia de software para vaga de Programador Pleno.

### Escopo Técnico
- Backend: Python com Django REST Framework
- Frontend: React.js
- Banco de dados: PostgreSQL
- Versionamento: Git com GitFlow
- Infraestrutura: Docker em ambiente Linux

### Documentos
1. [Arquitetura do Sistema](./01-arquitetura-sistema.md)
2. [Modelagem de Dados PostgreSQL](./02-modelagem-dados-postgresql.md)
3. [Guia de GitFlow](./03-guia-gitflow.md)
4. [Roteiro de Dockerizacao](./04-roteiro-dockerizacao.md)
5. [Checklist de Linux](./05-checklist-linux.md)
6. [Cronograma de Desenvolvimento](./06-cronograma-desenvolvimento.md)
7. [Prompts para Agentes de IA](./07-prompts-agentes-ia.md)

### Ordem Recomendada de Implementação
1. Ler arquitetura e regras de segurança.
2. Validar modelagem de dados e regras de negócio.
3. Configurar fluxo GitFlow e padrão de PR.
4. Implementar backend e frontend por incrementos.
5. Containerizar e validar operação no Linux.
6. Executar cronograma por fases e critérios de pronto.

### Princípios de Engenharia Aplicados
- Clean Code e responsabilidade única.
- Separação por camadas (API, aplicação, domínio, infraestrutura).
- Segurança por padrão (secure by default).
- Testabilidade e observabilidade desde o início.
- Entregas incrementais com governança de versionamento.


