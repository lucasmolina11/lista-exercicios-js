// Exercício 12 – Métodos em Objetos

const carro = {
  modelo: "Civic",
  ano: 2023,
  motor: "2.0",
  consumo: function (km) {
    // consumo estimado (km/l) varia conforme o motor
    const mediaPorMotor = {
      "1.0": 14,
      "1.6": 12,
      "2.0": 10
    };
    const media = mediaPorMotor[this.motor] || 10;
    return `Para ${km} km, consumo estimado de ${(km / media).toFixed(2)} litros.`;
  }
};

console.log(carro.consumo(200));
