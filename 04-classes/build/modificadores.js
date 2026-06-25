"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    id;
    nome;
    email;
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log(`Mudando o cargo de: ${this.cargo}, para: ${cargo}`);
        console.log(`ID do usuário: ${this.id}`);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const primeiroUsuario = new Admin(9, "Guilherme", "exemplo@1234.com", "Desenvolvedor Full-Stack", 1);
primeiroUsuario.acessarAdmin();
