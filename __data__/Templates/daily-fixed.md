---
tags: daily
tipo: Log/Daily
criado: <% tp.date.now("YYYY-MM-DD") %>
---

# 📅 Registro Diário - <% tp.date.now("DD-MM-YYYY") %>

## 💭 Frase do Dia
> "A persistência é o caminho do êxito." - Charles Chaplin

---

## 📰 Resumo das Notícias do Dia

### 🇧🇷 Notícias do Brasil
1. **Economia brasileira mostra sinais de recuperação**
   Indicadores econômicos apontam para crescimento sustentável
   *Fonte: CNN Brasil*

2. **Novas tecnologias em IA são anunciadas no Brasil**
   Empresas brasileiras investem em inteligência artificial
   *Fonte: GloboNews*

3. **Clima: Previsão de chuva para o fim de semana**
   Frente fria avança pelo sul do país
   *Fonte: CNN Brasil*

### 🌍 Notícias Internacionais
1. **Mercado financeiro global em alta**
   Principais índices mundiais registram crescimento
   *Fonte: CNN International*

2. **Acordos internacionais são assinados**
   Novos tratados comerciais são estabelecidos
   *Fonte: Fox News*

### 💻 Tech News
1. **OpenAI anuncia nova versão do GPT**
   Melhorias significativas em processamento de linguagem natural
   *Fonte: TechCrunch*

2. **Google lança atualizações do Android**
   Nova versão traz melhorias de segurança e performance
   *Fonte: The Verge*

3. **Novos frameworks JavaScript lançados**
   Comunidade desenvolvedora recebe novas ferramentas
   *Fonte: Hacker News*

---

## 📚 Fatos Históricos do Dia

<% 
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;

const facts = {
    '8-25': [
        '1825 - Uruguai declara independência do Brasil',
        '1916 - Nascimento de Van Cliburn, pianista americano',
        '1944 - Liberação de Paris pelos Aliados na Segunda Guerra Mundial',
        '1989 - Sonda Voyager 2 passa por Netuno',
        '2001 - Azealia Banks, rapper americana, nasce'
    ],
    '8-26': [
        '1346 - Batalha de Crécy durante a Guerra dos Cem Anos',
        '1789 - Declaração dos Direitos do Homem e do Cidadão na França',
        '1920 - 19ª Emenda à Constituição dos EUA garante voto feminino',
        '1978 - Papa João Paulo I é eleito',
        '2008 - Rússia reconhece independência da Geórgia'
    ],
    '8-27': [
        '1883 - Erupção do Krakatoa, uma das maiores da história',
        '1928 - Pacto Kellogg-Briand renuncia à guerra',
        '1962 - Mariner 2 é lançada para Vênus',
        '1991 - Moldávia declara independência da URSS',
        '2003 - Marte fica mais próximo da Terra em 60.000 anos'
    ],
    '8-28': [
        '1565 - Fundação de São Sebastião do Rio de Janeiro',
        '1833 - Lei do Ventre Livre no Brasil',
        '1963 - Martin Luther King Jr. faz discurso "I Have a Dream"',
        '1990 - Iraque invade Kuwait',
        '2005 - Furacão Katrina atinge Nova Orleans'
    ],
    '8-29': [
        '1526 - Batalha de Mohács, Hungria',
        '1833 - Abolição da escravidão no Reino Unido',
        '1949 - União Soviética testa sua primeira bomba atômica',
        '1991 - Criação do Linux por Linus Torvalds',
        '2005 - Furacão Katrina devasta Nova Orleans'
    ],
    '8-30': [
        '30 a.C. - Cleópatra VII comete suicídio',
        '1797 - Mary Shelley, autora de Frankenstein, nasce',
        '1963 - Linha vermelha do telefone entre EUA e URSS',
        '1991 - Azerbaijão declara independência da URSS',
        '2007 - Apple lança o primeiro iPhone no Brasil'
    ],
    '8-31': [
        '1888 - Jack, o Estripador, comete seu primeiro assassinato',
        '1939 - Alemanha invade a Polônia, iniciando a Segunda Guerra Mundial',
        '1957 - Malásia declara independência do Reino Unido',
        '1991 - Quirguistão declara independência da URSS',
        '1997 - Princesa Diana morre em acidente de carro em Paris'
    ]
};

const key = `${month}-${day}`;
const dayFacts = facts[key] || [
    'Dia especial para fazer história!',
    'Cada dia é uma nova oportunidade.',
    'O passado nos ensina, o presente nos desafia.',
    'Hoje é o primeiro dia do resto da sua vida.'
];

dayFacts.forEach((fact, index) => {
    return `${index + 1}. ${fact}\n`;
});
%>

---

## 📋 Tarefas de Hoje

```tasks
not done
(due today) OR (scheduled today)
path includes "01-daily"
sort by due
```

## ⏪ Tarefas de Ontem

```tasks
not done
due before today
path includes "01-daily"
sort by due
```

## 🆕 Novas Tarefas
- [ ] 

## 📝 Notas
- 

## 🗒️ Notas criadas hoje
```dataview
LIST
FROM ""
WHERE file.cday = date(today)
SORT file.mtime desc
```

## 🗒️ Notas criadas ontem
```dataview
LIST
FROM ""
WHERE file.cday = date(today) - dur(1 day)
SORT file.mtime desc
```

## 🗂️ Notas gerais (mais recentes)
```dataview
LIST
FROM ""
WHERE !contains(file.path, "01-daily/")
SORT file.mtime desc
LIMIT 20
```

---

## 🌟 Reflexões do Dia
- **O que aprendi hoje?**
- 

- **O que posso melhorar?**
- 

- **Gratidão:**
- 

---

## 📊 Resumo do Dia
**Energia:** ⭐⭐⭐⭐⭐  
**Produtividade:** ⭐⭐⭐⭐⭐  
**Humor:** ⭐⭐⭐⭐⭐
