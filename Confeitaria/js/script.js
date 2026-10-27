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

// Soma e Subtrair
const btnSoma = document.getElementById("soma")
const btnSubtrai = document.getElementById("subtrai")

const produtos = [
    {
        imagem: "img/chocotone.png",
        descricao: "Chocotone",
        categoria: "Destaque",
        valor: 18
    },
    {
        imagem: "img/biscoitos.png",
        descricao: "Biscoitos de Natal",
        categoria: "Destaque",
        valor: 15
    },
    {
        imagem: "img/cupcakes.png",
        descricao: "Cupcakes de Halloween",
        categoria: "Destaque",
        valor: 20
    }
]

const produtosNatal = [
    {
        imagem: "img/cookie_natal.png",
        descricao: "Cookies de natal",
        categoria: "Natal",
        valor: 15
    },
    {
        imagem: "img/bolo_natal.png",
        descricao: "Bolo de natal",
        categoria: "Natal",
        valor: 30
    },
    {
        imagem: "img/cupcake_natal.png",
        descricao: "Cupcake de natal",
        categoria: "Natal",
        valor: 20
    }
]

const produtosHalloween = [
    {
        imagem: "img/cupcake_halloween.png",
        descricao: "Cupcake de halloween",
        categoria: "Halloween",
        valor: 20
    },
    {
        imagem: "img/bolo_halloween.png",
        descricao: "Bolo de halloween",
        categoria: "Halloween",
        valor: 30
    },
    {
        imagem: "img/torta_halloween.png",
        descricao: "Torta de halloween",
        categoria: "Halloween",
        valor: 28
    }
]

const ingredientes = [
    {
        imagem: "img/confeitos.png",
        descricao: "Confeitos coloridos",
        categoria: "Ingrediente",
        valor: 10
    },
    {
        imagem: "img/gotas_chocolate.png",
        descricao: "Gotas de chocolate",
        categoria: "Ingrediente",
        valor: 12
    },
    {
        imagem: "img/corante.png",
        descricao: "Creme de leite",
        categoria: "Ingrediente",
        valor: 4.50
    }
]

const embalagens = [
    {
        imagem: "img/embalagem_bolo.jpg",
        descricao: "Embalagem para bolo",
        categoria: "Embalagem",
        valor: 20
    },
    {
        imagem: "img/embalagem_brigadeiro.png",
        descricao: "Embalagem de brigadeiro",
        categoria: "Embalagem",
        valor: 18
    },
    {
        imagem: "img/caixa_cupcake.png",
        descricao: "Embalagem de cupcake",
        categoria: "Embalagem",
        valor: 18
    }
]


let quantidadeProduto = 0

function mostrarProduto(elemento, lista){


    elemento.innerHTML = lista.map(produto => 
    `
    <div class="item">
        <img src="${produto.imagem}" alt="${produto.descricao}" class="imgProdutos">
        <h4>${produto.categoria}</h3>
        <h3>${produto.descricao}</h3>
        <p>R$ ${produto.valor}</p>

        <div class="valores">
            <button class="soma">+</button>
            <h2 class="valor">0<h2>
            <button class="subtrai">-</button>
        </div>

        <button id="adicionar">Adicionar no carrinho</button>
    </div>
    `).join("")

    elemento.addEventListener("click", (evento) => {

        const item = evento.target.closest(".item");
    
        if (!item) return;
    
        const quantidade = item.querySelector(".valor");
    
        if (evento.target.classList.contains("soma")) {
            quantidade.textContent = Number(quantidade.textContent) + 1;
        }
    
        if (evento.target.classList.contains("subtrai")) {
            const atual = Number(quantidade.textContent);
    
            if (atual > 0) {
                quantidade.textContent = atual - 1;
            }
        }
    
    });

}

mostrarProduto(tagProdutosDestaque, produtos) 
mostrarProduto(tagProdutosNatal, produtosNatal) 
mostrarProduto(tagProdutosHalloween, produtosHalloween) 
mostrarProduto(tagIngrediente, ingredientes)
mostrarProduto(tagEmbalagem, embalagens)

// Abrir carrinho

const btnCarrinho = document.getElementById("btn-carrinho")

btnCarrinho.addEventListener("click", () => {
    document.querySelector(".pagamento").style.display = "flex"
})
