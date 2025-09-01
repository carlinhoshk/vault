module.exports = async (tp) => {
  try {
    const { request } = app.plugins.plugins["obsidian-request"];
    
    // RSS da Agência Brasil
    const url = "https://agenciabrasil.ebc.com.br/rss/geral.xml";

    // Faz requisição usando o plugin Request do Obsidian
    const response = await request({ url });

    // Verifica se a resposta existe
    if (!response) {
      throw new Error("Resposta vazia do servidor");
    }

    // Extrai títulos de notícias usando regex mais robusta
    const titleMatches = response.matchAll(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/g);
    const items = [...titleMatches]
      .map(match => match[1] || match[2]) // Pega o conteúdo, seja com CDATA ou sem
      .filter(title => title && !title.includes("Agência Brasil")) // Remove título do feed
      .slice(0, 5); // Máximo 5 notícias

    // Verifica se encontrou notícias
    if (items.length === 0) {
      return "📰 **Notícias do Brasil**\n\n⚠️ Nenhuma notícia encontrada no momento.";
    }

    // Monta saída em Markdown
    let output = "📰 **Notícias do Brasil**\n\n";
    items.forEach((item, index) => {
      output += `${index + 1}. ${item.trim()}\n`;
    });
    
    output += `\n*Atualizado em: ${new Date().toLocaleString('pt-BR')}*`;

    return output;

  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return `📰 **Notícias do Brasil**\n\n⚠️ Erro ao buscar notícias: ${error.message}\n\n*Verifique sua conexão com a internet e tente novamente.*`;
  }
};