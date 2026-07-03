class Pessoa {
  //Como o próprio nome diz o readonly apenas ler, Podemos apenas ler e ver esse atributo porém
  //não podemos alterar ele.
  readonly id: string = "1408";
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  mostrarId() {
    console.log(`ID DO USUARIO: ${this.id}`);
  }
}

const hanna = new Pessoa("Hanna Pereira", 20);
console.log(hanna);
