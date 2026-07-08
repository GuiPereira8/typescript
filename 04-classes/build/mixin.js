"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligar() {
        console.log("AUTOMOVEL LIGADO COM SUCESSO!");
    }
    desligar() {
        console.log("DESLIGANDO AUTOMOVEL");
    }
}
class Especificacao {
    descricao;
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.applyMixins)(Carro, [Automovel, Especificacao]);
const mustang = new Carro("Ford Mustang GT");
mustang.ligar();
mustang.descricao = "Modelo completo e automatico";
console.log(mustang);
mustang.desligar();
