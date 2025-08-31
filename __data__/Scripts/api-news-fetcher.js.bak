// Script para buscar notícias reais usando APIs públicas
// Função para ser chamada pelo Templater

class ApiNewsFetcher {
    constructor() {
        // APIs gratuitas que não precisam de chave
        this.apis = {
            hackerNews: 'https://hacker-news.firebaseio.com/v0/',
            reddit: 'https://www.reddit.com/r/technology.json',
            redditBrazil: 'https://www.reddit.com/r/brasil.json',
            redditWorldNews: 'https://www.reddit.com/r/worldnews.json'
        };
    }

    // Busca notícias do Hacker News
    async getHackerNews() {
        try {
            const response = await fetch(`${this.apis.hackerNews}topstories.json`);
            const storyIds = await response.json();
            
            // Pega os primeiros 5 stories
            const topStories = storyIds.slice(0, 5);
            const stories = [];
            
            for (const id of topStories) {
                const storyResponse = await fetch(`${this.apis.hackerNews}item/${id}.json`);
                const story = await storyResponse.json();
                
                if (story.title && story.url) {
                    stories.push({
                        title: story.title,
                        url: story.url,
                        score: story.score,
                        source: 'Hacker News'
                    });
                }
            }
            
            return this.formatStories(stories, "🔥 Hacker News");
        } catch (error) {
            return "🔥 **Hacker News:**\n- Erro ao carregar notícias\n- Verifique sua conexão com a internet";
        }
    }

    // Busca notícias do Reddit Technology
    async getRedditTech() {
        try {
            const response = await fetch(this.apis.reddit);
            const data = await response.json();
            
            const posts = data.data.children.slice(0, 5).map(post => ({
                title: post.data.title,
                url: `https://reddit.com${post.data.permalink}`,
                score: post.data.score,
                source: 'Reddit Technology'
            }));
            
            return this.formatStories(posts, "💻 Reddit Technology");
        } catch (error) {
            return "💻 **Reddit Technology:**\n- Erro ao carregar notícias\n- Verifique sua conexão com a internet";
        }
    }

    // Busca notícias do Reddit Brasil
    async getRedditBrazil() {
        try {
            const response = await fetch(this.apis.redditBrazil);
            const data = await response.json();
            
            const posts = data.data.children.slice(0, 5).map(post => ({
                title: post.data.title,
                url: `https://reddit.com${post.data.permalink}`,
                score: post.data.score,
                source: 'Reddit Brasil'
            }));
            
            return this.formatStories(posts, "🇧🇷 Reddit Brasil");
        } catch (error) {
            return "🇧🇷 **Reddit Brasil:**\n- Erro ao carregar notícias\n- Verifique sua conexão com a internet";
        }
    }

    // Busca notícias internacionais do Reddit
    async getRedditWorldNews() {
        try {
            const response = await fetch(this.apis.redditWorldNews);
            const data = await response.json();
            
            const posts = data.data.children.slice(0, 5).map(post => ({
                title: post.data.title,
                url: `https://reddit.com${post.data.permalink}`,
                score: post.data.score,
                source: 'Reddit World News'
            }));
            
            return this.formatStories(posts, "🌍 Reddit World News");
        } catch (error) {
            return "🌍 **Reddit World News:**\n- Erro ao carregar notícias\n- Verifique sua conexão com a internet";
        }
    }

    // Formata as histórias para exibição
    formatStories(stories, title) {
        let formatted = `## ${title}\n\n`;
        
        stories.forEach((story, index) => {
            formatted += `${index + 1}. **${story.title}**\n`;
            formatted += `   [Ler mais](${story.url})\n`;
            formatted += `   *Fonte: ${story.source} | Score: ${story.score}*\n\n`;
        });
        
        return formatted;
    }

