let tagIngresso = document.getElementById("ingresso")
let tagFilme = document.getElementById("filme")

let filmeSelecionado = tagFilme.value
let quantidadeIngresso = tagIngresso.value

const tagGenero = document.getElementById("genero")


document.getElementById("result").addEventListener("click", () => {
    switch (filmeSelecionado){
        case "chefao":
            tagGenero.innerHTML = "oi"
            break
    
        case "matrix":
    
    }
    
})