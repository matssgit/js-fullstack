let option = "";
let menu = [];
let qtd = 0;

do {
	option = prompt(`Bem-vindo(a) ao cadastro de imóveis
        - Quantidade de imóveis cadastrados: ${qtd}
        ---- Selecione uma das opções abaixo ----
        
        1 - Salvar um imóvel
        2 - Mostrar imóveis cadastrados
        3 - Encerrar programa`);

	switch (option) {
		case "1":
			const property = { nome: "", quartos: 0, banheiros: 0, garagem: "" };
			property.nome = prompt("Nome do proprietário: ");
			property.quartos = parseInt(prompt("Quantidade de quartos: "));
			property.banheiros = parseInt(prompt("Quantidade de banheiros"));
			property.garagem = prompt("Possui garagem? (Sim / Não) ");

			const confirmation = confirm(`
                Salvar este imóvel?\n
                Proprietário: ${property.nome}
                Quartos: ${property.quartos}
                Banheiros: ${property.banheiros}
                Possui Garagem: ${property.garagem}`);
			if (confirmation) {
				menu.push(property);
				qtd++;
			} else {
				window.alert("Cadastro Cancelado!");
			}
			break;
		case "2":
			let message = "Imóveis cadastrados:\n";
			for (let i = 0; i < menu.length; i++) {
				message += `
                Imóvel ${i + 1}: 
                Nome do Proprietário: ${menu[i].nome}
                Quartos: ${menu[i].quartos}
                Banheiros: ${menu[i].banheiros}
                Garagem: ${menu[i].garagem}\n`;
			}
			window.alert(message);
			break;
		case "3":
			window.alert("Programa encerrado!");
			break;
		default:
			window.alert("Opção inválida!");
	}
} while (option !== "3");

console.log(menu);
