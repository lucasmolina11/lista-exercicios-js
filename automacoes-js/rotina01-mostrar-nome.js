// 01 - Mostrar nome do usuário

const os = require("os");

const usuario = os.userInfo().username;
const maquina = os.hostname();

console.log(`Usuário logado: ${usuario}`);
console.log(`Nome da máquina: ${maquina}`);
