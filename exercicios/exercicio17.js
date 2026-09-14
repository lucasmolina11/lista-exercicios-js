// Exercício 17 – Função Construtora com Prototype

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

const pessoa1 = new Pessoa("Ana", 28);
const pessoa2 = new Pessoa("Bruno", 35);

pessoa1.falar();
pessoa2.falar();
