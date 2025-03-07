const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let dados = { yellow: 0, green: 0, blue: 0 };

app.post("/update", (req, res) => {
    dados = req.body;
    res.json({ message: "Dados atualizados!" });
});

app.get("/dados", (req, res) => {
    res.json(dados);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor a correr na porta ${PORT}`));
