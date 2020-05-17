// Promise.all, Promise.race, Promise.resolve, Promise.reject
function rand(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Cria função e instancia como Promise
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Caso msg não seja string, rejeita
            if(typeof msg !== 'string') {
                reject('valor incorreto.');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na Promise');
        }, tempo);
    });
}

const promises = [
    esperaAi('Promise 1', rand(1,3)),
    esperaAi('Promise 2', rand(1,3)),
    esperaAi('Promise 3', rand(1,3)),
    esperaAi(1000, rand(1,3)),
];

// Promise.all: Resolve um array de promises. Se uma falhar, todas falham.
Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function (erro){
    console.log(erro);
});

// Promise.race: entrega o primeiro valor resolvido
Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function (erro){
        console.log(erro);
    });

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('Erro:', e));