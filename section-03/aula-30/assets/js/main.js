const data = new Date();
const texto = document.querySelector('#texto');
const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];
const diasSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
];
const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

texto.innerHTML = `${diasSemana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano} <br>${hora}:${min}`;

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//   dateStyle: 'full',
//   timeStyle: 'short'
// };

// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
