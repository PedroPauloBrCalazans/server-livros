import { Router } from "express";
import LivroController from "../controllers/livroController.js";

const router = Router();

router.get("/", LivroController.listarLivros);

router.post("/", (req, res) => {});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

export default router;
