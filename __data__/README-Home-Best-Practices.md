# 🏠 Home Dashboard - Melhores Práticas

## 🎯 **Sobre Home Dashboard:**

### **O que é:**
- **Página inicial** do seu vault
- **Hub central** de navegação
- **Visão geral** do seu sistema
- **Ponto de partida** diário

### **Para que serve:**
- **Navegação rápida** para daily notes
- **Acesso direto** a projetos ativos
- **Visão geral** de tarefas urgentes
- **Links para notícias** e recursos externos
- **Estatísticas** do vault

## 🛠️ **Métodos para Criar Home Dashboard:**

### **1. Template Simples (Recomendado)**
- **Vantagens:** Rápido, leve, personalizável
- **Como usar:** Template com Dataview e Tasks
- **Exemplo:** `__data__/Templates/home-dashboard.md`

### **2. Plugin "Homepage"**
- **Vantagens:** Interface visual, widgets
- **Instalação:** Community plugins
- **Configuração:** Interface gráfica

### **3. Plugin "Dashboard"**
- **Vantagens:** Múltiplos painéis, drag & drop
- **Instalação:** Community plugins
- **Configuração:** Interface gráfica

### **4. Plugin "QuickAdd + Buttons"**
- **Vantagens:** Botões interativos, macros
- **Instalação:** Community plugins
- **Configuração:** Scripts personalizados

## 📊 **Componentes Recomendados:**

### **Essenciais:**
- **Data atual** com frase motivacional
- **Links para daily note** do dia
- **Tarefas urgentes** (Tasks query)
- **Notas recentes** (Dataview)
- **Projetos ativos** (Dataview)

### **Opcionais:**
- **Notícias** (links externos)
- **Estatísticas** do vault
- **Calendário** de eventos
- **Widgets** de clima, cotação
- **Gráficos** de produtividade

## 🔧 **Configuração Automática:**

### **Opção 1: Template + Templater**
```markdown
---
tags: home, dashboard
created: <% tp.date.now("YYYY-MM-DD") %>
---

# 🏠 Home Dashboard

## 📅 Hoje é <% tp.date.now("D [de] MMMM [de] YYYY") %>

### 💭 Frase do Dia
> "<% tp.file.include("[[__data__/Scripts/frase-motivacional]]") %>"

## 📋 Tarefas Urgentes
```tasks
not done
priority is high
sort by due
```
```

### **Opção 2: Plugin Homepage**
1. Instalar plugin "Homepage"
2. Configurar widgets desejados
3. Definir como página inicial

### **Opção 3: Plugin Dashboard**
1. Instalar plugin "Dashboard"
2. Criar painéis personalizados
3. Adicionar widgets e queries

## 📱 **Widgets Úteis:**

### **Dataview Widgets:**
```dataview
TABLE file.mtime as "Última Modificação"
FROM "04-projetos"
SORT file.mtime desc
LIMIT 5
```

### **Tasks Widgets:**
```tasks
not done
due before today
sort by due
```

### **Calendar Widgets:**
```dataview
CALENDAR file.mtime
FROM ""
WHERE file.mtime
```

## 🎨 **Personalização:**

### **Cores e Temas:**
- Use CSS customizado
- Aproveite o tema do Obsidian
- Mantenha consistência visual

### **Layout:**
- Organize por prioridade
- Use seções claras
- Mantenha navegação intuitiva

### **Conteúdo:**
- Foque no essencial
- Evite sobrecarga de informação
- Mantenha atualizado

## ⚡ **Automação:**

### **Atualização Automática:**
- Templates com Templater
- Queries Dataview dinâmicas
- Scripts de atualização

### **Integração:**
- Daily notes automáticas
- Tasks sincronizadas
- Projetos atualizados

## 🔄 **Workflow Recomendado:**

### **Manhã:**
1. Abrir Home Dashboard
2. Verificar tarefas urgentes
3. Ler notícias importantes
4. Abrir daily note

### **Durante o dia:**
1. Usar Home como hub
2. Navegar entre seções
3. Atualizar conforme necessário

### **Noite:**
1. Revisar Home Dashboard
2. Planejar próximo dia
3. Fechar Obsidian

## 💡 **Dicas:**

- **Mantenha simples** - Não sobrecarregue
- **Atualize regularmente** - Mantenha relevante
- **Teste diferentes layouts** - Encontre o ideal
- **Use atalhos** - Acelere navegação
- **Personalize** - Adapte às suas necessidades

---

**🎯 Resultado:** Home Dashboard funcional e personalizado!
