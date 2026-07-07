"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jogo {
    servidor;
    id = "1824";
    constructor(servidor) {
        this.servidor = servidor;
    }
    get getServidorIP() {
        console.log("==>Método Get<==");
        return this.servidor;
    }
    set setServidorIP(novoIp) {
        if (this.servidor === novoIp) {
            console.error("ERRO! O novo IP deve ser diferente do IP antigo.");
        }
        this.servidor = novoIp;
    }
}
const minecraftServer = new Jogo("192.168.8.10");
minecraftServer.setServidorIP = "192.250.8.10";
console.log(minecraftServer.getServidorIP);
