// Reduce -> Reduz o array a um elemento só

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);

const somaPares = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador += valor;
    return acumulador;
})


console.log(somaPares);

const pessoas = [
    { nome: 'Laís', idade: 23 },
    { nome: 'Bruna', idade: 25 },
    { nome: 'Manuella', idade: 24 },
    { nome: 'Josué', idade: 27 },
    { nome: 'Jhon', idade: 25 },
    { nome: 'Abilash', idade: 18 }
];

const maisVelha = pessoas.reduce(function (n, obj) {
    if (n.idade > obj.idade) return n;
    return obj;
});

console.log(maisVelha);