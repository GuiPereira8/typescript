class Conta {
  //Private: Ele não pode ser acessado ou modificado fora da classe.
  //Só pode ser acessado dentro da classe em que foi criado.
  private limite: number = 450;

  private aumentarLimite(quantidade: number): void {
    if (quantidade < 1000) {
      this.limite = quantidade;
      console.log(`Parabéns! Seu limite agora é ${quantidade}`);
    } else {
      console.log(`Infelizmente seu limite foi reprovado`);
    }
  }

  protected solicitarLimite(quantidade: number) {
    return this.aumentarLimite(quantidade);
  }

  solicitarLimiteApp(
    estaAutenticado: boolean,
    quantidade: number,
  ): void | boolean {
    if (estaAutenticado) {
      this.aumentarLimite(quantidade);
    } else {
      return false;
    }
  }
}

class BancoAfiliado extends Conta {
  limiteAfiliado() {
    return this.solicitarLimite(950);
  }
}

const usuario123 = new Conta();
usuario123.solicitarLimiteApp(true, 800);

console.log(usuario123);

console.log("=========<>=========");

const joao = new BancoAfiliado();

console.log(joao);
joao.limiteAfiliado();
