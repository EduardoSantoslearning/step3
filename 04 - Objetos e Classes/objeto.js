// Objetos = coleção dinâmica de chave->valor
const pessoa = {
    nome: 'Eduardo Santos',
    idade: 23,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
//console.log(pessoa.nome);
//console.log(pessoa.idade);
//console.log(pessoa);

//pessoa.altura = 1.85;  //inclusão dinâmica
//console.log(eduardo);

//delete pessoa.nome;    //exclusão
//console.log(pessoa);

pessoa.descrever();
