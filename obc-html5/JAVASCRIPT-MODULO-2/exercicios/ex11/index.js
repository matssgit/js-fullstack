let elenco = [];

function escalar() {
	const nome = prompt("Insira o nome do jogador que deseja escalar: ");
	const posicao = prompt("Digite a posição que o jogador atua: ");
	const numero = prompt("Informe o número da camisa do jogador: ");
	const jogador = { nome, posicao, numero };

	let confirmacao = confirm(`Deseja confirmar a escalação do jogador: 
        Nome: ${jogador.nome}
        Posição: ${jogador.posicao}
        Número: ${jogador.numero}`);

	if (confirmacao) {
		elenco.push(jogador);
		alert("Jogador escalado!");
	}
}

function remover() {
	const numero = prompt(
		"Informe o número da camisa do jogador que deseja remover: "
	);
	const indice = elenco.findIndex((jogador) => jogador.numero === numero);

	if (indice !== -1) {
		const jogador = elenco[indice];
		let confirmacao = confirm(`Realmente deseja remover o jogador:
    Nome: ${jogador.nome}
    Posição: ${jogador.posicao}
    Número: ${jogador.numero}`);

		if (confirmacao) {
			elenco.splice(indice, 1);
			alert("Jogador removido!");
			exibir();
		} else {
			alert("Remoção cancelada!");
		}
	} else {
		alert("Jogador não encontrado!");
	}
}

function exibir() {
	const elencoList = document.getElementById("elenco");
	elencoList.innerHTML = "";

	elenco.forEach((jogador) => {
		const jogadorDiv = document.createElement("div");
		jogadorDiv.innerHTML = `<strong>Nome:</strong> ${jogador.nome}<br>
                                <strong>Posição:</strong> ${jogador.posicao}<br>
                                <strong>Número:</strong> ${jogador.numero}<br><br>`;
		elencoList.appendChild(jogadorDiv);
	});
}
