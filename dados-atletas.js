class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas.sort((a, b) => a - b);;
    }

    calculaCategoria() {

        /*   REGRAS
        Infantil: 9 a 11 anos
        Juvenil: 12 e 13 anos
        Intermediário: 14 e 15 anos
        Adulto: 16 a 30 anos
        Sem categoria: demais idades
         */
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        }
        if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil"
        }
        if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário"
        }
        if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
        } else {
            return "Sem categoria"
        }
    };

    calculaIMC() {
        //Fórmula: imc = peso / (altura x altura)

        const imc = this.peso / (this.altura * this.altura)
        return imc
    };
    calculaMediaValida() {
        let soma = 0;
        let notasValidas = this.notas.slice(1, 4);

        notasValidas.forEach((nota) => {
            soma = soma + nota
            return soma
        });

        return soma / notasValidas.length;
    };
    obtemNomeAtleta() {
        return `Nome: ${this.nome}`
    };
    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`
    };
    obtemPesoAtleta() {
        return `Peso: ${this.peso}`
    };

    obtemAlturaAtleta() {
        return `Altura: ${this.altura}`
    };

    obtemNotasAtleta() {
        return `Notas: ${this.notas}`
    };
    obtemCategoria() {
        const categoria = this.calculaCategoria()
        return `Categoria: ${categoria}`
    };
    obtemIMC() {
        const IMC = this.calculaIMC()
        return `IMC: ${IMC}`
    };
    obtemMediaValida() {
        const media = this.calculaMediaValida()
        return `Média válida: ${media}`
    };
};

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())
