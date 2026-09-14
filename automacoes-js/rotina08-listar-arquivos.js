// Rotina 08 – Listar arquivos de uma pasta (com tamanho e data de modificação)

const fs = require("fs");
const path = require("path");

const pasta = process.argv[2] || ".";

function paraKB(bytes) {
  return (bytes / 1024).toFixed(1);
}

try {
  const arquivos = fs.readdirSync(pasta);

  console.log(`Arquivos em "${path.resolve(pasta)}":\n`);

  arquivos.forEach((nomeArquivo) => {
    const caminhoCompleto = path.join(pasta, nomeArquivo);
    const info = fs.statSync(caminhoCompleto);
    const tipo = info.isDirectory() ? "[pasta]" : "[arquivo]";

    console.log(
      `${tipo.padEnd(10)} ${nomeArquivo.padEnd(30)} ${paraKB(info.size)} KB   modificado em ${info.mtime.toLocaleString("pt-BR")}`
    );
  });
} catch (erro) {
  console.error("Erro ao ler a pasta:", erro.message);
}
