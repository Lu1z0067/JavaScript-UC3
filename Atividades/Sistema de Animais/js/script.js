class Animal{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

class Cachorro extends Animal{
    constructor(nome, idade){
        super(nome, idade)
        this.som = "Au Au"
    }

    emitirSom(){
        console.log(`O ${this.nome} tem ${this.idade} e faz ${this.som}`)
    }
}

class Gato extends Animal{
    constructor(nome, idade){
        super(nome, idade)
    }

    emitirSom(){
        console.log(`O ${this.nome} tem ${this.idade} e faz Miau Miau`) // ou muda apenas pelo console.log. já definindo o som por ele
    }
}

let animal1 = new Cachorro ("Cachorro", 9)
let animal2 = new Gato ("Gato", 12)

animal1.emitirSom()
animal2.emitirSom()