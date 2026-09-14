// Rotina 03 – Apresentar hora pegando dado de um servidor global (API online)

async function obterHoraServidor() {
  try {
    const resposta = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo");
    const dados = await resposta.json();

    console.log("Hora obtida do servidor global:");
    console.log("Data/hora:", dados.datetime);
    console.log("Fuso horário:", dados.timezone);
    console.log("UTC offset:", dados.utc_offset);
  } catch (erro) {
    console.error("Não foi possível obter a hora do servidor. Verifique sua conexão com a internet.");
    console.error("Detalhes:", erro.message);
  }
}

obterHoraServidor();
