// Afirmando algum tipo.

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

// Estamos afirmando que o statusAtual é de fato um número!
mudaStatus = statusAtual as number;

// Outra forma/meneira de afirmar um tipo.
mudaStatus = <number>statusAtual;

console.log(mudaStatus);

let query: unknown = "hambúrguer";
let processo: string = query as string;
console.log(`Search TERM: ${processo}`);
