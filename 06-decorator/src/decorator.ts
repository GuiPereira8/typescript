/* >> DECORATORS <<
    Class
    Propriedade
    Métodos
    Parâmetros (BEM POUCO USADO)
    GETTERS / SETTERS (BEM POUCO USADO)
*/

// Target = receber o construtor da nossa classe.
// function logInfo(target: any) {
//   console.log("O Sistema está online!");
// }

// >>> Padrão factory (Fabrica) | Função que vai retornar a criação do decorator.
function logInfo(message: string) {
  return (target: any) => {
    console.log(`${message}, ${target}`);
  };
}

// @logInfo("Servidor está rodando!")
// class Sistema {}

// ============== PRATICANDO ==============

function setIpServidor(novoIp: string) {
  // target é o construtor da nossa classe.
  return (target: any) => {
    return class extends target {
      ip = novoIp;
    };
  };
}

@setIpServidor("192.162.1.10")
class Servidor {}

const servidor1 = new Servidor();
console.log(servidor1);
