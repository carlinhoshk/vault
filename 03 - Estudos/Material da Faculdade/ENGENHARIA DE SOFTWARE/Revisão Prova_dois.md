# Revisão de Engenharia de Software

## 1. Introdução e Conceitos Fundamentais

### Definição de Engenharia de Software

- **Engenharia de Software** é a aplicação de métodos, procedimentos e ferramentas para o desenvolvimento de software com alta qualidade.
    
- Visa unir aspectos técnicos, processuais e organizacionais para atender requisitos do cliente e manter a qualidade do produto final.
    

### Conceitos-Chave

- **Software:** Produto intangível composto por instruções, estruturas de dados e documentação, que evolui continuamente.
    
- **Princípios:**
    
    - **Organização Hierárquica:** Estruturar os elementos de solução de forma em árvore com níveis de detalhamento progressivo.
        
    - **Formalidade e Completeza:** Seguir metodologias rigorosas e verificar se todos os aspectos do problema foram abordados.
        
    - **Dividir para Conquistar:** Decompor problemas complexos em partes menores e gerenciáveis.
        
    - **Ocultação e Localização:** Projetar módulos que tenham acesso apenas às informações necessárias, agrupando logicamente elementos relacionados.
        
    - **Integridade Conceitual e Abstração:** Manter uma filosofia e arquitetura de projeto coerentes, concentrando-se nos aspectos essenciais do problema.
        

### Problemas do Desenvolvimento de Software

- **Crise do Software:** Falhas em programas, processos deficientes e dificuldades de manutenção, agravadas por requisitos mal levantados.
    
- **No Silver Bullet (Brooks):** Não existe solução única e milagrosa para os desafios inerentes ao desenvolvimento, distinguindo entre "essência" (problemas intrínsecos) e "acidentes" (problemas do processo).
    

---

## 2. Modelos de Processo e Metodologias

### Modelos Tradicionais

- **Modelo em Cascata:**
    
    - Processo linear e sequencial: requisitos → análise → projeto → implementação → testes → manutenção.
        
    - **Vantagens:** Simplicidade, disciplina.
        
    - **Limitações:** Rigidez, dificuldade de adaptação a mudanças e feedback contínuo.
        
- **Métodos Tradicionais:**
    
    - Caracterizados por documentação extensiva, processos lineares e pouco dinamismo.
        

### Metodologias Ágeis

- **Origem e Filosofia Ágil:**
    
    - Surgiram com o Manifesto Ágil (2001), enfatizando indivíduos e interações, software funcional, colaboração com o cliente e resposta rápida a mudanças.
        
- **Principais Métodos:**
    
    - **Scrum:**
        
        - Papéis: Product Owner, Scrum Master e Time de Desenvolvimento.
            
        - Eventos: Sprint (iterações de 1 a 4 semanas), Daily Scrum, Sprint Review e Sprint Retrospective.
            
        - Artefatos: Product Backlog, Sprint Backlog e Incremento.
            
    - **Extreme Programming (XP):**
        
        - Práticas: Programação em pares, Test-Driven Development (TDD), integração contínua, refatoração e pequenas releases.
            
        - Ênfase em feedback rápido, qualidade do código e adaptação constante.
            
    - **Kanban:**
        
        - Utiliza um quadro visual para gerenciar o fluxo de trabalho.
            
        - Limita o trabalho em progresso (WIP) para evitar gargalos e melhorar a eficiência.
            
- **Comparação Tradicional vs. Ágil:**
    
    - **Tradicional:** Processo linear, documentação pesada, planejamento detalhado.
        
    - **Ágil:** Iterações curtas, adaptação constante, colaboração intensa, entregas incrementais.
        

---

## 3. Controle de Versões e Gerenciamento de Configuração de Software (GCS)

### Controle de Versões

- **Conceitos Fundamentais:**
    
    - **Versão:** Um estado "congelado" do software em um determinado momento.
        
    - **Revisão:** Mudanças incrementais que transformam uma versão.
        
    - **Commit:** Registro imutável de uma revisão, acompanhado de metadados (autor, data, mensagem).
        
- **Repositório:**
    
    - Local centralizado para armazenar o código-fonte e o histórico de alterações.
        
    - Importância do controle de acesso, organização dos arquivos e histórico completo.
        

### Fluxo de Trabalho com Git

