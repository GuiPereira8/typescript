function totalVendas(...valores: number[]): void {
  console.log(`Você fez ${valores.length} vendas hoje!`);
}
totalVendas(10, 20, 30, 40, 32, 3, 8);

function mostrarNome(...nomes: string[]) {
  console.log(nomes.length);
  nomes.map((nome) => {
    console.log(nome);
  });
}

mostrarNome("sofia", "valeria", "lucas", "guilherme");
