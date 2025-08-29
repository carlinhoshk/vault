# Tabela de Modularização - Rinha C Backend

## Estrutura de Arquivos

| Arquivo | Tipo | Responsabilidade | Dependências |
|---------|------|------------------|--------------|
| **main.c** | .c | Servidor HTTP principal, handlers de endpoints | redis_client.h, zmq_client.h, libevent |
| **main.o** | .o | Objeto compilado do main.c | - |
| **payments.h** | .h | Definição da struct payment_t e funções | - |
| **payments.c** | .c | Implementação das funções de pagamento | payments.h, stdlib, string.h |
| **payments.o** | .o | Objeto compilado do payments.c | - |
| **summary.h** | .h | Definição da struct summary_t e funções | - |
| **summary.c** | .c | Implementação das funções de resumo | summary.h, stdlib |
| **summary.o** | .o | Objeto compilado do summary.c | - |
| **redis_client.h** | .h | Interface do cliente Redis | payments.h, summary.h |
| **redis_client.c** | .c | Implementação do cliente Redis | redis_client.h, hiredis |
| **redis_client.o** | .o | Objeto compilado do redis_client.c | - |
| **zmq_client.h** | .h | Interface do cliente ZeroMQ | payments.h |
| **zmq_client.c** | .c | Implementação do cliente ZeroMQ | zmq_client.h, zmq |
| **zmq_client.o** | .o | Objeto compilado do zmq_client.c | - |

## Módulos Principais

### 1. **Módulo Payment** (`payments.h` + `payments.c`)
- **Responsabilidade:** Gerenciar entidade de pagamento
- **Struct:** `payment_t`
- **Funções:** `payment_create()`, `payment_destroy()`

### 2. **Módulo Summary** (`summary.h` + `summary.c`)
- **Responsabilidade:** Agregar estatísticas de pagamentos
- **Struct:** `summary_t`
- **Funções:** `summary_create()`, `summary_destroy()`

### 3. **Módulo Redis** (`redis_client.h` + `redis_client.c`)
- **Responsabilidade:** Persistência de dados no Redis
- **Funções:** `redis_connect()`, `redis_disconnect()`, `redis_save_payment()`, `redis_get_summary()`

### 4. **Módulo ZeroMQ** (`zmq_client.h` + `zmq_client.c`)
- **Responsabilidade:** Mensageria assíncrona
- **Funções:** `zmq_client_init()`, `zmq_cleanup()`, `zmq_send_payment()`, `zmq_recv_payment()`

### 5. **Módulo Main** (`main.c`)
- **Responsabilidade:** Servidor HTTP e orquestração
- **Funções:** `main()`, `on_payments()`, `on_payments_summary()`

## Dependências Externas

| Biblioteca | Propósito | Arquivos que usam |
|------------|-----------|-------------------|
| **libevent** | Servidor HTTP assíncrono | main.c |
| **hiredis** | Cliente Redis | redis_client.c |
| **zmq** | Mensageria ZeroMQ | zmq_client.c |
| **stdlib** | Funções padrão C | payments.c, summary.c |
| **string.h** | Manipulação de strings | payments.c |

## Fluxo de Compilação

```
*.h (headers) → *.c (implementação) → *.o (objetos) → bin/rinha_c (executável)
```

**Makefile:** Orquestra a compilação de todos os módulos 