# Dockerfile seguro e otimizado para backend Django
FROM python:3.11-slim AS base

# Variáveis de ambiente para segurança e performance
ENV PYTHONDONTWRITEBYTECODE=1 \
		PYTHONUNBUFFERED=1 \
		PIP_NO_CACHE_DIR=1 \
		PIP_DISABLE_PIP_VERSION_CHECK=1 \
		PIP_DEFAULT_TIMEOUT=100

# Cria usuário não-root
RUN addgroup --system lms && adduser --system --ingroup lms lmsuser

WORKDIR /backend

# Instala dependências em camada separada para cache
COPY requirements.txt ./requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copia apenas o necessário (evita arquivos sensíveis e cache)
COPY . ./

# Permissões seguras
RUN chown -R lmsuser:lms /backend
USER lmsuser

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
	CMD curl -f http://localhost:8000/health/ || exit 1

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
