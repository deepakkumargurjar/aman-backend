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

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) cb(null, true)
  else cb(new Error("Only images allowed"), false)
}

const upload = multer({ storage, fileFilter })

router.post("/contact", upload.single("image"), async (req, res) => {
  try {
    const {
      fullName,
      mobile,
      preferredAge,
      aadhaarNumber,
      location,
      message,
    } = req.body

    if (
      !fullName ||
      !mobile ||
      !preferredAge ||
      !aadhaarNumber ||
      !location ||
      !message
    ) {
      return res.status(400).json({ success: false, message: "All required fields must be filled" })
    }

    if (!/^[0-9]{10}$/.test(mobile))
      return res.status(400).json({ success: false, message: "Invalid mobile number" })

     if (!/^[0-9]{1,3}$/.test(preferredAge))
      return res.status(400).json({ success: false, message: "Invalid preferred age" })


    if (!/^[0-9]{12}$/.test(aadhaarNumber))
      return res.status(400).json({ success: false, message: "Invalid Aadhaar number" })

    const newContact = new Contact({
      ...req.body,
      image: req.file ? req.file.filename : null,
    })

    await newContact.save()

    res.status(201).json({ success: true, message: "Contact submitted successfully" })
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" })
  }
})

export default router
