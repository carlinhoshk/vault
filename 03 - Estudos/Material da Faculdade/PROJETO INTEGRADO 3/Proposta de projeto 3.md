
# Carlos André       |           Projeto Integrado III           |     20/03/2025

## Introdução
O sistema proposto visa gerenciar o cadastro de alunos e professores na Faculdade Anhanguera. 
	Focando na atribuição de pontuação aos alunos com base em critérios definidos pelos professores. 
	Esse sistema é fundamental para acompanhar o desempenho dos alunos ao longo das aulas, considerando
	critério como Presença, Participação e Pergunta, os quais serão representados por um sistema de pontuação.
## Objetivos

- [x] **Cadastro de Usuários**: Implementar o cadastro de alunos e professores, com autenticação para diferentes Usuários
- [x] **Login de Usuários:** Implementar o login de alunos e professores e distinguir qual pagina e domínio ele vai ser redirecionado.
- [x] **Atribuir pontos para Alunos:** Implementar a logica para professores autenticados poderem dar notas aos alunos.
- [x] **Integrar comunicação**: e fazer Frontend e Backend comunicarem
- [ ] **Logica para pontar presença:** Implementar uma regra ou sistema separado para dar presença se o aluno estiver na sala.
- [x] **Subir para VPS** **integrar CD/CI**: Builda as versoes compiladas .Jar e static files do react e integrar CD/CI com Github actions.
### Metodologia

 O Sistema se baseia em conceitos de **Arquitetura/Organização e Sistemas operacionais** na busca de um sistema leve e com manuseio de memoria/CPU usando de docker em um container usando thread unica com manuseio em limites da emulação do sistema, alem do próprio projeto java e React serem construído por mim usando Domain Design Driven (DDD) aonde o projeto se baseia em estruturas baseada em seu domínio da aplicação no caso Professores,Alunos e Pontuação. Em **Engenharia de Software** o uso da ferramenta *Obsidian* foi uma ferramenta que unificou maioria das ferramentas que são usadas como metodologias *Scrum/Ágil* eu consegui aplicar e dividir meu projeto entre a fase Prototipação usei plugin **Excalidraw** definir o diagrama do sistema atual e possível mudanças, criei meu quadro *Kanban* com plugin também. **Analise Orientada a Objeto** foi muito usada já que o projeto usa DDD então o sistema se baseia nos objetos no caso Professores, Alunos e Pontos. Orientação a objeto está ligada quanto no meu backend em java quanto em meu frontend em **JavaScript**.
### Ferramentas e Tecnologias
1. **Organização do Projeto:**  Obsidian, Trello, Git, Gitlab, Neovim, IntelliJ
2. **Stack**: Java, Spring-Boot/Security/JWT, JS/TS React, Banco de dados MariaDB com migrations flywayDB
3. **Integração Contínua**: Jenkins será utilizado para automatizar testes e integração de funcionalidades.
### Conclusão e Futuro

O sistema criado poderá criar uma nova maneira de integrar *Tecnologia* & *Pedagogia* trabalhando juntas analisando e pontuando alunos **Input** e entregando **output**  tabela sobre o desempenho de cada aluno e qual sua dificuldade em aula.
Futuro do software ainda depende da melhor maneira de integrar um dispositivo do aluno com a real presença física dele em sala de aula. 
## Assets & Explicações p/ slides.

## Aplicando Arquitetura e organização usando DDD e Arquitetura limpa.
Claro! Aqui está a versão revisada para ficar mais fluida tanto para **leitura em slide** quanto para **apresentação oral**:

### Estrutura por Camadas (DDD)
**Diferente do padrão MVC**, onde controller e model acumulam várias responsabilidades, o DDD separa cada função em sua camada específica, deixando o sistema mais limpo, testável e preparado para crescer.

1. **Apresentação**  
    `interfaces.controllers` — Responsável por receber requisições da API e repassar para a aplicação.
    
2. **Aplicação**  
    `application.services`, `application.dto`, `application.mappers`, `application.exceptions` — Coordena os casos de uso, faz a transformação de dados e trata exceções.
    
3. **Domínio**  
    `domain.entities`, `domain.enums`, `domain.repositories` — Contém as regras de negócio, entidades e contratos de persistência.
    
4. **Infraestrutura**  
    `security`, `resources` — Implementa autenticação (JWT), configurações e migrações de banco de dados.
    
![[../../../__data__/Media/Pasted image 20250517225234.png]]
### Aplicando Engenharia de software com teste unitários na CI
Tela de Actions do github aonde controlamos a integração continua do nosso repositório.
Aqui vemos todos os testes executados aonde teve falhas, sucessos, data e o tempo de execução.
- Commits que dispararam a execução
    
- Sucesso ou falha dos jobs
    
- Data e duração de cada execução
    

Essa automação garante que cada alteração no código seja testada assim que for enviada para o repositório, validando sua estabilidade antes de ser integrada à produção.

Um exemplo clássico de uso da CI aparece no topo da lista: um outro colaborador fez um commit em uma branch separada, e o sistema automaticamente executou a pipeline para verificar se as alterações poderiam impactar negativamente a branch principal, a `main`.
![[../../../__data__/Media/Pasted image 20250519021318.png]]
![[../../../__data__/Media/Pasted image 20250519021958.png]]![[../../../__data__/Media/Pasted image 20250519022036.png]]
![[../../../__data__/Media/Pasted image 20250519021427.png]]
## Aplicando desenvolvimento Sistemas Operacionais & arquitetura e Arquitetura e organização de computadores 

limitamos para 512M de ram na maquina de CD
aplicando uma arquitetura mais *limpa/organizada* manipulando **HEAP** da JVM dentro do container que 
o docker-compose manipula.

1. Configuração com parametros para JVM iniciar com 521 o HEAP da jvm e o comando XmX libera consumo se estiver disponível
2. Configurações para lançar na maquina de prod-BACKEND consumindo: 1 CPU/CORE, 1.5G RAM e reservar metade disso em cache.
3. Configuração para lançar na maquina de prod-FRONTEND consumido metade dos recursos da prod-backend
4. Configura para lançar o BANCO DE DADOS de produção com 512M de ram.

![[../../../__data__/Media/Pasted image 20250517183145.png]]