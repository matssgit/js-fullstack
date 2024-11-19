function execute() {
	// faz alguma coisa
	return new Promise((resolve, reject) => {
		console.log("A promisse está sendo executada");
		setTimeout(() => {
			if (false) {
				reject("A promise foi rejeitada");
			} else {
				console.log("Resolvendo a promise...");
				resolve(42);
			}
			console.log("Resolvendo a promise...");
			resolve(42);
		}, 1000 * 2);
	});
}

const p = execute();

console.log(p);

p.then((result) => {
	console.log(`A promise foi resolvida. O resultado foi ${result}`);
})
	.catch((err) => {
		console.log(`A promise foi rejeitada! Motivo: ${err}`);
	})
	.finally(() => {
		console.log("A promise foi finalizada.");
	});
