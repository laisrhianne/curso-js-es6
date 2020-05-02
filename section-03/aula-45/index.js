// Tratamento de erros

try {
  // É executada quando não há erros
} catch (erro) {
  // É executada quando há erros
} finally {
  // É sempre executada
}

function retornaHora(data) {
  if (!(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

try {
  const data = new Date();
  const hora = retornaHora(11);
} catch (error) {
  console.log('Houve um erro.');
} finally {
  console.log('Tenha um bom dia!');
}
