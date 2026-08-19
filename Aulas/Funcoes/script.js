// Sintaxe de uma função
// nota1, nota2, nota3 são "parâmetros"
// "parâmetros" são informações que a função necessita para funcionar
function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3)/3
    alert("A média é: " + media.toFixed(1)) // .toFixed() -> serve para limitar o número de casas decimais após a vírgula
}

// Lendo as informações do Usuário
let n1 = Number(prompt("Digite nota 1: "))
let n2 = Number(prompt("Digite nota 2: "))
let n3 = Number(prompt("Digite nota 3: "))

// Chamando a função!
calcularMedia(n1,n2,n3)

// Chamandi comv valores brutos
calcularMedia(7.5, 10, 2)