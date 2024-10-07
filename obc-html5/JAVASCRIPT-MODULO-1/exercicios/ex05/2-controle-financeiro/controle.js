quest = parseFloat(
	prompt("Olá, qual a quantidade disponível de dinheiro na sua carteira? ")
);
let wallet = quest;
let option = "";

do {
	option = prompt(`Dinheiro disponível para saque: R$${wallet}
        Selecione uma das opções abaixo: 
        1 - Adicionar: 
        2 - Sacar: 
        3 - Finalizar consulta no caixa: `);

	switch (option) {
		case "1":
			quest = parseFloat(prompt("Digite o valor que deseja adicionar: "));
			wallet += quest;
			break;
		case "2":
			quest = parseFloat(prompt("Digite o valor que deseja sacar: "));
			if (quest <= wallet) {
				wallet -= quest;
			} else {
				alert("Saldo insuficiente para saque.");
			}
			break;
		case "3":
			window.alert("Consulta finalizada!");
			break;
		default:
			alert("Opção inválida.");
	}
} while (option != "3");

window.alert(`Extrato do seu saldo bancário após movimentações: R$ ${wallet}`);
