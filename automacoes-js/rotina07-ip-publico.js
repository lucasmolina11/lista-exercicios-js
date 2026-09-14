// Rotina 07 – Descobrir o IP público do PC

async function obterIPPublico() {
  try {
    const resposta = await fetch("https://api.ipify.org?format=json");
    const dados = await resposta.json();
    console.log("IP público:", dados.ip);
  } catch (erro) {
    console.error("Não foi possível obter o IP público. Verifique sua conexão.");
  }
}

obterIPPublico();
