// Exercício 7 – Laço while e do...while
//
// Diferença: no `while`, a condição é testada ANTES de cada execução do bloco.
// Se a condição já começar falsa, o bloco nunca executa.
// No `do...while`, o bloco executa PELO MENOS UMA VEZ, pois a condição só é
// avaliada ao final da primeira volta.

// while
let i = 1;
while (i <= 5) {
  console.log("while:", i);
  i++;
}

// do...while
let j = 1;
do {
  console.log("do...while:", j);
  j++;
} while (j <= 5);
