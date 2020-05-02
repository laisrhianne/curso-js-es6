// Declaração de função (Function hoisting)

function falaOi() {
  console.log('Oi');
}

// First-Class Objects -> Tratadas como dados
// Podem ser passadas como parâmetro

// Function expression
const souUmDado = function () {
  console.log('Sou um dado.');
};

// Arrow function
const funcaoArrow = () => {
    consolow.log('Sou uma arrow function')
}

// Dentro de um objeto
const obj = {
    falar() {
        console.log('falando')
    }
}

obj.falar();