import express from "express";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());
routes(app);

// Olá, também me chamo Pedro, sou da Venezuela. Deixo-lhe algumas recomendações, espero que goste.
// O seu “server.js” poderia estar neste ficheiro e não num ficheiro separado.

// É melhor renomear o diretório ou pasta chamado “services” para “models”.

export default app;
