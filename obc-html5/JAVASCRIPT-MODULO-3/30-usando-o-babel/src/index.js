// Média Aritmética Simples
const simpleMean = (...numbers) => {
	const total = numbers.reduce((acc, num) => acc + num, 0);
	return total / numbers.length;
};

console.log(`Média Aritmética Simples: ${simpleMean(3, 6, 10, 9)}`);

// Média Aritmética Ponderada
const weightedAvg = (...entries) => {
	const sum = entries.reduce(
		(acc, { number, weight }) => acc + number * (weight ?? 1),
		0
	);
	const weightSum = entries.reduce(
		(acc, entry) => acc + (entry.weight ?? 1),
		0
	);
	return sum / weightSum;
};

console.log(
	`Média Ponderada: ${weightedAvg(
		{ number: 9, weight: 3 },
		{ number: 7 },
		{ number: 10 }
	)}`
);

const median = (...numbers) => {
	const orderedNumbers = [...numbers].sort((a, b) => a - b);
	const middle = Math.floor(orderedNumbers.length / 2);
	if (orderedNumbers.length % 2 !== 0) {
		return orderedNumbers[middle];
	} else {
		const firstMedian = orderedNumbers[middle - 1];
		const secondMedian = orderedNumbers[middle];
		return simpleMean(firstMedian, secondMedian);
	}
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

const mode = (...numbers) => {
	// [[n, qtd], [n, qtd], [n,qtd]]
	const quantities = numbers.map((num) => [
		num,
		numbers.filter((n) => num === n).length,
	]);
	quantities.sort((a, b) => b[1] - a[1]);
	return quantities[0][0];
};

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);
