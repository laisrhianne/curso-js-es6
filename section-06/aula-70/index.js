// Revisão Objetos

// Literal
const pessoa1 = {
    nome: 'Laís',
    sobrenome: 'Lisboa'
};
console.log(pessoa1['nome']);
console.log(pessoa1.sobrenome);

// Construtor
const pessoa2 = new Object();
pessoa2.nome = 'Laís';
pessoa2.sobrenome = 'Lisboa';
pessoa2.falarNome = function() {
    console.log(`Meu nome é: ${this.nome}`);
}
pessoa2.falarNome();
Object.freeze(pessoa2);