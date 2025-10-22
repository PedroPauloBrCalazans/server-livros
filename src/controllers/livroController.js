import { getLivrosPorId, getTodosLivros, cadastrar } from "../services/livroService.js";

// Não retorna “send”; deve retornar “json”. Para isso, utilize o middleware.

class LivroController {
  static async listarLivros(req, res) {
    try {
      const livros = getTodosLivros();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ erro: error.message }); // Não retornar o erro, má prática
      // res.status(500).json({ erro: 'Internal server error' })
      // Ou também:
      // res.status(404).json({ error: 'Not found' });
    }
  }

  static async listarLivroID(req, res) {
    try {
      const id = req.params.id;
      const livro = getLivrosPorId(id);

      if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado!" });
      }
      res.status(200).json(livro);
    } catch (error) {
      res.status(500).json({ erro: error.message }); // Não retornar o erro, má prática
    }
  }

  static async cadastrarLivro(req, res) {
    try {
      const { livroNovo } = req.body;
      cadastrar(livroNovo);
      res.status(201).json({ mensagem: "Livro inserido com sucesso" }); // Manter o mesmo formato json em todas as respostas
    } catch (error) {
      res.status(500).json({ erro: error.message }); // Não retornar o erro, má prática
    }
  }
}

export default LivroController;
