import { Router } from "express";
import LivroController from "../controllers/livroController.js";

const router = Router();

router.get("/livros", LivroController.listarLivros);
router.get("/livros/:id", LivroController.listarLivroID);

router.post("/", (req, res) => {});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

export default router;
