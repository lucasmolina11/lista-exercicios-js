// Rotina 05 – Apresentar uso de memória RAM

const os = require("os");

function paraGB(bytes) {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
}

const memoriaTotal = os.totalmem();
const memoriaLivre = os.freemem();
const memoriaUsada = memoriaTotal - memoriaLivre;
const percentualUso = ((memoriaUsada / memoriaTotal) * 100).toFixed(1);

console.log(`Memória total: ${paraGB(memoriaTotal)} GB`);
console.log(`Memória usada: ${paraGB(memoriaUsada)} GB`);
console.log(`Memória livre: ${paraGB(memoriaLivre)} GB`);
console.log(`Uso de memória: ${percentualUso}%`);
