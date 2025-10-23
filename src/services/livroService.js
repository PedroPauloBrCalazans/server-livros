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

function atualizar(id, dadosAtualizados) {
  // Encontra o índice do livro com o ID informado
  const indice = bdFake.findIndex((livro) => livro.id === Number(id));

  // Se o livro não for encontrado, retorna null
  if (indice === -1) {
    return null;
  }

  // Atualiza o livro mantendo o ID original
  bdFake[indice] = { ...bdFake[indice], ...dadosAtualizados, id: Number(id) };

  // Retorna o livro atualizado
  return bdFake[indice];
}

function deletar(id) {
  const indice = bdFake.findIndex((livro) => livro.id === Number(id));

  if (indice === -1) {
    return false;
  }

  bdFake.splice(indice, 1);
  return true;
}

export { getTodosLivros, getLivrosPorId, cadastrar, atualizar, deletar };
