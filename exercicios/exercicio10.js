// Exercício 10 – Arrays e Métodos

let frutas = ["maçã", "banana", "uva", "morango", "abacaxi"];

frutas.push("laranja");           // adiciona no final
console.log("Após push:", frutas);

frutas.pop();                     // remove o último
console.log("Após pop:", frutas);

let algumasFrutas = frutas.slice(1, 3); // extrai uma parte sem alterar o original
console.log("Slice (1,3):", algumasFrutas);

let listaFrutas = frutas.join(", "); // transforma em string
console.log("Join:", listaFrutas);
