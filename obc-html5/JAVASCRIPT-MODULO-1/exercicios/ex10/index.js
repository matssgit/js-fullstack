const vagas = [];

function listarVagas() {
	if (vagas.length === 0) {
		alert("Nenhuma vaga cadastrada!");
		return;
	}
	const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
		textoFinal += `${indice}. ${vaga.nome} (${vaga.candidatos.length} candidatos)\n`;
		return textoFinal;
	}, "");
	alert(vagasEmTexto);
}

function novaVaga() {
	const nome = prompt("Informe um nome para a vaga:");
	const descricao = prompt("Informe uma descrição para a vaga:");
	const dataLimite = prompt(
		"Informe uma data limite (dd/mm/aaaa) para a vaga:"
	);
	const confirmacao = confirm(`Deseja criar uma nova vaga com essas informações?
Nome: ${nome}
Descrição: ${descricao}
Data Limite: ${dataLimite}`);
	if (confirmacao) {
		const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
		vagas.push(novaVaga);
		alert("Vaga criada.");
	}
}

function exibirVaga() {
	const indice = prompt("Informe o índice da vaga que deseja exibir:");
	if (indice >= vagas.length || indice < 0) {
		alert("Índice inválido");
		return;
	}
	const vaga = vagas[indice];
	const candidatosEmTexto = vaga.candidatos.reduce(
		(textoFinal, candidato) => textoFinal + `\n- ${candidato}`,
		""
	);
	alert(`Vaga nº ${indice}
Nome: ${vaga.nome}
Descrição: ${vaga.descricao}
Data limite: ${vaga.dataLimite}
Quantidade de candidatos: ${vaga.candidatos.length}
Candidatos inscritos: ${candidatosEmTexto}`);
}

function inscreverCandidato() {
	const candidato = prompt("Informe o nome do(a) candidato(a):");
	const indice = prompt(
		"Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever:"
	);
	const vaga = vagas[indice];
	const confirmacao =
		confirm(`Deseja inscrever o candidato ${candidato} na vaga ${indice}?
Nome: ${vaga.nome}
Descrição: ${vaga.descricao}
Data limite: ${vaga.dataLimite}`);
	if (confirmacao) {
		vaga.candidatos.push(candidato);
		alert("Inscrição realizada.");
	}
}

function excluirVaga() {
	const indice = prompt("Informe o índice que deseja excluir:");
	const vaga = vagas[indice];
	const confirmacao = confirm(`Tem certeza que deseja excluir a vaga ${indice}?
Nome: ${vaga.nome}
Descrição: ${vaga.descricao}
Data limite: ${vaga.dataLimite}`);
	if (confirmacao) {
		vagas.splice(indice, 1);
		alert("Vaga excluída.");
	}
}

function exibirMenu() {
	const opcao = prompt(`Cadastro de Vagas de Emprego
Escolha uma das opções:
1. Listar vagas disponíveis
2. Criar nova vaga
3. Visualizar uma vaga
4. Inscrever um candidato
5. Excluir uma vaga
6. Sair`);
	return opcao;
}

function executar() {
	let opcao = "";
	do {
		opcao = exibirMenu();
		switch (opcao) {
			case "1":
				listarVagas();
				break;
			case "2":
				novaVaga();
				break;
			case "3":
				exibirVaga();
				break;
			case "4":
				inscreverCandidato();
				break;
			case "5":
				excluirVaga();
				break;
			case "6":
				alert("Saindo...");
				break;
			default:
				alert("Opção inválida!");
		}
	} while (opcao !== "6");
}

executar();
