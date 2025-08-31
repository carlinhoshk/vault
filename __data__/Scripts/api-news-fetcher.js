

module.exports = async (tp) => {
  try {
    const { request } = app.plugins.plugins["obsidian-request"];
    // RSS da Agência Brasil
    const url = "https://agenciabrasil.ebc.com.br/rss/geral.xml";

    // Faz requisição (usa request interno do Obsidian, funciona offline-friendly)
    const response = await request({ url });

    // Extrai títulos de notícias (máx. 5)
    const items = [...response.matchAll(/<title>(.*?)<\/title>/g)]
      .map(m => m[1])
      .filter(t => !t.includes("Agência Brasil")) // remove título do feed
      .slice(0, 5);

    // Monta saída em Markdown
    let out = "### 📰 Notícias do Brasil\n";
    for (let item of items) {
      out += `- ${item}\n`;
    }

    return out;
  } catch (err) {
    return "⚠️ Erro ao buscar notícias: " + err.message;
  }
};
