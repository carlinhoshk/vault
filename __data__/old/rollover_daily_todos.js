module.exports = async (tp) => {
  try {
    const { moment } = require('obsidian');
    
    // Configurações fixas baseadas nas suas configurações do Periodic Notes
    const dailyFolder = "01 - Daily";
    const dateFormat = "DD-MM-YYYY";
    
    // Obter a data de ontem no formato correto
    const yesterday = moment().subtract(1, 'day').format(dateFormat);
    const filePath = `${dailyFolder}/${yesterday}.md`;
    
    // Obter o arquivo
    const file = app.vault.getAbstractFileByPath(filePath);
    if (!file) {
      console.log(`Arquivo não encontrado: ${filePath}`);
      return "✅ Nenhuma tarefa pendente de ontem.";
    }

    // Ler o conteúdo do arquivo
    const content = await app.vault.read(file);
    const lines = content.split("\n");

    // Encontrar tarefas não concluídas
    const tasks = [];
    let inTasksSection = false;

    for (const line of lines) {
      const trimmed = line.trim();
      
      // Verificar se estamos na seção de tarefas
      if (trimmed.startsWith('## ') && (trimmed.includes('Tarefas') || trimmed.includes('Tasks'))) {
        inTasksSection = true;
        continue;
      }
      
      // Se encontrar outra seção de nível 2, para de procurar tarefas
      if (trimmed.startsWith('## ') && inTasksSection) {
        break;
      }
      
      // Verificar se é uma tarefa não concluída
      if (inTasksSection && 
          (trimmed.match(/^[-*]\s*\[[^\]]*\].*/) ||  // - [ ] ou - [x] ou - [>], etc
           trimmed.match(/^\d+\.\s*\[[^\]]*\].*/)) &&  // 1. [ ] ou 1. [x], etc
          !trimmed.includes('[x]') &&  // Ignorar tarefas concluídas
          !trimmed.includes('---')) {  // Ignorar frontmatter
        
        // Adiciona a tarefa à lista, garantindo que comece com - [ ]
        tasks.push(`- [ ] ${trimmed.replace(/^[-*]\s*\[[^\]]*\]\s*/, '').replace(/^\d+\.\s*\[[^\]]*\]\s*/, '')}`);
      }
    }

    if (tasks.length === 0) {
      return "✅ Nenhuma tarefa pendente de ontem.";
    }

    // Adicionar cabeçalho e retornar as tarefas
    return `## 📋 Tarefas de ${yesterday}\n` + tasks.join("\n");
  } catch (error) {
    console.error('Erro em rollover_daily_todos:', error);
    return `⚠️ Ocorreu um erro ao buscar tarefas pendentes: ${error.message}`;
  }
};
