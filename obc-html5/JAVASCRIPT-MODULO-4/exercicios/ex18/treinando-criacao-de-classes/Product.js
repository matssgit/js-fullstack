class Product {
	constructor(name, description, price) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.inStock = 0;
	}
	addToStock(quantity) {
		this.inStock += quantity;
	}
	calculateDiscount(percent, newPrice) {
		newPrice = this.price * ((100 - percent) / 100);
		console.log(`Valor do ${this.name} com desconto: R$${newPrice}`);
	}
}

const macbook = new Product("Macbook M1", "8GB de Ram, 256GB de SSD", 5299);

macbook.addToStock(10);
macbook.calculateDiscount(15);

console.log(macbook);
