"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    limite = 450;
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Parabéns! Seu limite agora é ${quantidade}`);
        }
        else {
            console.log(`Infelizmente seu limite foi reprovado`);
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteAfiliado() {
        return this.solicitarLimite(950);
    }
}
const usuario123 = new Conta();
usuario123.solicitarLimiteApp(true, 800);
console.log(usuario123);
console.log("=========<>=========");
const joao = new BancoAfiliado();
console.log(joao);
joao.limiteAfiliado();
