const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você ganhou um ingresso para um show de Metal Anânico",
        alternativas: [
            {
                texto: "Eu vou, sem sombra de dúvidas.",
                afirmacao: "Você valoriza a companhia dos amigos e sabe como se divertir em grupo."
            },
            {
                texto: "Aproveito e passo no Trip Burguer (Antigo Pancho Vina).",
                afirmacao: "Você gosta de fast-food."
            }
        ]
    },
    {
        enunciado: "Nas férias de Dezembro você decide:",
        alternativas: [
            {
                texto: "Jogar Minecraft com os amigos.",
                afirmacao: "Você gosta de jogar videogame."
            },
            {
                texto: "Fazer um curso rápido para aprender algo novo.",
                afirmacao: "Você gosta de estudar."
            }
        ]
    },
    {
        enunciado: "Vocẽ encontrou uma carteira cheia de dinheiro no meio da rua, o que você faz?",
        alternativas: [
            {
                texto: "Guardo e entrego para a polícia",
                afirmacao: "Você é uma pessoa honesta."
            },
            {
                texto: "Gasto todo o dinheiro.",
                afirmacao: "Você é um pnc."
            }
        ]
    },
    {
        enunciado: "Você tem a chance de sair com seus amigos, para onde você vai?",
        alternativas: [
            {
                texto: "Garimpo de Rock do Centro!",
                afirmacao: "Vocẽ gosta de comprar roupas e descobrir novas coisas."
            },
            {
                texto: "Soberano Dog.",
                afirmacao: "A quantidade de alimento está acima de sua qualidade, portanto você é uma pessoa que gosta de um alimento gorduroso."
            }
        ]
    },
    {
        enunciado: "Você está navegando no 4chan, o que você faz?",
        alternativas: [
            {
                texto: "Compartilho com meus amigos para eles verem as notícias e postagens .",
                afirmacao: "Você gosta de compartilhar coisas com os outros."
            },
            {
                texto: "Posto algo novo na rede.",
                afirmacao: "Você gosta de escrever e postar diferentes tipos de assuntos na internet."
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