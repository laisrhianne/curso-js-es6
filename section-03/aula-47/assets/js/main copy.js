const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let hora = 0;
let min = 0;
let seg = 0;
let timer;

function incrementaSegundos() {
  seg++;
  if (seg === 60) {
    min++;
    seg -= 60;
  }
  if (min >= 60){
      hora++;
      min -= 60;
  }
}

function zeroEsq(num){
    return (num > 10) ? num : `0${num}`;
}

function timerOn() {
  timer = setInterval(incrementaSegundos, 1000);
  segundos = zeroEsq(seg);
  minutos = zeroEsq(min);
  horas = zeroEsq(hora);
  relogio.innerHTML = `${horas}:${minutos}:${segundos}`;
}

function timerOff() {}

function timerReset() {}

iniciar.addEventListener('click', function (event) {
  timerOn();
});

pausar.addEventListener('click', function (event) {
  alert('Cliquei no pausar');
});

zerar.addEventListener('click', function (event) {
  alert('Cliquei no zerar');
});
