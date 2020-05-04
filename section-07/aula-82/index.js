class dispositivoEletronico {
    constructor (nome) {
        this.nome = nome;
        this.logado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends dispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}

class Tablet extends dispositivoEletronico {
    constructor (nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
}

const s1 = new Smartphone ('Samsung', 'preto', 'Galaxy S10');
const t1 = new Tablet ('iPad', true);