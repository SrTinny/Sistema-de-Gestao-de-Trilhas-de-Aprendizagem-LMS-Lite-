FROM python:3.11-slim

# Instala curl (importante para o seu healthcheck do compose)
RUN apt-get update && apt-get install -y --no-install-recommends curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app/lmslite

# Copia dependências
COPY backend/requirements.txt /app/requirements.txt
RUN pip install --upgrade pip && pip install -r /app/requirements.txt

# Copia o código (manage.py deve estar em backend/lmslite/)
COPY backend/lmslite/ /app/lmslite/

# CRÍTICO: Cria o usuário e dá permissão na pasta /app
RUN useradd -m lmsuser && chown -R lmsuser:lmsuser /app/lmslite

# Só agora define o usuário
USER lmsuser

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]