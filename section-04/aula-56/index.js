// Factory Functions

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        altura,
        peso,
        
        // Getter: transforma método em atributo
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Laís', 'Rhianne', 1.6, 64);
console.log(p1.imc());
console.log(p1.imc2);
