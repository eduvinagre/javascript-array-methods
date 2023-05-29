let books = [];
const APIEndpoint =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBooks();

const insertBooksByID = document.getElementById("livros");

async function getBooks() {
  const res = await fetch(APIEndpoint);
  books = await res.json();
  console.table(books);

  showBooks(books);
}

function showBooks(booksTable) {
  booksTable.forEach((book) => {
    insertBooksByID.innerHTML += `
        <div class="livro">
      <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$ ${book.preco}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>
    `;
  });
}
