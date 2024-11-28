import express from "express"

const books = [
	{
		id: 1,
		title: "Exponential Equations, Inequalities, and Functions",
		author: "Galamiton, S.",
		description:
			"An in-depth study of exponential equations, inequalities, and functions.",
		file: "Exponentials.pdf",
		topic: ["mathematics", "algebra"],
	},
	{
		id: 2,
		title: "Unit Circle Trigonometry",
		author: "Punginagina, J.",
		description:
			"A comprehensive guide to the unit circle and trigonometry.",
		file: "UnitCircle.pdf",
		topic: ["mathematics", "trigonometry"],
	},
	{
		id: 3,
		title: "Neofighters (Summary)",
		author: "Rei Caffie",
		description: "The official summary of the Neofighters novel.",
		file: "Neofighters.pdf",
		topic: ["fiction", "action"],
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
		topic: books[bookId - 1]?.topic,
	})
})

router.get("/:id/cover", (req, res) => {
	let bookId = req.params.id
	res.sendFile(`public/assets/${bookId}.png`, { root: "." })
})

export { router as Book }
