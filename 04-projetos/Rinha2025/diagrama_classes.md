# Diagrama de Classes - Rinha C Backend

## 1. Classe Payment

```mermaid
classDiagram
    class Payment {
        +char correlation_id[64]
        +double amount
        +char requested_at[32]
        +payment_create(correlation_id, amount, requested_at) Payment*
        +payment_destroy(payment) void
    }
```

**Descrição:** Representa um pagamento com ID único, valor e timestamp.

---

## 2. Classe Summary

```mermaid
classDiagram
    class Summary {
        +int total_requests_default
        +double total_amount_default
        +int total_requests_fallback
        +double total_amount_fallback
        +summary_create() Summary*
        +summary_destroy(summary) void
    }
```

**Descrição:** Agrega estatísticas de pagamentos por tipo (default/fallback).

---

## 3. Classe RedisClient

```mermaid
classDiagram
    class RedisClient {
        -redisContext* ctx
        +redis_connect(host, port) void
        +redis_disconnect() void
        +redis_save_payment(payment, is_fallback) int
        +redis_get_summary(summary) int
    }
```

**Descrição:** Gerencia conexão e operações com Redis (persistência).

---

## 4. Classe ZMQClient

```mermaid
classDiagram
    class ZMQClient {
        -void* zmq_ctx
        -void* zmq_sock
        +zmq_client_init() void
        +zmq_cleanup() void
        +zmq_send_payment(payment) int
        +zmq_recv_payment() Payment*
    }
```

**Descrição:** Gerencia fila assíncrona para mensageria entre componentes.

---

## 5. Classe Main (HTTP Server)

```mermaid
classDiagram
    class Main {
        -int toggle
        +on_payments(request, arg) void
        +on_payments_summary(request, arg) void
        +main(argc, argv) int
    }
```

**Descrição:** Servidor HTTP principal com handlers para endpoints.

---

## Relacionamentos

```mermaid
classDiagram
    Main --> RedisClient : usa
    Main --> ZMQClient : usa
    Main --> Payment : cria
    Main --> Summary : cria
    RedisClient --> Payment : salva
    RedisClient --> Summary : preenche
    ZMQClient --> Payment : envia/recebe
``` 