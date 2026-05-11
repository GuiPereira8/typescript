"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function login(username) {
    let message = `Bem vindo ${username}`;
    console.log(message);
}
login("Guilherme");
console.log("========<>========");
function login2(nomeUsuario) {
    let message2 = `Bem vindo ${nomeUsuario}`;
    console.log(message2);
    return nomeUsuario;
}
const retornoFuncao = login2("Sofia");
console.log(retornoFuncao);
console.log("========<>========");
let num1 = 10;
let num2 = 25;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    return soma;
}
console.log(soma(num1, num2));
console.log("========<>========");
function parImpar(num) {
    if (num % 2 === 0) {
        return `O número ${num} é PAR!`;
    }
    else {
        return `O número ${num} é IMPAR!`;
    }
}
const resposta = parImpar(18);
console.log(resposta);
