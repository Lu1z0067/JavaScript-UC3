let tagPeso = document.getElementById("peso")
let tagAltura = document.getElementById("altura")



function calcular() {

    if (tagPeso.value == "" || tagAltura.value == ""){
        alert("Por favor, preenchar todos os campos!")
        return;
    }

    let peso = Number(tagPeso.value) // .value -> é uma propriedade usada para pegar ou mudar o texto (o dado) que está dentro de um elemento de formulário na página
    let altura = Number(tagAltura.value)

    let IMC = peso / (altura**2)

    let tagClass = document.querySelector("#class");

    
    if (IMC <= 18.5){
        tagClass.style.backgroundColor = "green";
        tagClass.innerHTML = "Baixo Peso";
    }
    else if (IMC <= 24.99){
        tagClass.style.backgroundColor = "yellowgreen";
        tagClass.innerHTML = "Normal";
    }
    else if (IMC <= 29.99){
        tagClass.style.backgroundColor = "orange";
        tagClass.innerHTML = "Sobrepeso";
    }
    else if (IMC >= 30){
        tagClass.style.backgroundColor = "red";
        tagClass.innerHTML = "Obesidade";
    }
    else {
        tagClass.innerHTML = "NADA";
        tagClass.style.backgroundColor = "white";
    }
}