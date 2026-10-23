// Classes são representações do mundo real
// Servem para que um determinado "objeto" no mundo real existe no código
// Muitas vezes utilizando em cadastros
// Não são muito diferentes de "objetos" do JavaScript
// Mas possuem muito mais possiblidades
class Carro {
    // O chamado "Método Construtor" ele é responsável por construir os objetos (Os carros cadastrados)
    constructor(marca, modelo, ano, cor){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.velocidade = 0
    }

    // Ações são funções
    // Mas aqui não usamos a palavara "function"
    // Funções = Métodos
    acelerar(){
        this.velocidade += 10
        console.log("O carro " + this.marca + " - " + this.modelo + " esta a " + this.velocidade + " Km/h")
        console.log("-".repeat(20))
    }
}

// Gerando objetos da classe carro
// Gerando cadastro de carro

// let variável = new NomeClasse()
let carro1 = new Carro("Fiat", "Marea", 2005, "Prata")
let carro2 = new Carro("Peugeout", "206", 2003, "Preto")

// Mostrando o Carro
console.log("Carro 1: " + carro1.marca + " - " + carro1.modelo)

// Executando uma "Ação"

carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
carro1.acelerar()

carro2.acelerar()