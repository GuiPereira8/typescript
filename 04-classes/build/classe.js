"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    nome;
    categoria;
    constructor(nome, categoria) {
        ((this.nome = nome), (this.categoria = categoria));
    }
    criarLoja() {
        console.log(`Loja ${this.nome} criada com sucesso!, Categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido ${pedidos} na mesa: ${mesa}`;
    }
    statusLoja(status) {
        if (status === "ABERTO") {
            console.log(`A loja ${this.nome} está aberta!`);
        }
        else {
            console.log(`A loja ${this.nome} está fechada!`);
        }
    }
}
const flyBurguer = new Loja("FlyBurguer", "Lanches");
const mixSorvetes = new Loja("Mix Sorvetes", "Sorvetes e gelados");
const resposta = flyBurguer.emitirPedido(32, "Hamburguer da casa", "Coxinha de frango", "Coca 2L");
console.log(resposta);
mixSorvetes.statusLoja("ABERTO");
