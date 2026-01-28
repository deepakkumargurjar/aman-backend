import express from "express"
import multer from "multer"
import Contact from "../models/Contact.js"

const router = express.Router()

// multer config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const upload = multer({ storage })

router.post("/contact", upload.single("image"), async (req, res) => {
  try {
    const newContact = new Contact({
      ...req.body,
      image: req.file ? req.file.filename : null,
    })

    await newContact.save()
    res.status(201).json({ success: true })
  } catch (err) {
    res.status(500).json({ success: false })
  }
})

export default router
