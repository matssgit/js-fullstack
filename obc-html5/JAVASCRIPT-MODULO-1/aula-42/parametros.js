function dobro(x) {
	alert(`O dobro de ${x} é ${x * 2}`);
}

// dobro(5);
// dobro(7);

// dobro();

function dizerOla(nome = "mundo") {
	alert(`Olá, ${nome}`);
}

// dizerOla("Matheus");
// dizerOla();

function soma(a, b) {
	alert(`O resultado da soma é: ${a + b}`);
}

// soma(7, 6);

function criarUsuario(nome, email, senha, tipo = "admin") {
	const usuario = {
		nome, //mesmo que nome: nome
		email,
		senha,
		tipo,
	};
	console.log(usuario);
}

function novoUsuario(nome, tipo = "admin", email, senha) {
	const usuario = {
		nome, //mesmo que nome: nome
		email,
		senha,
		tipo,
	};
	console.log(usuario);
}

// criarUsuario("Matheus", "matheus@email.com", "1234");
// novoUsuario("Matheus", "matheus@email.com", "1234");

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
	// ...
}

function objetoComoParametro(usuario) {
	// ...
	usuario.nome;
	usuario.email;
}

muitosParametros();

const dadosDoUsuario = {
	nome: "",
	telefone: "",
	email: "",
	senha: "",
	endereco: "",
	aniversario: "",
};

objetoComoParametro(dadosDoUsuario);
