module.exports = async (tp) => {
  try {
    const { request } = app.plugins.plugins["api-request"];
    
    const feeds = [
      { name: "Hacker News", url: "https://hnrss.org/frontpage", count: 5 },
      { name: "TechCrunch", url: "https://techcrunch.com/feed/", count: 5 },
      { name: "The Verge", url: "https://www.theverge.com/rss/index.xml", count: 5 }
    ];

    let output = "";

    for (const feed of feeds) {
      try {
        const response = await request({ url: feed.url });
        
        if (!response) continue;

        const titleMatches = response.matchAll(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/g);
        const items = [...titleMatches]
          .map(match => match[1] || match[2])
          .filter(title => title && !title.includes("RSS") && !title.includes("TechCrunch") && !title.includes("The Verge"))
          .slice(0, feed.count);

        if (items.length > 0) {
          output += `### ${feed.name}\n`;
          items.forEach((item, i) => {
            output += `${i + 1}. ${item.trim()}\n`;
          });
          output += "\n";
        }
      } catch (e) {
        console.error(`Erro ao buscar ${feed.name}:`, e);
      }
    }

    if (!output) {
      output = "⚠️ Não foi possível carregar as notícias. Verifique sua conexão.";
    }

    return output;

  } catch (error) {
    console.error("Erro ao buscar notícias tech:", error);
    return "⚠️ Erro ao carregar notícias de tecnologia.";
  }
};
