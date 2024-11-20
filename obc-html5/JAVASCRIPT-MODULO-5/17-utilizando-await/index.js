async function asyncSum(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		return Promise.reject("arguments must be of type number");
	}
	return a + b;
}
