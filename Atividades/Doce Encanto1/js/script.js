// Doce Encanto — catálogo, busca, quantidades e carrinho.

const imagensDestaque = [
    "img/Natal.png",
    "img/halloween.png",
    "img/bolo.png"
];

const imagemDestaque = document.getElementById("imagemDestaque");
const pontosSlide = document.querySelectorAll(".ponto-slide");
let imagemAtual = 2;
let temporizadorSlide;

function mostrarImagem(indice) {
    imagemAtual = indice;
    imagemDestaque.src = imagensDestaque[imagemAtual];
    pontosSlide.forEach((ponto, i) => {
        ponto.classList.toggle("ativo", i === imagemAtual);
    });
}

function proximaImagem() {
    mostrarImagem((imagemAtual + 1) % imagensDestaque.length);
}

function iniciarSlides() {
    clearInterval(temporizadorSlide);
    temporizadorSlide = setInterval(proximaImagem, 5000);
}

pontosSlide.forEach((ponto) => {
    ponto.addEventListener("click", () => {
        mostrarImagem(Number(ponto.dataset.slide));
        iniciarSlides();
    });
});

imagemDestaque.addEventListener("error", () => {
    // Se uma imagem ainda não foi enviada, mantém o espaço do destaque sem quebrar o site.
    imagemDestaque.classList.add("imagem-indisponivel");
});
mostrarImagem(imagemAtual);
iniciarSlides();

// Os caminhos das imagens podem ser ajustados quando os arquivos finais forem enviados.
const produtos = [
    { id: "chocotone", imagem: "img/chocotone.png", descricao: "Chocotone", valor: 18, categoria: "Destaques" },
    { id: "biscoitos-natal", imagem: "img/biscoitos.png", descricao: "Biscoitos de Natal", valor: 15, categoria: "Destaques" },
    { id: "cupcakes-halloween", imagem: "img/cupcakes.png", descricao: "Cupcakes de Halloween", valor: 20, categoria: "Destaques" }
];

const produtosNatal = [
    { id: "cookies-natal", imagem: "img/cookie_natal.png", descricao: "Cookies de Natal", valor: 15, categoria: "Natal" },
    { id: "bolo-natal", imagem: "img/bolo_natal.png", descricao: "Bolo de Natal", valor: 30, categoria: "Natal" },
    { id: "cupcake-natal", imagem: "img/cupcake_natal.png", descricao: "Cupcake de Natal", valor: 20, categoria: "Natal" }
];

const produtosHalloween = [
    { id: "cupcake-halloween", imagem: "img/cupcake_halloween.png", descricao: "Cupcake de Halloween", valor: 20, categoria: "Halloween" },
    { id: "bolo-halloween", imagem: "img/bolo_halloween.png", descricao: "Bolo de Halloween", valor: 30, categoria: "Halloween" },
    { id: "torta-halloween", imagem: "img/torta_halloween.png", descricao: "Torta de Halloween", valor: 28, categoria: "Halloween" }
];

const ingredientes = [
    { id: "confeitos-coloridos", imagem: "img/confeitos.png", descricao: "Confeitos coloridos", valor: 10, categoria: "Ingredientes" },
    { id: "granulado-chocolate", imagem: "img/gotas_chocolate.png", descricao: "Gotas de chocolate", valor: 12, categoria: "Ingredientes" },
    { id: "creme-leite", imagem: "img/corante.png", descricao: "Corantes Alimentícios", valor: 4.50, categoria: "Ingredientes" }
];

const embalagens = [
    { id: "embalagem-bolo", imagem: "img/embalagem_bolo.jpg", descricao: "Embalagem para bolo", valor: 8, categoria: "Embalagens" },
    { id: "embalagem-doces", imagem: "img/embalagem_brigadeiro.png", descricao: "Saco kraft para biscoitos e doces", valor: 3.50, categoria: "Embalagens" },
    { id: "caixa-doces", imagem: "img/caixa_cupcake.png", descricao: "Caixa para doces", valor: 6, categoria: "Embalagens" }
];

const secoes = [
    { elemento: document.getElementById("produtosDestaque"), lista: produtos },
    { elemento: document.getElementById("produtosNatal"), lista: produtosNatal },
    { elemento: document.getElementById("produtosHalloween"), lista: produtosHalloween },
    { elemento: document.getElementById("produtosIngrediente"), lista: ingredientes },
    { elemento: document.getElementById("produtosEmbalagem"), lista: embalagens }
];

const carrinho = new Map();
const moeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const todosProdutos = [...produtos, ...produtosNatal, ...produtosHalloween, ...ingredientes, ...embalagens];

