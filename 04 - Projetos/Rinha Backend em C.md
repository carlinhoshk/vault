
## 🗒️ To-Do List Rinha de Backend em C



---
### 🚀 Fase 0: Iniciação e Ambiente

**Objetivo**: ter repositório configurado, ferramentas de build e test instaladas.

-  Criar repositório `rinha-backend-c` a partir de `zanfranceschi/rinha-de-backend-2025`.
    
-  Definir branches principais: `0-setup`, `1-http`, `2-queue`, `3-dispatcher`, `4-stats`, `5-ci`.
    
-  Estrutura de pastas:
    
    ```text
    rinha-backend-c/
    ├── src/          # .c + .h
    ├── include/      # headers públicos
    ├── lib/          # dependências 3rd-party
    ├── tests/        # unit & integration
    ├── scripts/      # benchmarks, lint
    ├── Dockerfile
    ├── docker-compose.yml
    └── Makefile
    ```
    
-  Instalar toolchain e libs:
    
    - GCC/Clang, `build-essential`, `musl-dev`
        
    - `libpthread`, `libcurl-dev`
        
    - Ferramentas: `make`/`cmake`, `valgrind`, `perf`, `wrk`, `ab`, `siege`
        

> **Critério de Aceitação**: `make all` compila sem erros, `make test` roda mock tests iniciais.

---

### 📡 Fase 1: HTTP Server Minimal (Branch `1-http`)

**Objetivo**: server epoll+thread-pool que responde `200 OK` a qualquer request.

1. **Base I/O**:
    
    -  Criar `main.c` com socket TCP, epoll (edge-triggered), non-blocking.
        
    -  Adicionar configuração de porta via ENV (`PORT`).
        
2. **Parsing HTTP**:
    
    -  Integrar _picohttpparser_ (ver [README](https://github.com/h2o/picohttpparser)).
        
    -  Ler request-line + headers, identificar início do body.
        
3. **Thread-Pool**:
    
    -  Implementar pool simples com `pthread` (size configurável).
        
    -  Enfileirar eventos de conexão para workers.
        
4. **Echo Handler**:
    
    -  Worker lê buffer e responde `HTTP/1.1 200 OK\r\n...\r\nHello`.
        
5. **Testes**:
    
    -  `wrk -t4 -c100 -d10s http://localhost:${PORT}/` → medir RPS.
        
    -  Latência P50/P99 < 5ms.
        

> **Critério de Aceitação**: 100k reqs/s sustentadas, latência P99 < 10ms.

---

### ⏳ Fase 2: Request Queue com Prioridade (Branch `2-queue`)

**Objetivo**: adicionar fila MPMC lock-free com suporte a prioridades.

1. **Importação**:
    
    -  Portar Vyukov MPMC ring buffer para C.
        
2. **Prioridade**:
    
    -  Adicionar byte `prio` no header da task (0=default,1=fallback).
        
    -  Consumer verifica `head.prio` antes de dequeuing.
        
3. **Testes de Concorrência**:
    
    -  Valgrind Helgrind: sem races.
        
    -  Caso extremo: 10 threads producers/consumers.
        

> **Critério de Aceitação**: throughput da fila > 1M ops/s, sem data races.

---

### 🔁 Fase 3: Dispatcher & Health Monitor (Branch `3-dispatcher`)

**Objetivo**: integração com HTTP clients async, cache e retry.

1. **libcurl multi**:
    
    -  Criar wrapper `client.c` usando multi-handle não-bloqueante.
        
    -  Documentação: [libcurl-multi](https://curl.se/libcurl/c/libcurl-multi.html).
        
2. **Health Cache**:
    
    -  Estrutura `health_cache[idx]` com `last_checked`, `failing`.
        
    -  TTL 5s para skip health-check repetido.
        
3. **Dispatch Logic**:
    
    -  Função `dispatch_payment(id,amount)`:
        
        - Escolhe processor (menor latência).
            
        - Retry até 3 tentativas com backoff exponencial + jitter.
            
4. **Testes**:
    
    -  Mock server (nginx/json-server) validando rota `/health` e `/pay`.
        
    -  Injeção de falhas (timeout, 500) para garantir fallback.
        

> **Critério de Aceitação**: dispatch < 10ms no happy path, fallback acionado corretamente.

---

### 📊 Fase 4: Estatísticas & Summary (Branch `4-stats`)

**Objetivo**: coletar métricas de requisições e latências, expor JSON.

1. **Counters Atômicos**:
    
    -  `stdatomic.h` para contadores por rota (requests, successes, failures).
        
2. **Histograma de Latências**:
    
    -  Implementar _fixed buckets_ (1ms…1000ms) ou t-digest C.
        
3. **Thread de Coleta**:
    
    -  Consolida métricas a cada 1s, reinicia buckets.
        
4. **Endpoint `/payments-summary`**:
    
    -  Serializar JSON com totals e percentis.
        
5. **Testes**:
    
    -  Injeção de carga e validação de contagens via `curl`.
        

> **Critério de Aceitação**: métricas coerentes (<1% erro) e JSON válido.

---

### 🔧 Fase 5: CI/CD & Container (Branch `5-ci`)

**Objetivo**: pipeline automatizada e deploy em container leve.

1. **Docker**:
    
    -  Dockerfile multi-stage (musl, binário ~2MB).
        
    -  docker-compose para integrar processors e rinha-c.
        
2. **GitHub Actions**:
    
    -  Step `build`: `make all`.
        
    -  Step `test`: `make test`.
        
    -  Step `lint`: `clang-format`, `cppcheck`.
        
    -  Step `docker`: `docker build` + `push`.
        

> **Critério de Aceitação**: merge é bloqueado se qualquer step falhar.

---

### 🚥 Fase 6: Benchmark & Otimização

**Objetivo**: validar performance final e aplicar otimizações.

-  Gerar carga de pico com `wrk`, `ab`, `siege`, `hey`.
    
-  `perf record` + `perf report` para hotspots.
    
-  Ajustes de compiler flags: `-O3 -march=native -flto`.
    
-  Revisar slab allocator ou jemalloc, tuning de pool.
    
-  Review lock-free vs lock-based hotspots.
    

> **Critério de Aceitação**: RPS > meta, latência P99 < alvo, consumo de memória dentro do previsto.



---

**Referências Rápidas**:

- _Unix Network Programming_ (Stevens)
    
- _Linux System Programming_ (Molloy)
    
- _The Art of Multiprocessor Programming_ (Herlihy & Shavit)
    
- picohttpparser, jsmn, libcurl docs, tdigest C
    
- Vyukov MPMC Ring Buffer examples
    

> 💡 Siga este roteiro por fases, valide cada critério e acelere da prototipagem ao deploy com confiança!