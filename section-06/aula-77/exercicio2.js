// Validar CPF

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const cpfFinal = cpfParcial + digito1 + digito2;
    return (cpfFinal === this.cpfLimpo) ? true : false;
}

ValidaCPF.prototype.criaDigito = function (cpf) {
    const array = Array.from(cpf);
    const soma = array.reduce((ac, val, ind, arr) => {
        return ac + (arr.length - ind + 1) * val;
    }, 0);
    const digito = 11 - (soma % 11);
    return (digito > 9) ? 0 : digito;
}

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('017.252.654-00');

if (cpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}