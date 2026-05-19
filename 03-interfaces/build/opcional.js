"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const novaConta = {
    nome: "Giovanna",
    email: "exemplo123@gmail.com",
    status: true,
};
function novoUser(usuario) {
    console.log(usuario.nome);
    console.log(usuario.email);
}
novoUser({ nome: "Sofia", email: "sofia01923@gmail.com", status: false });
