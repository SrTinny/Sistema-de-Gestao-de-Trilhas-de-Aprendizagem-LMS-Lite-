# 05 - Checklist de Linux

## 1. Objetivo
Consolidar comandos essenciais para configurar, monitorar e debugar o LMS Lite em servidor Linux.

## 2. Diagnostico Basico do Host
```bash
uname -a
cat /etc/os-release
lscpu
free -h
df -h
timedatectl
```

Quando usar:
- validacao de sistema operacional
- capacidade de CPU, memoria e disco
- timezone e sincronismo de horario

## 3. Rede e Portas
```bash
ip a
ss -tulpen
ping <host>
curl -I <url>
traceroute <host>
```

Quando usar:
- verificar IP e interfaces
- identificar portas abertas
- testar conectividade e latencia basica

## 4. Processos e Servicos
```bash
ps aux
top
htop
systemctl status <servico>
journalctl -u <servico> -n 200
journalctl -f
```

Quando usar:
- processo travado ou consumo anormal
- erro de inicializacao de servico
- leitura de logs em tempo real

## 5. Arquivos e Permissoes
```bash
pwd
ls -lah
find <caminho> -name "<padrao>"
chmod <modo> <arquivo>
chown <user>:<group> <arquivo>
tail -f <arquivo.log>
```

Quando usar:
- localizar configuracoes
- corrigir permissao de leitura/escrita
- acompanhar log de aplicacao

## 6. Git no Servidor
```bash
git status
git branch -a
git log --oneline --graph --decorate --all
git fetch --all
git diff
```

Quando usar:
- confirmar versao implantada
- investigar divergencia entre ambiente local e remoto

## 7. Docker e Docker Compose
```bash
docker ps -a
docker images
docker logs -f <container>
docker exec -it <container> sh
docker stats
docker inspect <container>
docker compose ps
docker compose logs -f
docker compose up -d --build
docker compose down
```

Quando usar:
- container nao sobe
- erro de rede interna entre servicos
- diagnostico de consumo de recurso

## 8. Operacao PostgreSQL
```bash
pg_isready
psql -h <host> -U <usuario> -d <banco>
\dt
EXPLAIN ANALYZE <query>
VACUUM ANALYZE
```

Quando usar:
- validar conexao ao banco
- analisar plano de execucao de query
- manutencao de performance

## 9. Seguranca Operacional Minima
```bash
ufw status
sudo -l
whoami
id
fail2ban-client status
```

Praticas:
- minimizar privilegios
- restringir portas abertas
- monitorar tentativas de acesso indevido

## 10. Playbook Rapido de Debug
1. Verificar saude do host (CPU, RAM, disco).
2. Validar servicos ativos e logs.
3. Confirmar status dos containers.
4. Testar conectividade API e banco.
5. Investigar query lenta no PostgreSQL.
6. Confirmar versao do codigo em execucao.
7. Aplicar correcao com rollback planejado.

## 11. Criterios de Pronto
- Operador consegue subir, parar e diagnosticar stack sozinho.
- Comandos de rede, processo, container e banco dominados.
- Procedimento de incidente documentado e reproduzivel.
