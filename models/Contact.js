import mongoose from "mongoose"

const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    preferredAge: { type: String, required: true },
    aadhaarNumber: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String },
    message: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
)

export default mongoose.model("Contact", contactSchema)
