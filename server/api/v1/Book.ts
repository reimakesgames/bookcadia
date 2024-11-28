import express from "express"

const books = [
	{
		id: 1,
		title: "Exponential Equations, Inequalities, and Functions",
		author: "Galamiton, S.",
		description:
			"An in-depth study of exponential equations, inequalities, and functions.",
		file: "Exponentials.pdf",
	},
	{
		id: 2,
		title: "Unit Circle Trigonometry",
		author: "Punginagina, J.",
		description:
			"A comprehensive guide to the unit circle and trigonometry.",
		file: "UnitCircle.pdf",
	},
	{
		id: 3,
		title: "Book 3",
		author: "Rei Caffie",
		description: "Description for book 3",
	},
]

const router = express.Router()

router.get("/my-books", (req, res) => {
	res.json(books)
})

router.get("/:id", (req, res) => {
	let bookId = parseInt(req.params.id)
	res.json({
		id: bookId,
		title: books[bookId - 1]?.title,
		author: books[bookId - 1]?.author,
		description: books[bookId - 1]?.description,
		file: books[bookId - 1]?.file,
	})
})

router.get("/:id/cover", (req, res) => {
	let bookId = req.params.id
	res.sendFile(`public/assets/${bookId}.png`, { root: "." })
})

export { router as Book }
