// Exercício 12 – Métodos em Objetos

const carro = {
  modelo: "Civic Si",
  ano: 2008,
  motor: "2.0",
  consumo: function (km) {
        const mediaPorMotor = {
      "2.0": 10
    };
    const media = mediaPorMotor[this.motor] || 10;
    return `Para ${km} km, consumo estimado de ${(km / media).toFixed(2)} litros.`;
  }
};

console.log(carro.consumo(200));
