# Requisitos 
1. Java, spring (Rest) ou puro(Rest também json), 
2. Redis, 
3. Nginx 
4. ~~MVC~~ ou entender qual arquitetura?

# Decisões 

- Java spring [web-flux](https://medium.com/@michellibrito/spring-webflux-f611c8256c53) 
- Redis
- Nginx
- MVC 


## Uso de Spring WebFlux

![[Pasted image 20250803193337.png]]
[programação reativa](https://medium.com/@michellibrito/spring-webflux-f611c8256c53)
~~MVC~~ não qual arquitetura?
O Spring Webflux é um módulo que foi inserido no Spring Framework 5 e possibilita aplicações web com Spring do lado servidor trabalhar de forma reativa.

programação reativa ? 
Assim como o [Reactor](https://github.com/carlinhoshk/reactor-core), ele possui dois tipos: **Flux** e **Mono**. Lembrando que na <u>programação reativa</u> trabalha-se com fluxos e não com dados. Sendo assim, o tipo Flux consiste em um fluxo (stream) de 0 a N elementos e o tipo Mono consiste em um fluxo (stream) de 0 ou 1 elemento apenas.