// Generics

/* 
    >>> Permite criar estruturas que serão adaptaveis a vários tipos de dados.
    (Ajudando a reaproveitar melhor nosso código e deixa-lo mais flexível)

    >> Podemos usar os generics em:
    Funções | interfaces / types | classes
*/

/* 
    Alguns padrões de nomes que você vai encontrar com Generics
    S -> State;
    T -> Type;
    K -> Key;
    V -> Value;
    E -> Element;
*/

function repositorio<T extends string | number>() {
  let dados: T;

  function getDados() {
    return dados;
  }

  function setDados(novoDado: T) {
    dados = novoDado;
  }

  return { getDados, setDados };
}

const repo1 = repositorio<string | number>();
repo1.setDados(18);
repo1.setDados("18");
console.log(repo1.getDados());
