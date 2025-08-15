<%*
	// Define e renomeia a nota se o título for "untitled"
	let title = tp.file.title;
	if (title.toLowerCase().includes("untitled")) {
		title = await tp.system.prompt("Título da Nota");
		if (title.length == 0) {
			title = `untitled (${tp.date.now("YYYY-MM-DD")})`;
		}
	} else {
		title = await tp.system.prompt("Título da Nota", title);
	}
	await tp.file.rename(title);

	// Recupera informações do arquivo e caminho do projeto
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let fileProjectRoot = fileObject.path.split("/")[0] + "/" + fileObject.path.split("/")[1];

	// Solicita a descrição da nota e o tema de estudo
	let description = await tp.system.prompt("Descrição da Nota");
	let subject = await tp.system.prompt("Tema do estudo (ex: AWS, Linux Kernel, Algebra, Matemática, etc.)");
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: Nota de Estudo
subject: <% `${subject}` %>
project: <% `${fileObject.path.split("/")[1]}` %>
tags: [estudo, <% `${subject.toLowerCase().replaceAll(" ", "-").trim()}` %>]
<% "---" %>
<% `[[${fileProjectRoot}/Dashboard|Dashboard]]` %> | <% `[[${fileProjectRoot}/Notas/All Study Notes|Study Notes]]` %> | <% `[[${fileProjectRoot}/Referencias|Referências]]` %>

# <% `${fileObject.basename}` %>

**Overview**  
Descrição: <% `${description}` %>

## Objetivos de Aprendizagem
- [ ] Entender os conceitos fundamentais do tema
- [ ] Aplicar conhecimentos com exercícios práticos
- [ ] Revisar e consolidar o aprendizado periodicamente

## Resumo
> Insira um breve resumo sobre o que será estudado, destacando os pontos principais e objetivos.

## Links e Referências
- [Material de Estudo 1](#)
- [Documentação Oficial](#)

## Tarefas
- [ ] Tarefa 1
- [ ] Tarefa 2

## Anotações Detalhadas
- Registre insights, dúvidas e pontos importantes durante os estudos.

<% tp.file.cursor(1) %>

---
<% `[[${fileProjectRoot}/Dashboard|Dashboard]]` %> | <% `[[${fileProjectRoot}/Notas/All Study Notes|Study Notes]]` %> | <% `[[${fileProjectRoot}/Referencias|Referências]]` %>
