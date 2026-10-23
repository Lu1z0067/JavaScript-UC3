// Slides
const imagemDestaque = ["img/Natal.png", "img/halloween.png", "img/bolo.png"]

const tagImagemDestaque = document.getElementById("imagemDestaque")

let imagemAtual = 0

function mostrarImagem(){
    tagImagemDestaque.src = imagemDestaque[imagemAtual]

}

function proximaImagem(){
    imagemAtual++

    if (imagemAtual >= imagemDestaque.length){
        imagemAtual = 0
    }
    
    mostrarImagem()
}

setInterval(proximaImagem, 4000)

// Produtos

const tagProdutosDestaque = document.getElementById("produtosDestaque")
const tagProdutosNatal = document.getElementById("produtosNatal")
const tagProdutosHalloween = document.getElementById("produtosHalloween")
const tagIngrediente = document.getElementById("produtosIngrediente")
const tagEmbalagem = document.getElementById("produtosEmbalagem")

const produtos = [
    {
        imagem: "img/chocotone.png",
        descricao: "Chocotone",
        valor: 18
    },
    {
        imagem: "img/biscoitos.png",
        descricao: "Biscoitos de Natal",
        valor: 15
    },
    {
        imagem: "img/cupcakes.png",
        descricao: "Cupcakes de Halloween",
        valor: 20
    }
]

const produtosNatal = [
    {
        imagem: "img/cookie_natal.png",
        descricao: "Cookies de natal",
        valor: 15
    },
    {
        imagem: "img/bolo_natal.png",
        descricao: "Bolo de natal",
        valor: 30
    },
    {
        imagem: "img/cupcake_natal.png",
        descricao: "Cupcake de natal",
        valor: 20
    }
]

const produtosHalloween = [
    {
        imagem: "img/cupcake_halloween.png",
        descricao: "Cupcake de halloween",
        valor: 20
    },
    {
        imagem: "img/bolo_halloween.png",
        descricao: "Bolo de halloween",
        valor: 30
    },
    {
        imagem: "img/torta_halloween.png",
        descricao: "Torta de halloween",
        valor: 28
    }
]

const ingredientes = [
    {
        imagem: "img/",
        descricao: "Confeitos coloridos",
        valor: 10
    },
    {
        imagem: "img/",
        descricao: "Granulado de chocolate",
        valor: 12
    },
    {
        imagem: "img/",
        descricao: "Creme de leite",
        valor: 4.50
    }
]

const embalagens = [
    {
        imagem: "img/embalagam_bolo.png"
    }
]

function mostrarProduto(elemento, lista){
        elemento.innerHTML = lista.map(produto => 
        `
        <div class="item">
            <img src="${produto.imagem}" alt="${produto.descricao}" class="imgProdutos">
            <h3>${produto.descricao}</h3>
            <p>R$ ${produto.valor}</p>

            <input type="number" name="" id="quant" placeholder="0">
        </div>
        `).join("")

}



mostrarProduto(tagProdutosDestaque, produtos) 
mostrarProduto(tagProdutosNatal, produtosNatal) 
mostrarProduto(tagProdutosHalloween, produtosHalloween) 
mostrarProduto(tagIngrediente, ingredientes)