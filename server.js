import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", contactRoutes)
app.use("/uploads", express.static("uploads"))


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
