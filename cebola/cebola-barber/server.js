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
  const { date, hour, name, telephone, type, price } = req.body;

  console.log("Dados recebidos no agendamento:", req.body); // Adicione isso para ver os dados recebidos

  if (!date || !hour || !name || !telephone) {
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

    if (availability[date].includes(hour)) {
      return res.status(400).json({ message: "Horário já reservado." });
    }

    availability[date].push(hour);

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
          `Novo agendamento: ${name} (${telephone}) às ${hour} em ${date} | ${type} - ${price}`
        );

        res.status(200).json({ message: "Agendamento realizado com sucesso." });
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

    const ocupados = availability[date] || [];
    res.status(200).json({ ocupados });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
