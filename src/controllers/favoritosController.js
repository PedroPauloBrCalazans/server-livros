import {
  cadastrarFavoritos,
  deletarFavoritos,
  getAllFavoritos,
} from "../services/favoritosService.js";

class FavoritosController {
  static listarFavoritos(req, res) {
    try {
      const favoritos = getAllFavoritos();
      res.status(200).json(favoritos);
    } catch (error) {
      res.status(500).send({ erro: error.message });
    }
  }

  static cadastrarFavorito(req, res) {
    try {
      const idFavorito = req.params.id;
      cadastrarFavoritos(idFavorito);
      res.status(201).send("Favorito inserido com sucesso");
    } catch (error) {
      res.status(500).send({ erro: error.message });
    }
  }

  static async deletarFavorito(req, res) {
    try {
      const id = req.params.id;
      const sucesso = deletarFavoritos(id);

      if (!sucesso) {
        return res.status(404).send({ mensagem: "Favorito não encontrado!" });
      }

      res.status(200).send({ mensagem: "Favorito deletado com sucesso!" });
    } catch (error) {
      res.status(500).send({ erro: error.message });
    }
  }
}

export default FavoritosController;
