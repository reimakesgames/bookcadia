import express from "express"
import { Book } from "./api/v1/Book.js"
const dotenv = await import("dotenv")
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use("/", express.static("public"))
app.use("/api/v1/books", Book)

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
