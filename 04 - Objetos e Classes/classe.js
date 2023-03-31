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

//Classe é a definição e instância a ocorrência

const eduardo = new Pessoa('Eduardo', 23);

const pedro = new Pessoa('Pedro', 33);

console.log(eduardo);
console.log(pedro);

eduardo.descrever();
pedro.descrever();