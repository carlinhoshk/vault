// Script simples para configurar daily note
// Função para ser chamada pelo Templater

async function setupDaily(tp) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const todayStr = formatDate(today);
    const yesterdayStr = formatDate(yesterday);
    
    // Verifica se existe daily note de ontem
    const yesterdayFile = `01 - Daily/${yesterdayStr}.md`;
    const yesterdayNote = app.vault.getAbstractFileByPath(yesterdayFile);
    
    if (yesterdayNote) {
        const yesterdayContent = await app.vault.read(yesterdayNote);
        const pendingTasks = extractPendingTasks(yesterdayContent);
        
        if (pendingTasks.length > 0) {
            // Adiciona tarefas pendentes à seção apropriada
            let currentContent = await app.vault.read(tp.file);
            
            // Procura pela seção de tarefas pendentes e adiciona as tarefas
            const lines = currentContent.split('\n');
            const newLines = [];
            let inPendingSection = false;
            let pendingAdded = false;
            
            for (let line of lines) {
                newLines.push(line);
                
                if (line.includes('## 🔄 Tarefas Pendentes')) {
                    inPendingSection = true;
                    continue;
                }
                
                if (inPendingSection && line.startsWith('## ')) {
                    inPendingSection = false;
                    
                    if (!pendingAdded && pendingTasks.length > 0) {
                        newLines.splice(newLines.length - 1, 0, '');
                        for (let task of pendingTasks) {
                            newLines.splice(newLines.length - 1, 0, `- [ ] ${task}`);
                        }
                        pendingAdded = true;
                    }
                }
            }
            
            const updatedContent = newLines.join('\n');
            await app.vault.modify(tp.file, updatedContent);
            
            return `Migradas ${pendingTasks.length} tarefas pendentes de ${yesterdayStr}`;
        }
    }
    
    return "Daily note configurada!";
}

// Função auxiliar para extrair tarefas pendentes
function extractPendingTasks(content) {
    const lines = content.split('\n');
    const pendingTasks = [];
    
    for (let line of lines) {
        if (line.trim().match(/^- \[ \]/)) {
            const taskText = line.replace(/^- \[ \]/, '').trim();
            if (taskText && !taskText.includes('```')) {
                pendingTasks.push(taskText);
            }
        }
    }
    
    return pendingTasks;
}

// Função auxiliar para formatar data
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

module.exports = { setupDaily };
