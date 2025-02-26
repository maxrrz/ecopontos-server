// api/dados.js
externo let ultimosDados; // Supondo que está compartilhado (veja nota abaixo)

module.exports = (req, res) => {
  res.status(200).json(ultimosDados); // Retorna os dados em formato JSON
};
