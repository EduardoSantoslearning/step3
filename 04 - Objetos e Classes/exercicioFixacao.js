/* 
    1) Crie uma classe para representar carros.
    Os carros possuem uma marca, cor e um gasto médio de combustível por kilômetro rodado.
    Crie um método que dado a quantidade de quillômetros e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKM;
    }

    calcularGastoViagem(distanciaEmKm, precoCombustivel) {
        return ((distanciaEmKm * this.gastoMedioPorKm) * precoCombustivel).toFixed(2);
    }
}

const ka = new Carro('KA', 'preto', 1 / 12);
const gol = new Carro('GOL', 'prata', 1 / 10);

console.log(ka.calcularGastoViagem(150, 5.09));
console.log(gol.calcularGastoViagem(150, 5.09));

/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso/(altura*altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José para dizer o valor de seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(1);
    }
    classificarImc(){
        const imc = this.calculaImc();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return'Obesidade Grave';
        } 
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.calculaImc());
console.log(jose.classificarImc());


const eduardo = new Pessoa('Eduardo', 60, 1.85);
console.log(eduardo.calculaImc());
console.log(eduardo.classificarImc());


