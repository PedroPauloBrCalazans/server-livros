import { Router } from "express";
import LivroController from "../controllers/livroController.js";

const router = Router();

router.get("/livros", LivroController.listarLivros);
router.get("/livros/:id", LivroController.listarLivroID);

router.post("/livros", LivroController.cadastrarLivro);

router.put("/livros/:id", LivroController.atualizarLivro);

router.delete("/livros/:id", LivroController.deletarLivro);

export default router;
