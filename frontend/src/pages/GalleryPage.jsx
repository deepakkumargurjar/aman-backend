import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// gallery images
import img1 from "../assets/gallery/gallery1.jpg"
import img2 from "../assets/gallery/gallery2.jpg"
import img3 from "../assets/gallery/gallery3.jpg"
import img4 from "../assets/gallery/gallery4.jpg"

const images = [img1, img2, img3, img4]

export default function GalleryPage() {
  const [current, setCurrent] = useState(0)

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="bg-black text-white py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Gallery
        </h1>
        <p className="mt-4 text-gray-300 max-w-4xl mx-auto">
          A visual showcase of our professional security operations, trained
          guards, event security, residential deployments and industrial
          protection services across Rajasthan.
        </p>
      </section>

      {/* INTRO / TRUST SECTION */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Professional Security in Action
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Aman Security Agency is trusted by residential societies, corporate
            offices, schools, industries and event organizers. Our gallery
            reflects discipline, professionalism and commitment to safety in
            every deployment.
          </p>
        </div>
      </section>

      {/* 🔥 TRAINING VIDEO SECTION (ALWAYS ON) */}
      <section className="py-16 bg-black px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Security Training in Action
          </h2>

          <p className="text-gray-300 max-w-4xl mx-auto mb-8">
            Watch our professional security guard training program including
            physical drills, discipline routines, emergency response and safety
            procedures.
          </p>

          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <video
              src="/training.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-full h-[200px] sm:h-[300px] md:h-[380px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* BIG AUTO SLIDER */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Aman Security Gallery"
                  className="w-full flex-shrink-0 h-[260px] sm:h-[420px] md:h-[520px] object-cover"
                />
              ))}
            </div>

            {/* DOTS */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-3 rounded-full ${
                    current === index ? "bg-accent" : "bg-white/70"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / STATS */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 shadow">
            <h3 className="text-3xl font-bold text-accent">500+</h3>
            <p className="mt-2 text-gray-700">Trained Guards</p>
          </div>
          <div className="p-6 shadow">
            <h3 className="text-3xl font-bold text-accent">200+</h3>
            <p className="mt-2 text-gray-700">Sites Secured</p>
          </div>
          <div className="p-6 shadow">
            <h3 className="text-3xl font-bold text-accent">24×7</h3>
            <p className="mt-2 text-gray-700">Monitoring</p>
          </div>
          <div className="p-6 shadow">
            <h3 className="text-3xl font-bold text-accent">100%</h3>
            <p className="mt-2 text-gray-700">Verified Staff</p>
          </div>
        </div>
      </section>

      {/* GRID GALLERY */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">
            More From Our Work
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded shadow">
                <img
                  src={img}
                  alt="Security Work"
                  className="h-48 w-full object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Looking for Reliable Security Services?
        </h2>
        <p className="mt-3 text-gray-300">
          Contact Aman Security Agency for professional and affordable security
          solutions.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+917627043748"
            className="bg-accent text-black px-8 py-3 rounded font-semibold"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/917627043748"
            className="border border-accent px-8 py-3 rounded"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
