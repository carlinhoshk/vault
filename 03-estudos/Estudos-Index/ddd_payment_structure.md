# Estrutura DDD para Serviço de Pagamento com Spring WebFlux

## 📁 Estrutura de Packages Recomendada

```
src/main/java/io/github/carlinhoshk/payment_service/
├── 📁 domain/
│   ├── 📁 cliente/
│   │   ├── Cliente.java                    # Entity
│   │   ├── ClienteRepository.java          # Port (Interface)
│   │   ├── ClienteService.java             # Domain Service
│   │   └── 📁 valueobjects/
│   │       ├── CPF.java
│   │       ├── Email.java
│   │       └── Endereco.java
│   ├── 📁 pagamento/
│   │   ├── Pagamento.java                  # Entity/Aggregate Root
│   │   ├── PagamentoRepository.java        # Port
│   │   ├── PagamentoService.java           # Domain Service
│   │   ├── 📁 valueobjects/
│   │   │   ├── Valor.java
│   │   │   ├── StatusPagamento.java
│   │   │   └── MetodoPagamento.java
│   │   └── 📁 events/
│   │       ├── PagamentoProcessado.java
│   │       └── PagamentoFalhou.java
│   ├── 📁 cartao/
│   │   ├── Cartao.java
│   │   ├── CartaoRepository.java
│   │   └── 📁 valueobjects/
│   │       ├── NumeroCartao.java
│   │       └── CVV.java
│   └── 📁 shared/
│       ├── 📁 valueobjects/
│       │   ├── ID.java
│       │   └── Timestamp.java
│       └── 📁 exceptions/
│           ├── DomainException.java
│           └── BusinessRuleException.java

├── 📁 application/
│   ├── 📁 usecases/
│   │   ├── ProcessarPagamentoUseCase.java
│   │   ├── ConsultarPagamentoUseCase.java
│   │   └── CancelarPagamentoUseCase.java
│   ├── 📁 dto/
│   │   ├── 📁 request/
│   │   │   ├── ProcessarPagamentoRequest.java
│   │   │   └── CancelarPagamentoRequest.java
│   │   └── 📁 response/
│   │       ├── PagamentoResponse.java
│   │       └── StatusPagamentoResponse.java
│   └── 📁 ports/
│       ├── 📁 input/
│       │   └── PagamentoInputPort.java
│       └── 📁 output/
│           ├── NotificacaoOutputPort.java
│           └── GatewayPagamentoOutputPort.java

├── 📁 infrastructure/
│   ├── 📁 adapters/
│   │   ├── 📁 web/
│   │   │   ├── PagamentoController.java
│   │   │   └── ClienteController.java
│   │   ├── 📁 persistence/
│   │   │   ├── 📁 mongodb/
│   │   │   │   ├── ClienteRepositoryImpl.java
│   │   │   │   ├── PagamentoRepositoryImpl.java
│   │   │   │   └── 📁 entities/
│   │   │   │       ├── ClienteDocument.java
│   │   │   │       └── PagamentoDocument.java
│   │   │   └── 📁 r2dbc/
│   │   │       └── (alternativa para PostgreSQL)
│   │   ├── 📁 external/
│   │   │   ├── StripeGatewayAdapter.java
│   │   │   ├── PayPalGatewayAdapter.java
│   │   │   └── EmailNotificationAdapter.java
│   │   └── 📁 messaging/
│   │       ├── KafkaEventPublisher.java
│   │       └── RabbitMQEventConsumer.java
│   └── 📁 config/
│       ├── WebFluxConfig.java
│       ├── DatabaseConfig.java
│       └── DomainConfig.java

└── 📁 shared/
    └── 📁 kernel/
        ├── DomainEvent.java
        ├── AggregateRoot.java
        └── EventPublisher.java
```

## 🏗️ Principais Conceitos DDD Aplicados

### 1. **Agregados e Entidades**
- `Pagamento` como Aggregate Root
- `Cliente` e `Cartao` como entidades
- Value Objects para encapsular lógica de negócio

### 2. **Ports & Adapters (Hexagonal Architecture)**
- **Ports**: Interfaces que definem contratos
- **Adapters**: Implementações concretas dos ports

### 3. **Use Cases (Application Services)**
- Orquestram as regras de negócio
- Não contêm lógica de domínio
- Coordenam chamadas entre domain services

## 🧪 Estrutura para TDD

### Estrutura de Testes
```
src/test/java/
├── 📁 unit/
│   ├── 📁 domain/
│   │   ├── ClienteTest.java
│   │   ├── PagamentoTest.java
│   │   └── 📁 valueobjects/
│   │       ├── CPFTest.java
│   │       └── ValorTest.java
│   └── 📁 application/
│       └── ProcessarPagamentoUseCaseTest.java
├── 📁 integration/
│   ├── 📁 adapters/
│   │   ├── PagamentoRepositoryImplTest.java
│   │   └── StripeGatewayAdapterTest.java
│   └── 📁 web/
│       └── PagamentoControllerTest.java
└── 📁 e2e/
    └── PagamentoE2ETest.java
```

## 🔄 Fluxo TDD Recomendado

### 1. **Red**: Escrever teste que falha
```java
@Test
void deveProcessarPagamentoComSucesso() {
    // Arrange
    var cliente = Cliente.builder()...
    var request = ProcessarPagamentoRequest.builder()...
    
    // Act & Assert
    assertThat(pagamentoUseCase.processar(request))
        .succeedsWithin(Duration.ofSeconds(5))
        .satisfies(response -> {
            assertThat(response.getStatus()).isEqualTo(PROCESSADO);
            assertThat(response.getId()).isNotNull();
        });
}
```

### 2. **Green**: Implementar o mínimo para passar
### 3. **Refactor**: Melhorar o código mantendo os testes passando

## 📋 Vantagens desta Estrutura

### **DDD Benefits:**
- **Linguagem Ubíqua**: Código espelha o domínio de negócio
- **Bounded Contexts**: Cada módulo tem responsabilidade clara
- **Rich Domain Model**: Lógica de negócio no domínio

### **WebFlux Benefits:**
- **Reatividade**: Melhor throughput e menor uso de recursos
- **Backpressure**: Controle de fluxo automático
- **Non-blocking**: Operações I/O não bloqueantes

### **TDD Benefits:**
- **Design Emergente**: Arquitetura surge dos testes
- **Documentação Viva**: Testes como especificação
- **Refactoring Seguro**: Mudanças com confiança

## 🎯 Pontos de Atenção

1. **DTOs ficam em `application/dto`**, não em domain
2. **Value Objects** encapsulam validações e comportamentos
3. **Domain Services** para lógicas que não pertencem a uma entidade específica
4. **Events** para comunicação entre agregados
5. **Ports** definem contratos, **Adapters** implementam detalhes técnicos