"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    id = "1408";
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    mostrarId() {
        console.log(`ID DO USUARIO: ${this.id}`);
    }
}
const hanna = new Pessoa("Hanna Pereira", 20);
console.log(hanna);
