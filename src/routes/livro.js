import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("olá mundão Plana");
});

export default router;
