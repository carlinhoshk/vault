module.exports = async (tp) => {
  const fs = app.vault;
  const folder = "Diário"; // Ajuste conforme sua pasta
  const today = tp.date.now("YYYY-MM-DD");
  const yesterday = tp.date.now("YYYY-MM-DD", -1);
  const filePath = `${folder}/${yesterday}.md`;

  try {
    const file = app.vault.getAbstractFileByPath(filePath);
    if (!file) return "Nenhuma tarefa pendente.";

    const content = await app.vault.read(file);
    const lines = content.split("\n");

    const tasks = lines.filter(line =>
      line.trim().match(/^[-*]\s\[( |\/|>)]\s/)
    );

    return tasks.length ? tasks.join("\n") : "Nenhuma tarefa pendente.";
  } catch (e) {
    return "Erro ao ler tarefas.";
  }
};
