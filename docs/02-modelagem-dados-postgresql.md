# 02 - Modelagem de Dados PostgreSQL

## 1. Objetivo
Definir um modelo relacional para suportar trilhas de aprendizagem com foco em:
- integridade dos dados
- performance de consultas principais
- evolucao controlada por migracoes

## 2. Entidades Principais
- usuarios
- cursos
- modulos
- matriculas (recomendado para relacao aluno-curso)
- progresso

## 3. Estrutura de Tabelas

## 3.1 usuarios
| Campo | Tipo | Regra |
|---|---|---|
| id | UUID PK | chave primaria |
| nome | VARCHAR(120) | obrigatorio |
| email | VARCHAR(180) | obrigatorio, unico |
| senha_hash | TEXT | obrigatorio |
| papel | VARCHAR(20) | valores: admin, instrutor, aluno |
| ativo | BOOLEAN | default true |
| criado_em | TIMESTAMP | default now |
| atualizado_em | TIMESTAMP | default now |

Indices:
- unique(email)
- index(papel)
- index(ativo)

## 3.2 cursos
| Campo | Tipo | Regra |
|---|---|---|
| id | UUID PK | chave primaria |
| titulo | VARCHAR(180) | obrigatorio |
| slug | VARCHAR(200) | obrigatorio, unico |
| descricao | TEXT | opcional |
| nivel | VARCHAR(30) | iniciante, intermediario, avancado |
| publicado | BOOLEAN | default false |
| instrutor_id | UUID FK -> usuarios(id) | obrigatorio para curso publicado |
| criado_em | TIMESTAMP | default now |
| atualizado_em | TIMESTAMP | default now |

Indices:
- unique(slug)
- index(instrutor_id)
- index(publicado)

## 3.3 modulos
| Campo | Tipo | Regra |
|---|---|---|
| id | UUID PK | chave primaria |
| curso_id | UUID FK -> cursos(id) | obrigatorio |
| titulo | VARCHAR(180) | obrigatorio |
| ordem | INT | obrigatorio, > 0 |
| duracao_min | INT | obrigatorio, > 0 |
| conteudo_url | TEXT | opcional |
| publicado | BOOLEAN | default false |
| criado_em | TIMESTAMP | default now |
| atualizado_em | TIMESTAMP | default now |

Indices:
- unique(curso_id, ordem)
- index(curso_id)
- index(publicado)

## 3.4 matriculas (recomendado)
| Campo | Tipo | Regra |
|---|---|---|
| id | UUID PK | chave primaria |
| usuario_id | UUID FK -> usuarios(id) | obrigatorio |
| curso_id | UUID FK -> cursos(id) | obrigatorio |
| status | VARCHAR(20) | ativa, pausada, cancelada, concluida |
| matriculado_em | TIMESTAMP | default now |

Indices:
- unique(usuario_id, curso_id)
- index(curso_id, status)

## 3.5 progresso
| Campo | Tipo | Regra |
|---|---|---|
| id | UUID PK | chave primaria |
| usuario_id | UUID FK -> usuarios(id) | obrigatorio |
| modulo_id | UUID FK -> modulos(id) | obrigatorio |
| status | VARCHAR(20) | nao_iniciado, em_andamento, concluido |
| percentual | NUMERIC(5,2) | entre 0 e 100 |
| iniciado_em | TIMESTAMP | opcional |
| concluido_em | TIMESTAMP | opcional |
| atualizado_em | TIMESTAMP | default now |

Indices:
- unique(usuario_id, modulo_id)
- index(usuario_id, status)
- index(modulo_id)

## 4. Relacionamentos e Cardinalidade
- usuario (instrutor) 1:N cursos
- curso 1:N modulos
- usuario N:N cursos (via matriculas)
- usuario N:N modulos (via progresso)

## 5. Regras de Negocio Criticas
1. Nao permitir `status = concluido` com `percentual < 100`.
2. Nao permitir matricula de usuario inativo.
3. Nao publicar curso sem pelo menos 1 modulo publicado.
4. Ao excluir curso, definir politica (soft delete recomendado).

## 6. Estrategia de Migracoes
1. Criar migracao inicial com entidades base.
2. Criar migracoes incrementais para constraints e indices.
3. Versionar todas as migracoes no Git.
4. Nunca editar migracao aplicada em ambiente compartilhado.

## 7. Consultas que Devem ser Otimizadas
- Listar cursos publicados por nivel.
- Listar modulos de um curso por ordem.
- Buscar progresso de um aluno no curso.
- Calcular percentual agregado da trilha.

## 8. Criterios de Pronto da Modelagem
- Constraints implementadas e validadas.
- Indices para consultas principais criados.
- Integridade referencial sem orphan records.
- Migracoes reproduziveis em ambiente limpo.
