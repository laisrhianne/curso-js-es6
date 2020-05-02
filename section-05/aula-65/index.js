// Filter - filtra o array
// vetor.filter(funcao(valor, indice, vetor))

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
    return valor > 10;
}

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


const pessoas = [
    {nome: 'Laís', idade: 23},
    {nome: 'Bruna', idade: 25},
    {nome: 'Manuella', idade: 24},
    {nome: 'Josué', idade: 27},
    {nome: 'Jhon', idade: 25},
    {nome: 'Abilash', idade: 18}
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasVelhas = pessoas.filter(obj => obj.idade > 24);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);