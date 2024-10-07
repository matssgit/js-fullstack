const tourist = prompt("Qual seu nome, turista?");
let visit = prompt("Você já visitou alguma cidade? (Sim / Não)");
let qtd = 0;
let cities = "";

while (visit.toLowerCase() === "sim") {
	let newCity = prompt("Qual cidade você já visitou?");
	cities += newCity + ", ";
	qtd++;
	visit = prompt("Você já visitou alguma outra cidade? (Sim / Não)");
}

window.alert(
	`Nome do turista: ${tourist}\n- Qtd de cidades visitadas: ${qtd}\n- Nome das cidades: ${cities}`
);
