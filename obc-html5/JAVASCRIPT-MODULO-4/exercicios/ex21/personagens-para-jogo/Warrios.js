const Character = require("./Character");

class Warrior extends Character {
	constructor(name, health, attack, defende, shield) {
		super(name, health, attack, defende);
		this.shield = shield;
		this.stance = "attacking";
	}

	attack(target) {
		if (this.stance === "attacking") {
			super.attack(target);
		}
	}

	switchStance() {
		if (this.stance === "attacking") {
			this.stance = "defending";
			this.defense += this.shield;
		} else {
			this.stance = "attacking";
			this.defense -= this.shield;
		}
	}
}

module.exports = Warrior;
