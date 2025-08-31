---
tags: daily
tipo: Log/Daily
criado: <% tp.date.now("YYYY-MM-DD") %>
---

# 📅 Registro Diário - <% tp.date.now("DD-MM-YYYY") %>

## 💭 Frase do Dia
> "A persistência é o caminho do êxito." - Charles Chaplin

---

<% tp.file.include("[[__data__/Scripts/simple-news]]") %>

<% tp.file.include("[[__data__/Scripts/simple-news]]") %>

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
