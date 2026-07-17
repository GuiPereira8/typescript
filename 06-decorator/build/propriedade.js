"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function validarNome(tamanho) {
    return (target, key) => {
        const chavePrivada = `_${key}`;
        const getter = function () {
            return this[chavePrivada];
        };
        const setter = function (value) {
            if (value === "") {
                console.log("Você não pode deixar em branco");
            }
            else if (value.length < tamanho) {
                console.log(`O nome do jogo deve conter ${tamanho} ou mais caracteres`);
            }
            else {
                this[chavePrivada] = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
class Jogo {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}
__decorate([
    validarNome(5)
], Jogo.prototype, "nome", void 0);
__decorate([
    validarNome(10)
], Jogo.prototype, "descricao", void 0);
const primeiroJogo = new Jogo("GOW", "Descrição God of war");
console.log(primeiroJogo.nome);
console.log(primeiroJogo.descricao);
const segundoJogo = new Jogo("Hollow Knight", "Explore o reino de hollownest em busca de segredos");
console.log(segundoJogo.nome);
console.log(segundoJogo.descricao);
