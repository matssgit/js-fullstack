const Character = require("./Character");

class Mage extends Character {
	constructor(name, health, attack, defense, magic) {
		super(name, health, attack, defense);
		this.magic = magic;
	}

	attackCharacter(target) {
		const damage = this.attack + this.magic - target.defense;

		if (damage > 0) {
			target.health -= damage;
			console.log(
				`${this.name} lançou um ataque mágico em ${target.name} e causou ${damage} pontos de dano.`
			);
		} else {
			console.log(
				`${this.name} lançou um ataque mágico em ${target.name}, mas a defesa foi muito alta!`
			);
		}

		if (target.health <= 0) {
			target.health = 0;
			console.log(`${target.name} foi derrotado!`);
		}
	}

	heal(target) {
		const healingPoints = this.magic * 2;
		target.health += healingPoints;
		console.log(
			`${this.name} curou ${target.name}, aumentando seus pontos de vida em ${healingPoints}.`
		);
	}
}

module.exports = Mage;
