# 🔧 Configuração do Templater

## 📁 Scripts Disponíveis

### **Auto Daily Loader**
- **Arquivo:** `__data__/Scripts/auto-load-daily.js`
- **Função:** Carrega automaticamente quando daily note é criada
- **Comando:** `setupDailyNote(tp)` ou `migrateTasks(tp)`

### **Simple Migrator**
- **Arquivo:** `__data__/Scripts/simple-migrate.js`
- **Função:** Migra tarefas pendentes entre daily notes
- **Comando:** `migratePending(tp)`

## 🚀 Como Usar

### **1. No Template:**
```markdown
<% tp.file.include("[[__data__/Scripts/auto-load-daily]]") %>
```

### **2. Manualmente no Templater:**
```javascript
// Migrar tarefas pendentes
await migrateTasks(tp)

// Configurar daily note
await setupDailyNote(tp)

// Migrar tarefas simples
await migratePending(tp)
```

### **3. Configuração Automática:**
- Os scripts são carregados automaticamente quando o template é aplicado
- Tarefas pendentes são migradas automaticamente
- Seção de novas tarefas é adicionada automaticamente

## 📋 Estrutura da Daily Note

```
# DD-MM-YYYY
---
tags: daily
created: YYYY-MM-DD
---

## 📋 Tarefas de Hoje
[Tasks query para tarefas de hoje]

## 🔄 Tarefas Pendentes  
[Tasks query para tarefas pendentes]

## 🆕 Novas Tarefas
- [ ] [Adicione novas tarefas aqui]

## 📝 Notas
- [Suas notas do dia]
```

## ⚙️ Configuração do Templater

### **1. Habilitar Scripts:**
- Vá em Settings > Templater
- Ative "Enable Scripts"
- Configure a pasta de scripts: `__data__/Scripts/`

### **2. Configurar Template:**
- Template folder: `__data__/Templates/`
- Template file: `daily-simple.md`

### **3. Configurar Daily Notes:**
- Vá em Settings > Daily notes
- Template: `__data__/Templates/daily-simple`
- Format: `DD-MM-YYYY`

## 🔄 Workflow Automático

1. **Criar daily note** → Template aplicado automaticamente
2. **Script carrega** → Migra tarefas pendentes
3. **Seções criadas** → Tarefas de hoje, pendentes, novas
4. **Tasks queries** → Mostram tarefas automaticamente
5. **Adicionar tarefas** → Na seção "Novas Tarefas"
6. **Fazer notas** → Na seção "Notas"

## 🎯 Benefícios

- ✅ **Automático** - Não precisa fazer nada manualmente
- ✅ **Simples** - Apenas 4 seções essenciais
- ✅ **Funcional** - Tasks queries funcionam perfeitamente
- ✅ **Flexível** - Fácil de personalizar
- ✅ **Eficiente** - Herança automática de tarefas
