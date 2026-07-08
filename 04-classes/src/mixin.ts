import { applyMixins } from "./mixin/applyMixin";

class Automovel {
  ligar(): void {
    console.log("AUTOMOVEL LIGADO COM SUCESSO!");
  }

  desligar(): void {
    console.log("DESLIGANDO AUTOMOVEL");
  }
}

class Especificacao {
  descricao: string;

  constructor(descricao: string) {
    this.descricao = descricao;
  }
}

class Carro {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

interface Carro extends Automovel, Especificacao {}

applyMixins(Carro, [Automovel, Especificacao]);

const mustang = new Carro("Ford Mustang GT");

mustang.ligar();
mustang.descricao = "Modelo completo e automatico";

console.log(mustang);
mustang.desligar();
