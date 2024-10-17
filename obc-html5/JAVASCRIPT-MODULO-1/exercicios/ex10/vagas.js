let menu = "";
let vagas = [];

function listarVagas() {
	if (vagas.length === 0) {
		alert("Nenhuma vaga cadastrada!");
	} else {
		let listaVagas = "Lista de Vagas:\n";
		vagas.forEach((vaga, i) => {
			listaVagas += `${i}: Nome: ${vaga.nomeVaga}, Candidatos: ${vaga.candidatos.length}\n`;
		});
		alert(listaVagas);
	}
}

function criarVaga() {
	let vaga = {
		nomeVaga: prompt("Digite um nome para a vaga: "),
		descricao: prompt("Digite uma descrição da vaga: "),
		dataLimite: new Date(prompt("Digite a data limite (AAAA-MM-DD): ")),
		candidatos: [],
	};

	let confirmacao = confirm(`Deseja confirmar a criação da vaga?
Nome da Vaga: ${vaga.nomeVaga}
Descrição: ${vaga.descricao}
Data Limite: ${vaga.dataLimite.toLocaleDateString("pt-BR")}`);

	if (confirmacao) {
		vagas.push(vaga);
		alert("Vaga cadastrada com sucesso!");
	} else {
		alert("Cadastro de vaga cancelado!");
	}
}

function visualizarVaga() {
	let indice = parseInt(
		prompt("Digite o índice da vaga que deseja visualizar: ")
	);
	if (indice >= 0 && indice < vagas.length) {
		let vaga = vagas[indice];
		let candidatos = vaga.candidatos.reduce(
			(acc, candidato, index) => acc + `${index + 1}. ${candidato}\n`,
			""
		);
		let infoVaga = `Índice: ${indice}
Nome: ${vaga.nomeVaga}
Descrição: ${vaga.descricao}
Data Limite: ${vaga.dataLimite.toLocaleDateString("pt-BR")}
Quantidade de Candidatos: ${vaga.candidatos.length}
Nomes dos Candidatos:\n${candidatos}`;
		alert(infoVaga);
	} else {
		alert("Índice inválido!");
	}
}

function inscreverCandidato() {
	let candidato = prompt("Digite o nome do candidato(a): ");
	let indice = parseInt(
		prompt(`Tabela de vagas disponíveis:
${vagas.map((vaga, i) => `${i}: ${vaga.nomeVaga}`).join("\n")}`)
	);

	if (indice >= 0 && indice < vagas.length) {
		let confirmacao = confirm(`Deseja confirmar a inscrição na vaga?
Nome do candidato: ${candidato}
Vaga selecionada: ${vagas[indice].nomeVaga}`);

		if (confirmacao) {
			vagas[indice].candidatos.push(candidato);
			alert("Candidato inscrito com sucesso!");
		} else {
			alert("Inscrição cancelada!");
		}
	} else {
		alert("Índice inválido!");
	}
}

function excluirVaga() {
	let excluir = parseInt(
		prompt("Digite o índice da vaga que deseja excluir: ")
	);
	if (excluir >= 0 && excluir < vagas.length) {
		let vaga = vagas[excluir];
		let infoVaga = `Índice: ${excluir}
Nome: ${vaga.nomeVaga}
Descrição: ${vaga.descricao}
Data Limite: ${vaga.dataLimite.toLocaleDateString("pt-BR")}
Nome dos Candidatos: ${vaga.candidatos.join(", ")}`;
		let confirmacao = confirm(`Deseja realmente excluir essa vaga?
${infoVaga}`);

		if (confirmacao) {
			vagas = vagas.filter((_, index) => index !== excluir);
			alert("Vaga excluída com sucesso!");
		} else {
			alert("Exclusão cancelada!");
		}
	} else {
		alert("Índice inválido!");
	}
}

do {
	menu = prompt(`Sistema de Vagas de Emprego
    Selecione uma das opções abaixo:
    1 - Listar vagas disponíveis
    2 - Criar uma nova vaga
    3 - Visualizar uma vaga
    4 - Inscrever um candidato em uma vaga
    5 - Excluir uma vaga
    6 - Sair`);

	switch (menu) {
		case "1":
			listarVagas();
			break;
		case "2":
			criarVaga();
			break;
		case "3":
			visualizarVaga();
			break;
		case "4":
			inscreverCandidato();
			break;
		case "5":
			excluirVaga();
			break;
		case "6":
			alert("Programa encerrado!");
			break;
		default:
			alert("Opção inválida!");
	}
} while (menu !== "6");

console.log(vagas);
