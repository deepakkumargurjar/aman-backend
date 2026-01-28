import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="bg-black text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Security Services
        </h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          Aman Security Agency provides professional, trained and reliable
          security personnel for residential, commercial and industrial needs.
        </p>
      </section>

      {/* SERVICES LIST */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">
            Services We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            {/* SERVICE CARD */}
            {[
              {
                title: "Security Guard Services",
                desc: "Trained and verified security guards for offices, MNCs, BPOs and commercial hubs.",
              },
              {
                title: "Residential Security",
                desc: "Complete security solutions for apartments, societies and residential complexes.",
              },
              {
                title: "Bouncer Services",
                desc: "Professional bouncers for clubs, hotels, events and private functions.",
              },
              {
                title: "Armed Security (Gunmen)",
                desc: "Licensed armed guards for high-risk locations and sensitive assets.",
              },
              {
                title: "Industrial Security",
                desc: "Security services for factories, warehouses and industrial premises.",
              },
              {
                title: "School & College Security",
                desc: "Safe and disciplined security staff for educational institutions.",
              },
              {
                title: "Event Security",
                desc: "Crowd management and event security for public and private events.",
              },
              {
                title: "Office & Corporate Security",
                desc: "Professional guards ensuring access control and workplace safety.",
              },
              {
                title: "Personal / VIP Security",
                desc: "Discreet and trained security personnel for individuals and VIPs.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow border-t-4 border-accent"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY OUR SERVICES */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold">
            Why Our Security Services?
          </h2>

          <p className="mt-4 text-gray-700">
            All our security personnel undergo strict background verification
            and professional training in surveillance, emergency response,
            health & safety and customer service.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center px-4">
        <h2 className="text-2xl font-bold">
          Need Any Security Service?
        </h2>

        <p className="mt-3">
          Contact us today for customized security solutions.
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

  <a
    href="mailto:operation@amansecurityservices.com"
    className="border border-accent px-8 py-3 rounded"
  >
    Email Us
  </a>
</div>

      </section>

      <Footer />
    </>
  )
}
