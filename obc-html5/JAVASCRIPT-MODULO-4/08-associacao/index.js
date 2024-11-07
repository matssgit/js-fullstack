// const Address = require("./Address");
const Person = require("./Person");

// const addr = new Address("7 de Setembro", 99, "Centro", "Mococa", "SP");
const john = new Person(
	"John Doe",
	"7 de Setembro",
	99,
	"Centro",
	"Mococa",
	"SP"
);

console.log(john);
console.log(john.address.fullAddress());
