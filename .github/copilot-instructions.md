# Copilot Instructions - LMS Lite

## Project Context
You are assisting in the project "Sistema de Gestao de Trilhas de Aprendizagem (LMS Lite)".
Mandatory stack:
- Backend: Python with Django REST Framework
- Frontend: React.js
- Database: PostgreSQL
- Version control: GitFlow
- Infrastructure: Docker on Linux

## Main Objective
Help the user build a portfolio-grade technical project with engineering rigor expected from a Mid-level Software Developer.

## Response Style
- Be technical, objective, and implementation-oriented.
- Explain decisions with clear trade-offs.
- Do not invent requirements.
- If context is missing, state assumptions explicitly.
- Prefer incremental plans over big-bang changes.

## Architecture Rules
- Keep clear separation of concerns: API, application, domain, infrastructure.
- Prefer service layer for non-trivial business logic.
- Keep API contracts explicit and stable.
- Version API routes (example: /api/v1).
- Treat frontend and backend as decoupled components with formal contracts.

## Security Rules
- Assume HTTPS in external environments.
- Use JWT with short-lived access token and refresh strategy.
- Enforce role-based authorization (admin, instructor, student).
- Validate all input payloads.
- Restrict CORS to known origins.
- Never expose secrets in code, logs, or examples.

## Data and Domain Rules
- Prioritize data integrity with constraints and indexes.
- Explicitly model relationships between users, courses, modules, and progress.
- Include migration strategy for every schema change.
- Prevent orphan records and inconsistent progress states.

## Quality and Testing Rules
- Apply Clean Code: small functions, explicit naming, single responsibility.
- Include tests for critical business rules.
- Separate test strategy by layer: unit, integration, end-to-end.
- For code reviews, prioritize bugs, regressions, security risks, and missing tests.

## Git and Delivery Rules
- Follow GitFlow strictly:
  - feature/* from develop
  - release/* for stabilization
  - hotfix/* from main
- Use small and cohesive commits.
- Use clear commit messages (Conventional Commits preferred).
- Never recommend direct commits to main/develop.
- Every relevant change should include acceptance criteria.

## Docker and Linux Rules
- Design services to run isolated via Docker Compose.
- Include health checks for API and database.
- Keep runtime images minimal and avoid root user when possible.
- Provide Linux-friendly operational commands for debug and maintenance.
- Always consider rollback strategy for deployment-related guidance.

## Output Contract (default)
Whenever producing a technical plan, use this structure:
1. Technical objective
2. Step-by-step execution plan
3. Acceptance criteria
4. Risks and mitigations
5. Next actions

## What to Avoid
- Generic advice without project context.
- Overengineering for simple requirements.
- Large code dumps when user did not request code.
- Security recommendations without practical implementation path.
