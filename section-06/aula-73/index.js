// Métodos

const produto = { nome: 'Caneca', preco: 1.8};
const copiaProduto = {...produto}

const caneca = Object.assign({}, produto);
console.log(Object.keys(caneca));

console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'));

console.log(Object.entries(caneca));