const bookCover = document.getElementById("book-cover");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookDescription = document.getElementById("book-description");
const reader = document.getElementById("reader");
function getBookId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("book");
}
function getBook() {
    const bookId = getBookId();
    const loader = document.createElement("img");
    loader.src = "/assets/loader.png";
    loader.classList.add("loader");
    bookCover?.appendChild(loader);
    fetch(`/api/v1/books/${bookId}`)
        .then((response) => response.json())
        .then((book) => {
        if (!bookCover || !bookTitle || !bookAuthor || !bookDescription) {
            return;
        }
        fetch(`/api/v1/books/${book.id}/cover`).then((response) => {
            if (response.ok) {
                bookCover.removeChild(loader);
                bookCover.src = `/api/v1/books/${book.id}/cover`;
            }
        });
        bookTitle.innerText = book.title;
        bookAuthor.innerText = `By ${book.author || "Unknown author"}`;
        bookDescription.innerText = book.description;
        reader.src = `/assets/${book.file}`;
    });
}
getBook();
export {};
