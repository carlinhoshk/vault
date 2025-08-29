---
tags: home, dashboard
created: <% tp.date.now("YYYY-MM-DD") %>
---

# 🏠 Home Dashboard - <% tp.date.now("D [de] MMMM [de] YYYY") %>

## 💭 Frase do Dia
> "<% tp.file.include("[[__data__/Scripts/frase-motivacional]]") %>"

---

## 🗓️ Daily Note de Hoje
- [📝 Abrir Daily Note](obsidian://open?vault=vault&file=01-daily/<% tp.date.now("DD-MM-YYYY") %>)
- [📊 Ver todas as Daily Notes](obsidian://open?vault=vault&file=01-daily/)

---

## 📰 Notícias do Dia

### 🌍 Resumo das Notícias
<% tp.file.include("[[__data__/Scripts/news-fetcher]]") %>

### 💻 Tech News
<% tp.file.include("[[__data__/Scripts/news-fetcher]]") %>

---

## 📚 Minhas Notas Recentes

```dataview
LIST
FROM ""
WHERE !contains(file.path, "01-daily/") AND !contains(file.path, "__data__/")
SORT file.mtime desc
LIMIT 10
```

---

## 📋 Tarefas Urgentes

```tasks
not done
priority is high
sort by due
```

## 📋 Tarefas de Hoje

```tasks
not done
(due today) OR (scheduled today)
path includes "01-daily"
sort by due
```

---

## 🎯 Projetos Ativos

```dataview
LIST
FROM "04-projetos"
WHERE !contains(file.name, "README")
SORT file.mtime desc
```

---

## 📖 Estudos em Andamento

```dataview
LIST
FROM "03-estudos"
SORT file.mtime desc
LIMIT 5
```

---

## 🔍 Pesquisa Rápida
- [🔍 Buscar no Vault](obsidian://search?vault=vault&query=)
- [📝 Nova Nota](obsidian://new?vault=vault)
- [🗓️ Nova Daily](obsidian://open?vault=vault&file=01-daily/<% tp.date.now("DD-MM-YYYY") %>)

---

## ⚡ Atalhos Úteis
- `Ctrl/Cmd + D` - Abrir Daily Note
- `Ctrl/Cmd + Shift + P` - Command Palette
- `Ctrl/Cmd + O` - Quick Switcher
