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

module.exports = Thief;
