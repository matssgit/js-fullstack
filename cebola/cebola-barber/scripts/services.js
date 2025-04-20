// Botão do menu hamburguer - mostra/oculta o menu mobile
const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.onclick = () => {
  const hidden = mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", !hidden);
};

// Captura todos os botões de agendamento
const scheduleButtons = document.querySelectorAll(".btn-schedule");

scheduleButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const serviceCard = this.closest(".servico-card");

    const type = serviceCard.querySelector("h3").textContent.trim();
    const priceText = serviceCard.querySelector(".price").textContent.trim();

    const value = priceText.replace("R$", "").replace(",", ".").trim();

    localStorage.setItem("serviceType", type);
    localStorage.setItem("serviceValue", value);

    location.href = "hours.html";
  });
});
