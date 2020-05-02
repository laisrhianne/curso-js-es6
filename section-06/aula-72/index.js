// Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        configurable: true,  // configurável e apagável
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                console.log('Valor inválido');
                return;
            }
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)