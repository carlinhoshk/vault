# 📋 Sistema de Daily Notes Melhorado

## 🎯 O que foi implementado

### ✅ **Melhorias Realizadas:**

1. **Template Padronizado** - Novo template `daily-simple.md` mais limpo e funcional
2. **Herança Automática de Tarefas** - Script para migrar tarefas pendentes automaticamente
3. **Queries Tasks Otimizadas** - Queries que funcionam corretamente com datas dinâmicas
4. **Sistema de Priorização** - Seções organizadas por prioridade
5. **Scripts de Limpeza** - Para remover tarefas vazias e padronizar formato

## 🔧 Como Usar

### **1. Criar Nova Daily Note:**
- Use `Ctrl/Cmd + N` ou o botão "New daily note"
- O template será aplicado automaticamente

### **2. Adicionar Tarefas:**
```markdown
### 🔥 Urgente
- [ ] Reunião importante 📅 2025-08-25 14:00 #trabalho

### 📋 Importante  
- [ ] Estudar C++ #estudo 🛫 2025-08-25

### 💡 Quando der tempo
- [ ] Organizar arquivos #casa
```

### **3. Usar Tags para Organização:**
- `#urgente` - Tarefas que precisam ser feitas imediatamente
- `#projeto` - Tarefas relacionadas a projetos específicos
- `#estudo` - Tarefas de estudo/aprendizado
- `#saude` - Tarefas relacionadas à saúde/exercícios
- `#casa` - Tarefas domésticas
- `#trabalho` - Tarefas profissionais

### **4. Usar Datas e Prioridades:**
- `📅 YYYY-MM-DD` - Data de vencimento
- `🛫 YYYY-MM-DD` - Data de início
- `🔥` - Alta prioridade
- `🔁 every day` - Tarefa recorrente

## 🔄 Workflow Recomendado

### **Manhã (5-10 min):**
1. Abrir daily note do dia
2. Revisar tarefas pendentes de ontem
3. Adicionar novas tarefas do dia
4. Definir prioridades

### **Durante o Dia:**
1. Marcar tarefas como concluídas `[x]`
2. Adicionar notas e reflexões
3. Atualizar status das tarefas

### **Noite (5 min):**
1. Revisar o que foi feito
2. Migrar tarefas pendentes para o próximo dia
3. Fazer resumo do dia

## 📊 Queries Úteis

### **Tarefas Pendentes de Ontem:**
```tasks
not done
due before today
path includes "01 - Daily"
sort by due
```

### **Tarefas de Hoje:**
```tasks
not done
due today
path includes "01 - Daily"
sort by due
```

### **Tarefas Atrasadas:**
```tasks
not done
due before today
path includes "01 - Daily"
sort by due
```

### **Tarefas Urgentes:**
```tasks
not done
tags include #urgente
path includes "01 - Daily"
sort by due
```

## 🛠️ Scripts Disponíveis

### **1. Migrar Tarefas Pendentes:**
```javascript
// No Templater, execute:
await migrateTasks(tp)
```

### **2. Limpar Daily Notes:**
```javascript
// No Templater, execute:
await cleanupDailyNotes(tp)
```

## 📁 Estrutura de Arquivos

```
__data__/
├── Templates/
│   ├── daily-simple.md          # Template principal
│   ├── dailyv4.md              # Template antigo (backup)
│   └── tasks-config.md         # Configuração de tasks
├── Scripts/
│   ├── migrate_pending_tasks.js # Script de migração
│   └── cleanup-daily-notes.js   # Script de limpeza
└── README-Daily-Notes.md       # Este arquivo
```

## 🎨 Personalização

### **Cores e Emojis:**
- 🔥 Urgente (vermelho)
- 📋 Importante (azul)
- 💡 Futuro (verde)

### **Seções Customizáveis:**
- Adicione suas próprias seções
- Modifique o template conforme necessário
- Mantenha a estrutura de tasks queries

## 🔍 Troubleshooting

### **Tasks não aparecem:**
1. Verifique se o plugin Tasks está ativo
2. Confirme se as queries estão corretas
3. Verifique se as datas estão no formato correto

### **Template não aplica:**
1. Verifique a configuração em `.obsidian/daily-notes.json`
2. Confirme se o caminho do template está correto
3. Reinicie o Obsidian se necessário

### **Tarefas não migram:**
1. Execute o script de migração manualmente
2. Verifique se as daily notes têm o formato correto
3. Confirme se há tarefas pendentes para migrar

## 📈 Próximos Passos

1. **Testar o sistema** por uma semana
2. **Ajustar o template** conforme suas necessidades
3. **Criar queries personalizadas** para seus projetos
4. **Implementar sistema de revisão semanal**

---

**💡 Dica:** Use o plugin Calendar para visualizar suas daily notes em formato de calendário!
