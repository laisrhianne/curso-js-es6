function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
  });
}

// console.log(mostraHora());

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

const timer2 = setTimeout(function() {
    clearInterval(timer);
    console.log('Oi');
}, 5000);

clearInterval(timer);
clearInterval(timer2);