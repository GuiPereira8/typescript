// Propriedade Decorator.

function validarNome(tamanho: number) {
  // target = construtor da nossa classe
  // key = nossa propriedade
  return (target: any, key: string) => {
    // Criamos uma chave privada dinamicamente (ex: "_nome")
    // É aqui que o valor vai ficar realmente guardado na instância
    const chavePrivada = `_${key}`;

    //Usamos a function para 'function' normal para ter acesso ao 'this' da instância
    const getter = function (this: any) {
      return this[chavePrivada];
    };

    const setter = function (this: any, value: string) {
      if (value === "") {
        console.log("Você não pode deixar em branco");
      } else if (value.length < tamanho) {
        console.log(`O nome do jogo deve conter ${tamanho} ou mais caracteres`);
      } else {
        this[chavePrivada] = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

class Jogo {
  @validarNome(5)
  nome: string;

  // Podemos reaproveitar o decorator em outras propriedades.
  @validarNome(10)
  descricao: string;

  constructor(nome: string, descricao: string) {
    this.nome = nome;
    this.descricao = descricao;
  }
}

// TESTES:
const primeiroJogo = new Jogo("GOW", "Descrição God of war");
// Vai imprimir: "O nome do jogo deve conter 5 ou mais caracteres"

console.log(primeiroJogo.nome);
console.log(primeiroJogo.descricao);
// Vai imprimir: undefined (porque não salvou, já que reprovou na validação)

const segundoJogo = new Jogo(
  "Hollow Knight",
  "Explore o reino de hollownest em busca de segredos",
);
console.log(segundoJogo.nome);
console.log(segundoJogo.descricao);
// Vai imprimir: "Hollow Knight" (passou na validação e salvou)
