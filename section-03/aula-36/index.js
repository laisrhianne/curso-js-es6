// For in
const frutas = ['Pera', 'Maçã', 'Uva', 'Banana'];

for (let i in frutas) {
  // i = índice
  console.log(i);
}

const pessoa = {
  nome: 'Laís',
  sobrenome: 'Lisboa',
  idade: 23,
};

for (let chave in pessoa) {
  console.log(pessoa[chave]);
}
