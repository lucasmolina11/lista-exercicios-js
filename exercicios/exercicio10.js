// Exercício 10 – Arrays e Métodos

let frutas = ["maçã", "banana", "uva", "morango", "abacaxi"];

frutas.push("laranja");           
console.log("Após push:", frutas);

frutas.pop();                     
console.log("Após pop:", frutas);

let algumasFrutas = frutas.slice(1, 3); 
console.log("Slice (1,3):", algumasFrutas);

let listaFrutas = frutas.join(", "); 
console.log("Join:", listaFrutas);
