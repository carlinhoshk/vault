repo-official [link](https://github.com/backend-br/desafios/blob/master/points-of-interest/PROBLEM.md)
POIs = Points Of Interest /  Pontos de Interesses

---
- [x] Instalar IDE java
- [x] Configurar github na IDE 
- [x] Criar um repo com os arquivos do init-spring
- [x] Criar modelagem MVC
- [x] Criar model do POI ( com 03 atributos: nome do POI, coordenada X (inteiro não negativo))
- [x] Criar repositorio para o POI
- [x] Criar conexão com banco H2
- [ ] Criar primeiro controller para cadastrar ROI
---

Na criação do POI precisamos baseado na solicitação coordenadas int não negativos, assim entramos em validação de data da entidade.

Primeiro adicionamos a dependecia de validação do spring boot starter validation 
~~~xml
<dependency>
 <groupId>org.hibernate.validator</groupId>


<artifactId>hibernatevalidator</artifactId>
</dependency>
~~~
Importamos a validação em nossa entity

