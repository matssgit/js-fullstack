module.exports = class Database {
	#storage = {
		authors: [],
		books: [],
		posters: [],
		orders: [],
		users: [],
	};

	find(key) {
		return this.#storage[key];
	}

	saveAuthor(author) {
		this.#storage.authors.push(author);
	}

	findBookByName(bookName) {
		return this.#storage.books.find((b) => b.name === bookName);
	}

	saveBook(book) {
		const bookExists = this.findBookByName(book.name);
		if (!bookExists) {
			this.#storage.books.push(book);
		}
	}

	addBooksToStock(bookName, quantity) {
		const book = this.findBookByName(bookName);
		book?.addToStock(quantity);
	}

	removeBooksFromStock(bookName, quantity) {
		const book = this.findBookByName(bookName);
		book?.removePostersFromStock(quantity);
	}

	findPosterByName(posterName) {
		return this.#storage.posters.find((p) => p.name === posterName);
	}

	savePoster(poster) {
		const posterExists = this.findPosterByName(poster.name);
		if (!posterExists) {
			this.#storage.books.push(poster);
		}
	}

	addBooksToStock(posterName, quantity) {
		const poster = this.findPostersByName(posterName);
		poster?.addToStock(quantity);
	}

	removeBooksFromStock(posterName, quantity) {
		const poster = this.findPosterByName(posterName);
		poster?.removePostersFromStock(quantity);
	}

	saveUser(user) {
		const userExists = this.#storage.users.find((u) => u.email === user.email);
		if (!userExists) {
			this.#storage.users.push(user);
		}
	}

	saveOrder(order) {
		this.#storage.orders.push(order);
	}

	showStorage() {
		console.table(this.#storage.authors);
		console.table(this.#storage.books);
		console.table(this.#storage.posters);
		console.table(this.#storage.users);
		console.table(this.#storage.orders.map((order) => order.data));
	}
};
