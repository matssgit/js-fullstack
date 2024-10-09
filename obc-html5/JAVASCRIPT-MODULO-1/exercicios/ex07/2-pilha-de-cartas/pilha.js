let option = "";
const cards = [];
let qtdCards = 0;

do {
	option = prompt(` Hora do duelo, seu deck está pronto! 
        Cartas disponíveis no deck: ${qtdCards}
        
        Selecione: 
        1 - Adicionar uma carta
        2 - Puxar uma carta
        3 - Encerrar o jogo`);

	switch (option) {
		case "1":
			let newCard = prompt("Digite o nome da carta que deseja adicionar: ");
			cards.unshift(newCard);
			qtdCards++;
			break;
		case "2":
			let drawnCard = cards.shift();
			if (drawnCard) {
				window.alert(`Você puxou a carta ${drawnCard}`);
				qtdCards--;
			} else {
				window.alert(`Não há cartas suficientes para puxar!`);
			}
			break;
		case "3":
			window.alert("End game!");
			break;
		default:
			window.alert("Opção inválida!");
	}
} while (option !== "3");
