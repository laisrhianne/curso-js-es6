const pessoa = {
    nome: 'Laís',
    sobrenome: 'Lisboa',
    idade: 23,
    endereco: {
        rua: 'Rua da Lagosta',
        numero: 1285
    }
}

// Atribuição via desestruturação
const {nome: n, sobrenome = '', endereco: {rua, numero}} = pessoa
console.log(n, rua, numero);
// Sobrenome tem valor padrão
