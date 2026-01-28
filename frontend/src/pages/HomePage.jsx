import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function HomePage() {
  const canvasRef = useRef(null)
  const [theme, setTheme] = useState("dark")

  /* AUTO THEME */
  useEffect(() => {
    const hour = new Date().getHours()
    setTheme(hour >= 6 && hour < 18 ? "light" : "dark")
  }, [])

  /* MOUSE FOLLOW LINES */
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let mouse = { x: null, y: null }

    window.addEventListener("mousemove", e => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() - 0.5,
      vy: Math.random() - 0.5,
    }))

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach(d => {
        d.x += d.vx
        d.y += d.vy

        if (d.x < 0 || d.x > canvas.width) d.vx *= -1
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1

        dots.forEach(o => {
          const dist = Math.hypot(d.x - o.x, d.y - o.y)
          if (dist < 120) {
            ctx.strokeStyle = "rgba(255,255,255,0.08)"
            ctx.beginPath()
            ctx.moveTo(d.x, d.y)
            ctx.lineTo(o.x, o.y)
            ctx.stroke()
          }
        })

        if (mouse.x) {
          const dist = Math.hypot(d.x - mouse.x, d.y - mouse.y)
          if (dist < 150) {
            ctx.strokeStyle = "rgba(255,193,7,0.4)"
            ctx.beginPath()
            ctx.moveTo(d.x, d.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  /* COUNTER */
  const Counter = ({ end }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let start = 0
      const interval = setInterval(() => {
        start += Math.ceil(end / 50)
        if (start >= end) {
          setCount(end)
          clearInterval(interval)
        } else setCount(start)
      }, 30)
    }, [end])

    return <span>{count}+</span>
  }

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden text-white"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(255,193,7,0.15), transparent 40%),
            radial-gradient(circle at bottom right, rgba(0,255,200,0.12), transparent 45%),
            linear-gradient(135deg, #0f172a 0%, #020617 60%, #000000 100%)
          `,
        }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-90" />

        <div className="relative z-10 w-full flex justify-center">
          <div className="max-w-3xl text-center px-4 backdrop-blur-[2px] animate-fadeUp">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Aman Security Agency
            </h1>

            <p className="mt-5 text-lg text-gray-300">
              Operating under PSARA Act, 2005
            </p>

            <p className="mt-2 text-lg text-gray-300">
              ISO 9001:2015 Certified Security Services
            </p>

            <p className="mt-4 text-gray-400">
              Reliable • Professional • Affordable Protection
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a
                href="tel:+917627043748"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/917627043748"
                className="border border-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GLASS INFO CARDS */}
      <section className="-mt-28 relative z-20 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "PSARA Licensed & ISO Certified",
            "Verified & Trained Security Staff",
            "24×7 Monitoring & Support",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl border border-white/20
              text-white p-6 rounded-xl shadow-lg text-center
              hover:scale-105 transition"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          <ScrollStat end={500} label="Trained Guards" Counter={Counter} />
          <ScrollStat end={200} label="Sites Secured" Counter={Counter} />
          <ScrollStat end={15} label="Years Experience" Counter={Counter} />
          <ScrollStat end={24} label="24×7 Support" Counter={Counter} />
        </div>
      </section>

     {/* FOUNDER & OWNER SECTION */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">
            Leadership Behind Our Success
          </h2>
          <p className="mt-3 text-gray-600 max-w-4xl mx-auto">
            Aman Security Agency is driven by strong leadership with clear
            vision and professional operational management.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* FOUNDER */}
          <div className="bg-gray-100 p-8 rounded shadow text-center">
            <h3 className="text-2xl font-bold">Diwan Singh</h3>
            <p className="text-accent font-semibold mb-4">Founder</p>
            <p className="mt-3 text-accent ">
            📞 +91 8279255854
          </p>

            <p className="text-gray-700">
              The founder of Aman Security Agency laid the foundation with a
              vision to deliver disciplined, trained and trustworthy security
              services under PSARA and ISO quality standards.
            </p>

            <ul className="mt-4 text-gray-700 space-y-2 text-sm">
              <li>✔ Vision & strategic planning</li>
              <li>✔ PSARA & compliance expertise</li>
              <li>✔ Security training framework</li>
            </ul>
          </div>

          {/* OWNER */}
          <div className="bg-gray-100 p-8 rounded shadow text-center">
            <h3 className="text-2xl font-bold">Sushil Baisla</h3>
            <p className="text-accent font-semibold mb-4">
              Owner & Operations Head
            </p>
            <p className="mt-3 text-accent ">
            📞 +91 7627043748
          </p>

            <p className="text-gray-700">
              As the Owner and Operations Head, he manages day-to-day security
              operations, guard deployment, client coordination and 24×7
              service.
            </p>

            <ul className="mt-4 text-gray-700 space-y-2 text-sm">
              <li>✔ Operations & manpower management</li>
              <li>✔ Client coordination</li>
              <li>✔ 24×7 operational support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Security Guards",
              "Bouncer Services",
              "Armed Security",
              "Residential Security",
              "Industrial Security",
              "Event Security",
            ].map((s, i) => (
              <div key={i} className="p-6 shadow border-t-4 border-yellow-400">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold">
          Need Professional Security Services?
        </h2>
        <p className="mt-4">
          Call Aman Security Agency for quick deployment
        </p>
        <a
          href="tel:+917627043748"
          className="inline-block mt-6 bg-yellow-400 text-black px-10 py-3 rounded-full font-semibold"
        >
          Call Now
        </a>
      </section>

      <Footer />
    </>
  )
}

/* SCROLL STAT COMPONENT */
function ScrollStat({ end, label, Counter }) {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div ref={ref}>
      <h3 className="text-4xl font-bold text-yellow-500">
        {inView ? <Counter end={end} /> : "0+"}
      </h3>
      <p>{label}</p>
    </div>
  )
}
