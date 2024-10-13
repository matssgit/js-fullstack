let pessoa = {
	nome: "Matheus",
	idade: 28,
	dizerOla() {
		console.log(`Olá, mundo! Meu nome é ${this.nome}`);
	},
};

console.log(pessoa);

pessoa.dizerOla();
