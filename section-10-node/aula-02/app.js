// const multiplicacao = require('./mod');

// console.log(multiplicacao(2,7));

const Cachorro = require('./mod');

const cachorrinho = new Cachorro('Glifor');
cachorrinho.latir();

const path = require('path');
console.log(path.resolve(__dirname, '..'));