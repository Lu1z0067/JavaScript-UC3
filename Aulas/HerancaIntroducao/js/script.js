class Veiculo{
    constructor(modelo, marca){
        this.modelo = modelo
        this.marca = marca
        this.velocidade = 0
    }
    acelerar(){
        this.velocidade += 10
        console.log(`O ${this.marca} - ${this.marca} acelerou e agora está a ${this.velocidade} Km/h`)
    }
}

// A classe Moto é
class Moto extends Veiculo{
    constructor(modelo, marca, cilindradas){
        // Já que ele é filho do Veículo, as informações (Que o veículo controla) deixamos para eçe [Veículo]
        // Chamamos o método construtor do pai (Veículo) com a palavra "super"
        super(modelo, marca)
        this.cilindradas = cilindradas + "cc"
    }
    empinar(){
        console.log(`A moto ${this.marca} - ${this.modelo} está empinando`)
    }
}

class Carro extends Veiculo{
    constructor(modelo, marca, portas){
        super(modelo, marca)
        this.portas = portas
    }
    fazerBaliza(){
        console.log(`O carro ${this.marca} - ${this.modelo} está fazendo baliza`)
    }
}

// Utilizando as Classes criando objetos com heranças

let moto1 = new Moto("Fan", "Honda", 150)
let moto2 = new Moto("CBR", "Honda", 300)

let carro1 = new Carro("Marea", "Fiat", 4)
let carro2 = new Carro("Monza", "Chevrolet", 4)

// 
moto1.acelerar()
moto1.acelerar()
moto1.acelerar()

carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()

// Usando métodos especificos das classes filhas

moto1.empinar()

carro1.fazerBaliza()