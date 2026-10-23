// Botões de Página
const paginas = document.querySelectorAll(".pagina")
//Trocar as Páginas

let pagAtual = 0

function mostrarPag(index){
    paginas.forEach(pag => {
        pag.classList.remove("ativo")
    })

    pagAtual = index
    paginas[pagAtual].classList.add("ativo")
}

document.querySelectorAll(".btnNext").forEach(btn => {
    btn.addEventListener("click", () => {
        if (pagAtual < paginas.length - 1){
            mostrarPag(pagAtual + 1)
        }
    })
})

document.querySelectorAll(".btnLast").forEach(btn => {
    btn.addEventListener("click", () => {
        if (pagAtual > 0){
            mostrarPag(pagAtual - 1)
        }
    })
})

document.getElementById("voltar").addEventListener("click", () => {
    mostrarPag(pagAtual = 0)
})