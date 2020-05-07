// Flags: 
// g (global): encontra todas as ocorrências
// i (CaseInsensitive): ignora maiúsculas e minúsculas
// () Grupos
// | OU

const { texto } = require('./base');

const regExp1 = /(maria), (hoje sua esposa)/;

console.log(regExp1.test(texto)); // Retorna se a expressão regular existe no texto
// console.log(regExp1.exec(texto));

const found = regExp1.exec(texto);

if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}