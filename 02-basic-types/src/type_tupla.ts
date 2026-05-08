// Type tupla | Tupla não possui no JavaScript e sim apenas no TypeScript.

// Tupla é como um contrato, no exemplo abaixo so podemos ter 2 elementos se tiver mais ou menos que isso não é aceito.
let usuario: [string, number];
usuario = ["Sofia", 123645]; //tem 2 elementos forma correta.
//usuario = ["Sofia", 123645, "lucas"]; //tem 3 elementos vai dar erro.
usuario.push("Lucas", 192554);
console.log(usuario);

let pedido: [string, string, string];
pedido = ["Pedido feito", "Pedido a caminho", "Pedido entregue"];
console.log(pedido);
