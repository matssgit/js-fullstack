let queue = "";
let patient = [];

do {
	queue = prompt(`Fila de espera: 
        Pacientes na fila de espera: \n${patient.join(", ")}
        Selecione: 
        1 - Adicionar novo paciente
        2 - Consultar paciente
        3 - Sair`);

	switch (queue) {
		case "1":
			let newPatient = prompt("Digite o nome do paciente: ");
			patient.push(newPatient);
			break;
		case "2":
			let consult = patient.shift();
			if (consult) {
				window.alert(`Paciente ${consult} foi chamado para consulta!`);
			} else {
				window.alert("Não há pacientes na fila.");
			}
			break;
		case "3":
			window.alert("Programa encerrado!");
			break;
		default:
			window.alert("Opção inválida!");
	}
} while (queue !== "3");

window.alert(`Extrato final da fila de espera: \n${patient.join(", ")}`);
