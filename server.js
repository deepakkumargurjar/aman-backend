import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()

const app = express()

// 🔹 Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use("/api", contactRoutes)

// static folders
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.use(express.static(path.join(__dirname, "public")))

// frontend fallback (for SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// mongo connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
