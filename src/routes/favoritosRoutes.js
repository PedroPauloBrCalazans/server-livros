import { Router } from "express";
import FavoritosController from "../controllers/favoritosController.js";

const route = Router();

route.get("/favoritos", FavoritosController.listarFavoritos);
route.post("/favoritos/:id", FavoritosController.cadastrarFavorito);
route.delete("/favoritos/:id", FavoritosController.deletarFavorito);

export default route;
