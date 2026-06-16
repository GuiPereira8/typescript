"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    constructor(nome, email, cargo, nivel) {
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const primeiroUsuario = new Admin("Guilherme", "exemplo@1234.com", "Desenvolvedor Full-Stack", 1);
console.log(primeiroUsuario);
console.log(primeiroUsuario.cargo);
