//Type object
let novoUsuario: object;
novoUsuario = {
  nome: "Guilherme",
  email: "exemplo@gmail.com",
  id: 1,
};
//console.log(novoUsuario);

//Tipando o objeto e suas propriedades
let produto: {
  id: number;
  nome: string;
  preco: number;
  descricao?: string; //Propriedade opcional
};
produto = {
  id: 1,
  nome: "Notebook",
  preco: 2500,
  descricao: "Notebook Gamer",
};
console.log(produto);
