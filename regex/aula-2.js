// Match e Replace

const { texto } = require('./base');

const regExp1 = /(João|Maria)/gi;

// console.log(texto.match(regExp1));
// console.log(texto.replace(regExp1, 'Felipe'));
// console.log(texto.replace(regExp1, '"$1"'));
console.log(texto.replace(regExp1, function(input){
    return input.toUpperCase();
}));