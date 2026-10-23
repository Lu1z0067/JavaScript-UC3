
let tagContador = document.getElementById("contador")
let tagTitulo = document.getElementById("titulo")

let contador = 0

function iniciarContadorWhile(){
    // loop while -> continua repetindo enquanto a condicional for verdadeiro
    // Enquanto o contador for menor que 10 mil repita...
    while (contador < 10000){
        //Aumentar contador
        contador++ // ou contador += 1
        tagContador.innerHTML = contador
        console.log(contador)
    }
}

function iniciarContadorFor(){
    // O loop "for" do JavaScript é bem diferente do python
    // No corpo del possui:
    // 1- A criação da variável contadora dele (Aqui se chama "i")
    // 2- O limite do contador(aqui é o i < 100)
    // 3- De quanto em quanto ele vai subindo (Aqui é o i++)

    for (let i = 0; i <= 100; i++){ // Coloquei menor e IGUAL para chegar ao 100, caso sem IGUAL(=) ele irá até 99
        console.log("Valor de i: " + i)
    } 
}

function contadorVetor(){
    // Vetor -> são variáveis com listas (com muitos valores dentro)
    let consoles = ["Xbox 360","Xbox One","Ps2"]

    // Mostrando valor de vetor. É por meio de índice
    // Os índices (posições) contam à partir do 0
    console.log("O 3° Console da Lista: " + consoles[2])

    // Mostrando a lista toda com o loop for
    for (let i=0; i <= 3;i++){
        console.log(consoles[i])
    }
}

function trocarClasse(){
    // Estamos manipulando a tag acessando suas classes com "classList"
    // O toggle funciona como um "ibterruptor" de liga e desliga
    // Se a tag NÃO tiver a classe "trocado" ele adicionado nela
    // Se a tag JÁ tiver a classe ele RETIRA dela
    tagTitulo.classList.toggle("trocado")
}