function criarCartao(produto) {
    return `
        <article class="item" data-produto-id="${produto.id}">
            <div class="imagem-produto-wrap">
                <img
                    src="${produto.imagem}"
                    alt="${produto.descricao}"
                    class="imgProdutos"
                    loading="lazy"
                    onerror="this.classList.add('imagem-indisponivel'); this.removeAttribute('src');"
                >
            </div>
            <div class="info-produto">
                <p class="categoria-produto">${produto.categoria}</p>
                <h3>${produto.descricao}</h3>
                <p class="preco-produto">${moeda.format(produto.valor)}</p>
                <div class="controles-quantidade" aria-label="Quantidade de ${produto.descricao}">
                    <button class="subtrai" type="button" aria-label="Diminuir ${produto.descricao}">−</button>
                    <output class="valor" aria-live="polite">0</output>
                    <button class="soma" type="button" aria-label="Aumentar ${produto.descricao}">+</button>
                </div>
                <button class="adicionar-carrinho" type="button">Adicionar ao carrinho</button>
            </div>
        </article>
    `;
}

function mostrarProduto(elemento, lista) {
    if (!elemento) return;
    elemento.innerHTML = lista.map(criarCartao).join("");
}

// Um único ouvinte por seção atende aos botões de todos os cartões nela.
secoes.forEach(({ elemento }) => {
    mostrarProduto(elemento, todosProdutos.filter(produto => {
        return elemento.id === "produtosDestaque" ? produtos.some(p => p.id === produto.id)
            : elemento.id === "produtosNatal" ? produtosNatal.some(p => p.id === produto.id)
            : elemento.id === "produtosHalloween" ? produtosHalloween.some(p => p.id === produto.id)
            : elemento.id === "produtosIngrediente" ? ingredientes.some(p => p.id === produto.id)
            : embalagens.some(p => p.id === produto.id);
    }));

    elemento.addEventListener("click", (evento) => {
        const botao = evento.target.closest("button");
        if (!botao) return;

        const cartao = botao.closest(".item");
        if (!cartao) return;

        const id = cartao.dataset.produtoId;
        const produto = todosProdutos.find(item => item.id === id);
        const output = cartao.querySelector(".valor");
        let quantidade = Number(output.textContent);

        if (botao.classList.contains("soma")) {
            quantidade += 1;
            output.textContent = quantidade;
        }

        if (botao.classList.contains("subtrai") && quantidade > 0) {
            quantidade -= 1;
            output.textContent = quantidade;
        }

        if (botao.classList.contains("adicionar-carrinho")) {
            const quantidadeSelecionada = Number(output.textContent);
            if (quantidadeSelecionada < 1) {
                output.textContent = "1";
                adicionarAoCarrinho(produto, 1);
            } else {
                adicionarAoCarrinho(produto, quantidadeSelecionada);
            }
        }
    });
});

// Busca por nome/categoria: esconde os cartões que não combinam com o texto.
const campoPesquisa = document.getElementById("campoPesquisa");
const formPesquisa = document.getElementById("formPesquisa");
const avisoBusca = document.getElementById("avisoBusca");

function filtrarProdutos() {
    const termo = campoPesquisa.value.trim().toLocaleLowerCase("pt-BR");
    let encontrados = 0;

    document.querySelectorAll(".item").forEach((cartao) => {
        const combina = cartao.textContent.toLocaleLowerCase("pt-BR").includes(termo);
        cartao.hidden = !combina;
        if (combina) encontrados++;
    });

    document.querySelectorAll(".secao-produtos").forEach((secao) => {
        const cardsVisiveis = [...secao.querySelectorAll(".item")].some(card => !card.hidden);
        secao.hidden = Boolean(termo) && !cardsVisiveis;
    });

    avisoBusca.hidden = !termo;
    avisoBusca.textContent = termo
        ? (encontrados ? `${encontrados} produto(s) encontrado(s) para “${campoPesquisa.value.trim()}”.` : `Nenhum produto encontrado para “${campoPesquisa.value.trim()}”.`)
        : "";
}

