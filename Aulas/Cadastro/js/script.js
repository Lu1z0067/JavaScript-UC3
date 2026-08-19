// Para pegarmos os valores dos <input> temos que descobir-los aqui no js

// Selecionamos eles pelo seu ID (colocado na TAG)
let tagNome = document.getElementById("nome")
let tagEmail = document.getElementById("email")
let tagTelefone = document.getElementById("telefone")
let tagIdade = document.getElementById("idade")

function cadastro(){
    // Pegando os valores escritos nos <input>
    // .value pega o valor digitado na caixa
    // Iniciando as variáveis como vazias
    let nome = ""
    let email = ""
    let telefone = ""
    let idade = ""

    // Checar se os campos estão preenchidos
    if (tagNome.value == ""){
        alert("Preencha o campo Nome!")
        // O return é como um "break" só que para função
        // Ele PARA/INTERROMPE a função aqui
        return
    }
    else if (tagEmail.value == ""){
        alert("Preencha o campo E-mail!")
        return
    }
    else if (tagTelefone.value == ""){
        alert("Preencha o campo Telefone!")
        return
    }
    else if (tagIdade.value == ""){
        alert("Preencha o campo Idade!")
        return
    }

    // Após checar CADA CAMPO continua o cadastro (os returns impedirão de chegar aqui caso algum campo falhe)

    nome = tagNome.value
    email = tagEmail.value
    telefone = tagTelefone.value
    idade = Number(tagIdade.value)

    // querySelecter é como se fosse o "getElementebyID" porem mais livre só colocando o nome dentro dos parênteses, ele pega aquela tag
    let tagBody = document.querySelector("body");

    if (idade < 18){
        alert("Não pode ser de cadastrados menores de idade")
        // Background = none é para remover a foto
        tagBody.style.background = "none"
        tagBody.style.backgroundColor = "red"

    }
    else {
        alert("Cadastro realizado com sucesso!")
        tagBody.style.background = "none"
        tagBody.style.backgroundColor = "green"
    }

}