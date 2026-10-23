// Override = sobreescrever métodos/funções

class Cliente {
    constructor(nome, cidade){
        this.nome = nome
        this.cidade = cidade
    }

    // O valor é externo/personalizado
    pagarConta(valor){
        console.log(`O cliente ${this.nome} pagou R$ ${valor}`)
    }
}

class ClienteVIP extends Cliente{
    constructor(nome, cidade, dataParticipacao){
        super(nome, cidade)
        this.dataParticipacao = dataParticipacao
    }
    // Realizando o override
    // Override é quando pegamos um método/função do pai e "sobreescrevemos"/"editamos" ela aqui no filho
    // Mudando seu comportamento apenas para objetos dessa filhos
    pagarConta(valor){
        let valorComDesconto = valor * 0.85
        console.log(`O cliente ${this.nome} pagou R$ ${valorComDesconto}`)
    }
}

let cliente1 = new Cliente("Zeca Galhão")
let cliente2 = new ClienteVIP("Aron Bado")
let cliente3 = new ClienteVIP("Mila Ascaro")

cliente1.pagarConta(5000)
console.log("-".repeat(20))
cliente2.pagarConta(5000)
console.log("-".repeat(20))
cliente3.pagarConta(2000)