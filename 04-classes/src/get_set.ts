class Jogo {
  private servidor: string;
  private id: string = "1824";

  constructor(servidor: string) {
    this.servidor = servidor;
  }

  //Método GET = Para pegar o valor ao ínves de acessar diretamente a propriedade.
  get getServidorIP() {
    console.log("==>Método Get<==");
    return this.servidor;
  }

  // Método SET = Passar / alterar algum atributo.
  set setServidorIP(novoIp: string) {
    if (this.servidor === novoIp) {
      console.error("ERRO! O novo IP deve ser diferente do IP antigo.");
    }
    this.servidor = novoIp;
  }
}

const minecraftServer = new Jogo("192.168.8.10");

minecraftServer.setServidorIP = "192.250.8.10";
console.log(minecraftServer.getServidorIP);
