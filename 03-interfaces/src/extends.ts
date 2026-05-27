// Extends: criar uma interface base e fazer com que outras interfaces "herdem" as propriedades dela.
// Vamos supor que temos um jogo e esse jogo pode ter uma DLC.

interface JogoProps {
  readonly id: string;
  nome: string;
  descricao: string;
  plataformas: string[];
}

const shadowOfTheColossus: JogoProps = {
  id: "32",
  nome: "Shadow of the Colossus",
  descricao: "Um jogo eletrônico de ação-aventura",
  plataformas: ["PS5", "PS4"],
};
//console.log(shadowOfTheColossus);

const littleNightmares3: JogoProps = {
  id: "35",
  nome: "Little Nightmares 3",
  descricao:
    "um jogo eletrónico de quebra-cabeça, plataforma e survival horror",
  plataformas: ["PS5", "PC", "XBOX"],
};
//console.log(littleNightmares3);

interface DLC extends JogoProps {
  jogoOriginal: JogoProps;
  novoConteudo: string[];
}

const DLClittleNightmares3: DLC = {
  id: "92",
  nome: "Little nightmares 3 - Secrets of The Spiral",
  descricao:
    "Dê vida a uma figura misteriosa, familiar a todas as crianças de Nowhere.",
  plataformas: ["PS5", "PC", "XBOX"],
  novoConteudo: [
    "Mais 1 Hora de jogo",
    "Explore um novo lugar em Nowhere",
    "Novas conquistas",
  ],
  jogoOriginal: littleNightmares3,
};
console.log(DLClittleNightmares3);
