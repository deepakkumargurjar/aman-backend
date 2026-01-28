import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import contactRoutes from "./routes/contactRoutes.js"
import { MongoMemoryServer } from "mongodb-memory-server"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

app.use("/api", contactRoutes)

// ✅ FIXED MONGODB CONNECTION
const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI)
      console.log("MongoDB Atlas Connected")
    } else {
      const mongoServer = await MongoMemoryServer.create()
      const uri = mongoServer.getUri()
      await mongoose.connect(uri)
      console.log("MongoDB Memory Server Connected")
    }
  } catch (error) {
    console.error("MongoDB connection failed:", error.message)
  }
}

connectDB()

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`)
})
