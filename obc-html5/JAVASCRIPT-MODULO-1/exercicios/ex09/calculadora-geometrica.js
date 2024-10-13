function triangulo() {
	let base = parseInt(prompt("Insira o valor da base: "));
	let altura = parseInt(prompt("Insira o valor da altura: "));
	let resultado = (base * altura) / 2;
	return window.alert(`A área do triângulo é: ${resultado}`);
}

function retangulo() {
	let base = parseInt(prompt("Insira o valor da base: "));
	let altura = parseInt(prompt("Insira o valor da altura: "));
	let resultado = base * altura;
	return window.alert(`A área do retângulo é: ${resultado}`);
}

function quadrado() {
	let lado = parseInt(prompt("Insira o valor de um lado do quadrado: "));
	let resultado = lado * lado;
	return window.alert(`A área do quadrado é: ${resultado}`);
}

function trapezio() {
	let baseMaior = parseInt(prompt("Insira o valor da base maior: "));
	let baseMenor = parseInt(prompt("Insira o valor da base menor: "));
	let altura = parseInt(prompt("Insira o valor da altura: "));
	let resultado = ((baseMaior + baseMenor) * altura) / 2;
	return window.alert(`A área do trapézio é: ${resultado}`);
}

function circulo() {
	const pi = 3.14;
	let raio = parseFloat(prompt("Insira o valor do raio do círculo: "));
	let resultado = pi * (raio * raio);
	return window.alert(`A área do círculo é: ${resultado}`);
}

function executar() {
	do {
		option = prompt(`Bem vindo(a) a Calculadora Geométrica! 
        Selecione uma opção abaixo para calcular uma área desejada: 
        1 - Área do triângulo
        2 - Área do retângulo
        3 - Área do quadrado
        4 - Área do trapézio
        5 - Área do círculo
        6 - Sair do programa`);

		switch (option) {
			case "1":
				triangulo();
				break;
			case "2":
				retangulo();
				break;
			case "3":
				quadrado();
				break;
			case "4":
				trapezio();
				break;
			case "5":
				circulo();
				break;
			case "6":
				window.alert("Programa encerrado!");
				break;
			default:
				window.alert("Opção inválida!");
		}
	} while (option !== "6");
}
let option = "";

executar();
