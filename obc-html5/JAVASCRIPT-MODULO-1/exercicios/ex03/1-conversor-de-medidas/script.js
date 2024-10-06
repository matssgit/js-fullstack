window.alert("Bem-vindo(a) ao conversor de medidas!");

const valor = parseFloat(
	prompt("Insira um valor em metros para ser convertido: ")
);

const menu = prompt(`Selecione um valor de conversão abaixo: 
    1- Milímetro: (mm)
    2- Centímetro: (cm)
    3- Decímetro: (dm)
    4- Decâmetro: (dam)
    5- Hectômetro: (hm)
    6- Quilômetro: (km)`);

switch (menu) {
	case "1":
		window.alert(`O valor ${valor} em milímetros é: ${valor / 1000}mm`);
		break;
	case "2":
		window.alert(`O valor ${valor} em centímetros é: ${valor / 100}cm`);
		break;
	case "3":
		window.alert(`O valor ${valor} em decímetros é: ${valor / 10}dm`);
		break;
	case "4":
		window.alert(`O valor ${valor} em decâmetro é: ${valor * 10}dam`);
		break;
	case "5":
		window.alert(`O valor ${valor} em hectômetro é: ${valor * 100}hm`);
		break;
	case "6":
		window.alert(`O valor ${valor} em quilômetro é: ${valor * 1000}km`);
		break;
	default:
		window.alert("Opção inválida!");
}
