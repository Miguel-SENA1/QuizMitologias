const perguntas = [
    // FÁCEIS
    {
        nivel: "FÁCIL",
        pergunta: "Quem é o deus grego do trovão?",
        alternativas: ["Apolo", "Hermes", "Zeus", "Hades"],
        correta: 2
    },
    {
        nivel: "FÁCIL",
        pergunta: "Na mitologia nórdica, qual é o nome do martelo de Thor?",
        alternativas: ["Gungnir", "Mjolnir", "Excalibur", "Leviatã"],
        correta: 1
    },
    {
        nivel: "FÁCIL",
        pergunta: "Qual deus egípcio tem cabeça de chacal e está associado à mumificação?",
        alternativas: ["Hórus", "Anúbis", "Osíris", "Rá"],
        correta: 1
    },
    {
        nivel: "FÁCIL",
        pergunta: "Quem foi condenado a carregar o céu nos ombros, segundo a mitologia grega?",
        alternativas: ["Atlas", "Prometeu", "Aquiles", "Cronos"],
        correta: 0
    },
    {
        nivel: "FÁCIL",
        pergunta: "Qual é o nome do deus romano do amor, equivalente a Eros na mitologia grega?",
        alternativas: ["Cupido", "Marte", "Mercúrio", "Júpiter"],
        correta: 0
    },
    {
        nivel: "FÁCIL",
        pergunta: "Qual criatura mitológica tem corpo de leão e cabeça humana?",
        alternativas: ["Minotauro", "Esfinge", "Centauro", "Hidra"],
        correta: 1
    },
    {
        nivel: "FÁCIL",
        pergunta: "Na mitologia grega, quem é a deusa da sabedoria?",
        alternativas: ["Ártemis", "Atena", "Afrodite", "Hera"],
        correta: 1
    },
    {
        nivel: "FÁCIL",
        pergunta: "Qual animal é associado ao deus egípcio Sobek?",
        alternativas: ["Leão", "Escaravelho", "Crocodilo", "Cobra"],
        correta: 2
    },
    {
        nivel: "FÁCIL",
        pergunta: "Na mitologia nórdica, qual é o nome do fim do mundo?",
        alternativas: ["Valhalla", "Ragnarok", "Midgard", "Hel"],
        correta: 1
    },
    {
        nivel: "FÁCIL",
        pergunta: "Quem matou o Minotauro no labirinto de Creta?",
        alternativas: ["Ulisses", "Perseu", "Teseu", "Hércules"],
        correta: 2
    },

    // INTEREDIÁRIAS
    {
        nivel: "INTEREDIÁRIO",
        pergunta: "Na mitologia grega, quem foi o responsável por criar os humanos a partir do barro?",
        alternativas: ["Hades", "Prometeu", "Hefesto", "Dionísio"],
        correta: 1
    },
    {
        nivel: "INTEREDIÁRIO",
        pergunta: "Qual é o nome da serpente gigante que cerca o mundo na mitologia nórdica?",
        alternativas: ["Fenrir", "Sleipnir", "Jörmungandr", "Níðhöggr"],
        correta: 2
    },
    {
        nivel: "INTEREDIÁRIO",
        pergunta: "Na mitologia egípcia, quem pesa o coração dos mortos para julgar sua alma?",
        alternativas: ["Thoth", "Ísis", "Anúbis", "Maat"],
        correta: 2
    },
    {
        nivel: "INTEREDIÁRIO",
        pergunta: "Qual é o nome do herói grego que realizou 12 trabalhos como punição?",
        alternativas: ["Perseu", "Aquiles", "Hércules", "Jasão"],
        correta: 2
    },
    {
        nivel: "INTEREDIÁRIO",
        pergunta: "Na mitologia romana, Júpiter é equivalente a qual deus grego?",
        alternativas: ["Apolo", "Ares", "Hades", "Zeus"],
        correta: 3
    },
    {
        nivel: "INTEREDIÁRIO",
        pergunta: "Quem é a mãe de Apolo e Ártemis na mitologia grega?",
        alternativas: ["Hera", "Deméter", "Leto", "Gaia"],
        correta: 2
    },
    {
        nivel: "INTEREDIÁRIO",
        pergunta: "Qual era o animal de estimação do deus egípcio Anúbis?",
        alternativas: ["Um chacal", "Um gato", "Um falcão", "Um escaravelho"],
        correta: 0
    },
    {
        nivel: "INTEREDIÁRIO",
        pergunta: "Qual foi o castigo eterno de Sísifo no submundo?",
        alternativas: ["Ser devorado todos os dias", "Rolar uma pedra morro acima eternamente", "Ficar em um lago sem nunca beber", "Lutar eternamente com uma serpente"],
        correta: 1
    },
    {
        nivel: "INTEREDIÁRIO",
        pergunta: "Na mitologia nórdica, quem é o deus trapaceiro e pai de monstros como Fenrir e Jörmungandr?",
        alternativas: ["Odin", "Balder", "Tyr", "Loki"],
        correta: 3
    },
    {
        nivel: "INTEREDIÁRIO",
        pergunta: "Qual é o nome da deusa grega da vingança e da justiça retributiva?",
        alternativas: ["Têmis", "Nêmesis", "Éris", "Atena"],
        correta: 1
    },

    // AVANÇADAS
    {
        nivel: "AVANÇADO",
        pergunta: "Qual titã grego foi o pai de Prometeu, Atlas e Epimeteu?",
        alternativas: ["Cronos", "Hipérion", "Jápeto", "Oceano"],
        correta: 2
    },
    {
        nivel: "AVANÇADO",
        pergunta: "Na mitologia nórdica, qual deus perdeu a mão ao enganar Fenrir durante sua prisão?",
        alternativas: ["Balder", "Loki", "Tyr", "Heimdall"],
        correta: 2
    },
    {
        nivel: "AVANÇADO",
        pergunta: "Na mitologia egípcia, qual é o verdadeiro nome secreto de Rá que Ísis usa para obter poder sobre ele?",
        alternativas: ["Khepri", "Atum", "Amun-Rá", "Nunca é revelado explicitamente"],
        correta: 3
    },
    {
        nivel: "AVANÇADO",
        pergunta: "Quem é o rei dos ventos na mitologia grega?",
        alternativas: ["Éolo", "Notos", "Zéfiro", "Bóreas"],
        correta: 0
    },
    {
        nivel: "AVANÇADO",
        pergunta: "Na mitologia nórdica, o que é o Ginnungagap?",
        alternativas: ["O martelo de criação de Odin", "O poço onde moram os mortos", "O vazio primordial entre fogo e gelo", "O nome do lobo que devora o sol"],
        correta: 2
    },
    {
        nivel: "AVANÇADO",
        pergunta: "Qual é o nome da mãe de Horus, que juntou os pedaços do corpo de Osíris após sua morte?",
        alternativas: ["Nefthys", "Maat", "Ísis", "Bastet"],
        correta: 2
    },
    {
        nivel: "AVANÇADO",
        pergunta: "Qual é o nome do cão de três cabeças que guarda a entrada do submundo na mitologia grega?",
        alternativas: ["Cérbero", "Ortros", "Quimera", "Argos"],
        correta: 0
    },
    {
        nivel: "AVANÇADO",
        pergunta: "Na mitologia japonesa, quem derrotou a serpente de oito cabeças chamada Yamata no Orochi?",
        alternativas: ["Izanagi", "Susanoo", "Amaterasu", "Raijin"],
        correta: 1
    },
    {
        nivel: "AVANÇADO",
        pergunta: "Qual entidade da mitologia suméria foi enviada por Ishtar para punir Gilgamesh?",
        alternativas: ["Humbaba", "Tiamat", "Enkidu", "Touro Celestial (Gugalanna)"],
        correta: 3
    },
    {
        nivel: "AVANÇADO",
        pergunta: "Na mitologia celta, qual é o nome do caldeirão mágico que ressuscitava guerreiros mortos?",
        alternativas: ["Caldeirão de Dagda", "Caldeirão de Bran", "Caldeirão de Ceridwen", "Caldeirão de Annwn"],
        correta: 3
    }
];

