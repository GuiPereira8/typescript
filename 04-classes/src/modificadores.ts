// Existem quatro modificadores de acesso que podemos atribuir aos atributos como:
// public, protected, private, readonly (apenas nos atributos)
/*
  Public: Modificador padrão se nada for declarado por padrão é public podendo ser alterado a qualquer momento.

  >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da
   classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

   >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados,
    Ou seja ele não pode ser acessado ou modificado fora da classe em que foi criado.

    >> Readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
     não podemos alterar ele.
*/

class Usuario {
  protected id: number; //

  public nome: string; //Adicionando o modificador Public.
  email: string; // Se não for declarado nada, por padrão é public.

  constructor(id: number, nome: string, email: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario {
  public cargo: string;
  public nivel: number;

  constructor(
    id: number,
    nome: string,
    email: string,
    cargo: string,
    nivel: number,
  ) {
    super(id, nome, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }

  protected mudarCargo(cargo: string): void {
    console.log(`Mudando o cargo de: ${this.cargo}, para: ${cargo}`);
    console.log(`ID do usuário: ${this.id}`);
  }

  acessarAdmin(): void {
    this.mudarCargo("Designer");
  }
}

const primeiroUsuario = new Admin(
  9,
  "Guilherme",
  "exemplo@1234.com",
  "Desenvolvedor Full-Stack",
  1,
);
// primeiroUsuario.id; // ERRO! A propriedade 'id' é protegida e somente é acessível na classe 'Usuario' e em suas subclasses.
primeiroUsuario.acessarAdmin();
