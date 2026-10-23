// "Const" é mais usado do que "let" para variáveis de tag
const tagSelect = document.getElementById("linguagem")
const btnSelecionar = document.getElementById("selecionar")

btnSelecionar.addEventListener('click', () => {
    let linguagemSelecionada = tagSelect.value
    if (linguagemSelecionada == "javascript"){
        alert("Aí sim meu chapa!")
    }
})