## Gerações 
*(1º Geração 1940-1950 )*
Primeiro computador usado na 2 guerra mundial e utilizada válvulas muito grande. ENIAC, Colossus

(2º Geração 1950-1960) Transistores substituíram válvulas tornando os computadores menores e mais rapido. TX-0 IBM 1401

(3º Geração 1960-1970) Milhares de transistores em um unico chip. IBM 360, DEC PDP-8

(4º Geração 1970-Presente) Microprocessadores Um unico chip contendo a UCP *unidade central de processamento*, revolucionando a computação e os computadores pessoais. Intel 4004, Apple 1

(5º Geração Presente-Futuro) Inteligencia artificial e Computação Quantica. Busca por sistemas mais inteligentes e capaz de realizar calculos mais complexos para os computadores de 4º geração.

### Lei de Moore
Em 1965 co-fundador da intel observou que o numero de transistores em um chip desafios atuais dissipação de calor e as limitações fisicas dos materiais ( motivo dele ser limitado em 2022 por ficar muito pequeno )

### Arquitetura de von Neumann
Modelo fundamental para maioria dos computadores modernos proposto por John von Neumann

1. Unidade Central de Processamento (CPU)
2. Memoria
3. Dispositivos de Entrada e Saida (E/S) Mouse, Monitor o Dispositivo
4. Barramento(USB) entrada SATA, Placa de video. Onde eu encaixo o drive

### Componentes da CPU 
Unidade Central de Processamento
*Unidade de Controle UC*  --- Fluxo 
Gerencia o fluxo de dados e instruções dentro da CPU
responsável por buscar instruções na memoria, decodificalas e enviar sinais para as outras unidades

*ULA* --- Operações
Executa operações matemáticas.

*Registradores*
Armazena pequenos dados dentro da CPU armazenadas

*Componentes da CPU*
Barramento onde entra o driver tipo SATA, Placa de video, USB

*Clock*

*Pipeline*
Técnica que permite que a CPU execute varias instruções utiliza instruções tipo Semafaros


*Memoria*
Ram Random Access Memory 
	Memoria principal do computador volátil perde os dados quando não tem energia eletrica

ROM Read-Only memory: 
	Não volatil Armazena informações basicas tipo a ROM do computador

SRAM Static RAM:
	Mas rapida e cara ultilizda para cache

Dram Dynamic RAM:
	Mais lenta e barata utilizada para memoria principal

Flash: 
	Memoria não volatil utiizada para armazenamento em dispositivos como pen drive e SSD.

Cache -> Memoria Ram -> SSD/HD

### Modelo Tecnologia Atual

*Microprocessadores*
	processadores multi-core com alta capacidade de processamento, cache e tecnologia que aumentao o desempenho e eficiencia
	
*Computação na Nuvem*
	Recursos de computadores sob demanda através da internet 

Inteligencia Artificial e Aprendizado de Maquina
	Desenvolvimento de algoritimos complexos de uso de grandes volumes de dados BIG-DATA para criar sistemas inteligentes baseados e massiva quantidade da dados
Internet das Coisas IoT
	Conexões de dispositivos do dia a dia a internet, permitindo a coleta e troca de dados.

### Topic Avançados

*Computação Paralela e Distribuída*
	Utiliza de múltiplos processadores para resolver problemas complexos de forma mais rapida. Computadores paralelos compartilham a mesma memoria enquanto comunicam por uma rede.
*Computação Quântica*
	Novo paradigma de computação utiliza o principio da física quântica para realizar cálculos que são impossíveis para os computadores clássicos.
*Segurança da Informação*
	Proteção de dados e sistemas contra ameaças cibernéticas. Criptografia, firewalls e detecção de intrusão
*Sistemas Embarcados e Computação Movel*
	Sistemas computacionais integrados em dispositivos menores, como celulares, tablets e dispositivos de IoT

### O que é BIT
Menor unidade de programação
	Agrupando Bits formam Bytes(8 Bits) 
	Permimem representar numeros em 

