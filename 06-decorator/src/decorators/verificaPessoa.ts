// Decorator Método, ele só é chamado quando nosso método for chamado em algum local.

export function verificaPessoa(idade: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // console.log(`Target: ${target}`);
    // console.log(`Key: ${key}`);
    // console.log(`Descriptor: ${descriptor.value}`);

    const metodoOriginal = descriptor.value; // Salvar nosso método original.

    // Reescrevendo nosso método.
    descriptor.value = function () {
      if (idade < 18) {
        console.log("Estamos cadastrando como Pessoa menor de idade");
        return metodoOriginal.apply(this);
      } else {
        console.log("Adulto cadastrado no sistema");

        // Agora queremos retornar o método original para ele ser executado.
        return metodoOriginal.apply(this);
      }
    };
  };
}
