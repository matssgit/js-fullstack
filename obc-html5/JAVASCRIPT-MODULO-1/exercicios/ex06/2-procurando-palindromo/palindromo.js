const word = prompt("Digite uma palavra para verificar se é um palíndromo: ");
let wordInverted = "";

for (let i = word.length - 1; i >= 0; i--) {
	wordInverted += word[i];
}

if (word === wordInverted) {
	window.alert(`${word} é um palíndromo!`);
} else {
	window.alert(`${word} não é um palíndromo!
        ${word} !== ${wordInverted}`);
}
