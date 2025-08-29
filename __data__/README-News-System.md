# 📰 Sistema de Notícias - Guia Completo

## 🎯 **Sobre o Sistema de Notícias:**

### **O que foi implementado:**
- **Scripts para buscar notícias reais** usando APIs públicas
- **Fatos históricos** específicos de cada dia
- **Múltiplas fontes** de notícias
- **Templates prontos** para usar

### **Fontes de Notícias Disponíveis:**
- **Hacker News** - Notícias de tecnologia
- **Reddit Technology** - Discussões tech
- **Reddit Brasil** - Notícias brasileiras
- **Reddit World News** - Notícias internacionais
- **Fatos Históricos** - Eventos do dia na história

## 🛠️ **Scripts Criados:**

### **1. `api-news-fetcher.js` (Recomendado)**
- **APIs reais** sem necessidade de chave
- **Notícias atualizadas** automaticamente
- **Múltiplas fontes** integradas
- **Tratamento de erros** robusto

### **2. `real-news-fetcher.js`**
- **Simulação de notícias** (fallback)
- **Fatos históricos** pré-definidos
- **Funciona offline** se necessário

### **3. `news-fetcher.js`**
- **Versão básica** para testes
- **Notícias simuladas** simples

## 📋 **Templates Disponíveis:**

### **1. `daily-simple.md` (Básico)**
- **Template simples** sem notícias
- **Foco em tarefas** e notas
- **Funciona offline**

### **2. `daily-extended.md` (Intermediário)**
- **Notícias simuladas** embutidas
- **Fatos históricos** do dia
- **Seções de reflexão**

### **3. `daily-with-real-news.md` (Avançado)**
- **Notícias reais** via APIs
- **Múltiplas fontes** integradas
- **Atualização automática**

## 🔧 **Como Usar:**

### **Opção 1: Template Simples**
```markdown
# 📅 Registro Diário - <% tp.date.now("DD-MM-YYYY") %>

## 📋 Tarefas de Hoje
```tasks
not done
(due today) OR (scheduled today)
path includes "01-daily"
sort by due
```
```

### **Opção 2: Com Notícias Simuladas**
```markdown
## 📰 Resumo das Notícias do Dia

### 🇧🇷 Notícias do Brasil
1. **Economia brasileira mostra sinais de recuperação**
   Indicadores econômicos apontam para crescimento sustentável
   *Fonte: CNN Brasil*
```

### **Opção 3: Com Notícias Reais**
```markdown
### 🔥 Hacker News
<% tp.file.include("[[__data__/Scripts/api-news-fetcher]]") %>
```

## 🌐 **APIs Utilizadas:**

### **Gratuitas (Sem Chave):**
- **Hacker News API** - `https://hacker-news.firebaseio.com/v0/`
- **Reddit API** - `https://www.reddit.com/r/technology.json`
- **Reddit Brasil** - `https://www.reddit.com/r/brasil.json`
- **Reddit World News** - `https://www.reddit.com/r/worldnews.json`

### **Com Limitações:**
- **NewsAPI** - Requer chave gratuita (1000 requests/dia)
- **Wikipedia API** - Requer configuração adicional

## 📊 **Estrutura das Notícias:**

### **Formato Padrão:**
```markdown
## 🔥 Hacker News

1. **Título da Notícia**
   [Ler mais](URL da notícia)
   *Fonte: Hacker News | Score: 123*

2. **Outra Notícia**
   [Ler mais](URL da notícia)
   *Fonte: Hacker News | Score: 456*
```

### **Fatos Históricos:**
```markdown
## 📚 Fatos Históricos do Dia

1. 1825 - Uruguai declara independência do Brasil
2. 1916 - Nascimento de Van Cliburn, pianista americano
3. 1944 - Liberação de Paris pelos Aliados
```

## ⚡ **Configuração Automática:**

### **Para Daily Notes:**
1. **Configurar template** no Obsidian
2. **Usar Periodic Notes** para auto-criação
3. **Definir template** como `daily-with-real-news.md`

### **Para Home Dashboard:**
1. **Usar template** `home-dashboard.md`
2. **Incluir seção** de notícias
3. **Atualizar** conforme necessário

## 🔄 **Workflow Recomendado:**

### **Manhã:**
1. **Abrir daily note** (criada automaticamente)
2. **Ler notícias** do dia
3. **Verificar fatos históricos**
4. **Planejar tarefas**

### **Durante o dia:**
1. **Atualizar tarefas** conforme necessário
2. **Adicionar notas** importantes
3. **Refletir** sobre o aprendizado

### **Noite:**
1. **Revisar** daily note
2. **Completar** reflexões
3. **Avaliar** produtividade

## 🚨 **Solução de Problemas:**

### **Erro de Conexão:**
- **Verificar internet** - APIs precisam de conexão
- **Usar template simples** como fallback
- **Verificar firewall** se necessário

### **Erro de API:**
- **Limite de requests** atingido
- **API temporariamente indisponível**
- **Usar notícias simuladas** como backup

### **Erro de Template:**
- **Verificar sintaxe** Templater
- **Testar template** em nota separada
- **Simplificar** se necessário

## 💡 **Dicas de Uso:**

### **Performance:**
- **Notícias reais** podem demorar alguns segundos
- **Cache local** para melhor performance
- **Limitar número** de fontes se necessário

### **Personalização:**
- **Adicionar fontes** favoritas
- **Remover seções** desnecessárias
- **Ajustar formato** conforme preferência

### **Manutenção:**
- **Atualizar fatos históricos** periodicamente
- **Verificar APIs** regularmente
- **Backup** dos templates

## 🎯 **Próximos Passos:**

### **Melhorias Possíveis:**
- **Integrar mais APIs** de notícias
- **Adicionar categorização** automática
- **Implementar cache** local
- **Criar widgets** personalizados

### **Plugins Recomendados:**
- **Templater** - Para scripts dinâmicos
- **Dataview** - Para queries avançadas
- **Tasks** - Para gerenciamento de tarefas
- **Periodic Notes** - Para daily notes automáticas

---

**🎯 Resultado:** Sistema de notícias completo e funcional!
