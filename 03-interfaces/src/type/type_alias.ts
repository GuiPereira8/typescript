type Uuid = string | number | null;

function acessar(uuid: Uuid, nome: string) {
  console.log(`ID ${uuid} - Bem vindo ${nome}`);
}

function logUsuario(uuid: Uuid) {
  console.log(`Conta referente a UUID: ${uuid}`);
}
/*
acessar(123, "Guilherme");
acessar(65, "Lucas");
acessar("32", "Sofia");
logUsuario("123");
*/

type Moedas = "BRL" | "EUR" | "USD" | "BTC";

function comprarItem(moeda: Moedas) {
  console.log(`Comprando com a moeda: ${moeda}`);
}

comprarItem("BTC");
