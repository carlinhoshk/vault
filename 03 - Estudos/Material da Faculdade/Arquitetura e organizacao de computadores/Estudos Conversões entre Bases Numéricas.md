

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