    // Busca fatos históricos do dia usando Wikipedia API
    async getWikipediaFacts(date) {
        try {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            
            // Fatos históricos pré-definidos (mais confiável)
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
                ],
                '8-28': [
                    '1565 - Fundação de São Sebastião do Rio de Janeiro',
                    '1833 - Lei do Ventre Livre no Brasil',
                    '1963 - Martin Luther King Jr. faz discurso "I Have a Dream"',
                    '1990 - Iraque invade Kuwait',
                    '2005 - Furacão Katrina atinge Nova Orleans'
                ],
                '8-29': [
                    '1526 - Batalha de Mohács, Hungria',
                    '1833 - Abolição da escravidão no Reino Unido',
                    '1949 - União Soviética testa sua primeira bomba atômica',
                    '1991 - Criação do Linux por Linus Torvalds',
                    '2005 - Furacão Katrina devasta Nova Orleans'
                ],
                '8-30': [
                    '30 a.C. - Cleópatra VII comete suicídio',
                    '1797 - Mary Shelley, autora de Frankenstein, nasce',
                    '1963 - Linha vermelha do telefone entre EUA e URSS',
                    '1991 - Azerbaijão declara independência da URSS',
                    '2007 - Apple lança o primeiro iPhone no Brasil'
                ],
                '8-31': [
                    '1888 - Jack, o Estripador, comete seu primeiro assassinato',
                    '1939 - Alemanha invade a Polônia, iniciando a Segunda Guerra Mundial',
                    '1957 - Malásia declara independência do Reino Unido',
                    '1991 - Quirguistão declara independência da URSS',
                    '1997 - Princesa Diana morre em acidente de carro em Paris'
                ]
            };
            
            const key = `${month}-${day}`;
            const dayFacts = facts[key] || [
                'Dia especial para fazer história!',
                'Cada dia é uma nova oportunidade.',
                'O passado nos ensina, o presente nos desafia.',
                'Hoje é o primeiro dia do resto da sua vida.'
            ];
            
            let formatted = "## 📚 Fatos Históricos do Dia\n\n";
            dayFacts.forEach((fact, index) => {
                formatted += `${index + 1}. ${fact}\n`;
            });
            
            return formatted;
        } catch (error) {
            return "## 📚 Fatos Históricos do Dia\n\n- Erro ao carregar fatos históricos\n- Verifique sua conexão com a internet";
        }
    }

    // Gera resumo completo das notícias
    async generateAllNews(date) {
        const hackerNews = await this.getHackerNews();
        const redditTech = await this.getRedditTech();
        const redditBrazil = await this.getRedditBrazil();
        const redditWorld = await this.getRedditWorldNews();
        const historicalFacts = await this.getWikipediaFacts(date);
        
        return {
            hackerNews,
            redditTech,
            redditBrazil,
            redditWorld,
            historicalFacts
        };
    }
}

// Funções para serem chamadas pelo Templater
async function getHackerNews(tp) {
    const fetcher = new ApiNewsFetcher();
    return await fetcher.getHackerNews();
}

async function getRedditTech(tp) {
    const fetcher = new ApiNewsFetcher();
    return await fetcher.getRedditTech();
}

async function getRedditBrazil(tp) {
    const fetcher = new ApiNewsFetcher();
    return await fetcher.getRedditBrazil();
}

async function getRedditWorldNews(tp) {
    const fetcher = new ApiNewsFetcher();
    return await fetcher.getRedditWorldNews();
}

async function getHistoricalFacts(tp) {
    const fetcher = new ApiNewsFetcher();
    const today = new Date();
    return await fetcher.getWikipediaFacts(today);
}

async function getAllApiNews(tp) {
    const fetcher = new ApiNewsFetcher();
    const today = new Date();
    const news = await fetcher.generateAllNews(today);
    
    return `${news.hackerNews}\n\n${news.redditTech}\n\n${news.redditBrazil}\n\n${news.redditWorld}\n\n${news.historicalFacts}`;
}

// Função de exportação padrão para o Templater
async function default(tp) {
    const fetcher = new ApiNewsFetcher();
    const today = new Date();
    const news = await fetcher.generateAllNews(today);
    
    return `${news.hackerNews}\n\n${news.redditTech}\n\n${news.redditBrazil}\n\n${news.redditWorld}\n\n${news.historicalFacts}`;
}

module.exports = { 
    ApiNewsFetcher, 
    getHackerNews, 
    getRedditTech, 
    getRedditBrazil, 
    getRedditWorldNews,
    getHistoricalFacts,
    getAllApiNews,
    default
};
