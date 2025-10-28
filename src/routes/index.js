import express from "express";
import livros from "./livrosRoutes.js";
import favoritos from "./favoritosRoutes.js";

const routes = (app) => {
  app.use(express.json(), livros, favoritos);
};

export default routes;
