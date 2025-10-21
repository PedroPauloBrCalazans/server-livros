import express from "express";
import routesLivros from "./routes/livro.js";

const app = express();

const port = 7474;

app.use("/livros", routesLivros);

app.listen(port, () => {
  console.log(`Servidor subiu na porta ${port} 🚀🚀🚀`);
});
