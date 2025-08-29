// Script para gerar frases motivacionais aleatórias
// Função para ser chamada pelo Templater

function getFraseMotivacional() {
    const frases = [
        "A persistência é o caminho do êxito. - Charles Chaplin",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia. - Robert Collier",
        "A única maneira de fazer um excelente trabalho é amar o que você faz. - Steve Jobs",
        "O futuro pertence àqueles que acreditam na beleza de seus sonhos. - Eleanor Roosevelt",
        "Não espere. O momento nunca será perfeito. - Napoleon Hill",
        "A vida é 10% o que acontece com você e 90% como você reage a isso. - Charles R. Swindoll",
        "O conhecimento é poder. - Francis Bacon",
        "A imaginação é mais importante que o conhecimento. - Albert Einstein",
        "A determinação de hoje é o sucesso de amanhã. - Robert H. Schuller",
        "Cada dia é uma nova oportunidade para ser melhor. - Desconhecido",
        "O que você faz hoje pode melhorar todos os seus amanhãs. - Ralph Marston",
        "A disciplina é a ponte entre metas e realizações. - Jim Rohn",
        "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta. - Winston Churchill",
        "A qualidade, não a quantidade, é o que importa. - Lucius Annaeus Seneca",
        "A mente é tudo. O que você pensa, você se torna. - Buda",
        "O otimismo é a fé que leva à realização. - Helen Keller",
        "A melhor maneira de prever o futuro é criá-lo. - Peter Drucker",
        "Não há elevador para o sucesso, você tem que usar as escadas. - Zig Ziglar",
        "A ação é a chave fundamental para todo sucesso. - Pablo Picasso",
        "O que você semeia, você colhe. - Galatians 6:7"
    ];
    
    const randomIndex = Math.floor(Math.random() * frases.length);
    return frases[randomIndex];
}

// Função para ser chamada pelo Templater
function fraseMotivacional(tp) {
    return getFraseMotivacional();
}

module.exports = { getFraseMotivacional, fraseMotivacional };
