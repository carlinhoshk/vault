---
tags: daily
tipo: Log/Daily
criado: <% tp.date.now("YYYY-MM-DD") %>
---

# 📅 Registro Diário  <% tp.date.now("DD-MM-YYYY") %>

## 💭 Frase do Dia
> "<% tp.file.include("[[__data__/Scripts/frase-motivacional]]") %>"

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
