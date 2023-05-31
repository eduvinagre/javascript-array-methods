let books = [];
const APIEndpoint =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBooks();

async function getBooks() {
  const res = await fetch(APIEndpoint);
  books = await res.json();
  let booksOnSale = applyDiscount(books);
  showBooks(booksOnSale);
}
