// import { useState } from "react"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"

// export default function ContactPage() {
//   const [error, setError] = useState("")
//   const [success, setSuccess] = useState("")

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError("")
//     setSuccess("")

//     const form = e.target
//     const aadhaar = form.aadhaarNumber.value

//     // ✅ Aadhaar validation (same as before)
//     if (!/^[0-9]{12}$/.test(aadhaar)) {
//       setError("Aadhaar number must be exactly 12 digits")
//       return
//     }

//     // ✅ FormData for image upload
//     const formData = new FormData(form)

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         body: formData,
//       })

//       if (!res.ok) throw new Error("Submit failed")

//       setSuccess("Form submitted successfully")
//       form.reset()
//     } catch (err) {
//       setError("Something went wrong. Please try again.")
//     }
//   }

//   return (
//     <>
//       <Navbar />

//       {/* HEADER */}
//       <section className="bg-black text-white py-20 text-center px-4">
//         <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
//       </section>

//       {/* CONTACT FORM */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-5xl mx-auto text-center">

//           {error && <p className="text-red-600 mb-4">{error}</p>}
//           {success && <p className="text-green-600 mb-4">{success}</p>}

//           <form
//             onSubmit={handleSubmit}
//             encType="multipart/form-data"
//             className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
//           >
//             <input name="fullName" placeholder="Full Name *" className="border p-3" required />
//             <input name="mobile" placeholder="Mobile Number *" className="border p-3" required />
//             <input name="email" placeholder="Email Address" className="border p-3" />

//             <input
//               name="preferredAge"
//               placeholder="Preferred Guard Age *"
//               className="border p-3"
//               required
//             />

//             <select name="serviceRequired" className="border p-3" required>
//               <option value="">Select Service</option>
//               <option>Security Guards</option>
//               <option>Bouncer Services</option>
//               <option>Armed Security</option>
//               <option>Residential Security</option>
//               <option>Industrial Security</option>
//               <option>Event Security</option>
//             </select>

//             <select name="clientType" className="border p-3" required>
//               <option value="">Client Type</option>
//               <option>Individual</option>
//               <option>Corporate</option>
//               <option>Factory</option>
//               <option>Society</option>
//             </select>

//             <input
//               name="numberOfGuards"
//               type="number"
//               placeholder="Number of Guards *"
//               className="border p-3"
//               required
//             />

//             <input
//               name="aadhaarNumber"
//               placeholder="Aadhaar Number (12 digits) *"
//               className="border p-3"
//               maxLength="12"
//               required
//             />

//             <input
//               name="location"
//               placeholder="Location / Site Address *"
//               className="border p-3"
//               required
//             />

//             <select name="duration" className="border p-3">
//               <option value="">Service Duration</option>
//               <option>One Day</option>
//               <option>Short Term</option>
//               <option>Long Term</option>
//             </select>

//             {/* ✅ IMAGE UPLOAD */}
//             <div className="md:col-span-2">
//               <label className="text-sm font-medium">
//                 Upload Image*
//               </label>
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 className="border p-3 w-full mt-1"
//               />
//             </div>

//             <textarea
//               name="message"
//               placeholder="Message *"
//               className="border p-3 md:col-span-2"
//               required
//             ></textarea>

//             <button
//               type="submit"
//               className="bg-black text-white px-10 py-3 font-semibold md:col-span-2"
//             >
//               Submit Request
//             </button>
//           </form>
//         </div>
//       </section>

//       <Footer />
//     </>
//   )
// }



import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ContactPage() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    const form = e.target
    const formData = new FormData(form)

    const mobile = form.mobile.value.trim()
    const aadhaar = form.aadhaarNumber.value.trim()
    const image = form.image.files[0]

    // 🔴 Mobile validation
    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("Mobile number must be exactly 10 digits")
      return
    }

    // 🔴 Aadhaar validation
    if (!/^[0-9]{12}$/.test(aadhaar)) {
      setError("Aadhaar number must be exactly 12 digits")
      return
    }

 

    // 🔴 Image validation (optional but recommended)
    if (image && !image.type.startsWith("image/")) {
      setError("Only image files are allowed")
      return
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || "Submission failed")
        return
      }

      setSuccess("Form submitted successfully ✅")
      form.reset()
    } catch (err) {
      setError("Server error. Please try again later.")
    }
  }

  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">

          {error && <p className="text-red-600 mb-4">{error}</p>}
          {success && <p className="text-green-600 mb-4">{success}</p>}

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
          >
            <input name="fullName" placeholder="Full Name *" className="border p-3" required />
            <input name="mobile" placeholder="Mobile Number *" className="border p-3 "   maxLength="12" required />
            <input name="email" placeholder="Email Address" className="border p-3" />

            <input name="preferredAge" placeholder="Preferred Guard Age *" className="border p-3" required />

           
          

            <input
              name="aadhaarNumber"
              placeholder="Aadhaar Number (12 digits) *"
              className="border p-3"
              maxLength="12"
              required
            />

            <input name="location" placeholder="Location *" className="border p-3" required />

            <select name="duration" className="border p-3">
              <option value="">Service Duration</option>
              <option>One Day</option>
              <option>Short Term</option>
              <option>Long Term</option>
            </select>

            <div className="md:col-span-2">
              <label className="text-sm font-medium">Upload Image</label>
              <input type="file" name="image" accept="image/*" className="border p-3 w-full mt-1" />
            </div>

            <textarea
              name="message"
              placeholder="Message *"
              className="border p-3 md:col-span-2"
              required
            />

            <button className="bg-black text-white py-3 md:col-span-2">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}