let perguntaAtual = 0;
let respostaSelecionada = null;
let acertos = 0;

let acertosFacil = 0;
let acertosIntermediario = 0;
let acertosAvancado = 0;

// Elementos da interface
const nivel = document.getElementById("dif");
const pergunta = document.getElementById("per");
const alternativas = [
    document.getElementById("ra"),
    document.getElementById("rb"),
    document.getElementById("rc"),
    document.getElementById("rd"),
];
const botao = document.getElementById("button");

// Estado: 'inicio', 'quiz', 'fim'
let estado = "inicio";

// Clique nas alternativas (apenas se estiver no quiz)
alternativas.forEach((alt, index) => {
    alt.addEventListener("click", () => {
        if (estado !== "quiz") return;

        respostaSelecionada = index;

        alternativas.forEach((a, i) => {
            const letra = String.fromCharCode(97 + i); // 'a', 'b', 'c', 'd'
            a.innerHTML = `${letra}) ${perguntas[perguntaAtual].alternativas[i]}`;
        });

        const letraSelecionada = String.fromCharCode(97 + index);
        alt.innerHTML = `<strong style="color: #4ea6ffff;">${letraSelecionada})</strong> ${perguntas[perguntaAtual].alternativas[index]}`;
    });
});

// Botão com múltiplas funções: iniciar, avançar, reiniciar
botao.addEventListener("click", () => {
    if (estado === "inicio") {
        iniciarQuiz();
    } else if (estado === "quiz") {
        if (respostaSelecionada === null) return;

        const atual = perguntas[perguntaAtual];
        if (respostaSelecionada === atual.correta) {
            acertos++;
            if (atual.nivel === "FÁCIL") acertosFacil++;
            if (atual.nivel === "INTEREDIÁRIO") acertosIntermediario++;
            if (atual.nivel === "AVANÇADO") acertosAvancado++;
        }

        perguntaAtual++;
        respostaSelecionada = null;

        if (perguntaAtual < perguntas.length) {
            carregarPergunta();
        } else {
            mostrarResultado();
        }
    } else if (estado === "fim") {
        reiniciarQuiz();
    }
});

