let tagNome = document.getElementById("nome");
let tagFeliz = document.getElementById("feliz");
let tagCansado = document.getElementById("cansado");
let tagBravo = document.getElementById("bravo");

let humor = "";

function usuarioHumor(Humor){
    if (Humor == "feliz"){
        humor = "feliz"
    }
    else if (Humor == "cansado"){
        humor = "cansado"
    }
    else if (Humor == "bravo"){
        humor = "bravo"
    }
}

function exibir(){
    // (.value): Deve ficar dentro da função para pegar a informação atual no momento da ação do usuário.
    let nome = tagNome.value;

    if (nome == "" || humor == ""){
        alert("Preencha o formulário!")
    }
    else{
        document.getElementById("result").innerHTML = nome + " está " + humor;
        document.querySelector(".caixa2").style.marginBottom = "-650px";
    }
}