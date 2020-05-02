// defineProperty / defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        value: estoque,  // valor da chave
        writable: true,  // pode alterar o valor
        configurable: true  // configurável e apagável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,  // mostra a chave
            value: nome,  // valor da chave
            writable: true,  // pode alterar o valor
            configurable: true  // configurável e apagável
        },
        preco: {
            enumerable: true,  // mostra a chave
            value: preco,  // valor da chave
            writable: true,  // pode alterar o valor
            configurable: true  // configurável e apagável

        }
    });
}

const pq = new Produto('Camiseta', 20, 3);