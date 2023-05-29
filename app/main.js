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
  booksTable.forEach((livro) => {
    insertBooksByID.innerHTML += `
        <div class="livro">
      <img class="livro__imagens" src="imagens/Cangaceiro-Javascript.png" alt="Capa do livro Cangaceiro JavaScript" />
      <h2 class="livro__titulo">
        Cangaceiro JavaScript:
        Uma aventura no sertão da programação
      </h2>
      <p class="livro__descricao">Flávio Almeida</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
      </div>
    </div>
    `;
  });
}
