/*
* Protótipo - Orientação a Objetos
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.falaOi = function () {
    console.log('Oi');
}

const pessoa1 = new Pessoa('Laís', 'Rhianne');

console.log(pessoa1.nomeCompleto());
pessoa1.falaOi();