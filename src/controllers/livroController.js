import bdFake from "../livros.json" assert { type: "json" };

class LivroController {
  static async listarLivros(req, res) {
    try {
      res.status(200).json(bdFake);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default LivroController;
