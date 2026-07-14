"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/connection");
const aplicativo_1 = require("./database/aplicativo");
function acessarSistema() {
    (0, connection_1.connection)({ ip: "192.62.1.14", name: "MySQL" });
}
(0, aplicativo_1.getStatusApp)();
(0, aplicativo_1.resetarApp)();
