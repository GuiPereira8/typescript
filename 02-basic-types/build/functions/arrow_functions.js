"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const retornoAPI = (url) => {
    console.log(`URL DA API: ${url}`);
};
retornoAPI("https://exemplocon.com");
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const parImpar = (valor) => {
    if (valor % 2 === 0) {
        return `O número ${valor} que foi gerado é PAR!`;
    }
    else {
        return `O número ${valor} que foi gerado é ÍMPAR!`;
    }
};
const resultado = parImpar(numeroAleatorio);
console.log(resultado);
