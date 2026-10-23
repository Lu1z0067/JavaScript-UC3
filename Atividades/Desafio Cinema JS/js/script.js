const tagSelecionar = document.getElementById("selecionar");
const btnResult = document.getElementById("result");
const btnNext = document.getElementsByClassName("botaoIr");
const btnVoltar = document.getElementsByClassName("botaoVoltar");

const tagCodigo = document.getElementById("codigo");
const tagGenero = document.getElementById("genero");

let movieEscolhido = "";
let quantIngresso = 0;
let comboFood = codigo;

// Lista de Filmes

btnResult.addEventListener('click', () => {
    let movieEscolhido = tagSelecionar.value
    
    if(movieEscolhido == "chefao"){
        tagCodigo.innerHTML = "D039"
        tagGenero.innerHTML = "Máfia"
    }
    else if (movieEscolhido == "matrix"){
        tagCodigo.innerHTML = "B678"
        tagGenero.innerHTML = "Ação"
    }
    else if (movieEscolhido == "senhorAnel"){
        tagCodigo.innerHTML = "D889"
        tagGenero.innerHTML = "Fantasia"
    }
    else if (movieEscolhido == "interestelar"){
        tagCodigo.innerHTML = "M912"
        tagGenero.innerHTML = "Ficção Científica"
    }
    else {
        tagCodigo.innerHTML = "G007"
        tagGenero.innerHTML = "Guerra"
    }
});

// Transitar Paginas

const paginas = document.getElementsByClassName("pagina");
let paginaAtual = 0

function mostrarPagina(){
    for (let i = 0; i < paginas.length; i++){
        paginas[i].classList.remove("ativo")
    }

    paginas[paginaAtual].classList.add("ativo")

}

function proximaPagina(){
    paginaAtual++
    
    if (paginaAtual > paginas.length){
        paginaAtual = 0
    }

    mostrarPagina()
}

function paginaAnterior(){
    paginaAtual--
    
    if (paginaAtual < paginas.length){
        paginaAtual = 0
    }

    mostrarPagina()
}

btnNext.addEventListener("click", proximaPagina)
btnVoltar.addEventListener("click", paginaAnterior)

let comboCodigo = document.getElementById("cod")

function codigo(){
    switch (comboCodigo){
        case "COMBO-005":
            codigo = comboCodigo.value
            break
            
            case "COMBO-072":
                codigo = comboCodigo.value
                break
                
            case "COMBO-777":
                codigo = comboCodigo.value
                break
                    
            case "COMBO-215":
                codigo = comboCodigo.value
                    break
                        
    }
}

mostrarPagina()