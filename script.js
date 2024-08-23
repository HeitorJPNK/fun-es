const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está explorando uma floresta e encotra dois caminhos. Por qual caminho você decide ir?",
        alternativas: [
            {
                texto: "Labirinto.",
                afirmacao: "Você encontra um Minotauro e o derrota"
            },
            {
                texto: "Estrada Limpa.",
                afirmacao: "Você encontra um mercador e compra dele uma poção de invisibilidade."
            }
        ]
    },
    {
        enunciado: "Ao decorrer do tempo, você decide escolher seu equipamento principal. Qual equipamento você escolhe?:",
        alternativas: [
            {
                texto: "Machado.",
                afirmacao: "Você é um guerreiro de poucas palavras e apenas deseja acabar com o seu inimigo em apenas um golpe."
            },
            {
                texto: "Espada Longa.",
                afirmacao: "Você é um guerreiro ágil e consistente, derrota seus inimigos com golpes rápidos e precisos."
            }
        ]
    },
    {
        enunciado: "Você encontra um grupo de Goblins. O que você faz?",
        alternativas: [
            {
                texto: "Me escondo em uma pedra e espero a poeira abaixar.",
                afirmacao: "Você é um guerreiro medroso e não gosta muito de desafios."
            },
            {
                texto: "Espero a hora certa para atacar e tento acabar com todos.",
                afirmacao: "Você é um guerreiro corajoso e acredita em seu potencial."
            }
        ]
    },
    {
        enunciado: "Você se repousa em uma taverna. Chegando lá você tem duas opções de bebida, qual vocẽ escolhe?:",
        alternativas: [
            {
                texto: "Hidromel Caseiro!",
                afirmacao: "Você tem um gosto adocicado para bebidas alcoólicas e não gosta de nada muito amargo."
            },
            {
                texto: "Touro Louco (Cerveja caseira da Casa).",
                afirmacao: "Você tem um gosto arretado para bebidas alcoólicas e gosta de bebidas consistentes."
            }
        ]
    },
    {
        enunciado: "Ao final de sua jornada, você se depara com um grande dragão. O que você faz?",
        alternativas: [
            {
                texto: "Tento fazer amizade com ele.",
                afirmacao: "O dragão o dilacera vivo."
            },
            {
                texto: "Decido enfrentar a aberração.",
                afirmacao: "Você termina sua jornada como um verdadeiro herói."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre Você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
