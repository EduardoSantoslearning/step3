class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}`);
    } else if (p1.idade === p2.idade) {
        console.log(`${p1.nome} tem a mesma idade de ${p2.nome}`);
    } else {
        console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}`);
    }
}

const eduardo = new Pessoa('Eduardo', 23);
const pedro = new Pessoa('Pedro', 33);

compararPessoas(eduardo, pedro);
