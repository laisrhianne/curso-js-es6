import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Marta',
      sobrenome: 'Lisboa',
      email: 'marta@gmail.com',
      idade: 48,
      peso: 72.3,
      altura: 1.58,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
