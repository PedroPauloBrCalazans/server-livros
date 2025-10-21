class LivroController {
  static async listarLivros(req, res) {
    try {
      res.send("olá mundão Plana");
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default LivroController;
