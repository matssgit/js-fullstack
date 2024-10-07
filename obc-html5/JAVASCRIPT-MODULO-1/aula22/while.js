let velocidade = 80;

while (velocidade > 0) {
	window.alert(`O carro está a ${velocidade}km/h`);
	velocidade -= 20;
	window.alert("Diminuindo 20km/h");

	if (velocidade === 40) {
		break;
	}
}

window.alert("O carro parou!");
