// Exercício 4 – Condicional if/else

function verificarIdade(idade) {
  if (idade < 18) {
    console.log("Menor de idade");
  } else if (idade <= 65) {
    console.log("Maior de idade");
  } else {
    console.log("Idoso");
  }
}

// Em navegador, a idade poderia vir de um prompt:
// const idade = Number(prompt("Digite sua idade:"));
verificarIdade(70);
