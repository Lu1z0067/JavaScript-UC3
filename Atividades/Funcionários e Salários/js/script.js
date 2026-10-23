class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
        return this.salarioBase;
    }
}

class Gerente extends Funcionario {
    calcularSalario() {
        return this.salarioBase * 1.20;
    }
}

class Desenvolvedor extends Funcionario {
    calcularSalario() {
        return this.salarioBase * 1.10;
    }
}

class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    calcularTotalSalarios() {
        let total = 0;

        for (const funcionario of this.funcionarios) {
            total += funcionario.calcularSalario();
        }

        return total;
    }

    listarFuncionarios() {
        console.log(`\nDepartamento: ${this.nome}`);
        console.log("-----------------------------");

        for (const funcionario of this.funcionarios) {
            console.log(
                `Nome: ${funcionario.nome} | ` +
                `Tipo: ${funcionario.constructor.name} | ` +
                `Salário: R$ ${funcionario.calcularSalario().toFixed(2)}`
            );
        }

        console.log("-----------------------------");
        console.log(
            `Total de salários: R$ ${this.calcularTotalSalarios().toFixed(2)}`
        );
    }
}

// Criando os funcionários
const gerente = new Gerente("Carlos", 5000);
const desenvolvedor1 = new Desenvolvedor("Ana", 4000);
const desenvolvedor2 = new Desenvolvedor("Pedro", 3500);

// Criando o departamento
const departamento = new Departamento("Tecnologia");

// Adicionando os funcionários
departamento.adicionarFuncionario(gerente);
departamento.adicionarFuncionario(desenvolvedor1);
departamento.adicionarFuncionario(desenvolvedor2);

// Listando funcionários e salários
departamento.listarFuncionarios();