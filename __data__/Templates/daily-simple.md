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

## 🔄 Tarefas Pendentes

```tasks
not done
due before <% tp.date.now("YYYY-MM-DD") %>
path includes "01 - Daily"
sort by due
```

## 🆕 Novas Tarefas
- [ ] 

## 📝 Notas
- 

<% tp.file.include("[[__data__/Scripts/auto-load-daily]]") %>
