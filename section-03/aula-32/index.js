// Atribuição via desestruturação

// const [a, b, c] = [1, 2, 3];
// const numeros = [1, 2, 3];
// const [A, B, C] = numeros;

// ... rest, ... spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiro, segundo, ...resto] = numeros;
console.log(resto);

const lista = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,, seis]];
