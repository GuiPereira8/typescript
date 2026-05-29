// Type alias conseguimos criar tipos mais poderosos, com mais informações do que tipos primitivos.
type Info = {
  id: number;
  nome: string;
  descricao?: string;
};

const produtoInfo: Info = {
  id: 2,
  nome: "Sanduicheira duo time click",
  descricao:
    "Sanduicheira duo time tem um design moderno e é totalmente eletrica.",
};

type Categoria = {
  slug: string;
  quantidadeProduto: number;
};

const categoria1: Categoria = {
  slug: "Eletrodoméstico",
  quantidadeProduto: 12,
};

type InfoProduto = Info & Categoria; // InfoProduto é a interseção (UNIÃO) entre Info e Categoria.

const novoProduto: InfoProduto = {
  id: 175,
  nome: "Placa de video RTX 5090",
  descricao: "Placa de video mais poderosa e com novos recursos",
  slug: "Hardware",
  quantidadeProduto: 32,
};
console.log(novoProduto);
