const perguntas = [
    {
        pergunta: "Qual é este filme?",
        imagens: ["img/f1_1.webp", "img/f1_3.jpg"],
        alternativas: ["Velozes e Furiosos", "Carros 2", "Os Carrinhos", "Formula 1", "Vingadores"],
        correta: 3
    },
    {
        pergunta: "Qual é este filme?",
        imagens: ["img/iron_man1.jpg", "img/iron_man2.jpg"],
        alternativas: ["Super-Herói: O Filme", "Homem de Ferro", "Thor", "Batman", "Vingadores Ultimato"],
        correta: 1
    },
    {
        pergunta: "Qual é este filme?",
        imagens: ["img/aranha1.gif", "img/aranha2.gif"],
        alternativas: ["Homem de Aço", "Homem Formiga", "Aranha Humana", "Besouro", "Homem Aranha"],
        correta: 4
    }
];

const tagPergunta = document.getElementById("pergunta")
const tagImagens = document.getElementById("imagens")
const tagAlternativas = document.getElementById("alternativas");

// Pergunta

let perguntaAtual = 0;

function mostrarPergunta(){
    let pergunta = perguntas[perguntaAtual]

    tagPergunta.innerHTML = pergunta.pergunta
    tagAlternativas.innerHTML = ""
    
    for (let i = 0; i < pergunta.alternativas.length; i++){
        let botao = document.createElement("button")
        botao.innerText = pergunta.alternativas[i]
        botao.className = "alternativas"
        tagAlternativas.appendChild(botao)
        botao.onclick = function(){
            responder(i)
        }
    }

}

// Qual Questão estamos

const tagQualpergunta = document.getElementById("qualPergunta")

function qualPergunta(){
    tagQualpergunta.innerText = "Questão " + (perguntaAtual + 1) + " de " + perguntas.length
}

qualPergunta()

// Slides

let imagemAtual = 0

function mostrarImagem(){
    let pergunta = perguntas[perguntaAtual]

    tagImagens.src = pergunta.imagens[imagemAtual]
}

function proximaImagem(){
    imagemAtual++

    if (imagemAtual >= perguntas[perguntaAtual].imagens.length){
        imagemAtual = 0

    }

    mostrarImagem()
}

setInterval(proximaImagem, 2000)


// Alternativas 

const tagNxt = document.getElementById("next")
tagNxt.disabled = true

function responder(resposta){
    let pergunta = perguntas[perguntaAtual]

    if (resposta == pergunta.correta){
        pontos++
        alert("Resposta Correta✅")
    }
    else{
        alert("Resposta Errada❌")
    }

    tagNxt.disabled = false


    let botoes = document.getElementsByClassName("alternativas")

    for (botao of botoes){
        botao.disabled = true
    }
}

// Proxima Pergunta

const btnProximo = document.getElementById("proximo")

let tagResultImg = document.getElementById("resultImg")

function proximaPergunta(){
    perguntaAtual++

    tagNxt.disabled = true

    if (perguntaAtual < perguntas.length){
        mostrarPergunta()
        mostrarImagem()
        qualPergunta()
    }
    else{
        final()
        tagPontos.innerText = pontos

        switch (pontos){
            case 1:
                tagResultImg.src = "img/ishow.gif"
                break
            case 2:
                tagResultImg.src = "img/absolute.webp"
                break
            case 3:
                tagResultImg.src = "img/speed.gif"
        }
    }
    
    btnProximo.addEventListener("click", mostrarPergunta)
}

const tagPontos = document.getElementById("pontos")

pontos = 0


function final(){

    const pagina = document.getElementsByTagName("main")

    pagina[0].classList.remove("ativo")
    pagina[1].classList.add("ativo")

}


mostrarPergunta()   