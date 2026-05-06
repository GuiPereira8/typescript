/* Type any = Basicamente ele aceita qualquer valor de qualquer
 tipo seja ele number, string, boolean etc... Evitar usar!*/

let precoProduto;

precoProduto = true;
//console.log(typeof precoProduto);

precoProduto = 20.8;
//console.log(typeof precoProduto);

precoProduto = "Hello World!";
console.log(typeof precoProduto);

let nota1: any;
let nota2: any;

nota1 = 10;
nota2 = 20;
nota1 = "15";
console.log(nota1 + nota2);
