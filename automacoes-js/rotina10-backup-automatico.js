// Rotina 10 – Backup automático de uma pasta (copia tudo para uma pasta de

const fs = require("fs");
const path = require("path");

const origem = process.argv[2];
const destinoBase = process.argv[3] || "./backups";

if (!origem) {
  console.error("Uso: node rotina10-backup-automatico.js <pasta-origem> [pasta-destino]");
  process.exit(1);
}

function timestamp() {
  const agora = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return (
    `${agora.getFullYear()}-${pad(agora.getMonth() + 1)}-${pad(agora.getDate())}` +
    `_${pad(agora.getHours())}-${pad(agora.getMinutes())}-${pad(agora.getSeconds())}`
  );
}

const nomeOrigem = path.basename(path.resolve(origem));
const destinoFinal = path.join(destinoBase, `${nomeOrigem}_backup_${timestamp()}`);

try {
  fs.cpSync(origem, destinoFinal, { recursive: true });
  console.log(`Backup concluído com sucesso em: ${destinoFinal}`);
} catch (erro) {
  console.error("Erro ao realizar o backup:", erro.message);
}
