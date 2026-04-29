const message = "Olá, Mundo!";
const nome = "Guilherme";

console.log(`Bem vindo, ${nome}`);
console.log(message);

class Sistema {
  ip: string;

  constructor(ip: string) {
    this.ip = ip;
  }
}
const servidor1 = new Sistema("192.168.500.2");
