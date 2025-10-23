import { getLivrosPorId, getTodosLivros, cadastrar, atualizar, deletar } from "../services/livroService.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const livros = getTodosLivros();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).send({ erro: error.message });
    }
  }

  static async listarLivroID(req, res) {
    try {
      const id = req.params.id;
      const livro = getLivrosPorId(id);

      if (!livro) {
        return res.status(404).send({ mensagem: "Livro não encontrado!" });
      }
      res.status(200).send(livro);
    } catch (error) {
      res.status(500).send({ erro: error.message });
    }
  }

  static async cadastrarLivro(req, res) {
    try {
      const livroNovo = req.body;
      cadastrar(livroNovo);
      res.status(201).send("Livro inserido com sucesso");
    } catch (error) {
      res.status(500).send({ erro: error.message });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      const dadosAtualizados = req.body;

      const livroAtualizado = atualizar(id, dadosAtualizados)

      if(!livroAtualizado) {
        return res.status(404).send({mensagem: "Livro não encontrado!"})
      }

      res.status(200).send({mensagem: "Livro atualizado com sucesso!", livro: livroAtualizado})

    } catch (error) {
      res.status(500).send({ erro: error.message });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      const sucesso = deletar(id);

      if(!sucesso) {
        return res.status(404).send({mensagem: "Livro não encontrado!"})
      }

      res.status(200).send({mensagem: "Livro deletado com sucesso!"})
    } catch (error) {
       res.status(500).send({ erro: error.message });
    }
  }
}

export default LivroController;
