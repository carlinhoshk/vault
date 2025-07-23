module.exports = async (tp) => {
  try {
    const { moment } = require('obsidian');
    
    // Get the daily notes folder from Periodic Notes settings
    const periodicNotes = app.plugins.plugins['periodic-notes'];
    if (!periodicNotes) {
      console.error('Periodic Notes plugin not found');
      return "⚠️ Erro: Plugin Periodic Notes não encontrado.";
    }
    
    // Get daily notes folder from settings
    const dailyFolder = periodicNotes.settings.daily.folder || 'Diário';
    
    // Get yesterday's date in the correct format
    const dateFormat = periodicNotes.settings.daily.format || 'YYYY-MM-DD';
    const yesterday = moment().subtract(1, 'day').format(dateFormat);
    
    // Construct the file path
    const filePath = `${dailyFolder}/${yesterday}.md`;
    
    // Get the file
    const file = app.vault.getAbstractFileByPath(filePath);
    if (!file) {
      console.log(`No file found at ${filePath}`);
      return "✅ Nenhuma tarefa pendente de ontem.";
    }

    // Read file content
    const content = await app.vault.read(file);
    const lines = content.split("\n");

    // Find all incomplete tasks (tasks with [ ], [>] (scheduled), or [/] (in progress)
    const tasks = lines.filter(line => {
      const trimmed = line.trim();
      return trimmed.match(/^[-*]\s\[( |\/|>)]\s/) && 
             !trimmed.includes('✅') && // Skip completed tasks
             !trimmed.includes('---'); // Skip frontmatter
    });

    if (tasks.length === 0) {
      return "✅ Nenhuma tarefa pendente de ontem.";
    }

    // Add a header and return the tasks
    return `## 📋 Tarefas de ${yesterday}\n` + 
           tasks.map(t => `- [ ] ${t.replace(/^- \[.\]\s*/, '')}`).join("\n");
  } catch (error) {
    console.error('Error in rollover_daily_todos:', error);
    return "⚠️ Ocorreu um erro ao buscar tarefas pendentes.";
  }
};
