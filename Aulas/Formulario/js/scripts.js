let tagNota1 = document.getElementById("nota1")
let tagNota2 = document.getElementById("nota2")
let tagNota3 = document.getElementById("nota3")
let tagResultado = document.getElementById("resultado")

function calcularMedia(){
    // Pegando a nota dos input
    // .value -> para puxar o valor do input
    let nota1 = Number(tagNota1.value)
    let nota2 = Number(tagNota2.value)
    let nota3 = Number(tagNota3.value)

    let media = (nota1 + nota2 + nota3)/3

    // alert("O resultado da média é: "+ media.toFixed(1))

    tagResultado.innerHTML = "O resultado da media é: " + media.toFixed(1)
}