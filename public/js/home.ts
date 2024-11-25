function createClickEventsForBooks() {
	const carousel = document.getElementById("carousel")

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

createClickEventsForBooks()
