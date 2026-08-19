let tagGuerreiro = document.getElementById("guerreiro")
let tagArqueiro = document.getElementById("arqueiro")
let tagMago = document.getElementById("mago")
let tagLadino = document.getElementById("ladino")
let tagPaladino = document.getElementById("paladino")

let tagPlayer = document.getElementById("player")
let tagCPU = document.getElementById("CPU")
let tagFundo = document.querySelector("body")

let tagPontosPlayer = document.getElementById("pontuacaoPlayer")
let tagPontosCPU = document.getElementById("pontuacaoCPU")

let pontosPlayer = 0
let pontosCPU = 0

let cartaSelecionada = ""
let cartaSelecionadaCPU = ""

function luta(){
    if (cartaSelecionada == ""){
    alert("Selecione uma classe!")
    return
    }

    else{
        cartaCPU = Math.floor(Math.random() * 5)
        
        switch (cartaCPU){
            case 0:
                tagCPU.innerHTML = "⚔️"
                cartaSelecionadaCPU = "guerreiro"
                break
            case 1:
                tagCPU.innerHTML = "🏹"
                cartaSelecionadaCPU = "arqueiro"
                break
            case 2:
                tagCPU.innerHTML = "🧙‍♂️"
                cartaSelecionadaCPU = "mago"
                break
            case 3:
                tagCPU.innerHTML = "🗡️"
                cartaSelecionadaCPU = "ladino"
                break
            case 4:
                tagCPU.innerHTML = "🛡️"
                cartaSelecionadaCPU = "paladino"
                break
        }

        if (cartaSelecionada == "guerreiro" && cartaSelecionadaCPU == "ladino"){
            alert("Você Ganhou!")
            tagFundo.style.backgroundColor = "royalblue"
            pontosPlayer++
        }    
        else if (cartaSelecionada == "mago" && cartaSelecionadaCPU == "guerreiro"){
            alert("Você Ganhou!")
            tagFundo.style.backgroundColor = "royalblue"
            pontosPlayer++
        }
        else if (cartaSelecionada == "arqueiro" && cartaSelecionadaCPU == "mago"){
            alert("Você Ganhou!")
            tagFundo.style.backgroundColor = "royalblue"
            pontosPlayer++
        }
        else if (cartaSelecionada == "ladino" && (cartaSelecionadaCPU == "mago" || cartaSelecionadaCPU == "arqueiro")){
            alert("Você Ganhou!")
            tagFundo.style.backgroundColor = "royalblue"
            pontosPlayer++
        }
        else if (cartaSelecionada == "paladino" && (cartaSelecionadaCPU == "mago" || cartaSelecionadaCPU == "ladino")){
            alert("Você Ganhou!")
            tagFundo.style.backgroundColor = "royalblue"
            pontosPlayer++
        }
        else if (cartaSelecionada == cartaSelecionadaCPU){
            alert("Empate!")
            tagFundo.style.backgroundColor = "rgb(233, 175, 50)"
        }
        else{
            alert("A Maquina ganhou, você perdeu!")
            tagFundo.style.backgroundColor = "rgb(165, 67, 67)"
            pontosCPU++

        }


        tagPontosPlayer.textContent = pontosPlayer
        tagPontosCPU.textContent = pontosCPU

    }
}

function classe(carta){
    cartaSelecionada = carta
    
    if (cartaSelecionada == "guerreiro"){
        tagPlayer.innerHTML = "⚔️"
        return
    }
    else if (cartaSelecionada == "arqueiro"){
        tagPlayer.innerHTML = "🏹"
    }
    else if (cartaSelecionada == "mago"){
        tagPlayer.innerHTML = "🧙‍♂️"
    }
    else if (cartaSelecionada == "ladino"){
        tagPlayer.innerHTML = "🗡️"
    }
    else{
        tagPlayer.innerHTML = "🛡️"

    }
}