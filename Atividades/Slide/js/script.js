/* 
Primeiro, selecionaremos TODOS AS TAGS COM A CLASSE .slide
Eles serão colocados em um "vetor"/lista
*/

// getElementsByClassName = Pega várias tags de uma vez só
const slides = document.getElementsByClassName("slide")

// Slides é um vetor, e lembrando: vetor se conta do 0
/* 
    slide 1 = posição 0
    slide 2 = posição 1
    slide 3 = posição 2
*/

// A variavel abaixo é um contador para sabermos e controlarmos qual é o slide atual (E trocar para os próximos)
let slideAtual = 0

// Função que recebe como parâmetro qual é o slide que ele vai mostrar
function mostrarSlide(posicao){
    // Esconde todos os slides

    /* 
        Let i = 0 - Cria a variavel de contador do loop
        i < slides.lenght - Condição para repetir
        i ++ - De quanto em quanto sobe o contador (sobe 1)
        Lenght = comprimento (tamanho do slide)
    */
    for(let i = 0; i < slides.length; i++){
        // slides[i] = Acessando o slide da vez
        // classList.remove = Remove uma classe daquela tag
        slides[i].classList.remove("ativo")
    }

    //Após limpar todos, ele só ativa o atual (posicao)
    slides[posicao].classList.add("ativo")
}

function proximoSlide(){
    // Aumentamos o contador
    slideAtual++

    // Porém existe um problema. Não são slides infinitos.
    // Dessa forma, se o número chegar no slide final. Ele deve resetar pro slide 0. (Chegou no slide 3, clicou em próximo ele volta pro 0)

    // slides.lenght - conta do 1 (Então ele terá o número 4)
    if (slideAtual >= slides.length){
        slideAtual = 0
    }
    // Após aumentar o contador, mostramos ele
    mostrarSlide(slideAtual)
}

function slideAnterior(){
    slideAtual--

    //Checar limite
    if (slideAtual < 0){
        slideAtual = slides.length-1
    }

    mostrarSlide(slideAtual)
}

// Chamar função sozinho em um intervalo em milessegundos
// 3000ms = 3 segundos
setInterval(proximoSlide, 3000)