---
tags:
  - daily
  - Log/RegistroDiario
tipo: Log/Daily
criado: <% tp.date.now("YYYY-MM-DD") %>
data: <% tp.date.now("DD-MM-YYYY") %>
---

# 📅 Daily — <% tp.date.now("DD-MM-YYYY") %>

---

## 🎯 Foco do Dia

**Prioridade absoluta:**
> 

**3 MITs:**
1. 
2. 
3. 

---

## 📋 Tarefas

### 🔥 Hoje
```tasks
not done
(due today) OR (scheduled today)
path includes "01-daily"
sort by due
```

### ⏪ Atrasadas
```tasks
not done
due before today
path includes "01-daily"
sort by due
```

### 🆕 Nova
- [ ] 

---

## 💻 Notícias Tech

<% await tp.user["tech_news"]() %>

---

## 🚀 Projetos & Deadlines

### Projetos Ativos
```dataview
LIST 
FROM "04-projetos"
WHERE !contains(file.path, "Templates")
SORT file.mtime desc
LIMIT 5
```

### ⚠️ Próximos 7 dias
```tasks
not done
(due within 7 days)
NOT (due before today)
sort by due
```

---

## 🛡️ Blockers
- 

---

## 📊 Review

**Feito:**
- [x] 
- [x] 

**Pendências para amanhã:**
- [ ] 

---

*<% tp.date.now("DD-MM-YYYY HH:mm") %>*
