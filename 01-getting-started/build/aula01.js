"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message = "Olá, Mundo!";
const nome = "Guilherme";
console.log(`Bem vindo, ${nome}`);
console.log(message);
class Sistema {
    ip;
    constructor(ip) {
        this.ip = ip;
    }
}
const servidor1 = new Sistema("192.168.500.2");
