// Herança > quando nós temos uma classe que herda de outra classe.
// Classe "PAI" tem seus atributos e a classe "FILHA" vai herdar todos os atributos do pai além dos seus
// Proprios atributos
class Usuario {
  nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}

//Supor que essa classe ADIMIN herdar tudo que o usuário tem.
class Admin extends Usuario {
  cargo: string;
  nivel: number;

  constructor(nome: string, email: string, cargo: string, nivel: number) {
    //O Método super() precisa ser o primeiro dentro do construtor.
    //Através dele faz a relação com a classe pai.

    super(nome, email); //Chamando o construtor da classe "pai" (Usuario).

    this.cargo = cargo;
    this.nivel = nivel;
  }
}

const primeiroUsuario = new Admin(
  "Guilherme",
  "exemplo@1234.com",
  "Desenvolvedor Full-Stack",
  1,
);
console.log(primeiroUsuario);
console.log(primeiroUsuario.cargo);
