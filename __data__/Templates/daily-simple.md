# <% tp.date.now("DD-MM-YYYY") %>

---
tags: daily
created: <% tp.date.now("YYYY-MM-DD") %>
---

## 📋 Tarefas de Hoje

```tasks
not done
due <% tp.date.now("YYYY-MM-DD") %>
path includes "01 - Daily"
sort by due
```

## ⏪ Tarefas de Ontem

```tasks
not done
path includes "01 - Daily/<% tp.date.now("DD-MM-YYYY", -1) %>"
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
