
// Pegando a TAG LÁ DO HTML
// Aqui, vamos descobrir a tag que será editada, e vamos salvar a TAG em uma variável
// getElementById = "Pegue a tag pelo o id "tal"
let tagBtn = document.getElementById("botao") // Se usa o ID do HTML

// Essa função será chamada só quando o botão for clicado!

function evento(){
    alert("Fui clicado!")
    // Editando a TAG
    tagBtn.style.backgroundColor = "red" // tagBtn é a variável criada, style para mudar o estilo, mas oq -> a cor do fundo(backgroundColor) para vermelho, após clicar no botao
}
