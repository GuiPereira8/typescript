// Exemplos com Arrow Function

/*
function retornoAPI(url: string): string {
    return url;
} 
*/

const retornoAPI = (url: string): void => {
  console.log(`URL DA API: ${url}`);
};
retornoAPI("https://exemplocon.com");

// Exercício do par ou ímpar.
//Gera um número aleátorio de 1 a 100 e verifica se o número é PAR ou ÍMPAR.
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const parImpar = (valor: number): string => {
  if (valor % 2 === 0) {
    return `O número ${valor} que foi gerado é PAR!`;
  } else {
    return `O número ${valor} que foi gerado é ÍMPAR!`;
  }
};
const resultado = parImpar(numeroAleatorio);
console.log(resultado);
