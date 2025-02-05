import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { load, schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  // Previne o comportamento padrão de carregar a página.
  event.preventDefault();

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recupera o horário selecionado.
    const hourselected = document.querySelector(".hour-selected");

    // Recupera o horário selecionado.
    if (!hourselected) {
      return alert("Selecione a hora.");
    }

    // Recupera somente a hora.
    const [hour] = hourselected.innerText.split(":");

    // Insere a hora na data.
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera um ID
    const id = new Date().getTime();

    // Faz o agendamento.
    await scheduleNew({
      id,
      name,
      when,
    });

    // Recarrega os agendamentos.
    await schedulesDay();

    // Limpa o input de nome do cliente.
    clienteName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
