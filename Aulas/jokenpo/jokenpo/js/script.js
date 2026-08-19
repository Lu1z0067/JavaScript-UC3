// Primeira ação: Definir e salvar tags em variáveis

let TagPontosPlayer = document.getElementById("pontos-jogador")
let TagPontosCPU = document.getElementById("pontos-maquina")

let pontosPlayer = 0
let pontosMaquina = 0

// Função que será linkada/conectada as cartas de jogaga

// Ele recebe "jogada" como parâmetro, pois o jogador tem 3 cartas para escolher. E cada uma é uma jogada diferente.
function jogar(jogada){
    // Jogada da CPU
    // floor = Arredonda para baixo
    // random() = sorteia um número entre 0 e 1
    // Ao multiplicar por 3 ele pode gerar um número de 0 a 3 aleatoriamente
    let jogadaNumero = Math.floor(Math.random() * 3)

    // Traduzindo número para palavra
    let JogadaMaquina = ""
    switch (jogadaNumero){
        case 0:
            JogadaMaquina = "Pedra"
            break
        case 1:
            JogadaMaquina = "Papel"
            break
        case 2:
            JogadaMaquina = "Tesoura"
            break
    }

    let vencedor = playerVenceu(jogada, JogadaMaquina)

    // \n = Pula linha

    alert("Player jogou: " + jogada + "\nMaquina jogou: " + JogadaMaquina)
    if (vencedor == "EMPATE"){
        alert("Deu EMPATE!")
    }
    else if (vencedor == "PLAYER"){
        alert(vencedor + " venceu!")
        // variável++ é o mesmo que:
        // variável = variável + 1 OU variável += 1
        pontosPlayer++
    }
    else{
        alert(vencedor + " venceu!!")
        pontosMaquina++
    }
    atualizarPlacar()
}

// Função separada que analisa se o player venceu ou não
// Ele recebe dois valores: Jogada do Jogadore Jogada da Maquina
// Parâmetros servem para que a função receba informações externa. Pois não é a função que define a jogada deles. Ela serve apenas para analisar
function playerVenceu(jogadaP, jogadaM){
    if (jogadaP == jogadaM){
        return "EMPATE"
    }
    // && = and
    else if (jogadaP == "Pedra" && jogadaM == "Tesoura"){
        return "PLAYER"
    }
    else if (jogadaP == "Papel" && jogadaM == "Pedra"){
        return "PLAYER"
    }
    else if (jogadaP == "Tesoura" && jogadaM == "Papel"){
        return "PLAYER"
    }
    else {
        return "MAQUINA"
    }
}

// função para atualizar placar

function atualizarPlacar() {
    // innerHTML edita oq está escrito no <h1>
    // Quando essa função é chamada ele vai lá na TAG e coloca o novo valor
    TagPontosPlayer.innerHTML = "Player pontos: " + pontosPlayer
    TagPontosCPU.innerHTML = "Maquina pontos: " + pontosMaquina
}