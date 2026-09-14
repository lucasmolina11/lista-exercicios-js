// Rotina 09 – Renomear arquivos em lote, adicionando um prefixo e uma numeração

const fs = require("fs");
const path = require("path");

const pasta = process.argv[2] || ".";
const prefixo = process.argv[3] || "arquivo";

try {
  const arquivos = fs
    .readdirSync(pasta)
    .filter((nome) => fs.statSync(path.join(pasta, nome)).isFile());

  arquivos.forEach((nomeAntigo, indice) => {
    const extensao = path.extname(nomeAntigo);
    const numero = String(indice + 1).padStart(2, "0");
    const nomeNovo = `${prefixo}_${numero}${extensao}`;

    fs.renameSync(path.join(pasta, nomeAntigo), path.join(pasta, nomeNovo));
    console.log(`${nomeAntigo}  ->  ${nomeNovo}`);
  });

  console.log(`\n${arquivos.length} arquivo(s) renomeado(s) com sucesso.`);
} catch (erro) {
  console.error("Erro ao renomear arquivos:", erro.message);
}
