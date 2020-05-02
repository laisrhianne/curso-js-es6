const nome = 'Laís';
const sobrenome = 'Lisboa';
const idade = 23;
const peso = 64.4;
const altura = 1.60;
let imc = peso/(altura*altura);
let anoNascimento = 2020 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`Seu IMC é ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);