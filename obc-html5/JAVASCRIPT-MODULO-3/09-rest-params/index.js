function sum(param, ...numbers) {
	return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(1, 1));
console.log(sum(2, 2, 2, 2, 2, 2, 2, 2));
console.log(sum(23, 1, 343, 32, 35, 7567));
