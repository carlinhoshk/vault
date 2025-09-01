// Script para migrar tarefas pendentes entre daily notes
// Este script pode ser executado via Templater ou como um plugin customizado

const { TFile } = require('obsidian');

class TaskMigrator {
    constructor(app) {
        this.app = app;
    }

    // Migra tarefas pendentes do dia anterior para o dia atual
    async migratePendingTasks(fromDate, toDate) {
        const dailyFolder = "01 - Daily";
        
        // Busca a daily note do dia anterior
        const fromFile = this.app.vault.getAbstractFileByPath(`${dailyFolder}/${fromDate}.md`);
        const toFile = this.app.vault.getAbstractFileByPath(`${dailyFolder}/${toDate}.md`);
        
        if (!fromFile || !toFile) {
            console.log("Arquivos de daily notes não encontrados");
            return;
        }

        // Lê o conteúdo do arquivo anterior
        const fromContent = await this.app.vault.read(fromFile);
        
        // Extrai tarefas não concluídas
        const pendingTasks = this.extractPendingTasks(fromContent);
        
        if (pendingTasks.length > 0) {
            // Lê o conteúdo do arquivo atual
            let toContent = await this.app.vault.read(toFile);
            
            // Adiciona as tarefas pendentes na seção apropriada
            toContent = this.addPendingTasksToContent(toContent, pendingTasks);
            
            // Salva o arquivo atualizado
            await this.app.vault.modify(toFile, toContent);
            
            console.log(`Migradas ${pendingTasks.length} tarefas pendentes`);
        }
    }

    // Extrai tarefas não concluídas do conteúdo
    extractPendingTasks(content) {
        const lines = content.split('\n');
        const pendingTasks = [];
        
        for (let line of lines) {
            // Procura por tarefas não concluídas (- [ ])
            if (line.trim().match(/^- \[ \]/)) {
                // Remove a marcação da tarefa e adiciona à lista
                const taskText = line.replace(/^- \[ \]/, '').trim();
                if (taskText) {
                    pendingTasks.push(taskText);
                }
            }
        }
        
        return pendingTasks;
    }

    // Adiciona tarefas pendentes ao conteúdo da daily note atual
    addPendingTasksToContent(content, pendingTasks) {
        const lines = content.split('\n');
        const newLines = [];
        let inPendingSection = false;
        let pendingSectionAdded = false;
        
        for (let line of lines) {
            newLines.push(line);
            
            // Procura pela seção de tarefas pendentes
            if (line.includes('## 🔄 Tarefas Pendentes de Ontem')) {
                inPendingSection = true;
                continue;
            }
            
            // Se está na seção de tarefas pendentes e encontra o próximo cabeçalho
            if (inPendingSection && line.startsWith('## ')) {
                inPendingSection = false;
                
                // Adiciona as tarefas pendentes antes do próximo cabeçalho
                if (!pendingSectionAdded && pendingTasks.length > 0) {
                    newLines.splice(newLines.length - 1, 0, ''); // Linha em branco
                    for (let task of pendingTasks) {
                        newLines.splice(newLines.length - 1, 0, `- [ ] ${task}`);
                    }
                    pendingSectionAdded = true;
                }
            }
        }
        
        return newLines.join('\n');
    }
}

// Função para ser chamada pelo Templater
async function migrateTasks(tp) {
    const today = tp.date.now("DD-MM-YYYY");
    const yesterday = tp.date.now("DD-MM-YYYY", -1);
    
    const migrator = new TaskMigrator(app);
    await migrator.migratePendingTasks(yesterday, today);
    
    return "Tarefas migradas com sucesso!";
}

module.exports = { TaskMigrator, migrateTasks };
