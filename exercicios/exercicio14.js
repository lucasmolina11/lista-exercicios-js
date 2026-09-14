// Exercício 14 – Função com Argumento de Função (Callback)

function aplicarOperacao(numero, operacao) {
  return operacao(numero);
}

function dobro(n) {
  return n * 2;
}

function quadrado(n) {
  return n * n;
}

console.log("Dobro de 5:", aplicarOperacao(5, dobro));
console.log("Quadrado de 5:", aplicarOperacao(5, quadrado));

// também funciona com função anônima/arrow diretamente:
console.log("Triplo de 5:", aplicarOperacao(5, (n) => n * 3));
