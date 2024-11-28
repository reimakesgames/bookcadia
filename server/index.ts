import express from "express"
import { Book } from "./api/v1/Book.js"
const dotenv = await import("dotenv")
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

// lag middleware just to simulate a slow network
app.use((req, res, next) => {
	const lag = Math.floor(Math.random() * 200) + 20
	setTimeout(next, lag)
})

app.use("/", express.static("public"))
app.use("/api/v1/books", Book)

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
