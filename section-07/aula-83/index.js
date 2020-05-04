class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  // Métodos de Instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // Métodos Estáticos
  static trocaPilha() {
    console.log('Pilhas trocadas');
  }

  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(controle1.volume, 5));
