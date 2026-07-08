"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("=========");
        console.log(`Nova conta P.Fisica criada com sucesso ${dados.nome}`);
        console.log("=========");
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("=========");
        console.log(`Nova conta P.Juridica criada com sucesso ${dados.nome}`);
        console.log("=========");
        return true;
    }
}
const juliana = new PessoaFisica();
juliana.abrirConta({
    nome: "Juliana alvez",
    numero: "1486-x",
    endereco: "Rua logo ali - 12",
});
const flyBurguer = new PessoaJuridica();
flyBurguer.abrirConta({
    nome: "João pereira",
    numero: "1985-x",
    endereco: "Avenida carlos - centro 124",
});
class ContaLoja {
    nome;
    documento;
    endereco;
    constructor(nome, documento, endereco) {
        this.nome = nome;
        this.documento = documento;
        this.endereco = endereco;
    }
    abrirContaNova() {
        if (this.documento === true) {
            console.log("Seu documento está OK sua conta foi criada com sucesso.");
        }
        else {
            console.log("Seu documento está com PENDENCIAS sua conta não pode ser criada.");
        }
    }
}
const pessoa = new ContaLoja("Lucas", true, "Rua logo ali");
pessoa.abrirContaNova();
