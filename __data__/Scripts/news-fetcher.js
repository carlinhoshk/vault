// Script para buscar notícias e fatos históricos
// Função para ser chamada pelo Templater

class NewsFetcher {
    constructor() {
        this.newsSources = {
            cnnBrasil: 'https://www.cnnbrasil.com.br/',
            globoNews: 'https://g1.globo.com/globonews/',
            cnnInternational: 'https://edition.cnn.com/',
            hackerNews: 'https://news.ycombinator.com/',
            tabNews: 'https://www.tabnews.com.br/'
        };
    }

    // Busca fatos históricos do dia
    async getHistoricalFacts(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        
        const facts = {
            '8-25': [
                '1825 - Uruguai declara independência do Brasil',
                '1916 - Nascimento de Van Cliburn, pianista americano',
                '1944 - Liberação de Paris pelos Aliados na Segunda Guerra Mundial',
                '1989 - Sonda Voyager 2 passa por Netuno',
                '2001 - Azealia Banks, rapper americana, nasce'
            ],
            '8-26': [
                '1346 - Batalha de Crécy durante a Guerra dos Cem Anos',
                '1789 - Declaração dos Direitos do Homem e do Cidadão na França',
                '1920 - 19ª Emenda à Constituição dos EUA garante voto feminino',
                '1978 - Papa João Paulo I é eleito',
                '2008 - Rússia reconhece independência da Geórgia'
            ],
            '8-27': [
                '1883 - Erupção do Krakatoa, uma das maiores da história',
                '1928 - Pacto Kellogg-Briand renuncia à guerra',
                '1962 - Mariner 2 é lançada para Vênus',
                '1991 - Moldávia declara independência da URSS',
                '2003 - Marte fica mais próximo da Terra em 60.000 anos'
            ]
        };
        
        const key = `${month}-${day}`;
        return facts[key] || [
            'Dia especial para fazer história!',
            'Cada dia é uma nova oportunidade.',
            'O passado nos ensina, o presente nos desafia.',
            'Hoje é o primeiro dia do resto da sua vida.'
        ];
    }

    // Gera resumo de notícias (simulado)
    async getNewsSummary() {
        const summaries = [
            '📰 **Principais notícias do dia:**\n- Economia brasileira mostra sinais de recuperação\n- Novas tecnologias em IA são anunciadas\n- Clima: Previsão de chuva para o fim de semana\n- Esportes: Resultados dos jogos de ontem',
            
            '📰 **Destaques do dia:**\n- Mercado financeiro em alta\n- Descobertas científicas recentes\n- Política: Novas medidas anunciadas\n- Tecnologia: Lançamentos de produtos',
            
            '📰 **Resumo das notícias:**\n- Brasil: Indicadores econômicos positivos\n- Mundo: Acordos internacionais assinados\n- Ciência: Pesquisas inovadoras\n- Cultura: Eventos importantes programados'
        ];
        
        const randomIndex = Math.floor(Math.random() * summaries.length);
        return summaries[randomIndex];
    }

    // Busca notícias de tech
    async getTechNews() {
        const techNews = [
            '💻 **Tech News:**\n- OpenAI anuncia nova versão do GPT\n- Google lança atualizações do Android\n- Apple revela novos produtos\n- Microsoft anuncia parcerias estratégicas',
            
            '💻 **Tecnologia:**\n- Novos frameworks JavaScript lançados\n- Inteligência Artificial avança rapidamente\n- Cibersegurança em foco\n- Startups brasileiras recebem investimentos',
            
            '💻 **Inovação:**\n- Blockchain revoluciona setores\n- Computação quântica progride\n- Realidade virtual se populariza\n- Energia renovável avança'
        ];
        
        const randomIndex = Math.floor(Math.random() * techNews.length);
        return techNews[randomIndex];
    }

    // Gera conteúdo completo para daily note
    async generateDailyNews(date) {
        const historicalFacts = await this.getHistoricalFacts(date);
        const newsSummary = await this.getNewsSummary();
        const techNews = await this.getTechNews();
        
        return {
            historical: historicalFacts,
            news: newsSummary,
            tech: techNews
        };
    }
}

// Função para ser chamada pelo Templater
async function getDailyNews(tp) {
    const fetcher = new NewsFetcher();
    const today = new Date();
    const news = await fetcher.generateDailyNews(today);
    
    return {
        historical: news.historical,
        news: news.news,
        tech: news.tech
    };
}

// Função para retornar apenas fatos históricos
function getHistoricalFacts(tp) {
    const fetcher = new NewsFetcher();
    const today = new Date();
    return fetcher.getHistoricalFacts(today);
}

// Função para retornar apenas resumo de notícias
function getNewsSummary(tp) {
    const fetcher = new NewsFetcher();
    return fetcher.getNewsSummary();
}

// Função para retornar apenas tech news
function getTechNews(tp) {
    const fetcher = new NewsFetcher();
    return fetcher.getTechNews();
}

module.exports = { NewsFetcher, getDailyNews, getHistoricalFacts, getNewsSummary, getTechNews };
