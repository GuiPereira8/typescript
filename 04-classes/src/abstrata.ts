type DadosConta = {
  nome: string;
  numero: string;
  endereco: string;
};

abstract class ContaBanco {
  abstract abrirConta(dados: DadosConta): boolean;
}

class PessoaFisica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
    console.log("=========");
    console.log(`Nova conta P.Fisica criada com sucesso ${dados.nome}`);
    console.log("=========");

    return true;
  }
}

class PessoaJuridica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
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
  nome: string;
  documento: boolean;
  endereco: string;

  constructor(nome: string, documento: boolean, endereco: string) {
    this.nome = nome;
    this.documento = documento;
    this.endereco = endereco;
  }

  abrirContaNova(): void {
    if (this.documento === true) {
      console.log("Seu documento está OK sua conta foi criada com sucesso.");
    } else {
      console.log(
        "Seu documento está com PENDENCIAS sua conta não pode ser criada.",
      );
    }
  }
}

const pessoa = new ContaLoja("Lucas", true, "Rua logo ali");
pessoa.abrirContaNova();
//console.log(pessoa);
