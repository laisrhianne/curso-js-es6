/*
 * ME MODELAGEM E SIMULAÇÃO DE SISTEMAS DISCRETOS
 * Higor Cavalcante e Laís Rhianne
 *
 * Deve começar com um caractere numérico
 * Pode ser seguido ou de um par de caracteres numéricos ou de um par de letras
 * Em seguida, deve conter algum caractere numérico primo
 * Em seguida, deve conter de 1 a 3 letras em sequência
 * deve terminar com o próximo número em relação ao primeiro. Obs: se for 9, deve ser 0.
 */

// Digite a senha a ser testada aqui:
const senha = "5dj7ab6"; 

// Padrão da senha
const padrao = /((^\d)(\d\d|[a-zA-Z]{2})[2357][a-zA-Z]{1,3})(\d$)/; 

// Função para validar senha
function validaSenha(senha, padrao) {
  const validaRegex = senha.match(padrao);
  const validaDigito = parseInt(validaRegex[2]) === parseInt(validaRegex[4]) - 1;
  if (validaRegex && validaDigito) {
    return true;
  }
  return false;
}

console.log(validaSenha(senha, padrao));