function mostrarTelaInicial() {
    estado = "inicio";
    nivel.textContent = "QUIZ";
    pergunta.innerHTML = "<strong>MITOLOGIAS</strong>";

    // Centraliza "QUIZ" apenas na tela inicial
    nivel.style.textAlign = "center";
    pergunta.style.textAlign = "center";

    alternativas[0].textContent = "Explore os mitos por graus de dificuldade. Você está preparado para o desafio?";
    alternativas[0].style.textAlign = "justify";

    // Esconde alternativas 2 a 4
    for (let i = 1; i < alternativas.length; i++) {
        alternativas[i].style.display = "none";
    }

    alternativas.forEach(alt => alt.style.fontWeight = "normal");

    botao.textContent = "RESPONDER";
}

function iniciarQuiz() {
    estado = "quiz";
    perguntaAtual = 0;
    respostaSelecionada = null;
    acertos = 0;
    acertosFacil = 0;
    acertosIntermediario = 0;
    acertosAvancado = 0;

    // Volta alinhamento para a esquerda
    nivel.style.textAlign = "left";
    pergunta.style.textAlign = "left";

    alternativas.forEach(alt => {
        alt.style.display = "block";
        alt.style.textAlign = "left";
        alt.style.fontWeight = "normal";
    });

    botao.textContent = "PRÓXIMA";
    carregarPergunta();
}

function carregarPergunta() {
    const atual = perguntas[perguntaAtual];
    nivel.textContent = atual.nivel;
    pergunta.textContent = `${perguntaAtual + 1}. ${atual.pergunta}`;
    alternativas.forEach((alt, i) => {
        alt.textContent = `${String.fromCharCode(97 + i)}) ${atual.alternativas[i]}`;
        alt.style.fontWeight = "normal";
        alt.style.display = "block";
        alt.style.textAlign = "left";
    });
}
    
function mostrarResultado() {
    estado = "fim";
    nivel.textContent = "CONCLUSÃO";
    pergunta.textContent = "Ótima tentativa! Você chegou ao fim. Esse é o resultado. Caso não tenha acertado todas, experimente repetir.";

    nivel.style.textAlign = "left";
    pergunta.style.textAlign = "justify";

    alternativas[0].textContent = `Fácil: ${acertosFacil} / 10`;
    alternativas[1].textContent = `Intermediário: ${acertosIntermediario} / 10`;
    alternativas[2].textContent = `Avançado: ${acertosAvancado} / 10`;

    alternativas.forEach(alt => {
        alt.style.fontWeight = "normal";
        alt.style.display = "block";
        alt.style.textAlign = "left";
    });

    alternativas[3].style.display = "none";

    botao.textContent = "REINICIAR";
}

function reiniciarQuiz() {
    mostrarTelaInicial();
}

// Iniciar com a tela inicial carregada
mostrarTelaInicial();