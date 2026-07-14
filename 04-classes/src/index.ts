import { connection, statusConnection } from "./database/connection"; // export: é necessário  usar chaves "{}".
import { resetarApp, getStatusApp } from "./database/aplicativo";
//import status from "./database/aplicativo"; // export default: apenas dar o nome sem as chaves.

function acessarSistema() {
  connection({ ip: "192.62.1.14", name: "MySQL" });
}
//acessarSistema();
//statusConnection();
getStatusApp();
resetarApp();
