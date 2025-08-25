// Script simples para migrar tarefas pendentes
// Migra tarefas não concluídas do dia anterior para o dia atual

class SimpleMigrator {
    constructor(app) {
        this.app = app;
    }

    // Migra tarefas pendentes do dia anterior
    async migratePendingTasks() {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        const todayStr = this.formatDate(today);
        const yesterdayStr = this.formatDate(yesterday);
        
        const yesterdayFile = `01 - Daily/${yesterdayStr}.md`;
        const todayFile = `01 - Daily/${todayStr}.md`;
        
        // Lê o arquivo de ontem
        const yesterdayNote = this.app.vault.getAbstractFileByPath(yesterdayFile);
        if (!yesterdayNote) return;
        
        const yesterdayContent = await this.app.vault.read(yesterdayNote);
        
        // Extrai tarefas não concluídas
        const pendingTasks = this.extractPendingTasks(yesterdayContent);
        
        if (pendingTasks.length > 0) {
            // Lê o arquivo de hoje
            const todayNote = this.app.vault.getAbstractFileByPath(todayFile);
            if (!todayNote) return;
            
            let todayContent = await this.app.vault.read(todayNote);
            
            // Adiciona tarefas pendentes na seção apropriada
            todayContent = this.addPendingTasks(todayContent, pendingTasks);
            
            // Salva o arquivo atualizado
            await this.app.vault.modify(todayNote, todayContent);
            
            console.log(`Migradas ${pendingTasks.length} tarefas pendentes`);
        }
    }

    // Extrai tarefas não concluídas
    extractPendingTasks(content) {
        const lines = content.split('\n');
        const pendingTasks = [];
        
        for (let line of lines) {
            if (line.trim().match(/^- \[ \]/)) {
                const taskText = line.replace(/^- \[ \]/, '').trim();
                if (taskText) {
                    pendingTasks.push(taskText);
                }
            }
        }
        
        return pendingTasks;
    }

    // Adiciona tarefas pendentes ao conteúdo
    addPendingTasks(content, pendingTasks) {
        const lines = content.split('\n');
        const newLines = [];
        let inPendingSection = false;
        let pendingAdded = false;
        
        for (let line of lines) {
            newLines.push(line);
            
            // Procura pela seção de tarefas pendentes
            if (line.includes('## 🔄 Tarefas Pendentes')) {
                inPendingSection = true;
                continue;
            }
            
            // Se está na seção e encontra o próximo cabeçalho
            if (inPendingSection && line.startsWith('## ')) {
                inPendingSection = false;
                
                // Adiciona as tarefas pendentes
                if (!pendingAdded && pendingTasks.length > 0) {
                    newLines.splice(newLines.length - 1, 0, '');
                    for (let task of pendingTasks) {
                        newLines.splice(newLines.length - 1, 0, `- [ ] ${task}`);
                    }
                    pendingAdded = true;
                }
            }
        }
        
        return newLines.join('\n');
    }

    // Formata data como DD-MM-YYYY
    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
}

// Função para ser chamada pelo Templater
async function migratePending(tp) {
    const migrator = new SimpleMigrator(app);
    await migrator.migratePendingTasks();
    return "Tarefas migradas!";
}

module.exports = { SimpleMigrator, migratePending };
