// Return: retorna um valor e termina a função

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo');
console.log(resto);


function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(5));
console.log(quadriplica(10));