// Aqui combinaremos duas classes

class Autor{
    // Método construtor - Monta o objeto
    constructor(nome, nascionalidade){
        this.nome = nome
        this.nascionalidade = nascionalidade
    }
    // Método apresentar (Lembrando que funções dentro de classe são chamadas de métodos)
    apresentar(){
        console.log("Este autor é " + this.nome + " e sou " + this.nascionalidade)
    }
}

class Livro{
    constructor(titulo, ano, autor, genero){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.genero = genero
    }

    mostrarInformacoes(){
        // Interpolação = Mostrar varíáveis no meio da string
        // Usamos acento grave ` ao invés de aspas
        // E para mostrar a variável usamos: $()
        console.log(`Título ${this.titulo}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Autor: ${this.autor.nome} - ${this.autor.nascionalidade}`)
        console.log(`Genero: ${this.genero}`)
    }
}

class Estante{
    constructor(posicao){
        this.posicao = posicao
        this.livros = []
    }
    addLivros(livro){
        this.livros.push(livro)
    }
    ListarLivros(){
        console.log("-".repeat(20))
        console.log("Livros da estante " + this.posicao)
        for (let Livro of this.livros){
            console.log(Livro.titulo)
        }
    }
}

// Criando Objetos da Classe
let autor1 = new Autor("JK Rowling", "Britânica")
let autor2 = new Autor("Brandon Sanderson", "Norte Americano")

let livro1 = new Livro("Harry Potter: O Prisioneiro Azkaban", 2000, autor1, "Fantasia")
let livro2 = new Livro("O Chamado do Cuco ", 2013, autor1, "Mistério")
let livro3 = new Livro("O Caminho dos Reis", 2010, autor2, "Fantasia")

let estante1 = new Estante("A5")
let estante2 = new Estante("B55")

estante1.addLivros(livro1)
estante1.addLivros(livro3)
estante1.addLivros(livro2)

estante1.ListarLivros()

autor1.apresentar()

livro1.mostrarInformacoes()
livro2.mostrarInformacoes()
livro3.mostrarInformacoes()

// Acessando atributos fora da classe

document.write(`<h1>Livro Escolhido: ${livro1.titulo}</h1>`)