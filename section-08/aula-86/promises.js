function rand(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('valor incorreto.');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 3', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.catch( e => {
    console.log('Erro:', e);
});