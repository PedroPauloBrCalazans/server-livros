import bdFake from "../livros.json" assert { type: "json" };

function getTodosLivros() {
  return bdFake;
}

function getLivrosPorId(id) {
  const livro = bdFake.find((livro) => livro.id === Number(id));
  return livro || null;
}

function cadastrar(livroNovo) {
  // Gera um novo ID com base no maior ID existente
  const novoId = bdFake.length > 0 ? Math.max(...bdFake.map(l => l.id)) + 1 : 1;

  // Cria o novo livro com ID
  const livroComId = { id: novoId, ...livroNovo };

  // Adiciona o novo livro ao banco de dados fake
  bdFake.push(livroComId);

  // Retorna o livro cadastrado (opcional)
  return livroComId;
}


export { getTodosLivros, getLivrosPorId, cadastrar };
