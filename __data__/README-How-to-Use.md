# 🎯 Como Usar o Sistema de Daily Notes

## ✅ **Status Atual:**
- ✅ Template funcionando
- ✅ Tasks queries funcionando  
- ✅ Script de migração pronto
- ✅ Abertura automática configurada

## 🚀 **Como Usar:**

### **1. Criar Daily Note:**
- **Abrir Obsidian** → Daily note abre automaticamente
- **Ou usar:** `Ctrl/Cmd + D` para abrir manualmente

### **2. Adicionar Tarefas:**
```markdown
## 🆕 Novas Tarefas
- [ ] Estudar C++ #estudo 📅 2025-08-25
- [ ] Fazer exercícios #saude 🔁 every day
- [ ] Reunião importante #trabalho 🛫 2025-08-25 14:00
```

### **3. Migrar Tarefas Pendentes (Manual):**
1. Abra a daily note
2. Pressione `Ctrl/Cmd + Shift + P`
3. Digite "Templater: Run templater script"
4. Selecione "simple-daily-setup.js"
5. As tarefas pendentes serão migradas automaticamente

## 📊 **Estrutura da Daily Note:**

```
# 25-08-2025
---
tags: daily
created: 2025-08-25
---

## 📋 Tarefas de Hoje
[Tasks query automática]

## 🔄 Tarefas Pendentes
[Tasks query automática]

## 🆕 Novas Tarefas
- [ ] [Adicione aqui]

## 📝 Notas
- [Suas notas]
```

## 🏷️ **Tags Úteis:**
- `#estudo` - Tarefas de estudo
- `#trabalho` - Tarefas profissionais  
- `#saude` - Exercícios e saúde
- `#casa` - Tarefas domésticas
- `#projeto` - Projetos específicos
- `#urgente` - Tarefas urgentes

## 📅 **Formato de Datas:**
- `📅 YYYY-MM-DD` - Data de vencimento
- `🛫 YYYY-MM-DD` - Data de início
- `🔁 every day` - Tarefa recorrente

## 🔄 **Workflow Diário:**

### **Manhã:**
1. Abrir Obsidian → Daily note pronta
2. Revisar tarefas pendentes
3. Adicionar novas tarefas do dia

### **Durante o dia:**
1. Marcar tarefas como concluídas `[x]`
2. Adicionar notas e reflexões
3. Usar `Ctrl/Cmd + D` para voltar à daily

### **Noite:**
1. Revisar o que foi feito
2. Executar script de migração se necessário
3. Fechar Obsidian

## ⚙️ **Configuração:**

### **Templater:**
- Scripts habilitados
- Pasta: `__data__/Scripts/`
- Template: `__data__/Templates/daily-simple.md`

### **Tasks Plugin:**
- Configurado e funcionando
- Queries automáticas
- Status personalizados

### **Periodic Notes:**
- Abertura automática
- Template aplicado
- Atalho `Ctrl/Cmd + D`

## 🎨 **Personalização:**

### **Mudar Template:**
1. Edite `__data__/Templates/daily-simple.md`
2. Reinicie o Obsidian

### **Adicionar Seções:**
1. Adicione no template
2. Configure scripts se necessário

### **Mudar Atalho:**
1. Settings > Hotkeys
2. Procure "periodic-notes:open-today"

---

**💡 Dica:** Use `Ctrl/Cmd + D` para abrir rapidamente a daily note a qualquer momento!
