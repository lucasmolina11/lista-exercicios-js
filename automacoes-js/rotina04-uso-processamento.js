// Rotina 04 – Apresentar uso de processamento (CPU) do PC

const os = require("os");

function medirUsoCPU() {
  const cpus = os.cpus();
  let totalOcioso = 0;
  let totalTicks = 0;

  cpus.forEach((cpu) => {
    for (const tipo in cpu.times) {
      totalTicks += cpu.times[tipo];
    }
    totalOcioso += cpu.times.idle;
  });

  return { totalOcioso, totalTicks };
}

console.log("Medindo uso de CPU (aguarde 1 segundo)...");

const medida1 = medirUsoCPU();

setTimeout(() => {
  const medida2 = medirUsoCPU();

  const diferencaOcioso = medida2.totalOcioso - medida1.totalOcioso;
  const diferencaTotal = medida2.totalTicks - medida1.totalTicks;
  const percentualUso = 100 - Math.round((100 * diferencaOcioso) / diferencaTotal);

  console.log(`Núcleos de CPU: ${os.cpus().length}`);
  console.log(`Uso de CPU aproximado: ${percentualUso}%`);
}, 1000);
