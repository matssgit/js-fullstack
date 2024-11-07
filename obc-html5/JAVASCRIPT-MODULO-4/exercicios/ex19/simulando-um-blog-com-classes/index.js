const Author = require("./Author");

const john = new Author("John Doe");

const post = john.writePost("Título do post", "Lorem ipsum dolor...");

post.addComment("Matheus Santana", "Muito legal!");
post.addComment("Bruna", "Adorei!!!");

console.log(john);
console.log(post);
