// Variáveis globais úteis
const boardRegions = document.querySelectorAll("#gameBoard span");
let vBoard = [];
let turnPlayer = "";

// Atualiza o título do jogador
function updateTitle() {
	const playerInput = document.getElementById(turnPlayer);
	document.getElementById("turnPlayer").innerText = playerInput.value;
}

// Inicializa o jogo
function initializeGame() {
	// Inicializa as variáveis globais
	vBoard = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	];
	turnPlayer = "player1";

	// Ajusta o título da página
	document.querySelector("h2").innerHTML =
		'Vez de: <span id="turnPlayer"></span>';
	updateTitle();

	// Limpa o tabuleiro e adiciona os eventos de clique
	boardRegions.forEach(function (element) {
		element.classList.remove("win");
		element.innerText = "";
		element.classList.add("cursor-pointer");
		element.addEventListener("click", handleBoardClick);
	});
}

function disableRegion(element) {
	element.style.cursor = "default";
	element.removeEventListener("click", handleBoardClick);
}

// Manipula o clique no tabuleiro
function handleBoardClick(ev) {
	const span = ev.currentTarget;
	const region = span.dataset.region; // Ex: "0.1"
	const rowColumnPair = region.split("."); // ["0", "1"]
	const row = rowColumnPair[0];
	const column = rowColumnPair[1];

	if (turnPlayer === "player1") {
		span.innerText = "X";
		vBoard[row][column] = "X";
		turnPlayer = "player2"; // Alterna a vez do jogador
	} else {
		span.innerText = "O";
		vBoard[row][column] = "O";
		turnPlayer = "player1"; // Alterna a vez do jogador
	}

	updateTitle(); // Atualiza o título após a alternância
	console.clear();
	console.table(vBoard);
	disableRegion(span);
}

// Inicia o jogo ao clicar no botão "start"
document.getElementById("start").addEventListener("click", initializeGame);
