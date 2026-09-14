// 02 – Apresentar hora do PC (hora local do sistema)


const agora = new Date();

console.log("Data e hora do PC:", agora.toLocaleString("pt-BR"));
console.log("Apenas hora:", agora.toLocaleTimeString("pt-BR"));
console.log("Fuso horário do sistema:", Intl.DateTimeFormat().resolvedOptions().timeZone);
