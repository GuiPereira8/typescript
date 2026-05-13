"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeroAleatorio = Math.floor(Math.random() * 2000) + 1;
const userName = "id: " + numeroAleatorio;
function cadastro(email, senha, idade, nome = userName) {
  let dados = { nome, email, senha, idade };
  console.log(dados);
}
function cadastroLoja(nome, email, status = false) {
  if (status === true) {
    console.log(`${status} A loja ${nome} está aberta, bem-vindo(a)!`);
  } else {
    console.log(`${status} A loja ${nome} está fechada, volte outra hora!`);
  }
  return status;
}
cadastroLoja("Cantinho feliz", "catinho123@gmail.com", true);
