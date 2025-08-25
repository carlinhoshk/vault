# 🚀 Configuração de Daily Note Automática

## ✅ **O que foi configurado:**

1. **Plugin Periodic Notes** - Configurado para abrir daily note automaticamente
2. **Template atualizado** - Usando `daily-simple.md` 
3. **Atalho de teclado** - `Ctrl/Cmd + D` para abrir daily note
4. **Scripts de automação** - Para criar e abrir daily notes

## 🔧 **Como Funciona Agora:**

### **Opção 1: Abertura Automática (Recomendada)**
- **Periodic Notes** já está configurado com `"openOnStartup": true`
- Quando você abrir o Obsidian, a daily note do dia será criada/aberta automaticamente
- Se a daily note não existir, ela será criada usando o template

### **Opção 2: Atalho de Teclado**
- Use `Ctrl/Cmd + D` para abrir rapidamente a daily note do dia
- Funciona a qualquer momento, não apenas na abertura

### **Opção 3: Botão na Barra Lateral**
- Clique no botão "Open today" na barra lateral do Periodic Notes

## 🛠️ **Configurações Implementadas:**

### **Periodic Notes (data.json):**
```json
{
  "daily": {
    "format": "DD-MM-YYYY",
    "folder": "01 - Daily", 
    "template": "__data__/Templates/daily-simple.md",
    "enabled": true,
    "openOnStartup": true
  }
}
```

### **Atalho de Teclado (hotkeys.json):**
```json
{
  "periodic-notes:open-today": [
    {
      "modifiers": ["Mod"],
      "key": "D"
    }
  ]
}
```

## 📋 **Como Testar:**

1. **Reinicie o Obsidian** para aplicar as configurações
2. **A daily note deve abrir automaticamente** na próxima inicialização
3. **Use `Ctrl/Cmd + D`** para abrir manualmente a qualquer momento
4. **Verifique se o template está sendo aplicado** corretamente

## 🔍 **Troubleshooting:**

### **Daily note não abre automaticamente:**
1. Verifique se o plugin Periodic Notes está ativo
2. Confirme se `"openOnStartup": true` está na configuração
3. Reinicie o Obsidian
4. Verifique se o template existe no caminho correto

### **Template não aplica:**
1. Confirme se o arquivo `__data__/Templates/daily-simple.md` existe
2. Verifique se o caminho está correto na configuração
3. Teste criando uma daily note manualmente

### **Atalho não funciona:**
1. Verifique se o atalho `Ctrl/Cmd + D` não está conflitando
2. Vá em Settings > Hotkeys e procure por "periodic-notes:open-today"
3. Reconfigure o atalho se necessário

## 🎯 **Workflow Recomendado:**

### **Manhã:**
1. **Abra o Obsidian** - Daily note abre automaticamente
2. **Revisar tarefas pendentes** de ontem
3. **Adicionar novas tarefas** do dia
4. **Definir prioridades**

### **Durante o dia:**
1. **Use `Ctrl/Cmd + D`** para voltar rapidamente à daily note
2. **Marque tarefas como concluídas**
3. **Adicione notas e reflexões**

### **Noite:**
1. **Faça resumo do dia**
2. **Migre tarefas pendentes** para o próximo dia
3. **Feche o Obsidian**

## 📊 **Scripts Disponíveis:**

### **Abrir Daily Note Manualmente:**
```javascript
// No Templater, execute:
await openTodayDaily(tp)
```

### **Migrar Tarefas Pendentes:**
```javascript
// No Templater, execute:
await migrateTasks(tp)
```

### **Limpar Daily Notes:**
```javascript
// No Templater, execute:
await cleanupDailyNotes(tp)
```

## 🎨 **Personalização:**

### **Mudar Atalho:**
1. Vá em Settings > Hotkeys
2. Procure por "periodic-notes:open-today"
3. Clique e configure o atalho desejado

### **Mudar Template:**
1. Edite o arquivo `.obsidian/plugins/periodic-notes/data.json`
2. Altere o campo `"template"` para o caminho desejado
3. Reinicie o Obsidian

### **Desabilitar Abertura Automática:**
1. Edite o arquivo `.obsidian/plugins/periodic-notes/data.json`
2. Mude `"openOnStartup": true` para `"openOnStartup": false`
3. Reinicie o Obsidian

---

**💡 Dica:** Se você quiser que a daily note abra em uma aba específica ou posição, você pode configurar isso nas configurações do Periodic Notes!