- **Passos Principais:**
    
    1. **Checkout/Clone:** Obtenção da versão mais recente do repositório.
        
    2. **Alterações Locais:** Desenvolvimento e modificação do código.
        
    3. **Commit:** Registro das mudanças com mensagens descritivas.
        
    4. **Push:** Envio das mudanças para o repositório remoto.
        
    5. **Pull/Merge:** Integração das mudanças de outros colaboradores.
        
- **Recursos Avançados do Git:**
    
    - **Stashing:** Armazenamento temporário de alterações.
        
    - **Rebasing:** Reescrita do histórico para uma linha de commits mais linear.
        
    - **Cherry-picking e Submodules:** Seleção de commits específicos e inclusão modular de outros repositórios.
        
- **Estratégias de Branching:**
    
    - Modelos como **Gitflow** (estrutura complexa para releases e hotfixes) e **GitHub Flow** (modelo mais simples e direto).
        

### Gerenciamento de Configuração de Software (GCS)

- **Atividades Principais:**
    
    - **Identificação:** Inventário dos itens de configuração (arquivos, documentos).
        
    - **Controle de Mudanças:** Protocolos para solicitação, aprovação e implementação de mudanças.
        
    - **Auditoria e Relatórios:** Verificação do cumprimento dos padrões e geração de métricas.
        
- **Automação:** Uso de ferramentas e scripts para agilizar e padronizar o GCS.
    

### Sistemas Legados

- **CVS (Concurrent Versions System):**
    
    - Sistema centralizado de controle de versões, menos flexível que os modelos distribuídos.
        
    - Operações básicas: checkout, commit, update, merge.
        

---

## 4. Qualidade de Software e Garantia da Qualidade

### Conceitos de Qualidade

- **Erros, Falhas e Defeitos:**
    
    - **Erro:** Execução incorreta que resulta em comportamento inesperado.
        
    - **Defeito:** Implementação errada que pode ou não gerar erros explícitos.
        
    - **Falha:** Manifestação prática de um erro ou defeito durante a execução do software.
        
    - **Bugs:** Problemas inesperados e complexos (ex.: Bug do Milênio).
        

### Garantia da Qualidade (SQA)

- **Objetivo:**
    
    - Assegurar que o software atenda aos requisitos e padrões de qualidade estabelecidos.
        
- **Atividades:**
    
    - Revisões técnicas, testes sistemáticos, controle de documentação e versionamento.
        
    - Padronização de processos e uso de métricas para avaliação contínua.
        

### Métricas de Qualidade

- **Importância:**
    
    - Permitem medir a eficácia dos processos e a qualidade do produto.
        
- **Exemplos:**
    
    - Modelos de Boehm, Brown e Lipow que orientam quais funcionalidades medir e como quantificá-las.
        

### Normas de Qualidade

- **ISO 9126:**
    
    - Define seis características principais para a qualidade de software:
        
        1. **Funcionalidade:** Adequação, acurácia, interoperabilidade, conformidade e segurança.
            
        2. **Confiabilidade:** Maturidade, tolerância a falhas e recuperabilidade.
            
        3. **Usabilidade:** Inteligibilidade, apreensibilidade e atratividade.
            
        4. **Eficiência:** Desempenho e uso adequado de recursos.
            
        5. **Manutenibilidade:** Facilidade de modificação, estabilidade e escalabilidade.
            
        6. **Portabilidade:** Adaptabilidade e interoperabilidade em diferentes ambientes.
            
- **ISO 9000 e ISO 9001:**
    
    - **ISO 9000:** Fundamentos e princípios da gestão da qualidade, com foco em liderança, foco no cliente e melhoria contínua.
        
    - **ISO 9001:** Requisitos para sistemas de gestão da qualidade, envolvendo controle documental, auditoria interna, ações corretivas e preventivas.
        

---

## Conclusão

Esta revisão abrange:

- **Conceitos Fundamentais:** Definição, princípios e desafios na Engenharia de Software.
    
- **Modelos de Processo:** Do modelo tradicional (cascata) às metodologias ágeis (Scrum, XP, Kanban).
    
- **Controle de Versões e GCS:** Importância do versionamento, fluxo de trabalho com Git e gerenciamento de configurações.
    
- **Qualidade e Garantia:** Definição de erros, defeitos e métodos para garantir e medir a qualidade do software, com ênfase nas normas ISO.
    

Utilize esta nota no Obsidian para revisar cada tópico, aprofundando os pontos onde sentir necessidade e conectando os conceitos conforme apresentados nos materiais.

---

Boa revisão e sucesso na prova!