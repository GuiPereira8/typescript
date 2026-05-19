interface CadastoConta {
  nome?: string; //Ao colocar o sinal de interrogação (?) deixa a propriedade como opcional.
  email: string;
  status: boolean;
}

const novaConta: CadastoConta = {
  nome: "Giovanna",
  email: "exemplo123@gmail.com",
  status: true,
};

//console.log(novaConta);
/*
// Uma das formas de usar interface é desconstruindo o Objeto como o exemplo abaixo.
function novoUser({ nome, email, status }: CadastoConta) {}
*/

// E também temos o formato padrão como no exemplo abaixo.
function novoUser(usuario: CadastoConta) {
  console.log(usuario.nome);
  //console.log(usuario.status);
  console.log(usuario.email);
}
novoUser({ nome: "Sofia", email: "sofia01923@gmail.com", status: false });
