//Como deixar um valor por default ou deixar ele opcional

//gera um número aleátorio caso a pessoa não informar o nome.
const numeroAleatorio = Math.floor(Math.random() * 2000) + 1;
const userName: string = "id: " + numeroAleatorio;

function cadastro(
  email: string,
  senha: string,
  idade?: number,
  nome = userName,
): void {
  let dados = { nome, email, senha, idade };
  console.log(dados);
}
//cadastro("teste2123@gmail.com", "289104829", 22, "sofia");

function cadastroLoja(nome: string, email: string, status = false): boolean {
  if (status === true) {
    console.log(`${status} A loja ${nome} está aberta, bem-vindo(a)!`);
  } else {
    console.log(`${status} A loja ${nome} está fechada, volte outra hora!`);
  }

  return status;
}
cadastroLoja("Cantinho feliz", "catinho123@gmail.com", true);
