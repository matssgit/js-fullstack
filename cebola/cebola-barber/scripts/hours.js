// ========== MENU MOBILE ==========
const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.onclick = () => {
  const hidden = mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", !hidden);
};

// ========== EXIBE TIPO E VALOR DO SERVIÇO ==========
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("type-court").textContent =
    localStorage.getItem("tipoServico") || "Corte";
  document.getElementById("value-court").textContent =
    localStorage.getItem("valorServico") || "R$ 0,00";
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
  const [dia, mes, ano] = dataInput.split("/");
  const dataFormatada = `${ano}-${mes}-${dia}`;

  const horariosFixos = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  // Limpa os horários atuais
  select.innerHTML = '<option value="">Selecione</option>';

  try {
    const response = await fetch(
      `http://localhost:3000/disponibilidade/${dataFormatada}`
    );

    const { ocupados } = await response.json();

    const disponiveis = horariosFixos.filter((h) => !ocupados.includes(h));

    if (disponiveis.length === 0) {
      const option = document.createElement("option");
      option.textContent = "Sem horários disponíveis";
      option.disabled = true;
      select.appendChild(option);
    } else {
      disponiveis.forEach((hora) => {
        const option = document.createElement("option");
        option.value = hora;
        option.textContent = hora;
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
  const nome = document.getElementById("client-name").value.trim();
  const telefone = document.getElementById("client-phone").value.trim();
  const dataInput = document.getElementById("data").value;
  const hora = document.getElementById("horario").value;
  const tipo = localStorage.getItem("tipoServico") || "Corte";
  const valor = localStorage.getItem("valorServico") || "R$ 0,00";

  if (!nome || !telefone || !dataInput || !hora) {
    alert("Preencha todos os campos!");
    return;
  }

  // Converter data para yyyy-mm-dd para salvar no backend
  const [dia, mes, ano] = dataInput.split("/");
  const dataFormatada = `${ano}-${mes}-${dia}`;

  try {
    const response = await fetch("http://localhost:3000/agendar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        telefone,
        date: dataFormatada,
        hour: hora,
        tipo,
        valor,
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
