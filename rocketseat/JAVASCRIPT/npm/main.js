// Utilizando o fetch com then.
/*
fetch("http://localhost:3333/products")
  .then((response) => response.json())
  .then((data) => console.log(data)); */

//   Utilizando o fetch com async/await.

async function fetchProducts(products) {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log(data);
}

async function fetchProductById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const data = await response.json();
  console.log(data);
}

// fetchProducts()
// fetchProductById("3");

const productPrice = document.getElementById("price");
const productName = document.getElementById("name");
const form = document.getElementsByTagName("form");

addEventListener("submit", async (event) => {
  event.preventDefault();

  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: productName.value,
      price: productPrice.value,
    }),
  });
});
