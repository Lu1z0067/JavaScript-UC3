class pokemon{
    constructor(nome, tipo, nivel, hp, ataque, defesa, poder){
        this.nome = nome
        this.tipo = tipo
        this.nivel = nivel
        this.hp = hp
        this.ataque = ataque
        this.defesa = defesa
        this.poder = poder
    }

    atacar(){
        console.log(`O ${this.nome} nivel ${this.nivel} está atacando o seu oponente com o ${this.poder}`)
    }

    exibirDetalhes(){
        console.log("-".repeat(20))
        console.log(`
            Nome: ${this.nome}
            Tipo: ${this.tipo}
            Nivel: ${this.nivel}
            HP: ${this.hp}
            Ataque: ${this.ataque}
            Defesa: ${this.defesa}
            Poder: ${this.poder}
        `)
    }
}

let pokemon1 = new pokemon("Pikachu", "eletrico", 26, 56, 40, 30, "Choque do Trovão")
let pokemon2 = new pokemon("Charmander", "fogo", 27, 65, 40, 38, "brasas")
let pokemon3 = new pokemon("Squirtle", "água", 24, 50, 35, 40, "Pistola d'Água")

pokemon1.atacar()
pokemon1.exibirDetalhes()

pokemon2.atacar()
pokemon2.exibirDetalhes()

pokemon3.atacar()
pokemon3.exibirDetalhes()

