// interface TecnologiaProps {
//   id: string;
//   nome: string;
//   slug?: string[];
// }

// let tecnologia1: TecnologiaProps = {
//   id: "1",
//   nome: "TypeScript",
//   slug: ["TypeScript", "JavaScript"],
// };

interface TecnologiaProps {
  id: string;
  nome: string;
  descricao?: string;
}

interface NomesProps {
  tecnologia: TecnologiaProps[];
}

let frontEnd: NomesProps = {
  tecnologia: [
    {
      id: "1",
      nome: "React-JS",
      descricao: "Biblioteca para criar interfaces interativas.",
    },
    {
      id: "2",
      nome: "Tailwind",
      descricao: "Framework para estilização de sites.",
    },
    {
      id: "3",
      nome: "Vue-JS",
      descricao: "Framework para criar interfaces interativas.",
    },
    {
      id: "4",
      nome: "Next-JS",
      descricao:
        "Framework para criar aplicações React com renderização do lado do servidor.",
    },
  ],
};
console.log(frontEnd.tecnologia);
