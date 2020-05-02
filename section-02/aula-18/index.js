// Objetos (básico)

// const pessoa = {
//     nome: 'Laís',
//     sobrenome: 'Rhianne',
//     idade: 23
// };

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

const pessoa = {
    nome: 'Laís',
    sobrenome: 'Rhianne',
    idade: 23,
    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();