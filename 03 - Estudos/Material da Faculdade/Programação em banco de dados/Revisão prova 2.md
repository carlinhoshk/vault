![[../../../__data__/Media/Pasted image 20250531151153.jpg]]
### 1. **Comandos Básicos de Consulta**

## Usando INNER *JOIN*
para combinar os dados de mais de uma tabela.
INNER JOIN Retorna só se as linhas tiverem correspondências em ambas.( Não retorna NULL)

```sql

SELECT
    c.nome,
    p.total_pedido
FROM
    Clientes c
INNER JOIN
    Pedidos p ON c.id = p.id_cliente;
```

## Usando LEFT *JOIN*
Retorna valor 

- **SELECT COM JOINS** 
    
    - Seleção de colunas (`SELECT nome, idade FROM pessoas`)
        
    - Seleção com condições (`WHERE`, `BETWEEN`, `IN`, `LIKE`)
        
    - Ordenação (`ORDER BY`)
    
        

---

### 2. **Gatilhos e Automatizações**

- **TRIGGER**
    
    - O que é um trigger
        
    - `BEFORE` vs `AFTER`
        
    - `INSERT`, `UPDATE`, `DELETE` triggers
        
    - Exemplos práticos
        
- **PROCEDURE**
    
    - Criação de procedimentos armazenados
        
    - Parâmetros de entrada e saída
        
    - Controle de fluxo (`IF`, `WHILE`)
        
- **FUNCTION**
    
    - Diferenças entre `FUNCTION` e `PROCEDURE`
        
    - Funções definidas pelo usuário (UDF)
        
    - Retorno de valores
        
    - Exemplos com cálculos, validações, etc.
        

---

### 3. **Desempenho e Organização**

- **INDEX**
    
    - O que é um índice
        
    - Tipos de índices (`BTREE`, `HASH`, `GIN`, `GiST`)
        
    - Como os índices afetam performance
        
    - Quando usar e quando evitar
        

---

### 4. **Lógica Condicional**

- **CASE**
    
    - Sintaxe básica do `CASE`
        
    - Usos em `SELECT` e `ORDER BY`
        
    - Substituto de `IF` em SQL
        
    - Exemplo prático: classificações, faixas de valores
        
