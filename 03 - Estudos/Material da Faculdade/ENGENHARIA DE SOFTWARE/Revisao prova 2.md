## 1. Qualidade de Software

- Qualidade é essencial no mercado competitivo.
- Software de qualidade:
  - Atende requisitos
  - É confiável, eficiente, usável e manutenível
- Teste de software é peça-chave para garantir a qualidade.

---

## 2. Teste de Software: Definição

- Processo sistemático para avaliar a qualidade do software.
- Verifica defeitos e se o sistema atende aos requisitos.
- Teste ≠ apenas encontrar bugs → inclui confiabilidade, desempenho e usabilidade.

---

## 3. Objetivos do Teste de Software

- **Identificação de defeitos** antes da entrega.
- **Verificação (V):** “Estamos fazendo certo?”
- **Validação (V):** “Estamos fazendo a coisa certa?”
- **Garantia da Qualidade:** Informações úteis para stakeholders.

---

## 4. Teste como Processo Contínuo

- Deve ser integrado a todas as fases do desenvolvimento (SDLC).
- Inclui:
  - Planejamento
  - Projeto de casos
  - Execução
  - Análise de resultados
  - Relatórios

---

## 5. Casos de Teste

- Conjunto de condições para verificar funcionalidades específicas.
- Estrutura:
  - ID único
  - Objetivo
  - Pré-condições
  - Dados de entrada
  - Passos de execução
  - Resultado esperado

---

## 6. Verificação vs. Validação

- **Verificação:** No processo (documentação, código).
- **Validação:** No produto final (experiência do usuário).
- Ambas são complementares.

---

## 7. Planejamento de Testes

- Documento com:
  - Escopo
  - Objetivos
  - Estratégia
  - Recursos
  - Cronograma
  - Critérios de entrada/saída
  - Gestão de riscos

---

## 8. Níveis de Teste

- **Unidade:** Componentes isolados (funções, classes)
- **Integração:** Comunicação entre módulos
- **Sistema:** Sistema como um todo
- **Aceitação:** Realizado pelos usuários finais

---

## 9. Tipos de Teste

- **Funcional:** Requisitos do sistema
- **Não Funcional:** Desempenho, usabilidade, segurança
- **Caixa Branca:** Testa lógica interna do código
- **Caixa Preta:** Testa funcionalidades sem ver o código

---

## 10. Mentalidade do Testador

- Crítico, explorador, detalhista
- Compreende o ponto de vista do usuário

---

## 11. Depuração

- Processo de identificar e corrigir defeitos no código
- Usa ferramentas (debuggers) e colaboração entre equipes

---

## 12. Automação de Testes

- Executa testes automaticamente com scripts
- Ideal para:
  - Regressão
  - Desempenho
  - Testes repetitivos
- Aumenta cobertura e libera o testador para tarefas exploratórias

---

## 13. Gerenciamento de Testes

- Planejamento, organização, execução, controle
- Ferramentas especializadas ajudam a:
  - Gerenciar casos, dados e ambientes
  - Monitorar métricas (cobertura, tempo, defeitos)

---

## 14. TDD – Test Driven Development

- Escreve testes antes do código.
- Ciclo:
  - Red: teste falha
  - Green: código mínimo passa
  - Refactor: melhora o código

---

## 15. Cobertura de Teste

- Mede a parte do software testada:
  - **Código:** instruções, condições, ramos
  - **Funcional:** requisitos exercitados
- Alta cobertura aumenta a confiança, mas não garante ausência de erros.

---

## 16. Testes de Regressão

- Após alterações no software
- Garante que funcionalidades antigas continuam funcionando
- Ideal para automação

---

## 17. Ambiente de Teste

- Deve simular o ambiente de produção
- Boa configuração = testes mais eficazes

---

## 18. Dados de Teste

- Devem cobrir diversos cenários
- Técnicas:
  - Análise de valor limite
  - Particionamento de equivalência

---

## 19. Relatórios de Teste

- Documentam:
  - Atividades
  - Resultados
  - Defeitos
  - Métricas
- Servem para tomada de decisão

---

## 20. Evolução do Teste de Software

- Novas práticas e ferramentas surgem constantemente
- Destaques:
  - Teste exploratório
  - Teste baseado em risco
  - Inteligência artificial

---

## 21. Teste em Paradigmas Específicos

- **Mobile:**
  - Dispositivos variados
  - Tamanhos de tela
  - Conectividade
- **Orientado a Objetos:**
  - Herança, polimorfismo, encapsulamento

---

## 22. Testes Funcionais

- Valida o comportamento de cada funcionalidade
- Usa:
  - Particionamento de equivalência
  - Análise de valor limite

---

## 23. Testes Estruturais (Caixa Branca)

- Avalia a lógica interna do código
- Métricas:
  - Cobertura de declaração
  - Cobertura de decisão
  - Cobertura de caminho

