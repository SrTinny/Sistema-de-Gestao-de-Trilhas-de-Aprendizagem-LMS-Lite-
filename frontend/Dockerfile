# Multi-stage Dockerfile seguro para frontend React (Vite)

# Etapa 1: build dos estáticos
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

# Etapa 2: servir estáticos com Nginx
FROM nginx:1.25-alpine AS prod
WORKDIR /usr/share/nginx/html

# Remove arquivos default do Nginx
RUN rm -rf ./*

# Copia build do Vite
COPY --from=build /app/dist .

# Copia configuração customizada de segurança (se existir)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Healthcheck básico
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
	CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
