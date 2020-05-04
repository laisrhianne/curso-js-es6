// Polimorfismo

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/conta: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.sacar(20);

function ContaCorrente(agencia, conta, saldo, limite){
    conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor) {
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo){
    conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(11, 22, 0, 100);

const cp = new ContaPoupanca(12, 33, 0);