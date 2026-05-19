interface CursoProps {
  id: string;
  nome: string;
  preco: number;

  //Definir apenas a função e o que ela deve esperar e retornar.
  promocao: (preco: number) => void;
}

// function mostrarPromocao(preco: number): void {
//   console.log(`Promoção no curso por apenas: R$ ${preco}`);
// }

const novoCurso: CursoProps = {
  id: "1",
  nome: "Curso TypeScript",
  preco: 752,
  //promocao: mostrarPromocao,
  promocao: (preco: number): void => {
    console.log("Preço total da promoção: R$", preco);
  },
};

console.log(novoCurso);
console.log(novoCurso.promocao(249));

interface SomaPropos {
  (valor1: number, valor2: number): number;
}
let somaNumeros: SomaPropos = (valor1: number, valor2: number): number => {
  console.log(`Resultado: ${valor1 + valor2}`);

  return valor1 + valor2;
};

const resultado = somaNumeros(78, 15);
console.log(resultado);
