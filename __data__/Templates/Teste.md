## Teste## Teste

Arquivo de ontem não encontrado.


<%*
const ontem = tp.date.yesterday("YYYY-MM-DD");
const caminho = `01 - Daily/${ontem}.md`;
const file = await app.vault.getAbstractFileByPath(caminho);

if (file) {
  const conteudo = await app.vault.read(file);
  const tarefas = conteudo.match(/^[-*] \[ \].*/gm);

  if (tarefas && tarefas.length > 0) {
    tR += tarefas.join("\n");
  } else {
    tR += "Nenhuma tarefa pendente encontrada.";
  }
} else {
  tR += "Arquivo de ontem não encontrado.";
}
%>
