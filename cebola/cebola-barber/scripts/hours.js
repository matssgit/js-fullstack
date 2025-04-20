// Botão do menu hambúrguer - mostra/oculta o menu mobile
const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.onclick = () => {
  const hidden = mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", !hidden);
};

// Recupera a informação do corte e valor da página de serviços.
const type = localStorage.getItem("serviceType");
const value = localStorage.getItem("serviceValue");

document.getElementById("type-court").innerText = type || "---";
document.getElementById("value-court").innerText = value
  ? `R$ ${parseFloat(value).toFixed(2).replace(".", ",")}`
  : "---";

// Função para confirmar agendamento
function confirmarAgendamento() {
  const date = document.getElementById("data").value; // ID do campo de data
  const hour = document.getElementById("horario").value; // ID do campo de horário

  if (!date || !hour) {
    alert("Por favor, selecione data e horário!");
    return;
  }

  alert(`Agendamento confirmado para ${date} às ${hour}`);
}

// Data e hora personalizados (configuração do flatpickr)
flatpickr("#data", {
  dateFormat: "d/m/Y", // Formato da data
  minDate: "today", // Impede selecionar datas anteriores
  locale: "pt", // Configura o idioma para pt-br (usando a string diretamente)
});

flatpickr("#horario", {
  enableTime: true, // Ativa a seleção de hora
  noCalendar: true, // Desativa o calendário
  dateFormat: "H:i", // Formato da hora
  time_24hr: true, // Utiliza o formato 24h
});
