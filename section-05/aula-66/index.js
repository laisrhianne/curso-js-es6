// Map -> Modifica o array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(num => num*2);
console.log(numerosDobrados);

const pessoas = [
    {nome: 'Laís', idade: 23},
    {nome: 'Bruna', idade: 25},
    {nome: 'Manuella', idade: 24},
    {nome: 'Josué', idade: 27},
    {nome: 'Jhon', idade: 25},
    {nome: 'Abilash', idade: 18}
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
const chaveId = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
})

console.log(chaveId);
