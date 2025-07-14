## 🗒️ Tarefas Detalhadas: Rinha de Backend em C
Abaixo, cada fase foi desmembrada em tarefas atômicas para facilitar o acompanhamento e evitar se perder.

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

