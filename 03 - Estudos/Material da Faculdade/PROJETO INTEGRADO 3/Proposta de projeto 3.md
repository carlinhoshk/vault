
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
- [ ] **Subir para VPS** **integrar CD/CI**: Builda as versoes compiladas .Jar e static files do react e integrar CD/CI com Github actions.
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

Baseado na arquitetura e Arquitetura e organização de computadores limitamos para 512M de ram na maquina de CD
aplicando uma arquitetura mais *limpa/organizada* manipulando **HEAP** da JVM dentro do container que 
o docker-compose manipula.

