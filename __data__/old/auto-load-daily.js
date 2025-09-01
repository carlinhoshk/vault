// Script que carrega automaticamente quando daily note é criada
// Migra tarefas pendentes e configura a daily note

class AutoDailyLoader {
    constructor(app) {
        this.app = app;
    }

    // Carrega automaticamente quando daily note é criada
    async onDailyNoteCreated(filePath) {
        console.log(`Daily note criada: ${filePath}`);
        
        // Aguarda um pouco para o arquivo ser salvo
        setTimeout(async () => {
            await this.migratePendingTasks(filePath);
            await this.setupDailyNote(filePath);
        }, 1000);
    }

    // Migra tarefas pendentes do dia anterior
    async migratePendingTasks(todayFilePath) {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        const yesterdayStr = this.formatDate(yesterday);
        const yesterdayFile = `01 - Daily/${yesterdayStr}.md`;
        
        // Lê o arquivo de ontem
        const yesterdayNote = this.app.vault.getAbstractFileByPath(yesterdayFile);
        if (!yesterdayNote) return;
        
        const yesterdayContent = await this.app.vault.read(yesterdayNote);
        
        // Extrai tarefas não concluídas
        const pendingTasks = this.extractPendingTasks(yesterdayContent);
        
        if (pendingTasks.length > 0) {
            // Lê o arquivo de hoje
            const todayNote = this.app.vault.getAbstractFileByPath(todayFilePath);
            if (!todayNote) return;
            
            let todayContent = await this.app.vault.read(todayNote);
            
            // Adiciona tarefas pendentes na seção apropriada
            todayContent = this.addPendingTasks(todayContent, pendingTasks);
            
            // Salva o arquivo atualizado
            await this.app.vault.modify(todayNote, todayContent);
            
            console.log(`Migradas ${pendingTasks.length} tarefas pendentes para ${todayFilePath}`);
        }
    }

    // Configura a daily note com informações básicas
    async setupDailyNote(filePath) {
        const note = this.app.vault.getAbstractFileByPath(filePath);
        if (!note) return;
        
        let content = await this.app.vault.read(note);
        
        // Adiciona seção de novas tarefas se não existir
        if (!content.includes('## 🆕 Novas Tarefas')) {
            const newTasksSection = `

## 🆕 Novas Tarefas
- [ ] 

`;
            content = content.replace('## 📝 Notas', newTasksSection + '## 📝 Notas');
            await this.app.vault.modify(note, content);
        }
    }

    // Extrai tarefas não concluídas
    extractPendingTasks(content) {
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

    // Inicializa o auto-loader
    init() {
        // Observa quando arquivos são criados na pasta Daily
        this.registerEvent(
            this.app.vault.on('create', (file) => {
                if (file.path.startsWith('01 - Daily/') && file.path.endsWith('.md')) {
                    this.onDailyNoteCreated(file.path);
                }
            })
        );
        
        console.log('Auto Daily Loader inicializado');
    }
}

// Função para ser chamada pelo Templater
async function setupDailyNote(tp) {
    const loader = new AutoDailyLoader(app);
    await loader.migratePendingTasks(tp.file.path);
    await loader.setupDailyNote(tp.file.path);
    return "Daily note configurada!";
}

// Função para migrar tarefas manualmente
async function migrateTasks(tp) {
    const loader = new AutoDailyLoader(app);
    await loader.migratePendingTasks(tp.file.path);
    return "Tarefas migradas!";
}

module.exports = { AutoDailyLoader, setupDailyNote, migrateTasks };
