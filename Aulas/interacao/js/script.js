// Descobrir TAGS que serão editadas
// Salvaremos as Tags em variáveis
// getElementById() -> Pegue a TAG que tenha o ID "x"
let tagTitulo = document.getElementById("titulo")
let tagCliques = document.getElementById("botao")
let tagBtnMudaTitulo = document.getElementById("mudarTitulo")

let contadorCliques = 0

// Para fazer botões fazerem algo ao serem clicados precisamos de funções
function mudarTituloH1() {
    tagTitulo.style.font = "52px";
    tagTitulo.style.color = "blue";
    tagTitulo.style.textShadow = "0px 0px 10px blue";
}

// Função para o botão contador
function aumentarContador() {
    // += quer dizer "pegue oq já tem nele e adicione 1"
    contadorCliques += 1
    // Editando oq está escrito dentro da TAG
    // Editando o "content" ou "conteúdo" dela
    if (contadorCliques == 1){
        tagCliques.innerHTML = "Fui Clicado " + contadorCliques + " vez"
    }
    else {
        tagCliques.innerHTML = "Fui Clicado " + contadorCliques + " vezes"
    }

}