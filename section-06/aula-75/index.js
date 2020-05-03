// new Object
const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
// objB -> objA -> Object
Object.setPrototypeOf(objC, objB);
// objC -> objB -> objA -> Object
console.log(objC.chaveA);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
//p1.desconto()

const p2 = {
    nome: 'caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
    nome: {
        enumerable: true,
        value: 'Calça',
        writable: true,
        configurable: true
    },
    preco: {
        enumerable: true,
        value: 60,
        writable: true,
        configurable: true
    }
});

console.log(p3);