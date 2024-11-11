class Character {
	constructor(name, health, attack, defense) {
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.defense = defense;
	}

	attackCharacter(target) {
		const damage = this.attack - target.defense;

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

module.exports = Character;
