// Script para limpar e padronizar daily notes existentes
// Remove tarefas vazias e padroniza o formato

class DailyNotesCleaner {
    constructor(app) {
        this.app = app;
    }

    // Limpa uma daily note específica
    async cleanDailyNote(filePath) {
        const file = this.app.vault.getAbstractFileByPath(filePath);
        if (!file) return;

        let content = await this.app.vault.read(file);
        
        // Remove tarefas vazias (- [ ] sem texto)
        content = this.removeEmptyTasks(content);
        
        // Remove linhas vazias excessivas
        content = this.removeExcessiveEmptyLines(content);
        
        // Padroniza o formato
        content = this.standardizeFormat(content);
        
        // Salva o arquivo limpo
        await this.app.vault.modify(file, content);
    }

    // Remove tarefas vazias
    removeEmptyTasks(content) {
        const lines = content.split('\n');
        const cleanedLines = [];
        
        for (let line of lines) {
            // Remove tarefas que são apenas "- [ ]" sem texto
            if (line.trim() === '- [ ]') {
                continue;
            }
            
            // Remove tarefas que são "- [ ] " (apenas com espaço)
            if (line.trim() === '- [ ] ') {
                continue;
            }
            
            cleanedLines.push(line);
        }
        
        return cleanedLines.join('\n');
    }

    // Remove linhas vazias excessivas
    removeExcessiveEmptyLines(content) {
        // Substitui múltiplas linhas vazias por no máximo 2
        return content.replace(/\n{3,}/g, '\n\n');
    }

    // Padroniza o formato da daily note
    standardizeFormat(content) {
        // Garante que há frontmatter
        if (!content.includes('---')) {
            const dateMatch = content.match(/# 🗓️ (.+)/);
            if (dateMatch) {
                const date = dateMatch[1];
                const frontmatter = `---
creation date: ${new Date().toISOString()}
tipo: Log/Daily
tags: daily
---

`;
                content = frontmatter + content;
            }
        }

        // Garante que há seções básicas
        if (!content.includes('## 🔄 Tarefas Pendentes')) {
            content = content.replace(
                '## 📌 Tarefas de Hoje',
                '## 🔄 Tarefas Pendentes\n\n```tasks\nnot done\ndue before today\npath includes "01 - Daily"\nsort by due\n```\n\n---\n\n## 📌 Tarefas de Hoje'
            );
        }

        return content;
    }

    // Limpa todas as daily notes
    async cleanAllDailyNotes() {
        const dailyFolder = "01 - Daily";
        const files = this.app.vault.getMarkdownFiles();
        
        for (let file of files) {
            if (file.path.startsWith(dailyFolder)) {
                console.log(`Limpando: ${file.path}`);
                await this.cleanDailyNote(file.path);
            }
        }
        
        console.log("Limpeza concluída!");
    }
}

// Função para ser chamada pelo Templater
async function cleanupDailyNotes(tp) {
    const cleaner = new DailyNotesCleaner(app);
    await cleaner.cleanAllDailyNotes();
    return "Daily notes limpas com sucesso!";
}

module.exports = { DailyNotesCleaner, cleanupDailyNotes };