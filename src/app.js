const express = require("express");

const app = express();

const port = 7474;

app.get("/", (req, res) => {
  res.send("olá mundão Plana");
});

app.listen(port, () => {
  console.log(`Servidor subiu na porta ${port} 🚀🚀🚀`);
});
