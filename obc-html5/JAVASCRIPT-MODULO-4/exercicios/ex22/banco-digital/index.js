const App = require("./App.js");

App.createUser("matheus@email.com", "Matheus Santana");
App.createUser("lucas@email.com", "Lucas Fontano");
App.createUser("juliana@email.com", "Juliana Conde");

App.deposit("matheus@email.com", 100);

App.transfer("matheus@email.com", "lucas@email.com", 20);

App.changeLoanFee(10);
App.takeLoan("juliana@email.com", 2000, 24);

console.log(App.findUser("matheus@email.com"));
console.log(App.findUser("matheus@email.com").account);
console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);
console.log(App.findUser("juliana@email.com"));
console.log(App.findUser("juliana@email.com").account);
console.log(App.findUser("juliana@email.com").account.loans[0].installments);
