class User {
	constructor(fullname, email, password) {
		this.fullname = fullname;
		this.email = email;
		this.password = password;
	}
	login(email, password) {
		if (this.email === email && this.password === password) {
			console.log("Login realizado com sucesso!");
		} else {
			console.log("Email ou senha incorretos!");
		}
	}
}

const mat = new User("Matheus Santana Silva", "matheus@email.com", "123456");

mat.login("matheus@email.com", "123456"); // Login realizado com sucesso!
mat.login("matheus@email.com", "senha_incorreta"); // Email ou senha incorretos!
mat.login("email_incorreto@email.com", "123456"); // Email ou senha incorretos!

console.log(mat);
