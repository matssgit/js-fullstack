window.alert("Bem-vindo(a) ao Robô da Tabuada!");
let num = parseInt(prompt("Digite o número que deseja calcular a tabuada: "));
let resultado = `Tabuada do ${num}: \n`;

for (let i = 1; i <= 20; i++) {
	resultado += `${num} x ${i} = ${num * i}\n`;
}

window.alert(resultado);
