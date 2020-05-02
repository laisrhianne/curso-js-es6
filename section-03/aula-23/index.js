// Avaliação de curto-circuito

/* 
Valores que avaliam como falso ou verdadeiro
FALSY: false, 0, '', "", ``, null, undefined, NaN 
True: todo o resto

O JavaScript avalia da esquerda para a direita
No AND ele retorna o primeiro valor falso ou o último verdadeiro
No OR ele retorna o primeiro valor verdadeiro ou o último falso
*/

// AND
// function falaOi(){
//     return 'Oi';
// }

// const vaiExecutar = NaN;

// console.log(vaiExecutar && falaOi());

// OR
const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);