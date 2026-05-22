interface ProdutoProps {
  //readonly: Garente que uma propriedade seja definida na criação do objeto
  //e nunca mais seja alterada (como um ID de banco de dados).
  readonly id: string;
  nome: string;
  descricao: string;
}

let produdo1: ProdutoProps = {
  id: "1",
  nome: "Mouse Attack Shark",
  descricao: "Mouse Gamer Sem Fio Attack Shark X11",
};

produdo1.nome = "Mouse Attack shark x11";
console.log(produdo1);
console.log(produdo1.id);
