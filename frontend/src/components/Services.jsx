const services = [
  "Security Guards",
  "Bouncers",
  "Armed Gunmen",
  "Office & MNC Security",
  "School & College Security",
  "Industrial Security",
  "Event Security",
  "Residential Security",
]

export default function Services() {
  return (
    <section className="py-14 bg-gray-100">
      <h3 className="text-center text-2xl font-bold mb-8">
        Our Services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-4 shadow border-l-4 border-accent"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  )
}
