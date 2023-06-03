const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => btn.addEventListener("click", filterBooks));

function filterBooks() {
  const btnElement = document.getElementById(this.id);
  const category = btnElement.value;
  const filteredBooks = books.filter((book) => book.categoria === category);
  showBooks(filteredBooks);
}
