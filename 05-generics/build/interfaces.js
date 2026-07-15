"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arroz = {
    nome: "Arroz parboilizado",
    preco: 19.9,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return valorFormatado;
    },
};
console.log(arroz);
console.log(arroz.formatar(8000));
