/*
    Exercício Validando CPF
*/
//         012 345 678 9
let cpf = "705.484.450-52";

function validaCPF (cpf){
    let cpfLimpo = cpf.replace(/\D+/g, ""); // Troca tudo que não for número para string vazia
    const cpfArray = Array.from(cpfLimpo);
    
    let vld1 = [...cpfArray];
    vld1 = vld1.slice(0, -2);
    let cpfFinal = [...vld1];
    vld1 = vld1.map((valor, indice) => {
        return parseInt(valor) * (10 - indice);
    }).reduce((ac, valor) => {
        return ac + valor;
    }, 0);
    
    const dig1 = 11 - (vld1%11);
    if (dig1 > 9) cpfFinal.push(0);
    else cpfFinal.push(dig1);
    
    let vld2 = [...cpfFinal];
    vld2 = vld2.map((valor, indice) => {
        return parseInt(valor) * (11 - indice);
    }).reduce((ac, valor) => {
        return ac + valor;
    }, 0);
    
    const dig2 = 11 - (vld2%11);
    if (dig2 > 9) cpfFinal.push(0);
    else cpfFinal.push(dig2);
    
    const cpfFinal2 = cpfFinal.join('');
    
    if (cpfFinal2 === cpfLimpo) console.log('CPF Válido');
    else console.log('CPF Inválido');
}

validaCPF(cpf);