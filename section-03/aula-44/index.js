// Tratamento de erros

try {
    console.log(naoExisto)
} catch (err) {
    console.log('naoExisto não existe.');
}

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('x e y precisam ser números');
        return x + y;
    }
}
