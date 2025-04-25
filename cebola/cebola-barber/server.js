const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const availabilityPath = path.join(__dirname, "data", "availability.json");

app.use(
  cors({
    origin: "http://localhost:5173", // Permitir requisições do Vite
  })
);

// Salvar novo agendamento
app.post("/agendar", (req, res) => {
  console.log("Requisição recebida para /agendar");
  console.log("Corpo da requisição:", req.body);

  const { date, hour, name, telephone, type, price } = req.body;

  if (!date || !hour || !name || !telephone || !type || !price) {
    return res
      .status(400)
      .json({ message: "Dados incompletos para agendamento." });
  }

  fs.readFile(availabilityPath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "Erro ao ler o arquivo." });

    let availability = {};
    try {
      availability = JSON.parse(data);
    } catch (e) {
      return res
        .status(500)
        .json({ message: "Erro ao processar os dados de disponibilidade." });
    }

    if (!availability[date]) {
      availability[date] = [];
    }

    // Verifica se já existe um agendamento nesse horário
    const isHourTaken = availability[date].some((a) => a.hour === hour);

    if (isHourTaken) {
      return res.status(400).json({ message: "Horário já reservado." });
    }

    // Adiciona novo agendamento
    availability[date].push({
      hour,
      name,
      telephone,
      type,
      price,
    });

    fs.writeFile(
      availabilityPath,
      JSON.stringify(availability, null, 2),
      (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Erro ao salvar o agendamento." });
        }

        console.log(
          `✅ Novo agendamento: ${name} (${telephone}) às ${hour} em ${date} | ${type} - ${price}`
        );

        res.status(200).json({ message: "Agendamento realizado com sucesso!" });
      }
    );
  });
});

// Buscar horários já ocupados para uma data
app.get("/disponibilidade/:date", (req, res) => {
  const date = req.params.date;

  fs.readFile(availabilityPath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "Erro ao ler o arquivo." });

    let availability = {};
    try {
      availability = JSON.parse(data);
    } catch (e) {
      return res
        .status(500)
        .json({ message: "Erro ao processar os dados de disponibilidade." });
    }

    const ocupados = (availability[date] || []).map((a) => a.hour);
    res.status(200).json({ ocupados });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
