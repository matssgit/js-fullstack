const Account = require("./entities/Account");

module.exports = class User {
	constructor(email, fullname) {
		this.email = email;
		this.fullname = fullname;
		this.account = new Account(this);
	}
};
