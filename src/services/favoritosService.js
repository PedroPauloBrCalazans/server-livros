import bdFakeFavoritos from "../favoritos.json" assert { type: "json" };
import bdFakeLivros from "../livros.json" assert { type: "json" };

function getAllFavoritos() {
  return bdFakeFavoritos;
}

function cadastrarFavoritos(id) {
  const livros = bdFakeLivros;
  const favoritos = bdFakeFavoritos;

  // busca o livro pelo id
  const livroInserido = livros.find((livro) => livro.id === id);

  // se não encontrou o livro, retorna erro ou null
  if (!livroInserido) {
    console.error("Livro não encontrado!");
    return favoritos;
  }

  // evita duplicar o livro nos favoritos
  const jaExiste = favoritos.some((livro) => livro.id === id);
  if (jaExiste) {
    console.warn("Livro já está nos favoritos!");
    return favoritos;
  }

  // adiciona o livro à lista de favoritos
  const novaListaFavoritos = [...favoritos, livroInserido];

  // atualiza o "banco"
  bdFakeFavoritos.splice(0, bdFakeFavoritos.length, ...novaListaFavoritos);

  return novaListaFavoritos;
}

function deletarFavoritos(id) {
  const indice = bdFakeFavoritos.findIndex(
    (favorito) => favorito.id === Number(id)
  );

  if (indice === -1) {
    return false;
  }

  bdFakeFavoritos.splice(indice, 1);
  return true;
}

export { getAllFavoritos, cadastrarFavoritos, deletarFavoritos };