campoPesquisa.addEventListener("input", filtrarProdutos);
formPesquisa.addEventListener("submit", (evento) => {
    evento.preventDefault();
    filtrarProdutos();
    document.querySelector(".secao-produtos:not([hidden])")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Carrinho lateral
const painelCarrinho = document.getElementById("painelCarrinho");
const fundoModal = document.getElementById("fundoModal");
const abrirCarrinho = document.getElementById("abrirCarrinho");
const fecharCarrinho = document.getElementById("fecharCarrinho");
const itensCarrinho = document.getElementById("itensCarrinho");
const contadorCarrinho = document.getElementById("contadorCarrinho");
const totalCarrinho = document.getElementById("totalCarrinho");
const finalizarPedido = document.getElementById("finalizarPedido");
const dialogPedido = document.getElementById("dialogPedido");
const resumoPedido = document.getElementById("resumoPedido");

function abrirPainelCarrinho() {
    painelCarrinho.classList.add("aberto");
    painelCarrinho.setAttribute("aria-hidden", "false");
    fundoModal.hidden = false;
    document.body.classList.add("sem-rolagem");
    fecharCarrinho.focus();
}

function fecharPainelCarrinho() {
    painelCarrinho.classList.remove("aberto");
    painelCarrinho.setAttribute("aria-hidden", "true");
    fundoModal.hidden = true;
    document.body.classList.remove("sem-rolagem");
    abrirCarrinho.focus();
}

abrirCarrinho.addEventListener("click", abrirPainelCarrinho);
fecharCarrinho.addEventListener("click", fecharPainelCarrinho);
fundoModal.addEventListener("click", fecharPainelCarrinho);
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && painelCarrinho.classList.contains("aberto")) fecharPainelCarrinho();
});

function adicionarAoCarrinho(produto, quantidade) {
    if (!produto || quantidade < 1) return;
    const atual = carrinho.get(produto.id);
    carrinho.set(produto.id, {
        produto,
        quantidade: (atual?.quantidade || 0) + quantidade
    });
    atualizarCarrinho();
    abrirPainelCarrinho();
}

function alterarQuantidadeCarrinho(id, delta) {
    const item = carrinho.get(id);
    if (!item) return;
    item.quantidade += delta;
    if (item.quantidade <= 0) carrinho.delete(id);
    else carrinho.set(id, item);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itens = [...carrinho.values()];
    const quantidadeTotal = itens.reduce((soma, item) => soma + item.quantidade, 0);
    const valorTotal = itens.reduce((soma, item) => soma + item.produto.valor * item.quantidade, 0);

    contadorCarrinho.textContent = quantidadeTotal;
    totalCarrinho.textContent = moeda.format(valorTotal);

    if (!itens.length) {
        itensCarrinho.innerHTML = '<p class="carrinho-vazio">Seu carrinho ainda está vazio. Escolha algo delicioso! 🍰</p>';
        return;
    }

    itensCarrinho.innerHTML = itens.map(({ produto, quantidade }) => `
        <article class="item-carrinho">
            <div class="miniatura-carrinho"><img src="${produto.imagem}" alt="" onerror="this.removeAttribute('src')"></div>
            <div class="detalhe-carrinho">
                <h3>${produto.descricao}</h3>
                <p>${moeda.format(produto.valor)} cada</p>
                <div class="controles-quantidade controles-carrinho">
                    <button type="button" class="menos-carrinho" data-id="${produto.id}" aria-label="Diminuir ${produto.descricao}">−</button>
                    <output>${quantidade}</output>
                    <button type="button" class="mais-carrinho" data-id="${produto.id}" aria-label="Aumentar ${produto.descricao}">+</button>
                    <button type="button" class="remover-carrinho" data-id="${produto.id}">Remover</button>
                </div>
            </div>
            <strong>${moeda.format(produto.valor * quantidade)}</strong>
        </article>
    `).join("");
}

itensCarrinho.addEventListener("click", (evento) => {
    const botao = evento.target.closest("button");
    if (!botao) return;
    const id = botao.dataset.id;
    if (botao.classList.contains("mais-carrinho")) alterarQuantidadeCarrinho(id, 1);
    if (botao.classList.contains("menos-carrinho")) alterarQuantidadeCarrinho(id, -1);
    if (botao.classList.contains("remover-carrinho")) {
        carrinho.delete(id);
        atualizarCarrinho();
    }
});

finalizarPedido.addEventListener("click", () => {
    if (carrinho.size === 0) {
        itensCarrinho.innerHTML = '<p class="carrinho-vazio">Adicione pelo menos um produto antes de continuar.</p>';
        return;
    }

    const resumo = [...carrinho.values()].map(({ produto, quantidade }) =>
        `${quantidade} × ${produto.descricao} — ${moeda.format(produto.valor * quantidade)}`
    );
    const total = [...carrinho.values()].reduce((soma, item) => soma + item.produto.valor * item.quantidade, 0);
    resumoPedido.innerHTML = `${resumo.map(linha => `<span class="linha-resumo">${linha}</span>`).join("")}<strong class="total-resumo">Total: ${moeda.format(total)}</strong>`;
    fecharPainelCarrinho();
    dialogPedido.showModal();
});

document.getElementById("anoAtual").textContent = new Date().getFullYear();
atualizarCarrinho();
