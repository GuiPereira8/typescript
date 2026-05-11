// UNKNOWN Tipo desconhecido => Quando você não sabe o TIPO que vai receber.
let total: unknown;

total = 32;
total = "Hello";
total = {
  preco: 126,
};

let idPedido: any = 128;
let totalPedido: unknown = 12;

// Valor do tipo unknown só podem ser atribuidos ao tipo unknown ou ao any.
//let entregrador: number = totalPedido;
let entregrador: any = idPedido;

console.log(entregrador);
console.log(totalPedido);
