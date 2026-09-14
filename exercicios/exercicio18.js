// Exercício 18 – Tratamento de Exceções

function raizQuadrada(numero) {
  if (numero < 0) {
    throw new Error("Não é possível calcular raiz quadrada de número negativo.");
  }
  return Math.sqrt(numero);
}

try {
  console.log(raizQuadrada(16));
  console.log(raizQuadrada(-4)); // vai lançar exceção
} catch (erro) {
  console.log("Erro capturado:", erro.message);
} finally {
  console.log("Execução finalizada.");
}
