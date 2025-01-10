// Cotação de moedas do dia.
const USD = 6.12;
const EUR = 6.26;
const GBP = 7.46;

// Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
    default:
      alert("Opcão inválida!");
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula o resultado total.
    let total = amount * price;

    // Formatar o valor total.
    total = formatCurrencyBRL(total).replace("R$", "");

    // Exibe o resultado total.
    result.textContent = `${total} Reais`;

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde!");
  }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
