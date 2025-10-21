import bdFake from "../livros.json" assert { type: "json" };

function getTodosLivros() {
  return bdFake;
}

function getLivrosPorId(id) {
  const livro = bdFake.find((livro) => livro.id === Number(id));
  return livro || null;
}

export { getTodosLivros, getLivrosPorId };
