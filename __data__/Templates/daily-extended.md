---
tags: daily, extended
tipo: Log/Daily
criado: <% tp.date.now("YYYY-MM-DD") %>
---

# 📅 Registro Diário Estendido - <% tp.date.now("DD-MM-YYYY") %>

## 💭 Frase do Dia
> "<% tp.file.include("[[__data__/Scripts/frase-motivacional]]") %>"

---

## 📰 Resumo das Notícias do Dia

<% tp.file.include("[[__data__/Scripts/news-fetcher]]") %>

### 🌍 Notícias Principais
<% tp.file.include("[[__data__/Scripts/news-fetcher]]") %>

### 💻 Tech News
<% tp.file.include("[[__data__/Scripts/news-fetcher]]") %>

---

## 📚 Fatos Históricos do Dia

<% tp.file.include("[[__data__/Scripts/news-fetcher]]") %>

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
path includes "01-daily/<% tp.date.now("DD-MM-YYYY", -1) %>"
sort by description
```

## 🆕 Novas Tarefas
- [ ] 

## 📝 Notas
- 

## 🗒️ Notas criadas hoje
```dataview
LIST
FROM ""
WHERE file.cday = date("<% tp.date.now("YYYY-MM-DD") %>")
SORT file.mtime desc
```

## 🗒️ Notas criadas ontem
```dataview
LIST
FROM ""
WHERE file.cday = date("<% tp.date.now("YYYY-MM-DD", -1) %>")
SORT file.mtime desc
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
