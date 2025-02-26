// api/enviar-dados.js
let ultimosDados = { yellow: 0, green: 0, blue: 0 }; // Armazena os dados temporariamente

module.exports = (req, res) => {
  if (req.method === "POST") {
    const { yellow, green, blue } = req.body; // Recebe os dados do ESP
    ultimosDados = { 
      yellow: parseInt(yellow), 
      green: parseInt(green), 
      blue: parseInt(blue) 
    };
    res.status(200).send("Dados recebidos com sucesso");
  } else {
    res.status(405).send("Método não permitido");
  }
};
