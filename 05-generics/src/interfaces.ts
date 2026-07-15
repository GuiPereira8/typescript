interface NovoProduto<V extends number> {
  nome: string;
  preco: V;

  formatar(valor: V): string;
}

// type NewProduct<P extends string> = {
//   nome: string;
//   preco: P;
// };

const arroz: NovoProduto<number> = {
  nome: "Arroz parboilizado",
  preco: 19.9,
  formatar(valor: number): string {
    let valorFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  },
};
console.log(arroz);
console.log(arroz.formatar(8000));
