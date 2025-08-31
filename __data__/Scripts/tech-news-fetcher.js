module.exports = async (tp) => {
  try {
    const { request } = app.plugins.plugins["obsidian-request"];
    // RSS do Hacker News
    const url = "https://hnrss.org/frontpage";

    const response = await request({ url });

    // Extrai títulos (máx. 5)
    const items = [...response.matchAll(/<title>(.*?)<\/title>/g)]
      .map(m => m[1])
      .filter(t => !t.includes("Hacker News")) // remove título do feed
      .slice(0, 5);

    let out = "### 💻 Tech News\n";
    for (let item of items) {
      out += `- ${item}\n`;
    }

    return out;
  } catch (err) {
    return "⚠️ Erro ao buscar Tech News: " + err.message;
  }
};
