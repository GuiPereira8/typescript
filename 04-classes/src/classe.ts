/*
### O que é uma classe? ###
==> Uma classe armazena as características e as ações que esse objeto vai possuir.
==> Ou seja conjnto de atributos e métodos.
*/

type Status = "ABERTO" | "FECHADO";

class Loja {
  //Atributos da nossa classe.
  nome: string;
  categoria: string;

  constructor(nome: string, categoria: string) {
    ((this.nome = nome), (this.categoria = categoria));
  }
  criarLoja(): void {
    console.log(
      `Loja ${this.nome} criada com sucesso!, Categoria: ${this.categoria}`,
    );
  }

  emitirPedido(mesa: number, ...pedidos: string[]): string {
    pedidos.map((pedido) => {
      console.log(`Saindo novo pedido: ${pedido}`);
    });
    return `Pedido ${pedidos} na mesa: ${mesa}`;
  }

  statusLoja(status: Status): void {
    if (status === "ABERTO") {
      console.log(`A loja ${this.nome} está aberta!`);
    } else {
      console.log(`A loja ${this.nome} está fechada!`);
    }
  }
}

const flyBurguer = new Loja("FlyBurguer", "Lanches");
//flyBurguer.criarLoja();

const mixSorvetes = new Loja("Mix Sorvetes", "Sorvetes e gelados");
//mixSorvetes.criarLoja();

const resposta = flyBurguer.emitirPedido(
  32,
  "Hamburguer da casa",
  "Coxinha de frango",
  "Coca 2L",
);
console.log(resposta);

mixSorvetes.statusLoja("ABERTO");

//const drinSucos = new Loja("DrinSucos", "Sucos e Bebidas");
//const brosTacos = new Loja("Bros Tacos", "Lanches e comida");
