// Para TAGS é mais comum usarmos "const" para criar variável
/*
"const" é uma "variável" que não pode ser editada!
digamos: const idade = 30
Após criar uma variável dessas, nunca mais (nesse código) pode mudar o valor dela. SERÁ PARA SEMPRE 30
Usamos aqui no JS geralmente em TAGS para que ele fique "para sempre" naquela TAG. -> Para evitar um possível esquecimento do PROGRAMADOR.
*/

const tagBtn1 = document.getElementById("btn1")
const tagBtn2 = document.getElementById("btn2")
const tagBtn3 = document.getElementById("btn3")

// aqui neste código conheceremos as 3 principais formas de conectar botões nas funções

function boasVindas(){
    alert("Seja bem vindo ao sistema!")
    // \n = Pular uma linha no mesmo texto
    alert("Aqui você conhecerá sobre a função\n'addEventListener'")
}

// Conectando os botões direto aqui no JS

tagBtn1.addEventListener('click', boasVindas)

/*
() => É o que chamamos de "Arrow Function"
É uma função Anonima (Sem nome) que possui uma flecha
É como uma função completa de uma vez só
É uma das formas mais utilizadas no JavaScript
Está função será usada apenas para este botão(btn2)
*/

tagBtn2.addEventListener('click', () => {
    alert("Essa é a terceira forma")
    // Seleciona TAG por meio de uma seleção igual o css
    document.querySelector(".container>h1").innerHTML = "Foi mudado"
})

// Mais usado do que o onClick, mas menos usando do que o Arrow Function

// Aqui colocamos a função dentro dos parênteses, porém omitimos o nome da função
tagBtn3.addEventListener('click', function(){
    alert("Quarta forma")
    document.querySelector(".container>h1").style.color = "red";
})