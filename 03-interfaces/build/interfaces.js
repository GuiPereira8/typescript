"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pizzaMaestria = {
    nome: "pizza bahiana",
    endereco: "Rua avenida logo ali",
    status: true,
};
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja: ${endereco}`);
    console.log(`Status da loja: ${status}`);
    console.log("===========<>===========");
}
novaLoja({ nome: "PapaPizzas", endereco: "Rua adelio 2°", status: true });
novaLoja({ nome: "Barber shop", endereco: "Rua euclides", status: false });
