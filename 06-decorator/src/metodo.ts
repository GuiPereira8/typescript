import { verificaPessoa } from "./decorators/verificaPessoa";

class Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  @verificaPessoa(22)
  cadastrarPessoa() {
    console.log(`Bem vindo ${this.nome} ao Sistema!`);
  }
}

const pessoa1 = new Pessoa("Guilherme P");

pessoa1.cadastrarPessoa();
