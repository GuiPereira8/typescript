//interfade é um "contrato" que você cria no seu código.
// Um conjunto de dados (um padrão) para descrever a estrutura de um objeto.
interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

// O objeto abaixo deve seguir os mesmos tipos que foi definido na interface acima.
// Se tiver uma propriedade a mais não é aceita e da erro.
const pizzaMaestria: LojaProps = {
  nome: "pizza bahiana",
  endereco: "Rua avenida logo ali",
  status: true,
};
//console.log(pizzaMaestria);

function novaLoja({ nome, endereco, status }: LojaProps): void {
  console.log(`Loja ${nome} criada com sucesso!`);
  console.log(`Endereço da loja: ${endereco}`);
  console.log(`Status da loja: ${status}`);

  console.log("===========<>===========");
}

novaLoja({ nome: "PapaPizzas", endereco: "Rua adelio 2°", status: true });
novaLoja({ nome: "Barber shop", endereco: "Rua euclides", status: false });
