// While
// let controle = 0;

// while (controle <= 10) {
//   console.log(controle);
//   controle++;
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);
let i = 0;

// while (rand !== 10) {
//     console.log(rand);
//     i++;
//     rand = random(min, max)
// }

do {
    rand = random(min, max);
    console.log(rand);
    i++;
}
while (rand !== 10);

console.log(i);