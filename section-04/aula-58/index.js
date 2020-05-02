// Função construtora retorna objetos
// Construtora -> nome com letra maiúscula

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.metodo = function(){
      console.log('Sou um método')
  };
}

const p1 = new Pessoa('Laís', 'Rhianne');
console.log(p1.nome);
p1.metodo();