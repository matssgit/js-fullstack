const Character = require("./Character");

class Thief extends Character {
	attackCharacter(target) {
		const damage = 2 * (this.attack - target.defense);

		if (damage > 0) {
			target.health -= damage;
			console.log(
				`${this.name} atacou ${target.name} e causou ${damage} pontos de dano.`
			);
		} else {
			console.log(
				`${this.name} atacou ${target.name}, mas a defesa foi muito alta!`
			);
		}

		if (target.health <= 0) {
			target.health = 0;
			console.log(`${target.name} foi derrotado!`);
		}
	}
}

const char1 = new Character("Gohan", 100, 20, 10);
const thief = new Character("Piccolo", 80, 15, 5);

char1.attackCharacter(thief);
console.log(`Vida do ${thief.name}: ${thief.health}`);

thief.attackCharacter(char1);
console.log(`Vida do ${char1.name}: ${char1.health}`);
