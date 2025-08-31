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

1. 1825 - Uruguai declara independência do Brasil
2. 1916 - Nascimento de Van Cliburn, pianista americano
3. 1944 - Liberação de Paris pelos Aliados na Segunda Guerra Mundial
4. 1989 - Sonda Voyager 2 passa por Netuno
5. 2001 - Azealia Banks, rapper americana, nasce

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
