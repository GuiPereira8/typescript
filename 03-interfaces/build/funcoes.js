"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const novoCurso = {
    id: "1",
    nome: "Curso TypeScript",
    preco: 752,
    promocao: (preco) => {
        console.log("Preço total da promoção: R$", preco);
    },
};
console.log(novoCurso);
console.log(novoCurso.promocao(249));
let somaNumeros = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 + valor2}`);
    return valor1 + valor2;
};
const resultado = somaNumeros(78, 15);
console.log(resultado);
