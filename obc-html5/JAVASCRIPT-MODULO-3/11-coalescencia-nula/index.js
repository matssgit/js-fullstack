const a = 0; // false

const b = null; // false

const c = "Teste"; // true

console.log(a || b || c);

console.log(a ?? b ?? c);
