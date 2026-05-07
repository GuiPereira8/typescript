//Type Array

//Formas de declaração do tipo array.
//let filmes: string[];
//let filmes: Array<string>;

//Formas de declaração para muiltiplos tipos.
//let filmes: Array<string | number>;
let filmes: (string | number)[];
filmes = ["Filme 1", "Filme 2"];
filmes.push(32);
console.log(`Meus filmes: ${filmes}`);

let numeros: number[];
numeros = [1, 4, 8, 21, 32];

console.log(numeros);
numeros.push(50);
console.log("Lista atualizada: ", numeros);
