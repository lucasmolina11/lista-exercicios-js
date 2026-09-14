// Rotina 06 – Verificar se o PC está conectado à internet

async function verificarConexao() {
  try {
    await fetch("https://www.google.com", { method: "HEAD" });
    console.log("Conectado à internet");
  } catch (erro) {
    console.log("Sem conexão com a internet");
  }
}

verificarConexao();
