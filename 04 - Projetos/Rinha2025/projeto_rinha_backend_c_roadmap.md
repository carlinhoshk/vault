## 🗒️ Tarefas Detalhadas: Rinha de Backend em C

TODOLIST

Segue um **TODO List** completo para o desenvolvimento do seu projeto da Rinha de Backend em C, usando libevent, Redis, ZeroMQ e Nginx, incluindo tudo que é necessário para rodar, testar e entregar conforme o desafio.

---

## TODO List — Rinha de Backend em C

### 1. **Infraestrutura e Dependências**
- [x] Criar estrutura de pastas e arquivos do projeto
- [x] Criar Dockerfile para build do backend em C
- [x] Criar docker-compose.yml com:
  - [x] Nginx (load balancer)
  - [x] Redis (persistência)
  - [x] Duas instâncias do backend (app1, app2)
- [x] Adicionar ZeroMQ (biblioteca, não precisa rodar serviço externo)
- [x] Configurar Makefile e scripts de build

### 2. **Servidor HTTP (libevent)**
- [x] Implementar esqueleto do servidor HTTP (porta 8080)
- [x] Criar handler para POST /payments
- [x] Criar handler para GET /payments-summary

### 3. **Persistência e Mensageria**
- [x] Implementar integração com Redis (hiredis)
- [x] Implementar integração com ZeroMQ (fila interna)
- [ ] Implementar worker para processar pagamentos da fila (ZeroMQ) e salvar no Redis

### 4. **Lógica de Negócio**
- [ ] Fazer parsing do JSON recebido no POST /payments (usar cJSON ou similar)
- [ ] Gerar timestamp atual para requestedAt
- [ ] Implementar chamada HTTP para Payment Processor Default e Fallback
- [ ] Implementar health-check dos Payment Processors (com rate limit)
- [ ] Decidir dinamicamente entre default e fallback (menor taxa e disponibilidade)
- [ ] Implementar retry/fallback em caso de falha no processamento
- [ ] Salvar pagamento processado no Redis (default ou fallback)
- [ ] Implementar GET /payments-summary com suporte a parâmetros from/to

### 5. **Performance e Consistência**
- [ ] Otimizar acesso ao Redis para grandes volumes (ex: usar Sorted Sets se necessário)
- [ ] Implementar cache local para health-check
- [ ] Garantir atomicidade e consistência dos dados no Redis

### 6. **Testes e Validação**
- [ ] Testar endpoints com curl ou scripts HTTP
- [ ] Testar concorrência e performance (ex: usando k6 ou rinha-test)
- [ ] Validar consistência dos dados com os Payment Processors

### 7. **Documentação e Entrega**
- [x] Escrever README.md explicando a stack e como rodar
- [ ] Documentar endpoints e exemplos de uso
- [ ] Gerar info.json conforme instruções da Rinha
- [ ] Garantir que o projeto roda apenas com `docker-compose up --build`
- [ ] Conferir restrições de CPU/memória no docker-compose.yml

---

## **Preciso subir outras aplicações?**
Sim, para rodar e testar seu backend, você precisa subir:
- **Redis** (já incluído no docker-compose)
- **Nginx** (load balancer, já incluído)
- **Duas instâncias do seu backend** (já incluídas)
- **Payment Processors** (para integração real, use o docker-compose fornecido em `payment-processor/` do repositório da Rinha)

**ZeroMQ** é só biblioteca, não precisa rodar serviço externo.

---

### 🚀 Fase 0: Iniciação e Ambiente
1. **Clonar repositório base**
   - `git clone https://github.com/zanfranceschi/rinha-de-backend-2025.git rinha-backend-c`
2. **Criar branches principais**
   - `git checkout -b 0-setup`
   - `git checkout -b 1-http`
   - `git checkout -b 2-queue`
   - `git checkout -b 3-dispatcher`
   - `git checkout -b 4-stats`
   - `git checkout -b 5-ci`
3. **Configurar estrutura de diretórios**
   - Criar pastas: `src/`, `include/`, `lib/`, `tests/`, `scripts/`
   - Adicionar arquivos: `Makefile`, `Dockerfile`, `docker-compose.yml`
4. **Instalar dependências**
   - GCC/Clang (`build-essential`)
   - `musl-dev`, `libpthread`, `libcurl-dev`
   - Ferramentas: `make`/`cmake`, `valgrind`, `perf`, `wrk`, `ab`, `siege`
