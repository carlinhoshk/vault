y// Plugin customizado para abrir daily note automaticamente
// Coloque este código em um arquivo .js na pasta de plugins customizados do Obsidian

const { Plugin } = require('obsidian');

class AutoDailyPlugin extends Plugin {
    async onload() {
        console.log('Auto Daily Plugin carregado');
        
        // Aguarda o Obsidian carregar completamente
        this.registerEvent(
            this.app.workspace.on('layout-ready', () => {
                setTimeout(() => {
                    this.openTodayDaily();
                }, 1000);
            })
        );
    }

    async openTodayDaily() {
        const today = new Date();
        const dateString = this.formatDate(today);
        const dailyPath = `01 - Daily/${dateString}.md`;
        
        // Verifica se a daily note já existe
        let dailyFile = this.app.vault.getAbstractFileByPath(dailyPath);
        
        if (!dailyFile) {
            // Se não existe, cria usando o template
            await this.createDailyNote(dateString);
            dailyFile = this.app.vault.getAbstractFileByPath(dailyPath);
        }
        
        if (dailyFile) {
            // Abre a daily note
            const leaf = this.app.workspace.getLeaf('tab');
            await leaf.openFile(dailyFile);
            console.log(`Daily note ${dateString} aberta automaticamente!`);
        }
    }

    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    async createDailyNote(dateString) {
        const templatePath = "__data__/Templates/daily-simple.md";
        const templateFile = this.app.vault.getAbstractFileByPath(templatePath);
        
        if (!templateFile) {
            console.error("Template não encontrado!");
            return;
        }
        
        let templateContent = await this.app.vault.read(templateFile);
        
        // Processa o template
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
        
        const filePath = `01 - Daily/${dateString}.md`;
        await this.app.vault.create(filePath, templateContent);
    }

    onunload() {
        console.log('Auto Daily Plugin descarregado');
    }
}

module.exports = AutoDailyPlugin;
