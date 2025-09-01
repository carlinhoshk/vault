// Script simples para buscar notícias
// Função para ser chamada pelo Templater

async function getNews(tp) {
    try {
        // Simulação de notícias (funciona offline)
        const news = {
            brazil: [
                "Economia brasileira mostra sinais de recuperação",
                "Novas tecnologias em IA são anunciadas no Brasil",
                "Clima: Previsão de chuva para o fim de semana"
            ],
            international: [
                "Mercado financeiro global em alta",
                "Acordos internacionais são assinados",
                "Descobertas científicas recentes"
            ],
            tech: [
                "OpenAI anuncia nova versão do GPT",
                "Google lança atualizações do Android",
                "Novos frameworks JavaScript lançados"
            ]
        };

        let result = "## 📰 Notícias do Dia\n\n";
        
        result += "### 🇧🇷 Notícias do Brasil\n";
        news.brazil.forEach((item, index) => {
            result += `${index + 1}. **${item}**\n`;
        });
        
        result += "\n### 🌍 Notícias Internacionais\n";
        news.international.forEach((item, index) => {
            result += `${index + 1}. **${item}**\n`;
        });
        
        result += "\n### 💻 Tech News\n";
        news.tech.forEach((item, index) => {
            result += `${index + 1}. **${item}**\n`;
        });

        return result;
    } catch (error) {
        return "## 📰 Notícias do Dia\n\nErro ao carregar notícias. Verifique sua conexão.";
    }
}

async function getHistoricalFacts(tp) {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    
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
    
    let result = "## 📚 Fatos Históricos do Dia\n\n";
    dayFacts.forEach((fact, index) => {
        result += `${index + 1}. ${fact}\n`;
    });
    
    return result;
}

// Função de exportação padrão
module.exports = { getNews, getHistoricalFacts };
