// Getters e Setters

const _velocidade = Symbol('velocidade') // Propriedade privada
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Ford KA');


class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}