//Funçoes com TypeScript

//Funções com void nunca vai retornar nada.
function login(username: string): void {
  let message = `Bem vindo ${username}`;
  console.log(message);
  //return username; // Vai dar erro, porque funções do tipo void não pode retornar nada.
}
login("Guilherme");

console.log("========<>========");

function login2(nomeUsuario: string): boolean | string {
  let message2 = `Bem vindo ${nomeUsuario}`;
  console.log(message2);
  return nomeUsuario;
}
const retornoFuncao = login2("Sofia");
console.log(retornoFuncao);

console.log("========<>========");

let num1: number = 10;
// let num2: string = "25"; // se for do tipo string, o TypeScript ja avisa que tem algum erro.
let num2: number = 25;

function soma(valor1: number, valor2: number): number {
  let soma = valor1 + valor2;
  return soma;
}
console.log(soma(num1, num2));

console.log("========<>========");

function parImpar(num: number): string {
  if (num % 2 === 0) {
    return `O número ${num} é PAR!`;
  } else {
    return `O número ${num} é IMPAR!`;
  }
}
const resposta = parImpar(18);
console.log(resposta);
