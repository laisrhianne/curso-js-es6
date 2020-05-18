// Async / Await

function rand(min = 0, max = 3) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Cria função e instancia como Promise
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        // Caso msg não seja string, rejeita
        if(typeof msg !== 'string') reject('valor incorreto.');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// esperaAi('Fase 1', rand(0, 3))
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand())
// }).then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand())
// }).then(fase => {
//     console.log(fase)
// }).catch(e => console.log(e));

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    
        console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();

// Estados da Promisse:
// Pending -> pendente
// Fullfilled -> resolvida
// Rejected -> rejeitada