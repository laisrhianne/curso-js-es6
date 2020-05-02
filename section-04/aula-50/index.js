// Não dá erro
function funcao() {
    console.log(arguments)
}

funcao('Valor');

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
}

conta('+', 0, 20, 30, 25, 45);