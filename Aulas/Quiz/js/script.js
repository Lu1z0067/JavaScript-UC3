// Perguntas dentro do vetor
// Dentro do vetor terão diversos objetos (estruturas com chaves {} com dodos dentro)

const perguntas = [
    {
        pergunta: "Qual linguagem é usada para deixar uma página interativa?",
        alternativas: ["HTML", "CSS", "JavaScript", "SQL"],
        correta: 2
    },
    {
        pergunta: "Qual tag HTML cria um botão?",
        alternativas: ["<button>", "<inputText>", "<click>", "<btn>"],
        correta: 0
    },
    {
        pergunta: "Qual propriedade do CSS muda a cor do texto?",
        alternativas: ["background", "font-size", "color", "border"],
        correta: 2
    },
    {
        pergunta: "Qual comando exibe algo no console do navegador?",
        alternativas: [
            "print()",
            "console.log()",
            "show()",
            "document.console()"
        ],
        correta: 1
    }
]

// Pegando as Tags/Elementos do HTML

const tagPergunta = document.getElementById("pergunta")
const tagAlternativas = document.getElementById("alternativas")
const tagResultado = document.getElementById("resultado")
const tagNumero = document.getElementById("numero-pergunta")
const botaoProxima = document.getElementById("proxima")

// Variáveis de controle

let perguntaAtual = 0
let pontos = 0

// Mostrar pergunta atual

function mostrarPergunta(){
    // A variável "perguntaAtual" será usada como indice na lista de perguntas
    let pergunta = perguntas[perguntaAtual]

    // Edita o <p> com o número da pergunta atual
    // Mostrando algo como "Pergunta 3 de 4"
    // length = conta o total de itens que tem no vetor "perguntas"
    tagNumero.innerHTML = 
        "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length;

    // Mostrando a pergunta
    // pergunta.pergunta = o primeiro é a variável e o segundo é o "atributo" dentro do objeto
    tagPergunta.innerHTML = pergunta.pergunta;

    // Zerando alternativa e resultados
    tagAlternativas.innerHTML = "";
    tagResultado.innerHTML = "";
    // Sumindo com o botão  
    botaoProxima.style.display = "none"

    // criar botão para cada alternativa (com loop)
    // i < pergunta.alternativa.length = enquanto for menor que 4
    // i++ aumenta de 1 em 1
    for(let i = 0; i < pergunta.alternativas.length; i++){
        // CRIAR TAG
        let botao = document.createElement("button")
        // Escrevendo dentro do botão = a alternativa de vez
        botao.innerText = pergunta.alternativas[i]
        // Colocar classe dentro da tag recém criada para o CSS
        botao.className = "alternativa"

        // Programando o botão (colocando função no click dele)
        botao.onclick = function(){
            // Chama a função responder passando 
            responder(i)
        }

        tagAlternativas.appendChild(botao)
    }
}

// Função que verifica se o jogador acertou
// Ele é chamado pelo <button> de alternativa
//  Recebe como parâmetro o número/indice daquela alternativa clicada
// A alernativa clicada é um indice
function responder(resposta){
    // Pega a pergunta quer está na tela(pergunta atual)
    let pergunta = perguntas[perguntaAtual]

    if (resposta == pergunta.correta){
        pontos++
        tagResultado.innerText = "✅ Resposta correta!"
        tagResultado.style.color = "var(--cor-acerto)"
    }
    else{
        tagResultado.innerText = "❌ Resposta Incorreta"
        tagResultado.style.color = "var(--cor-erro)"
    }

    // Desativar os botões das outras alternativas
    // Selecionando TODOS OS BOTÕES
    let botoes = document.getElementsByClassName("alternativa")

    for (botao of botoes){
        botao.disabled = true
    }

    // Fazendo o botão "proxima pergunta" aparecer
    // Por natureza ele é display: none (que é inivisivel)
    // Aqui, após ele responder, mudamos o display dele
    botaoProxima.style.display = "block"

}

function proximaPergunta(){
    // Aumenta a variável para a próxima pergunta
    perguntaAtual++

    // Mas precisamos checar para ele não ir para frente infinito. (Pergunta 50 se só existe 4)
    if (perguntaAtual < perguntas.length){
        mostrarPergunta()
    }
    else{
        finalizarQuiz()
    }
}

function finalizarQuiz(){

    tagNumero.innerText = "Quiz Finalizado!"
    tagPergunta.innerText =
        "Você acertou " + pontos + " de " + perguntas.length + " perguntas";

        tagAlternativas.innerHTML = ""
        tagResultado.innerText = "🎉 Obrigado por Jogar!"
        botaoProxima.style.display = "none"
}

mostrarPergunta()