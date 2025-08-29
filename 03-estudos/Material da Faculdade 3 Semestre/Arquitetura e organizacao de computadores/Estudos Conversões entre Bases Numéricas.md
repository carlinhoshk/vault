
|Origem|Destino|O que você faz?|
|---|---|---|
|Decimal|Base 7|Divide por **7**|
|Decimal|Binário (base 2)|Divide por **2**|
|Decimal|Octal (base 8)|Divide por **8**|
|Decimal|Hexa (base 16)|Divide por **16**|
# FOTO BINARIO > DECIMAL
![[../../../__data__/Media/Pasted image 20250430014221.png]]
# FOTO DECIMAL > BINARIO
![[../../../__data__/Media/Pasted image 20250430014419.png]]
## 🔢 Parte 1: Binário → Decimal

**Como converter?**  
Multiplique cada bit pela potência de 2 correspondente à sua posição (da direita pra esquerda, começando em 0), e some tudo.

### 📌 Fórmula:
```

(binário) = (bₙ × 2ⁿ) + (bₙ₋₁ × 2ⁿ⁻¹) + ... + (b₁ × 2¹) + (b₀ × 2⁰)
 
```

### 📍 Exemplo:
Binário: `1011`

| Bit | Posição (expoente) | Potência (2^n) | Cálculo      |
|-----|--------------------|----------------|--------------|
| 1   | 3                  | 2³ = 8         | 1 × 8 = 8    |
| 0   | 2                  | 2² = 4         | 0 × 4 = 0    |
| 1   | 1                  | 2¹ = 2         | 1 × 2 = 2    |
| 1   | 0                  | 2⁰ = 1         | 1 × 1 = 1    |

**Resultado final:**  
`8 + 0 + 2 + 1 = 11`

---

## 🔁 Parte 2: Decimal → Binário

**Como converter?**  
Divida o número por 2 sucessivamente, anotando o **resto** de cada divisão. O binário é a sequência de restos **de baixo pra cima**.

### 📍 Exemplo:
Decimal: `13`

| Divisão | Quociente | Resto |
|---------|-----------|-------|
| 13 ÷ 2  | 6         | 1     |
| 6 ÷ 2   | 3         | 0     |
| 3 ÷ 2   | 1         | 1     |
| 1 ÷ 2   | 0         | 1     |

**Binário:**  
`1101` (lendo os restos de baixo pra cima)

---

## 📘 Dica: Potências de 2 (decore até 2⁷)

| Expoente | 2ⁿ |
|----------|----|
| 0        | 1  |
| 1        | 2  |
| 2        | 4  |
| 3        | 8  |
| 4        | 16 |
| 5        | 32 |
| 6        | 64 |
| 7        | 128 |

---

## ❗️Conceitos Matemáticos Importantes

### ✅ Multiplicação:
- Qualquer número × 0 = 0  
- Qualquer número × 1 = o próprio número

### ✅ Potência (expoente):
- \( a^b \) = "a elevado à b" = a multiplicado por ele mesmo b vezes

### ❗ Potência com expoente 0:
> **Todo número ≠ 0 elevado a 0 é igual a 1**

- Exemplos:  
  - \( 2^0 = 1 \)  
  - \( 10^0 = 1 \)  
  - \( 99^0 = 1 \)

⚠️ Isso **não é multiplicação por zero**, é **potência com expoente zero**!


---

# 📘 Conversões entre Binário, Decimal, Octal e Hexadecimal

---

## 🔢 Binário → Decimal

**Regra:**  
Multiplica cada bit pela potência de 2 correspondente, da direita para a esquerda.

**Exemplo:** `10111`

```

1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 1×2⁰  
= 16 + 0 + 4 + 2 + 1 = ✅ 23

```

---

## 🔁 Decimal → Binário

**Regra:**  
Divide o número sucessivamente por 2, anotando os restos.

**Exemplo:** `23`

```

23 ÷ 2 = 11 → resto 1  
11 ÷ 2 = 5 → resto 1  
5 ÷ 2 = 2 → resto 1  
2 ÷ 2 = 1 → resto 0  
1 ÷ 2 = 0 → resto 1

Binário: ✅ 10111

```

---

## 〰️ Binário ↔ Octal

### 🔄 Binário → Octal

**Regra:**  
Agrupar de 3 em 3 bits da **direita para a esquerda**, e converter cada grupo para decimal.

**Exemplo:** `10111`  
Agrupar: `010 111`  
→ `2` e `7` → ✅ Octal: `27₈`

---

### 🔄 Octal → Binário

**Regra:**  
Cada dígito octal vira **3 bits binários**.

**Exemplo:** `23₈`  
→ `2` → `010`  
→ `3` → `011`  
✅ Binário: `010011`

---

## 🔷 Binário ↔ Hexadecimal

### 🔄 Binário → Hexadecimal

**Regra:**  
Agrupar de 4 em 4 bits da **direita para a esquerda**, e converter cada grupo para hexadecimal.

**Exemplo:** `00011111`  
Grupos: `0001` `1111`  
→ `1` e `F` → ✅ Hex: `1F`

---

### 🔄 Hexadecimal → Binário

**Regra:**  
Cada dígito hexadecimal vira **4 bits binários**.

**Exemplo:** `1F`  
→ `1` → `0001`  
→ `F` → `1111`  
✅ Binário: `00011111`

---

## 🔬 Potências de 2 usadas nas conversões

| Posição | Potência | Valor |
|---------|----------|-------|
| 4ª      | 2⁴       | 16    |
| 3ª      | 2³       | 8     |
| 2ª      | 2²       | 4     |
| 1ª      | 2¹       | 2     |
| 0ª      | 2⁰       | 1     |

---

## 🔠 Tabela rápida de conversão

### Octal ↔ Binário

| Octal | Binário |
|-------|---------|
| 0     | 000     |
| 1     | 001     |
| 2     | 010     |
| 3     | 011     |
| 4     | 100     |
| 5     | 101     |
| 6     | 110     |
| 7     | 111     |

---

### Hexadecimal ↔ Binário

| Hex | Binário |
|-----|---------|
| 0   | 0000    |
| 1   | 0001    |
| 2   | 0010    |
| 3   | 0011    |
| 4   | 0100    |
| 5   | 0101    |
| 6   | 0110    |
| 7   | 0111    |
| 8   | 1000    |
| 9   | 1001    |
| A   | 1010    |
| B   | 1011    |
| C   | 1100    |
| D   | 1101    |
| E   | 1110    |
| F   | 1111    |

---
