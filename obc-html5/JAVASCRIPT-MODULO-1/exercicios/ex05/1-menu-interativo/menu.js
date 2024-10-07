let menu = "";

do {
	menu = parseInt(
		prompt(`Menu ativado! Selecione uma das opções abaixo: 
            1 - Primeira opção
            2 - Segunda Opção
            3 - Terceira Opção
            4 - Quarta Opção
            5 - Encerrar`)
	);

	switch (menu) {
		case 1:
			window.alert("Você escolheu a primeira opção");
			break;
		case 2:
			window.alert("Você escolheu a segunda opção");
			break;
		case 3:
			window.alert("Você escolheu a terceira opção");
			break;
		case 4:
			window.alert("Você escolheu a quarta opção");
			break;
		case 5:
			window.alert("Programa encerrado!");
			break;
		default:
			window.alert("Opção inválida.");
	}
} while (menu != 5);