### Memoria 32
 Cada byte de RAM precisa de um endereço unico
 Processador de 32 bits para endereços 
 2³² = 4 Bilhoes de bites 
 Não tem 4 gigas exatos porque alguns ponteiros sao reservados
### Memoria 64

2x 64 = 18 quintilhoes de endereços para usar
Capacidade muito maior de RAM que 4GB
Multitarefa aprimorada
Crucial para virtualização 

software 64 nao funciona em 32
mas software 32 funciona em 64

### Multi-core 
 Integra vários cores para o processador
 Limitações aumento da velocidade do clock
 Muito consumo de energia
 Foco no paralelismo executar varias tarefas simultaneamente 

*Como funciona* 
	Divisão de tarefas entre os nucleos
	Cada nucleo executa sua tarefa
	Compartilhamento de recursos: Memoria cache, barramento de dados.

*Vantagens do Multi-core*
	Melhor desempenho em multitarefas
	Aumento da eficiência

*Tipos de Processadores Multicore*
	Dual-core, Quad-core, Hexa-core, Octa-core
	Processadores com dezenas de nucleos para servidores

*O Futuro do Multicore*
	Aumento do numero de nucleos
	Especialização dos nucleos
	Integração com outras tecnologias como nuvem, IA e IoT



*Barramento tem suas limitações por arquitetura de CPU 32bits = 4GB*

### Arquiteturas de Processadores
 Quantidade de instruções de maquina define o projeto 
 CICS = Industria 
 RISC = Domestico
 Instruções aritméticas endereçamento de memoria e controle de dispositivos.
### Hierarquia de memoria

 1. Registrador
 2. Memoria cache
 3. Memoria principal ( RAM E ROM )
 4. Memoria Secundaria ( SSD, HD CD/DVD, Pen-drive)

### Registradores
 Localizado na CPU
 Memoria volatil
 Armazenamento bem limitado
 Alta velocidade 
 *O que eles armazena*
	 
### Memoria Cache
Armazena copias de dados e instruções frequentemente usadas
Memoria volatil ou não
Reduz o tempo de acesso a memoria principal melhorando o desempenho
*Cache Hit* o acesso é mais rapido se tiver
*Cache Miss* o CPU busca o dado na memoria principal e os armazena se nao tiver

Cache L1 Menor capacidade maior velocidade integrada com nucleo da CPU
Cache L2 Capacidade intermediaria velocidade intermediaria nucleo ou proximo a ele
Cache L3 Maior capacidade 

*O que ela armazena*

Memoria statica SRAM mais rapida que a DRAM da memoria principal
Volatil
Capacidade intermediaria
Custo elevado por bit mas menor que os registradores

## Buscar exercicio chamado Analise de Desempenho

Calculo se basea por quantidade de nucleos se o nucleo for maior 

SIngle-Core --->> 1 Processador soma tudo 6+8+4 = 18
Doual-Core ---->> 1 Processador 6 + 8   |||  Ao mesmo tempo 2 Processador 4 = 10

### Memoria statica
Por pilha
bits x tamanho do array 4bits x 10 tamanho = 40 bits

### Memoria dinamica
Por pilha de bagunça *HEAP*
tamanho definido dinamicamente por execução


### Bibliotecas
 *STDLIB.H*
  Caixa de ferramentas para organizar a bagunça *HEAP*
  Contem as funcoes malloc() alocar o numero e pode trazer lixo, calloc() inicia todos espaços com ZERO, realloc()
*STDIO.H*
 A caixa de ferramenta para mostras informaçoes e pegar printf() e scanf()

### MALOC


### CALOC


### REALOC 


### Garbage collector
 Rastreia os objetos em memoria
 Objetos sem refencias sao marcados como lixo
 o GC libera memoria ocupada por esses objetos
### Heap em Java
Maior parte dos objetos Java é alocada no heap
O heap em java é manipulado pelo GC

### Ciclo de vida em Objeto em Java
1. Alocação. Objeto é criado com new
2. Uso. Objeto é usado pelo programa
3. Inacessibilidade. O objeto nao tem mais referencias
4. Coleta. O GC libera a memoria do objeto
