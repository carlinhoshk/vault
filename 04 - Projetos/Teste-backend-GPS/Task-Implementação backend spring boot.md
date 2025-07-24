repo-official [link](https://github.com/backend-br/desafios/blob/master/points-of-interest/PROBLEM.md)
POIs = Points Of Interest /  Pontos de Interesses

---
- [x] Instalar IDE java
- [x] Configurar github na IDE 
- [x] Criar um repo com os arquivos do init-spring
- [x] Criar modelagem MVC
- [ ] Criar model do POI ( com 03 atributos: nome do POI, coordenada X (inteiro não negativo))
- [ ] Criar repositório para o POI
- [ ] Criar conexão com banco H2
- [ ] Criar primeiro controller para cadastrar ROI
---

Na criação do POI precisamos baseado na solicitação coordenadas int não negativos, assim entramos em validação de data da entidade.

Primeiro adicionamos a dependence de validação do spring boot starter validation 
~~~xml
<dependency>
<groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
~~~
Importamos a validação em nossa entity
![[Pasted image 20250724093857.png]]
e o uso da anotação @PositiveOrZero

