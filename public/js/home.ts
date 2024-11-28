import { Book } from "./Book.js"

const carousel = document.getElementById("carousel")

function createBookElement(book: Book) {
	const bookElement = document.createElement("div")
	bookElement.id = `book-${book.id}`
	bookElement.classList.add("book")
	const bookImg = document.createElement("img")
	bookImg.alt = "Book cover"
	const loader = document.createElement("img")
	loader.src = "/assets/loader.png"
	loader.classList.add("loader")
	bookElement.appendChild(loader)
	// add property to the book element
	bookElement.setAttribute("topic", book.topic.join(";"))
	fetch(`/api/v1/books/${book.id}/cover`).then((response) => {
		if (response.ok) {
			bookElement.removeChild(loader)
			bookImg.src = `/api/v1/books/${book.id}/cover`
			bookElement.appendChild(bookImg)
		}
	})
	return bookElement
}

function createClickEventsForBooks() {
	if (!carousel) {
		return
	}

	// loop through the carousel items and create an event that goes to api/v1/reader/:id
	for (let i = 0; i < carousel.children.length; i++) {
		carousel.children[i]?.addEventListener("click", () => {
			const bookId = carousel.children[i]?.id.split("-")[1]
			window.location.href = `/reader?book=${bookId}`
		})
	}
}

function createCarousel() {
	fetch("/api/v1/books/my-books")
		.then((response) => response.json())
		.then((books) => {
			books.forEach((book: Book) => {
				const bookElement = createBookElement(book)
				carousel?.appendChild(bookElement)
			})
			createClickEventsForBooks()

			// filter elements
			const mathemathicsFilter = document.getElementById(
				"filter-1"
			) as HTMLInputElement
			const fictionFilter = document.getElementById(
				"filter-2"
			) as HTMLInputElement
			const booksHtml = document.getElementsByClassName("book")

			function filterBooks() {
				for (let i = 0; i < booksHtml.length; i++) {
					const book = booksHtml[i] as HTMLElement
					const topic = book.getAttribute("topic")
					if (
						mathemathicsFilter?.checked &&
						topic?.includes("mathematics")
					) {
						book.classList.remove("hide")
					} else if (
						fictionFilter?.checked &&
						topic?.includes("fiction")
					) {
						book.classList.remove("hide")
					} else if (
						!mathemathicsFilter?.checked &&
						!fictionFilter?.checked
					) {
						book.classList.remove("hide")
					} else {
						book.classList.add("hide")
					}
				}
			}

			mathemathicsFilter?.addEventListener("change", () => {
				filterBooks()
			})

			fictionFilter?.addEventListener("change", () => {
				filterBooks()
			})

			filterBooks()
		})
}

createCarousel()
