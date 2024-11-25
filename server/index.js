import express from "express";
const dotenv = await import("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use("/", express.static("public"));
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