---

## 24. Testes Não Funcionais

- Avaliam:
  - Desempenho
  - Segurança
  - Usabilidade
  - Confiabilidade

---

## 25. Testador Eficaz

- Curioso
- Atento aos detalhes
- Com foco na experiência do usuário

---

## 26. Comunicação no Processo de Teste

- Relatórios claros e objetivos
- Reuniões de status
- Compartilhamento de descobertas

---

## 27. Ferramentas de Teste

- Automação, gestão e análise
- Exemplo:
  - Selenium, JUnit, Postman

---

## 28. Teste Exploratórios

- Baseados na experiência e intuição
- Úteis para áreas pouco documentadas

---

## 29. Testes Baseados em Risco

- Foco nas partes mais críticas
- Otimizam esforço de teste

---

## 30. Testes de Usabilidade

- Avaliam:
  - Facilidade de uso
  - Navegação
  - Satisfação do usuário

---

## 31. Testes de Desempenho

- Avaliam:
  - Resposta
  - Estabilidade
  - Recursos usados
- Incluem:
  - Carga
  - Estresse
  - Pico

---

## 32. Testes de Segurança

- Detectam vulnerabilidades
- Incluem:
  - Pen test
  - Autenticação/autorização
  - Proteção de dados

---

## 33. Testes de Confiabilidade

- Mede operação sem falhas por tempo prolongado

---

## 34. Documentação de Teste

- Inclui:
  - Plano de teste
  - Casos de teste
  - Dados
  - Relatórios
- Permite rastreabilidade e melhoria contínua

---

## 35. Métricas de Teste

- Número de testes
- Defeitos encontrados
- Taxa de aprovação
- Cobertura
- Tempo de ciclo

---

## 36. Automação em Métodos Ágeis

- Feedback rápido
- CI/CD (integração e entrega contínua)
- Redução do tempo de ciclo

---

## 37. Colaboração Dev + QA

- Comunicação e parceria
- Prevenção de defeitos (shift left)

---

## 38. Melhoria Contínua

- Métricas e retrospectivas
- Adoção de novas ferramentas
- Aprendizado com erros

---

## 39. Planejamento da Auditoria de Software

- Define:
  - Escopo
  - Objetivos
  - Equipe
  - Recursos
- Minimiza riscos, melhora foco e comunicação

---

## 40. Etapas do Planejamento

1. Definir escopo e objetivos
2. Identificar sistemas auditados
3. Avaliar riscos e controles
4. Escolher metodologias
5. Alocar equipe
6. Criar cronograma

---

## 41. Exemplo de Escopo

- Sistema de Vendas Web:
  - Segurança de dados
  - Conformidade LGPD
  - Rastreabilidade (logs)
  - Autenticação e autorização

---

## 42. Equipe de Auditoria

- Analistas de sistemas
- Especialistas em segurança
- Auditores internos/externos
- Responsável técnico

---

## 43. Ferramentas de Auditoria

- Checklists
- Análise estática
- Testes de penetração
- Exemplos:
  - Wireshark
  - ZAP (OWASP)
  - Nessus/OpenVAS
  - Analisadores de logs

---

## 44. Boas Práticas de Auditoria

- Metas SMART
- Comunicação clara
- Documentação detalhada
- Confidencialidade
- Apoio da gestão
- Flexibilidade

---

## 45. Controles Gerais de Sistemas

- **Organizacional**
- **Segurança da informação**
- **Continuidade de serviço**
- **Software de sistema**
- **Acesso**
- **Versionamento**

---

## 46. Controle de Software de Sistema

- Inclui:
  - SOs
  - Firewalls
  - Antivírus
  - SGBDs
- Pontos de atenção:
  - Acesso
  - Monitoramento
  - Atualizações

---

## 47. Controle de Aplicativos

- Entrada → Processamento → Saída
- Auditoria busca integridade e confiabilidade

---

## 48. Evolução e Manutenção

- Processo contínuo desde a concepção até a obsolescência
- Adaptar-se às mudanças é vital

---

## 49. Envelhecimento do Software

- **Falha de Adequação:** Não atende às novas demandas
- **Falha na Mudança:** Atualizações mal implementadas

---

## 50. Tipos de Manutenção

| Tipo       | Descrição                             |
|------------|----------------------------------------|
| Corretiva  | Corrige defeitos                       |
| Adaptativa | Ajusta a novos ambientes/regulamentações |
| Evolutiva  | Adiciona novas funcionalidades         |

---

## 51. Boas Práticas de Manutenção

- Código claro:
  - Nomes descritivos
  - Comentários significativos
  - Indentação consistente
- Uso de versionamento:
  - Ex: 1.2.0.5 (major.minor.patch.build)
- Commits com mensagens úteis

---
