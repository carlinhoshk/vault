
---

### 1. Ambiente Base

- **Sistema Operacional**:
    
    - Arch Linux (atualizado)
        
    - Alternativa: Container Docker (base `archlinux:latest`)
        
- **Arquitetura de CPU**:
    
    - x86_64 é suporte amplo para Rust e WASM
        
    - ARM64 (opcional) — verificar compatibilidade do `wasm-pack`
        

---

### 2. Ferramentas e Dependências (Arch Linux)

1. **Rust Toolchain**:
    
    - Instalar via `rustup`:
        
        ```bash
        sudo pacman -Syu
        pacman -S rustup
        rustup default stable
        rustup target add wasm32-unknown-unknown
        ```
        
2. **wasm-pack**:
    
    - Empacotador e builder para Rust → WASM
        
        ```bash
        cargo install wasm-pack
        ```
        
3. **Node.js e npm**:
    
    - Necessário para packaging JS/TS e testes de integração
        
        ```bash
        pacman -S nodejs npm
        ```
        
4. **Ferramentas de Build (opcional em host)**:
    
    - `make`, `cmake` (caso vá integrar C/C++)
        
    - `docker` e `docker-compose` (para containerizar o fluxo)
        
5. **Git**:
    
    - Controle de versão e integração com CI/CD
        
        ```bash
        pacman -S git
        ```
        

---

### 3. Ferramentas e Dependências (Container Docker)

- **Dockerfile básico**:
    
    ```Dockerfile
    FROM archlinux:latest
    RUN pacman -Syu --noconfirm \
        rustup nodejs npm wasm-pack git make
    RUN rustup default stable && \
        rustup target add wasm32-unknown-unknown
    WORKDIR /app
    ```
    
- **docker-compose.yml** (opcional):
    
    - Defina volumes para persistência de código e cache de `cargo`
        

---

### 4. Editor de Código / IDE

- **VS Code** (recomendado):
    
    - Extensões:
        
        - Rust Analyzer
            
        - wasm-pack-support
            
        - ESLint / Prettier (para JS/TS)
            
        - Code Spell Checker
            
- **Alternativa**: Neovim + CoC ou LSP (rust-analyzer + typescript-language-server)
    

---

### 5. Padrões Arquiteturais e Práticas de Design

1. **Test-Driven Development (TDD)**:
    
    - Escreva testes em Rust (`cargo test`) antes de cada função fundamental.
        
    - Cobertura mínima inicial de 80% em funções de cálculo.
        
2. **Domain-Driven Design (DDD)**:
    
    - Defina módulos de domínio (e.g. `math::factorial`, `math::gcd`).
        
    - Separe domínio (lógica algébrica) de infraestrutura (bindings WASM, JS).
        
3. **MVC / Layered Architecture** (adaptação leve):
    
    - **Modelo**: lógica de cálculo em Rust puro.
        
    - **Visão**: consumo via JS/HTML (no demo ou exemplo).
        
    - **Controller**: camada que exporta funções WASM e faz binding JS.
        
4. **Paradigma de Programação**:
    
    - **Rust / Funcional**:
        
        - Aproveite imutabilidade e expressões (`iterators`, `map`, `fold`).
            
    - **Orientação a Objetos**:
        
        - Em Rust, use **traits** e **structs** para agrupar comportamentos quando fizer sentido.
            
    - **Recomendação**: adote principalmente estilo funcional, mas use OOP leve via traits para organizar código.
        

---

### 6. Fluxo Inicial de Trabalho

1. **Inicialização do repositório**:
    
    ```bash
    cargo new math-wasm --lib
    cd math-wasm
    wasm-pack init  # estrutura básica
    ```
    
2. **Configuração de testes**:
    
    - Arquivo `tests/math_tests.rs` com testes TDD.
        
3. **Integração JS**:
    
    - Crie `demo/` com `package.json` e script de build:
        
        ```json
        {
          "scripts": {
            "build": "wasm-pack build --target web",
            "start": "serve demo/"
          }
        }
        ```
        
4. **CI / CD**:
    
    - Github Actions para:
        
        1. `cargo test`
            
        2. `wasm-pack build`
            
        3. Deploy dos artefatos para GitHub Pages ou npm
            

---

> Com este ambiente e diretrizes bem definidas, você estará pronto para começar o desenvolvimento do **MathWasm** de forma organizada, testável e alinhada às práticas modernas de Rust + WebAssembly.