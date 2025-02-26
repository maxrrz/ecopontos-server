// api/index.js
let ultimosDados = { yellow: 0, green: 0, blue: 0 };

module.exports = (req, res) => {
  if (req.method === "POST" && req.url === "/api/enviar-dados") {
    const { yellow, green, blue } = req.body;
    ultimosDados = { 
      yellow: parseInt(yellow), 
      green: parseInt(green), 
      blue: parseInt(blue) 
    };
    res.status(200).send("Dados recebidos com sucesso");
  } else if (req.method === "GET" && req.url === "/api/dados") {
    res.status(200).json(ultimosDados);
  } else {
    res.status(404).send("Endpoint não encontrado");
  }
};