5. **Validar setup**
   - `make all` deve compilar sem erros
   - `make test` deve rodar testes mock iniciais

---

### 📡 Fase 1: HTTP Server Minimal (Branch `1-http`)
1. **Criar `main.c`**
   - Setup de socket TCP
   - Configurar non-blocking e epoll (edge-triggered)
2. **Ler porta de ambiente**
   - Usar variável `PORT` para bind
3. **Integrar picohttpparser**
   - Copiar `picohttpparser.c/h` para `lib/`
   - Incluir parsing de request-line e headers
4. **Implementar thread-pool**
   - Criar `threadpool.c/h` com tamanho configurável
   - Enfileirar conexões recebidas para workers
5. **Echo Handler**
   - Worker responde `HTTP/1.1 200 OK` com corpo estático
6. **Teste de performance**
   - Rodar `wrk -t4 -c100 -d10s http://localhost:PORT/`
   - Atingir >= 100k RPS e P99 < 10ms

---

### ⏳ Fase 2: Request Queue com Prioridade (Branch `2-queue`)
1. **Portar ring buffer MPMC**
   - Base: Vyukov’s bounded queue (converter C++)
2. **Adicionar campo `priority`**
   - Incluir byte extra no header da `task_t`
3. **Adaptar enqueue/dequeue**
   - Priorizar `priority=0` sobre `1`
4. **Testar concorrência**
   - Usar `valgrind --tool=helgrind` para detectar races
   - Simular 10 threads producers/consumers
5. **Medição de throughput**
   - Validar >1M ops/s

---

### 🔁 Fase 3: Dispatcher & Health Monitor (Branch `3-dispatcher`)
1. **Criar `client.c/h`**
   - Wrapper para libcurl multi-handle
2. **Implementar health-check**
   - Chamar `/health` dos processors
   - Cache: evitar mais de 1 chamada a cada 5s por endpoint
3. **Desenvolver `dispatch_payment()`**
   - Lógica de escolha (menor latência)
   - Retry até 3 vezes com backoff exponencial + jitter
4. **Criar mock server**
   - Configurar nginx ou json-server para rota `/health` e `/pay`
5. **Testar falhas**
   - Induzir timeouts e 500 para validar fallback
   - Assegurar dispatch <10ms no happy path

---

### 📊 Fase 4: Estatísticas & Summary (Branch `4-stats`)
1. **Counters atômicos**
   - Usar `stdatomic.h` para contadores de requests e falhas
2. **Histograma de latências**
   - Implementar bucket array (1ms…1000ms) ou integrar t-digest C
3. **Thread de coleta**
   - Consolidar métricas a cada 1 segundo
   - Resetar buckets após coleta
4. **Endpoint `/payments-summary`**
   - Serializar JSON com totais e percentis
5. **Validar métricas**
   - Testar via `curl` e carga leve, conferindo valores

---

### 🔧 Fase 5: CI/CD & Container (Branch `5-ci`)
1. **Escrever Dockerfile multi-stage**
   - Build em Alpine/musl, gerar binário estático (~2MB)
2. **Criar docker-compose.yml**
   - Serviço `rinha-c` + processors default/fallback
3. **Configurar GitHub Actions**
   - Workflow `build-and-test.yaml` com steps:
     - `make all`
     - `make test`
     - `clang-format --check`
     - `cppcheck src/`
     - `docker build` & `push`
4. **Bloqueio de merge**
   - Garantir que pipeline verde é requisito para PR merge

---

### 🚥 Fase 6: Benchmark & Otimização
1. **Testes de carga**
   - `wrk`, `ab`, `siege`, `hey` em endpoints `/payments` e `/payments-summary`
2. **Perf profiling**
   - `perf record` + `perf report` para identificar hotspots
3. **Ajustar flags de compilação**
   - `-O3 -march=native -flto`
4. **Otimizar alocação de memória**
   - Avaliar slab allocator ou jemalloc
5. **Revisão de sincronização**
   - Ajustar lock-free vs lock-based conforme hotspots

---

**Referências**:
- *Unix Network Programming* (Stevens)
- *Linux System Programming* (Molloy)
- *The Art of Multiprocessor Programming* (Herlihy & Shavit)
- picohttpparser, jsmn, libcurl docs, tdigest C
- Vyukov MPMC Ring Buffer examples

