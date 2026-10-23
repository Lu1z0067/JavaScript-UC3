class Autor{
    constructor(nome, nacionalidade){
        this.nome = nome
        this.nacionalidade = nacionalidade
    }
}

class Livro{
    constructor(livro, autor, preco){
        this.livro = livro
        this.autor = autor
        this.preco = preco
    }
    
    exibirDetalhes(){
        console.log(`O ${this.livro} foi criado pelo ${this.autor.nacionalidade} ${this.autor.nome} e custa R$ ${this.preco}`)
    }
}

class Cliente{
    constructor(nome){
        this.livrosComprados = []
        this.nome = nome
    }
    
    addLivros(livro){
        this.livrosComprados.push(livro)
    }

    exibirLivrosComprados(){
        console.log(`Livros comprados por ${this.nome}`)
        this.livrosComprados.forEach(item => {
            console.log(`- ${item.livro}`)
        })
    }
}

// Livros

const Autor1 = new Autor("Brendan Eich", "norte-americano")
const Livro1 = new Livro("Use a cabeça JavaScript", Autor1, 112)

const Autor2 = new Autor(" Guido van Rossum", "holandesa")
const Livro2 = new Livro("Use a cabeça Python", Autor1, 125)

// Cliente

const Client1 = new Cliente("Carlos")

// Compras

Client1.addLivros(Livro1)
Client1.addLivros(Livro2)

// Exibir

Livro1.exibirDetalhes()
Livro2.exibirDetalhes()
Client1.exibirLivrosComprados()


// O projeto está incompleto, só falta exibir o valor
// Depois eu mando a versão final 