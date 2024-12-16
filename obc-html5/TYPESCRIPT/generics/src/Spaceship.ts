// class Spaceship {
//   private _name: string;
//   protected captain: string;
//   protected speed: number;

//   get name() {
//     return this._name;
//   }

//   set name() {
//     return this._name;
//   }
//   constructor(name: string, captain: string) {
//     this.name = name;
//     this.captain = captain;
//     this.speed = 0;
//   }

//   public accelerate(rate: number, time: number) {
//     this.speed = rate * time;
//   }
// }

// class Fighter extends Spaceship {
//   weapons;
//   constructor(name: string, captain: string, weapons: number) {
//     super(name, captain);
//     this.weapons = weapons;
//   }

//   shoot() {
//     for (let i = 0; i < this.weapons; i++) {
//       console.log("Pew!");
//     }
//   }

//   erase() {
//     this.captain = "";
//     this.speed = 0;
//   }
// }

// let ship = new Fighter("USS Enterprise", "James T. Kirk", 10);

// ship.accelerate(50, 10);
// ship.weapons = 20;
