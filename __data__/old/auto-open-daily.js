// Script para abrir automaticamente a daily note do dia
// Este script pode ser executado via Templater ou como um plugin customizado

class AutoDailyOpener {
    constructor(app) {
        this.app = app;
    }

    // Abre a daily note do dia atual
    async openTodayDaily() {
        const today = new Date();
        const dateString = this.formatDate(today);
        const dailyPath = `01 - Daily/${dateString}.md`;
        
        // Verifica se a daily note já existe
        let dailyFile = this.app.vault.getAbstractFileByPath(dailyPath);
        
        if (!dailyFile) {
            // Se não existe, cria a daily note
            console.log(`Criando daily note para ${dateString}`);
            await this.createDailyNote(dateString);
            dailyFile = this.app.vault.getAbstractFileByPath(dailyPath);
        }
        
        if (dailyFile) {
            // Abre a daily note em uma nova aba
            const leaf = this.app.workspace.getLeaf('tab');
            await leaf.openFile(dailyFile);
            console.log(`Daily note ${dateString} aberta com sucesso!`);
        }
    }

    // Formata a data no formato DD-MM-YYYY
    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    // Cria uma nova daily note
    async createDailyNote(dateString) {
        const dailyFolder = "01 - Daily";
        const templatePath = "__data__/Templates/daily-simple.md";
        
        // Verifica se a pasta existe
        const folder = this.app.vault.getAbstractFileByPath(dailyFolder);
        if (!folder) {
            await this.app.vault.createFolder(dailyFolder);
        }
        
        // Lê o template
        const templateFile = this.app.vault.getAbstractFileByPath(templatePath);
        if (!templateFile) {
            console.error("Template não encontrado!");
            return;
        }
        
        let templateContent = await this.app.vault.read(templateFile);
        
        // Processa o template com Templater se disponível
        if (window.Templater) {
            const templater = window.Templater;
            templateContent = await templater.processTemplate(templateContent);
        } else {
            // Fallback: substitui manualmente as datas
            const today = new Date();
            const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
            const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            
            const dayName = dayNames[today.getDay()];
            const monthName = monthNames[today.getMonth()];
            const day = today.getDate();
            const year = today.getFullYear();
            
            templateContent = templateContent
                .replace(/<% tp\.date\.now\("D \[de\] MMMM \[de\] YYYY"\) %>/g, `${dayName}, ${day} de ${monthName} de ${year}`)
                .replace(/<% tp\.date\.now\("YYYY-MM-DD HH:mm:ss"\) %>/g, today.toISOString())
                .replace(/<% tp\.date\.now\("YYYY-MM-DD"\) %>/g, today.toISOString().split('T')[0]);
        }
        
        // Cria o arquivo
        const filePath = `${dailyFolder}/${dateString}.md`;
        await this.app.vault.create(filePath, templateContent);
    }

    // Inicializa o auto-open
    async init() {
        // Aguarda um pouco para o Obsidian carregar completamente
        setTimeout(async () => {
            await this.openTodayDaily();
        }, 2000);
    }
}

// Função para ser chamada pelo Templater
async function openTodayDaily(tp) {
    const opener = new AutoDailyOpener(app);
    await opener.openTodayDaily();
    return "Daily note aberta!";
}

// Função para inicializar automaticamente
async function initAutoDaily() {
    const opener = new AutoDailyOpener(app);
    await opener.init();
}

module.exports = { AutoDailyOpener, openTodayDaily, initAutoDaily };
