// ========== MENU MOBILE ==========
const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.onclick = () => {
  const hidden = mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", !hidden);
};

// ========== EXIBE type E value DO SERVIÇO ==========
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("type-court").textContent =
    localStorage.getItem("serviceType") || "Corte";
  document.getElementById("value-court").textContent =
    localStorage.getItem("serviceValue") || "R$ 0,00";
});

// ========== CONFIGURAÇÃO DO FLATPICKR ==========
flatpickr("#data", {
  dateFormat: "d/m/Y",
  minDate: "today",
  locale: "pt",
});

flatpickr("#horario", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
});

// ========== ATUALIZA HORÁRIOS DISPONÍVEIS ==========
document.getElementById("data").addEventListener("change", async (e) => {
  const dataInput = e.target.value;
  const select = document.getElementById("horario");

  // Converter data para formato yyyy-mm-dd (usado no backend)
  const [day, month, year] = dataInput.split("/");
  const dataFormat = `${year}-${month}-${day}`;

  const fixedHours = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  // // Limpa os horários atuais
  // select.innerHTML = '<option value="">Selecione</option>';

  try {
    const response = await fetch(
      `http://localhost:3000/disponibilidade/${dataFormat}`
    );

    const { busy } = await response.json();

    const available = fixedHours.filter((h) => !busy.includes(h));

    if (available.length === 0) {
      const option = document.createElement("option");
      option.textContent = "Sem horários disponíveis";
      option.disabled = true;
      select.appendChild(option);
    } else {
      available.forEach((hour) => {
        const option = document.createElement("option");
        option.value = hour;
        option.textContent = hour;
        select.appendChild(option);
      });
    }
  } catch (error) {
    console.error("Erro ao buscar horários:", error);
    const option = document.createElement("option");
    option.textContent = "Erro ao carregar horários";
    option.disabled = true;
    select.appendChild(option);
  }
});

// ========== CONFIRMA E ENVIA AGENDAMENTO ==========
async function confirmarAgendamento() {
  const name = document.getElementById("client-name").value.trim();
  const telephone = document.getElementById("client-phone").value.trim();
  const dataInput = document.getElementById("data").value;
  const hour = document.getElementById("horario").value;
  const type = localStorage.getItem("serviceType") || "Corte";
  const value = localStorage.getItem("serviceValue") || "R$ 0,00";

  if (!name || !telephone || !dataInput || !hour) {
    alert("Preencha todos os campos!");
    return;
  }

  // Converter data para yyyy-mm-dd para salvar no backend
  const [day, month, year] = dataInput.split("/");
  const dataFormat = `${year}-${month}-${day}`;

  try {
    const response = await fetch("http://localhost:3000/agendar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        telephone,
        date: dataFormat,
        hour: hour,
        type,
        value,
      }),
    });

    const result = await response.json();
    alert(result.message);
    location.reload();
  } catch (error) {
    alert("Erro ao agendar. Tente novamente.");
    console.error("Erro:", error);
  }
}
